"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldAlert, FileText, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basic Plan",
    target: "Ideal for initial research & discovery",
    features: [
      "Property Search matching briefs",
      "AI Advisor Chatbot access",
      "Basic comparison scorecards",
      "Local market rate guides",
      "RERA project registration verify"
    ],
    ctaText: "Get Basic Consultation",
    serviceParam: "Buy Property"
  },
  {
    name: "Premium Plan",
    target: "Perfect for active buyers visiting sites",
    features: [
      "Everything in Basic Plan",
      "100-point project health scorecards",
      "Builder solvencies & delay checks",
      "Guided site visit audits",
      "Physical structural checks",
      "Due Diligence checklist reports"
    ],
    isFeatured: true,
    ctaText: "Select Premium Plan",
    serviceParam: "Property Audit"
  },
  {
    name: "Enterprise Plan",
    target: "Complete transaction protection shield",
    features: [
      "Everything in Premium Plan",
      "30-year historical title deed sweeps",
      "Custom sale agreement drafting",
      "Direct developer price negotiations",
      "Sub-registrar biometrics audit support",
      "Dedicated senior lawyer advisory"
    ],
    ctaText: "Choose Enterprise Plan",
    serviceParam: "General Consultation"
  }
];

const comparisonFeatures = [
  { category: "AI & Discovery", name: "Property Search Matching", basic: true, premium: true, enterprise: true },
  { category: "AI & Discovery", name: "AI Chatbot Advisor Access", basic: true, premium: true, enterprise: true },
  { category: "AI & Discovery", name: "Appraisal Rate Metrics", basic: true, premium: true, enterprise: true },
  { category: "Diagnostics", name: "100-Point Scorecards", basic: false, premium: true, enterprise: true },
  { category: "Diagnostics", name: "Builder Solvency Audits", basic: false, premium: true, enterprise: true },
  { category: "Diagnostics", name: "Guided Site Visits & Inspection", basic: false, premium: true, enterprise: true },
  { category: "Legal & Close", name: "Title Deed Sweeps (30-year EC)", basic: false, basicNote: "Add-on", premium: false, premiumNote: "Add-on", enterprise: true },
  { category: "Legal & Close", name: "Custom Sale Agreement Drafts", basic: false, premium: false, enterprise: true },
  { category: "Legal & Close", name: "Sub-registrar Biometrics Support", basic: false, premium: false, enterprise: true },
  { category: "Support", name: "Dedicated Relationship Manager", basic: false, premium: false, enterprise: true }
];

