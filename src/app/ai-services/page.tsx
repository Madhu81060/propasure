"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIServicesSection from "@/components/AIServicesSection";
import { Input, Textarea, SubmitButton } from "@/components/ui/FormElements";
import { submitToSheetDB } from "@/lib/sheetdb";
import { MessageSquare, Cpu, ShieldAlert, Bot } from "lucide-react";
import { motion } from "framer-motion";

const aiAdvisorSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  email: z.string().email("Please enter a valid email address"),
  query: z.string().min(5, "Query must be at least 5 characters"),
});

type AIAdvisorFormValues = z.infer<typeof aiAdvisorSchema>;

export default function AIServicesPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AIAdvisorFormValues>({
    resolver: zodResolver(aiAdvisorSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      query: "",
    },
  });

  const onSubmit = async (data: AIAdvisorFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      await submitToSheetDB("AI Advisor Form", {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        query: data.query,
      });
      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    }
  };

  const getWhatsAppLink = (name: string, query: string) => {
    const text = `Hi Propasure! My name is ${name}. I have a query about: ${query}. Please connect me with an AI Property Advisor.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
              AI SERVICES
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary mt-6 tracking-tight">
              AI-Powered Property Diagnostics
            </h1>
            <p className="text-text-secondary text-base max-w-xl mx-auto mt-3">
              Engage our deep learning models. Scan documents for title litigation checks, simulate investment cash flows, and generate property scorecards.
            </p>
          </div>
        </section>

        {/* Existing Interactive Chatbot / AI Services workspace */}
        <AIServicesSection />

        {/* Form Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
                  AI CONSULTATION
                </span>
                <h2 className="font-heading font-bold text-3xl text-primary">
                  Consult the AI Advisor
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Have a specific question about property transactions, home loan approvals, builders delay ratios, or title due diligence? Submit your query to receive a structured analysis prepared by our AI algorithms.
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <Cpu className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Run legal OCR and builder verification matrices.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <ShieldAlert className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Flags localized transaction history anomalies.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <Bot className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>24/7 technical parsing support.</span>
                  </div>
                </div>
              </div>

              {/* Form Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
                {status === "success" ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-10 flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-secondary flex items-center justify-center text-3xl shadow-sm border border-secondary/15 animate-bounce">
                      ✓
                    </div>
                    <h3 className="font-heading font-bold text-xl text-primary">Query Submitted to AI Engine!</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
                      We have processed your request. Your AI diagnostics report is compiling and will be emailed/WhatsApped to you shortly.
                    </p>
                    <a
                      href={getWhatsAppLink("Prospect", "Property Query")}
                      target="_blank"
                      className="mt-4 bg-secondary hover:bg-secondary-light text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" /> Open WhatsApp to Chat Instantly
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3">
                      Submit Query to AI Advisor
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        placeholder="John Doe"
                        error={errors.name}
                        {...register("name")}
                      />
                      <Input
                        label="Mobile Number"
                        placeholder="9876543210"
                        error={errors.mobile}
                        {...register("mobile")}
                      />
                    </div>

                    <Input
                      label="Email Address"
                      placeholder="john@example.com"
                      type="email"
                      error={errors.email}
                      {...register("email")}
                    />

                    <Textarea
                      label="Your Property Query / Requirement"
                      placeholder="Describe what you want to verify or understand (e.g. Verify Title of Sobha Dream Acres Flat, Whitefield)..."
                      rows={4}
                      error={errors.query}
                      {...register("query")}
                    />

                    {status === "error" && (
                      <div className="bg-red-50 text-red-700 text-xs border border-red-200 p-3 rounded-xl font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <SubmitButton loading={status === "loading"}>
                      Submit Query for AI Diagnostics
                    </SubmitButton>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
