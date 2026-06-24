"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Check, Search, Lock, Sparkles, ChevronLeft, ChevronRight,
  TrendingUp, UserCheck, ShieldAlert, Award, FileText, CheckCircle2, Zap
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const SLIDES = [
  {
    category: "PREMIUM BUY & INVEST",
    title: "Buy & Invest in Real Estate With Absolute Confidence",
    sub: "Smarter due diligence, 30-year deed sweeps, and transparent AI-driven property valuations.",
    image: "/images/hero-building-1.png",
    cta1Text: "Start Buying Journey",
    cta1Link: "/contact?service=Buy%20Property",
    cta2Text: "Explore Services",
    cta2Link: "/solutions?tab=buy-property",
    property: {
      name: "The Horizon Heights",
      location: "Sector 62, Noida, UP",
      price: "₹1.8 Cr onwards",
      type: "Ultra-Luxury Apartments",
      metrics: {
        aiScore: "98%",
        safety: "RERA Approved & Deed Checked",
        trend: "+12.4% Yield Forecast"
      }
    }
  },
  {
    category: "DIRECT SELLING SUITE",
    title: "Sell Your Premium Properties Direct to Target Buyers",
    sub: "Zero broker commissions, automated escrow setups, and official registry benchmark rates.",
    image: "/images/hero-building-2.png",
    cta1Text: "List Your Property",
    cta1Link: "/contact?service=Sell%20Property",
    cta2Text: "Explore Solutions",
    cta2Link: "/solutions?tab=sell-property",
    property: {
      name: "One Capital Corporate Tower",
      location: "Gachibowli, Hyderabad",
      price: "₹15,000/sq.ft onwards",
      type: "Premium Grade-A Offices",
      metrics: {
        aiScore: "96%",
        safety: "Full Title Clearance Audit",
        trend: "+8.5% Rental Yield"
      }
    }
  },
  {
    category: "FRICTIONLESS RENTAL SYSTEM",
    title: "Rent & Manage Assets with Zero Friction",
    sub: "Verified tenant screening KYC, dynamic digital leases, and automated rent collection.",
    image: "/images/hero-building-3.png",
    cta1Text: "Manage Your Asset",
    cta1Link: "/contact?service=Rental%20Management",
    cta2Text: "Lease Solutions",
    cta2Link: "/solutions?tab=rent-property",
    property: {
      name: "Emerald Bay Marina Living",
      location: "Marine Drive, Mumbai",
      price: "₹4.2 Cr onwards",
      type: "Waterfront Condominiums",
      metrics: {
        aiScore: "97%",
        safety: "Litigation Free Certification",
        trend: "+15.2% Capital App."
      }
    }
  },
  {
    category: "BUILDER COMPLIANCE HUB",
    title: "Accelerate Developer Sales & Compliance Audits",
    sub: "Pre-qualified buyer leads matched directly by budget, layout and location constraints.",
    image: "/images/hero-building-4.png",
    cta1Text: "Partner with Us",
    cta1Link: "/contact?service=Builder%20Partnership",
    cta2Text: "Developer Solutions",
    cta2Link: "/solutions?tab=builders",
    property: {
      name: "Sovereign Icon Plaza",
      location: "MG Road, Bengaluru",
      price: "₹2.5 Cr onwards",
      type: "Smart Ecosystem Penthouses",
      metrics: {
        aiScore: "99%",
        safety: "RERA Registered & Inspected",
        trend: "+10.8% Market Valuation"
      }
    }
  }
];

