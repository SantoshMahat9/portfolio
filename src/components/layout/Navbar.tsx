"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";
import { Menu, X, ArrowUpRight, FileText, Radio } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heistAudio } from "@/lib/audioEngine";
import { ResumeModal } from "@/components/ui/ResumeModal";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

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
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-heist-black/90 backdrop-blur-xl border-b border-heist-border shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Codename */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Santosh Mahato Home"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-heist-red group-hover:scale-125 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-bebas text-2xl tracking-wider text-white group-hover:text-heist-red transition-colors">
                {profileData.brandName}
              </span>
              <span className="text-[9px] font-technical text-heist-muted tracking-widest -mt-1 hidden sm:block">
                FULL STACK ARCHITECT
              </span>
            </div>
          </Link>

          {/* Desktop Classified Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-heist-dark/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-heist-border">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => heistAudio.playBlip()}
                  onClick={() => heistAudio.playClick()}
                  className={`relative px-3.5 py-1.5 text-xs font-technical font-bold tracking-wider rounded-lg transition-all duration-300 ${
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

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                heistAudio.playClick();
                setIsResumeOpen(true);
              }}
              icon={<FileText className="w-3.5 h-3.5 text-heist-red" />}
            >
              Resume Dossier
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              showArrow
            >
              Initiate Comms
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-heist-dark border border-heist-border text-white focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-heist-red" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-heist-black/95 backdrop-blur-2xl border-b border-heist-border p-6 lg:hidden shadow-2xl film-grain"
          >
            <nav className="flex flex-col space-y-2">
              <div className="pb-2 border-b border-heist-border flex items-center justify-between text-[10px] font-technical text-heist-muted">
                <span>CLASSIFIED MISSION INDEX</span>
                <span className="text-heist-red font-bold">CLEARANCE: LEVEL 5</span>
              </div>

              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-heist-dark hover:bg-heist-surface text-sm font-technical font-bold tracking-wider text-white hover:text-heist-red transition-all flex items-center justify-between border border-white/5"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-heist-red" />
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Initiate Comms
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsResumeOpen(true);
                  }}
                  icon={<FileText className="w-4 h-4 text-heist-red" />}
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
