"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  Sparkles,
  Zap,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalendlyModal } from "@/components/ui/CalendlyModal";
import { RoiCalculator } from "@/components/shared/RoiCalculator";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const plans = [
    {
      name: "Starter Plan",
      subtitle: "Suitable for startups & single-location businesses",
      priceMonthly: "$990",
      priceAnnual: "$790",
      featured: false,
      badge: "Core Automation",
      features: [
        "1 Autonomous AI Voice Agent (Inbound)",
        "1 Website AI Chat Assistant",
        "Up to 1,000 monthly voice minutes",
        "Unlimited website chat interactions",
        "Google Calendar & Outlook direct sync",
        "Standard CRM integration (HubSpot / GoHighLevel)",
        "Standard business hours support (Email)",
        "7-day deployment turnaround",
      ],
      ctaText: "Start with Starter",
    },
    {
      name: "Professional Plan",
      subtitle: "Suitable for growing businesses looking to scale",
      priceMonthly: "$2,490",
      priceAnnual: "$1,990",
      featured: true,
      badge: "Most Popular",
      features: [
        "Up to 3 AI Voice Agents (Inbound & Outbound Calling)",
        "Omnichannel Website & WhatsApp AI Assistants",
        "Up to 3,500 monthly voice minutes",
        "Sub-60-second speed-to-lead outbound callbacks",
        "Advanced BANT lead qualification & scoring",
        "Custom objection handling & company voice calibration",
        "Deep 2-way CRM & Webhook synchronization",
        "Dedicated Slack channel & Priority 24/7 support",
      ],
      ctaText: "Deploy Professional",
    },
    {
      name: "Enterprise Plan",
      subtitle: "For high-volume organizations & multi-location practices",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      featured: false,
      badge: "Full Scale",
      features: [
        "Unlimited AI Voice & Chat Employees",
        "High-volume or unlimited monthly voice minutes",
        "Custom LLM fine-tuning & proprietary knowledge base",
        "Dedicated SIP trunks & enterprise telephony failover",
        "Custom API, ERP, and legacy database integrations",
        "SOC2 / HIPAA compliance agreements & data isolation",
        "Dedicated AI Solutions Architect & monthly prompt tuning",
        "Guaranteed 99.99% uptime SLA",
      ],
      ctaText: "Contact Enterprise",
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="glow-spot w-96 h-96 bg-[#00A3FF]/20 -top-20 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <Badge variant="electric" icon={<Sparkles className="w-3.5 h-3.5" />}>
            TRANSPARENT VALUE-BASED PRICING
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Predictable Pricing for <br />
            <span className="text-gradient-electric">Your AI Workforce</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Replace $60,000+/year receptionist salaries with tireless, 24/7 AI employees that never miss a call, never call in sick, and book meetings on demand.
          </p>

          {/* Billing Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3 text-sm">
            <span
              className={`font-medium cursor-pointer ${
                !isAnnual ? "text-white" : "text-slate-400"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-13 h-7 rounded-full bg-white/10 p-1 border border-white/20 transition-colors focus:outline-none flex items-center"
              aria-label="Toggle annual billing"
            >
              <div
                className={`w-5 h-5 rounded-full bg-[#00A3FF] transition-transform duration-200 shadow-md ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`font-medium cursor-pointer flex items-center gap-1.5 ${
                isAnnual ? "text-white" : "text-slate-400"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.featured
                  ? "bg-gradient-to-b from-[#0B1530] via-[#070D1F] to-[#040814] border-2 border-[#00A3FF] shadow-[0_0_50px_rgba(0,163,255,0.25)] lg:-translate-y-2"
                  : "glass-panel border border-white/10 hover:border-white/25"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#00A3FF] to-[#0A84FF] text-white text-xs font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(0,163,255,0.5)]">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  {!plan.featured && (
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mb-6 min-h-[32px]">
                  {plan.subtitle}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    {plan.priceMonthly !== "Custom" && (
                      <span className="text-xs text-slate-400">/ month</span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {plan.priceMonthly === "Custom"
                      ? "Billed based on custom volume and scope"
                      : isAnnual
                      ? "Billed annually (Save 20%)"
                      : "Billed monthly, cancel anytime"}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    What&apos;s Included:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.featured ? "text-[#00A3FF]" : "text-emerald-400"
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <Button
                  variant={plan.featured ? "primary" : "secondary"}
                  size="lg"
                  className="w-full text-center"
                  onClick={() => setIsCalendlyOpen(true)}
                  icon={<Calendar className="w-4 h-4" />}
                >
                  {plan.ctaText}
                </Button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Includes full setup, onboarding & custom agent training
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded ROI Calculator on Pricing Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoiCalculator onBookDemo={() => setIsCalendlyOpen(true)} />
      </section>

      {/* Pricing FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="neutral">PRICING CLARITY</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Common Questions About Implementation & Billing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="glass-panel p-5 rounded-2xl">
            <h4 className="font-bold text-white mb-1.5">
              Are there long-term contracts?
            </h4>
            <p className="text-slate-400 leading-relaxed">
              No. Monthly plans are month-to-month and can be paused or modified at any time with 30 days notice. Annual plans provide a 20% discount.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl">
            <h4 className="font-bold text-white mb-1.5">
              What if we exceed our monthly voice minutes?
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Overages are billed at a flat, low-cost rate ($0.18/minute) with zero penalty fees, or you can seamlessly upgrade your tier.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl">
            <h4 className="font-bold text-white mb-1.5">
              Is there a one-time onboarding fee?
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Each package includes turnkey agent creation, prompt engineering, CRM webhooks, and telephone setup with zero hidden surprise charges.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl">
            <h4 className="font-bold text-white mb-1.5">
              Can we keep our current business phone number?
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Yes. You can simply forward calls to your HDM Tech AI agent, or we can provision dedicated local/toll-free numbers on your behalf.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Button
            size="md"
            onClick={() => setIsCalendlyOpen(true)}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Schedule a Demo to Discuss Custom Requirements
          </Button>
        </div>
      </section>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </div>
  );
}
