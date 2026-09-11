"use client";

import { useEffect } from "react";

export function FontSizeClientSync({ initialScale }: { initialScale: number }) {
  useEffect(() => {
    // Check if custom scale is set in localStorage (e.g. from admin live preview or user preference)
    const localScale = localStorage.getItem("alp_font_size_scale");
    const targetScale = localScale ? Number(localScale) : initialScale;

    if (targetScale && !isNaN(targetScale)) {
      document.documentElement.style.fontSize = `${targetScale}%`;
    }

    // Listen for custom font scale change events dispatched by the Admin page
    const handleFontScaleChange = (e: CustomEvent<{ scale: number }>) => {
      if (e.detail?.scale) {
        document.documentElement.style.fontSize = `${e.detail.scale}%`;
        localStorage.setItem("alp_font_size_scale", String(e.detail.scale));
      }
    };

    window.addEventListener("alp-font-scale-changed" as any, handleFontScaleChange);
    return () => {
      window.removeEventListener("alp-font-scale-changed" as any, handleFontScaleChange);
    };
  }, [initialScale]);

  return null;
}
