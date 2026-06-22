"use client";

import { motion } from "framer-motion";
import { CHALLENGE_STATS } from "@/constants";

export default function StatisticsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="bg-primary text-white py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary/10 filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-xs uppercase font-extrabold tracking-widest">TRANSACTION METRICS</span>
          <h2 className="font-heading font-bold text-3xl mt-2 text-white">
            The Traditional Journey is Inefficient
          </h2>
          <p className="text-slate-300 text-sm mt-3 leading-relaxed">
            Homebuyers spend months dealing with fragmented channels, unverified listings, and massive paperwork before finalizing a property.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {CHALLENGE_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`p-6 rounded-2xl border flex flex-col justify-between text-center transition-all ${
                stat.highlight
                  ? "bg-gradient-to-br from-red-950/40 to-slate-950/40 border-red-500/30 shadow-lg shadow-red-950/10"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div>
                <span
                  className={`font-heading font-extrabold text-3xl sm:text-4xl block mb-2 tracking-tight ${
                    stat.highlight ? "text-red-400" : "text-accent"
                  }`}
                >
                  {stat.number}
                </span>
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block mb-4">
                  {stat.label.includes(" disputes") ? "Legal disputes" : stat.label}
                </span>
              </div>
              <p className="text-[11px] text-slate-350 leading-relaxed mt-auto">
                {stat.highlight
                  ? "Average risk period if structural due-diligence is ignored."
                  : `Typical buyer involvement across standard broker lists.`}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
