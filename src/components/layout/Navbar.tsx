"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "HOME", href: "#hero" },
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "TOOLKIT", href: "#toolkit" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detector
      const sections = ["hero", "work", "about", "experience", "toolkit", "contact"];
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
            ? "py-3 bg-brand-dark/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#hero"
            className="group flex items-center gap-1.5 focus:outline-none"
            aria-label="Santosh Mahato Home"
          >
            <span className="font-syne text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-brand-orange transition-colors">
              {profileData.brandName}
            </span>
            <span className="w-2 h-2 rounded-full bg-brand-orange group-hover:bg-brand-yellow group-hover:scale-125 transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-brand-surface/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-mono-code font-bold tracking-wider rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-brand-yellow"
                      : "text-brand-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 bg-brand-orange/20 border border-brand-orange/40 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href={profileData.links.resume}
              isExternal
              icon={<FileText className="w-3.5 h-3.5 text-brand-yellow" />}
            >
              Resume
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              showArrow
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-brand-surface/80 border border-white/10 text-white focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-brand-dark/95 backdrop-blur-2xl border-b border-white/15 p-6 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl bg-white/5 hover:bg-brand-orange/20 text-sm font-mono-code font-bold tracking-wider text-white hover:text-brand-yellow transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-orange" />
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let&apos;s Connect
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href={profileData.links.resume}
                  isExternal
                  icon={<FileText className="w-4 h-4 text-brand-yellow" />}
                >
                  Download Resume
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
