"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyServicesSection from "@/components/PropertyServicesSection";
import { ShieldAlert, Calculator, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
              PROPERTY SERVICES
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-secondary mt-6 tracking-tight">
              Stand-alone Advisory & Documentation
            </h1>
            <p className="text-slate-650 text-base max-w-xl mx-auto mt-3">
              Not ready for a full package? Access our verified checklist reports, legal title opinions, structural audit assessments, and banking approvals individually.
            </p>
          </div>
        </section>

        {/* Existing Property Services Section detailing individual solutions */}
        <PropertyServicesSection />

        {/* Action Redirection Panel */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
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
