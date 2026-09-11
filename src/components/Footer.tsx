"use client";

import React from "react";
import Link from "next/link";
import { Scale, Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { firmData } from "@/data/firm";
import { practiceAreas } from "@/data/practices";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleOpenDisclaimer = () => {
    localStorage.removeItem("alp_bci_disclaimer_accepted");
    window.location.reload();
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800/80 font-sans print:border-none">
      {/* Top Advisory Banner */}
      <div className="bg-navy-900/60 border-b border-navy-800/60 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <div className="w-8 h-8 rounded bg-brass-500/10 border border-brass-400/30 flex items-center justify-center text-brass-400 shrink-0">
              <Scale className="w-4 h-4" />
            </div>
            <span>
              <strong>Ajmani &amp; Law Partners</strong> &bull; Founded by Advocate Lalit Ajmani (Enrolment D/5332/2017, Bar Council of Delhi)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-brass-400 hover:text-brass-300 font-medium transition-colors"
            >
              <span>Schedule Delhi Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Firm Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-brass-400 text-navy-950 flex items-center justify-center font-serif font-bold text-base">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wide uppercase">
                Ajmani &amp; Law Partners
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              A strategic dispute-resolution and litigation practice based in New Delhi. Led by Advocate Lalit Ajmani, the firm appears before the High Court of Delhi, District Courts, NCLT, and regional tribunals across civil, commercial, and financial disputes.
            </p>
            <div className="text-xs text-slate-400 pt-2 space-y-1 border-t border-navy-800/80">
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-brass-400 shrink-0" />
                <span>Enrolled with Bar Council of Delhi</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-brass-400 shrink-0" />
                <span>Nyaya Bandhu (Pro Bono) Advocate, Dept. of Justice</span>
              </div>
              <div className="pt-2">
                <a
                  href={firmData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brass-400 hover:text-brass-300 font-medium transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>Connect with Advocate Lalit Ajmani</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Practice Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brass-400 font-sans">
              Core Practice Areas
            </h3>
            <ul className="space-y-2 text-xs">
              {practiceAreas.map((pa) => (
                <li key={pa.slug}>
                  <Link
                    href={`/practice-areas/${pa.slug}`}
                    className="text-slate-300 hover:text-brass-300 transition-colors block py-0.5"
                  >
                    {pa.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/practice-areas"
                  className="text-brass-400 hover:text-brass-300 font-medium inline-flex items-center gap-1"
                >
                  <span>All Practice Areas</span>
                  <span>&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Insights (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brass-400 font-sans">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-brass-300 transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link href="/advocate-lalit-ajmani" className="text-slate-300 hover:text-brass-300 transition-colors">
                  Advocate Lalit Ajmani
                </Link>
              </li>
              <li>
                <Link href="/representative-matters" className="text-slate-300 hover:text-brass-300 transition-colors">
                  Selected Matters
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-300 hover:text-brass-300 transition-colors">
                  Legal Insights
                </Link>
              </li>
              <li>
                <Link href="/newsletters" className="text-slate-300 hover:text-brass-300 transition-colors">
                  Monthly Newsletters
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-slate-300 hover:text-brass-300 transition-colors">
                  Updates (Video Briefings)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-brass-300 transition-colors">
                  Contact Office
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-300 hover:text-brass-300 transition-colors">
                  BCI Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-300 hover:text-brass-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brass-400 font-sans">
              Delhi Office &amp; Inquiries
            </h3>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" />
                <span>
                  {firmData.contact.primaryAddress.line1}, {firmData.contact.primaryAddress.area}, {firmData.contact.primaryAddress.city} – {firmData.contact.primaryAddress.pincode}
                  <span className="block text-[11px] text-slate-400">{firmData.contact.primaryAddress.landmark}</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brass-400 shrink-0" />
                <a
                  href={`tel:${firmData.contact.phone}`}
                  className="hover:text-brass-300 font-medium transition-colors"
                >
                  {firmData.contact.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brass-400 shrink-0" />
                <a
                  href={`mailto:${firmData.contact.email}`}
                  className="hover:text-brass-300 font-medium transition-colors truncate"
                >
                  {firmData.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400 text-[11px] pt-1">
                <Clock className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" />
                <div>
                  <div>{firmData.contact.operatingHours.regular}</div>
                  <div>{firmData.contact.operatingHours.tuesday}</div>
                  <div className="text-slate-400 italic mt-0.5">{firmData.contact.operatingHours.note}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure Box */}
        <div className="mt-12 pt-6 border-t border-navy-800 text-[11px] text-slate-400 leading-relaxed bg-navy-900/40 p-4 rounded-lg">
          <p className="font-semibold text-slate-300 mb-1">
            Bar Council of India Disclaimer:
          </p>
          <p>
            As per the rules of the Bar Council of India, law firms and advocates are not permitted to solicit work or advertise in any manner. This website is hosted solely for informational purposes and to provide information upon voluntary user request. Merely accessing this website or sending communication does not establish an advocate-client relationship. Users should not act based solely on information provided herein and are advised to seek independent formal legal advice.
          </p>
          <div className="mt-2">
            <button
              type="button"
              onClick={handleOpenDisclaimer}
              className="text-brass-400 hover:text-brass-300 underline font-medium text-[11px]"
            >
              Re-open Bar Council Disclaimer Acknowledgement
            </button>
          </div>
        </div>

        {/* Bottom Legal Band */}
        <div className="mt-8 pt-6 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Ajmani &amp; Law Partners. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/disclaimer" className="hover:text-slate-200 transition-colors">
              Disclaimer
            </Link>
            <span>&bull;</span>
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
