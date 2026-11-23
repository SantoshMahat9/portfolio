"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Crosshair } from "lucide-react";

export function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse-responsive 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms (subtle, controlled range)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const lightX = useTransform(smoothX, [-0.5, 0.5], [20, 80]);
  const lightY = useTransform(smoothY, [-0.5, 0.5], [20, 80]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative z-20 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] aspect-[4/5] mx-auto select-none perspective-[1000px]"
    >
      {/* Background Volumetric Red Spotlight Glow behind portrait */}
      <div className="absolute inset-0 -m-6 rounded-full bg-heist-red/25 blur-3xl pointer-events-none transform -translate-y-4" />

      {/* 3D Tilted Card Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-heist-border hover:border-heist-red/60 transition-colors duration-500 bg-gradient-to-b from-heist-surface to-heist-black backdrop-blur-md group"
      >
        {/* Dynamic Specular Crimson Rim Light tracking cursor */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen transition-opacity duration-300"
          style={{
            background: useTransform(
              [lightX, lightY],
              ([lx, ly]) =>
                `radial-gradient(circle at ${lx}% ${ly}%, rgba(229, 9, 20, 0.45) 0%, rgba(114, 13, 18, 0.25) 45%, transparent 70%)`
            ),
          }}
        />

        {/* Ambient Top Crimson Rim Highlight */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-heist-red to-transparent z-30" />

        {/* 3D Character Portrait */}
        <div className="relative w-full h-full">
          <Image
            src="/images/profile/santosh-portrait.png"
            alt="Santosh Mahato — 3D Character Portrait"
            fill
            priority
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 400px"
            className="object-cover object-top scale-105 group-hover:scale-108 transition-transform duration-700 ease-out"
          />

          {/* Bottom Gradient Fade for Natural Blend with the Dark Surface */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-heist-black via-heist-black/70 to-transparent z-10" />

          {/* Left dramatic red rim light reflection */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-heist-red/35 to-transparent pointer-events-none mix-blend-screen z-10" />

          {/* Right subtle dark red rim light */}
          <div className="absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-heist-red-dark/30 to-transparent pointer-events-none mix-blend-screen z-10" />
        </div>

        {/* Tactical Crosshair Watermark */}
        <div className="absolute top-3 right-3 z-20 text-heist-red/60 pointer-events-none">
          <Crosshair className="w-4 h-4 animate-pulse" />
        </div>

        {/* Integrated Identity Badge at bottom of card */}
        <div
          className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between p-3 rounded-xl bg-black/80 backdrop-blur-xl border border-heist-border text-xs text-heist-text shadow-lg"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center space-x-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-heist-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-heist-red" />
            </span>
            <div>
              <p className="font-technical font-bold text-white text-[12px] tracking-wide flex items-center gap-1.5">
                Santosh Mahato
                <ShieldCheck className="w-3.5 h-3.5 text-heist-red" />
              </p>
              <p className="text-[10px] text-heist-muted font-technical">Full Stack Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded bg-heist-red/20 border border-heist-red/40 text-[10px] text-heist-red font-technical font-bold tracking-wider">
            <span>OPERATIVE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
