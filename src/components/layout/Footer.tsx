"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-xl text-brand-secondary pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-brand-orange/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#hero" className="inline-flex items-center gap-2">
              <span className="font-syne text-2xl font-black text-white">
                {profileData.brandName}
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
            </Link>
            <p className="text-sm text-brand-muted max-w-sm leading-relaxed">
              {profileData.tagline} Building robust full-stack software, API integrations, and immersive digital interfaces.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10 hover:border-brand-orange/50"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10 hover:border-brand-orange/50"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.links.email}
                aria-label="Email Santosh"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10 hover:border-brand-orange/50"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Fast Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-widest text-brand-yellow">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#hero" className="hover:text-white transition-colors">
                  Home / Overview
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Engineering Philosophy
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-white transition-colors">
                  Career Experience
                </Link>
              </li>
              <li>
                <Link href="#toolkit" className="hover:text-white transition-colors">
                  Technical Toolkit
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Coordinates */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-widest text-brand-yellow">
              Direct Coordinates
            </h4>
            <div className="space-y-2 text-sm text-brand-muted">
              <p>
                <span className="text-white font-medium">Location:</span> {profileData.location}
              </p>
              <p>
                <span className="text-white font-medium">Email:</span>{" "}
                <a
                  href={profileData.links.email}
                  className="text-brand-orange hover:underline underline-offset-4"
                >
                  {profileData.email}
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Education:</span> St. John College of Engineering &amp; Management (Mumbai Univ.)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p className="flex items-center gap-1.5">
            © {currentYear} {profileData.fullName}. Designed &amp; Developed with{" "}
            <Heart className="w-3.5 h-3.5 text-brand-orange inline fill-brand-orange" /> by Santosh Mahato.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-brand-orange/40 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-orange" />
          </button>
        </div>
      </div>
    </footer>
  );
}
