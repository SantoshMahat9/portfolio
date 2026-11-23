"use client";

import React from "react";

export function HeistMarquee() {
  const items = [
    "THE DIGITAL HEIST",
    "SANTOSH MAHATO",
    "FULL STACK ARCHITECT",
    "REACT • NEXT.JS • .NET • SQL • THREE.JS",
    "ZERO FAILURE TOLERANCE",
    "ST. JOHN COLLEGE OF ENGINEERING",
    "SURGICAL PRECISION",
    "KANTASCRYPT OPERATIVE",
    "MISSION STATUS: 100% UNSTOPPABLE",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-heist-dark border-y border-heist-red/30 py-3.5 select-none shadow-[0_0_25px_rgba(229,9,20,0.15)]">
      {/* Red ambient side fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-heist-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-heist-black to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-8 items-center font-bebas text-lg sm:text-2xl tracking-widest text-neutral-300">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-6">
            <span className="hover:text-heist-red transition-colors whitespace-nowrap">
              {text}
            </span>
            <span className="text-heist-red text-sm font-bold">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
