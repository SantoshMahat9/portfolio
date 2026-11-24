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
        "flex flex-col space-y-2.5 mb-10 md:mb-14",
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
          className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-heist-dark border border-heist-border text-[10px] font-technical text-heist-red uppercase tracking-widest font-bold"
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
        className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-wide text-heist-text leading-[0.95]"
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
          className="font-sans-body text-xs sm:text-sm text-heist-muted max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative Red Laser Underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={cn(
          "h-[2px] w-20 bg-gradient-to-r from-heist-red to-transparent mt-1",
          isCenter ? "mx-auto" : "origin-left"
        )}
      />
    </div>
  );
}
