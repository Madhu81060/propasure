import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedPageBg from "@/components/AnimatedPageBg";
import { Shield, Eye, Lock, RefreshCw, FileText, Users } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Propasure",
  description: "Learn how Propasure collects, uses, and secures client data across India's AI-Powered Property Advisory platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden text-left">
        <AnimatedPageBg />
        <section className="bg-transparent py-8 md:py-10 border-b border-slate-100 relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-primary text-xs uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
              LEGAL DOCUMENT
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-secondary mt-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-3">
              Last Updated: June 23, 2026. This policy outlines how Propasure Technologies Private Limited manages data.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-transparent relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-slate-700 leading-relaxed text-sm sm:text-base flex flex-col gap-10">
            {/* 1. Information Collection */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  1. Information Collection
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mb-3">
                  We collect personal details that you provide directly to us through consultation forms, support inquiries, and AI assistant chats:
                </p>
                <ul className="list-disc pl-5 text-xs text-slate-650 flex flex-col gap-2">
                  <li><strong>Personal Identifier Info:</strong> Full Name, Email Address, and Mobile Phone Number.</li>
                  <li><strong>Enquiry Details:</strong> City of search, target property purchase budgets, preferred service types, and descriptive message details.</li>
                  <li><strong>Usage Data:</strong> Device browser profiles, page visits, session logs, and chatbot transcript records.</li>
                </ul>
              </div>
            </div>

            {/* 2. Data Usage */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  2. Data Usage
                </h2>
                <p className="text-slate-650 text-xs sm:text-sm">
                  Propasure uses collected information exclusively to facilitate the requested real-estate advisory operations. This includes matching your enquiry with our certified legal attorneys, coordinating site visit schedules, processing partner home loan comparisons, responding to queries in the AI Advisor chat, and sending support alerts. We do not sell your personal identifiers or search logs to developers or third-party brokers.
                </p>
              </div>
            </div>

            {/* 3. Cookies Policy */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  3. Cookies Policy
                </h2>
                <p className="text-slate-650 text-xs sm:text-sm">
                  We use cookies, tokens, and storage identifiers to retain search preferences, analyze traffic flow patterns, and track chatbot engagement histories. You can manage or disable cookie tracking within your browser configurations, but some platform features (such as retaining chat histories or dynamic tab selections) may not function fully without cookies active.
                </p>
              </div>
            </div>

            {/* 4. Data Protection */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  4. Data Protection
                </h2>
                <p className="text-slate-655 text-xs sm:text-sm">
                  Your data security is our top priority. We store information on encrypted servers and protect data transfers using standard SSL/TLS algorithms. Access to personal contact data is restricted to authorized legal advisors and property consultants who require it to service your active property audits.
                </p>
              </div>
            </div>

            {/* 5. Third-party Services */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  5. Third-party Services
                </h2>
                <p className="text-slate-650 text-xs sm:text-sm">
                  We share transactional details with third-party service partners only when explicitly authorized by you (for example, sending document scans to qualified property lawyers for EC/Mother Deed checks, or transferring income briefs to partner banks for home loan benchmarking). All partners are legally bound to protect your data.
                </p>
              </div>
            </div>

            {/* 6. User Rights */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-secondary mb-3">
                  6. User Rights
                </h2>
                <p className="text-slate-650 text-xs sm:text-sm">
                  You possess complete rights over your personal database. You may request details of the information we hold, request corrections to incorrect phone or email entries, or request permanent deletion of your inquiry transcripts. Contact us at <a href="mailto:privacy@propasure.com" className="text-primary hover:underline font-bold">privacy@propasure.com</a> to execute these rights.
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
