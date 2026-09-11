// Cloudflare Pages Function: /api/admin/auth
interface Env {
  ADMIN_PASSKEY?: string;
}

const DEFAULT_PASSKEY = "Ajmani@78";

export const onRequestPost = async (context: any) => {
  try {
    const body: any = await context.request.json();
    const passkey = body?.passkey;
    const expectedPasskey = context.env?.ADMIN_PASSKEY || DEFAULT_PASSKEY;

    if (!passkey || passkey !== expectedPasskey) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid administrative passkey." }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set(
      "Set-Cookie",
      "alp_admin_auth=authenticated; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800"
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "Administrative authentication successful.",
      }),
      { status: 200, headers }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        message: error?.message || "Authentication service error.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const onRequestGet = async (context: any) => {
  const cookieHeader = context.request.headers.get("Cookie") || "";
  const isAuthenticated = cookieHeader.includes("alp_admin_auth=authenticated");

  return new Response(
    JSON.stringify({ authenticated: isAuthenticated }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const onRequestDelete = async () => {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set(
    "Set-Cookie",
    "alp_admin_auth=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"
  );

  return new Response(
    JSON.stringify({ success: true, message: "Logged out successfully." }),
    { status: 200, headers }
  );
};
