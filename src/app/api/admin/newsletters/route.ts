import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getNewsletters, saveNewsletters, NewsletterIssue } from "@/data/newsletters";

function checkAuth(): boolean {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("alp_admin_auth");
  return authCookie?.value === "authenticated";
}

// GET /api/admin/newsletters - List all newsletters
export async function GET() {
  try {
    const list = getNewsletters();
    return NextResponse.json({ success: true, newsletters: list });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to retrieve newsletters." },
      { status: 500 }
    );
  }
}

// POST /api/admin/newsletters - Add a new newsletter
export async function POST(request: Request) {
  try {
    if (!checkAuth()) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Please authenticate as administrator." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, month, volume, summary, topics, pdfUrl, isLatest, pageCount } = body;

    if (!title || !month || !volume || !summary) {
      return NextResponse.json(
        { success: false, message: "Please provide all required newsletter fields." },
        { status: 400 }
      );
    }

    const newsletters = getNewsletters();
    const id = month.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    // If marked as latest, unmark others
    if (isLatest) {
      newsletters.forEach((n) => (n.isLatest = false));
    }

    const newIssue: NewsletterIssue = {
      id,
      title: title.trim(),
      month: month.trim(),
      volume: volume.trim(),
      date: new Date().toISOString().split("T")[0],
      summary: summary.trim(),
      topics: Array.isArray(topics)
        ? topics
        : String(topics)
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
      pdfUrl: pdfUrl || `/newsletters/alp-dispatch-${id}.pdf`,
      pageCount: Number(pageCount) || 5,
      isLatest: Boolean(isLatest),
      fileSize: "PDF Document",
      publishedAt: new Date().toISOString(),
    };

    // Prepend new issue
    newsletters.unshift(newIssue);
    saveNewsletters(newsletters);

    return NextResponse.json({
      success: true,
      message: "Monthly newsletter published successfully.",
      newsletter: newIssue,
    });
  } catch (error) {
    console.error("Error creating newsletter:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save newsletter issue." },
      { status: 500 }
    );
  }
}

// PUT /api/admin/newsletters - Update or toggle featured
export async function PUT(request: Request) {
  try {
    if (!checkAuth()) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, isLatest, title, summary, topics, pdfUrl } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Newsletter ID is required." },
        { status: 400 }
      );
    }

    const newsletters = getNewsletters();
    const index = newsletters.findIndex((n) => n.id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, message: "Newsletter not found." },
        { status: 404 }
      );
    }

    if (isLatest !== undefined) {
      if (isLatest) {
        newsletters.forEach((n) => (n.isLatest = false));
      }
      newsletters[index].isLatest = Boolean(isLatest);
    }

    if (title) newsletters[index].title = title.trim();
    if (summary) newsletters[index].summary = summary.trim();
    if (topics) {
      newsletters[index].topics = Array.isArray(topics)
        ? topics
        : String(topics)
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean);
    }
    if (pdfUrl) newsletters[index].pdfUrl = pdfUrl;

    saveNewsletters(newsletters);

    return NextResponse.json({
      success: true,
      message: "Newsletter updated successfully.",
      newsletter: newsletters[index],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update newsletter." },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/newsletters - Delete a newsletter
export async function DELETE(request: Request) {
  try {
    if (!checkAuth()) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Newsletter ID is required." },
        { status: 400 }
      );
    }

    let newsletters = getNewsletters();
    const exists = newsletters.some((n) => n.id === id);

    if (!exists) {
      return NextResponse.json(
        { success: false, message: "Newsletter not found." },
        { status: 404 }
      );
    }

    newsletters = newsletters.filter((n) => n.id !== id);

    // If we deleted the latest issue, set the new first one as latest
    if (newsletters.length > 0 && !newsletters.some((n) => n.isLatest)) {
      newsletters[0].isLatest = true;
    }

    saveNewsletters(newsletters);

    return NextResponse.json({
      success: true,
      message: "Newsletter deleted successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to delete newsletter." },
      { status: 500 }
    );
  }
}
