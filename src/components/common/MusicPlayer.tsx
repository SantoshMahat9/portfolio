"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heistAudio, HEIST_TRACKS, AudioTrack } from "@/lib/audioEngine";
import {
  Disc,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Radio,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState<AudioTrack>(HEIST_TRACKS[0]);
  const [volume, setVolume] = useState(0.55);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const unsub = heistAudio.subscribe((state) => {
      setIsPlaying(state.isPlaying);
      setIsMuted(state.isMuted);
      setCurrentTrackIndex(state.currentTrackIndex);
      setCurrentTrack(state.currentTrack);
      setVolume(state.volume);
    });
    return () => unsub();
  }, []);

  const handleTogglePlay = () => {
    heistAudio.toggleSound();
  };

  const handleNext = () => {
    heistAudio.playClick();
    heistAudio.nextTrack();
  };

  const handlePrev = () => {
    heistAudio.playClick();
    heistAudio.prevTrack();
  };

  const handleSelectTrack = (idx: number) => {
    heistAudio.playClick();
    heistAudio.setTrack(idx);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    heistAudio.setVolume(val);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-50 select-none font-mono-code">
      {/* Expanded Track Details Card */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 p-4 sm:p-5 rounded-2xl bg-[#0d0d12]/95 backdrop-blur-2xl border border-heist-red/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(229,9,20,0.25)] w-[300px] sm:w-[320px] text-left space-y-4"
          >
            {/* Header info */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-[10px] text-heist-red font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 animate-pulse text-heist-red" />
                <span>HEIST AUDIO RELAY</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-neutral-400 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
                title="Collapse player"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Currently Playing Track Card */}
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-tr from-heist-red to-[#720D12] flex items-center justify-center text-white shadow-[0_0_15px_rgba(229,9,20,0.5)] border border-white/20 shrink-0 ${
                  isPlaying ? "animate-[spin_4s_linear_infinite]" : ""
                }`}
              >
                <Disc className="w-6 h-6" />
              </div>

              <div className="overflow-hidden flex-1">
                <span className="text-[10px] px-2 py-0.5 rounded bg-heist-red/20 text-heist-red font-bold tracking-wider uppercase border border-heist-red/30">
                  {currentTrack.badge}
                </span>
                <p className="font-bebas text-lg text-white truncate mt-1 tracking-wide">
                  {currentTrack.title}
                </p>
                <p className="text-[11px] text-neutral-400 truncate">
                  {currentTrack.artist} • {currentTrack.album}
                </p>
              </div>
            </div>

            {/* Playback Controls & Track Switcher */}
            <div className="flex items-center justify-between pt-1">
              {/* Prev Track */}
              <button
                onClick={handlePrev}
                title="Previous Track"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/5 transition-colors cursor-pointer"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              {/* Play / Pause Main Button */}
              <button
                onClick={handleTogglePlay}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-heist-red hover:bg-[#ff1a26] text-white text-xs font-bold shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all cursor-pointer"
              >
                {isPlaying && !isMuted ? (
                  <>
                    <Pause className="w-4 h-4 fill-white" />
                    <span>PAUSE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>PLAY HEIST</span>
                  </>
                )}
              </button>

              {/* Next Track */}
              <button
                onClick={handleNext}
                title="Next Track (Change Song)"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/5 transition-colors cursor-pointer"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-3 pt-1 border-t border-white/10 text-xs">
              <button
                onClick={handleTogglePlay}
                className="text-neutral-400 hover:text-white"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || !isPlaying ? (
                  <VolumeX className="w-4 h-4 text-neutral-500" />
                ) : (
                  <Volume2 className="w-4 h-4 text-heist-red animate-pulse" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolume}
                className="w-full accent-heist-red h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
              />
              <span className="text-[10px] text-neutral-400 font-mono-code w-8 text-right">
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>

            {/* Playlist / Change Song Menu */}
            <div className="space-y-1.5 pt-2 border-t border-white/10">
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                CHANGE SONG // PLAYLIST
              </div>
              <div className="space-y-1">
                {HEIST_TRACKS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => handleSelectTrack(idx)}
                    className={`w-full text-left p-2 rounded-lg text-xs flex items-center justify-between transition-all cursor-pointer ${
                      currentTrackIndex === idx
                        ? "bg-heist-red/20 text-white border border-heist-red/50 font-bold"
                        : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    <span className="truncate pr-2">
                      {idx + 1}. {t.title}
                    </span>
                    {currentTrackIndex === idx && isPlaying && (
                      <span className="w-2 h-2 rounded-full bg-heist-red animate-ping" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Vinyl Pill Trigger */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full backdrop-blur-xl border transition-all cursor-pointer shadow-xl ${
          isPlaying && !isMuted
            ? "bg-[#120a0c]/90 border-heist-red text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]"
            : "bg-[#0b0b0e]/90 border-white/15 text-neutral-400 hover:text-white hover:border-white/30"
        }`}
      >
        {/* Rotating Disc */}
        <div
          className={`w-7 h-7 rounded-full bg-gradient-to-tr from-heist-red to-[#5c0b0f] flex items-center justify-center text-white border border-white/20 shrink-0 ${
            isPlaying && !isMuted ? "animate-[spin_3s_linear_infinite]" : ""
          }`}
        >
          <Disc className="w-3.5 h-3.5" />
        </div>

        {/* Track Title / Equalizer */}
        {isPlaying && !isMuted ? (
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white max-w-[130px] truncate hidden xs:inline">
              {currentTrack.title}
            </span>
            {/* Animated Equalizer Waves */}
            <div className="flex items-end gap-0.5 h-3.5">
              <motion.span
                animate={{ height: ["4px", "14px", "6px", "12px", "4px"] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                className="w-0.5 bg-heist-red rounded-full shadow-[0_0_6px_#e50914]"
              />
              <motion.span
                animate={{ height: ["6px", "14px", "4px", "10px", "6px"] }}
                transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                className="w-0.5 bg-heist-red rounded-full shadow-[0_0_6px_#e50914]"
              />
              <motion.span
                animate={{ height: ["10px", "4px", "14px", "6px", "10px"] }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.4 }}
                className="w-0.5 bg-heist-red rounded-full shadow-[0_0_6px_#e50914]"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <Radio className="w-3 h-3 text-neutral-500" />
            <span>PLAY MUSIC</span>
          </div>
        )}

        {/* Quick Skip Song Icon button */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="p-1 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          title="Change to Next Song"
        >
          <SkipForward className="w-3.5 h-3.5 text-heist-red" />
        </div>
      </motion.button>
    </div>
  );
}
