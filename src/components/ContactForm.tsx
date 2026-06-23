"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams } from "next/navigation";
import { submitToSheetDB } from "@/lib/sheetdb";
import { Loader2, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

// Form validation schema with Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address"),
  subject: z.enum([
    "Buy Property",
    "Sell Property",
    "Rent Property",
    "Property Audit",
    "Site Visit",
    "Builder Partnership",
    "Agent Registration",
    "Landlord Enquiry",
    "AI Advisor",
    "General Consultation"
  ]),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  defaultSubject?: ContactFormValues["subject"];
  title?: string;
  showCardWrapper?: boolean;
}

function ContactFormInner({
  defaultSubject = "General Consultation",
  title = "Send a Message",
  showCardWrapper = true,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPulsing, setIsPulsing] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      subject: defaultSubject,
      message: "",
    },
  });

  // Sync parameter service type to dropdown selection
  useEffect(() => {
    const serviceParam = searchParams.get("service") || searchParams.get("subject") || searchParams.get("tab");
    const hash = window.location.hash;

    if (serviceParam) {
      // Find matching subject
      const validOptions = [
        "Buy Property",
        "Sell Property",
        "Rent Property",
        "Property Audit",
        "Site Visit",
        "Builder Partnership",
        "Agent Registration",
        "Landlord Enquiry",
        "AI Advisor",
        "General Consultation"
      ];
      
      const matched = validOptions.find(
        (opt) => opt.toLowerCase() === decodeURIComponent(serviceParam).toLowerCase()
      );

      if (matched) {
        setValue("subject", matched as any);
      }
    }

    if (hash === "#contact-form" || hash === "#enquiry") {
      const timer = setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        
        setTimeout(() => {
          setFocus("name");
          setIsPulsing(true);
          setTimeout(() => setIsPulsing(false), 3000);
        }, 800);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [searchParams, setValue, setFocus]);

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      await submitToSheetDB(data.subject, {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        city: "N/A",
        propertyType: data.subject,
        budget: "N/A",
        requirement: data.message,
      });
      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit message. Please check your network and try again.");
    }
  };

  const formContent = (
    <div>
      {status === "success" ? (
        <div className="text-center py-8 px-4 flex flex-col items-center gap-4 animate-fadeIn text-left">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl shadow-sm border border-emerald-150 animate-bounce">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="font-heading font-bold text-xl text-secondary text-center">Message Sent Successfully!</h3>
          <p className="text-sm text-slate-600 leading-relaxed max-w-sm text-center">
            Thank you for contacting Propasure. Our verified property and legal advisors will review your query and reach out within 4 hours.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" /> Open WhatsApp for Instant Response
          </a>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs text-primary font-bold hover:underline cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-left">
          <h3 className="font-heading font-bold text-lg text-secondary border-b border-slate-100 pb-3 mb-2">
            {title}
          </h3>

          {/* Full Name */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs font-bold text-slate-700">Full Name *</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className={`p-3 text-sm border rounded-xl outline-none transition-all bg-white text-secondary placeholder:text-slate-450 ${
                errors.name
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/20"
              }`}
              {...register("name")}
            />
            {errors.name && (
              <span className="text-[10px] text-red-500 font-bold mt-0.5 pl-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs font-bold text-slate-700">Mobile Number *</label>
            <input
              type="tel"
              placeholder="e.g. 9876543210"
              className={`p-3 text-sm border rounded-xl outline-none transition-all bg-white text-secondary placeholder:text-slate-450 ${
                errors.mobile
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/20"
              }`}
              {...register("mobile")}
            />
            {errors.mobile && (
              <span className="text-[10px] text-red-500 font-bold mt-0.5 pl-1">
                {errors.mobile.message}
              </span>
            )}
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs font-bold text-slate-700">Email Address *</label>
            <input
              type="email"
              placeholder="e.g. john@example.com"
              className={`p-3 text-sm border rounded-xl outline-none transition-all bg-white text-secondary placeholder:text-slate-450 ${
                errors.email
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/20"
              }`}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-[10px] text-red-500 font-bold mt-0.5 pl-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Subject Dropdown */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs font-bold text-slate-700">Subject / Service Type *</label>
            <select
              className={`p-3 text-sm border rounded-xl outline-none transition-all bg-white text-secondary ${
                errors.subject
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/20"
              }`}
              {...register("subject")}
            >
              <option value="Buy Property">Buy Property</option>
              <option value="Sell Property">Sell Property</option>
              <option value="Rent Property">Rent Property</option>
              <option value="Property Audit">Property Audit</option>
              <option value="Site Visit">Site Visit</option>
              <option value="Builder Partnership">Builder Partnership</option>
              <option value="Agent Registration">Agent Registration</option>
              <option value="Landlord Enquiry">Landlord Enquiry</option>
              <option value="AI Advisor">AI Advisor</option>
              <option value="General Consultation">General Consultation</option>
            </select>
            {errors.subject && (
              <span className="text-[10px] text-red-500 font-bold mt-0.5 pl-1">
                {errors.subject.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs font-bold text-slate-700">Message *</label>
            <textarea
              rows={4}
              placeholder="Write your requirement or details here..."
              className={`p-3 text-sm border rounded-xl outline-none transition-all bg-white text-secondary placeholder:text-slate-450 resize-none ${
                errors.message
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/20"
              }`}
              {...register("message")}
            />
            {errors.message && (
              <span className="text-[10px] text-red-500 font-bold mt-0.5 pl-1">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Error Alert */}
          {status === "error" && (
            <div className="bg-red-50 text-red-700 text-xs border border-red-200 p-3.5 rounded-xl font-semibold flex items-center gap-2 animate-fadeIn">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-primary hover:bg-primary-dark text-white text-sm font-bold py-4 rounded-xl shadow-md cursor-pointer transition-all hover:scale-[1.005] active:scale-[0.995] disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending Message...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );

  if (showCardWrapper) {
    return (
      <div 
        ref={formRef}
        id="contact-form"
        className={cn(
          "bg-white rounded-[20px] p-6 sm:p-10 border border-slate-200 shadow-lg transition-all duration-550",
          isPulsing ? "ring-4 ring-primary/30 border-primary shadow-[0_0_25px_rgba(30,64,175,0.25)] animate-pulse-ring scale-[1.015]" : ""
        )}
      >
        {formContent}
      </div>
    );
  }

  return formContent;
}

export default function ContactForm(props: ContactFormProps) {
  return (
    <Suspense fallback={
      <div className="p-8 text-center text-slate-500 text-xs">
        Loading form...
      </div>
    }>
      <ContactFormInner {...props} />
    </Suspense>
  );
}
