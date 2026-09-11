import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { getNewsletters } from "@/data/newsletters";
import { getVideos } from "@/data/videos";
import { MonthlyNewsletterSection } from "@/components/MonthlyNewsletterSection";

export const metadata: Metadata = {
  title: "Newsletters & Video Updates | Ajmani & Law Partners, New Delhi",
  description:
    "Explore monthly legal newsletters, case law commentaries, and video legal briefings by Advocate Lalit Ajmani covering High Court of Delhi practice, commercial suits, Section 138 NI Act, and arbitration.",
  keywords: [
    "Ajmani Law Partners Updates",
    "Advocate Lalit Ajmani Newsletters",
    "Delhi High Court Video Updates",
    "Section 138 NI Act Updates",
    "Commercial Courts Act Commentary",
  ],
};

export default function UpdatesPage() {
  const allNewsletters = getNewsletters();
  const allVideos = getVideos();

  return (
    <div className="space-y-12 md:space-y-16 pb-20">
      {/* Page Masthead Banner */}
      <section className="bg-navy-950 text-white border-b border-navy-800 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-sans font-medium text-brass-400 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-400">Newsletters &amp; Updates</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Newsletters &amp; Video Updates
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl leading-relaxed">
            Chambers monthly legal publications and video briefings published under the editorial direction of Advocate Lalit Ajmani (Enrolment No. D/5332/2017). Providing authoritative statutory analysis, procedural roadmaps, and social media briefings across Delhi High Court and trial court forums.
          </p>
        </div>
      </section>

      {/* Embedded Reader & Interactive Showcase with Dual Tabs */}
      <MonthlyNewsletterSection initialNewsletters={allNewsletters} initialVideos={allVideos} />
    </div>
  );
}
