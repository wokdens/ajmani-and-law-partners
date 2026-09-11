"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  ExternalLink,
  Calendar,
  Clock,
  Video,
  X,
  Sparkles,
  Share2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { VideoUpdate } from "@/data/videos";

interface VideoUpdatesSectionProps {
  videos: VideoUpdate[];
  showHeader?: boolean;
  title?: string;
  subtitle?: string;
  showViewAllButton?: boolean;
}

export function VideoUpdatesSection({
  videos,
  showHeader = true,
  title = "Updates",
  subtitle = "Short-form legal video briefings, procedural roadmaps, and case commentaries by Advocate Lalit Ajmani across LinkedIn, Instagram Reels, YouTube, and Facebook.",
  showViewAllButton = true,
}: VideoUpdatesSectionProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [activeVideo, setActiveVideo] = useState<VideoUpdate | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const platforms = [
    { id: "all", label: "All Updates", count: videos.length },
    { id: "LinkedIn", label: "LinkedIn Videos", count: videos.filter((v) => v.platform === "LinkedIn").length },
    { id: "Instagram", label: "Instagram Reels", count: videos.filter((v) => v.platform === "Instagram").length },
    { id: "YouTube", label: "YouTube Briefings", count: videos.filter((v) => v.platform === "YouTube").length },
    { id: "Facebook", label: "Facebook Updates", count: videos.filter((v) => v.platform === "Facebook").length },
  ];

  const filteredVideos =
    selectedPlatform === "all"
      ? videos
      : videos.filter((v) => v.platform === selectedPlatform);

  const getPlatformBadge = (platform: string) => {
    switch (platform) {
      case "LinkedIn":
        return {
          bg: "bg-[#0077b5] text-white",
          border: "border-[#0077b5]/30",
          icon: (
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          ),
        };
      case "Instagram":
        return {
          bg: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white",
          border: "border-pink-500/30",
          icon: (
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          ),
        };
      case "YouTube":
        return {
          bg: "bg-[#ff0000] text-white",
          border: "border-red-600/30",
          icon: (
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          ),
        };
      case "Facebook":
      default:
        return {
          bg: "bg-[#1877f2] text-white",
          border: "border-blue-600/30",
          icon: (
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          ),
        };
    }
  };

  const handleShare = (video: VideoUpdate) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(video.platformUrl || window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id="updates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Masthead Header */}
      {showHeader && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-sans font-semibold uppercase tracking-wider mb-2">
              <Video className="w-3.5 h-3.5 text-red-600" />
              <span>Chambers Video &amp; Social Briefings &bull; New Delhi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-navy-900 tracking-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans mt-2 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {showViewAllButton && (
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/updates"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-100 text-xs font-semibold tracking-wide transition-colors"
              >
                <span>All Updates</span>
                <ArrowRight className="w-3.5 h-3.5 text-brass-400" />
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Platform Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {platforms.map((p) => {
          const isActive = selectedPlatform === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPlatform(p.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? "bg-navy-900 text-white shadow-sm ring-1 ring-brass-400/40"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
              }`}
            >
              <span>{p.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-brass-400 text-navy-950 font-bold" : "bg-slate-200 text-slate-600"
                }`}
              >
                {p.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => {
          const badge = getPlatformBadge(video.platform);
          return (
            <div
              key={video.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Video Thumbnail with Play Button Overlay */}
              <div
                onClick={() => setActiveVideo(video)}
                className="relative aspect-video w-full bg-slate-900 overflow-hidden cursor-pointer group/thumb"
              >
                <Image
                  src={video.thumbnail || "/delhi-high-court.jpg"}
                  alt={video.title}
                  fill
                  className="object-cover group-hover/thumb:scale-105 transition-transform duration-500 opacity-90 group-hover/thumb:opacity-100"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Platform Badge (Top Left) */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md ${badge.bg}`}
                  >
                    {badge.icon}
                    <span>{video.platform}</span>
                  </span>
                </div>

                {/* Duration Badge (Bottom Right) */}
                <div className="absolute bottom-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[10px] font-mono font-medium text-white">
                    <Clock className="w-2.5 h-2.5 text-brass-400" />
                    <span>{video.duration}</span>
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-13 h-13 rounded-full bg-red-600/90 group-hover/thumb:bg-red-600 text-white flex items-center justify-center shadow-xl group-hover/thumb:scale-110 transition-all transform pl-0.5">
                    <Play className="w-6 h-6 fill-white text-white" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  {/* Topic Tag */}
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brass-700 bg-brass-50 border border-brass-200/60 px-2 py-0.5 rounded inline-block">
                    {video.topic}
                  </span>

                  {/* Title */}
                  <h4
                    onClick={() => setActiveVideo(video)}
                    className="font-serif font-bold text-navy-950 text-base leading-snug group-hover:text-brass-700 transition-colors cursor-pointer line-clamp-2"
                  >
                    {video.title}
                  </h4>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3">
                    {video.summary}
                  </p>
                </div>

                {/* Footer Metadata & Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-sans">
                    <Calendar className="w-3 h-3 text-brass-600" />
                    <span>{video.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveVideo(video)}
                      className="px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Watch</span>
                    </button>

                    <a
                      href={video.platformUrl || "https://www.linkedin.com/in/lalitajmani/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Open on ${video.platform}`}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          INTERACTIVE VIDEO PLAYER MODAL
         ========================================================================= */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-navy-950 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl text-white">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                    getPlatformBadge(activeVideo.platform).bg
                  }`}
                >
                  {getPlatformBadge(activeVideo.platform).icon}
                  <span>{activeVideo.platform} Video</span>
                </span>
                <span className="text-xs text-slate-400 font-sans hidden sm:inline-block">
                  Advocate Lalit Ajmani &bull; Legal Update
                </span>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close player modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Stage */}
            <div className="relative aspect-video w-full bg-black">
              {activeVideo.embedUrl ? (
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <Image
                    src={activeVideo.thumbnail || "/delhi-high-court.jpg"}
                    alt={activeVideo.title}
                    fill
                    className="object-cover opacity-30"
                  />
                  <div className="relative z-10 max-w-md space-y-4">
                    <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto shadow-xl">
                      <Play className="w-8 h-8 fill-white" />
                    </div>
                    <h5 className="font-serif font-bold text-lg text-white">
                      {activeVideo.title}
                    </h5>
                    <p className="text-xs text-slate-300 font-sans">
                      This video briefing was published on Advocate Lalit Ajmani&apos;s verified {activeVideo.platform} profile. Click below to view the official high-resolution post directly on {activeVideo.platform}.
                    </p>
                    <a
                      href={activeVideo.platformUrl || "https://www.linkedin.com/in/lalitajmani/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
                    >
                      <span>Open and Watch on {activeVideo.platform}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Info Bar */}
            <div className="p-5 space-y-3 bg-navy-900 border-t border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="font-serif font-bold text-white text-lg sm:text-xl">
                  {activeVideo.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleShare(activeVideo)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-sans font-medium flex items-center gap-1.5 transition-colors"
                  >
                    {copiedLink ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Link Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-brass-400" />
                        <span>Share</span>
                      </>
                    )}
                  </button>

                  <a
                    href={activeVideo.platformUrl || "https://www.linkedin.com/in/lalitajmani/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-lg bg-brass-400 hover:bg-brass-300 text-navy-950 text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <span>View on {activeVideo.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {activeVideo.summary}
              </p>

              <div className="pt-2 flex items-center gap-4 text-[11px] text-slate-400 font-sans border-t border-slate-800/80">
                <span>Published: {activeVideo.date}</span>
                <span>&bull;</span>
                <span>Topic: {activeVideo.topic}</span>
                <span>&bull;</span>
                <span>Duration: {activeVideo.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
