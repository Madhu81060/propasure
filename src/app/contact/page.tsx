"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input, Textarea, SubmitButton } from "@/components/ui/FormElements";
import { submitToSheetDB } from "@/lib/sheetdb";
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City must be at least 2 characters"),
  propertyRequirement: z.string().min(5, "Requirement must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      propertyRequirement: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      await submitToSheetDB("Contact Form", {
        name: data.name,
        phone: data.phone,
        email: data.email,
        city: data.city,
        requirement: data.propertyRequirement,
        message: data.message,
      });
      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    }
  };

  const getWhatsAppLink = (name: string, requirement: string, city: string) => {
    const text = `Hi Propasure! My name is ${name}. I just submitted a contact request from ${city} about: ${requirement}. Let's connect.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-24 bg-white">
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
              CONTACT US
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary mt-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-text-secondary text-base max-w-xl mx-auto mt-3">
              We respond to all requests within 4 hours. Connect with our regional experts for immediate assistance.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Contact Information */}
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <h2 className="font-heading font-bold text-2xl text-primary">
                  Propasure Headquarters
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Reach out directly via phone or email, or drop by one of our regional experience centers.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-primary mb-0.5">Phone Support</h4>
                      <a href="tel:+919876543210" className="text-sm font-bold text-primary hover:text-secondary transition-colors">
                        +91 98765 43210
                      </a>
                      <p className="text-[10px] text-text-muted mt-0.5">Mon - Sat, 9:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-primary mb-0.5">Email Support</h4>
                      <a href="mailto:support@propasure.com" className="text-sm font-bold text-primary hover:text-secondary transition-colors">
                        support@propasure.com
                      </a>
                      <p className="text-[10px] text-text-muted mt-0.5">Response turnaround under 4 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-secondary flex items-center justify-center flex-shrink-0 shadow-sm border border-secondary/10">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-secondary-dark mb-0.5">WhatsApp Support</h4>
                      <a
                        href="https://wa.me/919876543210?text=Hello%20Propasure!%20I%20would%20like%20to%20learn%2520more%20about%20your%20property%20advisory%20services."
                        target="_blank"
                        className="text-sm font-bold text-secondary-dark hover:text-secondary-light transition-colors"
                      >
                        Chat with Advisor
                      </a>
                      <p className="text-[10px] text-text-muted mt-0.5">Instantly match with a live advisor</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-primary mb-3">Our Office Cities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Bangalore (HQ)", "Mumbai", "Hyderabad", "Delhi-NCR"].map((loc, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200 text-xs text-text-secondary px-3 py-1.5 rounded-lg shadow-sm"
                      >
                        <MapPin className="w-3.5 h-3.5 text-primary" /> {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Form panel */}
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
                    <h3 className="font-heading font-bold text-xl text-primary">Message Sent Successfully!</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
                      Thank you for contacting Propasure. An expert advisor will reach out to you within 4 hours.
                    </p>
                    <a
                      href={getWhatsAppLink("Prospect", "General Inquiry", "My City")}
                      target="_blank"
                      className="mt-4 bg-secondary hover:bg-secondary-light text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" /> Open WhatsApp for Instant Chat
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <h3 className="font-heading font-bold text-lg text-primary border-b border-slate-100 pb-3">
                      Send a Message
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
                        label="City"
                        placeholder="Bangalore"
                        error={errors.city}
                        {...register("city")}
                      />
                    </div>

                    <Input
                      label="Property Requirement"
                      placeholder="e.g. 3 BHK Flat in Whitefield Bangalore"
                      error={errors.propertyRequirement}
                      {...register("propertyRequirement")}
                    />

                    <Textarea
                      label="Detailed Message"
                      placeholder="Write your query here..."
                      rows={4}
                      error={errors.message}
                      {...register("message")}
                    />

                    {status === "error" && (
                      <div className="bg-red-50 text-red-700 text-xs border border-red-200 p-3 rounded-xl font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <SubmitButton loading={status === "loading"}>
                      Submit Message
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
