import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HDM Tech | AI Employees That Work 24/7 | AI Automation Agency",
  description:
    "HDM Tech builds enterprise-grade AI Voice Agents and AI Chat Assistants to automate customer support, lead qualification, appointment booking, and sales operations around the clock.",
  keywords: [
    "AI Voice Agents",
    "AI Chat Assistants",
    "AI Automation Agency",
    "AI Employees",
    "Lead Qualification Automation",
    "Appointment Booking AI",
    "HDM Tech",
    "Customer Support Automation",
  ],
  authors: [{ name: "HDM Tech" }],
  creator: "HDM Tech",
  publisher: "HDM Tech",
  metadataBase: new URL("https://hdmtech.com"),
  openGraph: {
    title: "HDM Tech | AI Employees That Work 24/7",
    description:
      "Transform customer conversations with intelligent AI Voice Agents and AI Assistants that answer questions, qualify leads, book appointments, and close opportunities 24/7.",
    url: "https://hdmtech.com",
    siteName: "HDM Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HDM Tech | AI Employees That Work 24/7",
    description:
      "Deploy intelligent AI Voice Agents & Chat Assistants that answer calls, book appointments, and qualify leads 24/7.",
    creator: "@hdmtech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HDM Tech",
    url: "https://hdmtech.com",
    logo: "https://hdmtech.com/logo.png",
    description:
      "HDM Tech is a premier AI Automation Agency deploying 24/7 AI Voice Agents and AI Chat Assistants for customer support, lead qualification, and appointment booking.",
    sameAs: [
      "https://linkedin.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-97113-27023",
      email: "support.hdmtech@gmail.com",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white antialiased flex flex-col font-sans selection:bg-[#00A3FF] selection:text-white`}
      >
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
