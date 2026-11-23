"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { educationData } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, Code, Compass, Terminal, CheckCircle2, MapPin } from "lucide-react";

export function About() {
  const engineeringPillars = [
    {
      title: "Pragmatic Architecture",
      desc: "Balancing elegant code with real-world requirements. Every system is built modular, maintainable, and verifiable.",
      icon: Terminal,
    },
    {
      title: "Full-Stack Integration",
      desc: "Bridging modern frontend reactivity with structured backend controllers and relational SQL / document storage.",
      icon: Code,
    },
    {
      title: "Iterative Engineering",
      desc: "Shipping in tight feedback loops, automated testing, peer reviews, and incremental enhancement.",
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-brand-dark overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="01 // PHILOSOPHY"
          title="MORE THAN"
          highlight="JUST CODE."
          subtitle="Building practical digital solutions through a blend of technical discipline, creative problem-solving, and continuous learning."
        />

        {/* Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-brand-secondary leading-relaxed"
          >
            <div className="p-8 rounded-3xl bg-brand-surface/60 border border-white/10 shadow-xl space-y-4">
              <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white">
                Engineering With Purpose
              </h3>
              <p className="text-base sm:text-lg text-neutral-200 leading-relaxed">
                {profileData.shortIntro}
              </p>
              <p className="text-sm sm:text-base text-brand-secondary/90 leading-relaxed">
                I enjoy working across frontend and backend technologies, developing web applications, integrating APIs and exploring modern software development. I believe great software is not just about writing lines of syntax—it is about creating dependable tools that simplify processes and deliver intuitive user experiences.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono-code text-brand-yellow">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Based in {profileData.location}</span>
              </div>
            </div>

            {/* Three Core Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {engineeringPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 transition-colors space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-orange/15 flex items-center justify-center text-brand-orange">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-syne font-bold text-white text-base">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Education & Academic Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-brand-surface to-[#1A1A1E] border border-brand-orange/30 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-xs font-mono-code text-brand-orange font-bold uppercase tracking-wider">
                  Academic Degree
                </span>
                <span className="text-xs font-mono-code text-brand-yellow font-bold">
                  CGPA: {educationData.cgpa}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-brand-yellow">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-syne text-xl font-bold text-white">
                      {educationData.degree}
                    </h4>
                    <p className="text-xs text-brand-muted font-mono-code">
                      {educationData.duration}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-semibold text-brand-secondary pt-2">
                  {educationData.institution}
                </p>
                <p className="text-xs text-brand-muted">
                  Affiliated to {educationData.university} · {educationData.location}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <p className="text-xs font-mono-code text-brand-yellow uppercase tracking-wider font-semibold">
                  Key Academic Highlights
                </p>
                {educationData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <p className="font-syne text-3xl font-extrabold text-brand-orange">
                  2027
                </p>
                <p className="text-xs text-brand-muted mt-1 font-mono-code">
                  Graduation Year
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <p className="font-syne text-3xl font-extrabold text-brand-yellow">
                  7+
                </p>
                <p className="text-xs text-brand-muted mt-1 font-mono-code">
                  Certifications
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
