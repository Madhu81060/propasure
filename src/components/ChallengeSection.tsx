"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CHALLENGE_STATS, COMMON_PROBLEMS } from "@/constants";
import { AlertCircle, ShieldAlert, Users, Calendar, Layers, FileText } from "lucide-react";

export default function ChallengeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  const statIcons = [Users, Calendar, Layers, FileText, AlertCircle];

  const sectionParticles = [
    { x: "6%", y: "12%", size: 4, delay: 0 },
    { x: "90%", y: "22%", size: 3, delay: 2 },
    { x: "12%", y: "48%", size: 5, delay: 1.2 },
    { x: "85%", y: "68%", size: 4, delay: 3.1 },
    { x: "20%", y: "82%", size: 3, delay: 0.5 },
    { x: "75%", y: "92%", size: 5, delay: 2.5 }
  ];

  return (
    <section id="challenges" className="relative bg-premium-tech py-8 lg:py-10 border-b border-slate-100 overflow-hidden">
      {/* Scrolling architectural grid overlay - fine small grids */}
      <div className="absolute inset-0 grid-pattern-fine pointer-events-none opacity-[0.35] z-0" />
      
      {/* Abstract Blue Flowing Waves Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70">
        <svg className="absolute w-[200%] h-full top-0 left-[-50%] animate-wave opacity-35" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,320 C320,400 480,240 800,320 C1120,400 1280,240 1600,320 L1600,800 L0,800 Z" fill="url(#wave-grad-1)"></path>
          <defs>
            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#EFF6FF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#EEF2F6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute w-[200%] h-full top-10 left-[-30%] animate-wave-delayed opacity-25" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,280 C360,200 540,360 900,280 C1260,200 1440,360 1800,280 L1800,800 L0,800 Z" fill="url(#wave-grad-2)"></path>
          <defs>
            <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#F0F9FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EEF2F6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Premium Floating Tech Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[8%] -left-32 w-[550px] h-[550px] rounded-full bg-blue-450/[0.12] filter blur-[110px] animate-glow-1" />
        <div className="absolute top-[38%] -right-20 w-[500px] h-[500px] rounded-full bg-indigo-450/[0.1] filter blur-[120px] animate-glow-2" />
        <div className="absolute bottom-[8%] left-[10%] w-[450px] h-[450px] rounded-full bg-sky-450/[0.08] filter blur-[100px] animate-glow-1" />
      </div>

      {/* Animated Technical Connections in Left and Right Empty Areas */}
      <div className="absolute inset-x-0 top-1/4 bottom-1/4 pointer-events-none hidden xl:block z-0 overflow-hidden">
        {/* Left margin tech element */}
        <div className="absolute left-[3%] top-10 w-[200px] h-[300px]">
          <svg width="100%" height="100%" viewBox="0 0 200 300" fill="none" className="opacity-40">
            <path d="M10,50 L80,120 L30,200 L90,270" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash" />
            <circle cx="10" cy="50" r="3.5" fill="#2563EB" className="animate-pulse" />
            <circle cx="80" cy="120" r="3.5" fill="#3B82F6" />
            <circle cx="30" cy="200" r="3.5" fill="#2563EB" />
            <circle cx="90" cy="270" r="3.5" fill="#3B82F6" className="animate-pulse" />
          </svg>
        </div>
        {/* Right margin tech element */}
        <div className="absolute right-[3%] bottom-10 w-[200px] h-[300px]">
          <svg width="100%" height="100%" viewBox="0 0 200 300" fill="none" className="opacity-40">
            <path d="M190,250 L120,180 L170,100 L110,30" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash" />
            <circle cx="190" cy="250" r="3.5" fill="#2563EB" className="animate-pulse" />
            <circle cx="120" cy="180" r="3.5" fill="#3B82F6" />
            <circle cx="170" cy="100" r="3.5" fill="#2563EB" />
            <circle cx="110" cy="30" r="3.5" fill="#3B82F6" className="animate-pulse" />
          </svg>
        </div>
      </div>

      {/* Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {sectionParticles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              x: [0, 8, -8, 0],
              opacity: [0, 0.45, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-blue-500/30 filter blur-[0.5px]"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            INDUSTRY CHALLENGE
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-secondary mt-6 tracking-tight">
            Real Estate Is Still Broken
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            The traditional property market operates on asymmetric information, manual checks, and structural inefficiencies.
          </p>
        </div>

        {/* 1. Asymmetric KPI Statistics Section */}
        <div className="mb-8 lg:mb-10">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-primary border-l-4 border-accent pl-3 mb-5">
            The Average Property Buyer Faces
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {CHALLENGE_STATS.map((stat, idx) => {
              const IconComponent = statIcons[idx] || AlertCircle;
              const spanClasses = [
                "col-span-1 sm:col-span-1 lg:col-span-1 min-h-[110px] lg:min-h-[125px]",
                "col-span-1 sm:col-span-1 lg:col-span-1 min-h-[110px] lg:min-h-[125px]",
                "col-span-1 sm:col-span-1 lg:col-span-1 min-h-[110px] lg:min-h-[125px]",
                "col-span-1 sm:col-span-1 lg:col-span-1 min-h-[110px] lg:min-h-[125px]",
                "col-span-1 sm:col-span-2 lg:col-span-1 min-h-[95px] lg:min-h-[125px]"
              ];
              const spanClass = spanClasses[idx] || "";
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative overflow-hidden rounded-[16px] border flex flex-row items-center justify-between p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(30,64,175,0.04)] hover:border-primary/20 z-10 ${spanClass} ${
                    stat.highlight
                      ? "bg-gradient-to-br from-red-50/90 to-white/95 border-red-200/80 shadow-md shadow-red-100/5"
                      : "bg-gradient-to-br from-white/95 to-slate-50/70 border-slate-200/60 shadow-md"
                  }`}
                >
                  {/* Subtle pulsing background glow element */}
                  <div className={`absolute -right-10 -bottom-10 w-28 h-28 rounded-full filter blur-[35px] -z-10 pointer-events-none pulse-glow ${
                    stat.highlight ? "bg-red-400/20" : "bg-blue-400/15"
                  }`} />
                  
                  {/* Text Content (Left) */}
                  <div className="flex flex-col items-start text-left flex-1 max-w-[65%]">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-xs border mb-1.5 flex-shrink-0 ${
                      stat.highlight 
                        ? "bg-red-100/70 border-red-200 text-red-600" 
                        : "bg-blue-50/80 border-blue-100 text-primary"
                    }`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span
                      className={`font-heading font-black text-xl sm:text-2xl lg:text-[1.5rem] block tracking-tight leading-none whitespace-nowrap ${
                        stat.highlight ? "text-red-600" : "text-secondary"
                      }`}
                    >
                      {stat.number}
                    </span>
                    <span className="text-[9.5px] font-bold text-slate-500 block mt-1.5 leading-snug">
                      {stat.label}
                    </span>
                  </div>
 
                  {/* Illustrative SVG Visual (Right) */}
                  <div className="flex items-center justify-center p-0.5 flex-shrink-0 max-w-[35%] z-20">
                    {idx === 0 && (
                      <svg className="w-9 h-9 sm:w-10 sm:h-10 text-blue-500 opacity-90" viewBox="0 0 64 64">
                        <path d="M12,48 C20,38 32,32 44,48" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" />
                        <circle cx="12" cy="48" r="4" fill="currentColor" />
                        <circle cx="44" cy="48" r="4" fill="currentColor" />
                        <path d="M 28,12 C 22,12 18,16 18,22 C 18,28 28,38 28,38 C 28,38 38,28 38,22 C 38,16 34,12 28,12 Z" fill="#6366F1" opacity="0.9" />
                        <circle cx="28" cy="22" r="3" fill="white" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg className="w-9 h-8 sm:w-10 sm:h-9 text-indigo-500 opacity-90" viewBox="0 0 64 56">
                        <rect x="2" y="8" width="60" height="40" rx="4" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="2" y1="20" x2="62" y2="20" stroke="#cbd5e1" strokeWidth="1.5" />
                        <circle cx="12" cy="28" r="2" fill="#cbd5e1" />
                        <circle cx="24" cy="28" r="2" fill="currentColor" />
                        <circle cx="36" cy="28" r="2" fill="currentColor" />
                        <circle cx="48" cy="28" r="2" fill="#cbd5e1" />
                        <circle cx="12" cy="38" r="2" fill="#cbd5e1" />
                        <circle cx="24" cy="38" r="2" fill="#cbd5e1" />
                        <path d="M 24,28 Q 30,22 36,28" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg className="w-9 h-9 sm:w-10 sm:h-10 text-blue-500 opacity-90" viewBox="0 0 64 64">
                        <line x1="32" y1="12" x2="16" y2="36" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="32" y1="12" x2="48" y2="36" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="16" y1="36" x2="32" y2="52" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="48" y1="36" x2="32" y2="52" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="16" y1="36" x2="48" y2="36" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
                        <circle cx="32" cy="12" r="5" fill="currentColor" />
                        <circle cx="16" cy="36" r="5" fill="#6366F1" />
                        <circle cx="48" cy="36" r="5" fill="#6366F1" />
                        <circle cx="32" cy="52" r="5" fill="currentColor" />
                        <circle cx="32" cy="32" r="6" fill="#10B981" />
                      </svg>
                    )}
                    {idx === 3 && (
                      <svg className="w-9 h-9 sm:w-10 sm:h-10 text-indigo-500 opacity-90" viewBox="0 0 64 64">
                        <rect x="10" y="16" width="36" height="42" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
                        <rect x="18" y="8" width="36" height="42" rx="3" fill="white" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="24" y1="16" x2="44" y2="16" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="24" y1="22" x2="44" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="24" y1="28" x2="38" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="46" cy="38" r="9" fill="#10B981" />
                        <path d="M 42,38 L 45,41 L 51,35" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {idx === 4 && (
                      <svg className="w-10 h-10 sm:w-11 sm:h-11 text-red-500 opacity-90" viewBox="0 0 80 80">
                        <path d="M 40,10 C 56,10 68,6 68,6 C 68,6 68,44 40,74 C 12,44 12,6 12,6 C 12,6 24,10 40,10 Z" fill="#FEF2F2" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M 40,24 L 40,46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        <circle cx="40" cy="56" r="4.5" fill="currentColor" />
                      </svg>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. Common Customer Problems Categories with Images */}
        <div className="mb-10">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-primary border-l-4 border-accent pl-3 mb-6">
            Common Customer Problems
          </h3>

          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Group 1: Discovery & Search Problems */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
            >
              <div className="lg:col-span-8 flex flex-col gap-4 order-1">
                <div className="border-l-4 border-primary pl-3 mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">STAGE 01</span>
                  <h4 className="font-heading font-bold text-lg text-primary">Search & Discovery Challenges</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[COMMON_PROBLEMS[0], COMMON_PROBLEMS[1], COMMON_PROBLEMS[8]].map((prob, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/60 p-5 rounded-2xl flex gap-4 items-center shadow-sm hover:shadow-md hover:border-red-200/80 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-100">
                        <span className="text-red-500 font-bold text-sm">✕</span>
                      </div>
                      <div>
                        <h5 className="font-heading font-semibold text-sm text-secondary group-hover:text-primary transition-colors mb-1">
                          {prob.title}
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {prob.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 order-2 relative h-[240px] lg:h-auto w-full rounded-[24px] overflow-hidden border border-sky-200 shadow-md shadow-sky-100/50 group bg-sky-50/50 p-1 hover:border-primary/45 hover:shadow-lg hover:shadow-sky-200/40 transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                  alt="Real estate search & discovery challenges"
                  fill
                  sizes="(max-w-1024px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/45 via-blue-900/10 to-transparent" />
                <span className="absolute bottom-4 left-6 text-white text-[10px] font-bold uppercase tracking-widest bg-slate-900/60 backdrop-blur-xs px-2.5 py-1 rounded">Discovery Phase</span>
              </div>
            </motion.div>

            {/* Group 2: Financial & Valuation Risks */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
            >
              <div className="lg:col-span-4 order-2 lg:order-1 relative h-[240px] lg:h-auto w-full rounded-[24px] overflow-hidden border border-sky-200 shadow-md shadow-sky-100/50 group bg-sky-50/50 p-1 hover:border-primary/45 hover:shadow-lg hover:shadow-sky-200/40 transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                  alt="Financial and valuation risks"
                  fill
                  sizes="(max-w-1024px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/45 via-blue-900/10 to-transparent" />
                <span className="absolute bottom-4 left-6 text-white text-[10px] font-bold uppercase tracking-widest bg-slate-900/60 backdrop-blur-xs px-2.5 py-1 rounded">Valuation Phase</span>
              </div>
              <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col gap-4">
                <div className="border-l-4 border-accent pl-3 mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">STAGE 02</span>
                  <h4 className="font-heading font-bold text-lg text-primary">Financial & Valuation Risks</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[COMMON_PROBLEMS[4], COMMON_PROBLEMS[5], COMMON_PROBLEMS[7], COMMON_PROBLEMS[9]].map((prob, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/60 p-5 rounded-2xl flex gap-4 items-center shadow-sm hover:shadow-md hover:border-red-200/80 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-100">
                        <span className="text-red-500 font-bold text-sm">✕</span>
                      </div>
                      <div>
                        <h5 className="font-heading font-semibold text-sm text-secondary group-hover:text-primary transition-colors mb-1">
                          {prob.title}
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {prob.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Group 3: Legal & Compliance Risks */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
            >
              <div className="lg:col-span-8 flex flex-col gap-4 order-1">
                <div className="border-l-4 border-red-500/80 pl-3 mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">STAGE 03</span>
                  <h4 className="font-heading font-bold text-lg text-primary">Legal & Compliance Loop-holes</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[COMMON_PROBLEMS[2], COMMON_PROBLEMS[3], COMMON_PROBLEMS[6]].map((prob, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/60 p-5 rounded-2xl flex gap-4 items-center shadow-sm hover:shadow-md hover:border-red-200/80 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-100">
                        <span className="text-red-500 font-bold text-sm">✕</span>
                      </div>
                      <div>
                        <h5 className="font-heading font-semibold text-sm text-secondary group-hover:text-primary transition-colors mb-1">
                          {prob.title}
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {prob.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 order-2 relative h-[240px] lg:h-auto w-full rounded-[24px] overflow-hidden border border-sky-200 shadow-md shadow-sky-100/50 group bg-sky-50/50 p-1 hover:border-primary/45 hover:shadow-lg hover:shadow-sky-200/40 transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                  alt="Legal & compliance loopholes"
                  fill
                  sizes="(max-w-1024px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/45 via-blue-900/10 to-transparent" />
                <span className="absolute bottom-4 left-6 text-white text-[10px] font-bold uppercase tracking-widest bg-slate-900/60 backdrop-blur-xs px-2.5 py-1 rounded">Compliance Phase</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3. Result Callout Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-50 to-primary/5 border-l-4 border-primary rounded-r-2xl p-6 flex flex-col sm:flex-row items-center gap-5 shadow-sm"
        >
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="text-center sm:text-left flex-grow">
            <div className="inline-block bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">
              Result
            </div>
            <p className="text-sm text-text-primary font-bold leading-relaxed">
              Most buyers unknowingly overpay by 5%-15% and expose themselves to significant legal and financial risks.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