const consultationServices = [
  {
    name: "Legal Deed Review",
    desc: "A senior property lawyer reviews title chains, EC records, and municipal approvals.",
    icon: ShieldAlert,
    tag: "Individual Consultation"
  },
  {
    name: "Inspection Audit",
    desc: "A field inspector runs structural checks and checklist audits prior to signing handover drafts.",
    icon: Calendar,
    tag: "Individual Consultation"
  },
  {
    name: "Custom Agreement Draft",
    desc: "Drafting or audit check of custom agreements to eliminate buyer-liability loopholes.",
    icon: FileText,
    tag: "Individual Consultation"
  }
];
export default function PricingSection() {
  const pricingParticles = [
    { x: "12%", y: "15%", size: 4, delay: 0 },
    { x: "85%", y: "25%", size: 3, delay: 1.5 },
    { x: "15%", y: "75%", size: 5, delay: 2.2 },
    { x: "80%", y: "85%", size: 4, delay: 0.8 }
  ];

  return (
    <section id="pricing-plans" className="relative bg-gradient-to-tr from-slate-50/90 via-blue-50/40 to-indigo-100/30 py-10 lg:py-14 text-left overflow-hidden">
      {/* Scrolling blueprint grid overlay */}
      <div className="absolute inset-0 grid-pattern-animate pointer-events-none opacity-[0.8] z-0" />
      
      {/* Premium Floating Tech Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] -left-32 w-[450px] h-[450px] rounded-full bg-blue-400/[0.14] filter blur-[110px] animate-glow-1" />
        <div className="absolute bottom-[10%] -right-20 w-[450px] h-[450px] rounded-full bg-indigo-400/[0.12] filter blur-[115px] animate-glow-2" />
      </div>

      {/* Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {pricingParticles.map((p, i) => (
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
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`bg-white border rounded-[24px] p-8 flex flex-col justify-between transition-all relative ${
                plan.isFeatured
                  ? "border-primary shadow-xl shadow-primary/5 ring-1 ring-primary/20"
                  : "border-slate-200 shadow-md shadow-slate-100"
              }`}
            >
              {plan.isFeatured && (
                <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                  Most Popular
                </span>
              )}

              <div>
                <div className="border-b border-slate-100 pb-5 mb-6">
                  <h3 className="font-heading font-black text-xl text-secondary leading-tight">
                    {plan.name}
                  </h3>
                  <span className="text-[11px] text-slate-500 block mt-2">
                    {plan.target}
                  </span>
                </div>

                {/* Checklist */}
                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-tight">
                      <Check className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link
                  href={`/contact?service=${encodeURIComponent(plan.serviceParam)}#contact-form`}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                    plan.isFeatured
                      ? "bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/15"
                      : "bg-white border-2 border-primary text-primary hover:bg-slate-50"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-10 lg:mt-14">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
              PLAN MATRIX
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-secondary mt-6">
              Compare Features side-by-side
            </h3>
          </div>

          <div className="border border-slate-200 rounded-[20px] overflow-hidden shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs sm:text-sm font-bold text-secondary">
                    <th className="p-4 sm:p-5">Feature</th>
                    <th className="p-4 sm:p-5 text-center">Basic</th>
                    <th className="p-4 sm:p-5 text-center">Premium</th>
                    <th className="p-4 sm:p-5 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                  {comparisonFeatures.map((feat, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="p-4 sm:p-5 font-semibold text-secondary">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">
                          {feat.category}
                        </span>
                        {feat.name}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {feat.basic ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : feat.basicNote ? (
                          <span className="text-[10px] font-bold text-primary bg-blue-50 px-2 py-0.5 rounded-md">{feat.basicNote}</span>
                        ) : (
                          <X className="w-5 h-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {feat.premium ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : feat.premiumNote ? (
                          <span className="text-[10px] font-bold text-primary bg-blue-50 px-2 py-0.5 rounded-md">{feat.premiumNote}</span>
                        ) : (
                          <X className="w-5 h-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {feat.enterprise ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Consultation Pricing / Services */}
        <div className="mt-10 lg:mt-14 border-t border-slate-200 pt-8 lg:pt-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
              STANDALONE SUPPORT
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-secondary mt-6">
              Individual Consultation Services
            </h3>
            <p className="text-slate-550 text-xs sm:text-sm mt-3 leading-relaxed">
              Prefer standalone legal, validation, or documentation sweeps? Access our dedicated support units individually.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {consultationServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-[20px] p-6 hover:shadow-md hover:bg-white hover:border-primary/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[9px] font-extrabold text-primary bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider block w-max mb-4">
                      {service.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-secondary mb-2">
                      {service.name}
                    </h4>
                    <p className="text-xs text-slate-550 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.name)}#contact-form`}
                      className="text-xs font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1 group"
                    >
                      <span>Request Service</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 lg:mt-16 bg-slate-900 rounded-[24px] p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] rounded-full bg-blue-500/10 filter blur-[70px] pointer-events-none -z-10" />
          <h4 className="font-heading font-black text-2xl sm:text-3xl mb-4">
            Unsure Which Plan Fits Your Property Phase?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-6">
            Get in touch with our team of advisors. We will review your property documentation phase and suggest the exact legal verification sweeps you need.
          </p>
          <Link
            href="/contact?service=General+Consultation#contact-form"
            className="inline-flex items-center justify-center bg-white text-secondary font-bold text-xs px-8 py-3.5 rounded-xl hover:bg-slate-50 transition-all hover:scale-[1.01]"
          >
            Request Free Advisory Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
