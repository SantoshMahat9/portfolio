"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { heistAudio } from "@/lib/audioEngine";
import { Volume2, VolumeX, Radio, ShieldCheck } from "lucide-react";

export function PrecisionHUD() {
  const coordsRef = useRef<HTMLSpanElement>(null);
  const [timeStr, setTimeStr] = useState("");
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Listen to audio state changes
    const unsub = heistAudio.subscribe((muted) => setIsMuted(muted));
    return () => unsub();
  }, []);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
    let rafId: number | null = null;
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;

    if (!isTouch) {
      handleMouseMove = (e: MouseEvent) => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          if (coordsRef.current) {
            coordsRef.current.innerText = `X:${e.clientX}PX Y:${e.clientY}PX`;
          }
          rafId = null;
        });
      };
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      if (handleMouseMove) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (rafId) cancelAnimationFrame(rafId);
      clearInterval(timer);
    };
  }, []);

  const handleToggleAudio = () => {
    heistAudio.toggleSound();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-16 sm:top-20 left-0 right-0 z-40 h-8 sm:h-9 bg-[#09090b]/90 backdrop-blur-md border-y border-white/5 flex items-center justify-between px-3 sm:px-6 lg:px-8 font-mono-code text-[10px] sm:text-[11px] text-neutral-400 select-none pointer-events-auto"
    >
      {/* Left Telemetry */}
      <div className="flex items-center gap-2 sm:gap-4 overflow-hidden text-ellipsis whitespace-nowrap">
        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse" />
          <span>SYS_ONLINE</span>
        </span>

        <span className="text-white/10 hidden sm:inline">|</span>

        <span className="text-heist-red font-semibold tracking-wider flex items-center gap-1">
          <Radio className="w-3 h-3 text-heist-red animate-pulse" />
          <span className="hidden xs:inline">[ HEIST_PROTOCOL: OP_BOISAR ]</span>
        </span>

        <span className="text-white/10 hidden md:inline">|</span>

        <span className="text-neutral-400 hidden md:inline-flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-heist-red" />
          <span>OPERATIVE: SANTOSH MAHATO</span>
        </span>
      </div>

      {/* Right Telemetry & Audio Toggle */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Real-time Cursor Coordinates */}
        <div className="hidden lg:flex items-center gap-1.5">
          <span className="text-neutral-600">CALIPER:</span>
          <span ref={coordsRef} className="text-heist-red font-bold">
            X:0PX Y:0PX
          </span>
        </div>

        <span className="text-white/10 hidden lg:inline">|</span>

        {/* Live IST Time */}
        <span className="text-neutral-300 hidden sm:inline">
          IST {timeStr}
        </span>

        <span className="text-white/10 hidden sm:inline">|</span>

        {/* Audio Toggle with Animated Equalizer */}
        <button
          onClick={handleToggleAudio}
          title={isMuted ? "Enable Ambient Audio" : "Mute Ambient Audio"}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded border transition-all cursor-pointer ${
            !isMuted
              ? "bg-heist-red/15 border-heist-red/50 text-white shadow-[0_0_12px_rgba(229,9,20,0.3)]"
              : "bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:border-white/20"
          }`}
        >
          {!isMuted ? (
            <>
              <Volume2 className="w-3 h-3 text-heist-red animate-pulse" />
              <div className="flex items-end gap-0.5 h-2.5">
                <span className="w-0.5 h-full bg-heist-red animate-[pulse_0.6s_ease-in-out_infinite]" />
                <span className="w-0.5 h-2/3 bg-heist-red animate-[pulse_0.8s_ease-in-out_infinite_0.2s]" />
                <span className="w-0.5 h-4/5 bg-heist-red animate-[pulse_0.7s_ease-in-out_infinite_0.4s]" />
              </div>
              <span className="font-bold text-heist-red hidden xs:inline">AUDIO ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3 h-3 text-neutral-500" />
              <span className="hidden xs:inline">AUDIO MUTED</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
