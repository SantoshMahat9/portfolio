"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { certificationsData } from "@/data/certifications";
import { educationData } from "@/data/education";
import { ArrowUpRight, ArrowDownRight, Github, Linkedin, Mail, Phone, FileText } from "lucide-react";

export default function ConceptCPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0E] text-[#F3F3F5] selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
      
      {/* Top Editorial Nav Header */}
      <header className="sticky top-0 z-40 bg-[#0C0C0E]/90 backdrop-blur-md border-b border-white/10 py-6 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-baseline justify-between">
          <div className="space-y-0.5">
            <h1 className="font-semibold text-sm tracking-tight text-white uppercase">
              Santosh Sanjeev Mahato
            </h1>
            <p className="text-[11px] font-mono text-neutral-400">
              Full Stack Developer · Mumbai, India
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-8 text-xs font-mono tracking-wider text-neutral-400">
            <a href="#work" className="hover:text-white transition-colors">
              [01] SELECTED WORK
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              [02] PHILOSOPHY
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              [03] EXPERIENCE
            </a>
            <a href="#credentials" className="hover:text-white transition-colors">
              [04] CREDENTIALS
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              [05] CONTACT
            </a>
          </div>

          <a
            href={profileData.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono uppercase tracking-wider text-white hover:text-neutral-400 border-b border-white/40 pb-0.5 transition-colors"
          >
            Curriculum Vitae ↗
          </a>
        </div>
      </header>

      {/* Hero Section: Editorial Typography & Whitespace */}
      <section className="pt-24 pb-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="space-y-16">
          
          {/* Main Statement */}
          <div className="border-b border-white/15 pb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-6">
              Perspective · 2023—2027
            </span>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tighter leading-[0.95] text-white">
              Full Stack Developer &amp; Computer Engineer.
            </h2>
          </div>

          {/* Asymmetric 3-Column Brief */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-sm leading-relaxed">
            
            <div className="md:col-span-4 space-y-4">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">
                [01 // INTRODUCTION]
              </span>
              <p className="text-neutral-300">
                Santosh Mahato is a Computer Engineering undergraduate at St. John College of Engineering and Management (University of Mumbai). Specializing in dependable backend architectures, API automation, and responsive web systems.
              </p>
            </div>

            <div className="md:col-span-4 space-y-4">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">
                [02 // PRACTICAL STACK]
              </span>
              <p className="text-neutral-300">
                Hands-on production background with .NET, relational SQL modeling, MongoDB, Node.js, Python API integrations, and modern JavaScript/Angular architectures.
              </p>
            </div>

            <div className="md:col-span-4 space-y-4 border-l border-white/10 pl-6">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">
                [03 // DISPATCH]
              </span>
              <div className="space-y-2 text-xs font-mono text-neutral-400">
                <p>Status: <span className="text-white">Active Undergraduate (B.Tech 2027)</span></p>
                <p>Upcoming: <span className="text-white">Acelia Technologies (Dec 2026)</span></p>
                <p>Prior: <span className="text-white">Kantascrypt (.NET/SQL Intern)</span></p>
                <p>Location: <span className="text-white">Boisar / Palghar, MH, India</span></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Selected Work: Editorial Project Archive */}
      <section id="work" className="py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/15">
        <div className="flex items-baseline justify-between mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            [01] SELECTED WORK (2024–2025)
          </span>
          <span className="font-mono text-xs text-neutral-500">
            03 ARCHIVED PROJECTS
          </span>
        </div>

        <div className="space-y-20">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-white/10 pb-16"
            >
              <div className="lg:col-span-4 space-y-4">
                <span className="font-mono text-xs text-neutral-500">
                  REF 0{index + 1} // {project.year}
                </span>

                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  {project.category}
                </p>

                <p className="text-sm text-neutral-300 leading-relaxed pt-2">
                  {project.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <div className="pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-neutral-400 border-b border-white/30 pb-0.5"
                    >
                      <span>Repository on GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              <div className="lg:col-span-8">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section: Structured Editorial Table */}
      <section id="experience" className="py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/15">
        <div className="flex items-baseline justify-between mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            [02] PROFESSIONAL RECORD
          </span>
          <span className="font-mono text-xs text-neutral-500">
            TIMELINE
          </span>
        </div>

        <div className="space-y-12">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-white/10 pb-12"
            >
              <div className="md:col-span-4 font-mono text-xs text-neutral-400 space-y-1">
                <p className="text-white font-semibold">{exp.period}</p>
                <p>{exp.mode} · {exp.statusBadge}</p>
              </div>

              <div className="md:col-span-8 space-y-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                  <span className="font-mono text-sm text-neutral-400">{exp.company}</span>
                </div>

                <ul className="space-y-2 text-sm text-neutral-300 pt-2">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-500">—</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="underline underline-offset-4 decoration-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic & Credentials Archive */}
      <section id="credentials" className="py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/15">
        <div className="flex items-baseline justify-between mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            [03] ACADEMIC DEGREE &amp; CREDENTIALS
          </span>
          <span className="font-mono text-xs text-neutral-500">
            VERIFIED
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {educationData.degree}
            </h3>
            <p className="text-sm text-neutral-400">
              {educationData.institution}
            </p>
            <p className="text-xs font-mono text-neutral-500">
              University of Mumbai · {educationData.duration} · CGPA: {educationData.cgpa}
            </p>
          </div>

          <div className="md:col-span-7 divide-y divide-white/10">
            {certificationsData.map((c) => (
              <div key={c.id} className="py-4 flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white">{c.title}</p>
                  <p className="text-xs font-mono text-neutral-400">{c.issuer}</p>
                </div>
                <span className="text-xs font-mono text-neutral-500 shrink-0">{c.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section: Clean Correspondence */}
      <section id="contact" className="py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/15">
        <div className="space-y-8 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            [04] CORRESPONDENCE
          </span>

          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white">
            Let&apos;s build software that matters.
          </h2>

          <p className="text-neutral-300 text-sm leading-relaxed">
            Open to full-stack engineering internships, software engineering roles, and innovative collaborations.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-neutral-500">ELECTRONIC MAIL</span>
              <p>
                <a href={profileData.links.email} className="text-white hover:underline text-sm font-sans">
                  {profileData.email}
                </a>
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-neutral-500">PRIMARY LOCATION</span>
              <p className="text-white text-sm font-sans">
                {profileData.location}
              </p>
            </div>
          </div>

          <div className="pt-6 flex items-center gap-6 text-xs font-mono">
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 px-6 sm:px-12 lg:px-16 border-t border-white/10 text-xs font-mono text-neutral-500 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pb-24">
        <p>© {new Date().getFullYear()} SANTOSH SANJEEV MAHATO</p>
        <p>DIRECTION C // PREMIUM MINIMAL EDITORIAL</p>
      </footer>

    </div>
  );
}
