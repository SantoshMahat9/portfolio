"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal,
  icon,
  showArrow = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 relative group overflow-hidden select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3.5 gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-brand-orange to-brand-orange-deep text-white shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/45 hover:scale-[1.02] border border-brand-yellow/30",
    secondary:
      "bg-brand-surface text-white hover:bg-white/10 border border-white/10 hover:border-brand-orange/50 shadow-md",
    outline:
      "bg-transparent text-white border-2 border-white/20 hover:border-brand-orange hover:bg-brand-orange/10",
    ghost:
      "bg-transparent text-brand-secondary hover:text-white hover:bg-white/5",
  };

  const content = (
    <>
      {icon && <span className="transition-transform group-hover:scale-110">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current" />
      )}
    </>
  );

  if (href) {
    if (isExternal || href.startsWith("mailto:") || href.startsWith("tel:") || href.endsWith(".pdf") || href.endsWith(".txt")) {
      return (
        <a
          href={href}
          target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
