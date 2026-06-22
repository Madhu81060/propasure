"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LandlordSection from "@/components/LandlordSection";
import { Input, Textarea, SubmitButton } from "@/components/ui/FormElements";
import { submitToSheetDB } from "@/lib/sheetdb";
import { MessageSquare, ShieldCheck, DollarSign, Hammer } from "lucide-react";
import { motion } from "framer-motion";

const landlordSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  propertyDetails: z.string().min(5, "Please enter details of your rental property"),
});

type LandlordFormValues = z.infer<typeof landlordSchema>;

export default function LandlordsPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LandlordFormValues>({
    resolver: zodResolver(landlordSchema),
    defaultValues: {
      name: "",
      phone: "",
      propertyDetails: "",
    },
  });

  const onSubmit = async (data: LandlordFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      await submitToSheetDB("Landlord Form", {
        name: data.name,
        phone: data.phone,
        propertyDetails: data.propertyDetails,
      });
      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    }
  };

  const getWhatsAppLink = (name: string, details: string) => {
    const text = `Hi Propasure! My name is ${name}. I am a landlord interested in managing my property: ${details}. Please connect with me.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
              LANDLORDS
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary mt-6 tracking-tight">
              Hands-Off Rental Management
            </h1>
            <p className="text-text-secondary text-base max-w-xl mx-auto mt-3">
              Automate rent collection, tenant screening, move-in checklists, and plumbing/electrical maintenance with a single manager.
            </p>
          </div>
        </section>

        {/* Existing Landlord Section detailing challenges & landlord solutions */}
        <LandlordSection />

        {/* Form Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
                  PROPERTY MANAGER
                </span>
                <h2 className="font-heading font-bold text-3xl text-primary">
                  List Your Landlord Portfolio
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Managing rentals across cities is stressful. Register your units with Propasure. We perform deep salary KYC checkups, manage e-sign documentation, route payments directly, and run periodic audit checkups.
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Rigorous tenant reference and salary checks.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <DollarSign className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Rent automated collections routed directly to your account.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <Hammer className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>On-demand plumber, painter, and technician networks.</span>
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
                    <h3 className="font-heading font-bold text-xl text-primary">Portfolio Onboarding Initiated!</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
                      We have received your landlord details. A dedicated property manager will contact you within 4 hours to verify property records.
                    </p>
                    <a
                      href={getWhatsAppLink("Prospect Landlord", "Rental Apartment")}
                      target="_blank"
                      className="mt-4 bg-secondary hover:bg-secondary-light text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" /> Open WhatsApp for Manager Onboarding
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3">
                      Register Property For Management
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

                    <Textarea
                      label="Property Details (Location, Configuration, Expected Rent)"
                      placeholder="e.g. 3 BHK Apartment in Prestige Shantiniketan, Whitefield, Bangalore. Expected Rent: 45,000/month..."
                      rows={4}
                      error={errors.propertyDetails}
                      {...register("propertyDetails")}
                    />

                    {status === "error" && (
                      <div className="bg-red-50 text-red-700 text-xs border border-red-200 p-3 rounded-xl font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <SubmitButton loading={status === "loading"}>
                      Submit Portfolio for Onboarding
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
