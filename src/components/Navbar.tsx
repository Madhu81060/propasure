"use client";

import { useState } from "react";
import Link from "next/link";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, Bot, Cpu, ShieldAlert, BadgeHelp, Calculator, Sparkles, Building2, UserCheck, KeySquare, HelpCircle, PhoneCall } from "lucide-react";

export default function Navbar() {
  const scrolled = useScroll(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-primary/5 py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-white text-lg border-b-2 border-accent transition-transform group-hover:scale-105">
            P
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-primary">
            PROPA<span className="text-secondary font-bold">SURE</span>
          </span>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors">
            Home
          </Link>

          {/* AI Services Mega Menu */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-text-secondary hover:text-primary transition-colors py-2 focus:outline-none">
              AI Services
              <svg className="w-4 h-4 transition-transform group-hover:rotate-185" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[450px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-2xl shadow-xl border border-primary/5 p-6 grid grid-cols-1 gap-4">
                <Link href="/ai-services" className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <Bot className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">AI Property Advisor</h4>
                    <p className="text-xs text-text-muted mt-0.5">Your personal real estate advisor available 24/7.</p>
                  </div>
                </Link>
                <Link href="/ai-services" className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <PhoneCall className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">AI Voice Agent</h4>
                    <p className="text-xs text-text-muted mt-0.5">Speak naturally in regional languages for property queries.</p>
                  </div>
                </Link>
                <Link href="/ai-services" className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <Cpu className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">AI Property Score</h4>
                    <p className="text-xs text-text-muted mt-0.5">100-point project matrix checks.</p>
                  </div>
                </Link>
                <Link href="/ai-services" className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <ShieldAlert className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">AI Legal Risk Engine</h4>
                    <p className="text-xs text-text-muted mt-0.5">Scan agreements checking encumbrances and title disputes.</p>
                  </div>
                </Link>
                <Link href="/ai-services" className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <Calculator className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">AI Investment Advisor</h4>
                    <p className="text-xs text-text-muted mt-0.5">Calculate real cash flow, appreciation, and exit parameters.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Solutions Mega Menu */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-text-secondary hover:text-primary transition-colors py-2 focus:outline-none">
              Solutions
              <svg className="w-4 h-4 transition-transform group-hover:rotate-185" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-2xl shadow-xl border border-primary/5 p-6 grid grid-cols-2 gap-x-6 gap-y-4">
                <Link href="/buy-property" className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">Buy Property</h4>
                    <p className="text-xs text-text-muted">Direct checked properties.</p>
                  </div>
                </Link>
                <Link href="/sell-property" className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <KeySquare className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">Sell Property</h4>
                    <p className="text-xs text-text-muted">Marketing with zero middlemen.</p>
                  </div>
                </Link>
                <Link href="/rent-property" className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <Building2 className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">Rent & Lease</h4>
                    <p className="text-xs text-text-muted">Frictionless leases & checkups.</p>
                  </div>
                </Link>
                <Link href="/builders" className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <Building2 className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">Builders</h4>
                    <p className="text-xs text-text-muted">Acquisition & CRM utilities.</p>
                  </div>
                </Link>
                <Link href="/agents" className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <UserCheck className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">Agents Platform</h4>
                    <p className="text-xs text-text-muted">Leads & automation modules.</p>
                  </div>
                </Link>
                <Link href="/landlords" className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <Building2 className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">Landlords</h4>
                    <p className="text-xs text-text-muted">Tenant checks & rent collection.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/property-services" className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors">
            Property Services
          </Link>
          <Link href="/pricing" className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/ai-services"
            className="flex items-center gap-2 text-sm font-bold bg-secondary hover:bg-secondary-light text-white px-5 py-2.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5"
          >
            <Bot className="w-4 h-4" />
            Talk to AI Advisor
          </Link>
          <Link
            href="/property-services"
            className="text-sm font-bold bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary p-2 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-primary/5 shadow-lg p-6 max-h-[85vh] overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-bold text-primary hover:text-secondary pb-2 border-b border-slate-100"
            >
              Home
            </Link>

            {/* AI Services Mobile Links */}
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-text-muted">AI Services</span>
              <div className="grid grid-cols-1 gap-2 mt-2 pl-3">
                <Link href="/ai-services" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-text-secondary">
                  AI Advisor
                </Link>
                <Link href="/ai-services" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-text-secondary">
                  AI Voice Agent
                </Link>
                <Link href="/ai-services" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-text-secondary">
                  AI Property Score
                </Link>
                <Link href="/ai-services" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-text-secondary">
                  AI Legal Risk Engine
                </Link>
                <Link href="/ai-services" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-text-secondary">
                  AI Investment Planner
                </Link>
              </div>
            </div>

            {/* Solutions Mobile Links */}
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-text-muted">Solutions</span>
              <div className="grid grid-cols-1 gap-2 mt-2 pl-3">
                <Link href="/buy-property" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-text-secondary">
                  Buy Property
                </Link>
                <Link href="/sell-property" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-text-secondary">
                  Sell Property
                </Link>
                <Link href="/rent-property" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-text-secondary">
                  Rent & Lease
                </Link>
                <Link href="/builders" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-text-secondary">
                  Builders
                </Link>
                <Link href="/agents" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-text-secondary">
                  Agents Platform
                </Link>
                <Link href="/landlords" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-text-secondary">
                  Landlords
                </Link>
              </div>
            </div>

            <Link
              href="/property-services"
              onClick={() => setMobileOpen(false)}
              className="font-bold text-primary hover:text-secondary pb-2 border-b border-slate-100"
            >
              Property Services
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="font-bold text-primary hover:text-secondary pb-2 border-b border-slate-100"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="font-bold text-primary hover:text-secondary pb-2 border-b border-slate-100"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="font-bold text-primary hover:text-secondary pb-2 border-b border-slate-100"
            >
              Contact
            </Link>

            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="/ai-services"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-secondary text-white py-3 rounded-xl font-bold shadow-md"
              >
                <Bot className="w-4 h-4" />
                Talk to AI Advisor
              </Link>
              <Link
                href="/property-services"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center bg-primary text-white py-3 rounded-xl font-bold shadow-md"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
