import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Scale, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import { firmData } from "@/data/firm";

export const metadata: Metadata = {
  title: "Disclaimer & Bar Council Compliance | Ajmani & Law Partners",
  description:
    "Official regulatory disclaimer under Rule 36 of the Bar Council of India Rules. Informational access policy and terms of legal communication for Ajmani & Law Partners.",
};

export default function DisclaimerPage() {
  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Hero */}
      <section className="bg-navy-950 text-white py-14 md:py-16 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brass-500/30 text-brass-300 text-xs font-sans">
            <Scale className="w-3.5 h-3.5" />
            <span>Rule 36, Bar Council of India Rules</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Regulatory Disclaimer &amp; Legal Notice
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
            Mandatory disclosure governing access to and communication through the digital portal of Ajmani &amp; Law Partners, Advocates &amp; Legal Consultants, New Delhi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-card space-y-8 text-sm text-slate-700 leading-relaxed font-sans">
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-navy-900">
              1. Prohibition of Advertising &amp; Solicitation
            </h2>
            <p>
              Under the rules formulated by the <strong>Bar Council of India</strong> pursuant to the Advocates Act, 1961, advocates and law firms in India are not permitted to advertise, solicit work, or induce clients in any commercial manner.
            </p>
            <p>
              This website is published solely to provide factual information concerning the professional credentials, educational background, published research, and contact details of <strong>Ajmani &amp; Law Partners</strong> and its founding partner, <strong>Advocate Lalit Ajmani (Enrolment No. D/5332/2017)</strong>, strictly upon the voluntary access and request of the user.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-serif font-bold text-navy-900">
              2. User Acknowledgement &amp; Informational Purpose
            </h2>
            <p>
              By accessing, browsing, or utilizing this website, you explicitly acknowledge, certify, and confirm that:
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                <span>
                  You are seeking information relating to Ajmani &amp; Law Partners of your own accord and without any solicitation, inducement, or marketing overture from the firm or any of its advocates.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                <span>
                  The material and commentary provided on this website are exclusively intended for informational, educational, and general guidance purposes and must not be treated as formal legal advice.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                <span>
                  Transmission of information through web forms, emails, or telephone inquiries does not create an advocate-client relationship. An attorney-client relationship is formally established only upon mutual execution of a formal vakalatnama or engagement agreement.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-serif font-bold text-navy-900">
              3. Absence of Warranty &amp; Limitation of Liability
            </h2>
            <p>
              Ajmani &amp; Law Partners makes no representation or warranty regarding the accuracy, adequacy, or completeness of the statutes, judicial decisions, or legal analyses discussed on this platform. Indian law evolves through ongoing legislative amendments and judicial pronouncements.
            </p>
            <p>
              Neither the firm nor Advocate Lalit Ajmani shall be held liable for any loss, damage, or legal consequence suffered by any individual or entity acting or refraining from acting based on the material published on this website. Users facing specific disputes must obtain formal, independent legal counsel tailored to their distinct factual matrix.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-serif font-bold text-navy-900">
              4. Confidentiality of Electronic Communications
            </h2>
            <p>
              Please note that electronic inquiries submitted via unencrypted web forms or general email do not automatically enjoy statutory attorney-client confidentiality. Users are strictly advised not to transmit proprietary trade secrets, sensitive personal information, or privileged materials through the preliminary web contact form.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-500">
              Last Regulatory Revision: September 2026 &bull; New Delhi, India
            </span>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-bold text-navy-900 hover:text-brass-700 transition-colors"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
