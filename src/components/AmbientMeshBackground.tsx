"use client";

import React, { useState, useEffect } from "react";

interface AmbientMeshBackgroundProps {
  initialEnabled?: boolean;
}

export function AmbientMeshBackground({ initialEnabled = true }: AmbientMeshBackgroundProps) {
  const [enabled, setEnabled] = useState<boolean>(initialEnabled);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    // Read initial preference from localStorage if set
    const stored = localStorage.getItem("alp_ambient_bg_enabled");
    if (stored !== null) {
      setEnabled(stored === "true");
    }

    // Listen for real-time toggle events from the Admin panel
    const handleBgChange = (e: CustomEvent<{ enabled: boolean }>) => {
      if (typeof e.detail?.enabled === "boolean") {
        setEnabled(e.detail.enabled);
        localStorage.setItem("alp_ambient_bg_enabled", String(e.detail.enabled));
      }
    };

    window.addEventListener("alp-ambient-bg-changed" as any, handleBgChange);
    return () => {
      window.removeEventListener("alp-ambient-bg-changed" as any, handleBgChange);
    };
  }, []);

  if (!enabled && mounted) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-50 overflow-hidden select-none transition-opacity duration-700 ${
        enabled ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. Subtle Architectural Blueprint & Judicial Scales Watermark Texture */}
      <div className="absolute inset-0 opacity-[0.035]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="alp-architectural-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#0a1128"
                strokeWidth="0.75"
              />
              <circle cx="30" cy="30" r="1" fill="#a67c52" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#alp-architectural-grid)" />
        </svg>
      </div>

      {/* 2. Living Mesh Gradient System (Inspired by wokchords.wokdens.com) */}
      <div className="relative w-full h-full">
        {/* Top-Left Warm Roman Brass & Amber Aura */}
        <div
          className="absolute -top-36 -left-36 w-[44rem] h-[44rem] rounded-full bg-gradient-to-br from-amber-200/40 via-[#d4af37]/20 to-transparent blur-3xl opacity-85 animate-pulse"
          style={{ animationDuration: "14s" }}
        />

        {/* Top-Right Judicial Sky & Oxford Blue Aura */}
        <div
          className="absolute -top-24 -right-36 w-[48rem] h-[48rem] rounded-full bg-gradient-to-bl from-sky-200/45 via-blue-100/35 to-transparent blur-3xl opacity-80 animate-pulse"
          style={{ animationDuration: "16s" }}
        />

        {/* Center Floating Sunburst / Warm Gold Core */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[58rem] h-[34rem] rounded-full bg-gradient-to-r from-amber-100/35 via-[#c5a059]/20 to-sky-100/30 blur-3xl opacity-70"
          style={{ animation: "pulse 18s ease-in-out infinite" }}
        />

        {/* Mid-Left Gentle Terracotta & Classical Rose Accent */}
        <div
          className="absolute top-1/2 -left-44 w-[42rem] h-[42rem] rounded-full bg-gradient-to-tr from-orange-100/35 via-rose-100/25 to-transparent blur-3xl opacity-75"
        />

        {/* Mid-Right Regal Indigo & Cyan Accent */}
        <div
          className="absolute top-2/3 -right-40 w-[46rem] h-[46rem] rounded-full bg-gradient-to-tl from-cyan-100/40 via-indigo-100/30 to-transparent blur-3xl opacity-75"
        />

        {/* Bottom Warm Golden Dusk Glow */}
        <div
          className="absolute -bottom-48 left-1/3 w-[48rem] h-[48rem] rounded-full bg-gradient-to-t from-amber-200/40 via-yellow-100/25 to-transparent blur-3xl opacity-80"
        />
      </div>
    </div>
  );
}
