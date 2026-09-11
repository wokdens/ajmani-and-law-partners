import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Scale, Gavel, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import { practiceAreas } from "@/data/practices";

export const metadata: Metadata = {
  title: "Practice Areas | Dispute Resolution & Litigation, New Delhi",
  description:
    "Explore the litigation practice areas handled by Ajmani & Law Partners before the High Court of Delhi and District Courts: Civil Suits, Commercial Litigation, Cheque Bounce (NI Act), Matrimonial Law, Arbitration, and Insolvency.",
};

export default function PracticeAreasPage() {
  return (
    <div className="space-y-16 md:space-y-20 pb-16">
      {/* Directory Hero */}
      <section className="bg-navy-950 text-white py-16 md:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brass-500/30 text-brass-300 text-xs font-sans">
            <span>Delhi Litigation Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Practice Areas
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans font-light leading-relaxed">
            Ajmani &amp; Law Partners provides comprehensive dispute-resolution and trial advocacy across six core areas of civil, commercial, financial, and family law before the High Court of Delhi and subordinate tribunals.
          </p>
        </div>
      </section>

      {/* Main Directory Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((pa, idx) => (
            <div
              key={pa.slug}
              className="bg-white border border-slate-200 hover:border-brass-400 rounded-2xl p-7 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded bg-slate-100 text-slate-700 group-hover:bg-brass-50 group-hover:text-brass-800 transition-colors">
                    {pa.badge}
                  </span>
                </div>

                <h2 className="text-xl font-serif font-bold text-navy-900 group-hover:text-brass-800 transition-colors leading-snug">
                  <Link href={`/practice-areas/${pa.slug}`}>{pa.title}</Link>
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                  {pa.summary}
                </p>

                {/* Statutes List */}
                <div className="pt-3 border-t border-slate-100 space-y-1">
                  <span className="text-[10px] font-semibold uppercase text-slate-400 block tracking-wider">
                    Governing Legislation:
                  </span>
                  <ul className="text-xs text-slate-700 space-y-0.5 font-medium">
                    {pa.statutes.slice(0, 2).map((statute, sIdx) => (
                      <li key={sIdx} className="truncate">
                        &bull; {statute}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/practice-areas/${pa.slug}`}
                  className="text-xs font-bold text-navy-900 group-hover:text-brass-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>Detailed Scope &amp; Procedure</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900">
              Need Procedural Clarification on a Legal Notice or Summons?
            </h3>
            <p className="text-xs text-slate-600 font-sans max-w-xl">
              Our litigation team can evaluate your matter and advise on statutory limitation deadlines and jurisdictional requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors shrink-0"
          >
            Submit Case Inquiries
          </Link>
        </div>
      </section>
    </div>
  );
}
