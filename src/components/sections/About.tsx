"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, Terminal, Code, Cpu, ShieldCheck, MapPin, Target } from "lucide-react";

export function About() {
  const pillars = [
    {
      title: "Analytical Engineering",
      desc: "Deconstruct complex problem domains into modular architectures, database schemas, and resilient service logic.",
      icon: Terminal,
    },
    {
      title: "Full-Stack Integration",
      desc: "Seamlessly bridging modern client reactivity with structured backend controllers, RESTful endpoints, and SQL persistence.",
      icon: Code,
    },
    {
      title: "Purposeful Polish",
      desc: "Every interaction, keyframe, and interface element is built with intention, ensuring high performance and accessibility.",
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-heist-black film-grain overflow-hidden border-t border-heist-border">
      {/* Background ambient spotlight */}
      <div className="absolute top-1/2 -left-48 w-[450px] h-[450px] rounded-full bg-heist-red/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="MISSION BRIEFING // 01"
          title="THE PERSON"
          highlight="BEHIND THE OPERATION."
          subtitle="A disciplined Computer Engineering undergraduate transforming complex requirements into reliable, user-focused digital solutions."
        />

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Primary Narrative Dossier */}
            <div className="p-8 sm:p-10 rounded-2xl bg-heist-dark border border-heist-border space-y-5 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-heist-border text-xs font-technical text-heist-muted">
                <span>DOSSIER // CONFIDENTIAL</span>
                <span className="text-heist-red font-bold">CLEARANCE: GRANTED</span>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl text-heist-text tracking-wide">
                Turning Vision Into Precision Code
              </h3>

              <div className="space-y-4 text-neutral-300 font-sans-body text-sm sm:text-base leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-semibold">{profileData.fullName}</span>, a Computer Engineering student and aspiring Full Stack Developer passionate about building meaningful digital products.
                </p>
                
                {/* Official Career Objective from Resume */}
                <div className="p-4 rounded-xl bg-heist-red/10 border border-heist-red/30 space-y-1.5 my-3">
                  <div className="flex items-center gap-2 text-[11px] font-technical text-heist-red font-bold uppercase tracking-wider">
                    <Target className="w-3.5 h-3.5" />
                    <span>CAREER OBJECTIVE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans-body">
                    {profileData.careerObjective}
                  </p>
                </div>

                <p className="text-heist-muted">
                  Through internships at Kantascrypt, academic projects, and independent development, I&apos;ve been continuously exploring modern technologies and improving my ability to solve real-world problems.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-technical text-heist-red">
                <MapPin className="w-4 h-4 text-heist-red" />
                <span>Base of Operations: {profileData.location}</span>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-heist-dark/60 border border-heist-border hover:border-heist-red/50 transition-colors space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-heist-red/10 border border-heist-red/20 flex items-center justify-center text-heist-red">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-technical font-bold text-white text-sm">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-heist-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Academic Base & Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Clearance Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-heist-dark to-heist-surface border border-heist-border space-y-6 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-heist-red/15 border border-heist-red/40 text-xs font-technical text-heist-red font-bold uppercase tracking-wider">
                  Academic Foundation
                </span>
                <span className="text-xs font-technical text-neutral-300">
                  CGPA: {profileData.education.cgpa}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/5 text-heist-red border border-white/10">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bebas text-2xl text-white tracking-wide">
                      {profileData.education.degree}
                    </h4>
                    <p className="text-xs text-heist-muted font-technical">
                      {profileData.education.duration}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-semibold text-heist-text pt-2">
                  {profileData.education.institution}
                </p>
                <p className="text-xs text-heist-muted">
                  Affiliated to {profileData.education.university} · {profileData.education.location}
                </p>
              </div>

              <div className="pt-4 border-t border-heist-border space-y-2 text-xs font-technical text-heist-muted">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-heist-red" />
                  <span>Curriculum: Algorithms, Database Architecture, Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-heist-red" />
                  <span>Departmental symposiums &amp; technical presentations</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-heist-dark border border-heist-border text-center">
                <p className="font-bebas text-4xl text-heist-red">2027</p>
                <p className="text-xs text-heist-muted font-technical mt-0.5">B.Tech Degree</p>
              </div>

              <div className="p-5 rounded-xl bg-heist-dark border border-heist-border text-center">
                <p className="font-bebas text-4xl text-white">2+</p>
                <p className="text-xs text-heist-muted font-technical mt-0.5">Internship Missions</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
