import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import StatisticsSection from "@/components/StatisticsSection";
import ChallengeSection from "@/components/ChallengeSection";
import AISolutionSection from "@/components/AISolutionSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <TrustSection />
        <StatisticsSection />
        <ChallengeSection />
        <AISolutionSection />
        <ProcessTimeline />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
