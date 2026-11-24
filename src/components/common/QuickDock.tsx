"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  User,
  Cpu,
  Code2,
  Briefcase,
  GraduationCap,
  FileText,
  Mail,
} from "lucide-react";

export function QuickDock() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 280);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const dockItems = [
    { id: "about", icon: User, label: "The Briefing (About)" },
    { id: "skills", icon: Cpu, label: "The Arsenal (Skills)" },
    { id: "projects", icon: Code2, label: "Operations (Projects)" },
    { id: "experience", icon: Briefcase, label: "The Crew (Experience)" },
    { id: "certifications", icon: GraduationCap, label: "Clearance (Education)" },
    { id: "the-plan", icon: FileText, label: "The Plan (Board)" },
    { id: "contact", icon: Mail, label: "Command Center (Contact)" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 bg-[#09090c]/90 backdrop-blur-2xl border border-heist-red/35 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(229,9,20,0.25)] select-none"
        >
          {/* Back to Top */}
          <motion.button
            onClick={() => scrollTo("hero")}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            title="Top of Command Center"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-heist-red to-[#b3000b] text-white flex items-center justify-center shadow-[0_0_12px_rgba(229,9,20,0.6)] border border-white/20 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>

          <div className="w-[1px] h-4 bg-white/15 mx-0.5" />

          {/* Navigation Items */}
          {dockItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                title={item.label}
                aria-label={item.label}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-heist-red/20 transition-all cursor-pointer"
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
