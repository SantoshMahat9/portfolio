"use client";

import React, { useState, useEffect, useRef } from "react";
import { Radio, ShieldCheck } from "lucide-react";

export function PrecisionHUD() {
  const coordsRef = useRef<HTMLSpanElement>(null);
  const [timeStr, setTimeStr] = useState("");

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

      {/* Right Telemetry */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Real-time Cursor Coordinates */}
        <div className="hidden lg:flex items-center gap-1">
          <span className="text-neutral-500">CALIPER:</span>
          <span ref={coordsRef} className="text-heist-red font-bold">
            X:0PX Y:0PX
          </span>
        </div>

        <span className="text-white/15 hidden sm:inline">|</span>

        {/* Live IST Time */}
        <span className="text-neutral-300">
          IST {timeStr}
        </span>
      </div>
    </div>
  );
}
