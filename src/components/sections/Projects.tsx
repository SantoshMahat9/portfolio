"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Github, ShieldCheck, Code2 } from "lucide-react";
import { profileData } from "@/data/profile";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-heist-black film-grain overflow-hidden border-t border-heist-border">
      {/* Background red atmospheric gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-heist-red/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            tag="MISSION DOSSIERS // 03"
            title="FEATURED"
            highlight="OPERATIONS."
            subtitle="Verified engineering projects spanning AI deceptive UI detection, enterprise relational financial ledgers, and API automation pipelines."
            className="mb-0"
          />

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="md"
              href={profileData.links.github}
              isExternal
              icon={<Github className="w-4 h-4 text-heist-red" />}
              showArrow
            >
              Browse All Code
            </Button>
          </div>
        </div>

        {/* Balanced 2x2 Project Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Tactical Integrity Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-heist-dark border border-heist-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bebas text-2xl text-white tracking-wide flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-heist-red" />
              Verified Git Repositories &amp; Transparent Engineering
            </h4>
            <p className="text-xs sm:text-sm text-heist-muted font-sans-body">
              Every operation links directly to its verified GitHub repository or documented enterprise internship dossier.
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
            GitHub @SantoshMahat9
          </Button>
        </div>
      </div>
    </section>
  );
}
