import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Lock } from "lucide-react";
import { firmData } from "@/data/firm";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Handling | Ajmani & Law Partners",
  description:
    "Privacy and data protection practices of Ajmani & Law Partners. Explains how consultation inquiries, contact information, and local preferences are handled with strict professional integrity.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Hero */}
      <section className="bg-navy-950 text-white py-14 md:py-16 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brass-500/30 text-brass-300 text-xs font-sans">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection &amp; Confidentiality</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
            How Ajmani &amp; Law Partners handles client contact information, consultation inquiries, and technical website access data.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-card space-y-8 text-sm text-slate-700 leading-relaxed font-sans">
          <div className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-navy-900">
              1. Commitment to Privacy &amp; Legal Ethics
            </h2>
            <p>
              At <strong>Ajmani &amp; Law Partners</strong>, we hold client privacy and professional confidentiality as foundational duties. This Privacy Policy details the limited circumstances under which personal data is collected when you navigate our digital portal or transmit an inquiry to our New Delhi office.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-serif font-bold text-navy-900">
              2. Information Collected Through the Consultation Form
            </h2>
            <p>
              When you choose to submit an inquiry through our contact form, we collect only the information you voluntarily provide:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li>Full Legal Name</li>
              <li>Contact Telephone Number</li>
              <li>Email Address</li>
              <li>Classification of Legal Dispute (e.g. Civil Suit, Cheque Dishonour, Commercial Appeal)</li>
              <li>Preferred Mode of Communication</li>
              <li>Brief factual summary of the inquiry</li>
            </ul>
            <p>
              This information is used exclusively by Advocate Lalit Ajmani and authorized litigation personnel to evaluate whether our practice can assist with your matter and to coordinate a consultation conference.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-serif font-bold text-navy-900">
              3. Non-Disclosure &amp; Security
            </h2>
            <p>
              We do not sell, rent, commercialize, or disclose your contact information to any marketing agencies or third parties. Information transmitted to our office is securely processed and accessible only to legal personnel bound by professional obligations of confidentiality under the Advocates Act, 1961.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-serif font-bold text-navy-900">
              4. Cookies &amp; Local Storage
            </h2>
            <p>
              This website does not deploy invasive tracking pixels, cross-site profiling cookies, or behavioral advertising mechanisms. We utilize standard local browser storage solely to record your acknowledgement of the Bar Council of India regulatory disclaimer, ensuring you are not repeatedly prompted during your visit.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-serif font-bold text-navy-900">
              5. Contact Regarding Your Data
            </h2>
            <p>
              If you have any questions regarding the handling of your inquiry or wish to request the deletion of preliminary records submitted through our website, please email us directly at:{" "}
              <a href={`mailto:${firmData.contact.email}`} className="text-brass-700 font-semibold underline">
                {firmData.contact.email}
              </a>.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-500">
              Effective Date: September 2026 &bull; Ajmani &amp; Law Partners, New Delhi
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
