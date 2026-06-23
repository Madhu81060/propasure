"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  KeySquare,
  Building2,
  UserCheck,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  Users,
  Award,
  Landmark,
  FileCheck2,
  Megaphone,
  Briefcase,
  TrendingUp,
  MapPin,
  FileText
} from "lucide-react";
import {
  BUYER_CHALLENGES,
  BUYER_SERVICES,
  OWNER_CHALLENGES,
  OWNER_SERVICES,
  TENANT_PROBLEMS,
  RENTAL_SOLUTIONS,
  LANDLORD_CHALLENGES,
  LANDLORD_SOLUTIONS,
  DEVELOPER_CHALLENGES,
  DEVELOPER_SOLUTIONS,
  AGENT_CHALLENGES,
  AGENT_PLATFORM
} from "@/constants";

// Tab definition type
interface SolutionTab {
  id: string;
  label: string;
  service: string;
  icon: any;
  tagline: string;
  description: string;
  accentTitle: string;
  challengesTitle: string;
  challenges: { title: string; desc: string }[];
  solutionsTitle: string;
  solutions: { title: string; desc: string }[];
  solutionHighlight: string;
}

const TABS: SolutionTab[] = [
  {
    id: "buy-property",
    label: "Buy Property",
    service: "Buy Property",
    icon: Sparkles,
    tagline: "FOR HOME BUYERS",
    description: "Buying property involves large financial commitments. We represent the buyer's interests—not the developer's or the broker's.",
    accentTitle: "Direct Verified Home Buying",
    challengesTitle: "Buyer Challenges",
    challenges: BUYER_CHALLENGES,
    solutionsTitle: "Propasure Verification & Support",
    solutions: BUYER_SERVICES,
    solutionHighlight: "Our field teams inspect listings, audit legal title records, and benchmark real-time registry transactions to ensure you never overpay."
  },
  {
    id: "sell-property",
    label: "Sell Property",
    service: "Sell Property",
    icon: KeySquare,
    tagline: "FOR PROPERTY OWNERS",
    description: "Cut out redundant intermediary layers, save on brokerage, and connect directly with qualified target buyers.",
    accentTitle: "Sell Faster. Sell Smarter.",
    challengesTitle: "Challenges Owners Face",
    challenges: OWNER_CHALLENGES,
    solutionsTitle: "Direct-to-Buyer Selling Services",
    solutions: OWNER_SERVICES,
    solutionHighlight: "We benchmark fair listing prices using actual historical transaction registries and market properties directly to pre-approved buyers."
  },
  {
    id: "rent-property",
    label: "Rent & Lease",
    service: "Rent Property",
    icon: Building2,
    tagline: "FOR TENANTS",
    description: "Browse 100% physically-audited rental listings with zero duplicate ads, fake descriptions, or hidden brokerage costs.",
    accentTitle: "Hassle-Free Tenant Match",
    challengesTitle: "Rental Problems",
    challenges: TENANT_PROBLEMS,
    solutionsTitle: "Rental Solutions",
    solutions: RENTAL_SOLUTIONS.slice(0, 3), // First 3 are tenant focused
    solutionHighlight: "Access standard e-signed rental agreements, transparent security deposit policies, and direct communication logs with verified landlords."
  },
  {
    id: "landlords",
    label: "Landlords",
    service: "Landlord Enquiry",
    icon: Building2,
    tagline: "FOR LANDLORDS",
    description: "Automate rent collection, screen incoming tenants digitally, and resolve maintenance issues through certified networks.",
    accentTitle: "Maximize Yield, Minimize Effort",
    challengesTitle: "Landlord Challenges",
    challenges: LANDLORD_CHALLENGES,
    solutionsTitle: "Landlord Solutions",
    solutions: LANDLORD_SOLUTIONS,
    solutionHighlight: "We assign a dedicated local property manager to coordinate tenant check-ins, routine inspections, rent settlements, and upkeep audits."
  },
  {
    id: "builders",
    label: "Builders",
    service: "Builder Partnership",
    icon: Building2,
    tagline: "FOR DEVELOPERS",
    description: "Reduce customer acquisition costs and boost sales conversions by targeting high-intent pre-qualified buyers.",
    accentTitle: "Accelerate Sales Velocity",
    challengesTitle: "Developer Challenges",
    challenges: DEVELOPER_CHALLENGES,
    solutionsTitle: "Developer Solutions & Analytics",
    solutions: DEVELOPER_SOLUTIONS.slice(0, 6), // Top 6 solutions
    solutionHighlight: "We integrate developer inventory directly with our advisor engine, pre-qualifying buyer intent and financing capacity prior to site visits."
  },
  {
    id: "agents",
    label: "Agents Platform",
    service: "Agent Registration",
    icon: UserCheck,
    tagline: "FOR AGENTS",
    description: "Empower your local real-estate practice with pre-screened Organizers, professional CRM tools, and AI matching assets.",
    accentTitle: "Supercharge Your Advisory",
    challengesTitle: "Agent Challenges",
    challenges: AGENT_CHALLENGES,
    solutionsTitle: "Agent Platform & Tools",
    solutions: AGENT_PLATFORM.slice(0, 6), // Top 6 tools
    solutionHighlight: "Get verified badges to build customer trust, generate high-quality PDF brochures, and automate client follow-ups via WhatsApp."
  }
];

