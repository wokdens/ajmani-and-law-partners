// Cloudflare Pages Function: /api/admin/settings

interface SiteSettings {
  fontSizeScale: number;
  fontSizeLevel: string;
  ambientBackgroundEnabled: boolean;
}

const defaultSettings: SiteSettings = {
  fontSizeScale: 100,
  fontSizeLevel: "normal",
  ambientBackgroundEnabled: true,
};

export const onRequestGet = async () => {
  return new Response(
    JSON.stringify({
      success: true,
      settings: defaultSettings,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const onRequestPost = async (context: any) => {
  try {
    const body: any = await context.request.json();
    let { fontSizeScale, fontSizeLevel, ambientBackgroundEnabled } = body;

    let scaleNum = fontSizeScale !== undefined ? Number(fontSizeScale) : 100;
    if (isNaN(scaleNum) || scaleNum < 80 || scaleNum > 140) {
      scaleNum = 100;
    }

    let level = fontSizeLevel || "normal";
    if (fontSizeScale !== undefined && !fontSizeLevel) {
      if (scaleNum <= 92) level = "compact";
      else if (scaleNum <= 102) level = "normal";
      else if (scaleNum <= 112) level = "medium";
      else if (scaleNum <= 122) level = "large";
      else level = "extra-large";
    }

    const isBgEnabled =
      ambientBackgroundEnabled !== undefined
        ? Boolean(ambientBackgroundEnabled)
        : true;

    const settings: SiteSettings = {
      fontSizeScale: Math.round(scaleNum),
      fontSizeLevel: level,
      ambientBackgroundEnabled: isBgEnabled,
    };

    return new Response(
      JSON.stringify({
        success: true,
        message: "Site settings successfully updated.",
        settings,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        message: error?.message || "Failed to update settings.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
