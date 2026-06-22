"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgentsSection from "@/components/AgentsSection";
import { Input, Select, Textarea, SubmitButton } from "@/components/ui/FormElements";
import { submitToSheetDB } from "@/lib/sheetdb";
import { MessageSquare, BadgeCheck, Smartphone, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const agentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  email: z.string().email("Please enter a valid email address"),
  experience: z.string().min(1, "Please enter your experience description or years"),
});

type AgentFormValues = z.infer<typeof agentSchema>;

export default function AgentsPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AgentFormValues>({
    resolver: zodResolver(agentSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      experience: "",
    },
  });

  const onSubmit = async (data: AgentFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      await submitToSheetDB("Agent Registration Form", {
        name: data.name,
        phone: data.phone,
        email: data.email,
        experience: data.experience,
      });
      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    }
  };

  const getWhatsAppLink = (name: string, exp: string) => {
    const text = `Hi Propasure! My name is ${name}. I am a property agent with ${exp} experience. I want to register for the verified agent program.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
              AGENTS PLATFORM
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary mt-6 tracking-tight">
              Empower Your Agency with AI Leads
            </h1>
            <p className="text-text-secondary text-base max-w-xl mx-auto mt-3">
              Unlock pre-screened search briefs in your core local nodes. Syndicating your direct inventory on Propasure and close transactions faster.
            </p>
          </div>
        </section>

        {/* Existing Agents Section detailing challenges & platform features */}
        <AgentsSection />

        {/* Form Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
                  VERIFIED ROSTER
                </span>
                <h2 className="font-heading font-bold text-3xl text-primary">
                  Register as a Partner Agent
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Become a verified partner agent on Propasure. Verified agents enjoy custom CRM dashboard integrations, active customer match organizers, automatic PDF brochures, and real-time transaction updates.
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <BadgeCheck className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Get a verified RERA badge on your broker profile.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <Smartphone className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Receive direct briefs of buyers matching your inventory.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <LineChart className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Unlocks localized historical property pricing matrix logs.</span>
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
                    <h3 className="font-heading font-bold text-xl text-primary">Registration Request Sent!</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
                      We have received your application. A partner onboarding officer will reach out within 24 hours to verify your RERA registration card.
                    </p>
                    <a
                      href={getWhatsAppLink("Prospect Agent", "5 years")}
                      target="_blank"
                      className="mt-4 bg-secondary hover:bg-secondary-light text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" /> Open WhatsApp for Quick Onboarding
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3">
                      Agent Partnership Roster
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        placeholder="John Doe"
                        error={errors.name}
                        {...register("name")}
                      />
                      <Input
                        label="Phone Number"
                        placeholder="9876543210"
                        error={errors.phone}
                        {...register("phone")}
                      />
                    </div>

                    <Input
                      label="Email Address"
                      placeholder="john@brokerage.com"
                      type="email"
                      error={errors.email}
                      {...register("email")}
                    />

                    <Textarea
                      label="Years of Experience & Core Localities"
                      placeholder="e.g. 5 Years experience, covering Whitefield and Indiranagar..."
                      rows={3}
                      error={errors.experience}
                      {...register("experience")}
                    />

                    {status === "error" && (
                      <div className="bg-red-50 text-red-700 text-xs border border-red-200 p-3 rounded-xl font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <SubmitButton loading={status === "loading"}>
                      Submit Broker Application
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
