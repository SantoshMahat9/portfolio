"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Terminal, Code, Cpu, MapPin, Target, ShieldCheck, FileCheck } from "lucide-react";

export function About() {
  const pillars = [
    {
      step: "01",
      title: "Analytical Engineering",
      desc: "Deconstruct complex problem domains into modular architectures, normalized database schemas, and resilient service logic.",
      icon: Terminal,
    },
    {
      step: "02",
      title: "Full-Stack Integration",
      desc: "Seamlessly bridging modern client reactivity with structured backend controllers, RESTful endpoints, and SQL persistence.",
      icon: Code,
    },
    {
      step: "03",
      title: "Purposeful Polish",
      desc: "Every interaction, keyframe, and interface element is built with intention, ensuring high performance, sub-second loads, and accessibility.",
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-heist-black film-grain overflow-hidden border-t border-heist-border">
      {/* Background ambient spotlight */}
      <div className="absolute top-1/2 -left-48 w-[450px] h-[450px] rounded-full bg-heist-red/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="MISSION BRIEFING // 01"
          title="THE PERSON"
          highlight="BEHIND THE OPERATION."
          subtitle="A disciplined Computer Engineering undergraduate transforming complex requirements into reliable, user-focused digital solutions."
        />

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* Left Column: Narrative Dossier */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Primary Narrative Dossier with Subtle Heist Watermark */}
            <div className="p-8 sm:p-10 rounded-2xl bg-heist-dark border border-heist-border space-y-6 shadow-2xl relative overflow-hidden">
              {/* Subtle Origami Crane Watermark in Top-Right Background */}
              <div className="absolute -top-6 -right-6 w-48 h-48 pointer-events-none opacity-[0.07] select-none">
                <Image
                  src="/images/origami-crane.svg"
                  alt=""
                  width={192}
                  height={192}
                  className="rotate-12 filter brightness-150"
                  aria-hidden="true"
                />
              </div>

              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-3 border-b border-heist-border text-xs font-technical text-heist-muted">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-heist-red animate-pulse" />
                  <span className="font-bold tracking-wider text-white">DOSSIER // CONFIDENTIAL</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-heist-red/15 border border-heist-red/40 text-heist-red font-bold text-[10px] tracking-wider uppercase">
                  SECURITY CLEARANCE: GRANTED
                </span>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl text-heist-text tracking-wide">
                Turning Complex Logic Into Precision Code
              </h3>

              <div className="space-y-4 text-neutral-300 font-sans-body text-sm sm:text-base leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-semibold">{profileData.fullName}</span>, a Computer Engineering student at St. John College of Engineering (University of Mumbai) and a dedicated Full Stack Developer.
                </p>
                
                {/* Official Career Objective from Resume */}
                <div className="p-4 rounded-xl bg-heist-red/10 border border-heist-red/30 space-y-1.5 my-3 relative">
                  <div className="flex items-center gap-2 text-[11px] font-technical text-heist-red font-bold uppercase tracking-wider">
                    <Target className="w-3.5 h-3.5" />
                    <span>CAREER OBJECTIVE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans-body">
                    {profileData.careerObjective}
                  </p>
                </div>

                <p className="text-heist-muted text-xs sm:text-sm leading-relaxed">
                  Through hands-on engineering internships at <strong className="text-white font-semibold">Kantascrypt</strong>, academic research in AI deceptive pattern detection, and full-stack software development, I build maintainable software with verifiable real-world outcomes.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 text-xs font-technical">
                <div className="flex items-center gap-2 text-heist-muted">
                  <MapPin className="w-4 h-4 text-heist-red" />
                  <span>Base Sector: {profileData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <FileCheck className="w-4 h-4" />
                  <span>Verified Dossier: {profileData.education.institution}</span>
                </div>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-heist-dark/80 border border-heist-border hover:border-heist-red/50 transition-colors space-y-2.5 relative group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-heist-red/10 border border-heist-red/20 flex items-center justify-center text-heist-red group-hover:bg-heist-red group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-technical text-heist-muted font-bold">
                        //{pillar.step}
                      </span>
                    </div>
                    <h4 className="font-bebas text-xl text-white tracking-wide">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-heist-muted leading-relaxed font-sans-body">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Tactical Clearance Specification */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Engineering Clearance Card */}
            <div className="p-8 rounded-2xl bg-heist-dark border border-heist-border shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-heist-border">
                <span className="text-[10px] font-technical text-heist-red uppercase tracking-widest font-bold">
                  TACTICAL CLEARANCE
                </span>
                <span className="text-[10px] font-technical text-heist-muted">
                  B.TECH // 2023–2027
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <span className="text-[10px] font-technical text-heist-muted uppercase tracking-wider block">
                    Degree &amp; Discipline
                  </span>
                  <p className="text-sm font-technical font-bold text-white">
                    {profileData.education.degree}
                  </p>
                  <p className="text-xs text-heist-muted">
                    {profileData.education.institution} • {profileData.education.university}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                    <span className="text-[10px] font-technical text-heist-muted uppercase tracking-wider block">
                      Academic Standing
                    </span>
                    <p className="text-lg font-bebas text-emerald-400 tracking-wider">
                      CGPA {profileData.education.cgpa}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                    <span className="text-[10px] font-technical text-heist-muted uppercase tracking-wider block">
                      Internship Missions
                    </span>
                    <p className="text-lg font-bebas text-heist-red tracking-wider">
                      Kantascrypt &amp; Acelia
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-2">
                  <span className="text-[10px] font-technical text-heist-muted uppercase tracking-wider block">
                    Core Operational Strengths
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {profileData.strengths.map((strength) => (
                      <span
                        key={strength}
                        className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-technical text-neutral-300"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Security Quote Callout */}
              <div className="p-4 rounded-xl bg-heist-red/10 border-l-2 border-heist-red text-xs font-technical text-neutral-300 italic">
                &ldquo;Master both ends of the wire — from low-level relational SQL to reactive spatial web interfaces.&rdquo;
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
