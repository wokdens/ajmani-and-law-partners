"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Scale,
  ArrowRight,
} from "lucide-react";
import { firmData } from "@/data/firm";
import { practiceAreas } from "@/data/practices";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPracticeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPracticeDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/advocate-lalit-ajmani", label: "Advocate Profile" },
    { href: "/representative-matters", label: "Selected Matters" },
    { href: "/insights", label: "Insights" },
    { href: "/newsletters", label: "Newsletters" },
    { href: "/updates", label: "Updates" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* =========================================================================
          TOP UTILITY BAR (Requirement 2):
          Email address, mobile ID, and mobile number on TOP LEFT
          Social network links on TOP RIGHT
         ========================================================================= */}
      <div className="bg-[#07111e] text-slate-200 border-b border-slate-800/80 text-xs py-2 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          {/* Top Left: Mobile ID/Number & Email Address */}
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
            <a
              href={`tel:${firmData.contact.phone}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-brass-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brass-400 shrink-0" />
              <span className="font-medium">Mob: {firmData.contact.phoneFormatted}</span>
            </a>

            <span className="hidden sm:inline-block text-slate-600">|</span>

            <a
              href={`mailto:${firmData.contact.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-brass-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brass-400 shrink-0" />
              <span>{firmData.contact.email}</span>
            </a>
          </div>

          {/* Top Right: Social Network Links */}
          <div className="flex items-center gap-3.5 text-slate-300 text-xs">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ajmani & Law Partners on Facebook"
              className="hover:text-brass-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ajmani & Law Partners on Instagram"
              className="hover:text-brass-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href={firmData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Advocate Lalit Ajmani on LinkedIn"
              className="hover:text-brass-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN WHITE NAVBAR (Matching Reference Screenshot)
         ========================================================================= */}
      <div
        className={`w-full bg-white text-slate-900 border-b border-slate-200 transition-all ${
          isScrolled ? "shadow-md py-2" : "py-3"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 xl:gap-4">
            {/* Brand Logo & Emblem (Left) */}
            <Link
              href="/"
              className="flex items-center gap-2.5 xl:gap-3 group focus:outline-none rounded-md py-1 shrink-0"
            >
              {/* Circular Emblem Seal */}
              <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-slate-50 border-2 border-[#a67c52] flex items-center justify-center text-[#a67c52] shadow-xs group-hover:scale-105 transition-transform shrink-0">
                <Scale className="w-4 h-4 xl:w-5 xl:h-5" />
              </div>
              <div className="flex flex-col shrink-0">
                <span className="font-serif text-base xl:text-xl font-bold tracking-tight text-navy-950 uppercase group-hover:text-[#a67c52] transition-colors leading-tight whitespace-nowrap">
                  Ajmani &amp; Law Partners
                </span>
                <span className="text-[9px] xl:text-[10px] tracking-[0.12em] xl:tracking-[0.18em] uppercase text-slate-600 font-sans font-semibold whitespace-nowrap">
                  Advocates &bull; Litigation &bull; Legal Consultants
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Center/Right) */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2 shrink-0">
              <Link
                href="/"
                className={`relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname === "/"
                    ? "text-[#a67c52] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-2.5 xl:after:left-3 after:right-2.5 xl:after:right-3 after:h-0.5 after:bg-[#a67c52]"
                    : "text-slate-700 hover:text-navy-900"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname === "/about"
                    ? "text-[#a67c52] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-2.5 xl:after:left-3 after:right-2.5 xl:after:right-3 after:h-0.5 after:bg-[#a67c52]"
                    : "text-slate-700 hover:text-navy-900"
                }`}
              >
                About Us
              </Link>

              {/* Practice Areas Dropdown */}
              <div className="relative shrink-0" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setPracticeDropdownOpen(!practiceDropdownOpen)}
                  onMouseEnter={() => setPracticeDropdownOpen(true)}
                  aria-expanded={practiceDropdownOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                    pathname.startsWith("/practice-areas")
                      ? "text-[#a67c52] font-semibold"
                      : "text-slate-700 hover:text-navy-900"
                  }`}
                >
                  <span className="whitespace-nowrap">Our Practice Areas</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 shrink-0 ${
                      practiceDropdownOpen ? "rotate-180 text-[#a67c52]" : "text-slate-400"
                    }`}
                  />
                </button>

                {practiceDropdownOpen && (
                  <div
                    onMouseLeave={() => setPracticeDropdownOpen(false)}
                    className="absolute left-0 mt-1 w-80 bg-white border border-slate-200 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-4 py-1.5 border-b border-slate-100 text-[10px] font-sans uppercase tracking-widest text-[#a67c52] font-bold">
                      Dispute Resolution Disciplines
                    </div>
                    <div className="py-1">
                      {practiceAreas.map((pa) => (
                        <Link
                          key={pa.slug}
                          href={`/practice-areas/${pa.slug}`}
                          className="block px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#a67c52] transition-colors"
                        >
                          <div className="font-semibold text-slate-900">{pa.title}</div>
                          <div className="text-[11px] text-slate-500 truncate mt-0.5">{pa.summary}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2 mt-1 border-t border-slate-100 px-4 pb-1">
                      <Link
                        href="/practice-areas"
                        className="text-xs text-[#a67c52] hover:text-[#8f6943] font-bold flex items-center justify-between"
                      >
                        <span>View All Practice Areas</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/representative-matters"
                className={`relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname === "/representative-matters"
                    ? "text-[#a67c52] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-2.5 xl:after:left-3 after:right-2.5 xl:after:right-3 after:h-0.5 after:bg-[#a67c52]"
                    : "text-slate-700 hover:text-navy-900"
                }`}
              >
                Selected Matters
              </Link>

              <Link
                href="/insights"
                className={`relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname.startsWith("/insights")
                    ? "text-[#a67c52] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-2.5 xl:after:left-3 after:right-2.5 xl:after:right-3 after:h-0.5 after:bg-[#a67c52]"
                    : "text-slate-700 hover:text-navy-900"
                }`}
              >
                Insights
              </Link>

              <Link
                href="/newsletters"
                className={`relative px-2 xl:px-2.5 py-2 text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname.startsWith("/newsletters")
                    ? "text-[#a67c52] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-2 xl:after:left-2.5 after:right-2 xl:after:right-2.5 after:h-0.5 after:bg-[#a67c52]"
                    : "text-slate-700 hover:text-navy-900"
                }`}
              >
                Newsletters
              </Link>

              <Link
                href="/updates"
                className={`relative px-2 xl:px-2.5 py-2 text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname.startsWith("/updates")
                    ? "text-[#a67c52] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-2 xl:after:left-2.5 after:right-2 xl:after:right-2.5 after:h-0.5 after:bg-[#a67c52]"
                    : "text-slate-700 hover:text-navy-900"
                }`}
              >
                Updates
              </Link>

              <Link
                href="/contact"
                className={`relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname === "/contact"
                    ? "text-[#a67c52] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-2.5 xl:after:left-3 after:right-2.5 xl:after:right-3 after:h-0.5 after:bg-[#a67c52]"
                    : "text-slate-700 hover:text-navy-900"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Right Action Button (Pill Button like screenshot) */}
            <div className="hidden lg:flex items-center shrink-0">
              <Link
                href="/contact"
                className="px-4 xl:px-6 py-2 xl:py-2.5 bg-[#a67c52] hover:bg-[#8f6943] text-white text-[11px] xl:text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all whitespace-nowrap shrink-0"
              >
                Get Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${firmData.contact.phone}`}
                aria-label="Direct Phone Call"
                className="p-2 text-[#a67c52] hover:text-navy-900 focus:outline-none"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle main menu"
                className="p-2 text-slate-700 hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-[#a67c52] rounded-md"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[90px] bg-white border-b border-slate-200 shadow-2xl max-h-[80vh] overflow-y-auto px-4 py-6 animate-in slide-in-from-top-4 duration-200 text-slate-900">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                  pathname === item.href
                    ? "bg-slate-100 text-[#a67c52] font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3 pb-1 border-t border-slate-200 mt-2">
              <div className="px-3 text-[11px] font-bold uppercase tracking-widest text-[#a67c52] mb-2">
                Practice Areas
              </div>
              <div className="space-y-1 pl-2">
                {practiceAreas.map((pa) => (
                  <Link
                    key={pa.slug}
                    href={`/practice-areas/${pa.slug}`}
                    className="block px-3 py-2 rounded-md text-xs text-slate-600 hover:text-navy-900 hover:bg-slate-50"
                  >
                    {pa.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 mt-3 flex flex-col gap-3">
              <a
                href={`tel:${firmData.contact.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-200"
              >
                <Phone className="w-4 h-4 text-[#a67c52]" />
                <span>Call: {firmData.contact.phoneFormatted}</span>
              </a>

              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-full bg-[#a67c52] hover:bg-[#8f6943] text-white text-sm font-bold uppercase tracking-wider shadow-sm"
              >
                Get Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
