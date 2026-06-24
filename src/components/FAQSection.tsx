"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/constants";
import { Plus, Minus, HelpCircle, ShieldAlert } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white py-12 lg:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            COMMON INQUIRIES
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-secondary mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto mt-3">
            Everything you need to know about our advisory layers and transaction safety.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Trust Banner Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-[32px] p-8 sm:p-10 shadow-2xl relative overflow-hidden text-left"
            >
              {/* Technical glowing mesh background */}
              <div className="absolute inset-0 grid-pattern-fine opacity-[0.05] pointer-events-none" />
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-blue-500/20 filter blur-[40px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-indigo-500/15 filter blur-[50px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-6">
                <span className="text-[10px] text-blue-300 font-extrabold tracking-widest uppercase bg-white/10 px-3 py-1.5 rounded-full w-max">
                  Propasure Integrity Pledge
                </span>
                
                <h3 className="font-heading font-black text-2xl sm:text-3xl leading-tight">
                  100% Unbiased Property Representation
                </h3>
                
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Unlike traditional portals that sell your personal details to developers as leads or charge high backend brokerage fees, Propasure represents **you** exclusively.
                </p>
                
                <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
                  <div className="flex gap-3.5 items-start">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-blue-300">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-none mb-1">Unbiased Advice</h4>
                      <p className="text-[10px] text-slate-400">Zero developer ads or broker alignment loops.</p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-none mb-1">Double Shield Verification</h4>
                      <p className="text-[10px] text-slate-400">AI diagnostics matched with property lawyer checks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Accordion List */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xs"
                  style={{
                    borderColor: isOpen ? "#1E40AF" : "",
                    backgroundColor: isOpen ? "white" : ""
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-secondary flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary/70 flex-shrink-0" />
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100/80 flex items-center justify-center text-primary transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {/* Animated expandable content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-550 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
