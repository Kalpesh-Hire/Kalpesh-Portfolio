import React, { useEffect, useState } from "react";
import DeveloperAvatarPortrait from "./DeveloperAvatarPortrait";

/**
 * InitialLoader
 * Premium animated initial website startup screen
 * - Terminal-inspired status sequence + moving line indicator
 * - Honors prefers-reduced-motion
 * - Auto-finishes on window load or safe max timeout (never traps visitor)
 * - Fades away smoothly and unmounts from DOM
 */
function InitialLoader({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0: Init, 1: Assembling, 2: Ready, 3: FadeOut
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // If reduced motion is requested, finish immediately
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(false);
      onComplete?.();
      return;
    }

    // Step sequence
    const t1 = setTimeout(() => setPhase(1), 350);
    const t2 = setTimeout(() => setPhase(2), 750);
    const t3 = setTimeout(() => {
      setPhase(3); // Fade out start
      setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, 400); // Wait for transition
    }, 1150);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      aria-label="Loading portfolio experience"
      className={`fixed inset-0 z-[10000] bg-[#07090e] flex flex-col items-center justify-center transition-opacity duration-400 ease-out select-none ${
        phase === 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-sm px-6 text-center space-y-6">
        
        {/* Brand Avatar with Glowing Ring */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl p-0.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 shadow-2xl shadow-blue-500/30">
            <DeveloperAvatarPortrait
              size="md"
              className="w-full h-full rounded-[14px]"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#07090e]"></span>
        </div>

        {/* Identity & Status */}
        <div className="space-y-1.5">
          <h1 className="text-xl font-bold tracking-tight text-white">
            Kalpesh Hire
          </h1>
          <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            Software Developer · Enterprise Stacks
          </p>
        </div>

        {/* Dynamic Status Label */}
        <div className="h-5 flex items-center justify-center">
          <span className="text-[11px] font-mono text-slate-400 tracking-widest uppercase transition-all duration-200">
            {phase === 0 && "INITIALIZING SYSTEM..."}
            {phase === 1 && "PREPARING INTERFACE..."}
            {phase >= 2 && "SYSTEM READY"}
          </span>
        </div>

        {/* Thin Indeterminate Line Indicator */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className={`h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 rounded-full transition-all duration-700 ease-out ${
              phase === 0 ? "w-1/4" : phase === 1 ? "w-3/4" : "w-full"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default InitialLoader;
