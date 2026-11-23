"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";

export function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse-responsive 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const lightX = useTransform(smoothX, [-0.5, 0.5], [15, 85]);
  const lightY = useTransform(smoothY, [-0.5, 0.5], [15, 85]);

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
      className="relative z-20 flex flex-col items-center justify-center max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] mx-auto select-none perspective-[1200px]"
    >
      {/* Background Volumetric Glow Halo */}
      <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-tr from-brand-orange-deep via-brand-orange to-brand-yellow opacity-40 blur-3xl pointer-events-none transform -translate-y-6" />

      {/* 3D Tilted Card Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-gradient-to-b from-brand-surface/80 to-brand-dark/95 backdrop-blur-md group"
      >
        {/* Dynamic Specular Rim Light that tracks cursor */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen transition-opacity duration-300"
          style={{
            background: useTransform(
              [lightX, lightY],
              ([lx, ly]) =>
                `radial-gradient(circle at ${lx}% ${ly}%, rgba(255, 194, 71, 0.45) 0%, rgba(255, 77, 28, 0.25) 35%, transparent 70%)`
            ),
          }}
        />

        {/* Ambient Top Rim Highlight */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-yellow/80 to-transparent z-30" />

        {/* The 3D Rendered Portrait Image */}
        <div className="relative w-full h-full">
          <Image
            src="/images/profile/santosh-portrait.png"
            alt="Santosh Sanjeev Mahato — 3D Character Portrait"
            fill
            priority
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 460px, 540px"
            className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Bottom Gradient Fade for Natural Blend with the Dark Surface */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#171717] via-[#171717]/60 to-transparent z-10" />

          {/* Left fiery rim light reflection gradient */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-orange/30 to-transparent pointer-events-none mix-blend-screen z-10" />

          {/* Right warm amber rim light reflection */}
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-yellow/20 to-transparent pointer-events-none mix-blend-screen z-10" />
        </div>

        {/* Floating Identity Hologram Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between p-3.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-xs text-brand-secondary shadow-lg"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="flex items-center space-x-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange" />
            </span>
            <div>
              <p className="font-semibold text-white tracking-wide flex items-center gap-1.5">
                Santosh Mahato
                <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
              </p>
              <p className="text-[11px] text-brand-muted">3D Creative Identity Model</p>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] text-brand-yellow font-mono-code font-medium">
            <Sparkles className="w-3 h-3 text-brand-yellow" />
            <span>RENDER v1.0</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Spatial Tech Labels */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute -left-12 top-1/4 z-30 px-3 py-1.5 rounded-xl bg-brand-surface/90 border border-brand-orange/40 backdrop-blur-md text-[11px] font-mono-code text-white shadow-xl shadow-brand-orange/10 items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
        FULL STACK ARCHITECT
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="hidden md:flex absolute -right-12 bottom-1/3 z-30 px-3 py-1.5 rounded-xl bg-brand-surface/90 border border-brand-yellow/40 backdrop-blur-md text-[11px] font-mono-code text-white shadow-xl shadow-brand-yellow/10 items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
        CREATIVE 3D DEVELOPER
      </motion.div>
    </div>
  );
}
