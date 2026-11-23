"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { HeroPortrait } from "@/components/3d/HeroPortrait";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Code2, Sparkles, FileText } from "lucide-react";

// Dynamically load R3F Canvas to prevent SSR hydration mismatches
const HeroScene = dynamic(
  () => import("@/components/3d/Scene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-brand-dark bg-subtle-grid"
    >
      {/* Dynamic 3D Floating WebGL Objects Canvas */}
      <HeroScene />

      {/* Atmospheric Fiery Lighting Layers */}
      <div className="absolute inset-0 pointer-events-none hero-light-beam" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/20 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] rounded-full bg-brand-yellow/15 blur-[120px] pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

      {/* Central Hero Stage: Oversized Typography Layered with 3D Portrait */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12">
        <div className="relative w-full flex flex-col items-center justify-center">
          
          {/* Background Enormous Headline: "HI, I'M SANTOSH" */}
          <div className="w-full text-center select-none pointer-events-none">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne font-black tracking-tighter text-white uppercase text-[14vw] sm:text-[13vw] md:text-[11vw] lg:text-[10.5vw] leading-[0.88] drop-shadow-2xl"
            >
              HI, I&apos;M SANTOSH
            </motion.h1>
          </div>

          {/* Central 3D Portrait overlapping naturally */}
          <div className="-mt-12 sm:-mt-20 md:-mt-28 lg:-mt-32 w-full flex justify-center">
            <HeroPortrait />
          </div>

          {/* Foreground Supporting Tagline & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mt-6 sm:mt-8 space-y-3 max-w-3xl px-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface/90 border border-brand-orange/40 backdrop-blur-md shadow-lg shadow-brand-orange/15">
              <Code2 className="w-4 h-4 text-brand-yellow" />
              <span className="font-mono-code text-xs sm:text-sm font-bold text-white tracking-wider">
                {profileData.supportingText}
              </span>
            </div>

            <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-brand-yellow tracking-tight">
              Building Digital Experiences That Matter.
            </h2>

            <p className="font-mono-code text-xs sm:text-sm text-brand-yellow uppercase tracking-widest font-semibold">
              &ldquo;{profileData.secondaryHeadline}&rdquo;
            </p>

            <p className="text-sm sm:text-base text-brand-secondary/90 max-w-xl mx-auto leading-relaxed">
              {profileData.shortIntro}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#work"
                showArrow
              >
                EXPLORE MY WORK
              </Button>

              <Button
                variant="secondary"
                size="lg"
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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
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
