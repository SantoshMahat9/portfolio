"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { HeroPortrait } from "@/components/3d/HeroPortrait";
import { Button } from "@/components/ui/Button";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { ArrowDown, MapPin, Radio, FileText, ArrowRight } from "lucide-react";

// Dynamically load R3F Canvas to prevent SSR hydration mismatches
const HeroScene = dynamic(
  () => import("@/components/3d/Scene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-6rem)] w-full flex flex-col justify-between pt-4 sm:pt-6 pb-10 overflow-hidden bg-heist-black film-grain"
    >
      {/* 3D Floating Objects Canvas (Peripheral ambient space) */}
      <HeroScene />

      {/* Atmospheric Red Spotlight Behind Portrait */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-heist-red/15 blur-[150px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] rounded-full bg-heist-red-dark/20 blur-[130px] pointer-events-none" />

      {/* Top Status Telemetry Strip */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-heist-border pb-3 text-xs font-technical text-heist-muted"
        >
          <div className="flex items-center gap-2">
            <Radio className="w-3 h-3 text-heist-red animate-pulse" />
            <span className="text-heist-text font-bold tracking-wider text-[11px]">
              OPERATIVE: {profileData.brandName}
            </span>
            <span className="hidden sm:inline text-heist-dim">|</span>
            <span className="hidden sm:inline text-heist-muted text-[11px]">ST. JOHN CE // MUMBAI UNIV.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-heist-muted text-[11px]">
              <MapPin className="w-3 h-3 text-heist-red" />
              <span>{profileData.location}</span>
            </span>
            <span className="hidden md:inline px-2 py-0.5 rounded bg-heist-red/10 border border-heist-red/30 text-heist-red font-bold text-[9px]">
              AVAILABLE FOR FULL-STACK ROLES
            </span>
          </div>
        </motion.div>
      </div>

      {/* Central 2-Column Hero Stage: Big Typography Left, 3D Portrait Right */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (Typography & Narrative) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 text-left"
          >
            {/* Codename & Clearance */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-heist-dark border border-heist-border text-[11px] font-technical text-heist-red uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-heist-red animate-ping" />
              <span>{profileData.role}</span>
              <span className="text-heist-dim">•</span>
              <span className="text-heist-muted">{profileData.education.institution}</span>
            </div>

            {/* Main Heading in Bebas Neue - Refined Proportion */}
            <h1 className="font-bebas text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] tracking-wide text-heist-text leading-[0.95] select-none">
              FULL-STACK ARCHITECTURE.<br />
              <span className="text-heist-red drop-shadow-[0_0_30px_rgba(229,9,20,0.35)]">
                MEASURED PRECISION.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-neutral-300 font-sans-body max-w-xl leading-relaxed">
              {profileData.heroSupporting}
            </p>

            {/* Personal Positioning Quote */}
            <div className="border-l-2 border-heist-red pl-3.5 py-1">
              <p className="font-technical text-xs sm:text-[13px] text-heist-muted leading-relaxed">
                &ldquo;{profileData.tagline}&rdquo;
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                href="#projects"
                showArrow
              >
                EXPLORE OPERATIONS
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="#contact"
                icon={<ArrowRight className="w-4 h-4 text-heist-red" />}
              >
                INITIATE CONTACT
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => setIsResumeOpen(true)}
                icon={<FileText className="w-4 h-4 text-heist-red" />}
              >
                VIEW RESUME
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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex items-center justify-between text-xs font-technical text-heist-muted border-t border-heist-border pt-3"
        >
          <div className="flex items-center gap-2">
            <span className="text-heist-text font-bold text-[11px]">B.TECH COMPUTER ENGINEERING</span>
            <span className="hidden sm:inline text-heist-dim">/</span>
            <span className="hidden sm:inline text-heist-muted text-[11px]">2023 – 2027</span>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-1.5 text-heist-text hover:text-heist-red transition-colors text-[11px]"
          >
            <span>SCROLL TO BRIEFING</span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-heist-red" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Interactive Resume Dossier Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
