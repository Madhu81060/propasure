import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

export const metadata = {
  title: "Plans & Pricing | Propasure",
  description: "Explore our transparent property advisory plans and features - Explore (Free), Verify, Secure, and Complete.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        <div className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
              TRANSPARENT PLANS
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary mt-6 tracking-tight">
              Simple, Direct Plans
            </h1>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto mt-3">
              We offer structured plans tailored to your specific buying phase. Pay only for the safety and verification you need.
            </p>
          </div>
        </div>
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
