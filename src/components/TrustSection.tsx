"use client";

import { motion } from "framer-motion";
import { TRUST_BENEFITS } from "@/constants";
import { Bot, ShieldCheck, HelpCircle, FileSearch, LineChart, Banknote, UserRoundCheck, Building } from "lucide-react";

const iconMap: { [key: string]: any } = {
  "💡": Bot,
  "🛡️": ShieldCheck,
  "🤝": HelpCircle,
  "⚖️": FileSearch,
  "📊": LineChart,
  "🏦": Banknote,
  "🧑‍💼": UserRoundCheck,
  "🏠": Building
};

export default function TrustSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-secondary text-xs uppercase font-extrabold tracking-widest">TRUST FACTOR</span>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-primary mt-2 mb-12">
          Why Customers Choose Propasure
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TRUST_BENEFITS.map((benefit, idx) => {
            const IconComp = iconMap[benefit.icon] || Bot;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-slate-50/40 border border-slate-100/80 p-6 rounded-2xl hover:shadow-[0_20px_50px_-12px_rgba(30,64,175,0.06)] hover:border-blue-100 hover:bg-white transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4 shadow-sm">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
