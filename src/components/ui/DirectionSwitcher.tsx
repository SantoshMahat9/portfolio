"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Sparkles, LayoutGrid } from "lucide-react";

export function DirectionSwitcher() {
  const pathname = usePathname();

  const concepts = [
    {
      id: "concept-a",
      name: "A. Immersive 3D",
      href: "/",
      tag: "Vibrant & Cinematic",
      icon: Box,
      accent: "from-orange-500 to-amber-500",
      activeBg: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    },
    {
      id: "concept-b",
      name: "B. Dark Futuristic",
      href: "/concept-b",
      tag: "Violet & Cyber HUD",
      icon: Sparkles,
      accent: "from-purple-500 to-indigo-500",
      activeBg: "bg-purple-500/20 text-purple-400 border-purple-500/50",
    },
    {
      id: "concept-c",
      name: "C. Premium Minimal",
      href: "/concept-c",
      tag: "Swiss & Editorial",
      icon: LayoutGrid,
      accent: "from-zinc-400 to-zinc-600",
      activeBg: "bg-white/20 text-white border-white/50",
    },
  ];

  const currentId =
    pathname === "/concept-b"
      ? "concept-b"
      : pathname === "/concept-c"
      ? "concept-c"
      : "concept-a";

  return (
    <aside
      aria-label="Design Direction Switcher"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-black/85 backdrop-blur-2xl border border-white/20 shadow-2xl text-xs font-mono-code transition-all max-w-[95vw] overflow-x-auto"
    >
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-white/50 border-r border-white/10 text-[11px] font-bold tracking-wider">
        <span>CONCEPTS</span>
      </div>

      <nav className="flex items-center gap-1">
        {concepts.map((concept) => {
          const isActive = currentId === concept.id;
          const Icon = concept.icon;

          return (
            <Link
              key={concept.id}
              href={concept.href}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all duration-300 font-semibold whitespace-nowrap border ${
                isActive
                  ? `${concept.activeBg} shadow-lg scale-[1.02]`
                  : "text-white/70 hover:text-white hover:bg-white/10 border-transparent"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{concept.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
