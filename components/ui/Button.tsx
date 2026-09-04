import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#00A3FF] to-[#0A84FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] hover:scale-[1.02] active:scale-[0.98] border border-[#38bdf8]/30",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 border border-white/15 hover:border-white/25 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-[#00A3FF] hover:bg-[#00A3FF]/10 text-slate-200 hover:text-white",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    whatsapp:
      "bg-[#25D366] hover:bg-[#22bf5b] text-white font-semibold shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-[1.02] active:scale-[0.98]",
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
