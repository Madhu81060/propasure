"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="bg-slate-50 py-16 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-secondary text-xs uppercase font-extrabold tracking-widest">STAY UPDATED</span>
        <h2 className="font-heading font-bold text-3xl text-primary mt-2">Subscribe to Real Estate Intelligence</h2>
        <p className="text-text-secondary text-sm max-w-lg mx-auto mt-3">
          Get weekly reports on property registration trends, legal caution flags, builder compliance logs, and market yields directly in your inbox.
        </p>

        <div className="max-w-md mx-auto mt-8">
          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-150 flex items-center justify-center gap-3 text-sm font-semibold"
            >
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              Thank you for subscribing! Propasure logs will arrive shortly.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                disabled={status === "loading"}
                className="flex-grow p-4 rounded-xl border border-slate-200 outline-none text-sm text-primary focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-primary hover:bg-primary-light text-white px-6 rounded-xl font-bold flex items-center gap-2 text-sm transition-all hover:scale-102 hover:shadow-md cursor-pointer disabled:opacity-50"
              >
                {status === "loading" ? "Joining..." : "Subscribe"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
