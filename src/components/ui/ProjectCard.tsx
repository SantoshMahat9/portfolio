"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { ExternalLink, Github, Layers, CheckCircle2, X, Lock, ShieldCheck } from "lucide-react";
import { Button } from "./Button";
import { heistAudio } from "@/lib/audioEngine";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const openModal = () => {
    heistAudio.playClick();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    heistAudio.playClick();
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.12 }}
        className="group relative rounded-2xl bg-heist-dark border border-heist-border hover:border-heist-red/60 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl"
      >
        {/* Subtle red accent bar on hover */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-heist-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

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
            <span className="px-2.5 py-1 rounded bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-technical text-heist-red font-bold uppercase tracking-wider">
              {project.category.split("•")[0]?.trim() || project.category}
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
            <div className="flex items-center justify-between">
              <span className="font-technical text-[10px] text-heist-red uppercase tracking-widest font-bold">
                {project.codeName || `OPERATION // 0${index + 1}`}
              </span>
              {project.status && (
                <span className="text-[10px] font-technical text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                  {project.status}
                </span>
              )}
            </div>

            <h3 className="font-bebas text-3xl sm:text-4xl text-white group-hover:text-heist-red transition-colors duration-300 tracking-wide line-clamp-2">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-heist-muted leading-relaxed font-sans-body line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Technology Pills */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-technical text-neutral-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-technical text-heist-muted">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>

            {/* Actions Toolbar */}
            <div className="pt-4 flex items-center justify-between gap-3 border-t border-heist-border">
              <Button
                variant="secondary"
                size="sm"
                onClick={openModal}
                icon={<Layers className="w-3.5 h-3.5 text-heist-red" />}
              >
                Operation File
              </Button>

              <div className="flex items-center gap-2">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} repository on GitHub`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-heist-red/60 text-xs font-technical text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-heist-red" />
                    <span>Repo</span>
                  </a>
                ) : (
                  <div
                    title={project.repoStatus || "Internal / Proprietary code"}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-technical text-heist-muted cursor-default"
                  >
                    <Lock className="w-3 h-3 text-heist-muted" />
                    <span>{project.repoStatus ? "Enterprise" : "Internal"}</span>
                  </div>
                )}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live deployment for ${project.title}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-heist-red hover:bg-[#c90812] text-xs font-technical text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live</span>
                  </a>
                ) : (
                  <span
                    title={project.demoStatus || "Prototype / Research System"}
                    className="hidden sm:inline-flex items-center gap-1.5 px-2 py-1 rounded bg-black/40 border border-white/5 text-[10px] font-technical text-neutral-400 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-heist-red/80" />
                    <span>{project.demoStatus?.split("/")[0]?.trim() || "Active"}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${project.id}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
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
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-heist-red"
                aria-label="Close dossier modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-technical text-heist-red uppercase tracking-widest font-bold">
                      {project.category} · {project.year}
                    </span>
                    {project.status && (
                      <span className="text-[10px] font-technical text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <h3 id={`modal-title-${project.id}`} className="font-bebas text-3xl sm:text-4xl text-white mt-1 tracking-wide">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[10px] font-technical text-heist-muted flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-heist-red" />
                    <span>CLASSIFIED PROJECT DOSSIER</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-heist-red font-technical">
                    Mission Architecture &amp; Contribution
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 font-sans-body leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-heist-red font-technical">
                    Core Technical Specifications &amp; Deliverables
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
                    Technologies Deployed
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

                <div className="pt-4 border-t border-heist-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs text-heist-muted font-technical space-y-0.5">
                    <p className="text-neutral-300 font-bold">Verified Codebase by Santosh Mahato</p>
                    <p>{project.repoStatus || "Protected Project Dossier"}</p>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {project.githubUrl ? (
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
                    ) : (
                      <div className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-technical text-heist-muted flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-heist-muted" />
                        <span>{project.repoStatus || "Internal Enterprise Repository"}</span>
                      </div>
                    )}

                    {project.liveUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        href={project.liveUrl}
                        isExternal
                        icon={<ExternalLink className="w-4 h-4" />}
                        showArrow
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
