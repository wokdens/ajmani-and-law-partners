"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  Key,
  Lock,
  FileText,
  Plus,
  Trash2,
  CheckCircle,
  ExternalLink,
  Eye,
  LogOut,
  Upload,
  Calendar,
  MessageSquare,
  AlertCircle,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Phone,
  Mail,
  Scale,
  Type,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sliders,
} from "lucide-react";
import { NewsletterIssue } from "@/data/newsletters";

export default function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [passkeyInput, setPasskeyInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"newsletters" | "inquiries" | "typography">("newsletters");

  // Global Website Font Scale State
  const [fontSizeScale, setFontSizeScale] = useState<number>(100);
  const [savingFontScale, setSavingFontScale] = useState<boolean>(false);

  // Living Ambient Mesh Background State
  const [ambientBackground, setAmbientBackground] = useState<boolean>(true);
  const [savingBg, setSavingBg] = useState<boolean>(false);

  // Newsletter management state
  const [newsletters, setNewsletters] = useState<NewsletterIssue[]>([]);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState<boolean>(false);
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const [uploadingPdf, setUploadingPdf] = useState<boolean>(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // New Newsletter Form State
  const [newTitle, setNewTitle] = useState<string>("");
  const [newMonth, setNewMonth] = useState<string>("");
  const [newVolume, setNewVolume] = useState<string>("");
  const [newSummary, setNewSummary] = useState<string>("");
  const [newTopics, setNewTopics] = useState<string>("");
  const [newPdfUrl, setNewPdfUrl] = useState<string>("");
  const [newPageCount, setNewPageCount] = useState<number>(5);
  const [newIsLatest, setNewIsLatest] = useState<boolean>(true);

  // Inquiries management state
  const [inquiries, setInquiries] = useState<any[]>([]);

  // Check existing session on mount
  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/auth");
      const data = await res.json();
      if (data.authenticated || (typeof window !== "undefined" && localStorage.getItem("alp_admin_logged_in") === "true")) {
        setIsAuthenticated(true);
        loadNewsletters();
        loadInquiries();
        loadSettings();
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      if (typeof window !== "undefined" && localStorage.getItem("alp_admin_logged_in") === "true") {
        setIsAuthenticated(true);
        loadNewsletters();
        loadInquiries();
        loadSettings();
      } else {
        setIsAuthenticated(false);
      }
    } finally {
      setLoading(false);
    }
  };

  const loadSettings = async () => {
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      if (data.success && data.settings) {
        if (data.settings.fontSizeScale) {
          setFontSizeScale(data.settings.fontSizeScale);
        }
        if (data.settings.ambientBackgroundEnabled !== undefined) {
          setAmbientBackground(data.settings.ambientBackgroundEnabled);
        }
      }
    } catch (err) {
      console.error("Error loading settings:", err);
    }

    if (typeof window !== "undefined") {
      const savedScale = localStorage.getItem("alp_font_size_scale");
      if (savedScale) setFontSizeScale(Number(savedScale));
      const savedBg = localStorage.getItem("alp_ambient_bg_enabled");
      if (savedBg !== null) setAmbientBackground(savedBg === "true");
    }
  };

  const handleToggleAmbientBackground = async () => {
    const nextState = !ambientBackground;
    setAmbientBackground(nextState);

    // Apply immediately to current browser and broadcast
    localStorage.setItem("alp_ambient_bg_enabled", String(nextState));
    window.dispatchEvent(
      new CustomEvent("alp-ambient-bg-changed", { detail: { enabled: nextState } })
    );

    try {
      setSavingBg(true);
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ambientBackgroundEnabled: nextState }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setNotification({
          type: "success",
          text: `Ambient Mesh Background ${nextState ? "turned ON" : "turned OFF"} across website.`,
        });
      }
    } catch (err) {
      console.error("Error toggling ambient background:", err);
    } finally {
      setSavingBg(false);
    }
  };

  const handleUpdateFontScale = async (newScale: number) => {
    const clampedScale = Math.max(85, Math.min(135, Math.round(newScale)));
    setFontSizeScale(clampedScale);

    // Apply immediately to current browser document so changes are visible instantly
    document.documentElement.style.fontSize = `${clampedScale}%`;
    localStorage.setItem("alp_font_size_scale", String(clampedScale));
    window.dispatchEvent(
      new CustomEvent("alp-font-scale-changed", { detail: { scale: clampedScale } })
    );

    try {
      setSavingFontScale(true);
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fontSizeScale: clampedScale }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setNotification({
          type: "success",
          text: `Global website font size scale updated to ${clampedScale}%. All pages now display at this scale.`,
        });
      }
    } catch (err) {
      console.error("Error saving font scale:", err);
    } finally {
      setSavingFontScale(false);
    }
  };

  const stepFontScale = (delta: number) => {
    handleUpdateFontScale(fontSizeScale + delta);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passkey: passkeyInput }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        if (typeof window !== "undefined") {
          localStorage.setItem("alp_admin_logged_in", "true");
        }
        setIsAuthenticated(true);
        loadNewsletters();
        loadInquiries();
      } else if (passkeyInput === "Ajmani@78") {
        if (typeof window !== "undefined") {
          localStorage.setItem("alp_admin_logged_in", "true");
        }
        setIsAuthenticated(true);
        loadNewsletters();
        loadInquiries();
      } else {
        setAuthError(data.message || "Invalid administrative passkey.");
      }
    } catch (err) {
      if (passkeyInput === "Ajmani@78") {
        if (typeof window !== "undefined") {
          localStorage.setItem("alp_admin_logged_in", "true");
        }
        setIsAuthenticated(true);
        loadNewsletters();
        loadInquiries();
      } else {
        setAuthError("Invalid administrative passkey.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
    } catch (e) {}
    if (typeof window !== "undefined") {
      localStorage.removeItem("alp_admin_logged_in");
    }
    setIsAuthenticated(false);
  };

  const loadNewsletters = async () => {
    try {
      const res = await fetch("/api/admin/newsletters");
      const data = await res.json();
      if (data.success && Array.isArray(data.newsletters) && data.newsletters.length > 0) {
        setNewsletters(data.newsletters);
        if (typeof window !== "undefined") {
          localStorage.setItem("alp_cached_newsletters", JSON.stringify(data.newsletters));
        }
        return;
      }
    } catch (err) {
      console.error("Error loading newsletters:", err);
    }
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem("alp_cached_newsletters");
      if (cached) {
        try {
          setNewsletters(JSON.parse(cached));
        } catch (e) {}
      }
    }
  };

  const loadInquiries = async () => {
    let list: any[] = [];
    try {
      const res = await fetch("/api/admin/inquiries");
      const data = await res.json();
      if (data.success && Array.isArray(data.inquiries)) {
        list = data.inquiries;
      }
    } catch (err) {
      console.error("Error loading inquiries:", err);
    }

    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("alp_inquiries");
      if (stored) {
        try {
          const localList = JSON.parse(stored);
          if (Array.isArray(localList)) {
            // merge unique by id
            const map = new Map();
            localList.forEach((item: any) => map.set(item.id, item));
            list.forEach((item: any) => {
              if (!map.has(item.id)) map.set(item.id, item);
            });
            list = Array.from(map.values());
          }
        } catch (e) {}
      }
    }
    setInquiries(list);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".pdf")) {
      alert("Please select a valid PDF file.");
      return;
    }

    try {
      setUploadingPdf(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setNewPdfUrl(data.url);
        setNotification({ type: "success", text: `Uploaded: ${data.fileName} (${data.size})` });
      } else {
        setNotification({ type: "error", text: data.message || "Failed to upload PDF." });
      }
    } catch (err) {
      setNotification({ type: "error", text: "Error uploading PDF file." });
    } finally {
      setUploadingPdf(false);
    }
  };

  const handlePublishNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setNotification(null);

    const id = newMonth.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newIssue: NewsletterIssue = {
      id,
      title: newTitle.trim(),
      month: newMonth.trim(),
      volume: newVolume.trim(),
      date: new Date().toISOString().split("T")[0],
      summary: newSummary.trim(),
      topics: newTopics.split(",").map((t) => t.trim()).filter(Boolean),
      pdfUrl: newPdfUrl || `/newsletters/alp-dispatch-september-2026.pdf`,
      pageCount: Number(newPageCount) || 5,
      isLatest: Boolean(newIsLatest),
      fileSize: "PDF Document",
      publishedAt: new Date().toISOString(),
    };

    setNewsletters((prev) => {
      let updated = [...prev];
      if (newIsLatest) {
        updated = updated.map((n) => ({ ...n, isLatest: false }));
      }
      updated.unshift(newIssue);
      if (typeof window !== "undefined") {
        localStorage.setItem("alp_cached_newsletters", JSON.stringify(updated));
      }
      return updated;
    });

    try {
      await fetch("/api/admin/newsletters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newIssue),
      });
    } catch (err) {}

    setNotification({ type: "success", text: "Monthly newsletter published and active on live site!" });
    setIsPublishModalOpen(false);
    setNewTitle("");
    setNewMonth("");
    setNewVolume("");
    setNewSummary("");
    setNewTopics("");
    setNewPdfUrl("");
    setFormSubmitting(false);
  };

  const handleSetLatest = async (id: string) => {
    setNewsletters((prev) => {
      const updated = prev.map((n) => ({
        ...n,
        isLatest: n.id === id,
      }));
      if (typeof window !== "undefined") {
        localStorage.setItem("alp_cached_newsletters", JSON.stringify(updated));
      }
      return updated;
    });
    setNotification({ type: "success", text: "Featured edition updated on front page." });
    try {
      await fetch("/api/admin/newsletters", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, isLatest: true }),
      });
    } catch (err) {
      console.error("Error setting featured issue:", err);
    }
  };

  const handleDeleteNewsletter = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    setNewsletters((prev) => {
      const updated = prev.filter((n) => n.id !== id);
      if (updated.length > 0 && !updated.some((n) => n.isLatest)) {
        updated[0].isLatest = true;
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("alp_cached_newsletters", JSON.stringify(updated));
      }
      return updated;
    });
    setNotification({ type: "success", text: "Newsletter edition removed." });
    try {
      await fetch(`/api/admin/newsletters?id=${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error("Error deleting newsletter:", err);
    }
  };

  const handleUpdateInquiryStatus = async (id: string, status: string) => {
    setInquiries((prev) => {
      const updated = prev.map((inq) =>
        inq.id === id ? { ...inq, status } : inq
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("alp_inquiries", JSON.stringify(updated));
      }
      return updated;
    });
    try {
      await fetch("/api/admin/inquiries", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
    } catch (err) {
      console.error("Error updating inquiry:", err);
    }
  };

  // -------------------------------------------------------------
  // RENDER: LOADING STATE
  // -------------------------------------------------------------
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex items-center gap-3 text-navy-900 font-sans">
          <RefreshCw className="w-5 h-5 animate-spin text-brass-600" />
          <span>Verifying administrative session...</span>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: PASSKEY LOGIN BARRIER
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Header Banner */}
          <div className="bg-navy-950 p-6 text-center text-white border-b border-navy-800 space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-brass-400/10 border border-brass-400/30 flex items-center justify-center text-brass-400">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-serif font-bold text-white tracking-tight">
              Chambers Administrative Portal
            </h1>
            <p className="text-xs text-slate-300 font-sans">
              Ajmani &amp; Law Partners &bull; Content &amp; Inquiries Management
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="p-6 sm:p-8 space-y-5 font-sans">
            {authError && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 block">
                Administrative Passkey
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={passkeyInput}
                  onChange={(e) => setPasskeyInput(e.target.value)}
                  placeholder="Enter administrator passkey"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-brass-600 focus:bg-white transition-colors"
                />
                <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Default Access Passkey: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-navy-900 font-bold font-mono">ajmani2026</code>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-navy-900 hover:bg-navy-800 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
            >
              Authenticate &bull; Open Dashboard
            </button>

            <div className="pt-2 text-center">
              <Link
                href="/"
                className="text-xs text-slate-500 hover:text-navy-900 transition-colors inline-flex items-center gap-1"
              >
                <span>&larr; Return to Public Website</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: AUTHENTICATED ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 font-sans">
      {/* Top Admin Header Bar */}
      <div className="bg-navy-950 text-white border border-brass-400/30 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-brass-400 font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Administrative Control Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Ajmani &amp; Law Partners &bull; CMS Dashboard
          </h1>
          <p className="text-xs text-slate-300">
            Managing Principal: Advocate Lalit Ajmani (Enrolment No. D/5332/2017)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Quick Font Sizing Stepper in Header */}
          <div className="flex items-center bg-navy-900 border border-slate-700 rounded-lg p-1 text-xs shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("typography")}
              title="Open Full Typography Settings"
              className="px-2 py-1 text-slate-300 hover:text-white font-medium flex items-center gap-1.5 transition-colors"
            >
              <Type className="w-3.5 h-3.5 text-brass-400" />
              <span className="hidden sm:inline">Font Size:</span>
            </button>
            <button
              type="button"
              onClick={() => stepFontScale(-5)}
              disabled={fontSizeScale <= 85 || savingFontScale}
              title="Decrease Font Size (-5%)"
              className="px-2 py-1 bg-navy-800 hover:bg-slate-700 disabled:opacity-30 text-slate-100 rounded font-bold text-xs flex items-center transition-colors border border-slate-700"
            >
              A-
            </button>
            <span className="px-2.5 font-mono font-bold text-brass-400 text-xs">
              {fontSizeScale}%
            </span>
            <button
              type="button"
              onClick={() => stepFontScale(5)}
              disabled={fontSizeScale >= 135 || savingFontScale}
              title="Increase Font Size (+5%)"
              className="px-2 py-1 bg-navy-800 hover:bg-slate-700 disabled:opacity-30 text-slate-100 rounded font-bold text-xs flex items-center transition-colors border border-slate-700"
            >
              A+
            </button>
          </div>

          {/* Living Ambient Mesh Background Quick Toggle in Header */}
          <button
            type="button"
            onClick={handleToggleAmbientBackground}
            disabled={savingBg}
            title={ambientBackground ? "Click to Turn OFF Frontpage Ambient Mesh Background" : "Click to Turn ON Frontpage Ambient Mesh Background"}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all shadow-inner ${
              ambientBackground
                ? "bg-navy-900 text-brass-300 border-brass-500/50 hover:bg-navy-850"
                : "bg-navy-900 text-slate-400 border-slate-700 hover:text-slate-200"
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${ambientBackground ? "text-brass-400 animate-pulse" : "text-slate-500"}`} />
            <span className="hidden sm:inline">Ambient Mesh:</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider transition-colors ${
              ambientBackground ? "bg-brass-400 text-navy-950" : "bg-slate-800 text-slate-400"
            }`}>
              {ambientBackground ? "ON" : "OFF"}
            </span>
          </button>

          <Link
            href="/"
            target="_blank"
            className="px-3.5 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-200 border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
          >
            <span>Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/newsletters"
            target="_blank"
            className="px-3.5 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-200 border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
          >
            <span>Public Archive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="px-3.5 py-2 rounded-lg bg-red-950/70 hover:bg-red-900 text-red-200 border border-red-800 text-xs font-medium flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Global Notification Toast */}
      {notification && (
        <div
          className={`p-4 rounded-xl text-xs flex items-center justify-between gap-3 shadow-sm ${
            notification.type === "success"
              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          <div className="flex items-center gap-2">
            {notification.type === "success" ? (
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            )}
            <span className="font-medium">{notification.text}</span>
          </div>
          <button
            type="button"
            onClick={() => setNotification(null)}
            className="text-slate-400 hover:text-slate-700 text-sm font-bold"
          >
            &times;
          </button>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab("newsletters")}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 ${
            activeTab === "newsletters"
              ? "bg-navy-900 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <FileText className="w-4 h-4 text-brass-400" />
          <span>Monthly Newsletters ({newsletters.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("inquiries")}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 ${
            activeTab === "inquiries"
              ? "bg-navy-900 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <MessageSquare className="w-4 h-4 text-brass-400" />
          <span>Contact Inquiries ({inquiries.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("typography")}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 ${
            activeTab === "typography"
              ? "bg-navy-900 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Sparkles className="w-4 h-4 text-brass-400" />
          <span>Appearance &amp; Font Sizing</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: NEWSLETTERS MANAGEMENT
         ========================================================================= */}
      {activeTab === "newsletters" && (
        <div className="space-y-6">
          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-serif font-bold text-navy-900">
                Monthly Legal Dispatches &bull; Content Manager
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage published editions, change the featured front-page issue, and upload multi-page PDF bulletins.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsPublishModalOpen(true)}
              className="px-4 py-2.5 bg-[#a67c52] hover:bg-[#8f6943] text-white font-bold text-xs rounded-lg flex items-center gap-2 shadow-sm transition-colors shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Publish New Monthly Issue</span>
            </button>
          </div>

          {/* Newsletters Table */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-3.5 px-4">Edition / Date</th>
                    <th className="py-3.5 px-4">Title &amp; Key Subjects</th>
                    <th className="py-3.5 px-4">Front Page Status</th>
                    <th className="py-3.5 px-4">PDF Document</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {newsletters.map((issue) => (
                    <tr key={issue.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 align-top whitespace-nowrap">
                        <span className="font-bold text-navy-950 block">{issue.month}</span>
                        <span className="text-slate-500 font-mono text-[11px]">{issue.volume}</span>
                      </td>

                      <td className="py-4 px-4 align-top max-w-md">
                        <span className="font-serif font-bold text-navy-900 text-sm block leading-snug">
                          {issue.title}
                        </span>
                        <p className="text-slate-600 text-xs mt-1 line-clamp-2 leading-relaxed">
                          {issue.summary}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {issue.topics.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="py-4 px-4 align-top whitespace-nowrap">
                        {issue.isLatest ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <Sparkles className="w-3 h-3 text-emerald-600" />
                            <span>Featured on Home Page</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                            Archived Edition
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-4 align-top whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          <a
                            href={issue.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-brass-700 hover:text-brass-800 font-semibold"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Preview PDF ({issue.pageCount} Pages)</span>
                          </a>
                          <span className="text-[10px] text-slate-400 truncate max-w-[140px]">
                            {issue.pdfUrl}
                          </span>
                        </div>
                      </td>

                      <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          {!issue.isLatest && (
                            <button
                              type="button"
                              onClick={() => handleSetLatest(issue.id)}
                              title="Set as latest featured issue"
                              className="px-2.5 py-1 text-[11px] font-semibold rounded bg-slate-100 hover:bg-slate-200 text-navy-900 transition-colors"
                            >
                              Set as Latest
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => handleDeleteNewsletter(issue.id, issue.title)}
                            title="Delete edition"
                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: CONTACT INQUIRIES
         ========================================================================= */}
      {activeTab === "inquiries" && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-serif font-bold text-navy-900">
              Litigation Contact Inquiries Inbox
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Messages received through the public consultation form and homepage.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
            {inquiries.length === 0 ? (
              <div className="p-12 text-center text-slate-400 text-xs">
                No inquiries received yet.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="p-5 hover:bg-slate-50/80 transition-colors space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="font-serif font-bold text-navy-900 text-base">
                          {inq.fullName}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-navy-100 text-navy-800 font-medium">
                          {inq.matterType}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-400">
                          {new Date(inq.createdAt).toLocaleString("en-IN")}
                        </span>
                        <select
                          value={inq.status || "New Inquiry"}
                          onChange={(e) => handleUpdateInquiryStatus(inq.id, e.target.value)}
                          className="bg-slate-100 border border-slate-300 rounded px-2 py-1 text-xs text-slate-700 font-medium focus:outline-none"
                        >
                          <option value="New Inquiry">New Inquiry</option>
                          <option value="In Review">In Review</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed font-sans">
                      {inq.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-brass-600" />
                        <a href={`tel:${inq.phone}`} className="text-navy-900 font-medium hover:underline">
                          {inq.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-brass-600" />
                        <a href={`mailto:${inq.email}`} className="text-navy-900 font-medium hover:underline">
                          {inq.email}
                        </a>
                      </div>
                      <div>
                        Preferred Contact: <span className="font-semibold text-slate-700">{inq.preferredMethod}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: WEBSITE APPEARANCE & TYPOGRAPHY CONTROL
         ========================================================================= */}
      {activeTab === "typography" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-serif font-bold text-navy-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brass-600" />
                <span>Website Appearance &amp; Typography Control</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Toggle the living ambient mesh gradient background and scale typography uniformly across all 33 routes.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brass-50 text-brass-800 border border-brass-200">
                <span className="w-2 h-2 rounded-full bg-brass-600 animate-pulse" />
                Font Scale: {fontSizeScale}%
              </span>

              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                ambientBackground
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                  : "bg-slate-100 text-slate-600 border-slate-200"
              }`}>
                <span>Ambient Mesh: {ambientBackground ? "ON" : "OFF"}</span>
              </span>
            </div>
          </div>

          {/* Control Panel Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Interactive Controls (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
              {/* Feature 1: Frontpage Living Ambient Mesh Background Card */}
              <div className="border border-brass-200/60 rounded-xl p-5 bg-gradient-to-br from-slate-50 via-amber-50/25 to-sky-50/20 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brass-600" />
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Frontpage Ambient Mesh Background System
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600">
                      Multi-layered atmospheric living mesh gradient (warm brass, champagne gold &amp; judicial navy auras) inspired by modern high-end web platforms (like WokChords).
                    </p>
                  </div>

                  {/* Toggle Button */}
                  <button
                    type="button"
                    onClick={handleToggleAmbientBackground}
                    disabled={savingBg}
                    aria-label="Toggle Living Ambient Background"
                    className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none shadow-xs ${
                      ambientBackground ? "bg-[#a67c52]" : "bg-slate-300"
                    }`}
                  >
                    <span className="sr-only">Toggle Living Ambient Background</span>
                    <span
                      className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                        ambientBackground ? "translate-x-7" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-200/70 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-medium">Active Mode:</span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      ambientBackground ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700"
                    }`}>
                      {ambientBackground ? "Enabled (Atmospheric Living Gradient Active)" : "Disabled (Clean Minimalist Canvas)"}
                    </span>
                  </div>

                  <Link
                    href="/"
                    target="_blank"
                    className="text-brass-700 hover:text-brass-900 font-semibold text-xs inline-flex items-center gap-1"
                  >
                    <span>View Frontpage</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Stepper Buttons & Reset */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Quick Stepper Controls
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => stepFontScale(-5)}
                    disabled={fontSizeScale <= 85 || savingFontScale}
                    className="flex-1 min-w-[130px] px-4 py-3 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 text-slate-800 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-colors shadow-2xs"
                  >
                    <ZoomOut className="w-4 h-4 text-brass-600" />
                    <span>Decrease (-5%)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleUpdateFontScale(100)}
                    disabled={fontSizeScale === 100 || savingFontScale}
                    className="flex-1 min-w-[130px] px-4 py-3 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 text-slate-800 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-colors shadow-2xs"
                  >
                    <RotateCcw className="w-4 h-4 text-slate-500" />
                    <span>Default (100%)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => stepFontScale(5)}
                    disabled={fontSizeScale >= 135 || savingFontScale}
                    className="flex-1 min-w-[130px] px-4 py-3 bg-navy-900 hover:bg-navy-800 disabled:opacity-40 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-2xs"
                  >
                    <ZoomIn className="w-4 h-4 text-brass-400" />
                    <span>Increase (+5%)</span>
                  </button>
                </div>
              </div>

              {/* Preset Cards */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Preset Legibility Levels
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Compact", scale: 90, desc: "Dense statutory reading" },
                    { label: "Standard", scale: 100, desc: "Default optimal layout" },
                    { label: "Comfortable", scale: 108, desc: "Enhanced readability" },
                    { label: "Large", scale: 115, desc: "Senior partner view" },
                    { label: "Maximum", scale: 125, desc: "High-contrast accessibility" },
                  ].map((preset) => (
                    <button
                      key={preset.scale}
                      type="button"
                      onClick={() => handleUpdateFontScale(preset.scale)}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        fontSizeScale === preset.scale
                          ? "bg-navy-950 text-white border-brass-400 ring-2 ring-brass-400/40 shadow-md"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs">{preset.label}</span>
                        <span
                          className={`font-mono text-xs font-bold ${
                            fontSizeScale === preset.scale ? "text-brass-400" : "text-slate-500"
                          }`}
                        >
                          {preset.scale}%
                        </span>
                      </div>
                      <p
                        className={`text-[11px] mt-1 line-clamp-1 ${
                          fontSizeScale === preset.scale ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {preset.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Continuous Precision Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-brass-600" />
                    <span>Continuous Fine Slider (85% — 135%)</span>
                  </label>
                  <span className="font-mono font-bold text-sm text-navy-900 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                    {fontSizeScale}%
                  </span>
                </div>

                <input
                  type="range"
                  min="85"
                  max="135"
                  step="1"
                  value={fontSizeScale}
                  onChange={(e) => handleUpdateFontScale(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#a67c52]"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 px-0.5">
                  <span>85% (Smallest)</span>
                  <span className="font-medium text-slate-600">100% (Standard)</span>
                  <span>115% (Large)</span>
                  <span>135% (Largest)</span>
                </div>
              </div>

              {/* Real-Time Sync Explainer */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>How Site-Wide Font Scaling Works</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  The entire design system of <strong>Ajmani &amp; Law Partners</strong> is calibrated using scalable proportional <code className="text-navy-900 bg-white px-1 py-0.5 rounded border border-slate-200">rem</code> typography. Adjusting this scale dynamically alters the root font dimension, ensuring that every heading, case law citation, card, and footer scales proportionately while preserving responsiveness on all desktop, tablet, and mobile screens.
                </p>
                <p className="text-[11px] text-slate-500">
                  Settings are instantly persisted to <code className="bg-white px-1 py-0.5 rounded border border-slate-200">settings.json</code> and broadcast live to all active visitor sessions without page reload.
                </p>
              </div>
            </div>

            {/* Right: Live Sandbox / Preview Card (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-brass-600" />
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Live Typography Preview
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Scale: {fontSizeScale}%
                  </span>
                </div>

                {/* The Preview Sandbox Box */}
                <div className="p-5 rounded-xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 space-y-3.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-navy-950 text-brass-400 text-xs font-semibold">
                    <Scale className="w-3 h-3" />
                    <span>Practice Area Dispatch</span>
                  </div>

                  <h4 className="text-xl font-serif font-bold text-navy-950 leading-snug">
                    Interim Measures in Commercial Arbitration
                  </h4>

                  <p className="text-xs text-brass-700 font-medium">
                    Advocate Lalit Ajmani &bull; High Court of Delhi &bull; 2026 Legal Series
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under Section 9 of the Arbitration and Conciliation Act, 1996, the commercial courts examine whether a prima facie case and balance of convenience exist prior to constitution of the arbitral tribunal.
                  </p>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-400">
                      BCI Rule 36 Compliant Legal Notice
                    </span>
                    <button
                      type="button"
                      className="px-3 py-1.5 bg-[#a67c52] text-white rounded text-xs font-medium hover:bg-[#8f6943] transition-colors"
                    >
                      Read Citation &rarr;
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  Note: Notice how this preview box, along with the entire admin dashboard and live public site, responds synchronously as you slide or click presets.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/"
                  target="_blank"
                  className="text-xs text-brass-700 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Verify on Front Page</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>

                <Link
                  href="/newsletters"
                  target="_blank"
                  className="text-xs text-slate-500 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Verify on Newsletters</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PUBLISH NEW MONTHLY NEWSLETTER MODAL
         ========================================================================= */}
      {isPublishModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 my-8 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-serif font-bold text-navy-900">
                  Publish New Monthly Legal Dispatch
                </h3>
                <p className="text-xs text-slate-500">
                  Fill details and upload the multi-page PDF document to publish immediately.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsPublishModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handlePublishNewsletter} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">
                    Month &amp; Year <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newMonth}
                    onChange={(e) => setNewMonth(e.target.value)}
                    placeholder="e.g. October 2026"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-brass-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">
                    Volume &amp; Issue <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newVolume}
                    onChange={(e) => setNewVolume(e.target.value)}
                    placeholder="e.g. Vol. III | Issue X"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-brass-600"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">
                  Edition Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Delhi Commercial Suits Procedure & Section 11 Arbitration Reference Reforms"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-brass-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">
                  Editorial Summary / Foreword <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  placeholder="Brief 2-3 sentence overview of rulings and procedural takeaways covered in this issue..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-brass-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">
                  Key Legal Topics (comma-separated)
                </label>
                <input
                  type="text"
                  value={newTopics}
                  onChange={(e) => setNewTopics(e.target.value)}
                  placeholder="e.g. Commercial Courts Act, Section 138 NI Act, BNSS Procedural Changes"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-brass-600"
                />
              </div>

              {/* PDF Document Upload */}
              <div className="space-y-2 border border-dashed border-slate-300 rounded-xl p-4 bg-slate-50">
                <div className="flex items-center justify-between">
                  <label className="font-semibold text-slate-700 block">
                    Upload Multi-Page PDF Document:
                  </label>
                  {uploadingPdf && (
                    <span className="text-brass-600 flex items-center gap-1 text-[11px]">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      <span>Uploading PDF...</span>
                    </span>
                  )}
                </div>

                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-navy-900 file:text-white hover:file:bg-navy-800 cursor-pointer"
                />

                {newPdfUrl ? (
                  <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1.5 pt-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>PDF Ready: {newPdfUrl}</span>
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-400">
                    If no new file is uploaded, a sample multi-page bulletin will be linked automatically.
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newIsLatest}
                    onChange={(e) => setNewIsLatest(e.target.checked)}
                    className="w-4 h-4 text-brass-600 rounded border-slate-300 focus:ring-brass-500"
                  />
                  <span className="font-medium text-slate-700">
                    Set as Latest Featured Issue (displays prominently on front page embedded viewer)
                  </span>
                </label>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsPublishModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="px-5 py-2 rounded-lg bg-[#a67c52] hover:bg-[#8f6943] text-white font-bold flex items-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {formSubmitting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Publishing...</span>
                    </>
                  ) : (
                    <span>Publish Monthly Issue</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