function SolutionsContent() {
  const searchParams = useSearchParams();
  const [activeTabId, setActiveTabId] = useState("buy-property");

  // Sync tab selection from query params on load
  useEffect(() => {
    const tabParam = searchParams.get("tab") || searchParams.get("service");
    if (tabParam) {
      const matchedTab = TABS.find(
        (t) =>
          t.id === tabParam.toLowerCase() ||
          t.service.toLowerCase() === tabParam.toLowerCase() ||
          t.label.toLowerCase() === tabParam.toLowerCase()
      );
      if (matchedTab) {
        setActiveTabId(matchedTab.id);
      }
    }
  }, [searchParams]);

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];
  const ActiveIcon = activeTab.icon;

  return (
    <main className="flex flex-col min-h-screen pt-24 bg-white">
      {/* Top Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
            OUR SOLUTIONS
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-secondary mt-6 tracking-tight">
            Tailored Real Estate Services
          </h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto mt-3">
            Explore dedicated verification, advisory, and execution layers custom-built for every stakeholder in the property ecosystem.
          </p>
        </div>
      </section>

      {/* Tab Switcher Grid */}
      <section className="py-8 bg-white sticky top-[68px] z-40 border-b border-slate-100 shadow-sm backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-nowrap md:grid md:grid-cols-6 gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {TABS.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex-shrink-0 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                    isSelected
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                      : "bg-slate-50 text-slate-655 hover:bg-slate-105 border border-slate-200/50"
                  }`}
                >
                  <TabIcon className="w-4 h-4 flex-shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Content Panel */}
      <section className="py-16 bg-white min-h-[500px]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Left Column: Summary & Challenges */}
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <div>
                  <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
                    {activeTab.tagline}
                  </span>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-secondary mt-4">
                    {activeTab.accentTitle}
                  </h2>
                  <p className="text-slate-655 text-sm mt-3 leading-relaxed">
                    {activeTab.description}
                  </p>
                </div>

                {/* Highlight banner */}
                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 text-slate-700 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{activeTab.solutionHighlight}</span>
                </div>

                {/* Challenges Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-[20px] p-6 sm:p-8">
                  <h3 className="font-heading font-bold text-base text-secondary border-b border-slate-200/60 pb-3 mb-5 flex items-center gap-2">
                    <AlertCircle className="w-4.5 h-4.5 text-red-500 flex-shrink-0" />
                    <span>{activeTab.challengesTitle}</span>
                  </h3>
                  <div className="flex flex-col gap-5">
                    {activeTab.challenges.map((ch, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <span className="text-red-500 text-xs flex-shrink-0 mt-0.5">❌</span>
                        <div>
                          <h4 className="text-xs font-bold text-secondary mb-0.5">{ch.title}</h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed">{ch.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Platform Services & Action CTA */}
              <div className="lg:col-span-7 flex flex-col gap-8 text-left">
                <div>
                  <h3 className="font-heading font-bold text-lg text-secondary mb-6 flex items-center gap-2">
                    <ActiveIcon className="w-5 h-5 text-primary" />
                    <span>{activeTab.solutionsTitle}</span>
                  </h3>

                  {/* Bento Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeTab.solutions.map((srv, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-primary/20 transition-all duration-200"
                      >
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-primary mb-1.5">
                          {srv.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          {srv.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subpage CTA Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-[20px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-4">
                  <div className="flex flex-col gap-1 text-center sm:text-left">
                    <h4 className="font-heading font-bold text-sm text-secondary">
                      Ready to Proceed with {activeTab.label}?
                    </h4>
                    <p className="text-[11px] text-slate-550 max-w-sm">
                      Submit details directly. Our verified property and legal advisors will contact you shortly.
                    </p>
                  </div>
                  <Link
                    href={`/contact?service=${encodeURIComponent(activeTab.service)}#contact-form`}
                    className="bg-primary hover:bg-primary-dark text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 whitespace-nowrap"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div>
        </div>
      }>
        <SolutionsContent />
      </Suspense>
      <Footer />
    </>
  );
}
