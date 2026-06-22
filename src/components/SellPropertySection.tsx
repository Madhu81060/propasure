"use client";

import { motion } from "framer-motion";
import { OWNER_CHALLENGES, OWNER_SERVICES } from "@/constants";
import { Sparkles, Users, Award, Landmark, FileCheck2, ShieldCheck, Mail, Megaphone } from "lucide-react";

const iconMap: { [key: string]: any } = {
  "🤖": Megaphone,
  "👥": Users,
  "📊": Award,
  "🤝": Landmark,
  "📄": FileCheck2,
  "🔑": ShieldCheck
};

export default function SellPropertySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="sell" className="bg-white py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest">FOR PROPERTY OWNERS</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mt-2">
            Sell Faster. Sell Smarter.
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3">
            Cut out redundant intermediary layers and connect directly with qualified target buyers.
          </p>
        </div>

        {/* Challenges section */}
        <div className="mb-12">
          <h3 className="font-heading font-bold text-lg text-primary text-center mb-8">
            Challenges Owners Face
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {OWNER_CHALLENGES.map((ch, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <strong className="text-sm font-bold text-primary block mb-2">{ch.title}</strong>
                <p className="text-xs text-text-secondary leading-relaxed">{ch.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solutions section */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100">
          <h3 className="font-heading font-bold text-lg text-primary text-center mb-8">
            Our Solution
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {OWNER_SERVICES.map((srv, idx) => {
              // Extract icon based on description or lookup
              const IconComp = iconMap[idx === 0 ? "🤖" : idx === 1 ? "👥" : idx === 2 ? "📊" : idx === 3 ? "🤝" : idx === 4 ? "📄" : "🔑"] || Sparkles;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white border border-primary/5 hover:border-secondary/20 p-6 rounded-2xl hover:shadow-lg transition-all duration-350 flex flex-col items-start"
                >
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-secondary mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-primary mb-2">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {srv.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
