"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase, Calendar, MapPin, CheckCircle, Clock, Sparkles } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#141414] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-brand-orange-deep/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="02 // CAREER TIMELINE"
          title="PROFESSIONAL"
          highlight="EXPERIENCE."
          subtitle="Real-world engineering internships, upcoming roles, and hands-on contributions to collaborative software projects."
        />

        {/* Timeline Stream */}
        <div className="relative mt-12 max-w-4xl mx-auto space-y-12">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-orange via-brand-yellow to-white/10 hidden sm:block" />

          {experienceData.map((exp, index) => {
            const isUpcoming = exp.isUpcoming;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-0 sm:pl-20"
              >
                {/* Timeline Node Icon */}
                <div className="hidden sm:flex absolute left-8 -translate-x-1/2 top-6 w-8 h-8 rounded-full items-center justify-center bg-brand-dark border-2 border-brand-orange shadow-lg shadow-brand-orange/30 z-10">
                  {isUpcoming ? (
                    <Clock className="w-4 h-4 text-brand-yellow animate-spin" style={{ animationDuration: "8s" }} />
                  ) : (
                    <Briefcase className="w-4 h-4 text-brand-orange" />
                  )}
                </div>

                {/* Experience Card */}
                <div
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden shadow-xl ${
                    isUpcoming
                      ? "bg-gradient-to-br from-[#1C1815] to-brand-surface border-brand-yellow/40 hover:border-brand-yellow"
                      : "bg-brand-surface/70 border-white/10 hover:border-brand-orange/40"
                  }`}
                >
                  {/* Status Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                        isUpcoming
                          ? "bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/40"
                          : "bg-brand-orange/20 text-brand-orange border border-brand-orange/40"
                      }`}
                    >
                      {isUpcoming && <Sparkles className="w-3.5 h-3.5" />}
                      {exp.statusBadge}
                    </span>

                    <div className="flex items-center gap-4 text-xs font-mono-code text-brand-muted">
                      <span className="flex items-center gap-1.5 text-white/80">
                        <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-white/80">
                        <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                        {exp.mode}
                      </span>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="space-y-1">
                    <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-brand-orange">
                      {exp.company}
                    </p>
                  </div>

                  {/* Highlight callout if present */}
                  {exp.highlight && (
                    <div className="mt-4 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-brand-secondary font-mono-code flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-yellow shrink-0" />
                      <span>{exp.highlight}</span>
                    </div>
                  )}

                  {/* Responsibilities list */}
                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-mono-code text-brand-yellow uppercase tracking-wider font-semibold">
                      Key Highlights &amp; Scope:
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-brand-secondary leading-relaxed"
                        >
                          <CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-mono-code text-brand-muted mr-1">
                      Verified Tech:
                    </span>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-xs font-mono-code text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
