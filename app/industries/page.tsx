"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Stethoscope,
  Scale,
  Shield,
  UserCheck,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalendlyModal } from "@/components/ui/CalendlyModal";

export default function IndustriesPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const industries = [
    {
      id: "real-estate",
      title: "Real Estate Agencies & Brokerages",
      icon: <Building2 className="w-8 h-8 text-[#00A3FF]" />,
      challenge:
        "Agents are constantly showing homes or driving, leading to delayed responses to high-intent buyers, missed listing inquiries, and lost commissions.",
      solution:
        "AI Voice & Chat Agents that answer listing inquiries instantly, pre-qualify buyer budgets and pre-approval status, and schedule in-person tours directly on the agent's calendar.",
      workflow: [
        { label: "Trigger", text: "Buyer submits an inquiry on Zillow or website listing at 11:15 PM" },
        { label: "Action", text: "AI Voice Agent places instant outbound call within 45 seconds" },
        { label: "Vetting", text: "Confirms buyer budget ($800K), mortgage pre-approval, and 30-day timeline" },
        { label: "Resolution", text: "Books Saturday 10:30 AM tour into agent calendar & syncs to Follow Up Boss" },
      ],
      outcomes: [
        "Sub-60 second response to Zillow and website leads",
        "Pre-qualifies budget, timeline, and financing status",
        "Automated calendar booking for property walkthroughs",
      ],
      impact: "3X More Qualified Showings",
    },
    {
      id: "healthcare",
      title: "Healthcare Clinics & Dental Practices",
      icon: <Stethoscope className="w-8 h-8 text-[#00A3FF]" />,
      challenge:
        "Front-desk staff is overwhelmed with incoming phone calls, patient cancellations, and repetitive inquiries about insurance, office hours, and pre-op instructions.",
      solution:
        "HIPAA-conscious AI Voice Receptionists that handle inbound appointment bookings, send automated SMS reminders, answer clinic FAQs, and triage urgent calls.",
      workflow: [
        { label: "Trigger", text: "Patient calls Monday morning during peak clinic rush hours" },
        { label: "Action", text: "AI Receptionist answers on Ring 1: zero hold time or busy signal" },
        { label: "Vetting", text: "Verifies patient insurance carrier, reason for visit, and preferred doctor" },
        { label: "Resolution", text: "Locks in 30-min slot in EHR/Calendar and texts patient digital intake link" },
      ],
      outcomes: [
        "70%+ reduction in unanswered patient phone calls",
        "Zero hold times during peak morning hours",
        "Automated rescheduling and reminder cadences",
      ],
      impact: "50% Increase in Completed Bookings",
    },
    {
      id: "law-firms",
      title: "Law Firms & Legal Practices",
      icon: <Scale className="w-8 h-8 text-[#00A3FF]" />,
      challenge:
        "Prospective legal clients urgently call multiple firms. If an intake receptionist does not answer immediately, the client calls the next attorney on Google.",
      solution:
        "24/7 AI Legal Intake Agents that conduct preliminary case screening questions, check for conflicts, record detailed caller statements, and book paid consultations.",
      workflow: [
        { label: "Trigger", text: "Prospective personal injury client calls firm on Sunday evening" },
        { label: "Action", text: "AI Agent answers with empathetic, structured intake protocol" },
        { label: "Vetting", text: "Records incident date, police report, injuries, and opposing party" },
        { label: "Resolution", text: "Detects high-value case, schedules consultation & alerts senior partner" },
      ],
      outcomes: [
        "Immediate capture of after-hours and weekend injury leads",
        "Structured case summaries delivered directly to Clio or CRM",
        "Polished, empathetic, and professional legal tone",
      ],
      impact: "Zero Missed High-Value Retainers",
    },
    {
      id: "insurance",
      title: "Insurance Agencies & Brokerages",
      icon: <Shield className="w-8 h-8 text-[#00A3FF]" />,
      challenge:
        "Agents spend hours manually collecting policyholder information, quoting details, and chasing down renewals instead of closing new commercial policies.",
      solution:
        "AI Voice & Chat Employees that capture policy quote details, guide clients through initial First Notice of Loss (FNOL) documentation, and trigger renewal reminder calls.",
      workflow: [
        { label: "Trigger", text: "Customer requests commercial general liability quote online" },
        { label: "Action", text: "AI initiates phone or WhatsApp intake conversation" },
        { label: "Vetting", text: "Collects business revenue, payroll, location, and coverage limits" },
        { label: "Resolution", text: "Generates quote sheet in AgencyBloc/Salesforce and books broker call" },
      ],
      outcomes: [
        "Automated quote intake & preliminary risk categorization",
        "Outbound renewal notification and policy review calls",
        "Direct CRM sync with AMS360, AgencyBloc, or Salesforce",
      ],
      impact: "40% Less Administrative Overhead",
    },
    {
      id: "recruitment",
      title: "Recruitment & Staffing Agencies",
      icon: <UserCheck className="w-8 h-8 text-[#00A3FF]" />,
      challenge:
        "Recruiters spend countless hours dialing cold applicant lists, asking basic screening questions, and dealing with no-shows for initial phone interviews.",
      solution:
        "Outbound AI Voice Recruiters that call applicants within minutes of applying, verify availability, salary expectations, and key certifications, and book qualified talent.",
      workflow: [
        { label: "Trigger", text: "Candidate submits resume on job board for software role" },
        { label: "Action", text: "AI Recruiter calls candidate within 10 minutes to pre-screen" },
        { label: "Vetting", text: "Checks years of React/Node experience, visa status, and salary range" },
        { label: "Resolution", text: "Qualified candidate booked directly onto Senior Recruiter's calendar" },
      ],
      outcomes: [
        "Accelerate candidate screening from days to 15 minutes",
        "Standardized qualification questionnaires with audio logs",
        "Automated interview calendar booking for senior recruiters",
      ],
      impact: "5X Faster Time-to-Submit",
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Retail Brands",
      icon: <ShoppingBag className="w-8 h-8 text-[#00A3FF]" />,
      challenge:
        "High customer service ticket volumes regarding shipping tracking, return policies, and product queries strain human support teams during holiday surges.",
      solution:
        "Omnichannel AI Chat & WhatsApp Assistants that look up Shopify/WooCommerce tracking numbers, assist with exchanges, and recommend complementary products.",
      workflow: [
        { label: "Trigger", text: "Customer asks on WhatsApp: 'Where is order #48291?'" },
        { label: "Action", text: "AI queries Shopify API in 1.2 seconds" },
        { label: "Vetting", text: "Pulls tracking info from carrier: 'Out for delivery by 4 PM today'" },
        { label: "Resolution", text: "Answers customer immediately and offers 10% coupon on next order" },
      ],
      outcomes: [
        "Instant tier-1 resolution for 80%+ of repetitive tickets",
        "WhatsApp shipping updates and abandoned cart recovery",
        "Significant reduction in support team payroll costs",
      ],
      impact: "90% Faster Customer Resolution",
    },
    {
      id: "education",
      title: "Education & Training Institutions",
      icon: <GraduationCap className="w-8 h-8 text-[#00A3FF]" />,
      challenge:
        "Admissions teams receive thousands of inquiries regarding tuition, application deadlines, course prerequisites, and campus tours that require immediate response.",
      solution:
        "Intelligent AI Advisors that answer student inquiries 24/7 in multiple languages, guide applicants through prerequisites, and book campus tour visits.",
      workflow: [
        { label: "Trigger", text: "Prospective international student asks about MBA deadlines at 2 AM" },
        { label: "Action", text: "AI Advisor engages in student's native language on website chat" },
        { label: "Vetting", text: "Answers GMAT/TOEFL requirements, tuition, and financial aid options" },
        { label: "Resolution", text: "Registers student for virtual open house and syncs info to Slate CRM" },
      ],
      outcomes: [
        "Continuous 24/7 engagement for international prospective students",
        "Automated open-day and orientation registration tracking",
        "Integration with university CRMs (Slate, Salesforce Edu)",
      ],
      impact: "35% Increase in Tour Registrations",
    },
    {
      id: "service-businesses",
      title: "Service-Based Businesses & Contractors",
      icon: <Briefcase className="w-8 h-8 text-[#00A3FF]" />,
      challenge:
        "Home service contractors (HVAC, plumbing, roofing, electrical) miss dozens of high-value emergency calls while on jobsites, handing revenue directly to competitors.",
      solution:
        "24/7 AI Voice Dispatchers that answer emergency calls instantly, collect customer address and issue descriptions, and schedule technician diagnostic visits.",
      workflow: [
        { label: "Trigger", text: "Commercial kitchen water pipe bursts on a Saturday at 7 PM" },
        { label: "Action", text: "AI Voice Dispatcher picks up on Ring 1" },
        { label: "Vetting", text: "Takes address, confirms emergency rate authorization, notes shutoff valve" },
        { label: "Resolution", text: "Dispatches job into ServiceTitan and texts on-call plumbing tech" },
      ],
      outcomes: [
        "100% call capture rate during storms, holidays, and nights",
        "Direct integration with Housecall Pro, ServiceTitan, or Jobber",
        "SMS job dispatch notifications sent straight to field techs",
      ],
      impact: "$15K+ Recovered Monthly Revenue",
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="glow-spot w-96 h-96 bg-[#00A3FF]/20 -top-20 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <Badge variant="electric" icon={<Sparkles className="w-3.5 h-3.5" />}>
            INDUSTRY-SPECIFIC AI WORKFORCES
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Tailored AI Employees for <br />
            <span className="text-gradient-electric">Your Exact Industry</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Generic chatbots fail because they don&apos;t understand domain terminology or compliance. HDM Tech builds specialized AI Voice & Chat employees trained specifically on your industry&apos;s workflow.
          </p>

          <div className="pt-4 flex justify-center">
            <Button
              size="lg"
              onClick={() => setIsCalendlyOpen(true)}
              icon={<Calendar className="w-4 h-4" />}
            >
              Book an Industry Strategy Session
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Cards with Real Workflows */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-[#00A3FF]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#00A3FF]/10 border border-[#00A3FF]/25 flex items-center justify-center">
                    {ind.icon}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {ind.impact}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white">{ind.title}</h2>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-red-500/5 border border-red-500/20 text-slate-300">
                    <span className="font-semibold text-red-400">The Problem: </span>
                    {ind.challenge}
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#00A3FF]/5 border border-[#00A3FF]/20 text-slate-300">
                    <span className="font-semibold text-[#00A3FF]">HDM Tech Solution: </span>
                    {ind.solution}
                  </div>
                </div>

                {/* Real Example Workflow Timeline */}
                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5 text-[#00A3FF]" />
                    Real Example Workflow:
                  </div>
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2.5 text-xs">
                    {ind.workflow.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5">
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#00A3FF]/20 text-[#00A3FF] shrink-0 border border-[#00A3FF]/30">
                          {step.label}
                        </span>
                        <span className="text-slate-300">{step.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Key Outcomes Delivered:
                  </div>
                  <ul className="space-y-1.5">
                    {ind.outcomes.map((out, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setIsCalendlyOpen(true)}
                  className="text-xs font-semibold text-[#00A3FF] hover:underline inline-flex items-center gap-1"
                >
                  Schedule Demo for {ind.title.split(" ")[0]} →
                </button>
                <Link
                  href="/contact"
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Custom Scope
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Don&apos;t See Your Exact Industry Listed?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Our AI architecture is completely modular. If your business interacts with customers via telephone, chat, or forms, we can automate your workflow.
          </p>
          <div className="pt-2">
            <Button
              size="lg"
              onClick={() => setIsCalendlyOpen(true)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your Custom Workflow
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
