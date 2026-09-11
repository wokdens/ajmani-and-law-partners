export interface PracticeArea {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  summary: string;
  heroExcerpt: string;
  statutes: string[];
  keyForums: string[];
  proceduralScope: string[];
  situationsCovered: {
    heading: string;
    description: string;
  }[];
  firmAssistance: string[];
  relatedSlug?: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "civil-litigation",
    title: "Civil Litigation & Substantive Suits",
    shortTitle: "Civil Litigation",
    badge: "Dispute Resolution",
    summary:
      "Strategic legal representation in original civil suits, recovery of dues, specific performance of contracts, injunctions, declarations, and property title disputes before Delhi District Courts and the Delhi High Court.",
    heroExcerpt:
      "Civil litigation requires exhaustive documentary assembly, procedural vigilance under the Code of Civil Procedure, and decisive courtroom advocacy. Ajmani & Law Partners represents individuals, partnerships, and enterprises in substantive civil disputes across Delhi-NCR.",
    statutes: [
      "Code of Civil Procedure (CPC), 1908",
      "Specific Relief Act, 1963",
      "Indian Contract Act, 1872",
      "Limitation Act, 1963",
      "Delhi High Court (Original Side) Rules",
    ],
    keyForums: [
      "High Court of Delhi (Original & Appellate Jurisdiction)",
      "Tis Hazari Courts (Central & West Delhi)",
      "Patiala House Courts (New Delhi District)",
      "Saket Courts (South & South-East Delhi)",
      "Rohini Courts (North & North-West Delhi)",
      "Dwarka Courts (South-West Delhi)",
      "Karkardooma Courts (East & Shahdara)",
    ],
    proceduralScope: [
      "Plaint drafting with comprehensive statement of truth and document verification",
      "Drafting detailed Written Statements and Counter-Claims",
      "Applications for urgent ad-interim ex-parte injunctions under Order 39 Rules 1 & 2 CPC",
      "Interlocutory proceedings including amendment of pleadings (Order 6 Rule 17 CPC)",
      "Discovery, inspection, and admission/denial of documents (Order 11 & Order 12 CPC)",
      "Framing of issues, examination-in-chief, and rigorous cross-examination of witnesses",
      "Execution petitions for decree enforcement under Order 21 CPC",
      "Civil First Appeals (RFA) and Regular Second Appeals (RSA)",
    ],
    situationsCovered: [
      {
        heading: "Recovery of Monies & Unpaid Commercial Debts",
        description:
          "Instituting suits for recovery of unpaid invoices, loans, contractual dues, and damages with interest claims.",
      },
      {
        heading: "Property Title, Injunctions & Partition",
        description:
          "Representation in partition suits among family members, declaration of title, boundary disputes, and restraint orders against unlawful dispossession.",
      },
      {
        heading: "Specific Performance of Agreements to Sell",
        description:
          "Seeking judicial decrees directing defaulting parties to execute sale deeds or fulfill non-monetary contractual obligations.",
      },
      {
        heading: "Execution & Realisation of Court Decrees",
        description:
          "Tracing judgment-debtor assets, attachment of immovable and movable properties, and securing garnishee orders.",
      },
    ],
    firmAssistance: [
      "Pre-litigation legal audit of transaction contracts, notices, and limitation dates",
      "Formulation of tailored dispute strategies prior to court filings",
      "Personal appearance and advocacy by Advocate Lalit Ajmani at every critical hearing",
      "Drafting clear, bulletproof pleadings designed to withstand summary dismissal or technical challenges",
      "Regular client reporting on cause-list listings, daily court orders, and next procedural steps",
    ],
  },
  {
    slug: "commercial-litigation",
    title: "Commercial Disputes & Contractual Litigation",
    shortTitle: "Commercial Litigation",
    badge: "Corporate Disputes",
    summary:
      "Specialized representation in commercial suits under the Commercial Courts Act 2015, summary suits (Order 37 CPC), breach of business agreements, supply chain disagreements, and commercial appeals.",
    heroExcerpt:
      "Modern commercial disputes demand rapid adjudication, commercial acumen, and strict adherence to strict procedural timelines. We advise and represent commercial enterprises and individual business owners before the designated Commercial Courts of Delhi.",
    statutes: [
      "Commercial Courts Act, 2015",
      "Indian Contract Act, 1872",
      "Sale of Goods Act, 1930",
      "Code of Civil Procedure (Commercial Amendments)",
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006",
    ],
    keyForums: [
      "Commercial Division & Commercial Appellate Division, Delhi High Court",
      "Designated District Commercial Courts across Delhi",
      "Delhi High Court Mediation and Conciliation Centre (Samadhan)",
      "MSEFC (Micro and Small Enterprises Facilitation Council)",
    ],
    proceduralScope: [
      "Adherence to mandatory Pre-Institution Mediation under Section 12A of the Commercial Courts Act",
      "Drafting commercial plaints with mandatory Statement of Truth and complete disclosure of electronic evidence",
      "Applications for urgent interim reliefs without exhaustion of pre-institution mediation",
      "Summary suits under Order 37 CPC for liquidated debts and negotiable instruments",
      "Case Management Hearings (Order 15A CPC) ensuring strict timelines for trial",
      "Commercial First Appeals [RFA(COMM)] and Commercial Miscellaneous Appeals [FAO(COMM)]",
    ],
    situationsCovered: [
      {
        heading: "Breach of Supply, Distribution & Service Contracts",
        description:
          "Litigating disputes arising from contract termination, defective goods, service SLA violations, and claim of liquidated damages.",
      },
      {
        heading: "Shareholder & Partnership Disagreements",
        description:
          "Resolving internal partnership fallouts, breach of shareholder agreements, profit-sharing controversies, and dissolution accounts.",
      },
      {
        heading: "Vendor & Subcontractor Commercial Recovery",
        description:
          "Enforcing commercial receivables through specialized Commercial Court mechanics or MSEFC statutory reference.",
      },
      {
        heading: "Commercial Appeals before Delhi High Court",
        description:
          "Drafting and arguing commercial appeals [RFA(COMM)] against decrees and interlocutory commercial orders.",
      },
    ],
    firmAssistance: [
      "Evaluating whether disputes qualify under the specified monetary threshold of the Commercial Courts Act",
      "Navigating Section 12A pre-institution mediation with strategic commercial positioning",
      "Forensic compilation of invoices, purchase orders, email records, and delivery challans",
      "Direct representation in commercial trial courts and High Court Commercial Appellate benches",
    ],
  },
  {
    slug: "cheque-bounce-ni-act",
    title: "Cheque Bounce & NI Act Proceedings",
    shortTitle: "Cheque Bounce (NI Act)",
    badge: "Financial Litigation",
    summary:
      "Comprehensive trial advocacy and legal defense in Section 138 Negotiable Instruments Act matters, statutory demand notices, interim compensation applications under Section 143A, and compounding of offences.",
    heroExcerpt:
      "Cheque dishonour matters operate under strict statutory timelines and legal presumptions. Ajmani & Law Partners handles both prosecution on behalf of payees and strategic trial defense for drawers across Delhi District Courts.",
    statutes: [
      "Negotiable Instruments Act, 1881 (Sections 138, 139, 141, 142, 143, 143A, 148)",
      "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 / Code of Criminal Procedure (CrPC), 1973",
      "Indian Evidence Act, 1872 / Bharatiya Sakshya Adhiniyam (BSA), 2023",
      "Bankers' Books Evidence Act, 1891",
    ],
    keyForums: [
      "Special Courts for Negotiable Instruments Act, Delhi District Courts",
      "Courts of Metropolitan Magistrates (NI Act), Tis Hazari, Saket, Patiala House, Rohini, Dwarka",
      "Courts of Sessions (Criminal Revision & Appeals)",
      "High Court of Delhi (Criminal Revision & Section 482 CrPC / Section 528 BNSS Quashing Petitions)",
    ],
    proceduralScope: [
      "Drafting and serving statutory Legal Demand Notice within 30 days of receiving the bank memo",
      "Drafting and filing Criminal Complaints under Section 138 within 30 days of cause of action",
      "Pre-summoning evidence by way of affidavit under Section 145 NI Act",
      "Securing summons/bailable warrants and appearance of the accused",
      "Notice framing under Section 251 CrPC / Section 274 BNSS",
      "Filing and arguing applications for Interim Compensation (up to 20%) under Section 143A NI Act",
      "Cross-examination to establish or rebut the legal presumption of enforceable debt (Section 118 & 139)",
      "Compounding proceedings under Section 147 NI Act and settlement deed drafting",
      "Filing Criminal Revisions and Appeals with statutory deposit requirements under Section 148",
    ],
    situationsCovered: [
      {
        heading: "Prosecution on Behalf of Complainant Payees",
        description:
          "Recovering dishonoured funds stemming from business loans, commercial transactions, property sale advances, and professional fees.",
      },
      {
        heading: "Trial Defense for Drawers & Corporate Directors",
        description:
          "Defending individuals and vicariously implicated directors (Section 141) where cheques were issued as security, without existing consideration, or following account closure.",
      },
      {
        heading: "Interim Compensation Petitions (Section 143A)",
        description:
          "Advocating for or resisting mandatory/discretionary 20% interim deposit orders during trial pendency.",
      },
      {
        heading: "Quashing Petitions before High Court",
        description:
          "Challenging illegal summoning orders, stale complaints, or improper vicarious liability under High Court inherent powers.",
      },
    ],
    firmAssistance: [
      "Rigorous statutory verification of cheque bounce memos, return reasons, and postal tracking receipts",
      "Precision in establishing or countering the statutory presumption of debt",
      "Authoritative scholarship: Lalit Ajmani's published legal articles on Section 138, Section 143A, and onus of proof",
      "Seamless representation from magistrate trial to Sessions appeal and Delhi High Court revisions",
    ],
  },
  {
    slug: "matrimonial-family-disputes",
    title: "Matrimonial & Family Law Disputes",
    shortTitle: "Matrimonial & Family",
    badge: "Family Law",
    summary:
      "Restrained, strategic legal representation in divorce proceedings, judicial separation, maintenance and alimony claims, child custody, domestic violence matters, and restitution of conjugal rights.",
    heroExcerpt:
      "Matrimonial disputes require a delicate balance of decisive legal protection and dignified resolution. We guide clients through complex family litigation across Delhi Family Courts with confidentiality and strategic foresight.",
    statutes: [
      "Hindu Marriage Act (HMA), 1955",
      "Special Marriage Act, 1954",
      "Protection of Women from Domestic Violence Act (PWDVA), 2005",
      "Family Courts Act, 1984",
      "Guardians and Wards Act, 1890",
      "Code of Criminal Procedure (Section 125) / Bharatiya Nagarik Suraksha Sanhita",
    ],
    keyForums: [
      "Principal Family Courts & Judge Family Courts across all Delhi Districts",
      "Metropolitan Magistrate Courts (Mahila Courts for DV Act)",
      "Delhi High Court (Matrimonial Appeals & Criminal Revisions)",
      "Delhi Mediation Centres & Supreme Court Mediation Centre",
    ],
    proceduralScope: [
      "Drafting and filing Mutual Consent Divorce petitions (First and Second Motion with cooling-off waiver)",
      "Contested divorce petitions on grounds of cruelty, desertion, adultery, and mutual incompatibility",
      "Applications for interim maintenance pendente lite under Section 24 HMA and Section 125 CrPC",
      "Compliance with mandatory disclosure of assets and liabilities affidavits (Supreme Court guidelines)",
      "Applications for urgent protection orders, residence orders, and monetary relief under DV Act",
      "Child custody, visitation rights, and interim guardianship petitions",
      "Settlement agreements and quashing petitions before Delhi High Court following mutual resolution",
    ],
    situationsCovered: [
      {
        heading: "Divorce by Mutual Consent",
        description:
          "Structuring clean, legally binding settlement deeds addressing permanent alimony, stridhan return, child maintenance, and mutual waiver of claims.",
      },
      {
        heading: "Contested Divorce Litigation",
        description:
          "Prosecuting or defending contested divorce petitions supported by evidentiary documentation and cross-examination.",
      },
      {
        heading: "Maintenance & Alimony Claims",
        description:
          "Seeking fair financial support or defending against inflated claims through comprehensive asset and tax audits.",
      },
      {
        heading: "Domestic Violence & Protection Proceedings",
        description:
          "Representation under PWDVA 2005 regarding residence rights, compensation, and restraining orders.",
      },
    ],
    firmAssistance: [
      "Objective, compassionate counsel focused on legal rights and long-term consequences",
      "Strict confidentiality safeguarding sensitive personal and financial documentation",
      "Active representation in court-annexed mediation to explore honourable settlements where viable",
      "Vigorous trial advocacy when settlement avenues are exhausted",
    ],
  },
  {
    slug: "arbitration-dispute-resolution",
    title: "Arbitration & Alternative Dispute Resolution",
    shortTitle: "Arbitration & ADR",
    badge: "Dispute Resolution",
    summary:
      "Handling domestic arbitrations, Section 11 arbitrator appointments, Section 9 interim measures, Section 34 challenges to arbitral awards, and Section 36 award execution before Delhi High Court.",
    heroExcerpt:
      "Arbitration provides a confidential, expedited forum for commercial and contractual disputes. We handle the complete lifecycle of arbitration proceedings from drafting invocation notices to appellate challenge before the High Court of Delhi.",
    statutes: [
      "Arbitration and Conciliation Act, 1996 (as amended in 2015, 2019, and 2021)",
      "Indian Stamp Act, 1899",
      "Commercial Courts Act, 2015",
      "Delhi International Arbitration Centre (DIAC) Rules",
    ],
    keyForums: [
      "High Court of Delhi (Arbitration Jurisdiction under Sections 9, 11, 34, 37)",
      "Delhi International Arbitration Centre (DIAC)",
      "Designated District Commercial Courts (Section 34 petitions for specified value)",
      "Ad-hoc Arbitral Tribunals and Sole Arbitrator proceedings",
    ],
    proceduralScope: [
      "Drafting and issuing formal Notice Invoking Arbitration under Section 21",
      "Filing Section 11 Petitions before the High Court of Delhi for judicial appointment of an arbitrator",
      "Urgent Petitions under Section 9 for interim measures of protection prior to tribunal constitution",
      "Drafting Statement of Claim, Statement of Defense, and Counter-claims",
      "Interim relief applications before the Arbitral Tribunal under Section 17",
      "Conduct of arbitral hearings, witness cross-examination, and submission of written arguments",
      "Filing and resisting Section 34 Petitions challenging arbitral awards on grounds of patent illegality or public policy",
      "Execution and enforcement of domestic arbitral awards under Section 36",
    ],
    situationsCovered: [
      {
        heading: "Appointment of Independent Arbitrators (Section 11)",
        description:
          "Approaching the High Court of Delhi when the agreed appointment mechanism fails or unilateral appointment clauses are contested.",
      },
      {
        heading: "Pre-Arbitration Protective Injunctions (Section 9)",
        description:
          "Securing freezing orders on bank accounts, preventing encashment of bank guarantees, or preserving dispute assets.",
      },
      {
        heading: "Trial Advocacy before Sole Arbitrators & Tribunals",
        description:
          "Conducting fast-track or standard arbitration hearings under DIAC rules or ad-hoc appointments.",
      },
      {
        heading: "Challenging or Defending Arbitral Awards (Section 34)",
        description:
          "Instituting or resisting challenge petitions under the stringent legal grounds prescribed by the 1996 Act.",
      },
    ],
    firmAssistance: [
      "Deep analysis of arbitration clauses, governing law, and stamp duty implications",
      "Published research: Lalit Ajmani's published legal commentary on stamp duty and arbitrability",
      "Decisive courtroom advocacy before the High Court of Delhi for Section 9 and Section 11 petitions",
      "Cost-effective and time-sensitive arbitration management",
    ],
  },
  {
    slug: "insolvency-bankruptcy",
    title: "Insolvency & Bankruptcy (IBC) Practice",
    shortTitle: "Insolvency & IBC",
    badge: "Corporate Insolvency",
    summary:
      "Representation of operational creditors, financial creditors, and corporate debtors in insolvency proceedings before NCLT New Delhi benches and appellate proceedings before NCLAT.",
    heroExcerpt:
      "The Insolvency and Bankruptcy Code (IBC) has transformed corporate debt recovery and restructuring in India. Ajmani & Law Partners represents stakeholders in navigating CIRP applications, demand notices, and tribunal litigation.",
    statutes: [
      "Insolvency and Bankruptcy Code (IBC), 2016",
      "Insolvency and Bankruptcy Board of India (IBBI) Regulations",
      "Companies Act, 2013",
      "National Company Law Tribunal Rules, 2016",
    ],
    keyForums: [
      "National Company Law Tribunal (NCLT), New Delhi Benches (Court I - VI)",
      "National Company Law Appellate Tribunal (NCLAT), Principal Bench, New Delhi",
      "High Court of Delhi (Writ Petitions arising from tribunal orders)",
      "Supreme Court of India (Appeals under Section 62 IBC)",
    ],
    proceduralScope: [
      "Drafting and serving statutory Demand Notices in Form 3 / Form 4 under Section 8 of the IBC",
      "Filing Petitions under Section 9 for initiation of CIRP by Operational Creditors",
      "Filing Petitions under Section 7 for Financial Creditors",
      "Defending Corporate Debtors on grounds of pre-existing disputes under Section 8(2) and Section 9(5)",
      "Filing claims in Form B / Form C before Interim Resolution Professionals (IRP)",
      "Representation in Committee of Creditors (CoC) disputes and resolution plan objections",
      "Filing Statutory Appeals under Section 61 before NCLAT New Delhi",
    ],
    situationsCovered: [
      {
        heading: "Operational Debt Realisation",
        description:
          "Assisting corporate vendors, suppliers, and service providers with minimum statutory default thresholds under Section 9.",
      },
      {
        heading: "Corporate Debtor Defense against Malicious Filings",
        description:
          "Establishing pre-existing dispute records through prior correspondence, notice replies, and arbitral notices.",
      },
      {
        heading: "Creditor Claims during Corporate Insolvency",
        description:
          "Submitting and substantiating claims with the Resolution Professional and monitoring CIRP status.",
      },
      {
        heading: "Appellate Proceedings before NCLAT",
        description:
          "Appealing against admission orders, rejection of claims, or liquidation orders before NCLAT Principal Bench.",
      },
    ],
    firmAssistance: [
      "Pre-notice verification of statutory threshold limits and limitation requirements",
      "Published scholarship: Lalit Ajmani's analysis on IBC Section 7 and debt mechanics",
      "Drafting rigorous Section 8 notices and responsive pleadings before NCLT New Delhi",
      "Strategic negotiation of settlements prior to admission of insolvency petitions",
    ],
  },
];
