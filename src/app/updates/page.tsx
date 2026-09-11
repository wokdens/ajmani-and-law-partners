import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Video } from "lucide-react";
import { getVideos } from "@/data/videos";
import { VideoUpdatesSection } from "@/components/VideoUpdatesSection";

export const metadata: Metadata = {
  title: "Updates & Video Briefings | Ajmani & Law Partners, New Delhi",
  description:
    "Explore chambers video updates, statutory explainers, and legal commentary by Advocate Lalit Ajmani covering High Court of Delhi practice, commercial suits, Section 138 NI Act, and arbitration.",
  keywords: [
    "Ajmani Law Partners Updates",
    "Advocate Lalit Ajmani Video Updates",
    "Delhi High Court Video Briefings",
    "Section 138 NI Act Legal Updates",
    "Commercial Courts Act Video Commentary",
  ],
};

export default function UpdatesPage() {
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
            <span className="text-slate-400">Updates</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-400/30 text-red-400 text-xs font-sans tracking-wide">
            <Video className="w-3.5 h-3.5 text-red-500" />
            <span>Chambers Video &amp; Social Briefings &bull; New Delhi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Updates
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl leading-relaxed">
            Short-form legal video updates, statutory explainers, and courtroom practice briefings published by Advocate Lalit Ajmani (Enrolment No. D/5332/2017) across LinkedIn, Instagram Reels, YouTube, and Facebook.
          </p>
        </div>
      </section>

      {/* Video Updates Showcase */}
      <VideoUpdatesSection videos={allVideos} showHeader={false} />
    </div>
  );
}
