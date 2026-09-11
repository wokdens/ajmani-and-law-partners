"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";
import { firmData } from "@/data/firm";

export function FloatingContactButtons() {
  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed bottom-6 left-6 z-40 flex flex-col gap-3.5 print:hidden"
    >
      {/* Red Mail Action Button (Matching Reference Image) */}
      <a
        href={`mailto:${firmData.contact.email}`}
        aria-label={`Send an email to ${firmData.contact.email}`}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#8c2525] hover:bg-[#a32b2b] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
      >
        <Mail className="w-5 h-5 text-white" />
        {/* Hover Tooltip */}
        <span
          role="tooltip"
          className="absolute left-full ml-3.5 px-3 py-1.5 bg-slate-900/95 text-white text-xs font-sans font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none shadow-lg border border-slate-700"
        >
          {firmData.contact.email}
        </span>
      </a>

      {/* Blue Phone Call Action Button (Matching Reference Image) */}
      <a
        href={`tel:${firmData.contact.phone}`}
        aria-label={`Call Advocate Lalit Ajmani at ${firmData.contact.phoneFormatted}`}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0c4a6e] hover:bg-[#0369a1] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
      >
        <Phone className="w-5 h-5 text-white" />
        {/* Hover Tooltip */}
        <span
          role="tooltip"
          className="absolute left-full ml-3.5 px-3 py-1.5 bg-slate-900/95 text-white text-xs font-sans font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none shadow-lg border border-slate-700"
        >
          Mob: {firmData.contact.phoneFormatted}
        </span>
      </a>
    </aside>
  );
}
