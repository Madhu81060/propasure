"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIServicesSection from "@/components/AIServicesSection";
import { Cpu, ShieldAlert, Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AIServicesPage() {
  const aiPageParticles = [
    { x: "6%", y: "12%", size: 4, delay: 0 },
    { x: "92%", y: "25%", size: 3, delay: 1.5 },
    { x: "12%", y: "48%", size: 5, delay: 1.0 },
    { x: "85%", y: "65%", size: 4, delay: 2.2 },
    { x: "18%", y: "85%", size: 3, delay: 0.5 },
    { x: "78%", y: "92%", size: 5, delay: 3.1 }
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden text-left">
        {/* Scrolling blueprint grid overlay */}
        <div className="absolute inset-0 grid-pattern-animate pointer-events-none opacity-[0.8] z-0" />
        
        {/* Premium Floating Tech Glow Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[8%] -left-32 w-[550px] h-[550px] rounded-full bg-blue-400/[0.14] filter blur-[110px] animate-glow-1" />
          <div className="absolute top-[38%] -right-20 w-[500px] h-[500px] rounded-full bg-indigo-400/[0.12] filter blur-[120px] animate-glow-2" />
          <div className="absolute bottom-[8%] left-[10%] w-[450px] h-[450px] rounded-full bg-sky-400/[0.09] filter blur-[100px] animate-glow-1" />
        </div>

        {/* Floating Light Particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {aiPageParticles.map((p, i) => (
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
              className="absolute rounded-full bg-blue-500/25 filter blur-[0.5px]"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
              }}
            />
          ))}
        </div>

        {/* Header Hero */}
        <section className="bg-transparent py-8 md:py-10 border-b border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
              AI SERVICES
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-secondary mt-6 tracking-tight">
              AI-Powered Property Diagnostics
            </h1>
            <p className="text-slate-600 text-base max-w-xl mx-auto mt-3">
              Engage our deep learning models. Scan documents for title litigation checks, simulate investment cash flows, and generate property scorecards.
            </p>
          </div>
        </section>

        {/* Existing Interactive Chatbot / AI Services workspace */}
        <AIServicesSection />

        {/* Action Redirection Panel */}
        <section className="py-10 lg:py-14 bg-transparent border-t border-slate-100 relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200 rounded-[20px] p-8 sm:p-12 shadow-lg flex flex-col items-center gap-6"
            >
              <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
                AI CONSULTATION
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-secondary">
                Request Detailed AI Diagnostic Reports
              </h2>
              <p className="text-slate-650 text-sm max-w-xl leading-relaxed">
                Have a specific question about property transactions, home loan approvals, builders delay ratios, or title due diligence? Submit your query to receive a structured analysis prepared by our AI algorithms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl text-left my-2">
                <div className="flex gap-2.5 items-center text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <Bot className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Interactive Advisor chat.</span>
                </div>
                <div className="flex gap-2.5 items-center text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <Cpu className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>100-point project rating check.</span>
                </div>
                <div className="flex gap-2.5 items-center text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Legal registry optical sweeps.</span>
                </div>
              </div>

              <Link
                href="/contact?service=AI+Advisor#contact-form"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                Proceed to AI Consultation Form <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
