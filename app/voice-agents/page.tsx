"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mic,
  PhoneIncoming,
  PhoneOutgoing,
  Calendar,
  Sparkles,
  BarChart3,
  CheckCircle2,
  Database,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalendlyModal } from "@/components/ui/CalendlyModal";

export default function VoiceAgentsPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const voiceFeatures = [
    {
      title: "Inbound Call Automation",
      icon: <PhoneIncoming className="w-6 h-6 text-[#00A3FF]" />,
      desc: "Answer 100% of incoming telephone calls on the very first ring. Handle simultaneous callers with zero hold times, professional greeting protocols, and instant tier-1 resolution.",
      bullets: [
        "Eliminate hold queues and voicemail backlogs",
        "Handle after-hours and weekend call spikes",
        "Transfer emergency or VIP callers to specific staff",
      ],
    },
    {
      title: "Outbound AI Calling",
      icon: <PhoneOutgoing className="w-6 h-6 text-[#00A3FF]" />,
      desc: "Engage web form leads within 60 seconds of submission. Conduct outbound qualification cadences, appointment confirmation reminders, and reactivation of dormant prospects.",
      bullets: [
        "Sub-60-second speed-to-lead response",
        "Automated appointment confirmation & rescheduling",
        "Pre-qualify cold or inbound marketing leads",
      ],
    },
    {
      title: "Intelligent Lead Qualification",
      icon: <Zap className="w-6 h-6 text-[#00A3FF]" />,
      desc: "Dynamically vet prospects based on your custom BANT (Budget, Authority, Need, Timeline) requirements before assigning them to your high-ticket human closers.",
      bullets: [
        "Custom scripted conversational branching",
        "Detect objections and provide rebuttals",
        "Automatic lead scoring updated in CRM",
      ],
    },
    {
      title: "Direct Appointment Booking",
      icon: <Calendar className="w-6 h-6 text-[#00A3FF]" />,
      desc: "The AI agent consults your calendar in real-time, negotiates convenient time slots with the caller, books the appointment, and sends instant confirmation SMS and invites.",
      bullets: [
        "Direct Google Calendar & Outlook synchronization",
        "Automatic time zone detection and buffer rules",
        "Zero scheduling errors or double bookings",
      ],
    },
    {
      title: "Autonomous Customer Support",
      icon: <Shield className="w-6 h-6 text-[#00A3FF]" />,
      desc: "Solve 70%+ of routine customer service inquiries over the phone, including order status inquiries, business hours, directions, service pricing, and policy terms.",
      bullets: [
        "Strictly grounded in your approved documentation",
        "Multi-language support for international callers",
        "High customer satisfaction without hiring shifts",
      ],
    },
    {
      title: "Call Analytics & CRM Integration",
      icon: <Database className="w-6 h-6 text-[#00A3FF]" />,
      desc: "Every call generates an audio recording, time-stamped transcript, key summary bullets, and sentiment score—instantly pushed into your CRM and Slack.",
      bullets: [
        "Full call transcription & audio recording storage",
        "Salesforce, HubSpot, GoHighLevel & Zapier sync",
        "Sentiment analysis and conversion attribution",
      ],
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Voice Hero */}
      <section className="pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="glow-spot w-96 h-96 bg-[#00A3FF]/20 -top-20 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-5">
          <Badge variant="electric" icon={<Mic className="w-3.5 h-3.5" />}>
            NEXT-GEN TELEPHONY AUTOMATION
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Your Best Sales Representative <br />
            <span className="text-gradient-electric">Never Sleeps</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Deploy hyper-realistic AI Voice Agents that answer every inbound call, qualify prospect intent, schedule appointments, and follow up within seconds.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setIsCalendlyOpen(true)}
              icon={<PhoneCall className="w-4 h-4" />}
            >
              Book a Live Voice Demo Call
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get Custom Quote
              </Button>
            </Link>
          </div>

          <p className="text-xs text-slate-400">
            Sub-700ms latency • Human-grade speech cadence • Direct calendar & CRM integration
          </p>
        </div>
      </section>

      {/* Voice Architecture / Metrics Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#00A3FF] mb-1">
              &lt; 700ms
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
              Neural Response Latency
            </div>
            <p className="text-xs text-slate-400">
              Conversations feel natural, responsive, and human without awkward delays.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">
              100%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
              Call Answer Rate
            </div>
            <p className="text-xs text-slate-400">
              Handle 50+ concurrent incoming calls with zero busy signals or hold times.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
              390%+
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
              Conversion Boost
            </div>
            <p className="text-xs text-slate-400">
              Outbound callbacks within 60 seconds of web form submissions drive massive close rates.
            </p>
          </div>
        </div>
      </section>

      {/* Core Voice Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <Badge variant="neutral">ENTERPRISE TELEPHONY</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Comprehensive Voice Capabilities
          </h2>
          <p className="text-slate-400 text-sm">
            Everything your phone infrastructure needs to operate as a high-performing autonomous sales and support desk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {voiceFeatures.map((feat) => (
            <div
              key={feat.title}
              className="glass-panel glass-panel-hover p-7 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00A3FF]/10 border border-[#00A3FF]/25 flex items-center justify-center mb-4">
                  {feat.icon}
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

      {/* Direct CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#00A3FF]/30 bg-gradient-to-r from-[#080E20] via-[#040814] to-[#080E20] p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,163,255,0.15)]">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Want to Experience a Live AI Phone Call?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Book a 1-on-1 demo call. Our AI engineer will dial your phone right now so you can test conversational naturalness and custom qualification logic firsthand.
            </p>
            <div className="pt-2">
              <Button
                size="lg"
                onClick={() => setIsCalendlyOpen(true)}
                icon={<PhoneCall className="w-4 h-4" />}
              >
                Schedule Live Phone Demo
              </Button>
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
