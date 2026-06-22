"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/constants";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <section className="bg-slate-50 py-20 border-b border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
            SUCCESS STORIES
          </span>
          <h2 className="font-heading font-bold text-3xl text-primary mt-2">
            Why Customers Trust Propasure
          </h2>
        </div>

        {/* Carousel Window */}
        <div className="relative bg-white rounded-3xl shadow-xl border border-primary/5 p-8 sm:p-12 min-h-[250px]">
          {/* Quote floating icon */}
          <div className="absolute top-6 right-8 text-primary/5 font-extrabold pointer-events-none">
            <Quote className="w-16 h-16" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-8 items-center"
            >
              {/* Profile Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-secondary flex-shrink-0 shadow-md">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Review */}
              <div className="flex-grow flex flex-col items-center sm:items-start text-center sm:text-left">
                {/* Rating stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(current.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-text-primary leading-relaxed font-medium mb-4 italic">
                  "{current.quote}"
                </p>

                <h4 className="font-heading font-bold text-sm text-primary">{current.name}</h4>
                <span className="text-[10px] text-text-muted mt-0.5">{current.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
            {/* Dots indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setIndex(dotIdx)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                    dotIdx === index ? "bg-primary w-5" : "bg-slate-200"
                  }`}
                  style={{
                    backgroundColor: dotIdx === index ? "var(--color-primary)" : "",
                    width: dotIdx === index ? "20px" : ""
                  }}
                />
              ))}
            </div>

            {/* Arrow controllers */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-xl border border-slate-200 hover:border-primary flex items-center justify-center text-text-secondary hover:text-primary transition-all cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-xl border border-slate-200 hover:border-primary flex items-center justify-center text-text-secondary hover:text-primary transition-all cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
