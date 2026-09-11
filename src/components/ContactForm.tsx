"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertTriangle, ShieldAlert, Loader2 } from "lucide-react";
import { practiceAreas } from "@/data/practices";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  matterType: string;
  preferredMethod: string;
  description: string;
  consent: boolean;
  website_honeypot?: string; // Bot trap
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    matterType: "Civil Litigation & Substantive Suits",
    preferredMethod: "Phone Call",
    description: "",
    consent: false,
    website_honeypot: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validations
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMessage("Please enter a valid telephone contact number.");
      return;
    }
    if (!formData.description.trim()) {
      setErrorMessage("Please provide a brief outline of the matter.");
      return;
    }
    if (!formData.consent) {
      setErrorMessage("Please acknowledge that submitting this form does not establish an advocate-client relationship.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "Unable to submit your inquiry at this moment. Please call the office directly.");
      }
    } catch {
      setErrorMessage("A network transmission error occurred. Please reach us via telephone or direct WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-serif font-bold text-slate-900">
          Inquiry Successfully Dispatched
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you for contacting <strong>Ajmani &amp; Law Partners</strong>. Advocate Lalit Ajmani or our litigation desk will review your submission and contact you via your preferred method during standard office hours.
        </p>
        <div className="pt-2 text-xs text-slate-500">
          For urgent matters listed for hearing today or tomorrow, please call:{" "}
          <a href="tel:+919654431469" className="font-semibold text-emerald-800 underline">
            +91 96544 31469
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              matterType: "Civil Litigation & Substantive Suits",
              preferredMethod: "Phone Call",
              description: "",
              consent: false,
              website_honeypot: "",
            });
          }}
          className="mt-4 inline-block px-5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Prominent Confidentiality Warning */}
      <div className="bg-amber-50/80 border border-amber-200/80 rounded-lg p-3.5 flex items-start gap-3 text-xs text-amber-900">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-semibold">Confidentiality Notice:</span> Please do not include privileged, confidential, or sensitive trade secret details in this web form. Formal attorney-client privilege begins only upon formal retention and fee engagement.
        </div>
      </div>

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3.5 flex items-start gap-3 text-xs text-red-800">
          <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div>{errorMessage}</div>
        </div>
      )}

      {/* Honeypot field (hidden from legitimate users, traps bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_honeypot">Leave this blank</label>
        <input
          id="website_honeypot"
          type="text"
          name="website_honeypot"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website_honeypot}
          onChange={(e) => setFormData({ ...formData, website_honeypot: e.target.value })}
        />
      </div>

      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Legal Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            placeholder="e.g. Rajesh Malhotra"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brass-400 focus:border-brass-400 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="e.g. client@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brass-400 focus:border-brass-400 transition-colors"
          />
        </div>
      </div>

      {/* Phone and Matter Classification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="+91 98XXX XXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brass-400 focus:border-brass-400 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="matterType" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Nature of Legal Matter <span className="text-red-500">*</span>
          </label>
          <select
            id="matterType"
            value={formData.matterType}
            onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
            className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brass-400 focus:border-brass-400 transition-colors"
          >
            {practiceAreas.map((pa) => (
              <option key={pa.slug} value={pa.title}>
                {pa.title}
              </option>
            ))}
            <option value="Criminal Revision / Bail Matter">Criminal Defense / Bail Matter</option>
            <option value="Constitutional Writ Petition (Delhi HC)">Constitutional Writ Petition (Delhi HC)</option>
            <option value="Corporate / Contractual Drafting">Corporate Advisory &amp; Legal Drafting</option>
            <option value="Other Legal Dispute">Other Substantive Legal Dispute</option>
          </select>
        </div>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          Preferred Response Method
        </label>
        <div className="grid grid-cols-3 gap-3">
          {["Phone Call", "WhatsApp", "Email"].map((method) => (
            <label
              key={method}
              className={`flex items-center justify-center py-2.5 px-3 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                formData.preferredMethod === method
                  ? "bg-navy-900 text-white border-navy-900 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name="preferredMethod"
                value={method}
                checked={formData.preferredMethod === method}
                onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                className="sr-only"
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Matter Summary */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
            Brief Outline of Legal Issue <span className="text-red-500">*</span>
          </label>
          <span className={`text-[11px] font-mono ${formData.description.length > 1800 ? "text-amber-600 font-bold" : "text-slate-400"}`}>
            {formData.description.length} / 2000 chars
          </span>
        </div>
        <textarea
          id="description"
          rows={4}
          maxLength={2000}
          required
          placeholder="Please summarize the general dispute situation, whether any court notices or bank memos have been received, and relevant deadlines or hearing dates..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brass-400 focus:border-brass-400 transition-colors"
        />
        <p className="text-[11px] text-slate-500 mt-1.5">
          Tip: Please have copies of relevant contracts, statutory demand notices, bank dishonour memos, or case numbers available for your consultation.
        </p>
      </div>

      {/* Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="w-4 h-4 mt-0.5 text-navy-900 border-slate-300 rounded focus:ring-brass-400 shrink-0"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I understand that transmitting this inquiry does not create an advocate-client relationship with Ajmani &amp; Law Partners. I am contacting the firm of my own volition for preliminary procedural guidance.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3.5 bg-navy-900 hover:bg-navy-800 disabled:bg-slate-400 text-white font-medium text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:ring-4 focus:ring-brass-300 focus:outline-none"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-brass-400" />
            <span>Transmitting Inquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-brass-400" />
            <span>Transmit Inquiry to Litigation Desk</span>
          </>
        )}
      </button>
    </form>
  );
}
