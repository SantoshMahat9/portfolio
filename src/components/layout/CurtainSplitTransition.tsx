"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CurtainSplitTransitionProps {
  isRevealing: boolean;
}

export function CurtainSplitTransition({ isRevealing }: CurtainSplitTransitionProps) {
  return (
    <AnimatePresence>
      {isRevealing && (
        <div className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden">
          {/* Left Vault Door */}
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#0c0c0e] border-r-2 border-heist-red flex items-center justify-end pr-8 shadow-[10px_0_40px_rgba(229,9,20,0.4)]"
          >
            <div className="text-right space-y-1 select-none opacity-40">
              <div className="font-bebas text-4xl text-neutral-500">ROYAL MINT</div>
              <div className="font-mono-code text-[10px] text-heist-red tracking-widest">
                DOOR A // DISENGAGED
              </div>
            </div>
          </motion.div>

          {/* Right Vault Door */}
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "100%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#0c0c0e] border-l-2 border-heist-red flex items-center justify-start pl-8 shadow-[-10px_0_40px_rgba(229,9,20,0.4)]"
          >
            <div className="text-left space-y-1 select-none opacity-40">
              <div className="font-bebas text-4xl text-neutral-500">SECTOR 01</div>
              <div className="font-mono-code text-[10px] text-heist-red tracking-widest">
                DOOR B // DISENGAGED
              </div>
            </div>
          </motion.div>

          {/* Central Laser Beam Flash */}
          <motion.div
            initial={{ scaleY: 1, opacity: 1 }}
            animate={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-white shadow-[0_0_30px_#e50914,0_0_60px_#e50914]"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
