"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Bot,
  Zap,
  CheckCircle2,
  Calendar,
  Globe,
  ArrowRight,
  ShieldCheck,
  Send,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalendlyModal } from "@/components/ui/CalendlyModal";

export default function ChatAssistantsPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const chatFeatures = [
    {
      title: "Interactive Website Chatbots",
      desc: "Turn casual website visitors into qualified pipeline. Our conversational chat widgets greet users proactively, understand buyer intent, and guide them directly to conversion.",
      bullets: [
        "Smart proactive greetings based on visited page URL",
        "Sub-second answer retrieval from your documentation",
        "Mobile-optimized responsive floating widget",
      ],
    },
    {
      title: "WhatsApp Automation",
      desc: "Connect your official WhatsApp Business API to intelligent AI agents. Answer customer queries, send reminders, qualify leads, and close deals directly on the world's most popular messaging app.",
      bullets: [
        "Official Meta / WhatsApp Cloud API integration",
        "Rich media support: PDFs, images, location pins",
        "24/7 automated replies with human agent escalation",
      ],
    },
    {
      title: "Autonomous Lead Capture & Scoring",
      desc: "Collect verified emails, phone numbers, and company budgets naturally within the conversation flow before pushing qualified prospects into your CRM.",
      bullets: [
        "Eliminate long static forms that cause drop-offs",
        "Dynamic question branching based on prospect answers",
        "Instant lead notification via Slack and email",
      ],
    },
    {
      title: "24/7 AI Customer Support",
      desc: "Resolve routine customer inquiries instantly without human intervention. From shipping status and refund policies to software guidance, your AI assistant delivers accurate, grounded answers.",
      bullets: [
        "Strict anti-hallucination guardrails",
        "Instant lookup via internal APIs and webhooks",
        "Multi-language support for international audiences",
      ],
    },
    {
      title: "Intelligent FAQ Automation",
      desc: "Sync your Notion, Zendesk, Google Docs, or PDF knowledge bases. The AI assistant indexes your content to answer even complex multi-part questions effortlessly.",
      bullets: [
        "Continuous self-updating knowledge base sync",
        "Cites exact document sources for verification",
        "Flags unanswered questions for content gaps",
      ],
    },
    {
      title: "Omnichannel Messaging",
      desc: "Provide a unified conversational experience across your website, WhatsApp, Instagram DMs, Facebook Messenger, and SMS from a single centralized brain.",
      bullets: [
        "Unified customer memory across all platforms",
        "Seamless context handoff to human support agents",
        "Comprehensive conversation history and analytics",
      ],
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="glow-spot w-96 h-96 bg-[#00A3FF]/20 -top-20 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-5">
          <Badge variant="electric" icon={<MessageSquare className="w-3.5 h-3.5" />}>
            OMNICHANNEL CONVERSATIONAL AI
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Turn Website Visitors <br />
            <span className="text-gradient-electric">Into Paying Customers</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Deploy 24/7 AI Chat Assistants across your website and WhatsApp that answer questions, qualify prospects, and book calendar appointments in real-time.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setIsCalendlyOpen(true)}
              icon={<Calendar className="w-4 h-4" />}
            >
              Book an Assistant Demo
            </Button>
            <a
              href="https://wa.me/919711327023?text=Hi%20HDM%20Tech%2C%20I%20want%20to%20test%20your%20WhatsApp%20AI%20Assistant."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" icon={<Send className="w-4 h-4" />}>
                Test on WhatsApp
              </Button>
            </a>
          </div>

          <p className="text-xs text-slate-400">
            Official WhatsApp API • Web Widget • CRM Sync • Zero Hallucinations
          </p>
        </div>
      </section>

      {/* Chat Highlights / Value Props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#00A3FF] mb-1">
              &lt; 2 Sec
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
              Instant Web Response
            </div>
            <p className="text-xs text-slate-400">
              Engage visitors before they bounce or navigate away to a competitor.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">
              +45%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
              More Leads Captured
            </div>
            <p className="text-xs text-slate-400">
              Interactive chat converts 3x higher than passive contact web forms.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
              24/7/365
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
              Continuous Operation
            </div>
            <p className="text-xs text-slate-400">
              Your business stays open across all global time zones automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <Badge variant="neutral">ENTERPRISE CHAT STACK</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineered for High-Converting Conversations
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to automate web support, WhatsApp sales outreach, and appointment booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chatFeatures.map((feat) => (
            <div
              key={feat.title}
              className="glass-panel glass-panel-hover p-7 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00A3FF]/10 border border-[#00A3FF]/25 flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-[#00A3FF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {feat.desc}
                </p>
                <ul className="space-y-2 pt-2 border-t border-white/5">
                  {feat.bullets.map((b, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Deploy an AI Chat Assistant on Your Site?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Get a custom-branded widget tailored to your color palette, branding guidelines, and specific FAQ knowledge base in less than 7 days.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setIsCalendlyOpen(true)}
              icon={<Calendar className="w-4 h-4" />}
            >
              Schedule Strategy Session
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Request Custom Proposal
              </Button>
            </Link>
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
