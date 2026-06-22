"use client";

import { motion } from "framer-motion";
import { AI_CAPABILITIES, HUMAN_CAPABILITIES } from "@/constants";
import { Bot, UserCheck, CheckCircle2 } from "lucide-react";

export default function AISolutionSection() {
  return (
    <section id="solution" className="bg-slate-50 py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest">THE HYBRID MODEL</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mt-2">
            AI + Human Intelligence
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3 leading-relaxed">
            Technology alone cannot solve real estate. Humans alone cannot process massive market records. Propasure combines both.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* AI Column */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-primary/5 rounded-2xl shadow-md p-8 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-secondary border border-secondary/15 px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider mb-6">
                <Bot className="w-4 h-4" />
                AI Does
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-2">
                Data & Algorithmic Scalability
              </h3>
              <p className="text-xs text-text-muted mb-8 leading-relaxed">
                Processing structural datasets, parsing historical registries, running document OCR, and computing capital metrics.
              </p>

              <div className="flex flex-col gap-5">
                {AI_CAPABILITIES.map((cap, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 shadow shadow-accent" />
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-0.5">{cap.title}</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Human Column */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-primary/5 rounded-2xl shadow-md p-8 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider mb-6">
                <UserCheck className="w-4 h-4" />
                Humans Do
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-2">
                Empathy, Due Diligence & Negotiation
              </h3>
              <p className="text-xs text-text-muted mb-8 leading-relaxed">
                Confirming builder compliance, executing ground audit verifications, and securing transactions in municipal registrar offices.
              </p>

              <div className="flex flex-col gap-5">
                {HUMAN_CAPABILITIES.map((cap, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-0.5">{cap.title}</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <p className="font-heading font-semibold text-lg text-primary tracking-wide">
            Together, they create a safer and smarter buying experience.
          </p>
        </div>
      </div>
    </section>
  );
}
