"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col space-y-3 mb-12 md:mb-16",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-white/10 text-xs font-mono-code text-brand-yellow uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          {tag}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
      >
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orange-deep to-brand-yellow">
            {highlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base sm:text-lg text-brand-secondary leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
