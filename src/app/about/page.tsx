import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustSection from "@/components/TrustSection";
import StatisticsSection from "@/components/StatisticsSection";
import ChallengeSection from "@/components/ChallengeSection";
import AISolutionSection from "@/components/AISolutionSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialsSection from "@/components/TestimonialsSection";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Heart, Eye, Target } from "lucide-react";

export const metadata = {
  title: "About Us | Propasure",
  description: "Learn how Propasure is redefining property advisory in India using AI and legal expertise.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
              OUR MISSION
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary mt-6 tracking-tight">
              Redefining Property Advisory & Execution
            </h1>
            <p className="text-text-secondary text-base sm:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
              Propasure was built on a simple premise: Indian homebuyers deserve absolute protection and data clarity. We combine cutting-edge AI OCR scanners with senior real estate lawyers to deliver direct, unbiased representation.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-light text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                Connect With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Vision & Values Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-3">Our Vision</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  To become India's most trusted real estate ecosystem, where every homebuyer handles transactions with the data clarity, pricing fairness, and legal speed of institutional investors.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-3">Our Promise</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  We maintain absolute integrity by working exclusively as buyer representatives. We accept zero broker payouts or developer cuts, guaranteeing 100% unbiased audits.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-3">AI Diagnostics</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  By running OCR scans on documents and scraping land registry indexes, we flag historical encumbrances, deviations, and pricing anomalies before a deposit is paid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Existing Content Blocks */}
        <TrustSection />
        <StatisticsSection />
        <ChallengeSection />
        <AISolutionSection />
        <ProcessTimeline />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
