"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Cpu, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  // Coordinates for floating particles
  const particles = [
    { x: "12%", y: "40%", size: 4, delay: 0 },
    { x: "28%", y: "20%", size: 3, delay: 2 },
    { x: "42%", y: "30%", size: 5, delay: 1.5 },
    { x: "65%", y: "45%", size: 4, delay: 3.5 },
    { x: "10%", y: "65%", size: 3, delay: 1 },
    { x: "55%", y: "75%", size: 5, delay: 4 },
    { x: "22%", y: "55%", size: 4, delay: 2.5 }
  ];

  return (
    <section
      id="home"
      className="relative w-full pt-6 pb-12 lg:pt-8 lg:pb-16 overflow-hidden flex items-center select-none text-left bg-white text-secondary"
    >
      {/* 1. Full-Width Premium Realistic Glass Skyscraper Backdrop with Breathing Zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1600&q=80"
          alt="Premium luxury modern residence high-rise"
          fill
          priority
          className="object-cover object-right opacity-[0.4] lg:opacity-[0.6]"
          style={{ objectPosition: "center 45%" }}
        />
      </motion.div>

      {/* 2. Soft Blue and White Gradient Overlays (High-contrast left, fading to transparent right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-blue-50/20 to-transparent z-10 pointer-events-none" />

      {/* 3. Bottom Mask: Seamless transition to the white homepage content below */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />

      {/* 4. Soft Radial Glow Effects */}
      <div className="absolute top-[15%] right-[10%] w-[300px] h-[300px] rounded-full bg-blue-500/5 filter blur-[90px] pointer-events-none z-10 animate-pulse" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-indigo-500/5 filter blur-[100px] pointer-events-none z-10" />

      {/* 5. Slow Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 w-full h-full">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -70, 0],
              x: [0, 8, -8, 0],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-blue-500/20 filter blur-[0.5px]"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-30 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left w-full"
        >
          {/* Main Text Content Wrapper */}
          <div className="max-w-3xl">
            {/* Heading */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                variants={textVariants}
                className="font-heading font-white text-3xl sm:text-2xl lg:text-[3.2rem] lg:leading-[1.15] text-[#0F172A] leading-tight tracking-tight"
              >
                Buy, Sell, Rent & Invest in <br className="hidden sm:inline" />
                Real Estate{" "}
                <span className="text-[#2563EB]">
                  With Confidence
                </span>
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              variants={textVariants}
              className="font-heading text-sm sm:text-base md:text-lg font-bold text-slate-600 tracking-normal mb-4 max-w-2xl leading-relaxed"
            >
              Smarter infrastructure audits, 30-year deed sweeps, and transparent valuations—driven by Property Intelligence.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mb-8 font-semibold"
            >
              Propasure is an enterprise-grade real estate platform built for serious buyers and institutional investors. By combining neural risk sweep models with verified land records and dedicated property lawyers, we safeguard your capital from pricing bubbles, double-postings, and title litigation disputes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={textVariants} className="flex flex-wrap gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/contact"
                className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-[#2563EB] text-white px-7 py-3.5 rounded-xl font-bold text-xs tracking-wide uppercase shadow-md shadow-blue-700/10 hover:shadow-lg transition-all cursor-pointer active:scale-98"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="/solutions"
                className="flex-grow sm:flex-grow-0 flex items-center justify-center bg-white hover:bg-slate-50 text-[#1E40AF] border border-blue-200/80 hover:border-blue-300 px-7 py-3.5 rounded-xl font-bold text-xs tracking-wide uppercase shadow-xs transition-all cursor-pointer active:scale-98"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Row of 4 Horizontal Glass Cards */}
          <motion.div
            variants={textVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mt-6 border-t border-slate-100 pt-8"
          >
            {[
              {
                icon: FileText,
                title: "Verified Land Records",
                desc: "Accuracy You Can Trust"
              },
              {
                icon: Cpu,
                title: "AI-Powered Due Diligence",
                desc: "Smarter Risk Evaluation"
              },
              {
                icon: ShieldCheck,
                title: "Legal & Financial Protection",
                desc: "Secure Your Investments"
              },
              {
                icon: HelpCircle,
                title: "End-to-End Support",
                desc: "From Search to Settlement"
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 bg-white/40 backdrop-blur-md border border-slate-100/50 p-4.5 rounded-2xl shadow-[0_2px_12px_rgba(15,23,42,0.02)] transition-all hover:bg-white/60"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-slate-800 leading-tight">
                      {card.title}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-none">
                      {card.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
