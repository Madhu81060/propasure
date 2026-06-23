"use client";

import { motion } from "framer-motion";
import { CHALLENGE_STATS, COMMON_PROBLEMS } from "@/constants";
import { AlertCircle, ShieldAlert, Users, Calendar, Layers, FileText, HelpCircle } from "lucide-react";

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

  const statIcons = [Users, Calendar, Layers, FileText, AlertCircle];

  return (
    <section id="challenges" className="bg-white py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest">
            INDUSTRY CHALLENGE
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-primary mt-2">
            Real Estate Is Still Broken
          </h2>
        </div>

        {/* 1. The Average Property Buyer Faces */}
        <div className="mb-20">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-primary border-l-4 border-accent pl-3 mb-8">
            The Average Property Buyer Faces
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CHALLENGE_STATS.map((stat, idx) => {
              const IconComponent = statIcons[idx] || AlertCircle;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-[20px] border flex flex-col justify-between text-center transition-all ${
                    stat.highlight
                      ? "bg-red-50/50 border-red-200 shadow-md shadow-red-100/50 lg:col-span-1"
                      : "bg-slate-50 border-slate-200/60 hover:bg-white hover:shadow-md hover:border-primary/5"
                  }`}
                >
                  <div className="flex justify-center mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      stat.highlight ? "bg-red-100 text-red-600" : "bg-blue-50 text-primary"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <span
                      className={`font-heading font-extrabold text-2xl sm:text-3xl block mb-1 tracking-tight ${
                        stat.highlight ? "text-red-600" : "text-secondary"
                      }`}
                    >
                      {stat.number}
                    </span>
                    <span className="text-xs font-bold text-slate-600 block leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Common Customer Problems */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-primary border-l-4 border-accent pl-3 mb-8">
            Common Customer Problems
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {COMMON_PROBLEMS.map((prob, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-slate-50 border border-slate-200/50 p-4 rounded-xl flex items-start gap-3 transition-all hover:bg-white hover:shadow-sm hover:border-primary/10 group"
              >
                <div className="text-xs flex-shrink-0 mt-0.5 select-none">
                  ❌
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-secondary group-hover:text-primary transition-colors">
                    {prob.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-normal mt-1">
                    {prob.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3. Result Callout Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-50 to-primary/5 border-l-4 border-primary rounded-r-2xl p-6 flex flex-col sm:flex-row items-center gap-5 shadow-sm"
        >
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="text-center sm:text-left flex-grow">
            <div className="inline-block bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">
              Result
            </div>
            <p className="text-sm text-text-primary font-bold leading-relaxed">
              Most buyers unknowingly overpay by 5%-15% and expose themselves to significant legal and financial risks.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
