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

  const timelineParticles = [
    { x: "12%", y: "15%", size: 4, delay: 0 },
    { x: "85%", y: "25%", size: 3, delay: 1.5 },
    { x: "15%", y: "75%", size: 5, delay: 2.2 },
    { x: "80%", y: "85%", size: 4, delay: 0.8 }
  ];

  return (
    <section id="process" className="relative bg-gradient-to-b from-slate-50 via-sky-50/50 to-blue-50/30 py-8 lg:py-10 border-b border-slate-100">
      {/* Scrolling blueprint grid overlay - fine grids */}
      <div className="absolute inset-0 grid-pattern-fine pointer-events-none opacity-[0.35] z-0" />
      
      {/* Abstract Blue Flowing Waves Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70">
        <svg className="absolute w-[200%] h-full top-0 left-[-50%] animate-wave opacity-35" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,320 C320,400 480,240 800,320 C1120,400 1280,240 1600,320 L1600,800 L0,800 Z" fill="url(#wave-grad-1)"></path>
          <defs>
            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#EFF6FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EEF2F6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Premium Floating Tech Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] -left-32 w-[450px] h-[450px] rounded-full bg-blue-400/[0.1] filter blur-[110px] animate-glow-1" />
        <div className="absolute bottom-[20%] -right-20 w-[450px] h-[450px] rounded-full bg-indigo-400/[0.08] filter blur-[115px] animate-glow-2" />
      </div>

      {/* Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {timelineParticles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              x: [0, 6, -6, 0],
              opacity: [0, 0.45, 0]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-blue-500/25 filter blur-[0.5px]"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            THE PLAYBOOK
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-secondary mt-4 tracking-tight">
            Tell Us What You Need
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto mt-3">
            From Search To Ownership. We Handle Everything.
          </p>
        </div>

        {/* 2-Column Layout Grid (items-start for sticky functionality) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Timeline Steps */}
          <div className="lg:col-span-7 relative pl-8 sm:pl-12 border-l-2 border-slate-100/80 flex flex-col gap-6 text-left">
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
                <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-primary text-primary font-heading font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10">
                  {step.step}
                </div>

                {/* Card content */}
                <div className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:border-primary/10 transition-all duration-300 shadow-sm">
                  <span className="text-[9px] uppercase font-black tracking-wider text-slate-400">
                    {step.label}
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-secondary group-hover:text-primary mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2: Sticky High-Quality SVG Process Flowchart Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full bg-gradient-to-br from-white/95 to-sky-50/90 border border-sky-100/80 rounded-[32px] p-6 sm:p-8 shadow-xl shadow-blue-900/[0.04] relative overflow-hidden"
            >
              {/* Technical background grids */}
              <div className="absolute inset-0 grid-pattern-fine opacity-20 pointer-events-none" />
              
              <h3 className="font-heading font-black text-[11px] text-secondary uppercase tracking-wider mb-6 text-center">
                Propasure Safe Advisory Journey
              </h3>

              {/* Flowchart Diagram SVG (Updated to show all 10 steps 1:1) */}
              <div className="relative w-full h-[550px] flex items-center justify-center z-10">
                <svg width="100%" height="100%" viewBox="0 0 320 540" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="flow-line-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <linearGradient id="node-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#eff6ff" />
                      <stop offset="100%" stopColor="#dbeafe" />
                    </linearGradient>
                    <linearGradient id="node-grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ecfeff" />
                      <stop offset="100%" stopColor="#cffafe" />
                    </linearGradient>
                    <linearGradient id="node-grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ecfdf5" />
                      <stop offset="100%" stopColor="#d1fae5" />
                    </linearGradient>
                    <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* 10-Step Flow curve line */}
                  <path
                    d="M 60,40 C 200,40 260,55 260,90 C 260,125 200,140 60,140 C -10,140 60,155 260,190 C 260,225 200,240 60,240 C -10,240 60,255 260,290 C 260,325 200,340 60,340 C -10,340 60,355 260,390 C 260,425 200,440 60,440 C -10,440 60,460 160,495"
                    stroke="url(#flow-line-grad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="6 6"
                    className="animate-dash"
                  />

                  {/* Step Nodes (1-10) */}
                  {/* Step 1: Submit Brief */}
                  <g className="group cursor-pointer">
                    <circle cx="60" cy="40" r="24" fill="url(#node-grad-blue)" stroke="#93c5fd" strokeWidth="1.5" />
                    <circle cx="60" cy="40" r="17" fill="white" />
                    <text x="60" y="44" className="fill-primary font-heading font-black text-[12px]" textAnchor="middle">1</text>
                    <rect x="94" y="25" width="90" height="30" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" className="shadow-2xs" />
                    <text x="139" y="43" className="fill-secondary font-heading font-black text-[9px]" textAnchor="middle">1. Discovery</text>
                  </g>

                  {/* Step 2: Match Listings */}
                  <g className="group cursor-pointer">
                    <circle cx="260" cy="90" r="24" fill="url(#node-grad-blue)" stroke="#93c5fd" strokeWidth="1.5" />
                    <circle cx="260" cy="90" r="17" fill="white" />
                    <text x="260" y="94" className="fill-primary font-heading font-black text-[12px]" textAnchor="middle">2</text>
                    <rect x="136" y="75" width="90" height="30" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" className="shadow-2xs" />
                    <text x="181" y="93" className="fill-secondary font-heading font-black text-[9px]" textAnchor="middle">2. AI Search</text>
                  </g>

                  {/* Step 3: Shortlisting & Comparison */}
                  <g className="group cursor-pointer">
                    <circle cx="60" cy="140" r="24" fill="url(#node-grad-blue)" stroke="#93c5fd" strokeWidth="1.5" />
                    <circle cx="60" cy="140" r="17" fill="white" />
                    <text x="60" y="144" className="fill-primary font-heading font-black text-[12px]" textAnchor="middle">3</text>
                    <rect x="94" y="125" width="90" height="30" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" className="shadow-2xs" />
                    <text x="139" y="143" className="fill-secondary font-heading font-black text-[9px]" textAnchor="middle">3. Compare</text>
                  </g>

                  {/* Step 4: Site Visit Coordination */}
                  <g className="group cursor-pointer">
                    <circle cx="260" cy="190" r="24" fill="url(#node-grad-blue)" stroke="#93c5fd" strokeWidth="1.5" />
                    <circle cx="260" cy="190" r="17" fill="white" />
                    <text x="260" y="194" className="fill-primary font-heading font-black text-[12px]" textAnchor="middle">4</text>
                    <rect x="136" y="175" width="90" height="30" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" className="shadow-2xs" />
                    <text x="181" y="193" className="fill-secondary font-heading font-black text-[9px]" textAnchor="middle">4. Site Visit</text>
                  </g>

                  {/* Step 5: Legal Verification */}
                  <g className="group cursor-pointer">
                    <circle cx="60" cy="240" r="24" fill="url(#node-grad-cyan)" stroke="#67e8f9" strokeWidth="1.5" />
                    <circle cx="60" cy="240" r="17" fill="white" />
                    <text x="60" y="244" className="fill-cyan-605 font-heading font-black text-[12px]" textAnchor="middle">5</text>
                    <rect x="94" y="225" width="90" height="30" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" className="shadow-2xs" />
                    <text x="139" y="243" className="fill-secondary font-heading font-black text-[9px]" textAnchor="middle">5. Legal Check</text>
                  </g>

                  {/* Step 6: Loan Assistance */}
                  <g className="group cursor-pointer">
                    <circle cx="260" cy="290" r="24" fill="url(#node-grad-cyan)" stroke="#67e8f9" strokeWidth="1.5" />
                    <circle cx="260" cy="290" r="17" fill="white" />
                    <text x="260" y="294" className="fill-cyan-605 font-heading font-black text-[12px]" textAnchor="middle">6</text>
                    <rect x="136" y="275" width="90" height="30" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" className="shadow-2xs" />
                    <text x="181" y="293" className="fill-secondary font-heading font-black text-[9px]" textAnchor="middle">6. Loan Assist</text>
                  </g>

                  {/* Step 7: Negotiation Support */}
                  <g className="group cursor-pointer">
                    <circle cx="60" cy="340" r="24" fill="url(#node-grad-cyan)" stroke="#67e8f9" strokeWidth="1.5" />
                    <circle cx="60" cy="340" r="17" fill="white" />
                    <text x="60" y="344" className="fill-cyan-605 font-heading font-black text-[12px]" textAnchor="middle">7</text>
                    <rect x="94" y="325" width="90" height="30" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" className="shadow-2xs" />
                    <text x="139" y="343" className="fill-secondary font-heading font-black text-[9px]" textAnchor="middle">7. Negotiation</text>
                  </g>

                  {/* Step 8: Registration Assistance */}
                  <g className="group cursor-pointer">
                    <circle cx="260" cy="390" r="24" fill="url(#node-grad-emerald)" stroke="#6ee7b7" strokeWidth="1.5" />
                    <circle cx="260" cy="390" r="17" fill="white" />
                    <text x="260" y="394" className="fill-emerald-600 font-heading font-black text-[12px]" textAnchor="middle">8</text>
                    <rect x="136" y="375" width="90" height="30" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" className="shadow-2xs" />
                    <text x="181" y="393" className="fill-secondary font-heading font-black text-[9px]" textAnchor="middle">8. Register</text>
                  </g>

                  {/* Step 9: Property Handover */}
                  <g className="group cursor-pointer">
                    <circle cx="60" cy="440" r="24" fill="url(#node-grad-emerald)" stroke="#6ee7b7" strokeWidth="1.5" />
                    <circle cx="60" cy="440" r="17" fill="white" />
                    <text x="60" y="444" className="fill-emerald-600 font-heading font-black text-[12px]" textAnchor="middle">9</text>
                    <rect x="94" y="425" width="90" height="30" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" className="shadow-2xs" />
                    <text x="139" y="443" className="fill-secondary font-heading font-black text-[9px]" textAnchor="middle">9. Handover</text>
                  </g>

                  {/* Step 10: Property Management */}
                  <g className="group cursor-pointer">
                    <circle cx="160" cy="495" r="26" fill="url(#node-grad-emerald)" stroke="#34d399" strokeWidth="2" filter="url(#glow-filter)" />
                    <circle cx="160" cy="495" r="18" fill="white" />
                    <text x="160" y="499" className="fill-emerald-600 font-heading font-black text-[14px]" textAnchor="middle">✓</text>
                    <rect x="200" y="480" width="95" height="30" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" className="shadow-2xs" />
                    <text x="247" y="498" className="fill-secondary font-heading font-black text-[9px]" textAnchor="middle">10. Management</text>
                  </g>
                </svg>
              </div>

              {/* Diagram Bottom Badge */}
              <div className="mt-4 bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-[10px] text-emerald-800 font-extrabold uppercase tracking-wide">
                  Direct representative: 100% loop-hole free
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
