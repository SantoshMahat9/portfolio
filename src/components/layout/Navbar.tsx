"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heistAudio } from "@/lib/audioEngine";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { PrecisionHUD } from "@/components/layout/PrecisionHUD";

const NAV_ITEMS = [
  { label: "OVERVIEW", href: "#hero" },
  { label: "BRIEFING", href: "#about" },
  { label: "ARSENAL", href: "#skills" },
  { label: "OPERATIONS", href: "#projects" },
  { label: "MISSIONS", href: "#experience" },
  { label: "CLEARANCE", href: "#certifications" },
  { label: "THE PLAN", href: "#the-plan" },
  { label: "COMMAND", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "certifications", "the-plan", "approach", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-heist-black/95 backdrop-blur-xl border-b border-heist-border shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all">
        {/* Row 1: Primary Navigation */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Brand Codename */}
          <Link
            href="#hero"
            className="group flex items-center gap-2 focus:outline-none shrink-0"
            aria-label="Santosh Mahato Home"
          >
            <span className="w-2 h-2 rounded-full bg-heist-red group-hover:scale-125 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-bebas text-lg sm:text-2xl tracking-wider text-white group-hover:text-heist-red transition-colors leading-none">
                {profileData.brandName}
              </span>
              <span className="text-[8px] font-technical text-heist-muted tracking-widest uppercase mt-0.5 hidden xs:block">
                FULL STACK ARCHITECT
              </span>
            </div>
          </Link>

          {/* Desktop Classified Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5 bg-heist-dark/90 px-2 py-1 rounded-xl border border-heist-border shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => heistAudio.playBlip()}
                  onClick={() => heistAudio.playClick()}
                  className={`relative px-2.5 py-1 text-[10px] xl:text-[11px] font-technical font-bold tracking-wider rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-heist-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeHeistNav"
                      className="absolute inset-0 bg-heist-red/20 border border-heist-red/50 rounded-lg"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                heistAudio.playClick();
                setIsResumeOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-heist-red/50 bg-white/5 hover:bg-white/10 text-white text-[11px] font-technical font-bold tracking-wider transition-colors"
            >
              <FileText className="w-3 h-3 text-heist-red" />
              <span>RESUME DOSSIER</span>
            </button>

            <Link
              href="#contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-heist-red hover:bg-[#c90812] text-white text-[11px] font-technical font-bold tracking-wider shadow-md shadow-heist-red/25 transition-colors"
            >
              <span>INITIATE COMMS</span>
              <span className="text-white/80">↗</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-heist-dark border border-heist-border text-white focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-heist-red" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Row 2: Precision Surveillance Telemetry HUD */}
        <PrecisionHUD />
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[84px] sm:top-[96px] z-30 bg-heist-black/95 backdrop-blur-2xl border-b border-heist-border p-5 lg:hidden shadow-2xl film-grain"
          >
            <nav className="flex flex-col space-y-1.5">
              <div className="pb-2 border-b border-heist-border flex items-center justify-between text-[10px] font-technical text-heist-muted">
                <span>CLASSIFIED MISSION INDEX</span>
                <span className="text-heist-red font-bold">CLEARANCE: LEVEL 5</span>
              </div>

              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl bg-heist-dark hover:bg-heist-surface text-xs font-technical font-bold tracking-wider text-white hover:text-heist-red transition-all flex items-center justify-between border border-white/5"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-heist-red" />
                </Link>
              ))}

              <div className="pt-3 flex flex-col gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Initiate Comms
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsResumeOpen(true);
                  }}
                  icon={<FileText className="w-3.5 h-3.5 text-heist-red" />}
                >
                  Download Resume
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Resume Dossier Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
