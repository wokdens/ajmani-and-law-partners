"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface SlideData {
  id: number;
  image: string;
  alt: string;
  preTitle: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

const slides: SlideData[] = [
  {
    id: 0,
    image: "/delhi-high-court.jpg",
    alt: "Hon'ble High Court of Delhi - Ajmani & Law Partners",
    preTitle: "Welcome to Ajmani & Law Partners",
    title: "Advocates, Solicitors & Legal Consultants",
    subtitle: "Practicing before Hon'ble High Court of Delhi, District Courts & Specialized Tribunals",
    ctaText: "Explore Practice Areas",
    ctaHref: "/practice-areas",
  },
  {
    id: 1,
    image: "/supreme-court-india.jpg",
    alt: "Supreme Court of India - Appellate Jurisprudence",
    preTitle: "Supreme Court & High Court Practice",
    title: "Strategic Appellate & Constitutional Litigation",
    subtitle: "Special Leave Petitions (SLPs), Commercial Appeals & High Court Writ Jurisdictions in New Delhi",
    ctaText: "Explore Judicial Forums",
    ctaHref: "/representative-matters",
  },
  {
    id: 2,
    image: "/commercial-arbitration-court.jpg",
    alt: "Commercial Dispute Resolution & Arbitration Chambers",
    preTitle: "Commercial Dispute Resolution",
    title: "Commercial Litigation & Domestic Arbitration",
    subtitle: "Decisive Representation in Commercial Suits, Interim Injunctions & Section 11 Arbitral Appointments",
    ctaText: "Commercial Litigation Practice",
    ctaHref: "/practice-areas/commercial-litigation",
  },
  {
    id: 3,
    image: "/delhi-district-court.jpg",
    alt: "District & Sessions Courts of Delhi",
    preTitle: "Trial Court Advocacy & Defense",
    title: "Section 138 NI Act & Substantive Trials",
    subtitle: "Exhaustive Pre-Litigation Strategy, Cheque Dishonour Trials & Commercial Summary Proceedings",
    ctaText: "Cheque Dishonour Practice",
    ctaHref: "/practice-areas/cheque-bounce-ni-act",
  },
  {
    id: 4,
    image: "/delhi-law-library.jpg",
    alt: "High Court Law Library & Legal Research Desk",
    preTitle: "Civil & Property Jurisprudence",
    title: "Substantive Civil Suits, Partition & Probate",
    subtitle: "Title Declarations, Family Estate Partitions, Testamentary Dispositions & Letters of Administration",
    ctaText: "Civil Litigation Directory",
    ctaHref: "/practice-areas/civil-litigation",
  },
  {
    id: 5,
    image: "/delhi-court-bench.jpg",
    alt: "Hon'ble High Court of Delhi Judicial Bench",
    preTitle: "Chamber Litigation Counsel",
    title: "Decisive Courtroom Advocacy & Ethical Counsel",
    subtitle: "Led by Advocate Lalit Ajmani (Enrolment No. D/5332/2017) &bull; Chambers at Janakpuri, New Delhi",
    ctaText: "Book Chamber Consultation",
    ctaHref: "/contact",
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer (transitions every 5.5 seconds unless paused on mouse hover)
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  return (
    <section
      aria-label="Firm Highlights Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[560px] md:min-h-[640px] lg:min-h-[700px] flex items-center justify-center text-center overflow-hidden border-b border-navy-900 group select-none"
    >
      {/* Background Images with Cross-Fade Transition */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          } transition-transform duration-10000`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle dark vignette overlay matching reference design */}
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/75 via-black/50 to-black/85" />
        </div>
      ))}

      {/* Centered Editorial Content (Animated per active slide) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
        {slides.map((slide, index) => {
          if (index !== currentIndex) return null;
          return (
            <div
              key={slide.id}
              className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-500"
            >
              {/* Pre-title */}
              <p className="text-xs sm:text-sm md:text-base font-sans font-medium text-slate-200 tracking-wide mb-3 drop-shadow">
                {slide.preTitle}
              </p>

              {/* Main Title (Playfair Display / Serif) */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18] mb-4 drop-shadow-md">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-sans font-light max-w-2xl sm:max-w-3xl mb-8 leading-relaxed drop-shadow">
                {slide.subtitle}
              </p>

              {/* Pill CTA Button (Matching Reference Image) */}
              <div>
                <Link
                  href={slide.ctaHref}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#a67c52] hover:bg-[#8f6943] text-white font-sans font-medium text-sm sm:text-base rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group/btn"
                >
                  <span>{slide.ctaText}</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Manual Left & Right Navigation Arrows (Visible on hover) */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* 6 Slider Dots at Bottom Center (Clickable & Dynamically Moving) */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20"
        role="tablist"
        aria-label="Carousel Navigation"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              index === currentIndex
                ? "w-8 h-2.5 bg-white shadow-md ring-2 ring-white/40"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
