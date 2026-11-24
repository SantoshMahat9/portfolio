"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { heistAudio } from "@/lib/audioEngine";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  MapPin,
  Send,
  Check,
  Copy,
  AlertCircle,
  Clock,
  ShieldCheck,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // honeypot
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    heistAudio.playClick();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.name = "Operative name is required.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Operative name must be at least 2 characters.";
    }

    if (!trimmedEmail) {
      newErrors.email = "Communication email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = "Invalid format: please enter a valid email address.";
    }

    if (!trimmedSubject) {
      newErrors.subject = "Mission subject is required.";
    } else if (trimmedSubject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!trimmedMessage) {
      newErrors.message = "Transmission payload is required.";
    } else if (trimmedMessage.length < 10) {
      newErrors.message = "Payload too brief: please enter at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      heistAudio.playClick();
      return;
    }

    setIsSubmitting(true);
    heistAudio.playClick();

    // 10-second client timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          website: formData.website, // honeypot
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let data;
      try {
        data = await response.json();
      } catch {
        data = { success: false, error: "Server returned non-JSON response." };
      }

      if (!response.ok || !data.success) {
        throw new Error(data.error || `Transmission error (HTTP ${response.status}).`);
      }

      // Success ONLY on valid server response
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#E50914", "#720D12", "#FFFFFF"],
        });
        heistAudio.playAccessGranted();
      } catch {
        // safe fallback
      }

      setIsSubmitted(true);
      setSubmitError(null);
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      heistAudio.playClick();

      let errorMessage = "Network failure: Unable to transmit payload. Please verify your connection or use direct email.";
      if (err instanceof Error) {
        if (err.name === "AbortError") {
          errorMessage = "Transmission timed out after 10 seconds. Please retry or dispatch directly via your email client.";
        } else {
          errorMessage = err.message;
        }
      }

      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#0B0B0B] film-grain overflow-hidden border-t border-heist-border">
      {/* Background red radiant spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-heist-red/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="SECURE COMMS // 06"
          title="READY FOR"
          highlight="THE NEXT OPERATION?"
          subtitle="Have an engineering opportunity, a full-stack project, or a technical inquiry? Send an encrypted transmission or establish direct contact."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* Left Column: Direct Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-heist-dark border border-heist-border shadow-xl space-y-6">
              <div>
                <span className="text-[10px] font-technical text-heist-red uppercase tracking-widest font-bold">
                  DIRECT CHANNELS
                </span>
                <h3 className="font-bebas text-3xl text-white tracking-wide mt-1">
                  Establish Contact
                </h3>
                <p className="text-xs sm:text-sm text-heist-muted leading-relaxed font-sans-body mt-2">
                  Seeking full-stack developer internships and entry-level engineering roles. Reach out via email, LinkedIn, or the encrypted form.
                </p>
              </div>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-heist-red/10 border border-heist-red/20 text-heist-red shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-technical text-heist-muted uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={profileData.links.email}
                      className="text-xs sm:text-sm font-technical text-white hover:text-heist-red transition-colors truncate block"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10 shrink-0"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-heist-muted group-hover:text-white" />
                  )}
                </button>
              </div>

              {/* Base Location */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-heist-red/10 border border-heist-red/20 text-heist-red shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-technical text-heist-muted uppercase tracking-wider block">
                    Operating Base
                  </span>
                  <span className="text-xs sm:text-sm font-technical text-white">
                    {profileData.location}
                  </span>
                </div>
              </div>

              {/* Response Time SLA */}
              <div className="p-4 rounded-xl bg-heist-red/10 border border-heist-red/25 flex items-center gap-3 text-xs font-technical text-neutral-300">
                <Clock className="w-4 h-4 text-heist-red shrink-0" />
                <span>Encrypted communications logged and reviewed within 24 hours.</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-heist-dark border border-heist-border hover:border-heist-red/50 transition-all text-center group flex flex-col items-center gap-2"
              >
                <Github className="w-5 h-5 text-heist-muted group-hover:text-heist-red transition-colors" />
                <span className="text-[11px] font-technical text-white font-bold">GitHub</span>
              </a>

              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-heist-dark border border-heist-border hover:border-heist-red/50 transition-all text-center group flex flex-col items-center gap-2"
              >
                <Linkedin className="w-5 h-5 text-heist-muted group-hover:text-heist-red transition-colors" />
                <span className="text-[11px] font-technical text-white font-bold">LinkedIn</span>
              </a>

              <a
                href={profileData.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-heist-dark border border-heist-border hover:border-heist-red/50 transition-all text-center group flex flex-col items-center gap-2"
              >
                <Instagram className="w-5 h-5 text-heist-muted group-hover:text-heist-red transition-colors" />
                <span className="text-[11px] font-technical text-white font-bold">Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Encrypted Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-heist-dark border border-heist-border shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4" role="status" aria-live="polite">
                  <div className="w-16 h-16 rounded-full bg-heist-red/20 border border-heist-red flex items-center justify-center text-heist-red mx-auto">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                    DISPATCH TRANSMITTED.
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-sans-body max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>. Your transmission has been verified and securely routed. Santosh will reply to <span className="text-heist-red font-technical">{formData.email}</span> within 24 hours.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
                        setSubmitError(null);
                      }}
                    >
                      Transmit Another
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      href={`mailto:${profileData.email}?subject=${encodeURIComponent(
                        formData.subject || "Operation Inquiry"
                      )}&body=${encodeURIComponent(formData.message)}`}
                    >
                      Open Email App
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-heist-border">
                    <h3 className="font-bebas text-2xl text-white tracking-wide">
                      Encrypted Message Dispatch
                    </h3>
                    <span className="text-[10px] font-technical text-heist-red uppercase tracking-wider font-bold">
                      VERIFIED RELAY CHANNEL
                    </span>
                  </div>

                  {/* Honeypot field (hidden from screen, trapped for spam bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Leave this field blank</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website || ""}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* High Visibility Error Notification Banner */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs font-sans-body space-y-3"
                      role="alert"
                      aria-live="assertive"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="font-technical font-bold text-red-300 uppercase tracking-wider text-[11px]">
                            Transmission Interrupted
                          </p>
                          <p className="leading-relaxed">{submitError}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-1 border-t border-red-500/20">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-400/40 text-[11px] font-technical font-bold text-white transition-colors"
                        >
                          <RefreshCw className={`w-3 h-3 ${isSubmitting ? "animate-spin" : ""}`} />
                          Retry Dispatch
                        </button>

                        <a
                          href={`mailto:${profileData.email}?subject=${encodeURIComponent(
                            formData.subject || "Mission Inquiry"
                          )}&body=${encodeURIComponent(formData.message)}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-technical text-neutral-300 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Open Email Client
                        </a>
                      </div>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-technical text-neutral-300 font-semibold uppercase">
                        Operative / Name <span className="text-heist-red">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        disabled={isSubmitting}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="John Doe"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors disabled:opacity-50 ${
                          errors.name
                            ? "border-red-500 focus:border-red-400"
                            : "border-heist-border focus:border-heist-red"
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-[11px] text-red-400 flex items-center gap-1 font-technical" role="alert">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-technical text-neutral-300 font-semibold uppercase">
                        Email Address <span className="text-heist-red">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        disabled={isSubmitting}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="john@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors disabled:opacity-50 ${
                          errors.email
                            ? "border-red-500 focus:border-red-400"
                            : "border-heist-border focus:border-heist-red"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-[11px] text-red-400 flex items-center gap-1 font-technical" role="alert">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-technical text-neutral-300 font-semibold uppercase">
                      Mission Subject <span className="text-heist-red">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      disabled={isSubmitting}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="Internship / Full Stack Role / Project Discussion"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors disabled:opacity-50 ${
                        errors.subject
                          ? "border-red-500 focus:border-red-400"
                          : "border-heist-border focus:border-heist-red"
                      }`}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-[11px] text-red-400 flex items-center gap-1 font-technical" role="alert">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-technical text-neutral-300 font-semibold uppercase">
                      Transmission Payload <span className="text-heist-red">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      disabled={isSubmitting}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Hi Santosh, I reviewed your portfolio and would like to discuss an opportunity..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none disabled:opacity-50 ${
                        errors.message
                          ? "border-red-500 focus:border-red-400"
                          : "border-heist-border focus:border-heist-red"
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-[11px] text-red-400 flex items-center gap-1 font-technical" role="alert">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="w-full py-4 rounded-xl bg-heist-red hover:bg-[#c90812] text-white font-technical font-bold text-xs uppercase tracking-widest shadow-lg shadow-heist-red/30 hover:shadow-heist-red/50 transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-heist-red/50"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin" />
                          <span>TRANSMITTING TO DISPATCH SERVER...</span>
                        </>
                      ) : (
                        <>
                          <span>DISPATCH TRANSMISSION</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
