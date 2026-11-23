"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { heistAudio } from "@/lib/audioEngine";
import {
  Pin,
  Flame,
  Target,
  Zap,
  Plus,
  X,
  Search,
  ShieldAlert,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface Note {
  id: string;
  title: string;
  message: string;
  author: string;
  alias: string;
  category: "rules" | "intel" | "transmissions";
  color: "red" | "dark" | "charcoal";
  date: string;
  reactions: {
    flame: number;
    target: number;
    zap: number;
  };
}

const INITIAL_NOTES: Note[] = [
  {
    id: "note-1",
    title: "RULE #1: SURGICAL PRECISION",
    message: "A heist fails the moment a second is wasted. In code, 100ms latency is the difference between conversion and abandonment. Optimize every bundle and database query.",
    author: "The Professor",
    alias: "♟️ Mastermind",
    category: "rules",
    color: "red",
    date: "DIRECTIVE 01",
    reactions: { flame: 34, target: 21, zap: 18 },
  },
  {
    id: "note-2",
    title: "RULE #2: ZERO DATA LEAKS",
    message: "Never expose raw credentials or phone numbers on public wire payloads. Privacy and security clearance are non-negotiable. Encrypt everything.",
    author: "Berlin",
    alias: "🛡️ Tactical Lead",
    category: "rules",
    color: "charcoal",
    date: "DIRECTIVE 02",
    reactions: { flame: 28, target: 25, zap: 14 },
  },
  {
    id: "note-3",
    title: "FIELD INTEL: FULL-STACK ARSENAL",
    message: "Master both ends of the wire. From low-level SQL optimization and C# .NET architecture to high-fidelity React and Three.js 3D spatial interfaces.",
    author: "Santosh Mahato",
    alias: "⚡ Full Stack Architect",
    category: "intel",
    color: "dark",
    date: "MUMBAI SECTOR",
    reactions: { flame: 42, target: 36, zap: 29 },
  },
  {
    id: "note-4",
    title: "KANTASCRYPT OPERATION LOG",
    message: "Executed backend database pipelines, built full-stack solutions, and fortified expense tracking systems. Clean, tested, modular code.",
    author: "Santosh Mahato",
    alias: "💻 Operative",
    category: "intel",
    color: "charcoal",
    date: "MISSION LOG",
    reactions: { flame: 19, target: 15, zap: 22 },
  },
  {
    id: "note-5",
    title: "RULE #3: FAILSAFE ARCHITECTURE",
    message: "Every mission must have Plan B, Plan C, and Plan D. If the API fails, offline caches respond. Graceful degradation is an engineering law.",
    author: "Tokyo",
    alias: "💥 Vanguard",
    category: "rules",
    color: "red",
    date: "DIRECTIVE 03",
    reactions: { flame: 22, target: 17, zap: 31 },
  },
];

const STORAGE_KEY = "heist_portfolio_notes_v1";

export function ThePlanNotes() {
  const [notes, setNotes] = useState<Note[]>(INITIAL_NOTES);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userReactions, setUserReactions] = useState<Record<string, boolean>>({});

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    author: "",
    alias: "🕶️ Guest Operative",
    category: "transmissions" as const,
  });

  // Load from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setNotes(parsed);
        }
      }
    } catch {}
  }, []);

  // Save to LocalStorage
  const saveNotes = (updated: Note[]) => {
    setNotes(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  };

  const handleReaction = (noteId: string, type: "flame" | "target" | "zap") => {
    heistAudio.playBlip();
    const key = `${noteId}_${type}`;
    const alreadyReacted = userReactions[key];

    const updated = notes.map((note) => {
      if (note.id !== noteId) return note;
      const count = note.reactions[type] || 0;
      return {
        ...note,
        reactions: {
          ...note.reactions,
          [type]: alreadyReacted ? Math.max(0, count - 1) : count + 1,
        },
      };
    });

    setUserReactions((prev) => ({ ...prev, [key]: !alreadyReacted }));
    saveNotes(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.message.trim()) return;

    heistAudio.playAccessGranted();

    const newNote: Note = {
      id: `custom-${Date.now()}`,
      title: formData.title.trim().toUpperCase(),
      message: formData.message.trim(),
      author: formData.author.trim() || "Anonymous Operative",
      alias: formData.alias,
      category: "transmissions",
      color: "red",
      date: "JUST NOW",
      reactions: { flame: 1, target: 0, zap: 0 },
    };

    saveNotes([newNote, ...notes]);
    setIsModalOpen(false);
    setFormData({
      title: "",
      message: "",
      author: "",
      alias: "🕶️ Guest Operative",
      category: "transmissions",
    });
  };

  const filteredNotes = useMemo(() => {
    return notes.filter((n) => {
      const matchCat = activeCategory === "all" || n.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        q === "" ||
        n.title.toLowerCase().includes(q) ||
        n.message.toLowerCase().includes(q) ||
        n.author.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [notes, activeCategory, searchQuery]);

  return (
    <section id="the-plan" className="relative py-24 sm:py-32 bg-[#0a0a0c] overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-heist-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="06 // TACTICAL BLUEPRINT"
          title="THE PROFESSOR'S"
          highlight="RULES & INTEL."
          subtitle="Classified operational rules, architectural principles, and encrypted transmissions from the mastermind command hub."
        />

        {/* Toolbar: Category Filters, Search & Add Button */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "ALL INTEL" },
              { id: "rules", label: "TACTICAL RULES" },
              { id: "intel", label: "FIELD INTEL" },
              { id: "transmissions", label: "TRANSMISSIONS" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  heistAudio.playClick();
                  setActiveCategory(cat.id);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-code transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-heist-red text-white font-bold shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                    : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search + Transmit Intel Button */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-56">
              <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search intel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111116] border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-heist-red font-mono-code"
              />
            </div>

            <button
              onClick={() => {
                heistAudio.playClick();
                setIsModalOpen(true);
              }}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-heist-red hover:bg-[#ff1a26] text-white text-xs font-mono-code font-bold shadow-[0_0_15px_rgba(229,9,20,0.3)] transition-all cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>TRANSMIT INTEL</span>
            </button>
          </div>
        </div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredNotes.map((note, idx) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`relative rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                  note.color === "red"
                    ? "bg-gradient-to-br from-[#160a0c] to-[#0d0708] border-heist-red/40 hover:border-heist-red hover:shadow-heist-red/20"
                    : "bg-[#111116] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Red Pin Graphic */}
                <div className="absolute -top-2.5 right-6 flex items-center justify-center w-6 h-6 rounded-full bg-heist-red text-white shadow-[0_0_10px_rgba(229,9,20,0.7)]">
                  <Pin className="w-3 h-3 fill-white" />
                </div>

                <div className="space-y-4">
                  {/* Alias & Date Tag */}
                  <div className="flex items-center justify-between text-[11px] font-mono-code">
                    <span className="text-heist-red font-semibold flex items-center gap-1">
                      {note.alias}
                    </span>
                    <span className="text-neutral-500 uppercase tracking-widest text-[10px]">
                      {note.date}
                    </span>
                  </div>

                  {/* Note Title */}
                  <h3 className="font-bebas text-2xl tracking-wider text-white group-hover:text-heist-red transition-colors leading-tight">
                    {note.title}
                  </h3>

                  {/* Note Body */}
                  <p className="text-sm text-neutral-300 font-sans-body leading-relaxed">
                    {note.message}
                  </p>
                </div>

                {/* Footer: Author & Reactions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-code">
                  <span className="text-neutral-400 font-medium">
                    — {note.author}
                  </span>

                  {/* Reactions Bar */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleReaction(note.id, "flame")}
                      className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] transition-all cursor-pointer ${
                        userReactions[`${note.id}_flame`]
                          ? "bg-orange-500/20 text-orange-400 border border-orange-500/40"
                          : "hover:bg-white/10 text-neutral-400"
                      }`}
                      title="Fire / Brilliant"
                    >
                      <Flame className="w-3 h-3 text-orange-400" />
                      <span>{note.reactions.flame}</span>
                    </button>

                    <button
                      onClick={() => handleReaction(note.id, "target")}
                      className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] transition-all cursor-pointer ${
                        userReactions[`${note.id}_target`]
                          ? "bg-heist-red/20 text-heist-red border border-heist-red/40"
                          : "hover:bg-white/10 text-neutral-400"
                      }`}
                      title="Precision / Target Hit"
                    >
                      <Target className="w-3 h-3 text-heist-red" />
                      <span>{note.reactions.target}</span>
                    </button>

                    <button
                      onClick={() => handleReaction(note.id, "zap")}
                      className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] transition-all cursor-pointer ${
                        userReactions[`${note.id}_zap`]
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
                          : "hover:bg-white/10 text-neutral-400"
                      }`}
                      title="Speed / Fast Execution"
                    >
                      <Zap className="w-3 h-3 text-yellow-400" />
                      <span>{note.reactions.zap}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Transmit Intel Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#121218] border border-heist-red/40 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(229,9,20,0.2)] font-mono-code relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-heist-red text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>ENCRYPTED TRANSMISSION PROTOCOL</span>
              </div>

              <h3 className="font-bebas text-3xl text-white mb-6">
                PIN YOUR CLASSIFIED INTEL
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Operative Codename / Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Inspector Murillo, Dev Recruiter"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full bg-[#181820] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-heist-red font-mono-code"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Transmission Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Great Architecture! or Mission Collaboration"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-[#181820] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-heist-red font-mono-code"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Classified Intel / Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    maxLength={300}
                    placeholder="Write your note to the command center..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#181820] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-heist-red font-mono-code resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-lg border border-white/10 text-neutral-400 hover:text-white text-xs cursor-pointer"
                  >
                    ABORT
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-heist-red hover:bg-[#ff1a26] text-white text-xs font-bold shadow-[0_0_15px_rgba(229,9,20,0.4)] cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>TRANSMIT & PIN</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
