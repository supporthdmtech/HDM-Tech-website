"use client";

import React, { useState } from "react";
import { Clock, CheckCircle2, Video, ExternalLink, Calendar } from "lucide-react";
import { Button } from "./Button";

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
}

export function CalendlyEmbed({
  url = "https://calendly.com/support-hdmtech",
  className = "",
}: CalendlyEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Dark mode parameters tailored to HDM Tech theme
  const embedUrl = `${url}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=080d1a&text_color=ffffff&primary_color=00a3ff`;

  return (
    <div
      className={`relative w-full rounded-3xl border border-white/10 bg-[#080D1A]/95 backdrop-blur-xl shadow-[0_0_50px_rgba(0,163,255,0.08)] overflow-hidden ${className}`}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Side: Meeting Overview & Value Proposition */}
        <div className="lg:w-80 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between bg-black/40">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3FF]/10 text-[#00A3FF] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#00A3FF]/20">
              <span className="w-2 h-2 rounded-full bg-[#00A3FF] animate-pulse" />
              Live 1-on-1 Session
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              HDM Tech AI Strategy Session
            </h3>

            <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Meet directly with an AI Automation Engineer. We will analyze your workflows, identify high-ROI agent deployment opportunities, and demonstrate live voice & chat setups.
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#00A3FF] shrink-0" />
                <span>30-minute strategy call</span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="w-4 h-4 text-[#00A3FF] shrink-0" />
                <span>Google Meet video link</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tailored AI agent deployment blueprint</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all"
            >
              Open in Calendly <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="text-[11px] text-slate-400 text-center">
              Direct inquiries:{" "}
              <a
                href="mailto:support.hdmtech@gmail.com"
                className="text-[#00A3FF] hover:underline"
              >
                support.hdmtech@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Official Real Calendly Inline Frame */}
        <div className="flex-1 relative min-h-[650px] sm:min-h-[700px] bg-[#080D1A]">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#080D1A] z-10">
              <div className="w-8 h-8 rounded-full border-2 border-[#00A3FF] border-t-transparent animate-spin" />
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#00A3FF]" />
                Loading live calendar availability...
              </div>
            </div>
          )}

          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="HDM Tech Calendly Scheduler"
            onLoad={() => setIsLoading(false)}
            className="w-full h-full min-h-[650px] sm:min-h-[700px] border-0"
          />
        </div>
      </div>
    </div>
  );
}
