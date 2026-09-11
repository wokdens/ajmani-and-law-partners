import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";

function checkAuth(): boolean {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("alp_admin_auth");
  return authCookie?.value === "authenticated";
}

const inquiriesFilePath = path.join(process.cwd(), "src", "data", "inquiries.json");

function getInquiries() {
  try {
    if (fs.existsSync(inquiriesFilePath)) {
      return JSON.parse(fs.readFileSync(inquiriesFilePath, "utf8"));
    }
  } catch (err) {
    console.error("Error reading inquiries:", err);
  }
  return [];
}

function saveInquiries(inquiries: any[]) {
  fs.writeFileSync(inquiriesFilePath, JSON.stringify(inquiries, null, 2), "utf8");
}

export async function GET() {
  try {
    if (!checkAuth()) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }
    const inquiries = getInquiries();
    return NextResponse.json({ success: true, inquiries });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch inquiries." },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    if (!checkAuth()) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, status } = body;

    const inquiries = getInquiries();
    const index = inquiries.findIndex((i: any) => i.id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, message: "Inquiry not found." },
        { status: 404 }
      );
    }

    inquiries[index].status = status || "Contacted";
    saveInquiries(inquiries);

    return NextResponse.json({
      success: true,
      message: "Inquiry status updated.",
      inquiry: inquiries[index],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update inquiry." },
      { status: 500 }
    );
  }
}

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

    let inquiries = getInquiries();
    inquiries = inquiries.filter((i: any) => i.id !== id);
    saveInquiries(inquiries);

    return NextResponse.json({ success: true, message: "Inquiry removed." });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to delete inquiry." },
      { status: 500 }
    );
  }
}
