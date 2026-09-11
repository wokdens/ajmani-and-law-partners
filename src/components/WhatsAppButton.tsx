"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { firmData } from "@/data/firm";

export function WhatsAppButton() {
  const [tooltipDismissed, setTooltipDismissed] = useState<boolean>(false);
  const encodedMsg = encodeURIComponent(firmData.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${firmData.contact.whatsappNumber}?text=${encodedMsg}`;

  return (
    <aside
      aria-label="Direct messaging assistance"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none print:hidden"
    >
      {/* Subtle contextual prompt badge */}
      {!tooltipDismissed && (
        <div className="hidden md:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3 rounded-full shadow-lg border border-slate-200 animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium">Direct WhatsApp Line</span>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            aria-label="Dismiss message prompt"
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Ajmani & Law Partners on WhatsApp (+91 96544 31469)"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-elevated transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300/60"
      >
        {/* Radar wave pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-40 group-hover:opacity-60" />
        <MessageSquare className="w-6 h-6 fill-current relative z-10" />
      </a>
    </aside>
  );
}
