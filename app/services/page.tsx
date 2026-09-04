"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  MessageSquare,
  Filter,
  CalendarCheck,
  Headphones,
  GitMerge,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalendlyModal } from "@/components/ui/CalendlyModal";

export default function ServicesPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const services = [
    {
      id: "voice-agents",
      title: "AI Voice Agents",
      icon: <PhoneCall className="w-7 h-7 text-[#00A3FF]" />,
      tagline: "Natural, Human-Sounding Inbound & Outbound Calling",
      desc: "Our neural voice agents handle phone conversations with sub-second response times. They understand context, handle objections, answer questions, qualify prospects, and transfer urgent calls smoothly.",
      capabilities: [
        "Inbound 24/7 phone answering with zero wait times",
        "Outbound speed-to-lead follow-ups within 60 seconds",
        "Direct appointment booking into Google & Outlook calendars",
        "Natural speech synthesis with emotion and interruption handling",
        "Real-time CRM logging, transcripts, and audio recordings",
      ],
      idealFor: "Real Estate, Healthcare, Law Firms, Home Services, Insurance",
      link: "/voice-agents",
    },
    {
      id: "chat-assistants",
      title: "AI Chat Assistants",
      icon: <MessageSquare className="w-7 h-7 text-[#00A3FF]" />,
      tagline: "24/7 Intelligent Omnichannel Website & WhatsApp Agents",
      desc: "Engage every visitor immediately with interactive chat assistants that convert cold browsing traffic into qualified booked appointments and sales opportunities.",
      capabilities: [
        "Interactive website chat with instant lead capture",
        "Official WhatsApp Business API automation",
        "Multi-turn conversational sales objection handling",
        "Live knowledge base retrieval from your docs & FAQs",
        "Seamless escalation to human agents with full context",
      ],
      idealFor: "SaaS, E-commerce, Clinics, Education, B2B Services",
      link: "/chat-assistants",
    },
    {
      id: "lead-qualification",
      title: "Lead Qualification Automation",
      icon: <Filter className="w-7 h-7 text-[#00A3FF]" />,
      tagline: "Filter High-Intent Buyers Before Your Sales Team Steps In",
      desc: "Stop wasting expensive salesperson hours on tire-kickers. Our AI models dynamically ask vetting questions, score lead intent, and prioritize high-value deals for your team.",
      capabilities: [
        "Custom BANT / CHAMP qualification framework logic",
        "Automated lead scoring and categorization in CRM",
        "Instant disqualification of out-of-scope inquiries",
        "Automatic enrichment with company and contact data",
        "Priority alert routing via Slack, SMS, or Email",
      ],
      idealFor: "High-Ticket B2B, Agencies, Real Estate Brokers, Legal Practices",
      link: "/contact",
    },
    {
      id: "appointment-booking",
      title: "Appointment Booking Automation",
      icon: <CalendarCheck className="w-7 h-7 text-[#00A3FF]" />,
      tagline: "Frictionless Scheduling Directly into Your Team's Calendar",
      desc: "Eliminate back-and-forth scheduling emails. Whether over a voice phone call or website chat, the AI checks live availability, locks in slots, and issues calendar invites automatically.",
      capabilities: [
        "Two-way Google Calendar, Outlook, and Calendly sync",
        "Timezone auto-detection and scheduling buffer enforcement",
        "Automated SMS and email confirmation and reminder cadences",
        "Rescheduling and cancellation handling without human staff",
        "Team round-robin distribution by geography or rep specialization",
      ],
      idealFor: "Medical Practices, Consultancies, Real Estate, Service Contractors",
      link: "/contact",
    },
    {
      id: "support-automation",
      title: "Customer Support Automation",
      icon: <Headphones className="w-7 h-7 text-[#00A3FF]" />,
      tagline: "Instant First-Contact Resolution for 75%+ of Routine Inquiries",
      desc: "Deliver delightful customer support with zero hold times. AI employees answer FAQs, look up account details, guide users through workflows, and log tickets in Zendesk or Freshdesk.",
      capabilities: [
        "Sub-second answers grounded strictly in your verified documentation",
        "Zero hallucination guarantee with strict guardrails",
        "Order status, account lookups, and return processing",
        "24/7 international coverage across multiple languages",
        "Automated CSAT and customer sentiment tracking",
      ],
      idealFor: "E-commerce, Tech Platforms, Financial Services, Utilities",
      link: "/contact",
    },
    {
      id: "workflow-automation",
      title: "Workflow & CRM Automation",
      icon: <GitMerge className="w-7 h-7 text-[#00A3FF]" />,
      tagline: "End-to-End System Glue Connecting Telephony, CRM & Data",
      desc: "AI conversations are only as useful as the actions they take. We build robust webhook pipelines connecting your AI agents to Salesforce, HubSpot, GoHighLevel, Zapier, and internal databases.",
      capabilities: [
        "Bi-directional CRM property updates and deal stage moves",
        "Automated email and SMS nurture sequence triggers",
        "Document generation and electronic contract dispatch",
        "Custom REST API integrations and custom database webhooks",
        "Enterprise-grade security and SOC2-compliant data handling",
      ],
      idealFor: "Enterprises, Growing Agencies, Scaled Operations",
      link: "/contact",
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Services Hero */}
      <section className="pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="glow-spot w-96 h-96 bg-[#00A3FF]/20 -top-20 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <Badge variant="electric" icon={<Layers className="w-3.5 h-3.5" />}>
            COMPREHENSIVE AI SOLUTIONS
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            AI Automation Engineered to <br />
            <span className="text-gradient-electric">Scale Your Operations</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From natural voice phone agents to automated CRM data pipelines, HDM Tech deploys turnkey AI employees that reduce manual labor by 70%+ and generate pipeline 24/7.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setIsCalendlyOpen(true)}
              icon={<Calendar className="w-4 h-4" />}
            >
              Book a Solution Demo
            </Button>
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-[#00A3FF]/40 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#00A3FF]/10 border border-[#00A3FF]/30 flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#00A3FF] uppercase tracking-wider">
                    Service 0{index + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {service.title}
                  </h2>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    {service.tagline}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.desc}
                </p>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300">
                  <span className="font-semibold text-white">Ideal For: </span>
                  {service.idealFor}
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <Button
                    size="sm"
                    onClick={() => setIsCalendlyOpen(true)}
                    icon={<Calendar className="w-3.5 h-3.5" />}
                  >
                    Schedule Demo
                  </Button>
                  <Link href={service.link}>
                    <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                      Details
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 bg-black/40 border border-white/5 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#00A3FF]" />
                  Core Capabilities & Deliverables
                </h3>
                <ul className="space-y-3">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-2">
            <Badge variant="neutral">SEAMLESS INTEGRATION</Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Works with Your Existing Stack
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              HDM Tech plugs directly into your existing telephony numbers, CRMs, and communication tools. No messy migrations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-xs font-medium text-slate-300">
            {[
              "Twilio",
              "Salesforce",
              "HubSpot",
              "GoHighLevel",
              "Google Calendar",
              "Outlook",
              "Zendesk",
              "Slack",
            ].map((tool) => (
              <div
                key={tool}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-center hover:border-[#00A3FF] hover:text-white transition-all"
              >
                {tool}
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Button
              size="lg"
              onClick={() => setIsCalendlyOpen(true)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your Stack with an AI Engineer
            </Button>
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
