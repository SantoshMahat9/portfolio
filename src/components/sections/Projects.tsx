"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Github, Code } from "lucide-react";
import { profileData } from "@/data/profile";

export function ProjectsSection() {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-brand-dark overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-brand-orange/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            tag="03 // PORTFOLIO SHOWCASE"
            title="SELECTED"
            highlight="WORK."
            subtitle="Engineered systems, automation pipelines, and full-stack software built with precision and modern tools."
            className="mb-0"
          />

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="md"
              href={profileData.links.github}
              isExternal
              icon={<Github className="w-4 h-4 text-brand-orange" />}
              showArrow
            >
              Browse All on GitHub
            </Button>
          </div>
        </div>

        {/* 3-Column / Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Engineering Rigor Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-brand-surface via-[#1C1C22] to-brand-surface border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-syne text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Code className="w-5 h-5 text-brand-yellow" />
              Verifiable Code &amp; Architecture
            </h4>
            <p className="text-sm text-brand-secondary">
              Every project listed reflects authentic engineering work, clean Git commit histories, and real problem-solving.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            href={profileData.links.github}
            isExternal
            icon={<Github className="w-4 h-4" />}
            showArrow
          >
            Visit GitHub @SantoshMahat9
          </Button>
        </div>
      </div>
    </section>
  );
}
