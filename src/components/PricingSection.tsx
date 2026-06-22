"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/constants";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-white py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
            TRANSPARENT COSTS
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mt-2">
            Plans & Pricing
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3">
            Choose a level matching your step in the buying process. Cancel or adjust anytime.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-5 py-2 mt-8 text-sm font-semibold text-text-secondary shadow-sm">
            <span>Standard Rate</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 bg-slate-200 rounded-full cursor-pointer focus:outline-none transition-colors"
              style={{ backgroundColor: annual ? "var(--color-secondary)" : "" }}
            >
              <motion.span
                layout
                className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"
                animate={{ x: annual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className="flex items-center gap-1">
              Annual Retainer
              <span className="bg-amber-100 text-amber-800 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Save 15%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-12">
          {PRICING_PLANS.map((plan, idx) => {
            const priceToDisplay = annual ? plan.priceAnnual : plan.price;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={cn(
                  "bg-white border rounded-3xl p-6 flex flex-col justify-between transition-all relative",
                  plan.isFeatured
                    ? "border-secondary shadow-xl shadow-secondary/5 ring-1 ring-secondary/20"
                    : "border-slate-200 shadow-md shadow-slate-100"
                )}
              >
                {plan.isFeatured && (
                  <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-secondary text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="border-b border-slate-100 pb-5 mb-6">
                    <h3 className="font-heading font-extrabold text-lg text-primary">{plan.name}</h3>
                    <span className="text-[10px] text-text-muted font-semibold uppercase tracking-wider block mt-1">
                      {plan.target}
                    </span>
                    <div className="flex items-baseline mt-4">
                      <span className="text-sm font-bold text-primary mr-1">₹</span>
                      <span className="font-heading font-black text-3xl text-primary leading-none tracking-tight">
                        {priceToDisplay.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[10px] text-text-secondary ml-1 font-semibold">
                        {plan.price === 0 ? "" : annual ? "/ flat fee (annual)" : "/ flat fee"}
                      </span>
                    </div>
                  </div>

                  {/* Checklist */}
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {plan.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5 text-xs text-text-primary">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    href="#contact"
                    className={cn(
                      "w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer",
                      plan.isFeatured
                        ? "bg-secondary text-white hover:bg-secondary-light shadow-md shadow-secondary/15"
                        : "bg-white border-2 border-primary text-primary hover:bg-slate-50"
                    )}
                  >
                    {plan.price === 0 ? "Get Started" : "Choose Plan"}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-text-muted flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-primary" />
          <span>Rates exclude state registration fee limits and sub-registrar administrative stamp charges.</span>
        </div>
      </div>
    </section>
  );
}
