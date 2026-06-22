"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyServicesSection from "@/components/PropertyServicesSection";
import { Input, Select, Textarea, SubmitButton } from "@/components/ui/FormElements";
import { submitToSheetDB } from "@/lib/sheetdb";
import { MessageSquare, Calculator, ShieldAlert, Award } from "lucide-react";
import { motion } from "framer-motion";

const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City must be at least 2 characters"),
  propertyType: z.string().min(1, "Please select property type"),
  budget: z.string().min(2, "Please enter your budget details"),
  requirement: z.string().min(5, "Please enter details of your property requirement"),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

const propertyTypeOptions = [
  { value: "Apartment", label: "Apartment / Flat" },
  { value: "Villa", label: "Independent Villa / House" },
  { value: "Plot", label: "Residential Plot / Land" },
  { value: "Commercial", label: "Commercial Space" },
];

export default function PropertyServicesPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      propertyType: "Apartment",
      budget: "",
      requirement: "",
    },
  });

  const onSubmit = async (data: ConsultationFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      await submitToSheetDB("Free Consultation Form", {
        name: data.name,
        phone: data.phone,
        email: data.email,
        city: data.city,
        propertyType: data.propertyType,
        budget: data.budget,
        requirement: data.requirement,
      });
      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    }
  };

  const getWhatsAppLink = (name: string, budget: string, city: string) => {
    const text = `Hi Propasure! My name is ${name}. I just registered for a free consultation in ${city} for budget ${budget}. Let's chat.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
              PROPERTY SERVICES
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary mt-6 tracking-tight">
              Stand-alone Advisory & Documentation
            </h1>
            <p className="text-text-secondary text-base max-w-xl mx-auto mt-3">
              Not ready for a full package? Access our verified checklist reports, legal title opinions, structural audit assessments, and banking approvals individually.
            </p>
          </div>
        </section>

        {/* Existing Property Services Section detailing individual solutions */}
        <PropertyServicesSection />

        {/* Form Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
                  EXPERT ADVISORY
                </span>
                <h2 className="font-heading font-bold text-3xl text-primary">
                  Book Free Property Consultation
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Confused between multiple listings? Unsure of builder delivery histories, RERA disputes, or mother deed legal links? Complete the questionnaire below. A certified advisory specialist will coordinate a 15-minute diagnostic call.
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <ShieldAlert className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Identifies risk profiles of short-listed builders.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <Calculator className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Calculates true localized price benchmarks.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <Award className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>100% independent representational advice.</span>
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
                    <h3 className="font-heading font-bold text-xl text-primary">Consultation Scheduled!</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
                      We have scheduled your free property diagnostic review. A consultant is reviewing RERA case logs in your target region.
                    </p>
                    <a
                      href={getWhatsAppLink("Prospect", "Budget", "My City")}
                      target="_blank"
                      className="mt-4 bg-secondary hover:bg-secondary-light text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" /> Open WhatsApp for Instant Diagnostics
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3">
                      Register For Free Property Audit
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
                      <Input
                        label="Email Address"
                        placeholder="john@example.com"
                        type="email"
                        error={errors.email}
                        {...register("email")}
                      />
                      <Input
                        label="Target City"
                        placeholder="e.g. Bangalore, Hyderabad"
                        error={errors.city}
                        {...register("city")}
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
                        label="Budget (in Lakhs/Crores)"
                        placeholder="e.g. 80 Lakhs - 1.2 Crores"
                        error={errors.budget}
                        {...register("budget")}
                      />
                    </div>

                    <Textarea
                      label="Property Requirements / Specific Concerns"
                      placeholder="e.g. Seeking legal verification for a 3 BHK flat in Gachibowli, Hyderabad..."
                      rows={3}
                      error={errors.requirement}
                      {...register("requirement")}
                    />

                    {status === "error" && (
                      <div className="bg-red-50 text-red-700 text-xs border border-red-200 p-3 rounded-xl font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <SubmitButton loading={status === "loading"}>
                      Submit Consultation Request
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
