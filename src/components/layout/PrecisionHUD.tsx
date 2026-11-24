"use client";

import React, { useState, useEffect, useRef } from "react";
import { heistAudio } from "@/lib/audioEngine";
import { Volume2, VolumeX, Radio, ShieldCheck, SkipForward } from "lucide-react";

export function PrecisionHUD() {
  const coordsRef = useRef<HTMLSpanElement>(null);
  const [timeStr, setTimeStr] = useState("");
  const [audioState, setAudioState] = useState(heistAudio.getState());

  useEffect(() => {
    // Listen to audio state changes
    const unsub = heistAudio.subscribe((state) => setAudioState(state));
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

  const handleNextTrack = (e: React.MouseEvent) => {
    e.stopPropagation();
    heistAudio.playClick();
    heistAudio.nextTrack();
  };

  const isAudioActive = audioState.isPlaying && !audioState.isMuted;

  return (
    <div className="w-full h-7 sm:h-8 bg-[#09090b]/95 border-t border-white/10 flex items-center justify-between px-3 sm:px-6 lg:px-8 font-mono-code text-[9px] sm:text-[10px] text-neutral-400 select-none pointer-events-auto">
      {/* Left Telemetry */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse" />
          <span>SYS_ONLINE</span>
        </span>

        <span className="text-white/15 hidden sm:inline">|</span>

        <span className="text-heist-red font-semibold tracking-wider flex items-center gap-1">
          <Radio className="w-3 h-3 text-heist-red animate-pulse" />
          <span className="hidden xs:inline">[ HEIST_PROTOCOL: OP_BOISAR ]</span>
        </span>

        <span className="text-white/15 hidden md:inline">|</span>

        <span className="text-neutral-400 hidden md:inline-flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-heist-red" />
          <span>OPERATIVE: SANTOSH MAHATO</span>
        </span>
      </div>

      {/* Right Telemetry & Audio Toggle */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Real-time Cursor Coordinates */}
        <div className="hidden lg:flex items-center gap-1">
          <span className="text-neutral-500">CALIPER:</span>
          <span ref={coordsRef} className="text-heist-red font-bold">
            X:0PX Y:0PX
          </span>
        </div>

        <span className="text-white/15 hidden lg:inline">|</span>

        {/* Live IST Time */}
        <span className="text-neutral-300 hidden sm:inline">
          IST {timeStr}
        </span>

        <span className="text-white/15 hidden sm:inline">|</span>

        {/* Audio Toggle with Animated Equalizer and Track Switcher */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleToggleAudio}
            title={!isAudioActive ? "Play Music (Bella Ciao)" : "Pause Music"}
            className={`flex items-center gap-1 px-2 py-0.5 rounded border transition-all cursor-pointer ${
              isAudioActive
                ? "bg-heist-red/15 border-heist-red/50 text-white shadow-[0_0_10px_rgba(229,9,20,0.3)]"
                : "bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:border-white/20"
            }`}
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-2.5 h-2.5 text-heist-red animate-pulse" />
                <div className="flex items-end gap-0.5 h-2">
                  <span className="w-0.5 h-full bg-heist-red animate-[pulse_0.6s_ease-in-out_infinite]" />
                  <span className="w-0.5 h-2/3 bg-heist-red animate-[pulse_0.8s_ease-in-out_infinite_0.2s]" />
                  <span className="w-0.5 h-4/5 bg-heist-red animate-[pulse_0.7s_ease-in-out_infinite_0.4s]" />
                </div>
                <span className="font-bold text-heist-red max-w-[90px] truncate hidden xs:inline">
                  {audioState.currentTrack.title}
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-2.5 h-2.5 text-neutral-500" />
                <span className="hidden xs:inline text-[9px]">MUTED</span>
              </>
            )}
          </button>

          {/* Quick Skip Song in HUD */}
          <button
            onClick={handleNextTrack}
            title="Change Song (Next Track)"
            className="p-1 rounded border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <SkipForward className="w-2.5 h-2.5 text-heist-red" />
          </button>
        </div>
      </div>
    </div>
  );
}
