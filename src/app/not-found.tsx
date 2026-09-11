import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, Home, BookOpen, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white border border-slate-200 rounded-2xl p-8 shadow-card">
        <div className="w-16 h-16 rounded-full bg-brass-50 border border-brass-200 text-brass-700 flex items-center justify-center mx-auto">
          <Scale className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-brass-700 uppercase tracking-widest">
            Error 404 &bull; URL Not Found
          </span>
          <h1 className="text-2xl font-serif font-bold text-navy-900">
            Document or Page Not Found
          </h1>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            The legal publication or directory page you requested is not indexed at this URL, or may have been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5 text-xs font-semibold font-sans">
          <Link
            href="/"
            className="w-full py-2.5 px-4 bg-navy-900 hover:bg-navy-800 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4 text-brass-400" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/practice-areas"
            className="w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-slate-500" />
            <span>Explore Practice Areas</span>
          </Link>

          <Link
            href="/contact"
            className="w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-slate-500" />
            <span>Contact Chambers Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
