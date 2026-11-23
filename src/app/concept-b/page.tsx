"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { certificationsData } from "@/data/certifications";
import { educationData } from "@/data/education";
import {
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Flame,
  Activity,
  Send,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function ConceptBPage() {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  return (
    <div className="min-h-screen bg-[#07070A] text-white selection:bg-purple-600 selection:text-white font-sans overflow-x-hidden relative">
      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(#1E1233_1px,transparent_1px)] [background-size:32px_32px] opacity-40 z-0" />

      {/* Atmospheric Purple Volumetric Glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[180px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[700px] h-[600px] rounded-full bg-indigo-600/10 blur-[200px] pointer-events-none" />

      {/* Cyber HUD Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#07070A]/85 backdrop-blur-xl border-b border-purple-500/20 py-4 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-sm bg-purple-500 animate-ping" />
            <span className="font-mono text-sm tracking-widest text-purple-400 font-bold">
              SYS.SM // SANTOSH MAHATO
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/30 text-[10px] font-mono text-purple-300">
              ST_JOHN_CE: 2027
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-neutral-400">
            <a href="#hero" className="hover:text-purple-400 transition-colors">
              // 01.SYSTEM
            </a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">
              // 02.PROTOCOLS
            </a>
            <a href="#timeline" className="hover:text-purple-400 transition-colors">
              // 03.TIMELINE
            </a>
            <a href="#matrix" className="hover:text-purple-400 transition-colors">
              // 04.MATRIX
            </a>
            <a href="#comms" className="hover:text-purple-400 transition-colors">
              // 05.COMMS
            </a>
          </nav>

          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href={profileData.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-purple-900/30 hover:bg-purple-900/60 border border-purple-500/40 text-purple-300 transition-all"
            >
              RESUME.BIN
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 pt-20 pb-28 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-400">
              <Activity className="w-3.5 h-3.5 animate-pulse text-purple-400" />
              <span>CORE ARCHITECTURE // STATUS: NOMINAL</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] font-syne">
              ENGINEERING{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                CYBERNETIC
              </span>{" "}
              EXPERIENCES.
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg max-w-xl leading-relaxed">
              Full Stack Developer &amp; Computer Engineering student specializing in scalable backend logic, resilient database structures, and high-frequency automated APIs.
            </p>

            {/* Interactive Cyber Terminal Diagnostic Console */}
            <div className="p-5 rounded-2xl bg-black/70 border border-purple-500/30 font-mono text-xs space-y-2 shadow-2xl shadow-purple-950/50">
              <div className="flex items-center justify-between pb-2 border-b border-purple-500/20 text-neutral-400">
                <span>TERMINAL_SESSION // SANTOSH.ENGINEERING</span>
                <span className="text-purple-400">CONNECTED</span>
              </div>
              <div className="space-y-1 text-neutral-300">
                <p className="text-purple-400">&gt; identity: &quot;Santosh Sanjeev Mahato&quot;</p>
                <p>&gt; institution: &quot;St. John College of Engineering and Management (Univ. of Mumbai)&quot;</p>
                <p>&gt; stack_verified: [&quot;.NET&quot;, &quot;SQL&quot;, &quot;MongoDB&quot;, &quot;Angular&quot;, &quot;Python&quot;, &quot;Node.js&quot;]</p>
                <p>&gt; completed_internship: &quot;Kantascrypt (Personal Expense Tracker)&quot;</p>
                <p className="text-cyan-400">&gt; upcoming_deployment: &quot;Acelia Technologies (1 Dec 2026)&quot;</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-bold text-xs tracking-wider shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2"
              >
                <span>EXPLORE PROTOCOLS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="#comms"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-purple-500/30 text-purple-200 font-mono font-semibold text-xs transition-all"
              >
                INITIATE_COMMS
              </a>
            </div>
          </div>

          {/* Right Hologram 3D Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-purple-500/40 via-indigo-500/20 to-transparent shadow-2xl shadow-purple-900/40 group">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#0F0E17]">
                
                {/* Cyber Scanline overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent pointer-events-none z-20 animate-pulse" />

                <Image
                  src="/images/profile/santosh-portrait.png"
                  alt="Santosh Mahato — Cybernetic 3D Portrait"
                  fill
                  className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 contrast-125"
                />

                {/* Cyber HUD elements on top */}
                <div className="absolute top-4 left-4 z-30 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-purple-500/40 font-mono text-[10px] text-purple-300">
                  NEURAL_ID // SANTOSH
                </div>

                <div className="absolute bottom-4 inset-x-4 z-30 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-purple-500/30 font-mono text-xs flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">Full Stack Developer</p>
                    <p className="text-[10px] text-purple-400">Boisar, Maharashtra</p>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Protocols / Projects Section */}
      <section id="projects" className="relative z-10 py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-purple-500/20">
        <div className="space-y-4 mb-16 text-center">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest">
            // 02. ACTIVE ARCHITECTURES &amp; SYSTEMS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-syne">
            DEPLOYED <span className="text-purple-400">PROTOCOLS</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto font-mono">
            Direct production-grade systems engineered with strict API resilience and structured schemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <div
              key={project.id}
              className="p-6 rounded-3xl bg-purple-950/20 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-purple-500/20 bg-black/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 border border-purple-500/40 font-mono text-[10px] text-purple-300">
                    {project.year}
                  </span>
                </div>

                <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider block">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold font-syne text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed font-mono">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-purple-500/20 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-purple-900/40 hover:bg-purple-900/80 text-purple-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cyber Timeline */}
      <section id="timeline" className="relative z-10 py-24 px-6 sm:px-12 max-w-5xl mx-auto border-t border-purple-500/20">
        <div className="space-y-4 mb-16 text-center">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest">
            // 03. CAREER SEQUENCING
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-syne">
            OPERATIONAL <span className="text-indigo-400">TIMELINE</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                exp.isUpcoming
                  ? "bg-purple-950/30 border-purple-500/50"
                  : "bg-black/40 border-purple-500/20"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/40">
                  {exp.statusBadge}
                </span>
                <span className="text-neutral-400">{exp.period}</span>
              </div>

              <h3 className="text-2xl font-bold font-syne text-white">{exp.role}</h3>
              <p className="text-purple-400 font-mono text-sm font-semibold">{exp.company}</p>

              <ul className="mt-4 space-y-2 text-xs font-mono text-neutral-300">
                {exp.responsibilities.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&gt;</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="matrix" className="relative z-10 py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-purple-500/20">
        <div className="space-y-4 mb-16 text-center">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest">
            // 04. CAPABILITIES MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-syne">
            ARSENAL &amp; <span className="text-purple-400">STACK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-2xl bg-black/50 border border-purple-500/25 space-y-4"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-purple-500/20">
                <Cpu className="w-4 h-4 text-purple-400" />
                <h4 className="font-mono text-xs font-bold text-purple-300 uppercase">
                  {cat.category}
                </h4>
              </div>

              <div className="space-y-2">
                {cat.skills.map((s) => (
                  <div
                    key={s.name}
                    className="p-2 rounded bg-purple-950/30 border border-purple-500/15 font-mono text-xs flex items-center justify-between"
                  >
                    <span className="text-white font-medium">{s.name}</span>
                    <span className="text-[10px] text-purple-400">READY</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cyber Communications / Contact */}
      <section id="comms" className="relative z-10 py-24 px-6 sm:px-12 max-w-4xl mx-auto border-t border-purple-500/20 text-center space-y-8">
        <span className="font-mono text-xs text-purple-400 uppercase tracking-widest">
          // 05. ENCRYPTED COMMUNICATIONS
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-syne">
          INITIALIZE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">TRANSMISSION</span>
        </h2>

        <p className="text-neutral-300 text-sm max-w-lg mx-auto font-mono">
          Available for engineering roles, technical collaboration, and full-stack software development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left font-mono text-xs">
          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-1">
            <p className="text-purple-400">DIRECT_EMAIL</p>
            <p className="text-white font-bold">{profileData.email}</p>
          </div>
          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-1">
            <p className="text-purple-400">PRIMARY_LOCATION</p>
            <p className="text-white font-bold">{profileData.location}</p>
          </div>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <a
            href={profileData.links.email}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-bold text-xs shadow-lg shadow-purple-600/30 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>DISPATCH EMAIL</span>
          </a>
        </div>
      </section>

      {/* Futuristic Footer */}
      <footer className="relative z-10 py-12 px-6 sm:px-12 border-t border-purple-500/20 text-center font-mono text-xs text-neutral-500 pb-24">
        <p>© {new Date().getFullYear()} SANTOSH SANJEEV MAHATO // CYBERNETIC DIRECTION B</p>
      </footer>
    </div>
  );
}
