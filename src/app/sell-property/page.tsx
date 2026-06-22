"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SellPropertySection from "@/components/SellPropertySection";
import { Input, Select, SubmitButton } from "@/components/ui/FormElements";
import { submitToSheetDB } from "@/lib/sheetdb";
import { MessageSquare, BarChart3, Users, KeySquare } from "lucide-react";
import { motion } from "framer-motion";

const sellPropertySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  propertyLocation: z.string().min(5, "Please enter detailed property location"),
  propertyType: z.string().min(1, "Please select property type"),
  expectedPrice: z.string().min(3, "Please enter expected price or range"),
});

type SellPropertyFormValues = z.infer<typeof sellPropertySchema>;

const propertyTypeOptions = [
  { value: "Apartment", label: "Apartment / Flat" },
  { value: "Villa", label: "Independent Villa / House" },
  { value: "Plot", label: "Residential Plot / Land" },
  { value: "Commercial", label: "Commercial Space" },
];

export default function SellPropertyPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SellPropertyFormValues>({
    resolver: zodResolver(sellPropertySchema),
    defaultValues: {
      name: "",
      phone: "",
      propertyLocation: "",
      propertyType: "Apartment",
      expectedPrice: "",
    },
  });

  const onSubmit = async (data: SellPropertyFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      await submitToSheetDB("Sell Property Form", {
        name: data.name,
        phone: data.phone,
        propertyLocation: data.propertyLocation,
        propertyType: data.propertyType,
        expectedPrice: data.expectedPrice,
      });
      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    }
  };

  const getWhatsAppLink = (name: string, location: string, price: string) => {
    const text = `Hi Propasure! My name is ${name}. I just listed a property for sale in ${location} with expected price ${price}. Let's discuss details.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
              SELL PROPERTY
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary mt-6 tracking-tight">
              Sell Property With 100% Transparency
            </h1>
            <p className="text-text-secondary text-base max-w-xl mx-auto mt-3">
              Market your property directly to pre-verified, loan-approved buyers. Eliminate duplicate listings, spam calls, and expensive broker commissions.
            </p>
          </div>
        </section>

        {/* Existing Sell Property Section detailing challenges & solutions */}
        <SellPropertySection />

        {/* Form Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
                  ZERO MIDDLEMEN
                </span>
                <h2 className="font-heading font-bold text-3xl text-primary">
                  List Your Property Today
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Enter basic property details. Our AI valuation tool compares localized transactional histories to estimate the fair listing price, and connects you with legal and banking support for a clean transaction.
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <BarChart3 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Real-time benchmark pricing evaluation.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <Users className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Direct access to pre-screened home buyers.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <KeySquare className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Assistance with title closures and registrar biometrics.</span>
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
                    <h3 className="font-heading font-bold text-xl text-primary">Listing Request Received!</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
                      We have received your listing request. An advisor will contact you to perform the title checklist review.
                    </p>
                    <a
                      href={getWhatsAppLink("Prospect", "Property Location", "Expected Price")}
                      target="_blank"
                      className="mt-4 bg-secondary hover:bg-secondary-light text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" /> Open WhatsApp for Quick Setup
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3">
                      Register Property For Sale
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Select
                        label="Property Type"
                        options={propertyTypeOptions}
                        error={errors.propertyType}
                        {...register("propertyType")}
                      />
                      <Input
                        label="Expected Price (in Lakhs or Crores)"
                        placeholder="e.g. 75 Lakhs or 1.2 Crores"
                        error={errors.expectedPrice}
                        {...register("expectedPrice")}
                      />
                    </div>

                    <Input
                      label="Property Location (Detailed Address)"
                      placeholder="e.g. Flat 304, Green Meadows, Whitefield, Bangalore"
                      error={errors.propertyLocation}
                      {...register("propertyLocation")}
                    />

                    {status === "error" && (
                      <div className="bg-red-50 text-red-700 text-xs border border-red-200 p-3 rounded-xl font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <SubmitButton loading={status === "loading"}>
                      Submit Listing Request
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
