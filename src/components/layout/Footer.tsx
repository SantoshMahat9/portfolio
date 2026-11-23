"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowUp, Github, Linkedin, Instagram, Mail, Radio } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-heist-border bg-heist-black text-heist-muted pt-16 pb-12 overflow-hidden film-grain">
      {/* Background ambient red glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-heist-red/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-heist-border">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#hero" className="inline-flex items-center gap-2">
              <span className="font-bebas text-3xl tracking-wider text-white">
                {profileData.brandName}
              </span>
              <span className="w-2 h-2 rounded-full bg-heist-red animate-pulse" />
            </Link>
            <p className="text-xs sm:text-sm text-heist-muted font-sans-body max-w-sm leading-relaxed">
              BUILT WITH PRECISION. POWERED BY CREATIVITY.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-heist-dark hover:bg-white/10 text-white transition-colors border border-heist-border hover:border-heist-red"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-heist-dark hover:bg-white/10 text-white transition-colors border border-heist-border hover:border-heist-red"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2.5 rounded-lg bg-heist-dark hover:bg-white/10 text-white transition-colors border border-heist-border hover:border-heist-red"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={profileData.links.email}
                aria-label="Email Santosh"
                className="p-2.5 rounded-lg bg-heist-dark hover:bg-white/10 text-white transition-colors border border-heist-border hover:border-heist-red"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Fast Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-technical font-bold uppercase tracking-widest text-heist-red">
              Operation Sections
            </h4>
            <ul className="space-y-2 text-xs font-technical">
              <li>
                <Link href="#hero" className="hover:text-white transition-colors">
                  // 00. OVERVIEW
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  // 01. THE BRIEFING
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-white transition-colors">
                  // 02. THE ARSENAL
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  // 03. PREVIOUS OPERATIONS
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-white transition-colors">
                  // 04. THE MISSIONS
                </Link>
              </li>
              <li>
                <Link href="#approach" className="hover:text-white transition-colors">
                  // 05. ENGINEERING APPROACH
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  // 06. COMMAND CENTER
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Coordinates */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-technical font-bold uppercase tracking-widest text-heist-red">
              Classified Coordinates
            </h4>
            <div className="space-y-2 text-xs font-technical text-heist-muted">
              <p>
                <span className="text-white font-medium">Base:</span> {profileData.location}
              </p>
              <p>
                <span className="text-white font-medium">Comms:</span>{" "}
                <a
                  href={profileData.links.email}
                  className="text-heist-red hover:underline underline-offset-4"
                >
                  {profileData.email}
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Academy:</span> St. John College of Engineering (Mumbai Univ.)
              </p>
              <p className="flex items-center gap-1.5 text-emerald-400 pt-1">
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span>Protocol: Active &amp; Ready for Deployment</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-technical text-heist-muted">
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-heist-red animate-ping" />
            SANTOSH MAHATO © {currentYear}. ALL PROTOCOLS VERIFIED.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-heist-dark hover:bg-white/10 text-white border border-heist-border hover:border-heist-red transition-colors"
          >
            <span>TOP OF DOSSIER</span>
            <ArrowUp className="w-3.5 h-3.5 text-heist-red" />
          </button>
        </div>
      </div>
    </footer>
  );
}
