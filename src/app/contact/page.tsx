import React from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building2,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { firmData } from "@/data/firm";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Chambers | Ajmani & Law Partners, Janakpuri New Delhi",
  description:
    "Contact Ajmani & Law Partners in Janakpuri, New Delhi. Reach Advocate Lalit Ajmani at +91 96544 31469 or lalit@ajmaniandlawpartners.com. Office hours and consultation form.",
};

export default function ContactPage() {
  const encodedMsg = encodeURIComponent(firmData.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${firmData.contact.whatsappNumber}?text=${encodedMsg}`;

  return (
    <div className="space-y-16 md:space-y-20 pb-16">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-16 md:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brass-500/30 text-brass-300 text-xs font-sans">
            <span>New Delhi Chambers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Contact Ajmani &amp; Law Partners
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans font-light leading-relaxed">
            We welcome inquiries from individuals, family enterprises, and corporate counsel requiring strategic dispute representation before the High Court of Delhi or District Courts across Delhi-NCR.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Particulars (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-card space-y-6">
              <h2 className="font-serif font-bold text-navy-900 text-xl border-b border-slate-100 pb-3">
                Chambers Location &amp; Contact
              </h2>

              <div className="space-y-5 text-xs text-slate-700 font-sans">
                {/* Primary Office Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brass-50 border border-brass-200 text-brass-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-navy-900 text-sm">Primary Client Chambers</div>
                    <div className="leading-relaxed">
                      {firmData.contact.primaryAddress.line1}, {firmData.contact.primaryAddress.area}, {firmData.contact.primaryAddress.city} – {firmData.contact.primaryAddress.pincode}, Delhi, India
                    </div>
                    <div className="text-[11px] text-brass-700 font-medium pt-0.5">
                      Landmark: {firmData.contact.primaryAddress.landmark}
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brass-50 border border-brass-200 text-brass-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-navy-900 text-sm">Telephone</div>
                    <a
                      href={`tel:${firmData.contact.phone}`}
                      className="text-slate-800 hover:text-brass-700 font-semibold block text-sm"
                    >
                      {firmData.contact.phoneFormatted}
                    </a>
                    <div className="text-[11px] text-slate-500">
                      Direct line for scheduling conferences &amp; urgent mentions
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brass-50 border border-brass-200 text-brass-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-navy-900 text-sm">Official Electronic Mail</div>
                    <a
                      href={`mailto:${firmData.contact.email}`}
                      className="text-slate-800 hover:text-brass-700 font-semibold block text-sm break-all"
                    >
                      {firmData.contact.email}
                    </a>
                    <div className="text-[11px] text-slate-500">
                      Formal legal filings, notices &amp; case briefings
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-navy-900 text-sm">Instant Messaging</div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1 text-xs"
                    >
                      <span>Open WhatsApp Chat (+91 96544 31469)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 font-bold text-navy-900 text-xs">
                  <Clock className="w-4 h-4 text-brass-600" />
                  <span>Consultation &amp; Chambers Hours</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1 pl-6">
                  <div>{firmData.contact.operatingHours.regular}</div>
                  <div>{firmData.contact.operatingHours.tuesday}</div>
                  <div className="text-slate-500">{firmData.contact.operatingHours.sunday}</div>
                  <div className="text-[11px] italic text-slate-500 pt-1">
                    {firmData.contact.operatingHours.note}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Directions Help Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs text-slate-600 space-y-2">
              <div className="font-serif font-bold text-navy-900 text-sm">
                Visiting Our Janakpuri Chambers
              </div>
              <p className="leading-relaxed">
                Our office is conveniently accessible via the Delhi Metro Blue Line (Janakpuri West / Janakpuri East Metro Stations) and Magenta Line interchange, located in the vicinity of Mata Chanan Devi Hospital.
              </p>
              <a
                href="https://maps.google.com/?q=Janakpuri+New+Delhi+110058"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brass-700 hover:text-brass-800 font-semibold pt-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-7 sm:p-10 shadow-card space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif font-bold text-navy-900 text-2xl">
                Transmit a Legal Inquiry
              </h2>
              <p className="text-xs text-slate-500 font-sans">
                Please provide accurate contact coordinates and a preliminary outline of your legal matter.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
