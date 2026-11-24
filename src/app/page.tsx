"use client";

import React, { useState } from "react";
import { TerminalBoot } from "@/components/layout/TerminalBoot";
import { CurtainSplitTransition } from "@/components/layout/CurtainSplitTransition";
import { LaserReticleCursor } from "@/components/ui/LaserReticleCursor";
import { Navbar } from "@/components/layout/Navbar";
import { QuickDock } from "@/components/common/QuickDock";
import { HeistMarquee } from "@/components/common/HeistMarquee";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";
import { ExperienceSection } from "@/components/sections/Experience";
import { EducationCertifications } from "@/components/sections/EducationCertifications";
import { ThePlanNotes } from "@/components/sections/ThePlanNotes";
import { ApproachSection } from "@/components/sections/Approach";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  const [isBootComplete, setIsBootComplete] = useState(false);
  const [isRevealingCurtain, setIsRevealingCurtain] = useState(false);

  const handleBootComplete = () => {
    setIsBootComplete(true);
    setIsRevealingCurtain(true);
    setTimeout(() => {
      setIsRevealingCurtain(false);
    }, 1400);
  };

  return (
    <>
      {/* Interactive Laser Reticle for Desktop Cursor */}
      <LaserReticleCursor />

      {/* Terminal Boot Sequence */}
      {!isBootComplete && <TerminalBoot onComplete={handleBootComplete} />}

      {/* Dual Vault Door Split Transition */}
      <CurtainSplitTransition isRevealing={isRevealingCurtain} />

      {/* Main Experience Mounted */}
      <div className="relative min-h-screen bg-heist-black text-heist-text selection:bg-heist-red selection:text-white">
        {/* Subtle Surveillance Scanlines & Ambient Overlays */}
        <div className="pointer-events-none fixed inset-0 z-30 scanlines-overlay opacity-30" />
        <div className="pointer-events-none fixed inset-0 z-20 film-grain opacity-25" />

        {/* Unified Tactical Navigation & Telemetry HUD Bar */}
        <Navbar />

        {/* Quick Floating Dock for Instant Jumps */}
        <QuickDock />

        {/* Single-Page Experience Sections */}
        <main className="flex-1 w-full pt-24 sm:pt-28">
          <Hero />
          <HeistMarquee />
          <About />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationCertifications />
          <ThePlanNotes />
          <ApproachSection />
          <ContactSection />
        </main>

        {/* Classified Command Center Footer */}
        <Footer />
      </div>
    </>
  );
}
