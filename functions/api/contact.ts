// Cloudflare Pages Function: /api/contact

export const onRequestPost = async (context: any) => {
  try {
    const data: any = await context.request.json();
    const { fullName, email, phone, matterType, preferredMethod, description, consent, website_honeypot } = data;

    // Honeypot spam check
    if (website_honeypot) {
      return new Response(
        JSON.stringify({ success: true, message: "Inquiry received." }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!fullName || !email || !phone || !description) {
      return new Response(
        JSON.stringify({ success: false, message: "Please provide all required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!consent) {
      return new Response(
        JSON.stringify({ success: false, message: "Please accept the regulatory disclaimer before submitting." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Inquiry successfully submitted. Our litigation desk will contact you during standard chamber hours.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, message: error?.message || "Failed to submit inquiry." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
