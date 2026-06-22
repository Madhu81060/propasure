"use client";

import { motion } from "framer-motion";
import { COMMON_PROBLEMS } from "@/constants";
import { AlertCircle, ShieldAlert } from "lucide-react";

export default function ChallengeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="challenges" className="bg-white py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest">THE REAL ESTATE CRISIS</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mt-2">
            Real Estate Is Still Broken
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3 leading-relaxed">
            Standard search portals sell your leads, leading to endless broker spam, unverified listings, and massive legal vulnerability.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {COMMON_PROBLEMS.map((prob, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-start gap-4 transition-all hover:bg-white hover:shadow-md hover:border-primary/5 group"
            >
              <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5 group-hover:bg-red-550 group-hover:text-white transition-colors">
                ❌
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-primary mb-1">
                  {prob.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Warning callout banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-50 to-primary/5 border-l-4 border-primary rounded-r-2xl p-6 mt-12 flex flex-col sm:flex-row items-center gap-5 shadow-sm"
        >
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="text-center sm:text-left flex-grow">
            <div className="inline-block bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">
              Result
            </div>
            <p className="text-sm text-text-primary font-medium leading-relaxed">
              Most buyers unknowingly <strong>overpay by 5% to 15%</strong> and expose themselves to significant legal and financial risks by skipping proper property due diligence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
