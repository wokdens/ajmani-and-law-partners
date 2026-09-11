"use client";

import React, { useState } from "react";
import { Building2, Gavel, MapPin, Scale, ChevronRight, Compass } from "lucide-react";

interface CourtInfo {
  id: string;
  name: string;
  category: string;
  location: string;
  metroAccess: string;
  territorialScope: string;
  keyMatters: string[];
  benchTypes: string[];
}

const courtData: CourtInfo[] = [
  {
    id: "delhi-hc",
    name: "High Court of Delhi",
    category: "Constitutional & Appellate",
    location: "Shershah Road, New Delhi – 110503",
    metroAccess: "Supreme Court / Khan Market Metro Station (Violet Line)",
    territorialScope: "Entire National Capital Territory of Delhi (NCT) & Appellate Jurisdiction",
    keyMatters: [
      "Original Side Commercial Suits (> ₹2 Crores specified value)",
      "Commercial Regular First Appeals [RFA(COMM)] & Miscellaneous Appeals [FAO(COMM)]",
      "Arbitration Petitions under Section 9 (Interim Relief) & Section 11 (Arbitrator Appointment)",
      "Constitutional Writ Petitions under Article 226 / 227",
      "Criminal Revision Petitions & Section 482 CrPC / Sec 528 BNSS Quashing Petitions",
    ],
    benchTypes: ["Single Judge (Original / Revisional)", "Division Bench (Commercial Appellate)", "Full Bench"],
  },
  {
    id: "tis-hazari",
    name: "Tis Hazari District Courts",
    category: "District Judiciary",
    location: "Tis Hazari, Central Delhi – 110054",
    metroAccess: "Tis Hazari Metro Station (Red Line)",
    territorialScope: "Central District & West District (covering Janakpuri, Rajouri Garden, Punjabi Bagh, Karol Bagh)",
    keyMatters: [
      "Substantive Civil Suits, Money Recovery, Injunctions & Partition",
      "Section 138 Negotiable Instruments Act Trials (Special Metropolitan Magistrates)",
      "Commercial Courts (Suits below High Court pecuniary threshold)",
      "Sessions Trials, Criminal Bail & Revision Applications",
    ],
    benchTypes: ["District Judge (Commercial)", "Civil Judge (Senior Division)", "Metropolitan Magistrate (NI Act)"],
  },
  {
    id: "patiala-house",
    name: "Patiala House District Courts",
    category: "District Judiciary",
    location: "India Gate Circle, New Delhi – 110001",
    metroAccess: "Mandi House / Central Secretariat Metro Station",
    territorialScope: "New Delhi District (covering Connaught Place, Chanakyapuri, Vasant Kunj, Tilak Marg)",
    keyMatters: [
      "Commercial & Corporate Contract Disputes",
      "Section 138 NI Act Cheque Dishonour Trials",
      "Special CBI & Enforcement Directorate Courts (PMLA matters)",
      "Family Court Proceedings & Matrimonial Petitions",
    ],
    benchTypes: ["Principal District Judge", "Special Judges (PMLA/CBI)", "Family Court Judge"],
  },
  {
    id: "saket",
    name: "Saket District Courts",
    category: "District Judiciary",
    location: "Press Enclave Road, Saket, South Delhi – 110017",
    metroAccess: "Saket / Malviya Nagar Metro Station (Yellow Line)",
    territorialScope: "South District & South-East District (covering Greater Kailash, Defence Colony, Saket, Nehru Place)",
    keyMatters: [
      "Commercial Contracts, Vendor Recovery & Arbitral Award Enforcement",
      "Property Declarations, Injunctions & Real Estate Disputes",
      "Negotiable Instruments Act Trials & Summary Suits (Order 37 CPC)",
      "Domestic Violence & Section 125 Maintenance Petitions",
    ],
    benchTypes: ["Commercial Court Judge", "Additional District Judge (ADJ)", "Mahila Court (DV Act)"],
  },
  {
    id: "dwarka",
    name: "Dwarka District Courts",
    category: "District Judiciary",
    location: "Sector 10, Dwarka, South-West Delhi – 110075",
    metroAccess: "Dwarka Sector 10 Metro Station (Blue Line)",
    territorialScope: "South-West District (covering Dwarka, Palam, Najafgarh, Delhi Cantt)",
    keyMatters: [
      "Original Civil Suits, Builder-Buyer Contract Disputes & Partition",
      "High-Volume Negotiable Instruments Act Trials (Metropolitan Magistrates)",
      "Family Court Petitions (Mutual Consent & Contested Divorce)",
      "Criminal Bail, Appeals & Sessions Trials",
    ],
    benchTypes: ["District Judge", "Civil Judge", "Family Court Principal Judge", "Metropolitan Magistrate"],
  },
  {
    id: "nclt-delhi",
    name: "NCLT & NCLAT (National Company Law Tribunals)",
    category: "Company & Insolvency Tribunals",
    location: "Block 3, CGO Complex, Lodhi Road, New Delhi – 110003",
    metroAccess: "JLN Stadium Metro Station (Violet Line)",
    territorialScope: "Principal Bench & New Delhi Benches (Courts I – VI); Pan-India Appellate Jurisdiction (NCLAT)",
    keyMatters: [
      "Corporate Insolvency Resolution Process (CIRP) under Section 7 & 9 IBC",
      "Company Petitions regarding Oppression & Mismanagement (Sections 241/242 Companies Act)",
      "Scheme Mergers, Amalgamations & Capital Reductions",
      "Statutory Insolvency Appeals before NCLAT Principal Bench",
    ],
    benchTypes: ["Judicial Member & Technical Member Division Benches", "NCLAT Appellate Benches"],
  },
];

