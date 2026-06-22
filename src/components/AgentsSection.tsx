"use client";

import { motion } from "framer-motion";
import { AGENT_CHALLENGES, AGENT_PLATFORM } from "@/constants";
import { AlertCircle, Laptop } from "lucide-react";

export default function AgentsSection() {
  return (
    <section id="agents" className="bg-slate-50 py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
            FOR REAL ESTATE PROFESSIONALS
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mt-2">
            Grow Your Business With Technology
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3">
            Upgrade your real estate agency tools. Propasure integrates transactional analytics and leads for vetted advisors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Challenges column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col h-full"
          >
            <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3 mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" /> Agent Challenges
            </h3>
            <div className="flex flex-col gap-5">
              {AGENT_CHALLENGES.map((ch, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-red-500 text-sm mt-0.5 flex-shrink-0">❌</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-primary mb-0.5">{ch.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col h-full"
          >
            <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3 mb-6 flex items-center gap-2">
              <Laptop className="w-5 h-5 text-secondary" /> Propasure Agent Platform
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow animate-fadeIn">
              {AGENT_PLATFORM.map((ap, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:bg-white hover:border-secondary/20 hover:shadow-sm transition-all duration-200">
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-primary mb-1">{ap.title}</h4>
                  <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed">{ap.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
