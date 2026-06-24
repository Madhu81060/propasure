"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyServicesSection from "@/components/PropertyServicesSection";
import { ShieldAlert, Calculator, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyServicesPage() {
  const propertyPageParticles = [
    { x: "6%", y: "15%", size: 4, delay: 0 },
    { x: "92%", y: "22%", size: 3, delay: 2 },
    { x: "12%", y: "45%", size: 5, delay: 1.2 },
    { x: "85%", y: "65%", size: 4, delay: 3.1 },
    { x: "20%", y: "82%", size: 3, delay: 0.5 },
    { x: "75%", y: "92%", size: 5, delay: 2.5 }
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
          {propertyPageParticles.map((p, i) => (
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
              PROPERTY SERVICES
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-secondary mt-6 tracking-tight">
              Stand-alone Advisory & Documentation
            </h1>
            <p className="text-slate-655 text-base max-w-xl mx-auto mt-3">
              Not ready for a full package? Access our verified checklist reports, legal title opinions, structural audit assessments, and banking approvals individually.
            </p>
          </div>
        </section>

        {/* Existing Property Services Section detailing individual solutions */}
        <PropertyServicesSection />

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
                DIAGNOSTIC AUDIT
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-secondary">
                Register For Free Property Audit
              </h2>
              <p className="text-slate-650 text-sm max-w-xl leading-relaxed">
                Protect your real estate deposits. Request an individual property audit. Our advisors coordinate 30-year title deed registry runs, builder delay history analytics, and encumbrance checking reports.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl text-left my-2">
                <div className="flex gap-2.5 items-center text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Registry OCR sweeps.</span>
                </div>
                <div className="flex gap-2.5 items-center text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <Calculator className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Registry value metrics.</span>
                </div>
                <div className="flex gap-2.5 items-center text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Detailed builder delays scorecard.</span>
                </div>
              </div>

              <Link
                href="/contact?service=Property+Audit#contact-form"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                Proceed to Property Audit Form <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
