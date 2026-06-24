"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AnimatedPageBg from "@/components/AnimatedPageBg";
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <AnimatedPageBg />
        {/* Header Hero */}
        <section className="bg-transparent py-8 md:py-10 border-b border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
              CONTACT US
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-secondary mt-6 tracking-tight">
              Let’s Discuss Your Property Goals
            </h1>
            <p className="text-slate-600 text-base max-w-xl mx-auto mt-3">
              Whether you’re buying, selling, investing, renting, managing, or developing property, our advisors are ready to help.
            </p>
          </div>
        </section>

        {/* Info & Form Body */}
        <section className="relative py-10 lg:py-14 bg-transparent z-10">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
              
              {/* Left Side: Contact Information */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <h2 className="font-heading font-bold text-2xl text-secondary">
                  Propasure Support
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  Reach out directly via phone, email, or chat, or visit one of our local experience centers. We represent your interest directly with 100% buyer protection.
                </p>

                <div className="flex flex-col gap-6">


                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-100">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-secondary mb-0.5">Email Support</h4>
                      <a href="mailto:support@propasure.com" className="text-sm font-bold text-primary hover:underline transition-colors">
                        support@propasure.com
                      </a>
                      <p className="text-[10px] text-slate-500 mt-0.5">Response turnaround under 4 hours</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-100">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-secondary mb-0.5">WhatsApp Support</h4>
                      <a
                        href="https://wa.me/919876543210?text=Hello%20Propasure%20Advisor!%20I%20would%20like%20to%20know%20more%20about%20your%20property%20advisory%20services."
                        target="_blank"
                        className="text-sm font-bold text-emerald-600 hover:underline transition-colors"
                      >
                        Chat with Property Advisor
                      </a>
                      <p className="text-[10px] text-slate-500 mt-0.5">Instantly match with a live advisor</p>
                    </div>
                  </div>
                </div>

                {/* Experience Centers */}
                <div className="mt-8 border-t border-slate-200 pt-8">
                  <h3 className="font-heading font-bold text-sm text-secondary mb-4">Regional Experience Centers:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                    <div className="flex items-start gap-2 bg-slate-50 p-3.5 border border-slate-200 rounded-xl">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-secondary text-xs">Bangalore (HQ)</h5>
                        <p className="text-[10px] text-slate-500 mt-0.5">Outer Ring Rd, Marathahalli</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-slate-50 p-3.5 border border-slate-200 rounded-xl">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-secondary text-xs">Mumbai</h5>
                        <p className="text-[10px] text-slate-500 mt-0.5">Bandra Kurla Complex (BKC)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-slate-50 p-3.5 border border-slate-200 rounded-xl">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-secondary text-xs">Hyderabad</h5>
                        <p className="text-[10px] text-slate-500 mt-0.5">HITEC City, Madhapur</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-slate-50 p-3.5 border border-slate-200 rounded-xl">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-secondary text-xs">Delhi-NCR</h5>
                        <p className="text-[10px] text-slate-500 mt-0.5">Cyber City, Gurugram</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Centralized Contact Form */}
              <div className="lg:col-span-7 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <ContactForm showCardWrapper={true} title="Send Message" />
                </motion.div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
