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
    // Clean static fallback
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-heist-red/10 blur-3xl" />
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
        <ambientLight intensity={0.5} />
        {/* Main Heist crimson rim light */}
        <pointLight position={[6, 3, 3]} intensity={40} color="#E50914" />
        {/* Deep dark red fill */}
        <pointLight position={[-6, -2, 2]} intensity={25} color="#720D12" />
        {/* Soft overhead white directional */}
        <directionalLight position={[0, 5, 5]} intensity={0.8} color="#FFFFFF" />

        <Suspense fallback={null}>
          <FloatingObjects />
        </Suspense>
      </Canvas>
    </div>
  );
}
