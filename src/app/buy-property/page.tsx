"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuyPropertySection from "@/components/BuyPropertySection";
import { Input, Select, SubmitButton } from "@/components/ui/FormElements";
import { submitToSheetDB } from "@/lib/sheetdb";
import { MessageSquare, Calendar, Compass, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const siteVisitSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  propertyType: z.string().min(1, "Please select property type"),
  city: z.string().min(2, "City must be at least 2 characters"),
});

type SiteVisitFormValues = z.infer<typeof siteVisitSchema>;

const propertyTypeOptions = [
  { value: "Apartment", label: "Apartment / Flat" },
  { value: "Villa", label: "Independent Villa / House" },
  { value: "Plot", label: "Residential Plot / Land" },
  { value: "Commercial", label: "Commercial Space" },
];

export default function BuyPropertyPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SiteVisitFormValues>({
    resolver: zodResolver(siteVisitSchema),
    defaultValues: {
      name: "",
      phone: "",
      preferredDate: "",
      propertyType: "Apartment",
      city: "",
    },
  });

  const onSubmit = async (data: SiteVisitFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      await submitToSheetDB("Book Site Visit Form", {
        name: data.name,
        phone: data.phone,
        preferredDate: data.preferredDate,
        propertyType: data.propertyType,
        city: data.city,
      });
      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    }
  };

  const getWhatsAppLink = (name: string, date: string, city: string) => {
    const text = `Hi Propasure! My name is ${name}. I just scheduled a property site visit in ${city} for ${date}. Please coordinate.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
              BUY PROPERTY
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary mt-6 tracking-tight">
              Secure Your Dream Property
            </h1>
            <p className="text-text-secondary text-base max-w-xl mx-auto mt-3">
              India's first homebuyer-only platform. We do not represent builders or brokers, ensuring you get the absolute best deal with complete legal safety.
            </p>
          </div>
        </section>

        {/* Existing Buy Property Section detailing challenges & services */}
        <BuyPropertySection />

        {/* Form Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <span className="text-secondary text-xs uppercase font-extrabold tracking-widest font-heading">
                  PRE-SCREENED VISITS
                </span>
                <h2 className="font-heading font-bold text-3xl text-primary">
                  Book a Guided Site Visit
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Submit your details to visit short-listed properties with a dedicated Propasure Field Advisor. We inspect structural quality, verify project layout boundaries, and audit RERA deliverables.
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <Calendar className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Choose your preferred date and time for visitation.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <Compass className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Propasure Field Advisor conducts the site visit with you.</span>
                  </div>
                  <div className="flex gap-3 items-center text-xs text-text-secondary">
                    <ShieldAlert className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Free checklist report detailing structural audits.</span>
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
                    <h3 className="font-heading font-bold text-xl text-primary">Site Visit Requested!</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
                      We have received your site visit booking. A field advisor will call you shortly to confirm the timings.
                    </p>
                    <a
                      href={getWhatsAppLink("Prospect", "Preferred Date", "My City")}
                      target="_blank"
                      className="mt-4 bg-secondary hover:bg-secondary-light text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" /> Open WhatsApp for Quick Confirm
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3">
                      Book Guided Visit
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
                        label="Preferred Visit Date"
                        type="date"
                        error={errors.preferredDate}
                        {...register("preferredDate")}
                      />
                      <Select
                        label="Property Type"
                        options={propertyTypeOptions}
                        error={errors.propertyType}
                        {...register("propertyType")}
                      />
                    </div>

                    <Input
                      label="City"
                      placeholder="e.g. Bangalore, Hyderabad"
                      error={errors.city}
                      {...register("city")}
                    />

                    {status === "error" && (
                      <div className="bg-red-50 text-red-700 text-xs border border-red-200 p-3 rounded-xl font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <SubmitButton loading={status === "loading"}>
                      Request Site Visit Coordination
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
