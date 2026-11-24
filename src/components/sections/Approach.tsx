"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, Compass, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

interface DoctrinePhase {
  phase: string;
  codename: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const DOCTRINE_PHASES: DoctrinePhase[] = [
  {
    phase: "01",
    codename: "RECONNAISSANCE",
    title: "Domain Analysis & Discovery",
    summary: "Deconstruct the core requirements, analyze user pain points, and define API contracts and data models before writing a line of code.",
    deliverables: [
      "Requirement deconstruction & edge case analysis",
      "Relational schema & entity-relationship modeling",
      "API contract specification & interface definitions",
    ],
    icon: Search,
  },
  {
    phase: "02",
    codename: "BLUEPRINT",
    title: "System Architecture",
    summary: "Engineer resilient backend controllers, modular micro-components, and scalable data persistence with clean separation of concerns.",
    deliverables: [
      "ACID-compliant SQL tables & normalized indexing",
      "Defensive input sanitization & rate limiting",
      "Modular full-stack component architecture",
    ],
    icon: Compass,
  },
  {
    phase: "03",
    codename: "EXECUTION",
    title: "Agile Development & Delivery",
    summary: "Build in disciplined, working iterations. Practice agile rituals with daily stand-ups, transparent code reviews, and reproducible commits.",
    deliverables: [
      "Working code delivered in small incremental sprints",
      "Peer review & defensive refactoring cycles",
      "Automated linting & strict TypeScript type checking",
    ],
    icon: Cpu,
  },
  {
    phase: "04",
    codename: "EXTRACTION",
    title: "Performance & Polish",
    summary: "Optimize bundles, enforce sub-second load times, ensure WCAG keyboard accessibility, and deliver dependable production-grade software.",
    deliverables: [
      "Lighthouse performance & asset optimization",
      "Cross-browser and mobile responsive verification",
      "Full fallback states for network and WebGL errors",
    ],
    icon: CheckCircle2,
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="relative py-28 sm:py-36 bg-heist-black film-grain overflow-hidden border-t border-heist-border">
      {/* Background ambient lighting & faint vault schematic */}
      <div className="absolute top-1/2 -right-48 w-[400px] h-[400px] rounded-full bg-heist-red/10 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-24 left-12 w-64 h-64 pointer-events-none opacity-[0.05] select-none">
        <Image
          src="/images/vault-schematic.svg"
          alt=""
          width={256}
          height={256}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="ENGINEERING DOCTRINE // 05"
          title="THE MASTER"
          highlight="BLUEPRINT."
          subtitle="Four disciplined operational phases guiding every database schema, backend controller, and user experience."
        />

        {/* 4-Step Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {DOCTRINE_PHASES.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 rounded-2xl bg-heist-dark border border-heist-border hover:border-heist-red/60 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Top Corner Phase Number & Codename */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-heist-border">
                    <div>
                      <span className="font-bebas text-4xl text-heist-red tracking-wider block">
                        PHASE {item.phase}
                      </span>
                      <span className="text-[9px] font-technical text-heist-muted uppercase tracking-widest font-bold">
                        //{item.codename}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-heist-red/15 text-heist-muted group-hover:text-heist-red transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bebas text-2xl text-white tracking-wide group-hover:text-heist-red transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-sans-body text-xs text-heist-muted leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="pt-3 border-t border-white/5 space-y-1.5">
                      <span className="text-[10px] font-technical text-neutral-400 uppercase tracking-wider block font-bold">
                        Operational Deliverables:
                      </span>
                      {item.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-[11px] text-neutral-300 font-sans-body leading-tight">
                          <span className="text-heist-red font-mono-code font-bold mt-0.5">›</span>
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-heist-border flex items-center justify-between text-[10px] font-technical text-heist-muted">
                  <span>DOCTRINE // {item.phase}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-heist-red group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
