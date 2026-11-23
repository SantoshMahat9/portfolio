"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { HeroPortrait } from "@/components/3d/HeroPortrait";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Code2, FileText, Sparkles } from "lucide-react";

// Dynamically load R3F Canvas to prevent SSR hydration mismatches
const HeroScene = dynamic(
  () => import("@/components/3d/Scene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full flex flex-col justify-between pt-24 pb-16 overflow-hidden bg-brand-dark bg-subtle-grid"
    >
      {/* Dynamic 3D Floating WebGL Objects Canvas in periphery */}
      <HeroScene />

      {/* Atmospheric Fiery Lighting Layers */}
      <div className="absolute inset-0 pointer-events-none hero-light-beam" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-brand-orange/20 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-brand-yellow/15 blur-[120px] pointer-events-none" />

      {/* Top Meta Status Strip */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono-code text-brand-secondary"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
            <span className="text-white font-bold">{profileData.tagline}</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-brand-muted">
            <span>{profileData.location}</span>
            <span>•</span>
            <span className="text-brand-yellow">Available for SDE / Internships</span>
          </div>
        </motion.div>
      </div>

      {/* Central Content Canvas: Balanced & Clean Flow */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Main Enormous Brand Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 select-none"
          >
            <p className="font-mono-code text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-brand-orange">
              SANTOSH SANJEEV MAHATO
            </p>
            <h1 className="font-syne font-black tracking-tight text-white uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] drop-shadow-2xl">
              HI, I&apos;M SANTOSH
            </h1>
          </motion.div>

          {/* Central 3D Portrait with breathing room */}
          <div className="py-2 w-full flex justify-center">
            <HeroPortrait />
          </div>

          {/* Supporting Headline, Identity & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4 max-w-2xl px-2"
          >
            {/* Identity Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface/90 border border-brand-orange/40 backdrop-blur-md shadow-lg shadow-brand-orange/15">
              <Code2 className="w-4 h-4 text-brand-yellow" />
              <span className="font-mono-code text-xs font-bold text-white tracking-wider">
                {profileData.supportingText}
              </span>
            </div>

            {/* Step 2 Requested Headline */}
            <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-brand-yellow tracking-tight leading-snug">
              Building Digital Experiences That Matter.
            </h2>

            <p className="font-mono-code text-xs text-brand-yellow uppercase tracking-widest font-semibold">
              &ldquo;{profileData.secondaryHeadline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-brand-secondary/90 leading-relaxed max-w-xl mx-auto">
              {profileData.shortIntro}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <Button
                variant="primary"
                size="md"
                href="#work"
                showArrow
              >
                EXPLORE MY WORK
              </Button>

              <Button
                variant="secondary"
                size="md"
                href={profileData.links.resume}
                isExternal
                icon={<FileText className="w-4 h-4 text-brand-yellow" />}
              >
                DOWNLOAD RESUME
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator & Status Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex items-center justify-between text-xs font-mono-code text-brand-muted border-t border-white/10 pt-4"
        >
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">B.Tech CE (2023–2027)</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">St. John College of Eng. &amp; Mgmt.</span>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-2 text-white hover:text-brand-orange transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-brand-orange group-hover:text-brand-yellow" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
