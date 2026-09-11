import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSiteSettings, saveSiteSettings, SiteSettings } from "@/data/settings";

function checkAuth(): boolean {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("alp_admin_auth");
  return authCookie?.value === "authenticated";
}

// GET /api/admin/settings - Get current site settings
export async function GET() {
  try {
    const settings = getSiteSettings();
    return NextResponse.json({ success: true, settings });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to retrieve site settings." },
      { status: 500 }
    );
  }
}

// POST /api/admin/settings - Update site settings (font size scale)
export async function POST(request: Request) {
  try {
    if (!checkAuth()) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Administrator authentication required." },
        { status: 401 }
      );
    }

    const currentSettings = getSiteSettings();
    const body = await request.json();
    let { fontSizeScale, fontSizeLevel, ambientBackgroundEnabled } = body;

    let scaleNum = currentSettings.fontSizeScale;
    if (fontSizeScale !== undefined) {
      scaleNum = Number(fontSizeScale);
      if (isNaN(scaleNum) || scaleNum < 80 || scaleNum > 140) {
        return NextResponse.json(
          { success: false, message: "Font size scale must be between 80% and 140%." },
          { status: 400 }
        );
      }
    }

    let level = fontSizeLevel || currentSettings.fontSizeLevel;
    if (!level && fontSizeScale !== undefined) {
      if (scaleNum <= 92) level = "compact";
      else if (scaleNum <= 102) level = "normal";
      else if (scaleNum <= 112) level = "medium";
      else if (scaleNum <= 122) level = "large";
      else level = "extra-large";
    }

    const isBgEnabled =
      ambientBackgroundEnabled !== undefined
        ? Boolean(ambientBackgroundEnabled)
        : currentSettings.ambientBackgroundEnabled ?? true;

    const newSettings: SiteSettings = {
      fontSizeScale: Math.round(scaleNum),
      fontSizeLevel: level,
      ambientBackgroundEnabled: isBgEnabled,
    };

    saveSiteSettings(newSettings);

    return NextResponse.json({
      success: true,
      message: `Site settings successfully updated.`,
      settings: newSettings,
    });
  } catch (error: any) {
    console.error("Error updating site settings:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update site settings." },
      { status: 500 }
    );
  }
}
