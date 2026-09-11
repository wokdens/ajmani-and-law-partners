import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";

function checkAuth(): boolean {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("alp_admin_auth");
  return authCookie?.value === "authenticated";
}

export async function POST(request: Request) {
  try {
    if (!checkAuth()) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file provided for upload." },
        { status: 400 }
      );
    }

    // Ensure valid PDF extension / MIME
    const fileName = file.name.toLowerCase().replace(/[^a-z0-9_.-]+/g, "-");
    if (!fileName.endsWith(".pdf")) {
      return NextResponse.json(
        { success: false, message: "Only official PDF documents are accepted." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const targetDir = path.join(process.cwd(), "public", "newsletters");

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetFilePath = path.join(targetDir, fileName);
    fs.writeFileSync(targetFilePath, buffer);

    const publicUrl = `/newsletters/${fileName}`;

    return NextResponse.json({
      success: true,
      message: "PDF newsletter uploaded successfully.",
      url: publicUrl,
      fileName,
      size: `${(file.size / 1024).toFixed(1)} KB`,
    });
  } catch (error) {
    console.error("PDF upload error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process PDF upload." },
      { status: 500 }
    );
  }
}
