"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Terminal, Database, Cpu, Wrench, Layers, Workflow, CheckCircle2 } from "lucide-react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend Development": <Layers className="w-4 h-4 text-brand-orange" />,
    "Backend Development": <Terminal className="w-4 h-4 text-brand-yellow" />,
    "Databases & Storage": <Database className="w-4 h-4 text-brand-orange" />,
    "Programming Languages": <Cpu className="w-4 h-4 text-brand-yellow" />,
    "Developer Tools & Version Control": <Wrench className="w-4 h-4 text-brand-orange" />,
    "Engineering Concepts": <Workflow className="w-4 h-4 text-brand-yellow" />,
    "Methodologies": <CheckCircle2 className="w-4 h-4 text-brand-orange" />,
  };

  const categoriesList = ["ALL", ...skillCategories.map((c) => c.category)];

  const displayedCategories =
    activeCategory === "ALL"
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="toolkit" className="relative py-24 sm:py-32 bg-[#121214] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-brand-orange/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-brand-yellow/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="04 // CAPABILITIES & EXPERTISE"
          title="MY"
          highlight="TOOLKIT."
          subtitle="Curated languages, frameworks, databases, and engineering methodologies practiced in real-world application building."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30 border border-brand-yellow/40"
                  : "bg-brand-surface/70 text-brand-secondary hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((catGroup, idx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-brand-surface/50 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-brand-orange/15 transition-colors">
                    {categoryIcons[catGroup.category] || <Terminal className="w-4 h-4 text-brand-orange" />}
                  </div>
                  <h3 className="font-syne text-lg font-bold text-white group-hover:text-brand-yellow transition-colors">
                    {catGroup.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-2xl bg-black/30 border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono-code text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      </div>
                      {skill.levelDescription && (
                        <p className="text-xs text-brand-muted mt-1 leading-snug">
                          {skill.levelDescription}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-brand-muted">
                <span>{catGroup.skills.length} Capabilities</span>
                <span className="text-brand-orange">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
