"use client";

import React from "react";
import { motion } from "framer-motion";
import { certificationsData } from "@/data/certifications";
import { educationHistory } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  GraduationCap,
  Calendar,
  ShieldCheck,
  Award,
  BookOpen,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export function EducationCertifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 bg-heist-black overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-heist-red/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="05 // SECURITY CLEARANCES & ACADEMIA"
          title="ACADEMIC CLEARANCE &"
          highlight="CERTIFICATIONS."
          subtitle="Verified engineering credentials, institutional clearance from St. John College of Engineering, and validated industry certifications in AI, Databases, and Systems."
        />

        {/* Academic Milestones Dossier Cards */}
        <div className="space-y-6 mb-14">
          {educationHistory.map((edu, idx) => {
            const isCurrent = edu.isCurrent;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl relative overflow-hidden border ${
                  isCurrent
                    ? "bg-[#111116] border-heist-red/40 shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(229,9,20,0.1)]"
                    : "bg-heist-dark border-heist-border hover:border-white/20"
                }`}
              >
                {/* Top border red laser indicator for active engineering degree */}
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-heist-red to-transparent" />
                )}

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-heist-red/15 border border-heist-red/40 text-heist-red text-xs font-mono-code font-bold tracking-wider uppercase">
                      <GraduationCap className="w-4 h-4" />
                      <span>{isCurrent ? "PRIMARY ACADEMIC CLEARANCE" : "PRE-ENGINEERING FOUNDATION"}</span>
                    </div>
                    <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
                      {edu.degree}
                    </h3>
                    <p className="font-sans-body text-neutral-300 text-sm sm:text-base font-medium">
                      {edu.institution} {edu.university ? `• ${edu.university}` : edu.board ? `• ${edu.board}` : ""}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono-code text-neutral-400">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-heist-red" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-heist-red" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                      <Award className="w-3.5 h-3.5 text-heist-red" />
                      <span>{edu.status}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights Grid */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-6">
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <span className="text-heist-red font-bold font-mono-code mt-0.5">›</span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            const isHighlight = cert.highlight;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group shadow-xl ${isHighlight
                  ? "bg-gradient-to-br from-[#161214] to-[#0d090a] border-heist-red/40 hover:border-heist-red hover:shadow-[0_0_25px_rgba(229,9,20,0.15)]"
                  : "bg-[#111116] border-white/10 hover:border-white/20"
                  }`}
              >
                <div className="space-y-4">
                  {/* Category Pill and Verified Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono-code text-heist-red font-semibold uppercase tracking-wider">
                      {cert.category}
                    </span>

                    <span className="flex items-center gap-1 text-[11px] font-mono-code text-emerald-400 font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Verified
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-bebas text-2xl text-white group-hover:text-heist-red transition-colors leading-snug tracking-wide">
                    {cert.title}
                  </h3>

                  {/* Issuer & Date */}
                  <div className="space-y-1.5 text-xs text-neutral-400 font-mono-code">
                    <p className="font-semibold text-neutral-200 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-heist-red shrink-0" />
                      {cert.issuer}
                    </p>
                    <p className="flex items-center gap-1.5 text-neutral-500">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      {cert.date}
                    </p>
                  </div>

                  {/* Description note */}
                  {cert.credentialNote && (
                    <p className="text-xs text-neutral-400 font-sans-body leading-relaxed pt-2 border-t border-white/5">
                      {cert.credentialNote}
                    </p>
                  )}
                </div>

                {/* Footer validation indicator */}
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-code text-neutral-500">
                  <span className="flex items-center gap-1 text-neutral-400">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Authentic Clearance
                  </span>
                  <span className="text-heist-red group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
