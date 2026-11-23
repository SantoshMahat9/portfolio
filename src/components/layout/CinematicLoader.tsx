"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CinematicLoader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Quick, smooth, cinematic progress animation (1.2s total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 250);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 10;
        return Math.min(prev + increment, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-heist-black film-grain select-none"
        >
          {/* Subtle red spotlight glow in center */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-heist-red/10 blur-[130px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-md px-6">
            {/* Top Classified Operation Header */}
            <div className="flex items-center gap-2 text-xs font-technical uppercase tracking-[0.25em] text-heist-red font-semibold">
              <span className="w-2 h-2 rounded-full bg-heist-red animate-ping" />
              <span>CLASSIFIED OPERATION // SANTOSH MAHATO</span>
            </div>

            {/* Core Loading Statement */}
            <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-heist-text">
              THE OPERATION IS ABOUT TO BEGIN.
            </h2>

            {/* Red Progress Indicator Bar */}
            <div className="w-64 sm:w-80 h-[2px] bg-heist-border rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-heist-red shadow-lg shadow-heist-red/50"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Counter */}
            <div className="flex items-center justify-between w-64 sm:w-80 text-xs font-technical text-heist-muted">
              <span>INITIALIZING SECURE PROTOCOLS</span>
              <span className="text-heist-red font-bold font-technical">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
