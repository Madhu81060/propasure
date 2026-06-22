"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuildersSection from "@/components/BuildersSection";
import { Input, SubmitButton } from "@/components/ui/FormElements";
import { submitToSheetDB } from "@/lib/sheetdb";
import { MessageSquare, BarChart3, Rocket, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const builderSchema = z.object({
  companyName: z.string().min(2, "Company Name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Contact Person name must be at least 2 characters"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  email: z.string().email("Please enter a valid email address"),
});

type BuilderFormValues = z.infer<typeof builderSchema>;

export default function BuildersPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BuilderFormValues>({
    resolver: zodResolver(builderSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      mobile: "",
      email: "",
    },
  });

  const onSubmit = async (data: BuilderFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      await submitToSheetDB("Builder Partnership Form", {
        companyName: data.companyName,
        contactPerson: data.contactPerson,
        mobile: data.mobile,
        email: data.email,
      });
      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    }
  };

  const getWhatsAppLink = (company: string, person: string) => {
    const text = `Hi Propasure! My name is ${person} representing ${company}. We are interested in partnering with Propasure. Let's discuss channels.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
              BUILDERS & DEVELOPERS
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary mt-6 tracking-tight">
              Pre-Screened Lead Acquisition for Developers
            </h1>
            <p className="text-text-secondary text-base max-w-xl mx-auto mt-3">
              Connect directly with home buyers who have pre-approved credit limits. Reduce customer acquisition costs and increase booking velocities.
            </p>
          </div>
        </section>

        {/* Existing Builders Section detailing challenges & developer solutions */}
        <BuildersSection />

        {/* Form Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
                  PARTNER RELATIONSHIP
                </span>
                <h2 className="font-heading font-bold text-3xl text-primary">
                  Become a Partner Developer
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Join Propasure's builders network. Partnered projects get listed on our direct-matching directory, unlocking automated lead scoring, CRM tracking, and pre-booking campaigns with active buyers.
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <Rocket className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Speed up inventory sales in pre-booking phase.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <BarChart3 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Real-time visitor analytics dashboard.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <Handshake className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Direct API link into developer sales CRM tools.</span>
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
                    <h3 className="font-heading font-bold text-xl text-primary">Partnership Request Received!</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
                      We have received your partnership request. A developer relationships officer will schedule a meeting at your corporate office.
                    </p>
                    <a
                      href={getWhatsAppLink("My Developer Company", "Partnership Contact")}
                      target="_blank"
                      className="mt-4 bg-secondary hover:bg-secondary-light text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" /> Open WhatsApp for Business Chat
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3">
                      Developer Partnership Registration
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Company / Developer Name"
                        placeholder="e.g. Prestige Group"
                        error={errors.companyName}
                        {...register("companyName")}
                      />
                      <Input
                        label="Contact Person Name"
                        placeholder="e.g. Amit Kumar"
                        error={errors.contactPerson}
                        {...register("contactPerson")}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Mobile Number"
                        placeholder="9876543210"
                        error={errors.mobile}
                        {...register("mobile")}
                      />
                      <Input
                        label="Corporate Email Address"
                        placeholder="partners@prestige.com"
                        type="email"
                        error={errors.email}
                        {...register("email")}
                      />
                    </div>

                    {status === "error" && (
                      <div className="bg-red-50 text-red-700 text-xs border border-red-200 p-3 rounded-xl font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <SubmitButton loading={status === "loading"}>
                      Submit Partnership Application
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
