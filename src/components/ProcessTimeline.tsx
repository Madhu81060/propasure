"use client";

import { motion } from "framer-motion";
import { TIMELINE_STEPS } from "@/constants";

export default function ProcessTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="process" className="bg-white py-20 border-b border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest">THE PLAYBOOK</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mt-2">
            Tell Us What You Need
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3">
            From Search To Ownership. We Handle Everything.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 sm:pl-12 border-l-2 border-slate-100 flex flex-col gap-10">
          {TIMELINE_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative group"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-primary text-primary font-heading font-bold text-sm flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10">
                {step.step}
              </div>

              {/* Card content */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-lg hover:border-primary/5 transition-all duration-300">
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-secondary">
                  {step.label}
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-primary mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
