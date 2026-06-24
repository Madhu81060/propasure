import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedPageBg from "@/components/AnimatedPageBg";
import { BookOpen, FileCheck, AlertTriangle, ShieldCheck, Scale, Award } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Propasure",
  description: "Read the website usage terms, client responsibilities, disclaimers, and governing laws for the Propasure platform.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden text-left">
        <AnimatedPageBg />
        <section className="bg-transparent py-8 md:py-10 border-b border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
              TERMS OF SERVICE
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-secondary mt-6 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-3">
              Last Updated: June 23, 2026. Please read these terms carefully before utilizing our real-estate platform.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-transparent relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-slate-700 leading-relaxed text-sm sm:text-base flex flex-col gap-10">
            {/* 1. Website Usage Terms */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  1. Website Usage Terms
                </h2>
                <p className="text-slate-650 text-xs sm:text-sm">
                  By accessing and utilizing the Propasure website, solutions center, or AI services, you confirm your agreement to abide by these Terms and Conditions. The website is provided to help users research, benchmark, verify, and coordinate property transactions. Unauthorized scraping, automated database extraction, or copying of property verification data is strictly prohibited.
                </p>
              </div>
            </div>

            {/* 2. User Responsibilities */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  2. User Responsibilities
                </h2>
                <p className="text-slate-650 text-xs sm:text-sm">
                  When submitting contact forms, requesting property audits, or asking questions via the AI Advisor, you agree to:
                </p>
                <ul className="list-disc pl-5 text-xs text-slate-650 flex flex-col gap-2 mt-2">
                  <li>Provide accurate, current, and complete identification info (Name, Mobile, and Email).</li>
                  <li>Refrain from uploading corrupt title files, litigation documents containing malicious code, or fake listings.</li>
                  <li>Use matching benchmarks and advisory opinions exclusively for your personal property transactions.</li>
                </ul>
              </div>
            </div>

            {/* 3. Disclaimer */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  3. Disclaimer
                </h2>
                <p className="text-slate-650 text-xs sm:text-sm">
                  Propasure combines algorithmic data parsing, land registry records, and independent legal advice. However, our reports, scoring indices, and chatbot transcripts constitute advisory parameters. They do not constitute official government clearances or guarantees of property appreciation. Users are advised to inspect projects physically and cross-verify registries before executing final sale deeds.
                </p>
              </div>
            </div>

            {/* 4. Limitation of Liability */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  4. Limitation of Liability
                </h2>
                <p className="text-slate-650 text-xs sm:text-sm">
                  Under no circumstances shall Propasure Technologies Private Limited, its directors, or partners be liable for direct, indirect, incidental, or consequential damages resulting from property transaction decisions, builder delays, structural failures, or title disputes arising after purchase.
                </p>
              </div>
            </div>

            {/* 5. Intellectual Property Rights */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  5. Intellectual Property Rights
                </h2>
                <p className="text-slate-650 text-xs sm:text-sm">
                  The software, text assets, visual bento cards, proprietary AI scoring formulas, brand graphics, and database indexing techniques displayed on this platform are owned by Propasure. You may not reproduce, copy, or distribute any site graphics, design themes, or content without our explicit written permission.
                </p>
              </div>
            </div>

            {/* 6. Governing Law */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  6. Governing Law
                </h2>
                <p className="text-slate-650 text-xs sm:text-sm">
                  These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any litigation, dispute, or claim arising from the utilization of Propasure services shall be subject to the exclusive jurisdiction of the competent courts located in Bangalore, Karnataka, India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
