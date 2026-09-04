"use client";

import React, { useState, useMemo } from "react";
import { DollarSign, Clock, Zap, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

interface RoiCalculatorProps {
  onBookDemo?: () => void;
  className?: string;
}

export function RoiCalculator({ onBookDemo, className = "" }: RoiCalculatorProps) {
  const [monthlyInquiries, setMonthlyInquiries] = useState<number>(1500);
  const [minutesPerCall, setMinutesPerCall] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(25);

  const calculations = useMemo(() => {
    // Current total monthly hours spent on manual calls/messages
    const totalManualHours = (monthlyInquiries * minutesPerCall) / 60;
    // Current total monthly labor expense
    const currentMonthlyCost = totalManualHours * hourlyRate;

    // AI automation rate: 75% handled completely, 25% accelerated
    const hoursSaved = Math.round(totalManualHours * 0.75);
    const monthlySavings = Math.round(currentMonthlyCost * 0.75);
    const annualSavings = monthlySavings * 12;

    // Lead capture boost calculation (average 35% higher booking rate from 24/7 instant response)
    const extraLeadsCaptured = Math.round(monthlyInquiries * 0.12);

    return {
      totalManualHours: Math.round(totalManualHours),
      hoursSaved,
      monthlySavings,
      annualSavings,
      extraLeadsCaptured,
    };
  }, [monthlyInquiries, minutesPerCall, hourlyRate]);

  return (
    <div
      className={`rounded-3xl border border-white/15 bg-gradient-to-b from-[#080E1E] to-[#04070F] p-6 sm:p-8 md:p-10 shadow-[0_0_60px_rgba(0,163,255,0.12)] relative overflow-hidden ${className}`}
    >
      {/* Background glow spot */}
      <div className="glow-spot w-72 h-72 bg-[#00A3FF]/15 -top-20 -right-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3FF]/10 text-[#00A3FF] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#00A3FF]/20">
            <Sparkles className="w-3 h-3 text-[#00A3FF]" />
            Interactive Business Case
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Calculate Your AI Automation ROI
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mt-1">
            See how much operational expense and employee hours HDM Tech AI Voice Agents & Chat Assistants save your business every month.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2 rounded-xl self-start md:self-auto">
          <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>75%+ Routine Work Automated</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Slider 1 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="text-slate-300 font-medium">
                Monthly Customer Conversations (Calls & Chats)
              </label>
              <span className="font-bold text-[#00A3FF] text-base">
                {monthlyInquiries.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="10000"
              step="100"
              value={monthlyInquiries}
              onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00A3FF]"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>200</span>
              <span>5,000</span>
              <span>10,000+</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="text-slate-300 font-medium">
                Avg. Minutes per Interaction (Intake, Q&A, Booking)
              </label>
              <span className="font-bold text-[#00A3FF] text-base">
                {minutesPerCall} mins
              </span>
            </div>
            <input
              type="range"
              min="3"
              max="25"
              step="1"
              value={minutesPerCall}
              onChange={(e) => setMinutesPerCall(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00A3FF]"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>3 mins</span>
              <span>12 mins</span>
              <span>25 mins</span>
            </div>
          </div>

          {/* Slider 3 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="text-slate-300 font-medium">
                Avg. Employee Cost ($ / Hour)
              </label>
              <span className="font-bold text-[#00A3FF] text-base">
                ${hourlyRate} / hr
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="75"
              step="1"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00A3FF]"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>$15/hr</span>
              <span>$45/hr</span>
              <span>$75+/hr</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-400 flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#00A3FF]/20 text-[#00A3FF] flex items-center justify-center shrink-0 font-bold">
              i
            </div>
            <span>
              Based on empirical deployment benchmarks where HDM Tech AI agents resolve tier-1 queries, qualify lead intent, and sync directly to CRM without human triage.
            </span>
          </div>
        </div>

        {/* Results Cards Column */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Annual Savings */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#00A3FF]/20 to-transparent border border-[#00A3FF]/40 shadow-[0_0_30px_rgba(0,163,255,0.15)] sm:col-span-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#00A3FF]">
                  Projected Annual Labor Savings
                </span>
                <DollarSign className="w-5 h-5 text-[#00A3FF]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                ${calculations.annualSavings.toLocaleString()}
                <span className="text-sm font-normal text-slate-300 ml-1.5">
                  / year
                </span>
              </div>
              <div className="text-xs text-slate-300 mt-1">
                ~${calculations.monthlySavings.toLocaleString()} recurring savings each month
              </div>
            </div>

            {/* Hours Saved */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Clock className="w-4 h-4 text-[#00A3FF]" />
                <span>Monthly Hours Freed</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {calculations.hoursSaved.toLocaleString()} hrs
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Reallocated to closing deals
              </div>
            </div>

            {/* Extra Leads */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>New Opportunities</span>
              </div>
              <div className="text-2xl font-bold text-emerald-400">
                +{calculations.extraLeadsCaptured} / mo
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Captured during off-hours & weekends
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Button
              size="lg"
              className="w-full text-center"
              onClick={onBookDemo}
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Capture These Savings — Book a Free Demo
            </Button>
            <p className="text-[11px] text-center text-slate-500 mt-2">
              No long-term contracts. Custom AI agent setup tailored to your exact tech stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
