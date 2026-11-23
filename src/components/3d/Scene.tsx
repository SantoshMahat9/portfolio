"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { FloatingObjects } from "./FloatingObjects";

export function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (!mounted || prefersReducedMotion) {
    // Clean, high-performance static fallback
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-orange/15 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <ambientLight intensity={0.7} />
        {/* Main fiery orange rim light */}
        <pointLight position={[-6, 3, 4]} intensity={45} color="#FF4D1C" />
        {/* Warm yellow key light */}
        <pointLight position={[6, -2, 3]} intensity={35} color="#FFC247" />
        {/* Red accent light from below */}
        <pointLight position={[0, -5, 2]} intensity={25} color="#E93616" />
        {/* Soft directional fill */}
        <directionalLight position={[0, 5, 5]} intensity={0.9} color="#FFFFFF" />

        <Suspense fallback={null}>
          <FloatingObjects />
        </Suspense>
      </Canvas>
    </div>
  );
}
