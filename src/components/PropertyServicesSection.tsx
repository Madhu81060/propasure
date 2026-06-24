"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scale, Landmark, HardHat } from "lucide-react";

export default function PropertyServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="services" className="bg-transparent py-10 lg:py-14 border-b border-slate-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
            VALUE ADDITIONS
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mt-2">
            End-To-End Property Services
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3">
            We handle transaction, legal audits, home finance, and construction design layers under one roof.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card 1: Legal */}
          <motion.div variants={cardVariants} className="bg-white rounded-3xl overflow-hidden shadow-md border border-primary/5 hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                alt="Lawyers verifying real estate documents"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-[-18px] right-6 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-md z-10 border border-slate-100">
                <Scale className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="p-6 pt-8">
              <h3 className="font-heading font-bold text-lg text-primary mb-4">Legal Services</h3>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                <li>Title Verification</li>
                <li>EC Verification</li>
                <li>Ownership Verification</li>
                <li>Document Review</li>
                <li>Sale Agreement Drafting</li>
                <li>Registration Assistance</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Financial */}
          <motion.div variants={cardVariants} className="bg-white rounded-3xl overflow-hidden shadow-md border border-primary/5 hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Home loan and financial consulting"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-[-18px] right-6 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-md z-10 border border-slate-100">
                <Landmark className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="p-6 pt-8">
              <h3 className="font-heading font-bold text-lg text-primary mb-4">Financial Services</h3>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                <li>Home Loans</li>
                <li>Balance Transfer</li>
                <li>Loan Comparison</li>
                <li>Property Insurance</li>
                <li>Tax Advisory</li>
                <li>NRI Services</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Construction & Interior */}
          <motion.div variants={cardVariants} className="bg-white rounded-3xl overflow-hidden shadow-md border border-primary/5 hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Interior design and home architecture"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-[-18px] right-6 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-md z-10 border border-slate-100">
                <HardHat className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="p-6 pt-8">
              <h3 className="font-heading font-bold text-lg text-primary mb-4">Construction & Interior Services</h3>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                <li>Construction</li>
                <li>Architecture</li>
                <li>Interior Design</li>
                <li>Renovation</li>
                <li>Building Materials</li>
                <li>Project Management</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
