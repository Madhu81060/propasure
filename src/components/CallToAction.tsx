"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, HelpCircle, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-slate-50 via-blue-50/20 to-slate-50 animate-gradient py-10 lg:py-14 border-b border-slate-100 relative overflow-hidden">
      {/* Visual background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-blue-100/30 filter blur-[90px] pointer-events-none -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200/60 rounded-[32px] p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center gap-6"
        >
          <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            GET STARTED
          </span>
          
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-secondary leading-tight max-w-2xl mt-2 tracking-tight">
            Ready to Make Confident Property Decisions?
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            Connect with our property experts and lawyers today. We help you find, verify, negotiate, and own real estate with absolute transparency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl text-left my-2">
            <div className="flex gap-2.5 items-center text-xs font-semibold text-slate-700 bg-slate-50/50 p-3.5 rounded-xl border border-slate-200/40 hover:bg-slate-50/80 transition-colors duration-250">
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <span>100% Direct Buyer Protection</span>
            </div>
            <div className="flex gap-2.5 items-center text-xs font-semibold text-slate-700 bg-slate-50/50 p-3.5 rounded-xl border border-slate-200/40 hover:bg-slate-50/80 transition-colors duration-250">
              <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Zero Developer Commissions</span>
            </div>
            <div className="flex gap-2.5 items-center text-xs font-semibold text-slate-700 bg-slate-50/50 p-3.5 rounded-xl border border-slate-200/40 hover:bg-slate-50/80 transition-colors duration-250">
              <PhoneCall className="w-5 h-5 text-primary flex-shrink-0" />
              <span>24/7 Expert Chat Support</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link
              href="/contact?scroll=form"
              className="bg-primary hover:bg-primary/95 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98 text-xs sm:text-sm"
            >
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/ai-services"
              className="bg-white hover:bg-slate-50 text-secondary border border-slate-200 font-bold px-8 py-3.5 rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer active:scale-98 text-xs sm:text-sm"
            >
              Try AI Advisor
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
