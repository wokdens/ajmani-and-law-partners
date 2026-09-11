import React from "react";
import type { Metadata } from "next";
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
  Search,
  Shield,
} from "lucide-react";
import { getNewsletters, getLatestNewsletter } from "@/data/newsletters";
import { EmbeddedPdfViewer } from "@/components/EmbeddedPdfViewer";
import { MonthlyNewsletterSection } from "@/components/MonthlyNewsletterSection";

export const metadata: Metadata = {
  title: "Monthly Legal Dispatch & Jurisprudence Archive | Ajmani & Law Partners",
  description:
    "Explore the complete monthly legal dispatch archive from Ajmani & Law Partners, New Delhi. Authoritative statutory analysis, Delhi High Court litigation updates, Section 138 NI Act, and commercial arbitration reviews led by Advocate Lalit Ajmani.",
  keywords: [
    "Ajmani and Law Partners Newsletter",
    "Delhi High Court Legal Dispatch",
    "Advocate Lalit Ajmani monthly publication",
    "Commercial litigation bulletin Delhi",
    "Section 138 NI Act jurisprudence",
  ],
};

export default function NewslettersPage() {
  const allNewsletters = getNewsletters();
  const latestIssue = getLatestNewsletter();

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
            <span className="text-slate-400">Monthly Legal Dispatches</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Monthly Legal Dispatch &bull; Public Archive
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl leading-relaxed">
            Every month, Ajmani &amp; Law Partners publishes a structured legal review examining procedural rulings, commercial suit decrees, and statutory reforms from the Hon&apos;ble High Court of Delhi and appellate forums.
          </p>
        </div>
      </section>

      {/* Embedded Reader & Interactive Showcase */}
      <MonthlyNewsletterSection initialNewsletters={allNewsletters} />
    </div>
  );
}
