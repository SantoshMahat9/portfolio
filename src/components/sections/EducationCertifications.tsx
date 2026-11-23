"use client";

import React from "react";
import { motion } from "framer-motion";
import { certificationsData } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Calendar, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";

export function EducationCertifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 bg-brand-dark overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-brand-orange/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="05 // CREDENTIALS & HONORS"
          title="CERTIFICATIONS &"
          highlight="ACHIEVEMENTS."
          subtitle="Verified technical credentials and symposium recognitions validating foundational skills in LLMs, APIs, Cloud, Database systems, and Spatial Computing."
        />

        {/* Certifications Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            const isHighlight = cert.highlight;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                  isHighlight
                    ? "bg-gradient-to-br from-brand-surface to-[#1F1918] border-brand-orange/40 hover:border-brand-orange hover:shadow-brand-orange/10"
                    : "bg-brand-surface/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="space-y-4">
                  {/* Category Pill and Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono-code text-brand-yellow font-medium">
                      {cert.category}
                    </span>

                    <span className="flex items-center gap-1 text-[11px] font-mono-code text-brand-orange font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                      Verified
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-syne text-xl font-bold text-white group-hover:text-brand-yellow transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer & Date */}
                  <div className="space-y-1.5 text-xs text-brand-muted">
                    <p className="font-semibold text-white/90 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                      {cert.issuer}
                    </p>
                    <p className="flex items-center gap-1.5 text-neutral-400 font-mono-code">
                      <Calendar className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      {cert.date}
                    </p>
                  </div>

                  {/* Description note */}
                  {cert.credentialNote && (
                    <p className="text-xs text-brand-secondary leading-relaxed pt-2 border-t border-white/5">
                      {cert.credentialNote}
                    </p>
                  )}
                </div>

                {/* Footer verification indicator */}
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-code text-brand-muted">
                  <span className="flex items-center gap-1 text-neutral-400">
                    <CheckCircle2 className="w-3 h-3 text-brand-yellow" /> Authentic Credential
                  </span>
                  <span className="text-brand-orange group-hover:translate-x-1 transition-transform">
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
