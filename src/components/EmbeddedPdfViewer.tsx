"use client";

import React, { useState, useRef } from "react";
import {
  FileText,
  Download,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Printer,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { NewsletterIssue } from "@/data/newsletters";

interface EmbeddedPdfViewerProps {
  issue: NewsletterIssue;
  compact?: boolean;
}

export function EmbeddedPdfViewer({ issue, compact = false }: EmbeddedPdfViewerProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 15, 160));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 15, 85));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      const printWindow = window.open(issue.pdfUrl, "_blank");
      if (printWindow) {
        printWindow.focus();
        printWindow.print();
      }
    }
  };

  // PDF URL with parameters for optimal in-page scrolling and clean navigation
  const embeddedUrl = `${issue.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH`;

  return (
    <div
      ref={containerRef}
      className={`relative bg-navy-950 border border-brass-400/30 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-2 md:inset-6 z-50 flex flex-col bg-navy-950/98 backdrop-blur-xl border-brass-400/60"
          : "w-full flex flex-col"
      }`}
    >
      {/* Top Document Header & Interactive Reader Bar */}
      <div className="bg-navy-900 border-b border-navy-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-white">
        {/* Left: Document Identity */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-brass-400/10 border border-brass-400/30 flex items-center justify-center text-brass-300 shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-brass-400">
                {issue.volume}
              </span>
              <span className="text-slate-500 text-xs">&bull;</span>
              <span className="text-xs text-slate-300 font-medium">
                {issue.month}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-navy-800 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <CheckCircle className="w-3 h-3" />
                <span>{issue.pageCount || 5} Pages Multi-Page Dispatch</span>
              </span>
            </div>
            <h3 className="text-xs sm:text-sm font-serif font-bold text-white truncate max-w-[280px] sm:max-w-md md:max-w-lg mt-0.5">
              {issue.title}
            </h3>
          </div>
        </div>

        {/* Right: In-Page Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Zoom Controls */}
          <div className="hidden sm:flex items-center bg-navy-950 border border-slate-800 rounded-lg p-0.5 text-xs text-slate-300">
            <button
              type="button"
              onClick={handleZoomOut}
              title="Zoom Out"
              aria-label="Zoom out PDF"
              className="p-1.5 hover:text-white hover:bg-navy-800 rounded transition-colors"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              title="Reset Zoom"
              className="px-2 py-1 text-[11px] font-mono hover:text-brass-300"
            >
              {zoomLevel}%
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              title="Zoom In"
              aria-label="Zoom in PDF"
              className="p-1.5 hover:text-white hover:bg-navy-800 rounded transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Fullscreen Expand / Exit Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Expand to Fullscreen"}
            aria-label={isFullscreen ? "Exit Fullscreen reader" : "Read in Fullscreen reader"}
            className="p-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-200 hover:text-white border border-slate-700 transition-colors flex items-center gap-1.5 text-xs"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-brass-400" />
                <span className="hidden sm:inline">Close</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-brass-400" />
                <span className="hidden sm:inline">Fullscreen</span>
              </>
            )}
          </button>

          {/* Print Button */}
          <button
            type="button"
            onClick={handlePrint}
            title="Print Newsletter"
            aria-label="Print newsletter document"
            className="hidden md:flex p-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-200 hover:text-white border border-slate-700 transition-colors items-center gap-1.5 text-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>

          {/* Direct Download Button */}
          <a
            href={issue.pdfUrl}
            download={`ALP-Newsletter-${issue.month.replace(/\s+/g, "-")}.pdf`}
            title="Download Official PDF"
            className="px-3 py-2 rounded-lg bg-brass-400 hover:bg-brass-300 text-navy-950 font-sans font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Embedded Multi-Page PDF Viewer Canvas/Frame */}
      <div
        className="w-full bg-[#2a2e31] relative overflow-hidden"
        style={{
          height: isFullscreen ? "calc(100vh - 110px)" : "700px",
          minHeight: isFullscreen ? "auto" : "700px",
        }}
      >
        <iframe
          src={embeddedUrl}
          title={`${issue.title} - ${issue.month}`}
          className="w-full h-full border-0 block"
          style={{
            width: "100%",
            height: "100%",
            minHeight: isFullscreen ? "calc(100vh - 110px)" : "700px",
          }}
          loading="lazy"
        />
      </div>

      {/* Reader Footer Navigation & BCI Regulatory Watermark */}
      <div className="bg-navy-900 border-t border-navy-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-brass-400" />
          <span className="text-[11px]">
            Official Litigation Dispatch &bull; Ajmani &amp; Law Partners (Adv. Lalit Ajmani, D/5332/2017)
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span>Use mouse wheel or touch scroll to navigate all 5 pages</span>
          <a
            href={issue.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brass-400 hover:text-brass-300 flex items-center gap-1 font-medium"
          >
            <span>Open in Tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
