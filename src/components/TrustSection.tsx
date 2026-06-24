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

  const trustParticles = [
    { x: "10%", y: "20%", size: 4, delay: 0 },
    { x: "85%", y: "30%", size: 3, delay: 1.5 },
    { x: "18%", y: "75%", size: 5, delay: 2.2 },
    { x: "78%", y: "85%", size: 4, delay: 0.8 }
  ];

  return (
    <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-10 lg:py-14 relative overflow-hidden border-b border-slate-100">
      {/* Floating Animated Mesh Gradients in Empty Areas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[15%] left-[-5%] w-[450px] h-[450px] rounded-full bg-blue-400/[0.045] filter blur-[110px] animate-glow-1" />
        <div className="absolute bottom-[15%] right-[-5%] w-[480px] h-[480px] rounded-full bg-indigo-400/[0.05] filter blur-[115px] animate-glow-2" />
      </div>

      {/* Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {trustParticles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -55, 0],
              x: [0, 6, -6, 0],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-blue-500/20 filter blur-[0.5px]"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
        <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">TRUST FACTOR</span>
        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-secondary mt-3 mb-2 tracking-tight">
          Why Customers Choose Propasure
        </h2>
        <p className="text-slate-500 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          We combine intelligent technology and expert verification to deliver an unprecedented level of control and security.
        </p>

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
                className="bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/60 p-6 rounded-[24px] hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 bg-blue-50/80 rounded-2xl flex items-center justify-center text-primary border border-blue-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 mb-5 shadow-xs">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-secondary group-hover:text-primary mb-3 transition-colors duration-250">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
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
