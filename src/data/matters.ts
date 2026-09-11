export interface CourtMatter {
  id: string;
  caseTitle: string;
  caseNumber: string;
  forum: string;
  category: string;
  jurisdictionType: string;
  matterSummary: string;
  statutoryProvisions: string[];
  publicSource: string;
}

export const representativeMatters: CourtMatter[] = [
  {
    id: "rfa-comm-260-2025",
    caseTitle: "Vikas Sharma (through LR) v. Virender Singh & Ors.",
    caseNumber: "RFA(COMM) 260/2025",
    forum: "High Court of Delhi",
    category: "Commercial Appellate Litigation",
    jurisdictionType: "Commercial Appellate Division",
    matterSummary:
      "Commercial Regular First Appeal challenging a commercial trial court decree, involving interpretation of contractual covenants, evidence appreciation in commercial disputes, and statutory requirements under the Commercial Courts Act, 2015.",
    statutoryProvisions: ["Commercial Courts Act, 2015", "Code of Civil Procedure, 1908 (Section 96 & Order 41)"],
    publicSource: "High Court of Delhi Judicial Database & Cause Lists",
  },
  {
    id: "rfa-comm-219-2025",
    caseTitle: "Vikas (through AR) v. Sanju Lata",
    caseNumber: "RFA(COMM) 219/2025",
    forum: "High Court of Delhi",
    category: "Commercial Dispute Adjudication",
    jurisdictionType: "Commercial Appellate Division",
    matterSummary:
      "Regular First Appeal in a commercial transaction matter contesting trial court decree on appreciation of financial transactions and evidence under the Commercial Courts Act.",
    statutoryProvisions: ["Commercial Courts Act, 2015", "Indian Evidence Act, 1872 / BSA, 2023"],
    publicSource: "High Court of Delhi Judicial Database",
  },
  {
    id: "wp-c-5499-2026",
    caseTitle: "Index Cargo & Courier Services Pvt. Ltd. v. Govt. of NCT of Delhi & Ors.",
    caseNumber: "W.P.(C) 5499/2026",
    forum: "High Court of Delhi",
    category: "Constitutional & Administrative Law",
    jurisdictionType: "Civil Writ Jurisdiction",
    matterSummary:
      "Writ Petition under Article 226 of the Constitution of India challenging statutory and administrative notices issued by state departments, seeking protection of business operations and procedural natural justice.",
    statutoryProvisions: ["Constitution of India (Articles 14, 19, 226)", "Administrative Law Principles"],
    publicSource: "High Court of Delhi Judicial Records & Registry Notice",
  },
  {
    id: "wp-c-5434-2019",
    caseTitle: "Nanak Chand v. Union of India & Ors.",
    caseNumber: "W.P.(C) 5434/2019",
    forum: "High Court of Delhi",
    category: "Writ Litigation Against State",
    jurisdictionType: "Civil Writ Jurisdiction",
    matterSummary:
      "Civil Writ Petition seeking judicial directions against Union authorities for administrative action, statutory compliance, and realization of lawful entitlements.",
    statutoryProvisions: ["Constitution of India (Article 226)", "Principles of Natural Justice"],
    publicSource: "High Court of Delhi Official Judicial Database",
  },
  {
    id: "bail-appln-499-2026",
    caseTitle: "Ravi Ram @ Ravi Kumar v. State (NCT of Delhi)",
    caseNumber: "Bail Appln. 499/2026",
    forum: "High Court of Delhi",
    category: "Criminal Defense & Liberty",
    jurisdictionType: "Criminal Jurisdiction",
    matterSummary:
      "Regular Bail Application before the High Court of Delhi evaluating personal liberty, statutory trial timelines, and evidentiary threshold during criminal prosecution pendency.",
    statutoryProvisions: ["Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC, 1973 (Section 439)"],
    publicSource: "High Court of Delhi Orders & Filings",
  },
  {
    id: "crl-rev-p-1239-2019",
    caseTitle: "Pawan Kumar Arya v. Sunita Arya & Ors.",
    caseNumber: "Crl.Rev.P. 1239/2019",
    forum: "High Court of Delhi",
    category: "Matrimonial & Criminal Revision",
    jurisdictionType: "Criminal Revisional Jurisdiction",
    matterSummary:
      "Criminal Revision Petition before the High Court challenging lower court orders concerning interim maintenance, jurisdiction, and procedural compliance in family-related criminal proceedings.",
    statutoryProvisions: ["Code of Criminal Procedure, 1973 (Sections 397 & 401)", "Family Law Statutes"],
    publicSource: "High Court of Delhi Judicial Repository",
  },
];
