"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Layers, Terminal, Database, Wrench, ShieldCheck } from "lucide-react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend Architecture": <Layers className="w-4 h-4 text-heist-red" />,
    "Backend Engineering": <Terminal className="w-4 h-4 text-heist-red" />,
    "Database Systems": <Database className="w-4 h-4 text-heist-red" />,
    "Development Tools & Environment": <Wrench className="w-4 h-4 text-heist-red" />,
  };

  const categoriesList = ["ALL", ...skillCategories.map((c) => c.category)];

  const displayed =
    activeCategory === "ALL"
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-[#0B0B0B] film-grain overflow-hidden border-t border-heist-border">
      {/* Background ambient red aura */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-heist-red/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="TACTICAL ARSENAL // 02"
          title="THE TOOLS"
          highlight="OF THE OPERATION."
          subtitle="A verified technical inventory across frontend architecture, server-side logic, and structured database persistence."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-technical font-semibold tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-heist-red text-white border-heist-red shadow-lg shadow-heist-red/25"
                  : "bg-heist-dark text-heist-muted hover:text-white hover:bg-heist-surface border-heist-border"
              }`}
            >
              {cat === "ALL" ? "ALL EQUIPMENT" : cat}
            </button>
          ))}
        </div>

        {/* Arsenal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayed.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-heist-dark border border-heist-border hover:border-heist-red/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-heist-border">
                  <div className="p-2 rounded-md bg-white/5 group-hover:bg-heist-red/15 transition-colors">
                    {categoryIcons[group.category] || <Terminal className="w-4 h-4 text-heist-red" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-technical text-heist-red font-bold tracking-widest block">
                      {group.tag}
                    </span>
                    <h3 className="font-bebas text-2xl text-white tracking-wide">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-heist-border transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-technical text-xs font-bold text-white tracking-wide">
                          {skill.name}
                        </span>
                        <ShieldCheck className="w-3.5 h-3.5 text-heist-red" />
                      </div>
                      <p className="text-[11px] text-heist-muted font-sans-body mt-1 leading-snug">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-heist-border flex items-center justify-between text-[10px] font-technical text-heist-muted">
                <span>{group.skills.length} VERIFIED ASSETS</span>
                <span className="text-heist-red font-bold">READY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