function PropertyShowcaseCard({ slide }: { slide: typeof SLIDES[0] }) {
  return (
    <div className="relative w-full max-w-[460px] bg-white/80 backdrop-blur-xl border border-white/60 rounded-[30px] p-4.5 shadow-2xl shadow-blue-900/[0.06] z-10 flex flex-col justify-between overflow-hidden min-h-[440px]">
      {/* 1. Large Building Image */}
      <div className="relative w-full h-[200px] rounded-2xl overflow-hidden border border-slate-200/50 shadow-md">
        <Image
          src={slide.image}
          alt={slide.property.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-[9px] font-black uppercase text-white px-2.5 py-1 rounded-lg border border-white/10 tracking-wider">
          {slide.property.type}
        </div>
        <div className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur-md text-[9px] font-black text-white px-2.5 py-1 rounded-lg border border-emerald-400/30 flex items-center gap-1 shadow-sm">
          <Check className="w-3 h-3" /> VERIFIED
        </div>

        {/* Location & Title overlay at bottom of image */}
        <div className="absolute bottom-3 left-3 text-left">
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block">
            {slide.property.location}
          </span>
          <h4 className="text-sm font-black text-white tracking-tight">
            {slide.property.name}
          </h4>
        </div>
      </div>

      {/* 2. Real Estate Valuation & AI Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 my-3">
        {/* AI Score */}
        <div className="bg-blue-50/50 border border-blue-100/50 rounded-xl p-3 text-left">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block mb-1">
            AI Advisory Index
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-heading font-black text-primary">
              {slide.property.metrics.aiScore}
            </span>
            <span className="text-[8px] font-black text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded uppercase">
              Low Risk
            </span>
          </div>
          <span className="text-[8.5px] text-slate-500 block mt-1 font-semibold">
            Checked against 100+ project parameters.
          </span>
        </div>

        {/* Trend Forecast */}
        <div className="bg-sky-50/50 border border-sky-100/50 rounded-xl p-3 text-left flex flex-col justify-between">
          <div>
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block mb-1">
              Investment Forecast
            </span>
            <span className="text-sm font-heading font-black text-slate-800">
              {slide.property.metrics.trend}
            </span>
          </div>
          {/* Small sparkline graphic */}
          <div className="h-4 w-full mt-1.5 opacity-80">
            <svg className="w-full h-full" viewBox="0 0 100 20">
              <path d="M 0 15 Q 20 18, 40 8 T 80 6 T 100 2" fill="none" stroke="#2563EB" strokeWidth="1.5" />
              <circle cx="100" cy="2" r="1.5" fill="#2563EB" />
            </svg>
          </div>
        </div>
      </div>

      {/* 3. Safety Clearance Indicator (Full width) */}
      <div className="bg-indigo-50/40 border border-indigo-100/30 rounded-xl p-2.5 flex items-center justify-between text-left mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-100/80 flex items-center justify-center text-indigo-600 flex-shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[8px] font-black text-indigo-500 uppercase tracking-wider block leading-none">
              Legal Status
            </span>
            <span className="text-[10px] font-bold text-slate-800 mt-0.5 block leading-tight">
              {slide.property.metrics.safety}
            </span>
          </div>
        </div>
        <span className="text-[8px] font-bold text-slate-700 bg-white border border-slate-200/60 px-2 py-0.5 rounded shadow-2xs">
          RERA Checked
        </span>
      </div>

      {/* 4. Action Button */}
      <div className="flex items-center gap-2 border-t border-slate-100/85 pt-3">
        <div className="flex -space-x-2.5 overflow-hidden">
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-blue-100 flex items-center justify-center text-[7px] font-black">A1</div>
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-indigo-100 flex items-center justify-center text-[7px] font-black">L4</div>
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-sky-100 flex items-center justify-center text-[7px] font-black">P8</div>
        </div>
        <span className="text-[8px] font-black text-slate-500 text-left leading-tight max-w-[120px]">
          Audited by Certified RERA Legal Partners
        </span>
        
        <Link
          href={slide.cta1Link}
          className="ml-auto bg-primary hover:bg-primary-dark text-white text-[9px] uppercase tracking-wider font-extrabold px-3 py-2 rounded-lg flex items-center gap-1 shadow-sm active:scale-95 transition-all cursor-pointer"
        >
          <span>View Report</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 90]);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev + 1) % SLIDES.length);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); // 8 seconds cycle
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = SLIDES[currentSlide];

  // Particles coordinates
  const particles = [
    { x: "8%", y: "25%", size: 4, delay: 0 },
    { x: "24%", y: "15%", size: 5, delay: 2 },
    { x: "45%", y: "20%", size: 4, delay: 1.5 },
    { x: "62%", y: "35%", size: 5, delay: 3.5 },
    { x: "85%", y: "55%", size: 4, delay: 1 },
    { x: "50%", y: "75%", size: 5, delay: 4.5 },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-70px)] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-sky-50 via-blue-50/40 to-slate-50 text-slate-900 pt-6 sm:pt-10 lg:pt-12 pb-0"
    >
      {/* Self-contained local style tag for premium animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shifting-glow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -40px) scale(1.1); }
        }
        .animate-shifting-glow {
          animation: shifting-glow 15s ease-in-out infinite alternate;
        }
      `}} />

      {/* Background blueprint grid overlay - moving grid pattern */}
      <div className="absolute inset-0 grid-pattern-fine pointer-events-none z-0 opacity-[0.4]" />

      {/* Floating Colorful Glow Effects (Blue, Sky-Blue, Cyan, Emerald) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-100/25 filter blur-[120px] pointer-events-none z-0 animate-shifting-glow" />
      <div className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-sky-200/35 filter blur-[140px] pointer-events-none z-0 animate-shifting-glow" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-100/30 filter blur-[120px] pointer-events-none z-0 animate-shifting-glow" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-100/35 filter blur-[100px] pointer-events-none z-0 animate-shifting-glow" style={{ animationDelay: "-9s" }} />

      {/* ================= PARALLAX SLIDING BACKGROUND IMAGES ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.38 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.div
              animate={{
                scale: [1, 1.07],
              }}
              transition={{
                duration: 8,
                ease: "easeOut",
              }}
              style={{ y: backgroundY }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slide.image}
                alt="Futuristic background image"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-50 via-transparent to-sky-50/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-50/70 via-transparent to-sky-50/70" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slow Floating Soft Glowing Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 w-full h-full">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              x: [0, 8, -8, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className={`absolute rounded-full filter blur-[1px] ${
              i % 4 === 0 
                ? "bg-blue-400/50 shadow-[0_0_8px_rgba(59,130,246,0.3)]" 
                : i % 4 === 1
                ? "bg-purple-400/50 shadow-[0_0_8px_rgba(168,85,247,0.3)]"
                : i % 4 === 2
                ? "bg-cyan-400/50 shadow-[0_0_8px_rgba(6,182,212,0.3)]"
                : "bg-emerald-400/50 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
            }`}
            style={{
              left: p.x,
              top: p.y,
              width: p.size + 1,
              height: p.size + 1,
            }}
          />
        ))}
      </div>

      {/* Floating Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="hidden lg:flex absolute left-6 top-[40%] -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center bg-white/75 backdrop-blur-md border border-slate-200/80 shadow-lg text-slate-700 hover:bg-white hover:border-primary/50 hover:text-primary transition-all cursor-pointer z-40 active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={nextSlide}
        className="hidden lg:flex absolute right-6 top-[40%] -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center bg-white/75 backdrop-blur-md border border-slate-200/80 shadow-lg text-slate-700 hover:bg-white hover:border-primary/50 hover:text-primary transition-all cursor-pointer z-40 active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Hero 2-Column Responsive Layout */}
      <div className="max-w-7xl mx-auto px-6 relative z-30 w-full flex-grow flex items-center pt-2 pb-6">
        <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full"
          >
            
            {/* ================= COLUMN 1: LEFT COPY & CTAs ================= */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              {/* Category Badge */}
              <span className="text-primary text-[10px] sm:text-xs font-black tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full w-max mb-4 shadow-xs border border-primary/20">
                {slide.category}
              </span>

              {/* Headline with Cyber Sunset Text Glow */}
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[3rem] lg:leading-[1.15] text-slate-900 tracking-tight">
                {slide.title.split(" ").map((word, index) => {
                  const isHighlight = ["Confidence", "Direct", "Zero", "Audits", "Sales", "Friction", "Absolute"].includes(word.replace(/[^a-zA-Z]/g, ""));
                  if (isHighlight) {
                    return (
                      <span key={index} className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mr-2.5 inline-block animate-gradient">
                        {word}
                      </span>
                    );
                  }
                  return <span key={index} className="mr-2.5 inline-block">{word}</span>;
                })}
              </h1>

              {/* Subheadline */}
              <p className="text-slate-650 text-sm sm:text-base leading-relaxed mt-4 mb-6 font-medium max-w-xl">
                {slide.sub}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.cta1Link}
                  className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold text-xs tracking-wide uppercase shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all cursor-pointer active:scale-98"
                >
                  <span>{slide.cta1Text}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={slide.cta2Link}
                  className="flex-grow sm:flex-grow-0 flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/80 shadow-2xs px-6 py-3 rounded-xl font-bold text-xs tracking-wide uppercase transition-all cursor-pointer active:scale-98"
                >
                  <span>{slide.cta2Text}</span>
                </Link>
              </div>
            </div>

            {/* ================= COLUMN 2: RIGHT CORPORATE VISUAL (PROPERTY SHOWCASE CARD) ================= */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-2 select-none w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]">
              
              {/* Outer Sunset Glow Backdrop behind the visual dashboard */}
              <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/5 filter blur-[90px] z-0 pointer-events-none" />

              {/* Core Visual Property Showcase Card */}
              <PropertyShowcaseCard slide={slide} />
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Indicator Dots and Metrics Layout */}
      <div className="w-full flex flex-col items-center z-35 bg-transparent relative">
        {/* Carousel Indicator Dots & Slide Progress Bar */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="flex justify-center gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-350 ${
                  currentSlide === idx ? "w-6 bg-primary" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          {/* Progress bar visual indicator */}
          <div className="w-24 h-0.5 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, ease: "linear" }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>

        {/* ================= MIDDLE SECTION: 5-CARD PREMIUM FEATURE GRID (WHITE GLASSMORPHIC - REDUCED SPACES) ================= */}
        <div className="w-full max-w-7xl mx-auto px-6 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Card 1: AI-Powered Valuation */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-primary/20 hover:bg-slate-50/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Dynamic SVG Visual */}
                <div className="w-full h-20 bg-slate-50/60 rounded-xl mb-3 border border-slate-200/50 flex items-center justify-center p-2 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 160 80">
                    <line x1="0" y1="20" x2="160" y2="20" stroke="#f1f5f9" strokeWidth="0.8" />
                    <line x1="0" y1="40" x2="160" y2="40" stroke="#f1f5f9" strokeWidth="0.8" />
                    <line x1="0" y1="60" x2="160" y2="60" stroke="#f1f5f9" strokeWidth="0.8" />
                    
                    <path
                      d="M 10 70 Q 50 65, 80 40 T 150 15"
                      fill="none"
                      stroke="url(#sunset-gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="150" cy="15" r="3.5" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
                    <circle cx="150" cy="15" r="8" fill="#3b82f6" fillOpacity="0.15" />
                    
                    <defs>
                      <linearGradient id="sunset-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h4 className="font-heading font-black text-[11px] text-slate-800 mb-1.5 uppercase tracking-wide">
                  AI-Powered Valuation
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                  Get accurate property valuation based on live market & comparable data.
                </p>
              </div>
            </motion.div>

            {/* Card 2: 30-Year Deed Sweeps */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-primary/20 hover:bg-slate-50/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Dynamic SVG Visual */}
                <div className="w-full h-20 bg-slate-50/60 rounded-xl mb-3 border border-slate-200/50 flex items-center justify-center p-2 relative overflow-hidden">
                  <svg className="w-18 h-14" viewBox="0 0 80 64">
                    <rect x="6" y="14" width="36" height="42" rx="3" fill="#f8fafc" />
                    <rect x="14" y="6" width="36" height="42" rx="3" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                    
                    <line x1="20" y1="14" x2="36" y2="14" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="20" y1="20" x2="44" y2="20" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="20" y1="26" x2="44" y2="26" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="20" y1="32" x2="38" y2="32" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
                    
                    <circle cx="48" cy="40" r="10" fill="none" stroke="#3b82f6" strokeWidth="2" />
                    <line x1="55" y1="47" x2="65" y2="57" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="48" cy="40" r="14" fill="none" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.4" />
                  </svg>
                </div>
                <h4 className="font-heading font-black text-[11px] text-slate-800 mb-1.5 uppercase tracking-wide">
                  30-Year Deed Sweeps
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                  Historical ownership analysis with full legal traceability & risk mapping.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Title & Legal Protection */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-primary/20 hover:bg-slate-50/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Dynamic SVG Visual */}
                <div className="w-full h-20 bg-slate-50/60 rounded-xl mb-3 border border-slate-200/50 flex items-center justify-center p-2 relative overflow-hidden">
                  <svg className="w-18 h-16" viewBox="0 0 80 72">
                    <path
                      d="M 40 10 C 52 10, 64 6, 64 6 C 64 6, 64 34, 40 58 C 16 34, 16 6, 16 6 C 16 6, 28 10, 40 10 Z"
                      fill="#ffffff"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 40 13 C 50 13, 61 9, 61 9 C 61 9, 61 32, 40 54 C 19 32, 19 9, 19 9 C 19 9, 30 13, 40 13 Z"
                      fill="#c084fc"
                      opacity="0.2"
                    />
                    <path
                      d="M 31 34 L 37 40 L 49 26"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="font-heading font-black text-[11px] text-slate-800 mb-1.5 uppercase tracking-wide">
                  Title & Legal Protection
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                  Verified by property lawyers with litigation & encumbrance checks.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Investment Insights */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-primary/20 hover:bg-slate-50/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Dynamic SVG Visual */}
                <div className="w-full h-20 bg-slate-50/60 rounded-xl mb-3 border border-slate-200/50 flex items-center justify-center p-2 relative overflow-hidden">
                  <svg className="w-18 h-16" viewBox="0 0 88 72">
                    <rect x="10" y="44" width="10" height="18" rx="1.5" fill="#f1f5f9" />
                    <rect x="26" y="32" width="10" height="30" rx="1.5" fill="#dbeafe" />
                    <rect x="42" y="16" width="10" height="46" rx="1.5" fill="#3b82f6" />
                    
                    <ellipse cx="68" cy="54" rx="10" ry="4.5" fill="#d97706" stroke="#b45309" strokeWidth="1" />
                    <ellipse cx="68" cy="49" rx="10" ry="4.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
                    <ellipse cx="68" cy="44" rx="10" ry="4.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
                    
                    <path
                      d="M 12 40 L 28 26 L 46 12 L 58 16"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 52 10 L 60 16 L 54 22"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="font-heading font-black text-[11px] text-slate-800 mb-1.5 uppercase tracking-wide">
                  Investment Insights
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                  Neighborhood trends, rental yield, ROI & future growth forecasts.
                </p>
              </div>
            </motion.div>

            {/* Card 5: Portfolio Dashboard */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-primary/20 hover:bg-slate-50/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Dynamic SVG Visual */}
                <div className="w-full h-20 bg-slate-50/60 rounded-xl mb-3 border border-slate-200/50 flex items-center justify-center p-2 relative overflow-hidden">
                  <svg className="w-20 h-16" viewBox="0 0 96 72">
                    <rect x="4" y="8" width="88" height="56" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                    <line x1="24" y1="8" x2="24" y2="64" stroke="#e2e8f0" strokeWidth="1.2" />
                    
                    <circle cx="10" cy="14" r="2" fill="#ef4444" />
                    <circle cx="16" cy="14" r="2" fill="#eab308" />
                    
                    <rect x="32" y="16" width="52" height="20" rx="2" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                    <path d="M 34 32 Q 44 22, 54 28 T 80 20" fill="none" stroke="#10b981" strokeWidth="1.5" />
                    
                    <rect x="32" y="44" width="22" height="14" rx="2" fill="#dbeafe" />
                    <rect x="62" y="44" width="22" height="14" rx="2" fill="#e0f2fe" />
                  </svg>
                </div>
                <h4 className="font-heading font-black text-[11px] text-slate-800 mb-1.5 uppercase tracking-wide">
                  Portfolio Dashboard
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                  Track all your properties, returns, documents & alerts in one place.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
