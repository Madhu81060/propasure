import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ChallengeSection from "@/components/ChallengeSection";
import AISolutionSection from "@/components/AISolutionSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Propasure | India's First AI-Powered Property Advisory & Execution Platform",
  description: "Find, verify, negotiate, and own properties with complete confidence and zero developer commissions.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-[68px]">
        {/* 1. Hero Section */}
        <HeroSection />
        
        {/* 2. Trust Bar (Why Customers Choose Propasure) */}
        <TrustSection />
        
        {/* 3. Industry Challenge Section (Real Estate Is Still Broken) */}
        <ChallengeSection />
        
        {/* 4. Our Solution (AI + Human Intelligence) */}
        <AISolutionSection />
        
        {/* 5. Our Process (Tell Us What You Need) */}
        <ProcessTimeline />
        
        {/* 6. Call to Action Banner (Replaces bottom enquiry form on Homepage) */}
        <CallToAction />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
