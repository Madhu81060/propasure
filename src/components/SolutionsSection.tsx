"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, KeySquare, Building2, UserCheck, Users, ArrowRight, ShieldCheck } from "lucide-react";

const solutions = [
  {
    id: "buy-property",
    tagline: "FOR HOME BUYERS",
    title: "Buy Property",
    desc: "Direct verified home buying, 100-point project health scorecards, and 30-year legal deed sweeps with zero broker commissions.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    bgClass: "text-blue-600",
    hoverBorder: "hover:border-blue-300"
  },
  {
    id: "sell-property",
    tagline: "FOR PROPERTY OWNERS",
    title: "Sell Property",
    desc: "Cut intermediary layers, benchmark pricing using historical transaction registries, and connect directly with pre-approved buyers.",
    icon: KeySquare,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    bgClass: "text-emerald-600",
    hoverBorder: "hover:border-emerald-300"
  },
  {
    id: "rent-property",
    tagline: "FOR TENANTS",
    title: "Rent & Lease",
    desc: "Browse 100% physically-audited rental listings with zero duplicate ads, transparent deposit rules, and standard e-signed agreements.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80",
    bgClass: "text-sky-600",
    hoverBorder: "hover:border-sky-300"
  },
  {
    id: "landlords",
    tagline: "FOR LANDLORDS",
    title: "Landlord Management",
    desc: "Automate rent collection, screen incoming tenants digitally, and coordinate maintenance repairs via certified local service networks.",
    icon: UserCheck,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80",
    bgClass: "text-purple-600",
    hoverBorder: "hover:border-purple-300"
  },
  {
    id: "builders",
    tagline: "FOR DEVELOPERS",
    title: "Builders Partnership",
    desc: "Reduce customer acquisition costs, showcase compliance metrics, and target pre-qualified high-intent buyers for site visits.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
    bgClass: "text-indigo-600",
    hoverBorder: "hover:border-indigo-300"
  },
  {
    id: "agents",
    tagline: "FOR AGENTS",
    title: "Agents Platform",
    desc: "Empower your local practice with CRM tools, automated client WhatsApp follow-ups, and verified badges to build buyer trust.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
    bgClass: "text-slate-700",
    hoverBorder: "hover:border-slate-400"
  }
];

export default function SolutionsSection() {
  const sectionParticles = [
    { x: "8%", y: "25%", size: 3, delay: 0.5 },
    { x: "85%", y: "15%", size: 4, delay: 2.2 },
    { x: "22%", y: "78%", size: 5, delay: 1.1 },
    { x: "72%", y: "82%", size: 3, delay: 3.5 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="solutions" className="relative bg-premium-tech py-10 lg:py-14 border-b border-slate-100 overflow-hidden">
      {/* Scrolling architectural grid overlay */}
      <div className="absolute inset-0 grid-pattern-animate pointer-events-none opacity-[0.8] z-0" />

      {/* Neural Network Connecting Lines Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.09] z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line x1="15%" y1="30%" x2="35%" y2="60%" stroke="#1E40AF" strokeWidth="1.5" className="animate-dash" />
          <line x1="35%" y1="60%" x2="65%" y2="40%" stroke="#1E40AF" strokeWidth="1.5" className="animate-dash" />
          <line x1="65%" y1="40%" x2="88%" y2="70%" stroke="#1E40AF" strokeWidth="1.5" className="animate-dash" />
          <line x1="35%" y1="60%" x2="52%" y2="85%" stroke="#1E40AF" strokeWidth="1.5" className="animate-dash" />
          <circle cx="15%" cy="30%" r="4" fill="#1E40AF" />
          <circle cx="35%" cy="60%" r="5" fill="#1E40AF" />
          <circle cx="65%" cy="40%" r="4" fill="#1E40AF" />
          <circle cx="88%" cy="70%" r="4" fill="#1E40AF" />
          <circle cx="52%" cy="85%" r="4" fill="#1E40AF" />
        </svg>
      </div>

      {/* Abstract Blue Flowing Waves Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70">
        <svg className="absolute w-[200%] h-full top-0 left-[-50%] animate-wave opacity-35" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,320 C320,400 480,240 800,320 C1120,400 1280,240 1600,320 L1600,800 L0,800 Z" fill="url(#wave-grad-solutions)"></path>
          <defs>
            <linearGradient id="wave-grad-solutions" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#EFF6FF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#EEF2F6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Animated Mesh Gradients in Empty Areas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-400/[0.08] filter blur-[110px] animate-glow-1" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/[0.12] filter blur-[120px] animate-glow-2" />
      </div>

      {/* Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {sectionParticles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              x: [0, 5, -5, 0],
              opacity: [0, 0.35, 0]
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-indigo-500/15 filter blur-[0.5px]"
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
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            PLATFORM SOLUTIONS
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-secondary mt-4 tracking-tight">
            Tailored Services for the Real Estate Ecosystem
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
            Select your pathway to explore custom-built compliance, pricing, and transaction security tools designed for your specific property needs.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`bg-white border border-slate-200/60 rounded-[24px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${item.hoverBorder} hover:-translate-y-1.5 group`}
              >
                <div>
                  {/* Card Image Cover with Zoom Effect */}
                  <div className="relative h-40 w-full overflow-hidden z-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
                    
                    {/* Floating Icon Badge */}
                    <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md border border-slate-100/50 ${item.bgClass}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                      {item.tagline}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-secondary group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <Link
                    href={`/solutions?tab=${item.id}`}
                    className="text-xs font-bold text-primary group-hover:text-primary-dark transition-colors flex items-center gap-1 group-hover:gap-1.5 duration-200"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Callout banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-gradient-to-r from-blue-50/50 to-slate-50 border border-blue-100/60 rounded-[24px] p-5 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex gap-4 items-center text-left">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-secondary">Looking for institutional advisory?</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Explore our comprehensive enterprise deed verification & structural audit plans.</p>
            </div>
          </div>
          <Link
            href="/solutions"
            className="bg-primary hover:bg-primary-dark text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all active:scale-98"
          >
            View Solutions Dashboard
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
