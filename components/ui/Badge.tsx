import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "electric" | "neutral" | "success" | "outline";
  icon?: React.ReactNode;
}

export function Badge({
  children,
  className,
  variant = "electric",
  icon,
}: BadgeProps) {
  const variants = {
    electric:
      "bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/30 shadow-[0_0_15px_rgba(0,163,255,0.15)]",
    neutral:
      "bg-white/5 text-slate-300 border border-white/10",
    success:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    outline:
      "bg-transparent text-slate-300 border border-white/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md tracking-wide",
        variants[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
