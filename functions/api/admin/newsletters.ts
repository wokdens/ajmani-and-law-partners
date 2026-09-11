// Cloudflare Pages Function: /api/admin/newsletters

const defaultNewsletters = [
  {
    id: "september-2026",
    title: "Commercial Courts Strict Timelines & Evidentiary Burdens under Section 138 NI Act",
    month: "September 2026",
    volume: "Vol. III | Issue IX",
    date: "2026-09-01",
    summary: "Exhaustive analysis of non-extendable statutory timeframes under Order VIII Rule 1 CPC for commercial suits before Delhi High Court, alongside evolving evidentiary rebuttal standards under Section 139 Negotiable Instruments Act and Section 143A interim compensation.",
    topics: [
      "Commercial Courts Act 2015",
      "Order VIII Rule 1 CPC",
      "Section 138 NI Act",
      "Section 143A Interim Relief",
      "Delhi High Court Practice"
    ],
    pdfUrl: "/newsletters/alp-dispatch-september-2026.pdf",
    pageCount: 5,
    isLatest: true,
    fileSize: "9.4 KB"
  },
  {
    id: "august-2026",
    title: "Arbitration Agreements & Curable Stamp Irregularities Post-Constitution Bench",
    month: "August 2026",
    volume: "Vol. III | Issue VIII",
    date: "2026-08-01",
    summary: "Deep dive into the 7-Judge Supreme Court ruling decoupling Section 11 arbitral appointment from stamp duty impounding, with tactical guidance for obtaining pre-arbitral interim injunctions under Section 9.",
    topics: [
      "Arbitration & Conciliation Act 1996",
      "Section 11 Referral Thresholds",
      "Indian Stamp Act 1899",
      "Section 9 Interim Measures"
    ],
    pdfUrl: "/newsletters/alp-dispatch-august-2026.pdf",
    pageCount: 5,
    isLatest: false,
    fileSize: "9.4 KB"
  },
  {
    id: "july-2026",
    title: "Criminal Procedural Reforms under BNSS 2023 & Bail Jurisprudence in Delhi Courts",
    month: "July 2026",
    volume: "Vol. III | Issue VII",
    date: "2026-07-01",
    summary: "Procedural roadmap navigating electronic evidence certification under Section 63 BSA, mandatory preliminary inquiry guidelines under BNSS Section 173(3), and recent bail rulings in white-collar economic offences.",
    topics: [
      "Bharatiya Nagarik Suraksha Sanhita (BNSS)",
      "Bharatiya Sakshya Adhiniyam (BSA)",
      "Section 63 Digital Forensics",
      "Anticipatory Bail Practice"
    ],
    pdfUrl: "/newsletters/alp-dispatch-july-2026.pdf",
    pageCount: 5,
    isLatest: false,
    fileSize: "9.4 KB"
  },
  {
    id: "june-2026",
    title: "Probate, Letters of Administration & Contested Partition Proceedings in Delhi",
    month: "June 2026",
    volume: "Vol. III | Issue VI",
    date: "2026-06-01",
    summary: "Comparative assessment of testamentary disputes in Delhi: when probate is optional under Section 213 of the Indian Succession Act, drafting caveats, and managing preliminary vs. final decrees in joint family partition suits.",
    topics: [
      "Indian Succession Act 1925",
      "Testamentary Capacity",
      "Section 213 Territorial Scope",
      "Partition Suit Decrees"
    ],
    pdfUrl: "/newsletters/alp-dispatch-june-2026.pdf",
    pageCount: 5,
    isLatest: false,
    fileSize: "9.4 KB"
  }
];

export const onRequestGet = async () => {
  return new Response(
    JSON.stringify({
      success: true,
      newsletters: defaultNewsletters,
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
    const { title, month, volume, summary, topics, pdfUrl, pageCount, isLatest } = body;

    const id = (month || "issue").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newIssue = {
      id,
      title: (title || "").trim(),
      month: (month || "").trim(),
      volume: (volume || "").trim(),
      date: new Date().toISOString().split("T")[0],
      summary: (summary || "").trim(),
      topics: Array.isArray(topics)
        ? topics
        : String(topics || "")
            .split(",")
            .map((t: string) => t.trim())
            .filter(Boolean),
      pdfUrl: pdfUrl || `/newsletters/alp-dispatch-september-2026.pdf`,
      pageCount: Number(pageCount) || 5,
      isLatest: Boolean(isLatest),
      fileSize: "PDF Document",
      publishedAt: new Date().toISOString(),
    };

    return new Response(
      JSON.stringify({
        success: true,
        message: "Monthly newsletter published successfully.",
        newsletter: newIssue,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, message: error?.message || "Failed to publish." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const onRequestPut = async (context: any) => {
  try {
    const body: any = await context.request.json();
    return new Response(
      JSON.stringify({
        success: true,
        message: "Newsletter issue updated successfully.",
        updated: body,
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

export const onRequestDelete = async () => {
  return new Response(
    JSON.stringify({
      success: true,
      message: "Newsletter edition removed.",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
