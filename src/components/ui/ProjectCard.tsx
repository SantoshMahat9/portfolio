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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="group relative rounded-2xl bg-heist-dark border border-heist-border hover:border-heist-red/60 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl"
      >
        {/* Subtle red accent bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-heist-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Project Visual Image Preview */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/60 border-b border-heist-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Overlay Tag Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-technical text-heist-red font-bold uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-technical text-heist-muted">
              {project.year}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="font-technical text-[10px] text-heist-red uppercase tracking-widest font-bold">
              {project.codeName || `OPERATION // 0${index + 1}`}
            </span>

            <h3 className="font-bebas text-3xl sm:text-4xl text-white group-hover:text-heist-red transition-colors duration-300 tracking-wide">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-heist-muted leading-relaxed font-sans-body">
              {project.description}
            </p>
          </div>

          {/* Technology Pills */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-technical text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex items-center justify-between gap-3 border-t border-heist-border">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsModalOpen(true)}
                icon={<Layers className="w-3.5 h-3.5 text-heist-red" />}
              >
                Operation File
              </Button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-heist-red/60 text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                    className="p-2.5 rounded-lg bg-heist-red hover:bg-[#c90812] text-white transition-colors"
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
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-heist-dark border border-heist-border rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto film-grain"
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
                  <span className="text-xs font-technical text-heist-red uppercase tracking-widest font-bold">
                    {project.category} · {project.year}
                  </span>
                  <h3 className="font-bebas text-3xl sm:text-4xl text-white mt-1 tracking-wide">
                    {project.title}
                  </h3>
                </div>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-heist-border bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-heist-red font-technical">
                    Operation Scope &amp; Architecture
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed font-sans-body">
                    {project.longDescription || project.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-heist-red font-technical">
                    Core Technical Specifications
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-sans-body">
                        <CheckCircle2 className="w-4 h-4 text-heist-red mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-heist-red font-technical">
                    Stack Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-technical text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-heist-border flex items-center justify-between">
                  <p className="text-xs text-heist-muted font-technical">
                    Authentic Repository by Santosh Mahato
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
                      View Repository
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
