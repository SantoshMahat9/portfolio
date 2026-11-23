"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Sparkles, LayoutGrid, Layers, ChevronDown } from "lucide-react";

export function DirectionSwitcher() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const concepts = [
    {
      id: "concept-a",
      name: "3D Immersive",
      href: "/",
      icon: Box,
      activeBg: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    },
    {
      id: "concept-b",
      name: "Dark Futuristic",
      href: "/concept-b",
      icon: Sparkles,
      activeBg: "bg-purple-500/20 text-purple-400 border-purple-500/50",
    },
    {
      id: "concept-c",
      name: "Premium Minimal",
      href: "/concept-c",
      icon: LayoutGrid,
      activeBg: "bg-white/20 text-white border-white/50",
    },
  ];

  const currentConcept =
    pathname === "/concept-b"
      ? concepts[1]
      : pathname === "/concept-c"
      ? concepts[2]
      : concepts[0];

  return (
    <aside
      aria-label="Design Direction Switcher"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2"
    >
      {/* Floating Concepts Bar (collapsible or open on desktop) */}
      <div
        className={`flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/85 backdrop-blur-2xl border border-white/20 shadow-2xl text-xs font-mono-code transition-all duration-300 ${
          isExpanded ? "scale-100 opacity-100" : "hidden sm:flex"
        }`}
      >
        <div className="flex items-center gap-1.5 px-2.5 py-1 text-white/50 border-r border-white/10 text-[10px] font-bold tracking-wider">
          <Layers className="w-3 h-3 text-brand-orange" />
          <span>STYLES</span>
        </div>

        <nav className="flex items-center gap-1">
          {concepts.map((concept) => {
            const isActive = currentConcept.id === concept.id;
            const Icon = concept.icon;

            return (
              <Link
                key={concept.id}
                href={concept.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap border text-xs ${
                  isActive
                    ? `${concept.activeBg} shadow-md scale-[1.02]`
                    : "text-white/70 hover:text-white hover:bg-white/10 border-transparent"
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{concept.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Trigger Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="sm:hidden flex items-center gap-1.5 px-3 py-2 rounded-full bg-brand-surface border border-white/20 text-xs font-mono-code text-white shadow-xl"
        aria-label="Toggle Design Direction Menu"
      >
        <Layers className="w-3.5 h-3.5 text-brand-orange" />
        <span>Theme: {currentConcept.name}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
      </button>
    </aside>
  );
}
