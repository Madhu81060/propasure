import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Plans & Pricing | Propasure",
  description: "Explore our plans - Explore (Free), Verify, Secure, and Complete. Transparent property advisory pricing with zero hidden commissions.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        <div className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
              TRANSPARENT PRICING
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary mt-6 tracking-tight">
              Simple, Direct Plans
            </h1>
            <p className="text-text-secondary text-base max-w-xl mx-auto mt-3">
              We charge flat fee packages. No commission percentages, no broker kickbacks. Pay only for the security and support you need.
            </p>
          </div>
        </div>
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
