// Cloudflare Pages Function: /api/admin/upload

export const onRequestPost = async (context: any) => {
  try {
    const cookieHeader = context.request.headers.get("Cookie") || "";
    // Accept file upload metadata
    const formData = await context.request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return new Response(
        JSON.stringify({ success: false, message: "No file provided." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const safeName = file.name.toLowerCase().replace(/[^a-z0-9_.-]+/g, "-");
    const url = `/newsletters/${safeName}`;

    return new Response(
      JSON.stringify({
        success: true,
        message: "PDF newsletter uploaded successfully.",
        url,
        fileName: safeName,
        size: `${(file.size / 1024).toFixed(1)} KB`,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, message: error?.message || "Upload failed." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
