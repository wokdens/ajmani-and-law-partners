import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Scale,
  Gavel,
  BookOpen,
  Building2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldAlert,
  Phone,
} from "lucide-react";
import { practiceAreas } from "@/data/practices";
import { firmData } from "@/data/firm";
import { ContactForm } from "@/components/ContactForm";
import { LitigationTimeline } from "@/components/LitigationTimeline";

interface PracticePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return practiceAreas.map((pa) => ({
    slug: pa.slug,
  }));
}

export function generateMetadata({ params }: PracticePageProps): Metadata {
  const practice = practiceAreas.find((pa) => pa.slug === params.slug);
  if (!practice) {
    return {
      title: "Practice Area Not Found | Ajmani & Law Partners",
    };
  }

  return {
    title: `${practice.title} | Ajmani & Law Partners, New Delhi`,
    description: practice.summary,
    alternates: {
      canonical: `https://ajmaniandlawpartners.com/practice-areas/${practice.slug}`,
    },
  };
}

export default function SinglePracticeAreaPage({ params }: PracticePageProps) {
  const practice = practiceAreas.find((pa) => pa.slug === params.slug);

  if (!practice) {
    notFound();
  }

  return (
    <div className="space-y-16 md:space-y-20 pb-16">
      {/* =========================================================================
          HERO BANNER
         ========================================================================= */}
      <section className="bg-navy-950 text-white py-16 md:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-sans text-slate-400">
            <Link href="/" className="hover:text-brass-300">
              Home
            </Link>
            <span>/</span>
            <Link href="/practice-areas" className="hover:text-brass-300">
              Practice Areas
            </Link>
            <span>/</span>
            <span className="text-brass-400">{practice.shortTitle}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brass-500/30 text-brass-300 text-xs font-sans">
            <span>{practice.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {practice.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans font-light leading-relaxed">
            {practice.heroExcerpt}
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: PROCEDURAL LIFECYCLE & SCOPE
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-sans">
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
                Litigation Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
                Procedural Lifecycle &amp; Court Representation
              </h2>
              <p>{practice.summary}</p>
            </div>

            {/* Procedural Scope Steps */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-navy-900">
                Key Procedural Stages We Handle
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {practice.proceduralScope.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-slate-200 rounded-xl shadow-subtle flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-brass-50 border border-brass-200 text-brass-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs text-slate-700 leading-relaxed font-sans">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Litigation Timeline */}
            <div className="pt-4 border-t border-slate-200">
              <LitigationTimeline />
            </div>

            {/* Section 2: Specific Legal Situations Handled */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
                Matters Addressed
              </span>
              <h2 className="text-2xl font-serif font-bold text-navy-900">
                Client Situations &amp; Dispute Contexts
              </h2>

              <div className="space-y-4">
                {practice.situationsCovered.map((situation, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 bg-white border border-slate-200 rounded-xl shadow-subtle space-y-1.5"
                  >
                    <h4 className="text-base font-serif font-bold text-navy-900">
                      {situation.heading}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {situation.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: How the Firm Assists */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
                Firm Strategy
              </span>
              <h2 className="text-2xl font-serif font-bold text-navy-900">
                How Ajmani &amp; Law Partners Represents You
              </h2>

              <ul className="space-y-3">
                {practice.firmAssistance.map((assist, aIdx) => (
                  <li
                    key={aIdx}
                    className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200/80 rounded-lg text-xs text-slate-700 font-sans"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{assist}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar: Statutes, Forums & Consultation (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Governing Statutes */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card space-y-4">
              <h3 className="font-serif font-bold text-navy-900 text-base border-b border-slate-100 pb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brass-600" />
                <span>Statutory Framework</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 font-sans">
                {practice.statutes.map((st, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass-600 font-bold">&bull;</span>
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Forums */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card space-y-4">
              <h3 className="font-serif font-bold text-navy-900 text-base border-b border-slate-100 pb-3 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brass-600" />
                <span>Jurisdictional Forums</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 font-sans">
                {practice.keyForums.map((forum, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass-600 font-bold">&bull;</span>
                    <span>{forum}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Telephone Access */}
            <div className="bg-navy-950 text-white rounded-2xl p-6 space-y-4 border border-navy-800">
              <h4 className="text-sm font-serif font-bold text-brass-300">
                Need Counsel in {practice.shortTitle}?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Contact Advocate Lalit Ajmani&apos;s litigation desk directly to discuss notices, hearing dates, or case filings.
              </p>
              <a
                href={`tel:${firmData.contact.phone}`}
                className="w-full py-2.5 px-4 bg-brass-400 hover:bg-brass-300 text-navy-950 font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-wider"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: {firmData.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: INQUIRY FORM
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-card">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
                Consultation Request
              </span>
              <h3 className="text-2xl font-serif font-bold text-navy-900">
                Discuss Your {practice.shortTitle} Matter
              </h3>
              <p className="text-xs text-slate-500 font-sans">
                Submit details regarding your notice, suit, or appellate timeline below.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Back to All Practices */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Link
          href="/practice-areas"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-navy-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Practice Areas</span>
        </Link>
      </div>
    </div>
  );
}
