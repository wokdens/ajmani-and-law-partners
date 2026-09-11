"use client";

import React, { useState, useEffect } from "react";
import { Share2, Check, Copy } from "lucide-react";

interface ArticleReadingBarProps {
  title: string;
  author: string;
  publicationPlatform: string;
  date: string;
}

export function ArticleReadingBar({
  title,
  author,
  publicationPlatform,
  date,
}: ArticleReadingBarProps) {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyCitation = () => {
    const citation = `${author}, "${title}", ${publicationPlatform} (${date}). Consulted via Ajmani & Law Partners, New Delhi.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-brass-400 z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Article reading progress"
      />

      {/* Action Strip */}
      <div className="flex items-center justify-between py-3 px-4 bg-slate-50 border border-slate-200/80 rounded-lg text-xs text-slate-600 font-sans">
        <span className="text-[11px] text-slate-500">
          Academic Reference &bull; {publicationPlatform}
        </span>

        <button
          type="button"
          onClick={handleCopyCitation}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 hover:border-brass-400 text-slate-700 hover:text-navy-900 font-medium transition-colors shadow-xs"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Citation Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-brass-600" />
              <span>Copy Legal Citation</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
