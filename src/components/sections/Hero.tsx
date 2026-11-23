"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { HeroPortrait } from "@/components/3d/HeroPortrait";
import { Button } from "@/components/ui/Button";
import { ArrowDown, MapPin, Radio, Terminal, FileText, ArrowRight } from "lucide-react";

// Dynamically load R3F Canvas to prevent SSR hydration mismatches
const HeroScene = dynamic(
  () => import("@/components/3d/Scene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-heist-black film-grain"
    >
      {/* 3D Floating Objects Canvas (Peripheral ambient space) */}
      <HeroScene />

      {/* Atmospheric Red Spotlight Behind Portrait */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-heist-red/15 blur-[160px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-heist-red-dark/20 blur-[140px] pointer-events-none" />

      {/* Top Status Telemetry Strip */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-heist-border pb-4 text-xs font-technical text-heist-muted"
        >
          <div className="flex items-center gap-2.5">
            <Radio className="w-3.5 h-3.5 text-heist-red animate-pulse" />
            <span className="text-heist-text font-bold tracking-wider">
              OPERATION: SANTOSH MAHATO
            </span>
            <span className="hidden sm:inline text-heist-dim">|</span>
            <span className="hidden sm:inline text-heist-muted">ST. JOHN CE // MUMBAI UNIV.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-heist-muted">
              <MapPin className="w-3.5 h-3.5 text-heist-red" />
              <span>{profileData.location}</span>
            </span>
            <span className="hidden md:inline px-2 py-0.5 rounded bg-heist-red/10 border border-heist-red/30 text-heist-red font-bold text-[10px]">
              AVAILABLE FOR STRATEGIC OPPORTUNITIES
            </span>
          </div>
        </motion.div>
      </div>

      {/* Central 2-Column Hero Stage: Big Typography Left, 3D Portrait Right */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Typography & Narrative) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Codename & Clearance */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-heist-dark border border-heist-border text-xs font-technical text-heist-red uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-heist-red animate-ping" />
              <span>{profileData.role}</span>
              <span className="text-heist-dim">•</span>
              <span className="text-heist-muted">{profileData.brandName}</span>
            </div>

            {/* Main Heading in Bebas Neue */}
            <h1 className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] tracking-wide text-heist-text leading-[0.9] select-none">
              THE MIND<br />
              <span className="text-heist-red drop-shadow-[0_0_35px_rgba(229,9,20,0.35)]">
                BEHIND THE CODE.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-neutral-300 font-sans-body max-w-xl leading-relaxed">
              {profileData.heroSupporting}
            </p>

            {/* Personal Positioning Quote */}
            <div className="border-l-2 border-heist-red pl-4 py-1">
              <p className="font-technical text-xs sm:text-sm text-heist-muted italic leading-relaxed">
                &ldquo;{profileData.tagline}&rdquo;
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                showArrow
              >
                EXPLORE MY WORK
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                icon={<ArrowRight className="w-4 h-4 text-heist-red" />}
              >
                LET&apos;S CONNECT
              </Button>
            </div>
          </motion.div>

          {/* Right Column (3D Personal Avatar with Cinematic Red Lighting) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <HeroPortrait />
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator & Status Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex items-center justify-between text-xs font-technical text-heist-muted border-t border-heist-border pt-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-heist-text font-bold">B.TECH COMPUTER ENGINEERING</span>
            <span className="hidden sm:inline text-heist-dim">/</span>
            <span className="hidden sm:inline text-heist-muted">2023 – 2027</span>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-2 text-heist-text hover:text-heist-red transition-colors"
          >
            <span>SCROLL TO BRIEFING</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-heist-red" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
