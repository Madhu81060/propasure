"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { submitToSheetDB } from "@/lib/sheetdb";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Bangalore");
  const [service, setService] = useState("Buy");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    // Basic regex checks
    if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s-+]/g, ""))) {
      setStatus("error");
      setErrorMsg("Please enter a valid 10-digit Indian phone number.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await submitToSheetDB("Free Consultation Form", {
        name,
        phone,
        email,
        city,
        propertyType: service,
        requirement: details,
      });
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to submit request. Please try again.");
    }
  };

  const getWhatsAppLink = () => {
    const text = `Hi Propasure! My name is ${name}. I just registered my interest for ${service} property services in ${city}. Looking forward to discussing details.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info panel */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
              GET IN TOUCH
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mt-2">
              Let’s Discuss Your Property Goals
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Whether you are buying, selling, renting, managing, or developing property, our expert advisors are ready to protect your interests.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-primary mb-0.5">Phone Support</h4>
                  <a href="tel:+919876543210" className="text-sm font-bold text-primary hover:text-secondary transition-colors">
                    +91 98765 43210
                  </a>
                  <p className="text-[10px] text-text-muted mt-0.5">Mon - Sat, 9:00 AM - 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-primary mb-0.5">Email Support</h4>
                  <a href="mailto:support@propasure.com" className="text-sm font-bold text-primary hover:text-secondary transition-colors">
                    support@propasure.com
                  </a>
                  <p className="text-[10px] text-text-muted mt-0.5">Response turnaround under 4 hours</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-secondary flex items-center justify-center flex-shrink-0 shadow-sm border border-secondary/10">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-secondary-dark mb-0.5">WhatsApp Support</h4>
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Propasure%20Advisor!%20I%20would%20like%20to%20know%20more%20about%2520your%20property%20advisory%20services."
                    target="_blank"
                    className="text-sm font-bold text-secondary-dark hover:text-secondary-light transition-colors"
                  >
                    Chat with Property Advisor
                  </a>
                  <p className="text-[10px] text-text-muted mt-0.5">Instantly match with a live advisor</p>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="mt-6 border-t border-slate-200 pt-6">
              <h4 className="font-heading font-bold text-xs sm:text-sm text-primary mb-3">Office Locations:</h4>
              <div className="flex flex-wrap gap-2">
                {["Bangalore (HQ)", "Mumbai", "Hyderabad", "Delhi-NCR"].map((loc, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 bg-white border border-slate-200 text-xs text-text-secondary px-3 py-1.5 rounded-lg shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary" /> {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form Card panel */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
            {status === "success" ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-secondary flex items-center justify-center text-3xl shadow-sm border border-secondary/15 animate-bounce">
                  ✓
                </div>
                <h3 className="font-heading font-bold text-xl text-primary">Consultation Scheduled!</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
                  Welcome to Propasure. An expert property consultant has been assigned to prepare your portfolio overview.
                </p>
                
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  className="mt-4 bg-secondary hover:bg-secondary-light text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-secondary/20 transition-all hover:-translate-y-0.5 flex items-center gap-2 text-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" /> Open WhatsApp for Instant Chat
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3">
                  Book Free Consultation
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold text-text-secondary">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="p-3 text-xs sm:text-sm border border-slate-250 rounded-xl outline-none focus:border-primary bg-white text-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold text-text-secondary">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="p-3 text-xs sm:text-sm border border-slate-250 rounded-xl outline-none focus:border-primary bg-white text-primary"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-bold text-text-secondary">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="p-3 text-xs sm:text-sm border border-slate-250 rounded-xl outline-none focus:border-primary bg-white text-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold text-text-secondary">Target City</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="p-3 text-xs sm:text-sm border border-slate-250 rounded-xl outline-none focus:border-primary bg-white text-primary"
                    >
                      <option value="Bangalore">Bangalore</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Pune">Pune</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold text-text-secondary">I want to...</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="p-3 text-xs sm:text-sm border border-slate-250 rounded-xl outline-none focus:border-primary bg-white text-primary"
                    >
                      <option value="Buy">Buy a Property</option>
                      <option value="Sell">Sell a Property</option>
                      <option value="Rent">Rent / Lease</option>
                      <option value="Landlord">Landlord Portfolio</option>
                      <option value="Verify">Verify Document Legitimacy</option>
                      <option value="Partner">Partner as Developer/Agent</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-bold text-text-secondary">Brief Details (Optional)</label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Tell us about budget, locality, or specific property links..."
                    className="p-3 text-xs sm:text-sm border border-slate-250 rounded-xl outline-none focus:border-primary bg-white text-primary resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="bg-red-50 text-red-700 text-xs border border-red-200 p-3 rounded-xl font-medium">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-secondary hover:bg-secondary-light text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl shadow-md cursor-pointer transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Scheduling Request..." : "Submit Consultation Request"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
