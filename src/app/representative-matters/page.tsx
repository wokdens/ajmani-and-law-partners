import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Gavel, Scale, ShieldAlert, ArrowRight, ExternalLink, FileText } from "lucide-react";
import { representativeMatters } from "@/data/matters";

export const metadata: Metadata = {
  title: "Representative Matters & Public Proceedings | Delhi High Court",
  description:
    "Publicly documented court proceedings and representative matters handled by Advocate Lalit Ajmani before the High Court of Delhi in commercial appeals, writ petitions, and criminal revisions.",
};

export default function RepresentativeMattersPage() {
  return (
    <div className="space-y-16 md:space-y-20 pb-16">
      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-16 md:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brass-500/30 text-brass-300 text-xs font-sans">
            <span>Public Court Footprint</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Selected Representative Matters
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans font-light leading-relaxed">
            Publicly documented court appearances and reported litigation matters before the High Court of Delhi and appellate forums, demonstrating active trial and appellate practice.
          </p>
        </div>
      </section>

      {/* Main Matters Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Ethical Disclaimer Notice */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900 font-sans leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Bar Council of India Disclosure:</strong> In strict compliance with the rules of the Bar Council of India, the matters itemized below are drawn exclusively from publicly indexed court records and cause lists. A court appearance is not represented as an outcome guarantee or boast of victory. Every legal matter turns upon its distinct facts, evidence, and judicial interpretation.
          </div>
        </div>

        {/* Matters Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {representativeMatters.map((matter) => (
            <div
              key={matter.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-subtle hover:shadow-card transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                    {matter.forum}
                  </span>
                  <span className="font-mono text-xs font-bold text-navy-900 bg-brass-50 px-2 py-0.5 rounded border border-brass-200">
                    {matter.caseNumber}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-serif font-bold text-navy-900 leading-snug">
                  {matter.caseTitle}
                </h2>

                <div className="text-xs font-semibold text-brass-700 uppercase tracking-wider">
                  {matter.category} &bull; {matter.jurisdictionType}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {matter.matterSummary}
                </p>

                {/* Statutory Provisions */}
                <div className="pt-2 border-t border-slate-100 space-y-1">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                    Statutory Provisions Involved:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {matter.statutoryProvisions.map((prov, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 font-sans"
                      >
                        {prov}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Public Source: {matter.publicSource}</span>
                <span className="text-slate-500 font-medium">Public Court Record</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-serif font-bold">
              Require Appellate or Trial Representation in Delhi?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl">
              Consult with Advocate Lalit Ajmani regarding listing timelines, interim protection applications, or drafting of appeals.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-brass-400 hover:bg-brass-300 text-navy-950 font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all shrink-0"
          >
            Contact Chambers
          </Link>
        </div>
      </section>
    </div>
  );
}
