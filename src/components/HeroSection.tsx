"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, CheckCircle, HelpCircle } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const checklistItems = [
    "Find the right property",
    "Verify legal ownership",
    "Analyze investment potential",
    "Compare alternatives",
    "Negotiate better prices",
    "Secure financing",
    "Complete registration",
    "Manage property after purchase",
  ];

  return (
    <section id="home" className="relative bg-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-[55%] h-[90%] bg-gradient-to-bl from-slate-100/50 via-slate-50/20 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/3 filter blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/3 filter blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text & Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-slate-50 border border-primary/10 rounded-full px-4 py-1.5 mb-6 text-xs font-bold text-primary tracking-wide"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_#D4AF37]" />
            India’s First AI-Powered Property Advisory & Execution Platform
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] text-primary leading-tight tracking-tight mb-4"
          >
            Buy, Sell, Rent & Invest in Real Estate{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
              with Confidence
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-heading text-xl font-bold text-primary-light tracking-wide mb-1"
          >
            Find. Verify. Negotiate. Own.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold text-text-muted relative pb-2 mb-6 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent"
          >
            Property Decisions Assured.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl mb-8"
          >
            Buying a property is one of the biggest financial decisions of your life. Yet most people still rely on advertisements, brokers, incomplete information, and guesswork. At Propasure, we combine Artificial Intelligence, Legal Expertise, Financial Advisory, Market Intelligence, and Real Estate Professionals to help customers make smarter and safer property decisions.
          </motion.p>

          {/* Checklist */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 w-full max-w-xl"
          >
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-text-primary">
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.p variants={itemVariants} className="font-heading text-sm font-bold text-primary mb-6">
            One Platform. Complete Property Journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 w-full sm:w-auto">
            <Link
              href="#ai-workspace"
              className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-7 py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-secondary/20 hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <Bot className="w-5 h-5" />
              Talk To AI Advisor
            </Link>
            <Link
              href="#contact"
              className="flex-grow sm:flex-grow-0 flex items-center justify-center bg-primary hover:bg-primary-light text-white px-7 py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-primary/10 hover:shadow-xl transition-all hover:-translate-y-0.5 border border-white/10"
            >
              Get Free Property Consultation
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Premium Images & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-full max-w-[420px] aspect-[4/5] mt-8 lg:mt-0">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 w-[85%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                alt="Modern luxury apartments in India"
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Homeowner Overlay Image */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 right-0 w-[60%] h-[50%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                alt="Happy Indian homeowners receiving keys"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating Badge 1: AI Match */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[28%] -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-primary/5 shadow-lg flex items-center gap-3 z-30 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-lg shadow-sm">🤖</div>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold uppercase text-text-muted">AI Verification</span>
                <span className="text-xs font-bold text-primary">98.4% Legal Match</span>
              </div>
            </motion.div>

            {/* Floating Badge 2: Scorecard */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[22%] -left-8 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-primary/5 shadow-lg flex items-center gap-3 z-30 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-lg shadow-sm">📈</div>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold uppercase text-text-muted">Propasure Score</span>
                <span className="text-xs font-bold text-primary">87/100 (Excellent)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
