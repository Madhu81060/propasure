"use client";

import { motion } from "framer-motion";
import { TENANT_PROBLEMS, LANDLORD_PROBLEMS, RENTAL_SOLUTIONS } from "@/constants";
import { AlertCircle, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function RentSection() {
  return (
    <section id="rent" className="bg-slate-50 py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest">LEASING SOLUTIONS</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mt-2">
            Simplifying Rental Transactions
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3">
            Removing friction, excessive commissions, and compliance disputes for both tenants and landlords.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tenant Problems */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3 mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" /> Tenant Problems
            </h3>
            <ul className="flex flex-col gap-4">
              {TENANT_PROBLEMS.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  <span className="text-red-500 flex-shrink-0">❌</span>
                  <span><strong>{prob.title}:</strong> {prob.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Landlord Problems */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3 mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" /> Landlord Problems
            </h3>
            <ul className="flex flex-col gap-4">
              {LANDLORD_PROBLEMS.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  <span className="text-red-500 flex-shrink-0">❌</span>
                  <span><strong>{prob.title}:</strong> {prob.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Our Rental Ecosystem Solutions */}
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary/15 filter blur-[80px] pointer-events-none" />
          <h3 className="font-heading font-bold text-lg text-white mb-8 border-b border-white/10 pb-3 text-center">
            Our Rental Ecosystem Solutions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RENTAL_SOLUTIONS.map((sol, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-accent mb-1">{sol.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
