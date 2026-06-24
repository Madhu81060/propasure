import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Propasure - India's First AI-Powered Property Advisory & Execution Platform",
  description: "Propasure combines Artificial Intelligence, Legal Expertise, Financial Advisory, and Market Intelligence to help you Find, Verify, Negotiate, and Own properties with absolute confidence.",
  keywords: "propasure, property advisory, AI real estate, land verification, property due diligence India, home loan advisor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
