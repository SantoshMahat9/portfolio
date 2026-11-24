"use client";

import React, { Suspense, useState, useEffect, Component, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { FloatingObjects } from "./FloatingObjects";

// Error boundary to gracefully catch any WebGL crash
class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("WebGL Scene encountered an error, rendering visual fallback:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

export function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setHasWebGL(checkWebGLSupport());

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = () => setPrefersReducedMotion(mediaQuery.matches);
    const handleResize = () => checkMobile();

    mediaQuery.addEventListener("change", handleMotionChange);
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Cinematic CSS lighting fallback when WebGL is unsupported or motion is reduced
  const staticFallback = (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-heist-red/15 blur-[140px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-heist-red-dark/10 blur-[120px]" />
    </div>
  );

  if (!mounted || !hasWebGL || prefersReducedMotion) {
    return staticFallback;
  }

  return (
    <WebGLErrorBoundary fallback={staticFallback}>
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 45 }}
          gl={{
            antialias: !isMobile,
            alpha: true,
            powerPreference: isMobile ? "default" : "high-performance",
            failIfMajorPerformanceCaveat: false,
          }}
          dpr={isMobile ? [1, 1] : [1, 1.5]}
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
            <FloatingObjects isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}
