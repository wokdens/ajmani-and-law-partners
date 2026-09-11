import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const DEFAULT_PASSKEY = "Ajmani@78";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const passkey = body?.passkey;
    const expectedPasskey = process.env.ADMIN_PASSKEY || DEFAULT_PASSKEY;

    if (!passkey || passkey !== expectedPasskey) {
      return NextResponse.json(
        { success: false, message: "Invalid administrative passkey." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Administrative authentication successful.",
    });

    response.cookies.set({
      name: "alp_admin_auth",
      value: "authenticated",
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error: any) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Authentication service error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const cookieStore = cookies();
    const authCookie = cookieStore.get("alp_admin_auth");

    if (authCookie && authCookie.value === "authenticated") {
      return NextResponse.json({ authenticated: true });
    }
    return NextResponse.json({ authenticated: false });
  } catch (error) {
    return NextResponse.json({ authenticated: false });
  }
}

export async function DELETE() {
  try {
    const response = NextResponse.json({ success: true, message: "Logged out." });
    response.cookies.delete("alp_admin_auth");
    return response;
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
