"use client";

import React, { useEffect, useState } from "react";
import { Scale, ShieldAlert, CheckCircle2 } from "lucide-react";

export function BciDisclaimerModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const hasAccepted = localStorage.getItem("alp_bci_disclaimer_accepted");
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("alp_bci_disclaimer_accepted", "true");
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com";
  };

  if (!mounted || !isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-description"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white border border-brass-300/40 rounded-xl shadow-2xl overflow-hidden">
        {/* Header Band */}
        <div className="bg-navy-900 px-6 py-5 border-b border-navy-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brass-500/20 border border-brass-400/40 flex items-center justify-center shrink-0 text-brass-300">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 id="disclaimer-title" className="text-lg font-serif text-white font-medium tracking-wide">
              Bar Council of India Disclaimer
            </h2>
            <p className="text-xs text-slate-300 font-sans">
              Rule 36, Bar Council of India Rules — Mandatory Regulatory Disclosure
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div id="disclaimer-description" className="p-6 md:p-8 space-y-4 text-sm text-slate-700 leading-relaxed font-sans max-h-[60vh] overflow-y-auto">
          <p className="font-medium text-slate-900">
            Under the rules of the Bar Council of India, advocates are strictly prohibited from soliciting work or advertising in any form or manner.
          </p>
          <p>
            By clicking <strong className="text-navy-900 font-semibold">&ldquo;I Agree&rdquo;</strong> and proceeding to access this website, the user acknowledges and confirms the following:
          </p>

          <ul className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-200/80 text-xs md:text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
              <span>
                The user wishes to obtain information regarding <strong>Ajmani &amp; Law Partners</strong> and its founder, <strong>Advocate Lalit Ajmani</strong>, solely for their own information and personal knowledge.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
              <span>
                All information, content, and publications available on this website are provided strictly at the user&apos;s voluntary request for informational purposes only, and shall not be interpreted as legal advice, solicitation, or advertisement.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
              <span>
                No advocate-client relationship is created or intended to be created by browsing this website or by submitting a preliminary enquiry through any contact forms.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
              <span>
                The firm and its advocates are not responsible for any consequence of any action taken by any user in reliance on the material or insights presented on this site. Users must seek formal, independent legal counsel for specific legal issues.
              </span>
            </li>
          </ul>

          <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              This website uses standard local preference storage solely to remember your acknowledgement during your visit.
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleDecline}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors border border-slate-300 rounded-lg hover:bg-slate-100 text-center"
          >
            Decline &amp; Exit
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-brass-400 focus:outline-none text-center flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-brass-400" />
            <span>I Agree &amp; Proceed</span>
          </button>
        </div>
      </div>
    </div>
  );
}
