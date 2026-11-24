"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { heistAudio } from "@/lib/audioEngine";

export function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Smooth mouse-responsive 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 160, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax tilt angles
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const lightX = useTransform(smoothX, [-0.5, 0.5], [15, 85]);
  const lightY = useTransform(smoothY, [-0.5, 0.5], [15, 85]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    heistAudio.playBlip();
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative z-20 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] aspect-[825/1024] mx-auto select-none perspective-[1200px]"
    >
      {/* Volumetric Red Atmospheric Spotlight behind the poster */}
      <div className="absolute inset-0 -m-8 rounded-3xl bg-heist-red/25 blur-[90px] pointer-events-none transform -translate-y-2 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-heist-red/40 via-transparent to-heist-red/20 blur-xl pointer-events-none opacity-70" />

      {/* 3D Tilted Card Container */}
      <motion.div
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(229,9,20,0.35)] border border-heist-red/40 hover:border-heist-red transition-all duration-500 bg-[#09090c] group cursor-pointer"
      >
        {/* Dynamic Specular Crimson Glare tracking cursor */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-70 mix-blend-screen transition-opacity duration-300 z-20"
            style={{
              background: useTransform(
                [lightX, lightY],
                ([lx, ly]) =>
                  `radial-gradient(circle at ${lx}% ${ly}%, rgba(255, 255, 255, 0.35) 0%, rgba(229, 9, 20, 0.3) 30%, transparent 65%)`
              ),
            }}
          />
        )}

        {/* Ambient Top Crimson Laser Seam */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-heist-red to-transparent z-30" />

        {/* Full Official Operative Poster Artwork */}
        <div className="relative w-full h-full">
          <Image
            src="/images/profile/santosh-heist-poster.jpg"
            alt="Santosh Mahato — Money Heist Developer Profile"
            fill
            priority
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 450px"
            className="object-contain sm:object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
        </div>

        {/* Interactive Holographic Depth Ring on Hover */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 border-2 border-heist-red/60 rounded-2xl pointer-events-none shadow-[inset_0_0_20px_rgba(229,9,20,0.4)] z-30"
        />
      </motion.div>
    </div>
  );
}
