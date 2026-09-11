import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  GraduationCap,
  Award,
  BookOpen,
  Building2,
  FileCheck2,
  Phone,
  Mail,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { firmData } from "@/data/firm";
import { insightArticles } from "@/data/insights";

export const metadata: Metadata = {
  title: "Advocate Lalit Ajmani | Founding Partner, High Court of Delhi",
  description:
    "Professional profile of Advocate Lalit Ajmani (Enrolment No. D/5332/2017, Bar Council of Delhi). Alumnus of NLIU Bhopal and RGNUL Patiala. Practicing before the High Court of Delhi in Civil, Commercial, and Financial litigation.",
};

export default function AdvocateLalitAjmaniPage() {
  return (
    <div className="space-y-16 md:space-y-20 pb-16">
      {/* Profile Hero Header */}
      <section className="bg-navy-950 text-white py-16 md:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brass-500/30 text-brass-300 text-xs font-sans">
                <ShieldCheck className="w-3.5 h-3.5 text-brass-400" />
                <span>Bar Council of Delhi &bull; Enrolment No. D/5332/2017</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                Advocate Lalit Ajmani
              </h1>
              <p className="text-lg font-serif text-brass-300 font-medium">
                Founding &amp; Managing Partner, Ajmani &amp; Law Partners
              </p>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans font-light leading-relaxed">
                Advocate practicing primarily before the High Court of Delhi and District Courts across Delhi-NCR. Specializing in civil litigation, commercial contract disputes, Negotiable Instruments Act trials, and arbitration.
              </p>
            </div>

            {/* Quick Contact Badge */}
            <div className="lg:col-span-4 bg-navy-900/80 border border-brass-400/30 rounded-xl p-6 space-y-4 text-xs">
              <span className="text-[10px] uppercase tracking-widest text-brass-400 font-semibold block">
                Direct Advocate Contact
              </span>
              <div className="space-y-2 text-slate-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brass-400 shrink-0" />
                  <a href={`tel:${firmData.contact.phone}`} className="hover:text-brass-300 font-medium">
                    {firmData.contact.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brass-400 shrink-0" />
                  <a href={`mailto:${firmData.contact.email}`} className="hover:text-brass-300 font-medium truncate">
                    {firmData.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current text-brass-400 shrink-0" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <a
                    href={firmData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brass-300 font-medium truncate"
                  >
                    LinkedIn Profile &rarr;
                  </a>
                </div>
                <div className="flex items-start gap-2 pt-1 border-t border-navy-800 text-slate-400 text-[11px]">
                  <Building2 className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" />
                  <span>Janakpuri, New Delhi – 110058</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center py-2 bg-brass-400 hover:bg-brass-300 text-navy-950 rounded-md font-bold uppercase tracking-wider text-[11px] transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Profile Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Biography & Practice Overview */}
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-sans">
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
                Professional Overview
              </span>
              <h2 className="text-2xl font-serif font-bold text-navy-900">
                Litigation Practice &amp; Professional Philosophy
              </h2>
              <p>
                Advocate Lalit Ajmani is a first-generation litigator who has built a reputable dispute-resolution practice across Delhi-NCR. Enrolled with the Bar Council of Delhi in 2017 (Enrolment No. D/5332/2017), Mr. Ajmani leads Ajmani &amp; Law Partners with an emphasis on rigorous case preparation, forensic examination of electronic and documentary evidence, and strategic courtroom advocacy.
              </p>
              <p>
                His courtroom practice regularly brings him before the High Court of Delhi (including original side civil suits, commercial appellate division benches, and criminal revisional benches) as well as all principal District Court complexes in Delhi—Tis Hazari, Patiala House, Saket, Rohini, Dwarka, and Karkardooma. In addition to his primary Delhi jurisdiction, Mr. Ajmani represents domestic and foreign clients in regional court proceedings across Haryana, Rajasthan, and Madhya Pradesh.
              </p>
              <p>
                Beyond active litigation, Mr. Ajmani is a dedicated contributor to legal academia and professional discourse. His analytical articles on Section 138 of the Negotiable Instruments Act, the Arbitration and Conciliation Act, testamentary probate conflicts, and the Bharatiya Nagarik Suraksha Sanhita (BNSS) are published on authoritative platforms including <em>LiveLaw</em>, <em>Mondaq</em>, and <em>TaxGuru</em>.
              </p>
            </div>

            {/* Academic Credentials & Pedigree */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
                Pedigree &amp; Education
              </span>
              <h2 className="text-2xl font-serif font-bold text-navy-900">
                Academic Background
              </h2>

              <div className="space-y-4">
                {firmData.principal.education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-5 bg-white border border-slate-200 rounded-xl shadow-subtle flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brass-50 border border-brass-200 text-brass-800 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="text-base font-serif font-bold text-navy-900">
                          {edu.degree}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 self-start">
                          Class of {edu.year}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-brass-700">
                        {edu.institution}
                      </div>
                      {edu.honors && (
                        <div className="text-xs text-slate-600 italic">
                          {edu.honors}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & Editorial Background */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
                Editorial &amp; Research Affiliations
              </span>
              <h2 className="text-2xl font-serif font-bold text-navy-900">
                Scholarly &amp; Institutional Activities
              </h2>

              <ul className="space-y-2.5 text-xs text-slate-700 font-sans">
                {firmData.principal.editorialAndAcademic.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200/80 rounded-lg">
                    <BookOpen className="w-4 h-4 text-brass-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Public Service & Nyaya Bandhu */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-800 font-sans">
                Public Service
              </span>
              <h2 className="text-2xl font-serif font-bold text-navy-900">
                Nyaya Bandhu (Pro Bono) Legal Services
              </h2>
              <div className="p-6 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-3 text-xs text-slate-700 leading-relaxed font-sans">
                <div className="flex items-center gap-2 font-semibold text-emerald-950 text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <span>Registered Pro Bono Advocate, Department of Justice</span>
                </div>
                <p>
                  Advocate Lalit Ajmani is enrolled as a volunteer advocate with the <strong>Nyaya Bandhu (Pro Bono Club)</strong> scheme initiated by the Department of Justice, Ministry of Law and Justice, Government of India. Under this framework, he provides pro bono legal representation and advice to eligible marginalized litigants before the High Court of Delhi and district forums, ensuring access to justice without financial barriers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Key Highlights & Publications (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Facts Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card space-y-4">
              <h3 className="font-serif font-bold text-navy-900 text-base border-b border-slate-100 pb-3">
                Practitioner Summary
              </h3>

              <dl className="space-y-3 text-xs font-sans">
                <div>
                  <dt className="text-slate-400 font-medium">Full Name</dt>
                  <dd className="font-bold text-navy-900">Lalit Ajmani</dd>
                </div>
                <div>
                  <dt className="text-slate-400 font-medium">Designation</dt>
                  <dd className="text-slate-700">Founding &amp; Managing Partner</dd>
                </div>
                <div>
                  <dt className="text-slate-400 font-medium">Bar Enrolment Number</dt>
                  <dd className="font-mono font-bold text-navy-900">D/5332/2017</dd>
                </div>
                <div>
                  <dt className="text-slate-400 font-medium">Enrolment Council</dt>
                  <dd className="text-slate-700">Bar Council of Delhi</dd>
                </div>
                <div>
                  <dt className="text-slate-400 font-medium">Primary Chambers</dt>
                  <dd className="text-slate-700">Janakpuri, New Delhi – 110058</dd>
                </div>
                <div>
                  <dt className="text-slate-400 font-medium">Regular Forums</dt>
                  <dd className="text-slate-700">
                    High Court of Delhi, Delhi District Courts, NCLT New Delhi
                  </dd>
                </div>
              </dl>
            </div>

            {/* Published Insights List */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <h3 className="font-serif font-bold text-navy-900 text-base">
                Selected Published Papers
              </h3>
              <div className="space-y-3">
                {insightArticles.slice(0, 3).map((article) => (
                  <div key={article.slug} className="text-xs space-y-1 pb-3 border-b border-slate-200 last:border-none last:pb-0">
                    <span className="text-[10px] text-brass-700 font-semibold uppercase">
                      {article.publicationPlatform}
                    </span>
                    <h4 className="font-serif font-semibold text-navy-900 hover:text-brass-700 transition-colors leading-snug">
                      <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                    </h4>
                  </div>
                ))}
              </div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-1 text-xs font-bold text-brass-700 hover:text-brass-800 pt-2"
              >
                <span>Browse All Publications</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
