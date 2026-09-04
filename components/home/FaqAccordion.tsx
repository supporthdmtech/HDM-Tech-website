"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is an AI Voice Agent?",
    answer:
      "An AI Voice Agent is an intelligent autonomous conversational system that conducts natural, human-sounding telephone conversations. Built on state-of-the-art low-latency voice synthesis and large language models, it understands nuance, answers questions, handles complex customer inquiries, qualifies prospect intent, and executes real-time actions like booking appointments or updating your CRM.",
  },
  {
    question: "How quickly can we launch?",
    answer:
      "Most HDM Tech AI employee deployments launch within 7 to 14 business days. This timeline includes our initial discovery strategy session, custom agent prompt and voice persona calibration, testing your knowledge base, and linking webhooks to your CRM, calendar, and telephony provider.",
  },
  {
    question: "Can AI integrate with our CRM?",
    answer:
      "Yes. HDM Tech integrates natively with all major CRMs and business platforms, including Salesforce, HubSpot, GoHighLevel, Zoho, Follow Up Boss, AthenaHealth, Clio, Slack, and Zapier/Make. Call recordings, transcripts, lead scores, and booked appointments automatically sync in real time.",
  },
  {
    question: "Do AI agents sound human?",
    answer:
      "Yes. We utilize enterprise neural voice engines calibrated with sub-second response latencies (under 700ms), realistic breathing, natural speech cadence, and intelligent interruption handling. Most callers cannot distinguish our voice agents from top-tier human representatives.",
  },
  {
    question: "Can the system book appointments?",
    answer:
      "Absolutely. The AI agent connects directly to your live calendar availability (Google Calendar, Outlook, Calendly, Cal.com, or CRM booking links). It verifies time slots, avoids double-booking, reserves the appointment, and immediately dispatches SMS and email calendar invites to both parties.",
  },
  {
    question: "How much does implementation cost?",
    answer:
      "We offer transparent, predictable packages starting from our Starter tier for growing startups up to custom Enterprise rollouts with dedicated telephony infrastructure and unlimited custom integrations. Check our Pricing page or book a quick strategy session to receive an exact tailored quote based on your call and interaction volumes.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-[#0A1022] border-[#00A3FF]/40 shadow-[0_0_25px_rgba(0,163,255,0.1)]"
                : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-white text-sm sm:text-base flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#00A3FF] shrink-0" />
                {faq.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                  isOpen ? "rotate-180 text-[#00A3FF]" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
