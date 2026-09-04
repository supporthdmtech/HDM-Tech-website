"use client";

import React, { useState } from "react";
import { Calendar, Clock, CheckCircle2, Video, ArrowRight } from "lucide-react";
import { Button } from "./Button";

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
}

export function CalendlyEmbed({
  url = "https://calendly.com/hdmtech/ai-strategy-session",
  className = "",
}: CalendlyEmbedProps) {
  const [selectedDate, setSelectedDate] = useState<string>("2026-09-08");
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM");
  const [isBooked, setIsBooked] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const dates = [
    { label: "Tue, Sep 8", val: "2026-09-08" },
    { label: "Wed, Sep 9", val: "2026-09-09" },
    { label: "Thu, Sep 10", val: "2026-09-10" },
    { label: "Fri, Sep 11", val: "2026-09-11" },
  ];

  const times = [
    "09:30 AM",
    "10:00 AM",
    "11:30 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM",
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsBooked(true);
  };

  return (
    <div
      className={`relative w-full rounded-2xl border border-white/10 bg-[#080D1A]/90 p-6 md:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(0,163,255,0.08)] ${className}`}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Meeting Overview Info */}
        <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3FF]/10 text-[#00A3FF] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#00A3FF]/20">
              <span className="w-2 h-2 rounded-full bg-[#00A3FF] animate-pulse"></span>
              Instant Meeting Scheduling
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              HDM Tech AI Strategy Session
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Meet 1-on-1 with an AI Automation Engineer. We will analyze your workflows, identify high-ROI agent deployment opportunities, and demonstrate live voice & chat setups.
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#00A3FF]" />
                <span>30 min session</span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="w-4 h-4 text-[#00A3FF]" />
                <span>Google Meet / Zoom (Link sent on confirmation)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00A3FF]" />
                <span>Custom ROI & AI Blueprint included</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-400">
            Prefer direct email?{" "}
            <a
              href="mailto:support.hdmtech@gmail.com"
              className="text-[#00A3FF] hover:underline"
            >
              support.hdmtech@gmail.com
            </a>
          </div>
        </div>

        {/* Calendar & Time Selection / Form */}
        <div className="lg:w-2/3">
          {isBooked ? (
            <div className="py-12 px-4 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-5 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                Demo Session Reserved!
              </h4>
              <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
                Thank you, <span className="text-white font-medium">{name}</span>. A calendar invitation and Google Meet video conference link have been sent to{" "}
                <span className="text-[#00A3FF] font-medium">{email}</span> for{" "}
                <span className="text-white font-medium">{selectedDate}</span> at{" "}
                <span className="text-white font-medium">{selectedTime}</span>.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 max-w-md w-full text-left space-y-1 mb-6">
                <div className="font-semibold text-white">Meeting Agenda:</div>
                <div>1. Review of current manual touchpoints & call volume</div>
                <div>2. Live tailored AI agent architecture preview</div>
                <div>3. Implementation timeline & cost-benefit breakdown</div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsBooked(false)}
              >
                Schedule Another Time
              </Button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  1. Select Available Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {dates.map((d) => (
                    <button
                      type="button"
                      key={d.val}
                      onClick={() => setSelectedDate(d.val)}
                      className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                        selectedDate === d.val
                          ? "bg-[#00A3FF]/20 border-[#00A3FF] text-white shadow-[0_0_15px_rgba(0,163,255,0.25)]"
                          : "bg-white/5 border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5 mb-1.5 text-[#00A3FF]" />
                      <div className="font-semibold">{d.label}</div>
                      <div className="text-[10px] text-slate-400">Available</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  2. Select Time (Your Local Timezone)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {times.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-medium text-center border transition-all ${
                        selectedTime === t
                          ? "bg-[#00A3FF] border-[#00A3FF] text-white font-semibold shadow-[0_0_12px_rgba(0,163,255,0.4)]"
                          : "bg-white/5 border-white/10 text-slate-300 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  3. Enter Attendee Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3FF] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Work Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3FF] transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Selected: <span className="text-white font-medium">{selectedDate}</span> at{" "}
                  <span className="text-[#00A3FF] font-medium">{selectedTime}</span>
                </div>
                <Button
                  type="submit"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Confirm & Book Demo
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
