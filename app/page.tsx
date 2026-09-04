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
  Sparkles,
  Zap,
  CheckCircle2,
  Clock,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Building2,
  Stethoscope,
  Scale,
  Shield,
  UserCheck,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  Play,
  Server,
  Lock,
  Cpu,
  Flame,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalendlyModal } from "@/components/ui/CalendlyModal";
import { CalendlyEmbed } from "@/components/ui/CalendlyEmbed";
import { RoiCalculator } from "@/components/shared/RoiCalculator";
import { ContactForm } from "@/components/shared/ContactForm";
import { FaqAccordion } from "@/components/home/FaqAccordion";

export default function HomePage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<"realestate" | "healthcare" | "legal" | "contractor">("realestate");

  // 6 Services
  const services = [
    {
      id: "voice-agents",
      title: "AI Voice Agents",
      icon: <PhoneCall className="w-6 h-6 text-[#00A3FF]" />,
      desc: "Human-like AI agents that answer calls, qualify leads, schedule appointments, and provide real-time support.",
      badge: "Sub-Second Latency",
      link: "/voice-agents",
    },
    {
      id: "chat-assistants",
      title: "AI Chat Assistants",
      icon: <MessageSquare className="w-6 h-6 text-[#00A3FF]" />,
      desc: "24/7 intelligent website assistants that engage visitors, answer questions, and convert leads.",
      badge: "Omnichannel Support",
      link: "/chat-assistants",
    },
    {
      id: "lead-qualification",
      title: "Lead Qualification Automation",
      icon: <Filter className="w-6 h-6 text-[#00A3FF]" />,
      desc: "Automatically identify and score high-intent leads before your sales team gets involved.",
      badge: "Zero Lead Leakage",
      link: "/services#lead-qualification",
    },
    {
      id: "appointment-booking",
      title: "Appointment Booking Automation",
      icon: <CalendarCheck className="w-6 h-6 text-[#00A3FF]" />,
      desc: "Schedule meetings directly into your team's calendar without manual intervention.",
      badge: "Calendar Sync",
      link: "/services#appointment-booking",
    },
    {
      id: "customer-support",
      title: "Customer Support Automation",
      icon: <Headphones className="w-6 h-6 text-[#00A3FF]" />,
      desc: "Reduce response times while delivering exceptional customer experiences.",
      badge: "24/7/365 Uptime",
      link: "/services#support-automation",
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      icon: <GitMerge className="w-6 h-6 text-[#00A3FF]" />,
      desc: "Connect CRMs, forms, email systems, and business tools into automated workflows.",
      badge: "End-to-End Pipeline",
      link: "/services#workflow-automation",
    },
  ];

  // 8 Target Industries
  const industries = [
    {
      name: "Real Estate Agencies",
      icon: <Building2 className="w-5 h-5 text-[#00A3FF]" />,
      desc: "Instant property inquiries, buyer pre-qualification, and automated open house tour bookings.",
    },
    {
      name: "Healthcare Clinics",
      icon: <Stethoscope className="w-5 h-5 text-[#00A3FF]" />,
      desc: "Patient appointment scheduling, pre-op reminders, insurance verification, and triage.",
    },
    {
      name: "Law Firms",
      icon: <Scale className="w-5 h-5 text-[#00A3FF]" />,
      desc: "24/7 client intake, case screening, conflict check questions, and consultation scheduling.",
    },
    {
      name: "Insurance Companies",
      icon: <Shield className="w-5 h-5 text-[#00A3FF]" />,
      desc: "Policy quote requests, initial claim intake, FNOL documentation, and renewal alerts.",
    },
    {
      name: "Recruitment Agencies",
      icon: <UserCheck className="w-5 h-5 text-[#00A3FF]" />,
      desc: "Automated candidate screening, skill qualification questionnaires, and interview bookings.",
    },
    {
      name: "E-commerce Stores",
      icon: <ShoppingBag className="w-5 h-5 text-[#00A3FF]" />,
      desc: "Order tracking, returns assistance, product recommendations, and cart recovery.",
    },
    {
      name: "Education Institutions",
      icon: <GraduationCap className="w-5 h-5 text-[#00A3FF]" />,
      desc: "Student admissions inquiries, course requirements, open day registrations, and FAQs.",
    },
    {
      name: "Service-Based Businesses",
      icon: <Briefcase className="w-5 h-5 text-[#00A3FF]" />,
      desc: "Emergency call dispatching, quote estimation, calendar booking, and customer care.",
    },
  ];

  // Workflows per industry
  const workflows = {
    realestate: {
      title: "Real Estate Inbound Lead to Showing Tour",
      trigger: "Buyer submits an inquiry on Zillow or website listing at 10:45 PM",
      steps: [
        { title: "Instant Call (<45s)", desc: "AI Voice Agent dials prospect: 'Hi Alex, saw you were looking at the 4-bed listing on Maple Ave...'" },
        { title: "BANT Qualification", desc: "Verifies pre-approval status ($750k budget), move-in timeline (within 60 days), and current home status." },
        { title: "Calendar Booking", desc: "Checks listing agent's live Google Calendar, books Saturday 11:00 AM private showing, sends calendar invite." },
        { title: "CRM Sync & Alert", desc: "Creates contact in Follow Up Boss / HubSpot with full audio recording, notes, and sends priority SMS to agent." },
      ],
      result: "Lead captured & booked in 3 minutes while competitors are asleep.",
    },
    healthcare: {
      title: "Healthcare Clinic Patient Intake & Booking",
      trigger: "Patient calls clinic during Monday morning call peak or after hours",
      steps: [
        { title: "Zero Wait Answer", desc: "AI answers on Ring 1: 'Thank you for calling City Health. Are you booking a new or follow-up visit?'" },
        { title: "Insurance & Reason Check", desc: "Collects symptoms, insurance carrier (BlueCross), policy ID, and preferred doctor." },
        { title: "EHR / Calendar Sync", desc: "Queries AthenaHealth/Kareo for available 30-min doctor slots, locks in Wednesday 2:00 PM." },
        { title: "Confirmation & Intake SMS", desc: "Sends patient calendar confirmation + secure digital intake form link via SMS." },
      ],
      result: "Zero dropped patient calls. Front-desk staff freed from booking queues.",
    },
    legal: {
      title: "Law Firm Emergency Personal Injury Intake",
      trigger: "Prospective client calls law firm after vehicle accident at 9:15 PM",
      steps: [
        { title: "Empathetic Intake", desc: "AI receptionist answers immediately with calm, professional legal intake protocol." },
        { title: "Accident Screening", desc: "Gathers date of incident, injury severity, police report number, and other driver insurance details." },
        { title: "Conflict of Interest Check", desc: "Runs preliminary check against opposing party name in database webhooks." },
        { title: "Managing Partner Dispatch", desc: "High-value case detected: AI books consultation and immediately routes emergency alert to on-call attorney." },
      ],
      result: "Client retained within 10 minutes before contacting another firm on Google.",
    },
    contractor: {
      title: "Emergency HVAC / Home Services Dispatch",
      trigger: "Homeowner calls on Sunday afternoon with AC failure in 95°F heat",
      steps: [
        { title: "Immediate Response", desc: "AI Voice Dispatcher picks up instantly: 'Comfort Air 24/7 Emergency Dispatch, how can we help?'" },
        { title: "Diagnostic & Address Intake", desc: "Captures homeowner address, AC unit brand/age, error codes, and verifies emergency dispatch fee authorization." },
        { title: "Field Tech Dispatch", desc: "Pushes job ticket into ServiceTitan/Jobber and matches nearest available on-call technician." },
        { title: "Customer Reassurance SMS", desc: "Sends homeowner live dispatch confirmation: 'Technician Dave is en route (ETA: 45 mins)'." },
      ],
      result: "$1,800 emergency service ticket secured with zero staff on Sunday.",
    },
  };

  // Why HDM Tech 6 Benefits
  const benefits = [
    {
      title: "24/7 Availability",
      desc: "Never miss a customer inquiry. While competitors are closed, your AI employee captures and qualifies every late-night lead.",
      icon: <Clock className="w-5 h-5 text-[#00A3FF]" />,
    },
    {
      title: "Instant Responses",
      desc: "Respond within seconds. Speed-to-lead under 5 seconds increases sales conversion likelihood by more than 391%.",
      icon: <Zap className="w-5 h-5 text-[#00A3FF]" />,
    },
    {
      title: "Lower Operating Costs",
      desc: "Reduce repetitive human workloads. Cut customer service and call intake expenses by up to 70% with autonomous agents.",
      icon: <DollarSign className="w-5 h-5 text-[#00A3FF]" />,
    },
    {
      title: "Higher Conversion Rates",
      desc: "Capture and convert leads automatically. Intelligent qualification ensures only sales-ready opportunities reach your closers.",
      icon: <TrendingUp className="w-5 h-5 text-[#00A3FF]" />,
    },
    {
      title: "Scalable Operations",
      desc: "Handle thousands of conversations simultaneously. Zero busy tones, zero wait times, and zero dropped calls during peak spikes.",
      icon: <Sparkles className="w-5 h-5 text-[#00A3FF]" />,
    },
    {
      title: "Data-Driven Insights",
      desc: "Gain actionable business intelligence. Every interaction generates complete transcripts, customer sentiment analysis, and CRM sync.",
      icon: <ShieldCheck className="w-5 h-5 text-[#00A3FF]" />,
    },
  ];

  // How it works 4 steps
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "We analyze your communication channels, call recordings, repetitive bottlenecks, and CRM architecture to blueprint high-impact AI agents.",
    },
    {
      step: "02",
      title: "Build & Train AI Agents",
      desc: "We configure your custom LLM logic, voice personas, objection handling scripts, and proprietary knowledge base with strict guardrails.",
    },
    {
      step: "03",
      title: "Integrate with Business Systems",
      desc: "We wire live two-way synchronization into your CRM, telephony numbers, Google/Outlook calendars, and notification webhooks.",
    },
    {
      step: "04",
      title: "Launch & Optimize",
      desc: "We run simulated quality audits, launch the live agents, and continuously monitor sentiment, latency, and conversion efficiency.",
    },
  ];

  const techPartners = [
    "Twilio Voice",
    "OpenAI Models",
    "ElevenLabs Neural Voice",
    "Meta WhatsApp Cloud API",
    "Google & Outlook Calendar",
    "HubSpot & Salesforce CRM",
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Ambient background glows */}
        <div className="glow-spot w-96 h-96 bg-[#00A3FF]/20 -top-10 left-1/2 -translate-x-1/2" />
        <div className="glow-spot w-64 h-64 bg-[#0A84FF]/15 top-1/3 -left-20" />

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <Badge
            variant="electric"
            icon={<Sparkles className="w-3.5 h-3.5 text-[#00A3FF]" />}
          >
            HDM TECH AI AUTOMATION AGENCY
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Deploy AI Employees That <br className="hidden sm:inline" />
            <span className="text-gradient-electric">Work 24/7</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Transform customer conversations with intelligent AI Voice Agents and AI Assistants that answer questions, qualify leads, book appointments, and close opportunities around the clock.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setIsCalendlyOpen(true)}
              icon={<CalendarCheck className="w-5 h-5" />}
              className="w-full sm:w-auto text-base shadow-[0_0_35px_rgba(0,163,255,0.4)]"
            >
              Book a Free Demo
            </Button>
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                icon={<Play className="w-4 h-4 text-[#00A3FF]" />}
                className="w-full sm:w-auto text-base"
              >
                Explore AI Solutions
              </Button>
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 pt-2 font-medium">
            Trusted by growing businesses looking to automate customer interactions and accelerate growth.
          </p>

          {/* Floating UI cards / AI Employee Status Display */}
          <div className="pt-10 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 shadow-[0_0_40px_rgba(0,0,0,0.8)] grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 border border-white/5">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Voice Agent Active
                  </div>
                  <div className="text-xs font-bold text-white">
                    Inbound Lead Qualified
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 border border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#00A3FF] shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Response Speed
                  </div>
                  <div className="text-xs font-bold text-[#00A3FF]">
                    0.75s Neural Latency
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 border border-white/5">
                <div className="w-3 h-3 rounded-full bg-purple-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Calendar Sync
                  </div>
                  <div className="text-xs font-bold text-purple-300">
                    Direct CRM Integration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ENTERPRISE INTEGRATIONS & INFRASTRUCTURE SECTION
          ========================================================================= */}
      <section className="border-y border-white/10 bg-black/50 py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Enterprise Telephony & AI Infrastructure Integrations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {techPartners.map((partner) => (
              <span
                key={partner}
                className="text-sm sm:text-base font-semibold text-slate-300 tracking-tight hover:text-[#00A3FF] transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. BUSINESS OUTCOMES SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="neutral">MEASURABLE IMPACT</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Business Outcomes That Drive Revenue
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Replace manual call routing and slow contact forms with proactive, revenue-generating autonomous AI employees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl">
            <div className="text-3xl font-extrabold text-[#00A3FF] mb-2">24/7/365</div>
            <div className="font-bold text-white text-base mb-1">Zero Missed Inquiries</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Never let a prospect slip to a competitor because your office is closed or lines are busy.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl">
            <div className="text-3xl font-extrabold text-emerald-400 mb-2">&lt; 5 Sec</div>
            <div className="font-bold text-white text-base mb-1">Instant Speed-to-Lead</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Engage web visitors and phone inquiries in seconds while buying interest is at its absolute peak.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl">
            <div className="text-3xl font-extrabold text-white mb-2">70%+</div>
            <div className="font-bold text-white text-base mb-1">Cost Reduction</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automate repetitive tier-1 questions and scheduling so your core team focuses strictly on high-value closing.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl">
            <div className="text-3xl font-extrabold text-[#0A84FF] mb-2">3X More</div>
            <div className="font-bold text-white text-base mb-1">Qualified Bookings</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Structured conversation flows qualify budget, timeline, and need before placing meetings on your calendar.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NEW SECTION: WHY AI NOW? (The Inflection Point)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#00A3FF]/20 bg-gradient-to-b from-[#081024] to-[#040814] p-8 sm:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,163,255,0.08)]">
          <div className="glow-spot w-72 h-72 bg-[#00A3FF]/15 -top-20 -right-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3FF]/10 text-[#00A3FF] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#00A3FF]/20">
              <Flame className="w-3.5 h-3.5 text-[#00A3FF]" />
              The Market Inflection Point
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why AI Automation Now?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              Customer expectations have permanently changed. The businesses winning today aren&apos;t just working harder—they have deployed autonomous systems that respond in seconds.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-2xl font-bold text-[#00A3FF] mb-2">&lt; 700ms Latency</div>
              <h3 className="font-bold text-white text-sm mb-1.5">Voice AI Finally Sounds Human</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Old robotic phone trees drove customers away. In 2026, neural voice synthesis achieves human cadence, natural tone, and real-time interruption handling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-2xl font-bold text-emerald-400 mb-2">391% Lift</div>
              <h3 className="font-bold text-white text-sm mb-1.5">The Speed-to-Lead Asymmetry</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reaching a lead within 60 seconds increases conversion by over 391%. Waiting even 30 minutes drops qualifying probability by 80%.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-2xl font-bold text-purple-400 mb-2">$55K+ Overhead</div>
              <h3 className="font-bold text-white text-sm mb-1.5">Rising Labor & Turnover Costs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hiring, training, and retaining front-desk receptionists has never been more costly. AI employees work nights, weekends, and holidays with zero churn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NEW SECTION: REAL EXAMPLE WORKFLOWS PER INDUSTRY
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <Badge variant="electric">PROVEN ARCHITECTURE</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Example AI Workflows
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See exactly how HDM Tech AI employees execute end-to-end conversations, qualifying logic, and CRM actions in real-world scenarios.
          </p>
        </div>

        {/* Workflow Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "realestate", label: "Real Estate Showing Flow" },
            { id: "healthcare", label: "Healthcare Intake & Booking" },
            { id: "legal", label: "Legal Injury Case Triage" },
            { id: "contractor", label: "Emergency Contractor Dispatch" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveWorkflowTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeWorkflowTab === tab.id
                  ? "bg-[#00A3FF] text-white shadow-[0_0_20px_rgba(0,163,255,0.4)]"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Workflow Display */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {workflows[activeWorkflowTab].title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                <span className="text-[#00A3FF] font-semibold">Trigger Event: </span>
                {workflows[activeWorkflowTab].trigger}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium shrink-0">
              <Check className="w-3.5 h-3.5" />
              Fully Autonomous
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {workflows[activeWorkflowTab].steps.map((st, i) => (
              <div key={i} className="p-4 rounded-2xl bg-black/40 border border-white/5">
                <div className="text-[11px] font-bold text-[#00A3FF] uppercase tracking-wider mb-1">
                  Step 0{i + 1}
                </div>
                <div className="font-bold text-white text-sm mb-1.5">{st.title}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#00A3FF]/10 border border-[#00A3FF]/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="text-slate-200">
              <span className="font-bold text-[#00A3FF]">Outcome: </span>
              {workflows[activeWorkflowTab].result}
            </div>
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="text-white font-semibold hover:text-[#00A3FF] flex items-center gap-1 shrink-0"
            >
              Deploy This Flow <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. INDUSTRIES SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <Badge variant="electric">BUILT FOR SCALE</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Industries We Automate
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Specialized conversational agents pre-trained on domain workflows, compliance requirements, and business logic.
            </p>
          </div>
          <Link href="/industries">
            <Button variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              View All Industries
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#00A3FF]/10 border border-[#00A3FF]/20 flex items-center justify-center mb-3">
                  {ind.icon}
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">{ind.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
              </div>
              <div className="pt-4 mt-3 border-t border-white/5">
                <Link
                  href="/industries"
                  className="text-xs font-semibold text-[#00A3FF] hover:underline inline-flex items-center gap-1"
                >
                  Learn industry playbook →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. SERVICES SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="electric">CORE CAPABILITIES</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Solutions Designed to Scale Your Business
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From natural voice conversations to CRM data synchronization, HDM Tech engineers your complete automated workforce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00A3FF]/10 border border-[#00A3FF]/25 flex items-center justify-center">
                    {srv.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {srv.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={srv.link}
                  className="text-xs font-semibold text-[#00A3FF] hover:text-[#38bdf8] inline-flex items-center gap-1"
                >
                  Explore Features <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => setIsCalendlyOpen(true)}
                  className="text-[11px] text-slate-400 hover:text-white"
                >
                  Request Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. HOW IT WORKS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="neutral">PROVEN BLUEPRINT</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How HDM Tech Delivers AI Success
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A frictionless 4-stage implementation framework delivering reliable, production-ready AI agents in under 14 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st) => (
            <div
              key={st.step}
              className="glass-panel p-6 rounded-2xl border border-white/10 relative"
            >
              <div className="text-2xl font-black text-[#00A3FF] mb-3">
                {st.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. WHY HDM TECH
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="electric">ENTERPRISE ADVANTAGE</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Businesses Choose HDM Tech
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We don&apos;t just build chatbots. We engineer autonomous AI voice and chat employees that think, remember, and act directly in your business systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="glass-panel glass-panel-hover p-6 rounded-2xl"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00A3FF]/10 border border-[#00A3FF]/25 flex items-center justify-center mb-4">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">{b.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          NEW SECTION: FOUNDER & COMPANY CREDIBILITY
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="neutral">ENGINEERING CREDIBILITY</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Built by Systems Engineers, <br />
                <span className="text-gradient-electric">Not Marketing Agencies</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Most agencies paste together no-code tools that break under real customer loads. HDM Tech was founded by software and AI systems engineers with a single focus: building robust, low-latency, mission-critical voice & chat infrastructure.
              </p>
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict anti-hallucination guardrails and deterministic fallbacks</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SOC-2 ready data encryption in transit and at rest</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated solutions architect assigned to every account</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-black/50 border border-white/10 text-center">
                <Server className="w-7 h-7 text-[#00A3FF] mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">&lt; 700ms</div>
                <div className="text-xs text-slate-400">Mean Neural Latency</div>
              </div>

              <div className="p-5 rounded-2xl bg-black/50 border border-white/10 text-center">
                <Lock className="w-7 h-7 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">256-Bit</div>
                <div className="text-xs text-slate-400">End-to-End Encryption</div>
              </div>

              <div className="p-5 rounded-2xl bg-black/50 border border-white/10 text-center">
                <Cpu className="w-7 h-7 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-slate-400">Telephony Uptime SLA</div>
              </div>

              <div className="p-5 rounded-2xl bg-black/50 border border-white/10 text-center">
                <ShieldCheck className="w-7 h-7 text-[#0A84FF] mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Zero</div>
                <div className="text-xs text-slate-400">Vendor Lock-in</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. ROI CALCULATOR
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoiCalculator onBookDemo={() => setIsCalendlyOpen(true)} />
      </section>

      {/* =========================================================================
          8. FAQ SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="neutral">ANSWERS & CLARITY</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about implementing AI Voice Agents and Chat Assistants for your organization.
          </p>
        </div>

        <FaqAccordion />
      </section>

      {/* =========================================================================
          9. CONTACT / BOOK DEMO SECTION
          ========================================================================= */}
      <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="electric">TAKE ACTION TODAY</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Deploy Your 24/7 AI Employees?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Schedule a live 30-minute demonstration or submit your company information below to receive a custom AI implementation blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Calendly Live Embed */}
          <div className="lg:col-span-7">
            <CalendlyEmbed />
          </div>

          {/* Clean Contact Form */}
          <div className="lg:col-span-5">
            <ContactForm source="Homepage Contact Section" />
          </div>
        </div>
      </section>

      {/* Calendly Modal Trigger */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </div>
  );
}
