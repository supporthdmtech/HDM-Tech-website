"use client";

import React, { useState } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";

export function WhatsAppButton() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const whatsappNumber = "919711327023"; // Real HDM Tech WhatsApp
  const defaultMessage = encodeURIComponent(
    "Hi HDM Tech team, I would like to learn more about deploying 24/7 AI Voice and Chat agents for my business."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Greeting Popup Bubble */}
      {isTooltipOpen && (
        <div className="mb-3 w-72 rounded-2xl border border-white/15 bg-[#0a1020]/95 p-4 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-3 text-sm">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00A3FF] to-[#0A84FF] flex items-center justify-center text-xs font-bold text-white">
                  HDM
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0a1020]"></span>
              </div>
              <div>
                <div className="font-semibold text-white text-xs">HDM Tech AI Specialist</div>
                <div className="text-[10px] text-emerald-400">Online • Replies instantly</div>
              </div>
            </div>
            <button
              onClick={() => setIsTooltipOpen(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            Have questions about AI Voice Agents or lead qualification? Message us on WhatsApp for an immediate consultation.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold text-xs transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)]"
          >
            Start WhatsApp Chat <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsTooltipOpen(!isTooltipOpen)}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 border border-white/15 text-xs text-slate-200 hover:border-[#25D366]/50 hover:text-white backdrop-blur-md shadow-lg transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          Chat on WhatsApp
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6 text-black fill-black" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-black animate-pulse" />
        </a>
      </div>
    </div>
  );
}
