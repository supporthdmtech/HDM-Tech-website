import React from "react";
import Link from "next/link";
import { Bot, Mail, Phone, MessageSquare } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative border-t border-white/10 bg-[#03060D] text-slate-400 text-sm overflow-hidden">
      {/* Background glow spot */}
      <div className="glow-spot w-96 h-96 bg-[#00A3FF]/10 -bottom-32 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#00A3FF] to-[#0A84FF] flex items-center justify-center text-black font-extrabold shadow-[0_0_15px_rgba(0,163,255,0.4)]">
                <Bot className="w-4 h-4 text-black" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                HDM Tech
              </span>
            </Link>
            <p className="text-slate-300 text-sm font-medium">
              AI Employees That Work 24/7
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              We help ambitious businesses scale customer support, lead qualification, appointment booking, and inbound/outbound calling with intelligent AI Voice Agents and AI Chat Assistants.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white hover:border-[#00A3FF] transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current text-[#00A3FF]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                </svg>
                <span>HDM Tech on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Core Solutions */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              AI Solutions
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/voice-agents"
                  className="hover:text-white transition-colors"
                >
                  AI Voice Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/chat-assistants"
                  className="hover:text-white transition-colors"
                >
                  AI Chat Assistants
                </Link>
              </li>
              <li>
                <Link
                  href="/services#lead-qualification"
                  className="hover:text-white transition-colors"
                >
                  Lead Qualification
                </Link>
              </li>
              <li>
                <Link
                  href="/services#appointment-booking"
                  className="hover:text-white transition-colors"
                >
                  Appointment Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/services#support-automation"
                  className="hover:text-white transition-colors"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services#workflow-automation"
                  className="hover:text-white transition-colors"
                >
                  Workflow Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Industries Served
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/industries#real-estate"
                  className="hover:text-white transition-colors"
                >
                  Real Estate Agencies
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#healthcare"
                  className="hover:text-white transition-colors"
                >
                  Healthcare Clinics
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#law-firms"
                  className="hover:text-white transition-colors"
                >
                  Law Firms
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#insurance"
                  className="hover:text-white transition-colors"
                >
                  Insurance Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#recruitment"
                  className="hover:text-white transition-colors"
                >
                  Recruitment Agencies
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#ecommerce"
                  className="hover:text-white transition-colors"
                >
                  E-commerce & Retail
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Booking */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h5>
            <div className="space-y-2.5 text-xs">
              <a
                href="mailto:support.hdmtech@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-[#00A3FF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00A3FF]" />
                <span>support.hdmtech@gmail.com</span>
              </a>
              <a
                href="tel:+919711327023"
                className="flex items-center gap-2 text-slate-300 hover:text-[#00A3FF] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00A3FF]" />
                <span>+91 97113 27023</span>
              </a>
              <a
                href="https://wa.me/919711327023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-[#25D366] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp AI Desk</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/30 text-xs font-semibold hover:bg-[#00A3FF]/20 transition-all"
              >
                Schedule Demo Session →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} HDM Tech. All Rights Reserved. AI Employees That Work 24/7.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="hover:text-slate-300 transition-colors">
              Pricing Plans
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Schedule Consultation
            </Link>
            <span className="text-slate-600">Enterprise AI Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
