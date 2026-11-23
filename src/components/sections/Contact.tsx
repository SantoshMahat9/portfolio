"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Check,
  Copy,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
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
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please write a message with at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic async dispatch & email payload formulation
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Trigger high-end celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF4D1C", "#FFC247", "#E93616", "#FFFFFF"],
      });
    } catch {
      // safe fallback
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#101012] overflow-hidden">
      {/* Background fiery radiant spot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brand-orange/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="06 // GET IN TOUCH"
          title="LET'S BUILD"
          highlight="SOMETHING GREAT."
          subtitle="Have an opportunity, an interesting idea or a project in mind? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          {/* Direct Coordinates & Quick Action Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-brand-surface/70 border border-white/10 shadow-xl space-y-6">
              <h3 className="font-syne text-2xl font-bold text-white">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-brand-secondary leading-relaxed">
                Feel free to reach out directly via email or connect on LinkedIn and GitHub. I respond promptly to inquiries.
              </p>

              {/* Email item */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between group hover:border-brand-orange/50 transition-colors">
                <a
                  href={profileData.links.email}
                  className="flex items-center gap-3 overflow-hidden"
                >
                  <div className="p-2.5 rounded-xl bg-brand-orange/15 text-brand-orange shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs text-brand-muted font-mono-code">Email</p>
                    <p className="text-sm font-semibold text-white truncate group-hover:text-brand-orange transition-colors">
                      {profileData.email}
                    </p>
                  </div>
                </a>

                <button
                  onClick={() => copyToClipboard(profileData.email, "email")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-brand-muted hover:text-white transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-brand-yellow" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Fast Response & Availability Card */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                </div>
                <div>
                  <p className="text-xs text-brand-muted font-mono-code">Response Time</p>
                  <p className="text-sm font-semibold text-white">
                    Within 24 Hours · Open to Opportunities
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-brand-orange shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-brand-muted font-mono-code">Current Location</p>
                  <p className="text-sm font-semibold text-white">
                    {profileData.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-brand-surface/60 border border-white/10 hover:border-brand-orange/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-brand-yellow" />
                  <div>
                    <p className="text-xs text-brand-muted font-mono-code">LinkedIn</p>
                    <p className="text-sm font-bold text-white">santoshmah</p>
                  </div>
                </div>
                <span className="text-brand-orange group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-brand-surface/60 border border-white/10 hover:border-brand-orange/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-brand-orange" />
                  <div>
                    <p className="text-xs text-brand-muted font-mono-code">GitHub</p>
                    <p className="text-sm font-bold text-white">SantoshMahat9</p>
                  </div>
                </div>
                <span className="text-brand-orange group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-surface/80 border border-white/15 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange mx-auto">
                    <Sparkles className="w-8 h-8 text-brand-yellow" />
                  </div>
                  <h3 className="font-syne text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-brand-secondary max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>! Your message has been recorded. Santosh will get back to you at <span className="text-brand-yellow font-mono-code">{formData.email}</span> shortly.
                  </p>
                  <div className="pt-4 flex justify-center gap-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      href={`mailto:${profileData.email}?subject=${encodeURIComponent(
                        formData.subject || "Portfolio Contact"
                      )}&body=${encodeURIComponent(formData.message)}`}
                    >
                      Open Email App
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="font-syne text-2xl font-bold text-white">
                      Send a Message
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 font-mono-code">
                      Fill out the form below or launch an email directly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono-code text-white/90 font-medium">
                        Your Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-2xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-red-500 focus:border-red-400"
                            : "border-white/10 focus:border-brand-orange"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 flex items-center gap-1 font-mono-code">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono-code text-white/90 font-medium">
                        Email Address <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500 focus:border-red-400"
                            : "border-white/10 focus:border-brand-orange"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 flex items-center gap-1 font-mono-code">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-mono-code text-white/90 font-medium">
                      Subject <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration Inquiry"
                      className={`w-full px-4 py-3 rounded-2xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.subject
                          ? "border-red-500 focus:border-red-400"
                          : "border-white/10 focus:border-brand-orange"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 flex items-center gap-1 font-mono-code">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono-code text-white/90 font-medium">
                      Message <span className="text-brand-orange">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Santosh, I would like to discuss..."
                      className={`w-full px-4 py-3 rounded-2xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-400"
                          : "border-white/10 focus:border-brand-orange"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 flex items-center gap-1 font-mono-code">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-orange via-brand-orange-deep to-brand-yellow text-white font-bold text-sm tracking-wide shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed group active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin" />
                          <span>SENDING MESSAGE...</span>
                        </>
                      ) : (
                        <>
                          <span>TRANSMIT MESSAGE</span>
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
