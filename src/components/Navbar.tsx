"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Bot, Cpu, ShieldAlert, Sparkles, KeySquare, Building2, UserCheck, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const scrolled = useScroll(10);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"ai" | "solutions" | null>(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/ai-services", label: "AI Services" },
    { href: "/solutions", label: "Solutions" },
    { href: "/property-services", label: "Property Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const solutionsLinks = [
    { label: "Buy Property", href: "/solutions?tab=buy-property", icon: Sparkles },
    { label: "Sell Property", href: "/solutions?tab=sell-property", icon: KeySquare },
    { label: "Rent & Lease", href: "/solutions?tab=rent-property", icon: Building2 },
    { label: "Landlords", href: "/solutions?tab=landlords", icon: Building2 },
    { label: "Builders", href: "/solutions?tab=builders", icon: Building2 },
    { label: "Agents Platform", href: "/solutions?tab=agents", icon: UserCheck },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b",
          scrolled || mobileOpen
            ? "bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-md"
            : "bg-white/80 backdrop-blur-md border-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo on Left */}
          <Link href="/home" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-white text-xl border-b-2 border-slate-200 transition-transform group-hover:scale-105 shadow-sm">
              P
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-secondary">
              PROPA<span className="text-primary font-bold">SURE</span>
            </span>
          </Link>

          {/* Centered Navigation Links on Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/home"
              className={cn(
                "text-sm font-semibold transition-colors py-2",
                isActive("/home") ? "text-primary border-b-2 border-primary" : "text-slate-655 hover:text-primary"
              )}
            >
              Home
            </Link>

            {/* AI Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown("ai")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/ai-services"
                className={cn(
                  "flex items-center gap-1 text-sm font-semibold transition-colors focus:outline-none cursor-pointer",
                  isActive("/ai-services") ? "text-primary" : "text-slate-655 hover:text-primary"
                )}
              >
                AI Services
                <ChevronDown className="w-4 h-4" />
              </Link>
              
              <AnimatePresence>
                {activeDropdown === "ai" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[400px]"
                  >
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 grid grid-cols-1 gap-2 text-left">
                      <Link
                        href="/ai-services"
                        className="flex items-start gap-3 p-2.5 hover:bg-slate-50 rounded-lg transition-colors group cursor-pointer text-left w-full"
                      >
                        <Bot className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-secondary group-hover:text-primary">AI Advisor</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">Real-time real estate chatbot assistant.</p>
                        </div>
                      </Link>
                      <Link
                        href="/ai-services"
                        className="flex items-start gap-3 p-2.5 hover:bg-slate-50 rounded-lg transition-colors group cursor-pointer text-left w-full"
                      >
                        <Cpu className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-secondary group-hover:text-primary">AI Property Score</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">Automated 100-point project health reviews.</p>
                        </div>
                      </Link>
                      <Link
                        href="/ai-services"
                        className="flex items-start gap-3 p-2.5 hover:bg-slate-50 rounded-lg transition-colors group cursor-pointer text-left w-full"
                      >
                        <ShieldAlert className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-secondary group-hover:text-primary">AI Legal Risk OCR</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">Audit mother deeds & encumbrance records.</p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/solutions"
                className={cn(
                  "flex items-center gap-1 text-sm font-semibold transition-colors focus:outline-none cursor-pointer",
                  isActive("/solutions") ? "text-primary" : "text-slate-655 hover:text-primary"
                )}
              >
                Solutions
                <ChevronDown className="w-4 h-4" />
              </Link>
              
              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px]"
                  >
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 grid grid-cols-2 gap-2 text-left">
                      {solutionsLinks.map((sol) => {
                        const Icon = sol.icon;
                        return (
                          <Link
                            key={sol.label}
                            href={sol.href}
                            className="flex items-center gap-3 p-2.5 rounded-lg transition-colors group hover:bg-slate-50 cursor-pointer text-left w-full"
                          >
                            <Icon className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                            <span className="text-xs font-bold text-secondary group-hover:text-primary">
                              {sol.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors py-2",
                  isActive(link.href) ? "text-primary border-b-2 border-primary" : "text-slate-655 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button on Right (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact?service=General+Consultation#contact-form"
              className="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Hamburger Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-secondary p-2 focus:outline-none cursor-pointer z-[120]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-secondary" /> : <Menu className="w-6 h-6 text-secondary" />}
          </button>
        </div>
      </header>

      {/* Backdrop for Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-[105] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer (Sliding from the RIGHT) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[290px] sm:w-[320px] bg-white shadow-2xl z-[110] lg:hidden overflow-y-auto flex flex-col justify-between pt-20"
          >
            <div className="p-6 flex flex-col gap-6 text-left">
              {/* Primary Links */}
              <div className="flex flex-col gap-4">
                <Link
                  href="/home"
                  className={cn(
                    "text-base font-bold pb-2 border-b border-slate-100 flex justify-between items-center",
                    isActive("/home") ? "text-primary" : "text-secondary"
                  )}
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
                <Link
                  href="/ai-services"
                  className={cn(
                    "text-base font-bold pb-2 border-b border-slate-100 flex justify-between items-center",
                    isActive("/ai-services") ? "text-primary" : "text-secondary"
                  )}
                >
                  <span>AI Services</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
                <Link
                  href="/solutions"
                  className={cn(
                    "text-base font-bold pb-2 border-b border-slate-100 flex justify-between items-center",
                    isActive("/solutions") ? "text-primary" : "text-secondary"
                  )}
                >
                  <span>Solutions</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
                <Link
                  href="/property-services"
                  className={cn(
                    "text-base font-bold pb-2 border-b border-slate-100 flex justify-between items-center",
                    isActive("/property-services") ? "text-primary" : "text-secondary"
                  )}
                >
                  <span>Property Services</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Solutions Quick Links */}
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 block mb-3">
                  Solutions By Role
                </span>
                <div className="flex flex-col gap-2.5">
                  {solutionsLinks.map((sol) => {
                    const Icon = sol.icon;
                    return (
                      <Link
                        key={sol.label}
                        href={sol.href}
                        className="flex items-center gap-3 text-xs font-bold text-secondary hover:text-primary transition-colors cursor-pointer text-left w-full py-1.5 border-b border-slate-50"
                      >
                        <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{sol.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Pricing, About, Contact Quick Links */}
              <div className="flex flex-col gap-4 pt-2 border-t border-slate-100">
                <div className="grid grid-cols-3 gap-2">
                  <Link
                    href="/pricing"
                    className={cn(
                      "text-center text-xs font-bold py-2 border border-slate-200 rounded-lg text-slate-655",
                      isActive("/pricing") && "bg-slate-50 border-primary text-primary"
                    )}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about"
                    className={cn(
                      "text-center text-xs font-bold py-2 border border-slate-200 rounded-lg text-slate-655",
                      isActive("/about") && "bg-slate-50 border-primary text-primary"
                    )}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className={cn(
                      "text-center text-xs font-bold py-2 border border-slate-200 rounded-lg text-slate-655",
                      isActive("/contact") && "bg-slate-50 border-primary text-primary"
                    )}
                  >
                    Contact
                  </Link>
                </div>

                <Link
                  href="/contact?service=General+Consultation#contact-form"
                  className="w-full bg-primary hover:bg-primary-dark text-white text-sm font-bold py-3.5 rounded-xl shadow-md text-center flex items-center justify-center cursor-pointer"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
