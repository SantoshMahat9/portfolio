"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heistAudio } from "@/lib/audioEngine";
import { Terminal, ShieldAlert, FastForward, Play } from "lucide-react";

interface TerminalBootProps {
  onComplete: () => void;
}

const bootLogs = [
  { text: "INITIALIZING ENCRYPTED HANDSHAKE [AES-256-GCM]...", code: "SEC-01", delay: 180 },
  { text: "BYPASSING SJCEM FIREWALL GATEWAY...", code: "NET-200", delay: 220 },
  { text: "INJECTING FULL-STACK PAYLOAD (.NET / SQL / REACT / THREE.JS)...", code: "PAYLOAD", delay: 240 },
  { text: "VERIFYING FIELD IDENTITY: SANTOSH MAHATO (COMPUTER ENG.)...", code: "AUTH-OK", delay: 200 },
  { text: "ESTABLISHING SAT-COMM WITH BOISAR COMMAND HUB...", code: "SAT-LINK", delay: 210 },
  { text: "ENGAGING 3D VAULT TELEMETRY & SPATIAL ENGINE...", code: "GL-INIT", delay: 190 },
  { text: "CLEARANCE LEVEL: CRIMSON // ZERO COMPROMISE DIRECTIVE ACTIVE.", code: "CLEAR-99", delay: 250 },
  { text: "ACCESS GRANTED. COMMENCING DIGITAL HEIST.", code: "READY", delay: 350 },
];

export function TerminalBoot({ onComplete }: TerminalBootProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [lines, setLines] = useState<typeof bootLogs>([]);
  const [isDismissed, setIsDismissed] = useState(false);
  const [progress, setProgress] = useState(0);

  const finishBoot = useCallback(() => {
    setIsDismissed(true);
    heistAudio.playAccessGranted();
    setTimeout(() => {
      onComplete();
    }, 600);
  }, [onComplete]);

  const handleStart = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
    // User gesture activates audio engine
    heistAudio.startSound();
    heistAudio.playClick();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    const runNextLine = () => {
      if (currentIndex < bootLogs.length) {
        const item = bootLogs[currentIndex];
        setLines((prev) => [...prev, item]);
        setProgress(Math.round(((currentIndex + 1) / bootLogs.length) * 100));
        heistAudio.playBlip();
        currentIndex++;
        timer = setTimeout(runNextLine, item.delay);
      } else {
        timer = setTimeout(finishBoot, 450);
      }
    };

    timer = setTimeout(runNextLine, 100);

    return () => clearTimeout(timer);
  }, [hasStarted, finishBoot]);

  // Keyboard support: Enter to start, Escape to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !hasStarted) {
        handleStart();
      } else if (e.key === "Escape") {
        finishBoot();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasStarted, handleStart, finishBoot]);

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={!hasStarted ? handleStart : undefined}
          className="fixed inset-0 z-[999999] bg-[#070707] text-heist-text flex flex-col justify-between p-6 sm:p-10 md:p-14 font-mono-code select-none overflow-hidden"
        >
          {/* Subtle surveillance scanlines & red glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(229,9,20,0.15),_transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.6)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

          {/* Top Bar Telemetry */}
          <div className="relative z-10 flex items-center justify-between border-b border-[#222] pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-heist-red animate-ping" />
              <div className="flex items-center gap-2 text-xs text-heist-muted tracking-widest uppercase">
                <Terminal className="w-4 h-4 text-heist-red" />
                <span>TERMINAL_HEIST // OS v5.2</span>
                <span className="text-heist-border">|</span>
                <span className="text-emerald-400">SECURE SHELL</span>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                finishBoot();
              }}
              className="flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-white px-3 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            >
              <FastForward className="w-3.5 h-3.5 text-heist-red" />
              <span>SKIP [ESC]</span>
            </button>
          </div>

          {/* Central Command / Interactive Prompt */}
          <div className="relative z-10 my-auto max-w-3xl w-full mx-auto">
            {!hasStarted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6 cursor-pointer group"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-heist-red/10 border border-heist-red/40 text-heist-red text-xs tracking-widest uppercase">
                  <ShieldAlert className="w-4 h-4" />
                  <span>CLASSIFIED OPERATION BRIEFING</span>
                </div>

                <div className="space-y-3">
                  <h1 className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-wider text-white">
                    SANTOSH <span className="text-heist-red">MAHATO</span>
                  </h1>
                  <p className="font-mono-code text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto uppercase tracking-widest">
                    FULL STACK DEVELOPER // THE DIGITAL HEIST PORTFOLIO
                  </p>
                </div>

                <div className="pt-4">
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-heist-red hover:bg-[#ff1a26] text-white font-mono-code font-bold text-sm tracking-wider uppercase shadow-[0_0_35px_rgba(229,9,20,0.5)] transition-all"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>[ CLICK OR PRESS ENTER TO COMMENCE HEIST ]</span>
                  </motion.div>
                </div>

                <p className="text-[11px] text-neutral-600 font-mono-code">
                  INTERACTIVE 3D PROTOCOLS ARMED • BOISAR, INDIA
                </p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <div className="border border-white/10 bg-black/60 rounded-xl p-5 sm:p-7 backdrop-blur-md space-y-2.5 shadow-2xl min-h-[280px]">
                  {lines.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-start gap-3 text-xs sm:text-sm"
                    >
                      <span className="text-heist-red font-bold">›</span>
                      <span className="text-neutral-400 font-mono-code flex-1">
                        {line.text}
                      </span>
                      <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        {line.code}
                      </span>
                    </motion.div>
                  ))}

                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-heist-red font-bold">›</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.7 }}
                      className="inline-block w-2.5 h-4 bg-heist-red"
                    />
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] text-neutral-400 font-mono-code">
                    <span>SYSTEM_SYNCHRONIZATION</span>
                    <span className="text-heist-red font-bold">{progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-heist-red to-orange-500"
                      style={{ width: `${progress}%` }}
                      transition={{ ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Coordinates & Disclaimer */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#222] pt-4 text-[10px] text-neutral-500">
            <div className="flex items-center gap-3">
              <span>LAT: 19.8038° N</span>
              <span>•</span>
              <span>LNG: 72.7544° E</span>
              <span>•</span>
              <span>SECTOR: BOISAR // MUMBAI</span>
            </div>
            <div>STATUS: DEFCON 1 // 3D HARDWARE ACCELERATED</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
