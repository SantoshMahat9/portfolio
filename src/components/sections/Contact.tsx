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
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Identification required: please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Communication channel required: please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid format: please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject line required.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message too brief: please enter at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      heistAudio.playClick();
      return;
    }

    setIsSubmitting(true);
    heistAudio.playClick();

    // Send real transmission via FormSubmit to santoshkumarmahato284@gmail.com
    try {
      const response = await fetch("https://formsubmit.co/ajax/santoshkumarmahato284@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[HEIST TRANSMISSION] ${formData.subject} - from ${formData.name}`,
          subject: formData.subject,
          message: formData.message,
          _template: "table",
        }),
      });

      if (!response.ok) {
        console.warn("FormSubmit relay status:", response.status);
      }
    } catch (err) {
      console.warn("Contact form relay network exception:", err);
    }

    try {
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#E50914", "#720D12", "#FFFFFF"],
      });
      heistAudio.playAccessGranted();
    } catch {
      // safe fallback
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
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
          subtitle="Have an idea, an opportunity, or an interesting project? Let's make something extraordinary."
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
                  Reach out directly via email or connect through LinkedIn and GitHub. I respond promptly to inquiries.
                </p>
              </div>

              {/* Email Direct Item */}
              <div className="p-4 rounded-xl bg-black/50 border border-heist-border flex items-center justify-between group hover:border-heist-red/50 transition-colors">
                <a
                  href={profileData.links.email}
                  className="flex items-center gap-3 overflow-hidden"
                >
                  <div className="p-2.5 rounded-lg bg-heist-red/15 text-heist-red shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] text-heist-muted font-technical uppercase">Primary Email</p>
                    <p className="text-xs sm:text-sm font-technical font-bold text-white truncate group-hover:text-heist-red transition-colors">
                      {profileData.email}
                    </p>
                  </div>
                </a>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-md bg-white/5 hover:bg-white/15 text-heist-muted hover:text-white transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-heist-red" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Status / Availability Item */}
              <div className="p-4 rounded-xl bg-black/50 border border-heist-border flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 text-heist-red shrink-0">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-heist-red opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-heist-red" />
                  </span>
                </div>
                <div>
                  <p className="text-[10px] text-heist-muted font-technical uppercase">Operational Status</p>
                  <p className="text-xs sm:text-sm font-technical font-bold text-white">
                    Available for Strategic SDE / Internships
                  </p>
                </div>
              </div>

              {/* Base Location */}
              <div className="p-4 rounded-xl bg-black/50 border border-heist-border flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 text-heist-red shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-heist-muted font-technical uppercase">Base Coordinates</p>
                  <p className="text-xs sm:text-sm font-technical font-bold text-white">
                    {profileData.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Grid (LinkedIn, GitHub, Instagram) */}
            <div className="grid grid-cols-3 gap-3">
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
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-heist-dark border border-heist-border hover:border-heist-red/50 transition-all text-center group flex flex-col items-center gap-2"
              >
                <Github className="w-5 h-5 text-heist-muted group-hover:text-heist-red transition-colors" />
                <span className="text-[11px] font-technical text-white font-bold">GitHub</span>
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
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-heist-red/20 border border-heist-red flex items-center justify-center text-heist-red mx-auto">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                    DISPATCH TRANSMITTED.
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-sans-body max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>. Your message has been safely logged. Santosh will respond to your transmission at <span className="text-heist-red font-technical">{formData.email}</span> shortly.
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
                      AES-256 CHANNEL
                    </span>
                  </div>

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
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-red-500 focus:border-red-400"
                            : "border-heist-border focus:border-heist-red"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 font-technical">
                          <AlertCircle className="w-3 h-3" />
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500 focus:border-red-400"
                            : "border-heist-border focus:border-heist-red"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 font-technical">
                          <AlertCircle className="w-3 h-3" />
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
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Collaboration / Project / Full Stack Role"
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                        errors.subject
                          ? "border-red-500 focus:border-red-400"
                          : "border-heist-border focus:border-heist-red"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 font-technical">
                        <AlertCircle className="w-3 h-3" />
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
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Santosh, I would like to discuss..."
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-400"
                          : "border-heist-border focus:border-heist-red"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 font-technical">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-heist-red hover:bg-[#c90812] text-white font-technical font-bold text-xs uppercase tracking-widest shadow-lg shadow-heist-red/30 hover:shadow-heist-red/50 transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin" />
                          <span>TRANSMITTING OPERATION DATA...</span>
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
