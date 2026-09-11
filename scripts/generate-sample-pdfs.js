const fs = require("fs");
const path = require("path");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

async function createLegalDispatch({ fileName, monthYear, volumeIssue, themeTitle, leadArticle }) {
  const pdfDoc = await PDFDocument.create();
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const navy = rgb(0.04, 0.07, 0.16); // #0A1128
  const brass = rgb(0.65, 0.49, 0.32); // #a67c52
  const charcoal = rgb(0.2, 0.2, 0.2);
  const lightBg = rgb(0.97, 0.96, 0.94);
  const white = rgb(1, 1, 1);

  const addHeaderFooter = (page, pageNum, totalPages) => {
    const { width, height } = page.getSize();
    // Top border rule
    page.drawLine({
      start: { x: 40, y: height - 40 },
      end: { x: width - 40, y: height - 40 },
      thickness: 1,
      color: brass,
    });
    // Running header
    page.drawText("AJMANI & LAW PARTNERS  |  MONTHLY LEGAL DISPATCH", {
      x: 40,
      y: height - 32,
      size: 8,
      font: helveticaBold,
      color: navy,
    });
    page.drawText(`${monthYear}  •  ${volumeIssue}`, {
      x: width - 160,
      y: height - 32,
      size: 8,
      font: helvetica,
      color: charcoal,
    });

    // Bottom border rule
    page.drawLine({
      start: { x: 40, y: 40 },
      end: { x: width - 40, y: 40 },
      thickness: 0.5,
      color: brass,
    });
    // Running footer
    page.drawText("For private circulation only. Strict compliance with Bar Council of India Rule 36.", {
      x: 40,
      y: 28,
      size: 7,
      font: helvetica,
      color: charcoal,
    });
    page.drawText(`Page ${pageNum} of ${totalPages}`, {
      x: width - 90,
      y: 28,
      size: 8,
      font: helveticaBold,
      color: navy,
    });
  };

  // -------------------------------------------------------------
  // PAGE 1: COVER & FOREWORD
  // -------------------------------------------------------------
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page1.getSize();

  // Top masthead block
  page1.drawRectangle({
    x: 40,
    y: height - 160,
    width: width - 80,
    height: 110,
    color: navy,
  });

  page1.drawText("AJMANI & LAW PARTNERS", {
    x: 60,
    y: height - 85,
    size: 22,
    font: timesBold,
    color: white,
  });

  page1.drawText("ADVOCATES & LEGAL CONSULTANTS  •  NEW DELHI", {
    x: 60,
    y: height - 105,
    size: 10,
    font: helveticaBold,
    color: brass,
  });

  page1.drawText(`MONTHLY LEGAL DISPATCH — ${monthYear.toUpperCase()} EDITION`, {
    x: 60,
    y: height - 135,
    size: 11,
    font: helvetica,
    color: white,
  });

  page1.drawText(volumeIssue, {
    x: width - 180,
    y: height - 135,
    size: 10,
    font: helveticaBold,
    color: brass,
  });

  // Featured Theme Title
  page1.drawText("FEATURED EDITORIAL THEME", {
    x: 40,
    y: height - 195,
    size: 9,
    font: helveticaBold,
    color: brass,
  });

  page1.drawText(themeTitle, {
    x: 40,
    y: height - 225,
    size: 17,
    font: timesBold,
    color: navy,
  });

  // Foreword Box
  page1.drawRectangle({
    x: 40,
    y: height - 440,
    width: width - 80,
    height: 195,
    color: lightBg,
    borderColor: brass,
    borderWidth: 1,
  });

  page1.drawText("MANAGING PARTNER'S FOREWORD", {
    x: 55,
    y: height - 265,
    size: 10,
    font: helveticaBold,
    color: navy,
  });

  const forewordLines = [
    "Dear Colleagues and Clients,",
    "",
    "Welcome to the monthly legal dispatch published by Ajmani & Law Partners. The landscape of commercial dispute",
    "resolution before the Hon'ble High Court of Delhi and District Commercial Courts continues to witness decisive",
    "statutory refinements. Modern commercial adjudication demands uncompromising adherence to procedural mandates,",
    "structured evidentiary filing, and pre-litigation discipline under the Commercial Courts Act, 2015.",
    "",
    "In this issue, we analyze recent procedural precedents in summary commercial suits, evidentiary burdens under",
    "Section 138 of the Negotiable Instruments Act, 1881, and the enforceability thresholds for arbitration agreements.",
    "Our litigation desk remains committed to delivering grounded, substantive analysis for in-house counsel and litigants.",
    "",
    "Warm regards,",
    "Lalit Ajmani, Advocate",
    "Managing Partner, Ajmani & Law Partners | Enrolment No. D/5332/2017"
  ];

  let forewordY = height - 285;
  for (const line of forewordLines) {
    page1.drawText(line, {
      x: 55,
      y: forewordY,
      size: 8.5,
      font: line.startsWith("Lalit") ? timesBold : timesRoman,
      color: charcoal,
    });
    forewordY -= 12;
  }

  // Table of Contents
  page1.drawText("TABLE OF CONTENTS & DISPATCH OUTLINE", {
    x: 40,
    y: height - 470,
    size: 10,
    font: helveticaBold,
    color: brass,
  });

  const tocItems = [
    { page: "Page 2", title: "Commercial Courts Practice: Mandatory Pre-Institution Mediation & Written Statements" },
    { page: "Page 3", title: "Negotiable Instruments Act: Presumption under Section 139 and Standard of Proof" },
    { page: "Page 4", title: "Arbitration Jurisprudence: Section 11 Referral Thresholds & Stamp Duty Settlement" },
    { page: "Page 5", title: "Criminal Procedure Reforms (BNSS) & Chambers Practice Directory" },
  ];

  let tocY = height - 500;
  for (const item of tocItems) {
    page1.drawText(item.page, {
      x: 45,
      y: tocY,
      size: 9,
      font: helveticaBold,
      color: navy,
    });
    page1.drawText(item.title, {
      x: 105,
      y: tocY,
      size: 9,
      font: timesRoman,
      color: charcoal,
    });
    tocY -= 20;
  }

  // Bottom Notice
  page1.drawText("Bar Council of India Rule 36 Disclaimer:", {
    x: 40,
    y: 75,
    size: 7.5,
    font: helveticaBold,
    color: charcoal,
  });
  page1.drawText(
    "This publication is distributed solely for private informational and educational purposes. It does not constitute legal advice",
    { x: 40, y: 63, size: 7, font: helvetica, color: charcoal }
  );
  page1.drawText(
    "nor does it solicit or advertise legal representation. Readers are advised to seek independent counsel for specific matters.",
    { x: 40, y: 53, size: 7, font: helvetica, color: charcoal }
  );

  // -------------------------------------------------------------
  // PAGE 2: COMMERCIAL LITIGATION
  // -------------------------------------------------------------
  const page2 = pdfDoc.addPage([595.28, 841.89]);
  addHeaderFooter(page2, 2, 5);

  page2.drawText("COMMERCIAL DISPUTE RESOLUTION", {
    x: 40,
    y: height - 70,
    size: 10,
    font: helveticaBold,
    color: brass,
  });

  page2.drawText("Strict Timelines under Order VIII Rule 1 CPC in Commercial Suits", {
    x: 40,
    y: height - 95,
    size: 16,
    font: timesBold,
    color: navy,
  });

  const p2Body = [
    "The Hon'ble High Court of Delhi has consistently reinforced the mandatory, non-extendable nature of timelines",
    "prescribed under the Commercial Courts Act, 2015. Unlike ordinary civil proceedings under the Code of Civil Procedure,",
    "1908, where delay in filing the written statement beyond 90 days may occasionally be condoned upon showing exceptional",
    "grounds, the statutory 120-day limit in commercial disputes is absolute.",
    "",
    "Key Principles from Recent Delhi High Court Judgments:",
    "1. Forfeiture of Right to File Defence: Upon the expiry of 120 days from service of summons, the defendant's right to file",
    "   the written statement stands permanently forfeited. The court possesses no discretionary jurisdiction to extend time.",
    "2. Mandatory Pre-Institution Mediation: Under Section 12A of the Act, pre-institution mediation is an indispensable",
    "   prerequisite unless urgent interim relief is genuinely prayed for and justified on the face of the plaint.",
    "3. Statement of Truth & Discovery: Pleadings unaccompanied by a verified Statement of Truth and complete disclosure",
    "   of documents under Order XI CPC are treated as defective and liable to be struck off.",
    "",
    "Litigation Strategy for In-House Counsel:",
    "Parties responding to commercial plaints must initiate evidence preservation and advocate briefing immediately upon",
    "receipt of the summons. Relying on routine procedural adjournments in commercial courts carries catastrophic risks.",
  ];

  let p2Y = height - 130;
  for (const line of p2Body) {
    page2.drawText(line, {
      x: 40,
      y: p2Y,
      size: 9,
      font: line.startsWith("Key") || line.startsWith("Litigation") ? helveticaBold : timesRoman,
      color: charcoal,
    });
    p2Y -= 15;
  }

  // -------------------------------------------------------------
  // PAGE 3: SECTION 138 NI ACT
  // -------------------------------------------------------------
  const page3 = pdfDoc.addPage([595.28, 841.89]);
  addHeaderFooter(page3, 3, 5);

  page3.drawText("BANKING & FINANCIAL OFFENCES", {
    x: 40,
    y: height - 70,
    size: 10,
    font: helveticaBold,
    color: brass,
  });

  page3.drawText("Evidentiary Presumptions & Interim Compensation under Section 143A NI Act", {
    x: 40,
    y: height - 95,
    size: 16,
    font: timesBold,
    color: navy,
  });

  const p3Body = [
    "Prosecution under Section 138 of the Negotiable Instruments Act, 1881 requires meticulous statutory compliance at",
    "every pre-complaint stage. The statutory notice must be dispatched within 30 days of the cheque return memo, demanding",
    "the exact dishonoured amount without confounding unrelated claims.",
    "",
    "Presumption under Section 139 & Rebuttal Standards:",
    "Once the signature on the cheque is admitted or proved, the court is bound to raise the statutory presumption under",
    "Sections 118 and 139 that the cheque was issued in discharge of an existing, legally enforceable debt or liability.",
    "However, the accused is not required to establish defence beyond reasonable doubt; a standard of 'preponderance of",
    "probabilities' suffices, which may be elicited during cross-examination of the complainant.",
    "",
    "Discretionary Nature of Section 143A Interim Compensation:",
    "Following authoritative precedents, the award of interim compensation up to 20% of the cheque amount under Section",
    "143A is discretionary, not mandatory. Trial courts must evaluate prima facie merit, financial prejudice, and",
    "bona fide defence before directing deposit.",
  ];

  let p3Y = height - 130;
  for (const line of p3Body) {
    page3.drawText(line, {
      x: 40,
      y: p3Y,
      size: 9,
      font: line.startsWith("Presumption") || line.startsWith("Discretionary") ? helveticaBold : timesRoman,
      color: charcoal,
    });
    p3Y -= 15;
  }

  // -------------------------------------------------------------
  // PAGE 4: ARBITRATION & MEDIATION
  // -------------------------------------------------------------
  const page4 = pdfDoc.addPage([595.28, 841.89]);
  addHeaderFooter(page4, 4, 5);

  page4.drawText("ARBITRATION JURISPRUDENCE", {
    x: 40,
    y: height - 70,
    size: 10,
    font: helveticaBold,
    color: brass,
  });

  page4.drawText("Section 11 Referral & The Stamp Duty Enforceability Landscape", {
    x: 40,
    y: height - 95,
    size: 16,
    font: timesBold,
    color: navy,
  });

  const p4Body = [
    "The 7-Judge Constitution Bench ruling in 'In Re: Interplay Between Arbitration Agreements under the Arbitration and",
    "Conciliation Act, 1996 and the Indian Stamp Act, 1899' settled the contentious issue of unstamped contracts.",
    "",
    "Core Legal Findings:",
    "1. Non-stamping is a Curable Irregularity: Non-payment or deficiency of stamp duty does not render the underlying",
    "   contract void ab initio. The arbitration agreement retains autonomous procedural validity.",
    "2. Prima Facie Review under Section 11: The referral court under Section 11(6) is confined to verifying the formal",
    "   existence of an arbitration agreement. Substantive stamping objections are deferred to the arbitral tribunal.",
    "3. Interim Measures under Section 9: Commercial courts and the High Court may entertain applications for urgent",
    "   interim protection under Section 9 even if the agreement is deficiently stamped, safeguarding assets from dissipation.",
  ];

  let p4Y = height - 130;
  for (const line of p4Body) {
    page4.drawText(line, {
      x: 40,
      y: p4Y,
      size: 9,
      font: line.startsWith("Core") ? helveticaBold : timesRoman,
      color: charcoal,
    });
    p4Y -= 15;
  }

  // -------------------------------------------------------------
  // PAGE 5: CRIMINAL JURISPRUDENCE & FIRM DIRECTORY
  // -------------------------------------------------------------
  const page5 = pdfDoc.addPage([595.28, 841.89]);
  addHeaderFooter(page5, 5, 5);

  page5.drawText("PRACTICE DIRECTORY & CHAMBER DESK", {
    x: 40,
    y: height - 70,
    size: 10,
    font: helveticaBold,
    color: brass,
  });

  page5.drawText("Ajmani & Law Partners — Litigation Chambers & Contacts", {
    x: 40,
    y: height - 95,
    size: 16,
    font: timesBold,
    color: navy,
  });

  page5.drawRectangle({
    x: 40,
    y: height - 320,
    width: width - 80,
    height: 205,
    color: navy,
  });

  page5.drawText("PRINCIPAL ADVOCATE & LEADERSHIP", {
    x: 60,
    y: height - 135,
    size: 11,
    font: helveticaBold,
    color: brass,
  });

  page5.drawText("Advocate Lalit Ajmani (Managing Partner)", {
    x: 60,
    y: height - 155,
    size: 14,
    font: timesBold,
    color: white,
  });

  page5.drawText("Bar Council of Delhi Enrolment: D/5332/2017", {
    x: 60,
    y: height - 175,
    size: 9,
    font: helvetica,
    color: white,
  });

  page5.drawText("Primary Practice: Hon'ble High Court of Delhi, District Commercial Courts & Tribunals", {
    x: 60,
    y: height - 195,
    size: 9,
    font: helvetica,
    color: brass,
  });

  page5.drawText("CHAMBER LOCATIONS & CONTACT DETAILS:", {
    x: 60,
    y: height - 225,
    size: 10,
    font: helveticaBold,
    color: white,
  });

  page5.drawText("Chambers: C4G-17A, Janakpuri, New Delhi – 110058 (Near Mata Chanan Devi Hospital)", {
    x: 60,
    y: height - 245,
    size: 9,
    font: helvetica,
    color: white,
  });

  page5.drawText("Direct Mobile: +91 96544 31469   |   Official Email: lalit@ajmaniandlawpartners.com", {
    x: 60,
    y: height - 265,
    size: 9,
    font: helveticaBold,
    color: brass,
  });

  page5.drawText("Website: https://ajmaniandlawpartners.com", {
    x: 60,
    y: height - 285,
    size: 9,
    font: helvetica,
    color: white,
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(process.cwd(), "public", "newsletters", fileName);
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Generated: ${fileName} (${pdfBytes.length} bytes, 5 pages)`);
}

async function run() {
  const issues = [
    {
      fileName: "alp-dispatch-september-2026.pdf",
      monthYear: "September 2026",
      volumeIssue: "Vol. III | Issue IX",
      themeTitle: "Commercial Courts Strict Timelines & Evidentiary Burdens under Section 138 NI Act",
    },
    {
      fileName: "alp-dispatch-august-2026.pdf",
      monthYear: "August 2026",
      volumeIssue: "Vol. III | Issue VIII",
      themeTitle: "Arbitration Agreements & Curable Stamp Irregularities Post-Constitution Bench",
    },
    {
      fileName: "alp-dispatch-july-2026.pdf",
      monthYear: "July 2026",
      volumeIssue: "Vol. III | Issue VII",
      themeTitle: "Criminal Procedural Reforms under BNSS 2023 & Bail Jurisprudence in Delhi Courts",
    },
    {
      fileName: "alp-dispatch-june-2026.pdf",
      monthYear: "June 2026",
      volumeIssue: "Vol. III | Issue VI",
      themeTitle: "Probate, Letters of Administration & Contested Partition Proceedings in Delhi",
    },
  ];

  for (const issue of issues) {
    await createLegalDispatch(issue);
  }
}

run().catch(console.error);
