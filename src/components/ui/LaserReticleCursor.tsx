"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function LaserReticleCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth springs for high-precision cursor reticle lag
  const cursorX = useSpring(-100, { stiffness: 600, damping: 35 });
  const cursorY = useSpring(-100, { stiffness: 600, damping: 35 });

  const ringX = useSpring(-100, { stiffness: 220, damping: 25 });
  const ringY = useSpring(-100, { stiffness: 220, damping: 25 });

  useEffect(() => {
    // Only enable on desktop pointer
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("button, a, input, textarea, select, [role='button'], .cursor-pointer");
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999999] overflow-hidden">
      {/* Central Laser Point */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`w-2 h-2 rounded-full bg-heist-red shadow-[0_0_10px_#e50914,0_0_20px_#e50914] transition-transform duration-100 ${
          isClicking ? "scale-50" : isHovered ? "scale-125 bg-white shadow-[0_0_12px_#fff]" : "scale-100"
        }`}
      />

      {/* Outer Tactical Reticle Brackets */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.6 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`w-9 h-9 rounded-full border border-heist-red/40 flex items-center justify-center transition-colors duration-200 ${
          isHovered ? "border-heist-red shadow-[0_0_20px_rgba(229,9,20,0.5)] bg-heist-red/10" : ""
        }`}
      >
        {/* Subtle crosshair ticks */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-heist-red/60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-heist-red/60" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-1.5 bg-heist-red/60" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-0.5 w-1.5 bg-heist-red/60" />
      </motion.div>
    </div>
  );
}
