"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/shared/ContactForm";
import { CalendlyEmbed } from "@/components/ui/CalendlyEmbed";
import { CalendlyModal } from "@/components/ui/CalendlyModal";

export default function ContactPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="space-y-20 pb-24">
      {/* Hero */}
      <section className="pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="glow-spot w-96 h-96 bg-[#00A3FF]/20 -top-20 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <Badge variant="electric" icon={<Sparkles className="w-3.5 h-3.5" />}>
            DIRECT COMMUNICATION
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Schedule Your Live <br />
            <span className="text-gradient-electric">AI Agent Demonstration</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Choose a date directly on our calendar below for an immediate 1-on-1 strategy session, or send an inquiry to have our AI architecture team review your requirements.
          </p>
        </div>
      </section>

      {/* Main Booking & Inquiry Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Calendly Live Scheduler */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#00A3FF]" />
                Direct Calendar Booking
              </h2>
              <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Availability
              </span>
            </div>
            <CalendlyEmbed />
          </div>

          {/* Quick Contact Info & Form */}
          <div className="lg:col-span-5 space-y-8">
            <ContactForm source="Contact Page" />

            {/* Quick Contact Information Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 text-xs sm:text-sm">
              <h3 className="font-bold text-white text-base">Direct Channels</h3>
              
              <div className="space-y-3">
                <a
                  href="mailto:support.hdmtech@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-[#00A3FF] transition-colors p-2.5 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00A3FF]/10 text-[#00A3FF] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Email Address</div>
                    <div className="font-semibold text-white">support.hdmtech@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+919711327023"
                  className="flex items-center gap-3 text-slate-300 hover:text-[#00A3FF] transition-colors p-2.5 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00A3FF]/10 text-[#00A3FF] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Direct Phone</div>
                    <div className="font-semibold text-white">+91 97113 27023</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919711327023?text=Hi%20HDM%20Tech%2C%20I%20would%20like%20to%20speak%20with%20an%20AI%20Specialist."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-[#25D366] transition-colors p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-400">WhatsApp AI Hotline</div>
                    <div className="font-semibold text-white">Instant WhatsApp Chat</div>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs text-slate-400 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#00A3FF]" />
                  <span>AI Telephony: Available 24/7/365</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Engineering Team Response: Under 2 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </div>
  );
}
