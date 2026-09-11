import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { insightArticles } from "@/data/insights";

export const metadata: Metadata = {
  title: "Legal Insights & Publications | Advocate Lalit Ajmani",
  description:
    "Published legal analyses, case law commentaries, and statutory reviews by Advocate Lalit Ajmani on Section 138 NI Act, Arbitration, Testamentary Succession, BNSS reforms, and IBC.",
};

export default function InsightsPage() {
  return (
    <div className="space-y-16 md:space-y-20 pb-16">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-16 md:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brass-500/30 text-brass-300 text-xs font-sans">
            <span>Scholarship &amp; Commentary</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Legal Insights &amp; Publications
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans font-light leading-relaxed">
            Analytical papers and practice reviews authored by Advocate Lalit Ajmani, examining crucial questions of civil procedure, commercial dispute resolution, cheque dishonour litigation, and constitutional law.
          </p>
        </div>
      </section>

      {/* Main Articles Listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-white border border-slate-200 hover:border-brass-400 rounded-2xl p-7 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-brass-700 bg-brass-50 px-2 py-0.5 rounded text-[11px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-serif font-bold text-navy-900 group-hover:text-brass-800 transition-colors leading-snug">
                  <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Statutory References */}
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-semibold uppercase text-slate-400 block mb-1">
                    Statutory Subject:
                  </span>
                  <div className="text-xs text-slate-700 truncate font-medium">
                    {article.statutoryReferences[0]}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px] truncate max-w-[160px]">
                  {article.publicationPlatform}
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="font-bold text-navy-900 group-hover:text-brass-700 flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Editorial Attribution Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-3 max-w-2xl mx-auto">
          <BookOpen className="w-8 h-8 text-brass-600 mx-auto" />
          <h3 className="font-serif font-bold text-navy-900 text-lg">
            Academic Integrity &amp; Verified Authorship
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            All commentaries hosted on this portal reflect actual research published across peer legal platforms including LiveLaw, Mondaq, and TaxGuru by Advocate Lalit Ajmani. Content is provided solely for academic exploration and professional discourse.
          </p>
        </div>
      </section>
    </div>
  );
}
