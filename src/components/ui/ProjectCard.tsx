"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { ExternalLink, Github, Layers, CheckCircle2, X } from "lucide-react";
import { Button } from "./Button";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="group relative rounded-3xl bg-brand-surface/70 border border-white/10 hover:border-brand-orange/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-brand-orange/10"
      >
        {/* Subtle orange accent bar on top */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Project Visual Image Preview */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Overlay Tag Badges */}
          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono-code text-brand-yellow font-medium">
              {project.category}
            </span>
            {project.status && (
              <span className="px-3 py-1 rounded-full bg-brand-orange/80 backdrop-blur-md text-[11px] font-mono-code text-white font-bold animate-pulse">
                {project.status}
              </span>
            )}
          </div>

          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono-code text-white/80">
              {project.year}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono-code text-xs text-brand-orange font-bold tracking-widest">
                PROJECT 0{index + 1}
              </span>
            </div>

            <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white group-hover:text-brand-yellow transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-sm text-brand-secondary leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Technology Pills */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono-code text-neutral-300 group-hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between gap-3 border-t border-white/10">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsModalOpen(true)}
                icon={<Layers className="w-3.5 h-3.5 text-brand-orange" />}
              >
                Case Study
              </Button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} repository on GitHub`}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-brand-orange/60 text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live demonstration of ${project.title}`}
                    className="p-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-deep text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#1C1C1F] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono-code text-brand-orange uppercase tracking-widest">
                    {project.category} · {project.year}
                  </span>
                  <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {project.title}
                  </h3>
                </div>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-yellow font-mono-code">
                    Architectural Overview
                  </h4>
                  <p className="text-brand-secondary text-sm sm:text-base leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-yellow font-mono-code">
                    Key Features &amp; Engineering Decisions
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-yellow font-mono-code">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono-code text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <p className="text-xs text-brand-muted">
                    Verified GitHub project by Santosh Mahato
                  </p>
                  {project.githubUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.githubUrl}
                      isExternal
                      icon={<Github className="w-4 h-4" />}
                      showArrow
                    >
                      View on GitHub
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
