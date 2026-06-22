"use client";

import { motion } from "framer-motion";
import { BUYER_CHALLENGES, BUYER_SERVICES } from "@/constants";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function BuyPropertySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="buy" className="bg-slate-50 py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest">FOR HOME BUYERS</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mt-2">
            Why Buyers Need Propasure
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3">
            Buying property involves large financial commitments. A wrong decision can cost lakhs or even crores.
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
              <AlertCircle className="w-5 h-5 text-red-500" /> Buyer Challenges
            </h3>
            <div className="flex flex-col gap-5">
              {BUYER_CHALLENGES.map((ch, idx) => (
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
          <div className="lg:col-span-7 flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-50 text-secondary-dark border border-secondary/10 p-5 rounded-2xl text-center font-heading font-bold text-sm sm:text-base mb-6 shadow-sm flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5 text-secondary" /> We represent the buyer’s interests. Not the seller’s. Not the broker’s.
            </motion.div>

            {/* Bento Grid Services */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow"
            >
              {BUYER_SERVICES.map((srv, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="bg-white border border-primary/5 rounded-2xl p-5 hover:shadow-md hover:border-primary/10 transition-all duration-200 flex flex-col"
                >
                  <h4 className="font-heading font-bold text-sm sm:text-base text-primary mb-1">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
                    {srv.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