export function CourtJurisdictionExplorer() {
  const [activeCourtId, setActiveCourtId] = useState<string>("delhi-hc");

  const selectedCourt = courtData.find((c) => c.id === activeCourtId) || courtData[0];

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-card space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
          <Compass className="w-3.5 h-3.5" />
          <span>Delhi Judicial Map &amp; Jurisdiction Guide</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
          Where We Practice Across Delhi-NCR
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
          Litigation in Delhi is distributed across specialized district court complexes and constitutional benches. Select a forum to inspect territorial jurisdiction, typical matters handled, and accessibility.
        </p>
      </div>

      {/* Interactive Tabs Pill Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
        {courtData.map((court) => (
          <button
            key={court.id}
            type="button"
            onClick={() => setActiveCourtId(court.id)}
            className={`px-4 py-2 text-xs font-sans font-medium rounded-lg transition-all ${
              activeCourtId === court.id
                ? "bg-navy-900 text-white shadow-sm font-semibold"
                : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/70"
            }`}
          >
            {court.name}
          </button>
        ))}
      </div>

      {/* Selected Court Details Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-50/70 border border-slate-200/80 rounded-xl p-6 sm:p-8 animate-in fade-in duration-200">
        {/* Forum Core Details (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-brass-700 font-sans">
              {selectedCourt.category}
            </span>
            <h4 className="text-xl font-serif font-bold text-navy-900">
              {selectedCourt.name}
            </h4>
          </div>

          <div className="space-y-3 text-xs text-slate-700 font-sans">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-navy-900">Chamber &amp; Complex Address</span>
                <span className="text-slate-600">{selectedCourt.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-navy-900">Territorial Jurisdiction</span>
                <span className="text-slate-600">{selectedCourt.territorialScope}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Scale className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-navy-900">Metro Transit Access</span>
                <span className="text-slate-600">{selectedCourt.metroAccess}</span>
              </div>
            </div>
          </div>

          {/* Bench Types */}
          <div className="pt-3 border-t border-slate-200">
            <span className="text-[10px] font-semibold uppercase text-slate-400 block mb-1.5 font-sans">
              Primary Benches Sitting at Forum:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedCourt.benchTypes.map((bench, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-sans"
                >
                  {bench}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Matters Handled by Firm at this Forum (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 shadow-subtle space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h5 className="font-serif font-bold text-navy-900 text-sm flex items-center gap-2">
              <Gavel className="w-4 h-4 text-brass-600" />
              <span>Matters Handled by Ajmani &amp; Law Partners Here</span>
            </h5>
            <span className="text-[11px] font-semibold text-brass-700 bg-brass-50 px-2 py-0.5 rounded font-sans">
              Regular Appearances
            </span>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-700 font-sans">
            {selectedCourt.keyMatters.map((matter, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <ChevronRight className="w-3.5 h-3.5 text-brass-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{matter}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-sans">
            <span className="text-slate-500 text-[11px]">
              Need counsel for a matter listed here?
            </span>
            <a
              href="/contact"
              className="text-navy-900 hover:text-brass-700 font-bold inline-flex items-center gap-1"
            >
              <span>Schedule Listing Review</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
