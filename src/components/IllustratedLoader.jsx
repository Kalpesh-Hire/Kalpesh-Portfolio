import React, { useEffect, useState } from "react";
import { SiReact, SiSpringboot } from "react-icons/si";

/**
 * IllustratedLoader
 * Completely new Animated Developer Avatar & Workstation Boot Sequence
 * Sequence:
 * 1. Illustrated workstation & mini developer avatar appear with ambient glow.
 * 2. Laptop screen powers on with code illumination.
 * 3. Animated syntax chips assemble around the developer character.
 * 4. "INITIALIZING SYSTEM" -> "PREPARING INTERFACE" -> Smooth fade to portfolio.
 * - Respects prefers-reduced-motion (finishes immediately).
 * - Safe fallback timeout ensures visitor is never trapped.
 * - Smooth unmount from DOM.
 */
function IllustratedLoader({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0: Enter, 1: Laptop Screen On, 2: Code Orbit, 3: FadeOut
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Immediate bypass if reduced motion is requested
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(false);
      onComplete?.();
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 350);
    const t2 = setTimeout(() => setPhase(2), 800);
    const t3 = setTimeout(() => {
      setPhase(3);
      setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, 450);
    }, 1350);

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
      aria-label="Developer avatar booting workstation and portfolio interface"
      className={`fixed inset-0 z-[10000] bg-[#07090e] flex flex-col items-center justify-center select-none transition-opacity duration-450 ease-out ${
        phase === 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient background aura */}
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        
        {/* Animated Workstation Developer Scene */}
        <div className="relative w-44 h-44 mb-4 flex items-center justify-center">
          
          {/* Orbiting Tech Badge (React) */}
          <div 
            className={`absolute -top-1 -left-1 p-2 rounded-xl bg-[#0d1117] border border-cyan-500/40 shadow-lg text-cyan-400 transition-all duration-500 ${
              phase >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            <SiReact className="text-lg animate-spin-slow" />
          </div>

          {/* Orbiting Tech Badge (Spring Boot) */}
          <div 
            className={`absolute -top-1 -right-1 p-2 rounded-xl bg-[#0d1117] border border-emerald-500/40 shadow-lg text-emerald-400 transition-all duration-500 ${
              phase >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            <SiSpringboot className="text-lg" />
          </div>

          {/* Miniature Developer Avatar SVG */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background halo */}
            <circle cx="100" cy="100" r="80" fill="rgba(56, 189, 248, 0.06)" stroke="rgba(255,255,255,0.06)" />

            {/* Desk Surface */}
            <rect x="25" y="155" width="150" height="12" rx="4" fill="#161e2e" stroke="rgba(255,255,255,0.1)" />
            <line x1="28" y1="156" x2="172" y2="156" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />

            {/* Character Torso */}
            <path
              d="M 68 155 C 68 120 80 108 100 108 C 120 108 132 120 132 155 Z"
              fill="#2563eb"
            />
            {/* Collar */}
            <path d="M 90 108 Q 100 120 110 108" stroke="#60a5fa" strokeWidth="2" fill="none" />

            {/* Head */}
            <circle cx="100" cy="78" r="22" fill="#fcd34d" />
            {/* Hair */}
            <path d="M 80 75 C 78 55 90 50 100 50 C 114 50 122 56 120 75 C 115 68 106 66 100 68 C 94 66 85 70 80 75 Z" fill="#1e293b" />
            {/* Glasses */}
            <rect x="87" y="74" width="11" height="8" rx="2" fill="none" stroke="#0f172a" strokeWidth="1.5" />
            <rect x="102" y="74" width="11" height="8" rx="2" fill="none" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="98" y1="78" x2="102" y2="78" stroke="#0f172a" strokeWidth="1.5" />
            {/* Smile */}
            <path d="M 96 89 Q 100 93 104 89" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Arms reaching */}
            <path d="M 76 130 Q 86 150 96 153" stroke="#1e3a8a" strokeWidth="9" strokeLinecap="round" fill="none" />
            <path d="M 124 130 Q 114 150 104 153" stroke="#1e3a8a" strokeWidth="9" strokeLinecap="round" fill="none" />

            {/* Laptop Base */}
            <path d="M 78 152 L 122 152 L 128 160 L 72 160 Z" fill="#334155" />

            {/* Laptop Screen - Powers on in Phase >= 1 */}
            <rect
              x="82"
              y="118"
              width="36"
              height="28"
              rx="2"
              fill={phase >= 1 ? "#030712" : "#0f172a"}
              stroke="#475569"
              strokeWidth="1.5"
            />
            {/* Screen Content Lines */}
            {phase >= 1 && (
              <g className="animate-code-pulse">
                <line x1="86" y1="124" x2="100" y2="124" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="86" y1="129" x2="112" y2="129" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="86" y1="134" x2="106" y2="134" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="86" y1="139" x2="96" y2="139" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            )}

            {/* Coffee cup */}
            <rect x="142" y="146" width="9" height="11" rx="2" fill="#3b82f6" />
          </svg>
        </div>

        {/* Brand Name & Developer Identity */}
        <div className="space-y-1">
          <h2 className="text-lg font-bold tracking-tight text-white">
            Kalpesh Hire
          </h2>
          <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            Software Developer
          </p>
        </div>

        {/* Animated Boot Sequence Status Label */}
        <div className="h-6 flex items-center justify-center mt-3">
          <span className="text-[11px] font-mono text-slate-400 tracking-widest uppercase transition-all duration-200">
            {phase === 0 && "STARTING WORKSTATION..."}
            {phase === 1 && "ILLUMINATING TERMINAL..."}
            {phase >= 2 && "PORTFOLIO INTERFACE READY"}
          </span>
        </div>

        {/* Clean Indeterminate Progress Line */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-3 relative">
          <div
            className={`h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 rounded-full transition-all duration-500 ease-out ${
              phase === 0 ? "w-1/4" : phase === 1 ? "w-2/3" : "w-full"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default IllustratedLoader;
