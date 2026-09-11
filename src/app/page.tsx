import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  Shield,
  BookOpen,
  ArrowRight,
  Gavel,
  FileText,
  Phone,
  Mail,
  CheckCircle,
  Building2,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { firmData } from "@/data/firm";
import { practiceAreas } from "@/data/practices";
import { insightArticles } from "@/data/insights";
import { representativeMatters } from "@/data/matters";
import { ContactForm } from "@/components/ContactForm";
import { CourtJurisdictionExplorer } from "@/components/CourtJurisdictionExplorer";
import { MonthlyNewsletterSection } from "@/components/MonthlyNewsletterSection";
import { VideoUpdatesSection } from "@/components/VideoUpdatesSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import { getNewsletters } from "@/data/newsletters";
import { getVideos } from "@/data/videos";

export default function HomePage() {
  const newsletters = getNewsletters();
  const videos = getVideos();
  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* =========================================================================
          SECTION 1: DYNAMIC HERO CAROUSEL (6 Slides & Interactive Dots)
         ========================================================================= */}
      <HeroCarousel />

      {/* =========================================================================
          SECTION 1.5: VERIFIED BAR COUNCIL CREDENTIALS & PRINCIPAL ADVOCATE
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-10 relative z-20">
        <div className="bg-navy-950 border border-brass-400/30 rounded-2xl shadow-xl overflow-hidden">
          {/* Top Bar: Key Verified Credentials */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-navy-800 border-b border-navy-800 text-xs p-4 sm:p-6 text-slate-300">
            <div className="flex items-center gap-3 py-2 px-2">
              <Shield className="w-5 h-5 text-brass-400 shrink-0" />
              <div>
                <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Bar Council Enrolment</span>
                <strong className="text-white text-sm font-semibold">D/5332/2017</strong>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2 px-2">
              <Scale className="w-5 h-5 text-brass-400 shrink-0" />
              <div>
                <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Primary Judicial Forum</span>
                <strong className="text-white text-sm font-semibold">High Court of Delhi</strong>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2 px-2">
              <BookOpen className="w-5 h-5 text-brass-400 shrink-0" />
              <div>
                <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Legal Alma Mater</span>
                <strong className="text-white text-sm font-semibold">NLIU Bhopal &bull; RGNUL</strong>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2 px-2">
              <Building2 className="w-5 h-5 text-brass-400 shrink-0" />
              <div>
                <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Chambers &amp; Office</span>
                <strong className="text-white text-sm font-semibold">Janakpuri, New Delhi</strong>
              </div>
            </div>
          </div>

          {/* Principal Advocate Profile Snapshot */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brass-400/30 text-brass-300 text-xs font-sans tracking-wide">
                <span className="w-2 h-2 rounded-full bg-brass-400" />
                <span>Managing Partner &bull; Ajmani &amp; Law Partners</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Lalit Ajmani, Advocate
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-sans font-light max-w-3xl">
                Advocate Lalit Ajmani graduated with B.A. LL.B. (Hons.) from the National Law Institute University (NLIU), Bhopal, and obtained his Master of Laws (LL.M.) in Criminal Law from the Rajiv Gandhi National University of Law (RGNUL), Patiala. Enrolled with the Bar Council of Delhi in 2017, he practices before the Hon&apos;ble High Court of Delhi, District Commercial Courts, and appellate tribunals. Registered Pro Bono Advocate under the Nyaya Bandhu initiative of the Department of Justice, Government of India.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-brass-400" />
                  <span>Substantive Civil &amp; Commercial Litigation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-brass-400" />
                  <span>Section 138 Negotiable Instruments Act Trials</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-brass-400" />
                  <span>Commercial Arbitration &amp; Enforcement</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:border-l lg:border-navy-800 lg:pl-8">
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Legal Commentary:</span>
                  <span className="text-slate-200 font-medium">LiveLaw, Mondaq, TaxGuru</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Direct Mobile:</span>
                  <span className="text-slate-200 font-medium">{firmData.contact.phoneFormatted}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Official Email:</span>
                  <span className="text-slate-200 font-medium truncate max-w-[180px]">{firmData.contact.email}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href="/advocate-lalit-ajmani"
                  className="w-full py-2.5 px-4 bg-brass-400 hover:bg-brass-300 text-navy-950 font-sans font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm text-center"
                >
                  <span>View Complete Advocate Profile</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 bg-navy-900 hover:bg-navy-800 text-slate-200 hover:text-white border border-slate-700 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <span>Book Chamber Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MONTHLY LEGAL NEWSLETTERS (In-Page PDF Reader & Archive)
         ========================================================================= */}
      <MonthlyNewsletterSection initialNewsletters={newsletters} />

      {/* =========================================================================
          SECTION 2.5: CHAMBERS UPDATES (Video Briefings & Social Commentary)
         ========================================================================= */}
      <VideoUpdatesSection videos={videos} />

      {/* =========================================================================
          SECTION 3: FIRM OVERVIEW & LITIGATION ETHOS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
                Litigation Practice
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 leading-snug">
                Rigorous Legal Preparation &bull; Structured Dispute Strategy
              </h2>
              <p className="text-xs text-slate-500 italic">
                &ldquo;Every successful courtroom outcome is built upon exhaustive evidentiary review and precise statutory drafting before entering the courtroom.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 text-sm text-slate-700 leading-relaxed font-sans">
              <p>
                Ajmani &amp; Law Partners operates with a steadfast focus on litigation discipline. We understand that in modern dispute resolution—whether in a commercial suit under the Commercial Courts Act, a complex cheque bounce prosecution under Section 138 of the Negotiable Instruments Act, or contested partition proceedings—outcomes hinge on documentary precision and adherence to strict procedural timelines.
              </p>
              <p>
                Rather than treating litigation as an open-ended process, we formulate comprehensive dispute roadmaps at the pre-litigation notice stage. Our firm represents individual clients, family businesses, and corporate entities with transparent counsel, personal advocate availability, and ethical integrity.
              </p>
              <div className="pt-2 flex items-center gap-6 text-xs text-navy-900 font-semibold">
                <Link href="/about" className="inline-flex items-center gap-1 text-brass-700 hover:text-brass-800">
                  <span>About Our Practice Approach</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/representative-matters" className="inline-flex items-center gap-1 text-slate-600 hover:text-navy-900">
                  <span>View Public Matters</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: VERIFIED PRACTICE AREAS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
              Areas of Practice
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 mt-1">
              Litigation &amp; Dispute Resolution Disciplines
            </h2>
          </div>
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brass-700 hover:text-brass-800 uppercase tracking-wider"
          >
            <span>Complete Practice Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {practiceAreas.map((pa) => (
            <div
              key={pa.slug}
              className="bg-white border border-slate-200/90 hover:border-brass-400 rounded-xl p-6 sm:p-7 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded bg-slate-100 text-slate-700 group-hover:bg-brass-50 group-hover:text-brass-800 transition-colors">
                    {pa.badge}
                  </span>
                  <Gavel className="w-4 h-4 text-slate-400 group-hover:text-brass-600 transition-colors" />
                </div>

                <h3 className="text-lg font-serif font-bold text-navy-900 group-hover:text-brass-800 transition-colors leading-snug">
                  <Link href={`/practice-areas/${pa.slug}`}>{pa.title}</Link>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                  {pa.summary}
                </p>

                {/* Key Statutes Mention */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">
                    Statutory Framework:
                  </span>
                  <div className="text-xs text-slate-700 truncate font-medium">
                    {pa.statutes[0]}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <Link
                  href={`/practice-areas/${pa.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-brass-700 transition-colors"
                >
                  <span>Explore Scope &amp; Procedure</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          DELHI COURT JURISDICTION MAP & FORUM EXPLORER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CourtJurisdictionExplorer />
      </section>

      {/* =========================================================================
          SECTION 4: VERIFIED PUBLISHED INSIGHTS & MATTERS
         ========================================================================= */}
      <section className="bg-slate-100/70 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
                Legal Scholarship &amp; Case Records
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 mt-1">
                Published Analysis &amp; Selected Matters
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brass-700 hover:text-brass-800 uppercase tracking-wider"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Insights Articles (8 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 font-sans">
                Published Commentary by Advocate Lalit Ajmani
              </h3>
              <div className="space-y-4">
                {insightArticles.slice(0, 3).map((article) => (
                  <article
                    key={article.slug}
                    className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-subtle hover:shadow-card transition-shadow"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-medium text-brass-700">{article.publicationPlatform}</span>
                      <span>{article.date} &bull; {article.readTime}</span>
                    </div>

                    <h4 className="text-base font-serif font-bold text-navy-900 hover:text-brass-700 transition-colors leading-snug">
                      <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500">{article.category}</span>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="text-navy-900 hover:text-brass-700 font-bold inline-flex items-center gap-1"
                      >
                        <span>Read Commentary</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Representative Matters (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 font-sans">
                Publicly Documented Court Matters
              </h3>
              <div className="space-y-4">
                {representativeMatters.slice(0, 3).map((matter) => (
                  <div
                    key={matter.id}
                    className="bg-white border border-slate-200 rounded-xl p-5 shadow-subtle space-y-2"
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="px-2 py-0.5 rounded bg-slate-100 font-medium text-slate-700">
                        {matter.forum}
                      </span>
                      <span className="font-mono text-navy-900 font-medium">{matter.caseNumber}</span>
                    </div>

                    <h4 className="text-sm font-serif font-bold text-navy-900 leading-snug">
                      {matter.caseTitle}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {matter.matterSummary}
                    </p>

                    <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-100">
                      Source: {matter.publicSource}
                    </div>
                  </div>
                ))}

                <Link
                  href="/representative-matters"
                  className="block w-full py-3 px-4 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold uppercase tracking-wider rounded-lg text-center transition-colors shadow-sm"
                >
                  View All Documented Court Matters &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CONTACT & CONSULTATION REQUEST
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Office Context & Direct Details (5 cols) */}
            <div className="lg:col-span-5 bg-navy-950 text-white p-8 sm:p-12 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-brass-400 font-sans">
                    Legal Inquiry &bull; New Delhi
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                    Discuss Your Legal Matter
                  </h2>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
                  Clients seeking procedural guidance or court representation before the High Court of Delhi or District Courts may schedule an initial consultation at our Janakpuri office or via teleconference.
                </p>

                <div className="space-y-4 text-xs font-sans">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Office Address</div>
                      <div className="text-slate-300">
                        {firmData.contact.primaryAddress.line1}, {firmData.contact.primaryAddress.area}
                      </div>
                      <div className="text-slate-400">
                        {firmData.contact.primaryAddress.city} – {firmData.contact.primaryAddress.pincode}
                      </div>
                      <div className="text-[11px] text-brass-300 mt-0.5">
                        {firmData.contact.primaryAddress.landmark}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brass-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Direct Telephone</div>
                      <a
                        href={`tel:${firmData.contact.phone}`}
                        className="text-slate-300 hover:text-brass-300 font-medium"
                      >
                        {firmData.contact.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-brass-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Direct Email</div>
                      <a
                        href={`mailto:${firmData.contact.email}`}
                        className="text-slate-300 hover:text-brass-300 font-medium"
                      >
                        {firmData.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Hours & BCI Disclaimers */}
              <div className="pt-6 border-t border-navy-800 text-[11px] text-slate-400 space-y-1">
                <div className="text-slate-300 font-semibold">Office Hours:</div>
                <div>{firmData.contact.operatingHours.regular}</div>
                <div>{firmData.contact.operatingHours.tuesday}</div>
                <div className="italic text-slate-400 mt-1">{firmData.contact.operatingHours.note}</div>
              </div>
            </div>

            {/* Interactive Form (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-navy-900">
                  Transmit an Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-sans">
                  Fill in the particulars below. Our litigation team reviews submissions during standard office hours.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
