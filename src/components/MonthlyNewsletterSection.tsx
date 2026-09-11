"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Calendar,
  Download,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Archive,
  CheckCircle2,
  Mail,
  ExternalLink,
} from "lucide-react";
import { NewsletterIssue } from "@/data/newsletters";
import { EmbeddedPdfViewer } from "@/components/EmbeddedPdfViewer";

interface MonthlyNewsletterSectionProps {
  initialNewsletters: NewsletterIssue[];
  showHeader?: boolean;
}

export function MonthlyNewsletterSection({
  initialNewsletters,
  showHeader = true,
}: MonthlyNewsletterSectionProps) {
  const [newsletters] = useState<NewsletterIssue[]>(initialNewsletters);
  const [selectedIssue, setSelectedIssue] = useState<NewsletterIssue>(
    initialNewsletters.find((n) => n.isLatest) || initialNewsletters[0]
  );
  const [subscribeEmail, setSubscribeEmail] = useState<string>("");
  const [subscribeSuccess, setSubscribeSuccess] = useState<boolean>(false);

  const previousEditions = newsletters.filter((n) => n.id !== selectedIssue.id);

  const handleSelectIssue = (issue: NewsletterIssue) => {
    setSelectedIssue(issue);
    const viewerElement = document.getElementById("newsletter-embedded-reader");
    if (viewerElement) {
      viewerElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribeEmail) {
      setSubscribeSuccess(true);
      setSubscribeEmail("");
    }
  };

  return (
    <section id="monthly-newsletter" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Masthead Header */}
      {showHeader && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brass-400/10 border border-brass-400/30 text-brass-700 text-xs font-sans font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brass-600" />
              <span>Chambers Monthly Publications &bull; New Delhi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-navy-900 tracking-tight">
              Monthly Newsletters
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans mt-2 max-w-3xl leading-relaxed">
              Authoritative monthly legal dispatches, statutory analyses, and case law commentaries published under the editorial direction of Advocate Lalit Ajmani (Enrolment No. D/5332/2017) across High Court and trial court forums.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/newsletters"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-100 text-xs font-semibold tracking-wide transition-colors"
            >
              <Archive className="w-3.5 h-3.5 text-brass-400" />
              <span>All Newsletters &amp; Archive</span>
            </Link>
          </div>
        </div>
      )}

      {/* Main Grid: Active Newsletter Details & Interactive Multi-Page Embedded Viewer */}
      <div id="newsletter-embedded-reader" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Dispatch Overview & Editorial Notes */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold font-sans uppercase tracking-wider px-2.5 py-1 rounded-full bg-navy-950 text-brass-400 border border-brass-400/30">
                <FileText className="w-3.5 h-3.5" />
                Latest Monthly Dispatch
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {selectedIssue.month}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono font-semibold text-brass-700 uppercase">
                {selectedIssue.volume}
              </span>
              <h3 className="text-xl font-serif font-bold text-navy-900 mt-1 leading-snug">
                {selectedIssue.title}
              </h3>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-b border-slate-100 py-3.5 space-y-2">
              <p className="font-medium text-slate-800">Editorial Overview:</p>
              <p>{selectedIssue.summary}</p>
            </div>

            {/* Topic Chips */}
            <div className="space-y-2">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-400 block">
                Topics &amp; Areas Covered:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedIssue.topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-sans font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <a
                href={selectedIssue.pdfUrl}
                download
                className="w-full py-2.5 px-4 bg-[#a67c52] hover:bg-[#8f6943] text-white font-sans font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm text-center"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Newsletter PDF</span>
              </a>

              <a
                href={selectedIssue.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-sans font-medium text-xs rounded-lg flex items-center justify-center gap-2 transition-colors text-center"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                <span>Open Full PDF in New Tab</span>
              </a>
            </div>
          </div>

          {/* JSA-Style High-Impact Newsletter Subscription Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1c0810] via-[#12050b] to-[#080205] text-white p-6 border border-red-950/70 shadow-xl space-y-5">
            {/* Subtle glow effects */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-red-800/20 blur-3xl pointer-events-none" />

            {/* Firm Header */}
            <div className="relative z-10 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-2xl tracking-tighter text-white">alp</span>
                <div className="h-5 w-px bg-white/20 ml-1" />
                <span className="text-[11px] font-sans uppercase tracking-widest text-slate-300 font-medium">
                  advocates &amp; solicitors
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-sans mt-0.5 tracking-wider">
                Ajmani &amp; Law Partners &bull; New Delhi
              </div>
            </div>

            {/* Subscription Headline */}
            <div className="relative z-10 space-y-1.5">
              <h4 className="text-base sm:text-lg font-sans font-black tracking-tight text-white uppercase leading-snug">
                TO SUBSCRIBE TO OUR NEWSLETTERS &amp; UPDATES
              </h4>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Receive each new monthly edition directly in your email upon publication.
              </p>
            </div>

            {/* 1-Click Subscribe Form */}
            {subscribeSuccess ? (
              <div className="relative z-10 bg-emerald-950/80 border border-emerald-500/40 rounded-xl p-4 text-center space-y-1.5 animate-in fade-in duration-200">
                <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscription Confirmed</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  You will receive our next monthly dispatch directly in your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative z-10 space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-black/50 border border-white/20 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                />

                <button
                  type="submit"
                  className="w-full py-3 px-5 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-red-600/40 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>CLICK HERE</span>
                  <span className="text-sm group-hover:scale-125 transition-transform">👆</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Embedded Multi-Page PDF Viewer */}
        <div className="lg:col-span-8">
          <EmbeddedPdfViewer issue={selectedIssue} />
        </div>
      </div>

      {/* Previous Editions Archive Selector */}
      {previousEditions.length > 0 && (
        <div className="mt-12 pt-8 border-t border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
                Archive &bull; Past Editions
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 mt-1">
                Explore Previous Monthly Newsletters
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              Click any issue below to immediately load it into the scrollable reader above
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {previousEditions.map((prevIssue) => (
              <div
                key={prevIssue.id}
                className="bg-white border rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group border-slate-200 hover:border-slate-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 font-medium">
                      {prevIssue.volume}
                    </span>
                    <span className="font-semibold text-brass-700">
                      {prevIssue.month}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-navy-900 group-hover:text-brass-700 transition-colors text-sm line-clamp-2 leading-snug">
                    {prevIssue.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-sans font-light">
                    {prevIssue.summary}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {prevIssue.topics.slice(0, 2).map((top, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                      >
                        {top}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleSelectIssue(prevIssue)}
                    className="px-3 py-1.5 rounded-md bg-navy-900 hover:bg-navy-800 text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-brass-400" />
                    <span>Load in Reader</span>
                  </button>

                  <a
                    href={prevIssue.pdfUrl}
                    download
                    title="Download PDF"
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 hover:text-navy-950 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
