import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Scale, Shield, Building2, Gavel, ArrowRight, CheckCircle2, Award, BookOpen } from "lucide-react";
import { firmData } from "@/data/firm";

export const metadata: Metadata = {
  title: "About the Firm | Ajmani & Law Partners, New Delhi",
  description:
    "Learn about Ajmani & Law Partners, founded by Advocate Lalit Ajmani. A dedicated litigation practice appearing before the High Court of Delhi and District Courts in civil, commercial, and financial disputes.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-20 pb-16">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-16 md:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brass-500/30 text-brass-300 text-xs font-sans">
            <span>Firm Profile &amp; Ethos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            About Ajmani &amp; Law Partners
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans font-light leading-relaxed">
            Founded by Advocate Lalit Ajmani, Ajmani &amp; Law Partners is a New Delhi-based legal practice committed to meticulous case preparation, rigorous procedural discipline, and decisive courtroom representation across Delhi-NCR.
          </p>
        </div>
      </section>

      {/* Section 1: Firm Overview & Founding Ethos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
                Founding History
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 mt-1">
                A Modern Litigation Practice Rooted in Legal Scholarship
              </h2>
            </div>

            <p>
              Ajmani &amp; Law Partners (formerly established as the Law Offices of Adv. Lalit Ajmani) was founded with a clear objective: to provide individuals, family-owned enterprises, and corporate entities with high-calibre dispute resolution counsel that combines intellectual rigour with practical courtroom effectiveness.
            </p>
            <p>
              Operating from Janakpuri in West Delhi, the firm has established an active litigation footprint across the National Capital Territory. We regularly appear before the High Court of Delhi, all seven principal District Court complexes, the National Company Law Tribunal (NCLT), and statutory appellate tribunals.
            </p>
            <p>
              As a first-generation legal practice, our foundation is built purely upon merit, exhaustive statutory research, and an uncompromising work ethic. We do not view litigation as an assembly-line service; each matter receives direct personal attention from senior legal counsel from initial notice drafting to final decree execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-subtle space-y-1">
                <div className="font-serif font-bold text-navy-900 text-base">Direct Advocate Access</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clients interact directly with arguing counsel rather than being shuffled through administrative layers.
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-subtle space-y-1">
                <div className="font-serif font-bold text-navy-900 text-base">Research-Driven Strategy</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every pleading is fortified with current High Court and Supreme Court precedents before filing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Fact Inventory Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-card space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-lg bg-navy-950 text-brass-400 flex items-center justify-center font-serif font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-navy-900 text-lg">Firm Particulars</h3>
                <p className="text-xs text-slate-500 font-sans">Official Regulatory Registry</p>
              </div>
            </div>

            <dl className="space-y-3.5 text-xs font-sans">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2.5">
                <dt className="text-slate-500 font-medium">Official Firm Name</dt>
                <dd className="font-semibold text-navy-900 text-right">Ajmani &amp; Law Partners</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2.5">
                <dt className="text-slate-500 font-medium">Principal Advocate</dt>
                <dd className="font-semibold text-navy-900 text-right">Advocate Lalit Ajmani</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2.5">
                <dt className="text-slate-500 font-medium">Bar Enrolment No.</dt>
                <dd className="font-mono font-semibold text-navy-900 text-right">D/5332/2017</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2.5">
                <dt className="text-slate-500 font-medium">Regulatory Bar Council</dt>
                <dd className="font-semibold text-navy-900 text-right">Bar Council of Delhi</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2.5">
                <dt className="text-slate-500 font-medium">Head Office</dt>
                <dd className="font-semibold text-navy-900 text-right">Janakpuri, New Delhi – 110058</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2.5">
                <dt className="text-slate-500 font-medium">Public Service Affiliation</dt>
                <dd className="font-semibold text-emerald-800 text-right">Nyaya Bandhu (Dept. of Justice)</dd>
              </div>
            </dl>

            <div className="pt-2">
              <Link
                href="/advocate-lalit-ajmani"
                className="w-full py-2.5 px-4 bg-navy-900 hover:bg-navy-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>View Lalit Ajmani&apos;s Full Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Practice Philosophy & Professional Methodology */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
              The Four Pillars of Our Litigation Practice
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Our practice is structured to provide clarity at every juncture of a legal dispute, preventing procedural errors and avoidable costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-navy-900 text-brass-400 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-serif font-bold text-navy-900 text-base">
                Exhaustive Pre-Suit Analysis
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Before instituting any plaint or petition, we conduct a forensic audit of contracts, bank records, notices, and statutory limitation dates to assess true legal viability.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-navy-900 text-brass-400 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-serif font-bold text-navy-900 text-base">
                Precision Pleadings
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Courts decide cases on the strength of pleadings. We craft articulate plaints, written statements, and affidavits designed to survive rigorous judicial examination.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-navy-900 text-brass-400 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-serif font-bold text-navy-900 text-base">
                Decisive Advocacy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Effective oral arguments require brevity, command over factual nuances, and immediate answers to judicial bench queries during urgent motion hearings.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-navy-900 text-brass-400 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-serif font-bold text-navy-900 text-base">
                Decree Realisation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                A judgment is only as valuable as its enforcement. We maintain rigorous follow-through in execution petitions under Order 21 CPC to ensure actual realization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Geographic Reach & Forums Handled */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
            Courts &amp; Jurisdictions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
            Forums of Regular Practice
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-sans">
            Our principal practice is centered before the High Court of Delhi and the subordinate judiciary across the National Capital Territory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-subtle space-y-3">
            <h3 className="font-serif font-bold text-navy-900 text-base flex items-center gap-2">
              <Gavel className="w-4 h-4 text-brass-600" />
              <span>Constitutional &amp; Appellate</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brass-600 shrink-0 mt-0.5" />
                <span>High Court of Delhi (Original &amp; Appellate Side)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brass-600 shrink-0 mt-0.5" />
                <span>Commercial Appellate Division [RFA(COMM) &amp; FAO(COMM)]</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brass-600 shrink-0 mt-0.5" />
                <span>High Court Writ Jurisdiction (Article 226 Petitions)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-subtle space-y-3">
            <h3 className="font-serif font-bold text-navy-900 text-base flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brass-600" />
              <span>Delhi District Courts</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 font-sans">
              {firmData.jurisdictions.districtCourts.map((court) => (
                <li key={court} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass-500 shrink-0 mt-1.5" />
                  <span>{court}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-subtle space-y-3">
            <h3 className="font-serif font-bold text-navy-900 text-base flex items-center gap-2">
              <Scale className="w-4 h-4 text-brass-600" />
              <span>Tribunals &amp; Regional Reach</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brass-600 shrink-0 mt-0.5" />
                <span>NCLT &amp; NCLAT New Delhi (Insolvency &amp; Company Matters)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brass-600 shrink-0 mt-0.5" />
                <span>Debts Recovery Tribunal (DRT &amp; DRAT Delhi)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brass-600 shrink-0 mt-0.5" />
                <span>Consumer Commissions (NCDRC &amp; State Commission Delhi)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brass-600 shrink-0 mt-0.5" />
                <span>Regional Courts: Gurugram, Faridabad, Noida, Rajasthan &amp; MP</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Closing Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-serif font-bold">
              Require Legal Guidance on a Pending or Impending Dispute?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl">
              Schedule an in-person conference at our Janakpuri office or request a preliminary review of your matter.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 bg-brass-400 hover:bg-brass-300 text-navy-950 font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all"
            >
              Contact Litigation Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
