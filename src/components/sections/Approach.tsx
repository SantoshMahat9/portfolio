"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Brain, Palette, Code2, Rocket, ArrowRight } from "lucide-react";

export function ApproachSection() {
  const icons = [Brain, Palette, Code2, Rocket];

  return (
    <section id="approach" className="relative py-28 sm:py-36 bg-heist-black film-grain overflow-hidden border-t border-heist-border">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-48 w-[400px] h-[400px] rounded-full bg-heist-red/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="ENGINEERING DOCTRINE // 05"
          title="EVERY DETAIL"
          highlight="MATTERS."
          subtitle="Four core engineering principles guiding every line of code, architecture decision, and user interface."
        />

        {/* 4-Step Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {profileData.principles.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-heist-dark border border-heist-border hover:border-heist-red/60 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Top Corner Number */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-heist-border">
                  <span className="font-bebas text-4xl text-heist-red tracking-wider">
                    {item.number}
                  </span>
                  <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-heist-red/15 text-heist-muted group-hover:text-heist-red transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bebas text-3xl text-white tracking-wide group-hover:text-heist-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-technical text-xs font-bold text-neutral-200">
                    {item.description}
                  </p>
                  <p className="font-sans-body text-xs text-heist-muted leading-relaxed pt-2 border-t border-white/5">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-heist-border flex items-center justify-between text-[10px] font-technical text-heist-muted">
                  <span>DISCIPLINE {item.number}</span>
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
