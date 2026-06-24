"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Brain, Heart, Lightbulb, Compass, Users, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";

const chooseUsReasons = [
  {
    title: "100% Direct Buyer Protection",
    desc: "We represent your interests exclusively. We do not accept advertising fees or backend margins from builders or developers.",
    icon: Shield
  },
  {
    title: "AI-Powered Risk Scanning",
    desc: "Our neural networks sweep municipal land records, title deeds, and legal litigation histories to flag document issues instantly.",
    icon: Brain
  },
  {
    title: "Dedicated Human Advisors",
    desc: "Get guidance from senior real estate lawyers, financial consultants, and field inspection executives at every milestone.",
    icon: Users
  },
  {
    title: "No Hidden Developer Commissions",
    desc: "We pass on negotiated direct developer savings to our clients, ensuring complete transparency in property pricing.",
    icon: Lightbulb
  }
];

export default function AboutPage() {
  const aboutParticles = [
    { x: "5%", y: "15%", size: 4, delay: 0 },
    { x: "92%", y: "25%", size: 3, delay: 2 },
    { x: "12%", y: "45%", size: 5, delay: 1.2 },
    { x: "88%", y: "65%", size: 4, delay: 3.1 },
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
          {aboutParticles.map((p, i) => (
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

        {/* Company Overview */}
        <section className="bg-transparent py-10 lg:py-14 border-b border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
                COMPANY OVERVIEW
              </span>
              <h1 className="font-heading font-black text-4xl sm:text-5xl text-secondary mt-6 tracking-tight">
                India’s Property Trust Layer
              </h1>
              <p className="text-slate-700 text-base sm:text-lg mt-4 leading-relaxed font-semibold">
                Propasure is an AI-powered property advisory and transaction execution platform built to make real estate transactions transparent, stress-free, and legally secure.
              </p>
              <p className="text-slate-550 text-xs sm:text-sm mt-3 leading-relaxed">
                Buying a property is one of the most significant financial decisions in an individual's life. Yet, the process remains heavily fragmented, broker-driven, and opaque. Propasure was founded to change this. We integrate advanced AI algorithms with seasoned legal, financial, and real-estate field experts to act as a unified, buyer-side representative.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-10 lg:py-12 bg-transparent border-b border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-xs hover:shadow-md transition-all">
              <span className="text-xs font-bold tracking-wider text-primary uppercase block mb-2">Our Focus</span>
              <h3 className="font-heading font-black text-2xl text-secondary mb-4">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To build India's most trusted, secure, and transparent real-estate advisory ecosystem, ensuring every customer feels safe and confident throughout their home buying journey. We aim to benchmark property transactions by making compliance, safety, and unbiased data accessible to all.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-xs hover:shadow-md transition-all">
              <span className="text-xs font-bold tracking-wider text-primary uppercase block mb-2">Our Mission</span>
              <h3 className="font-heading font-black text-2xl text-secondary mb-4">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To simplify real estate discovery, due diligence, and execution by matching deep learning technology with real estate professionals. We empower buyers, sellers, landlords, and tenants with verified property scorecards, comprehensive legal title reviews, and professional negotiation support.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Propasure */}
        <section className="py-10 lg:py-12 bg-transparent border-b border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
                WHY CHOOSE US
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-secondary mt-6">
                Protecting Your Family's Life Savings
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {chooseUsReasons.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-[20px] p-6 sm:p-8 flex gap-4 items-start hover:bg-white hover:border-primary/10 transition-all shadow-xs">
                    <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-550 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI-powered Property Advisory */}
        <section className="py-10 lg:py-12 bg-transparent border-b border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
                AI TECHNOLOGY
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-secondary mt-6 tracking-tight">
                AI-Powered Property Advisory & OCR Diagnostics
              </h2>
              <p className="text-slate-650 text-xs sm:text-sm leading-relaxed mt-4">
                At Propasure, we leverage specialized Machine Learning models trained on historical land records, municipality registries, and developer delivery records. Our proprietary AI Legal Risk Engine scans mother deeds, encumbrance certificates, and RERA filing updates to detect litigation risks.
              </p>
              <p className="text-slate-650 text-xs sm:text-sm leading-relaxed mt-3">
                Our AI Property Score analyzes location appreciation data, proximity transit infrastructure, builder solvency indicators, and registry prices to generate a unified scorecard. This ensures buyers are equipped with real-time benchmark valuations to negotiate with sellers.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-md">
              <h3 className="font-heading font-bold text-base text-secondary mb-4">Diagnostic Capabilities</h3>
              <div className="flex flex-col gap-4">
                {[
                  "Optical Character Recognition (OCR) scanner for mother deeds.",
                  "Automated encumbrance certificate link-chain checking.",
                  "Registry price benchmark anomaly flagging.",
                  "Builder execution and delivery delay forecasting models.",
                  "Location liveability and infrastructure growth index calculations."
                ].map((cap, idx) => (
                  <div key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-slate-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team and Expertise */}
        <section className="py-10 lg:py-12 bg-transparent border-b border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
                TEAM & EXPERTISE
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-secondary mt-6">
                Cross-Functional Real Estate Professionals
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Our team represents a blend of technology pioneers, legal experts, experienced valuers, and site inspectors dedicated to securing transactions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs">
                <span className="text-primary font-bold text-3xl sm:text-4xl block mb-2">Legal Scholars</span>
                <p className="text-xs text-slate-550 leading-relaxed">
                  Real-estate title attorneys who check chain documents, municipal permits, and RERA compliance live.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs">
                <span className="text-primary font-bold text-3xl sm:text-4xl block mb-2">Data Scientists</span>
                <p className="text-xs text-slate-550 leading-relaxed">
                  Software developers building OCR sweep systems, market appraisal models, and real-estate chatbot layers.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs">
                <span className="text-primary font-bold text-3xl sm:text-4xl block mb-2">Field Valuers</span>
                <p className="text-xs text-slate-550 leading-relaxed">
                  Field execution experts who inspect properties, check construction metrics, and coordinate registrar filings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Trust and Transparency */}
        <section className="py-10 lg:py-12 bg-transparent relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
            <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
              TRUST & TRANSPARENCY
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-secondary leading-tight">
              Our Pledge: 100% Unbiased Property Representation
            </h2>
            <p className="text-slate-650 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Unlike normal property portals that earn commissions by selling your contact leads to brokers or developers, Propasure does not advertise inventories for builders. Our revenue comes directly from serving you, the customer. This ensures our scorecards, legal evaluations, and pricing benchmarks remain unbiased.
            </p>
            <div className="w-full max-w-md border border-slate-200 rounded-xl p-4 bg-white shadow-sm flex items-center gap-3 text-left">
              <Award className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h5 className="font-bold text-secondary text-xs sm:text-sm">Zero Developer Commisions</h5>
                <p className="text-[10px] sm:text-xs text-slate-550 mt-0.5">We represent the buyer's interests—not the developer's.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
