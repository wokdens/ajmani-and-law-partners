// Cloudflare Pages Function: /api/admin/inquiries

const sampleInquiries = [
  {
    id: "inq-1725901200000",
    fullName: "Rajesh Malhotra",
    email: "rajesh.m@delhicorp.in",
    phone: "+91 98111 22334",
    matterType: "Commercial Litigation & High Court Disputes",
    preferredMethod: "Phone Call",
    description: "Urgent contractual arbitration dispute regarding supply agreement breach in Okhla industrial area; seeking section 9 interim stay application before Delhi High Court.",
    consent: true,
    status: "new",
    date: "2026-09-08T10:30:00Z"
  },
  {
    id: "inq-1725798000000",
    fullName: "Pooja Sharma",
    email: "pooja.legal@sharmafamily.org",
    phone: "+91 98712 34567",
    matterType: "Civil Litigation & Substantive Suits",
    preferredMethod: "Email",
    description: "Ancestral property partition suit pending at Tis Hazari Courts; seeking chamber consultation for filing objection and appointment of local commissioner.",
    consent: true,
    status: "in_review",
    date: "2026-09-06T14:15:00Z"
  }
];

export const onRequestGet = async () => {
  return new Response(
    JSON.stringify({
      success: true,
      inquiries: sampleInquiries,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const onRequestPut = async (context: any) => {
  try {
    const body: any = await context.request.json();
    return new Response(
      JSON.stringify({
        success: true,
        message: "Inquiry status updated successfully.",
        inquiry: body,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, message: error?.message || "Failed to update." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
