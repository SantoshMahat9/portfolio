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
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-heist-dark border border-heist-border text-xs font-technical text-heist-red uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-heist-red animate-pulse" />
          {tag}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-heist-text leading-[0.95]"
      >
        {title}{" "}
        {highlight && (
          <span className="text-heist-red">
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
          className="max-w-2xl text-sm sm:text-base text-heist-muted leading-relaxed font-sans-body"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Subtle red laser indicator underline */}
      <div className={cn("w-20 h-[2px] bg-heist-red/80 mt-2", isCenter ? "mx-auto" : "")} />
    </div>
  );
}
