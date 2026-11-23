"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase, Calendar, MapPin, CheckCircle, Clock, ShieldCheck } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-[#0B0B0B] film-grain overflow-hidden border-t border-heist-border">
      {/* Background ambient spotlight */}
      <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full bg-heist-red/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="CAREER LOG // 04"
          title="THE MISSIONS"
          highlight="THAT BUILT ME."
          subtitle="Real-world engineering internships, upcoming enterprise roles, and collaborative agile software production."
        />

        {/* Timeline Stream */}
        <div className="relative mt-12 max-w-4xl mx-auto space-y-12">
          {/* Vertical Crimson Timeline Guide Line */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-heist-red via-heist-red-dark to-heist-border hidden sm:block" />

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
                {/* Timeline Red Node Icon */}
                <div className="hidden sm:flex absolute left-8 -translate-x-1/2 top-6 w-8 h-8 rounded-full items-center justify-center bg-heist-black border-2 border-heist-red shadow-lg shadow-heist-red/30 z-10">
                  {isUpcoming ? (
                    <Clock className="w-4 h-4 text-heist-red animate-spin" style={{ animationDuration: "8s" }} />
                  ) : (
                    <Briefcase className="w-4 h-4 text-heist-red" />
                  )}
                </div>

                {/* Experience Mission Card */}
                <div
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden shadow-2xl ${
                    isUpcoming
                      ? "bg-gradient-to-br from-[#161011] to-heist-dark border-heist-red/40 hover:border-heist-red"
                      : "bg-heist-dark border-heist-border hover:border-heist-red/50"
                  }`}
                >
                  {/* Status Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded text-xs font-technical font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                        isUpcoming
                          ? "bg-heist-red/20 text-heist-red border border-heist-red/40"
                          : "bg-white/5 text-white border border-white/10"
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-heist-red" />
                      {exp.statusBadge}
                    </span>

                    <div className="flex items-center gap-4 text-xs font-technical text-heist-muted">
                      <span className="flex items-center gap-1.5 text-heist-text">
                        <Calendar className="w-3.5 h-3.5 text-heist-red" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-heist-muted">
                        <MapPin className="w-3.5 h-3.5 text-heist-red" />
                        {exp.mode}
                      </span>
                    </div>
                  </div>

                  {/* Role & Company Header */}
                  <div className="space-y-1">
                    <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="text-base font-technical font-semibold text-heist-red">
                      {exp.company}
                    </p>
                  </div>

                  {/* Scope Callout */}
                  <div className="mt-4 p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-heist-muted font-sans-body leading-relaxed">
                    {exp.scopeSummary}
                  </div>

                  {/* Responsibilities list */}
                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-technical text-white uppercase tracking-wider font-bold">
                      Operational Deliverables:
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-sans-body leading-relaxed"
                        >
                          <CheckCircle className="w-4 h-4 text-heist-red mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="mt-6 pt-4 border-t border-heist-border flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-technical text-heist-muted mr-1">
                      Verified Stack:
                    </span>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-xs font-technical text-white"
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
