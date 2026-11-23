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

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms (subtle, controlled range)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);
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
      className="relative z-20 w-[240px] sm:w-[280px] md:w-[320px] aspect-[4/5] mx-auto select-none perspective-[1000px]"
    >
      {/* Background Volumetric Glow Halo */}
      <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-tr from-brand-orange-deep via-brand-orange to-brand-yellow opacity-35 blur-2xl pointer-events-none" />

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
        className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-brand-surface/90 to-brand-dark backdrop-blur-md group"
      >
        {/* Dynamic Specular Rim Light tracking cursor */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen transition-opacity duration-300"
          style={{
            background: useTransform(
              [lightX, lightY],
              ([lx, ly]) =>
                `radial-gradient(circle at ${lx}% ${ly}%, rgba(255, 194, 71, 0.5) 0%, rgba(255, 77, 28, 0.25) 40%, transparent 70%)`
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
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
            className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Bottom Gradient Fade for Natural Blend with the Dark Surface */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#171717] via-[#171717]/60 to-transparent z-10" />

          {/* Left fiery rim light reflection gradient */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-orange/30 to-transparent pointer-events-none mix-blend-screen z-10" />

          {/* Right warm amber rim light reflection */}
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-yellow/20 to-transparent pointer-events-none mix-blend-screen z-10" />
        </div>

        {/* Integrated Identity Badge at bottom of card */}
        <div
          className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between p-2.5 rounded-xl bg-black/65 backdrop-blur-xl border border-white/10 text-xs text-brand-secondary shadow-lg"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
            </span>
            <div>
              <p className="font-semibold text-white text-[11px] tracking-wide flex items-center gap-1">
                Santosh Mahato
                <ShieldCheck className="w-3 h-3 text-brand-yellow" />
              </p>
              <p className="text-[10px] text-brand-muted">Full Stack Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[9px] text-brand-yellow font-mono-code font-medium">
            <Sparkles className="w-2.5 h-2.5 text-brand-yellow" />
            <span>3D IDENTITY</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
