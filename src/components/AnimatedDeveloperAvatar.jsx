import React from "react";
import { 
  SiReact, 
  SiSpringboot, 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript 
} from "react-icons/si";

/**
 * AnimatedDeveloperAvatar
 * An original, layered SVG/CSS modern illustrated developer character:
 * - Developer seated at a desk working on an illuminated laptop
 * - Gentle floating breathing motion + subtle eye blink keyframe
 * - Illuminated laptop display with animated code terminal lines
 * - Orbiting technology badges (React, Spring Boot, JS, Tailwind)
 * - Layered workstation desk, coffee cup, and floating syntax chips
 */
function AnimatedDeveloperAvatar() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto aspect-square flex items-center justify-center select-none group">
      
      {/* Ambient background glow orb */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-cyan-500/20 blur-[80px] pointer-events-none -z-10 animate-pulse-glow" />

      {/* Floating Orbital Badge 1: React (Top Left) */}
      <div 
        aria-hidden="true"
        className="absolute top-4 left-6 z-20 p-3 rounded-2xl bg-[#0d1117]/85 border border-cyan-500/30 backdrop-blur-xl shadow-xl shadow-cyan-500/10 animate-float-slow hover:scale-110 transition-transform"
      >
        <SiReact className="text-2xl text-cyan-400 animate-spin-slow" />
      </div>

      {/* Floating Orbital Badge 2: Spring Boot (Top Right) */}
      <div 
        aria-hidden="true"
        className="absolute top-8 right-6 z-20 p-3 rounded-2xl bg-[#0d1117]/85 border border-emerald-500/30 backdrop-blur-xl shadow-xl shadow-emerald-500/10 animate-float-reverse hover:scale-110 transition-transform"
      >
        <SiSpringboot className="text-2xl text-emerald-400" />
      </div>

      {/* Floating Code Snippet Card (Bottom Left) */}
      <div 
        aria-hidden="true"
        className="absolute bottom-12 -left-2 sm:left-2 z-20 p-2.5 rounded-xl bg-[#0d1117]/90 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/60 hidden sm:flex items-center gap-2 font-mono text-[11px] animate-float-medium"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="text-cyan-400 font-semibold">const</span>
        <span className="text-white">engineer</span>
        <span className="text-slate-400">=</span>
        <span className="text-emerald-300">"Kalpesh"</span>
      </div>

      {/* Floating Badge 3: Tailwind CSS (Bottom Right) */}
      <div 
        aria-hidden="true"
        className="absolute bottom-16 -right-2 sm:right-4 z-20 p-2.5 rounded-xl bg-[#0d1117]/90 border border-sky-500/30 backdrop-blur-xl shadow-xl shadow-sky-500/10 flex items-center gap-2 text-xs font-mono text-sky-400 animate-float-slow"
      >
        <SiTailwindcss className="text-lg" />
        <span className="text-[10px] text-slate-300 hidden sm:inline">UI Engine</span>
      </div>

      {/* Main Developer Character SVG Illustration */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-2xl overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Illustration of developer working on laptop"
      >
        <defs>
          <linearGradient id="avatarGlow" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="0.5" stopColor="#6366f1" stopOpacity="0.15" />
            <stop offset="1" stopColor="#090a0f" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="bodyGrad" x1="200" y1="260" x2="300" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>

          <linearGradient id="hairGrad" x1="210" y1="120" x2="290" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e293b" />
            <stop offset="1" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="laptopGrad" x1="180" y1="280" x2="320" y2="350" gradientUnits="userSpaceOnUse">
            <stop stopColor="#334155" />
            <stop offset="1" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="screenGlow" x1="210" y1="240" x2="290" y2="310" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#0284c7" />
          </linearGradient>

          <filter id="deskShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Backing Circular Platform */}
        <circle cx="250" cy="260" r="190" fill="url(#avatarGlow)" />
        <circle cx="250" cy="260" r="185" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="6 6" />

        {/* Workstation Desk Surface */}
        <g filter="url(#deskShadow)">
          <path
            d="M 60 410 L 440 410 L 410 440 L 90 440 Z"
            fill="#161e2e"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1.5"
          />
          {/* Desk highlight strip */}
          <line x1="65" y1="411" x2="435" y2="411" stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="2" />
        </g>

        {/* Developer Character Group with gentle idle breathing animation */}
        <g className="animate-idle-breathe">
          
          {/* Chair Backrest */}
          <rect x="210" y="200" width="80" height="150" rx="16" fill="#0f172a" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />

          {/* Shoulders / Torso / Hoodie */}
          <path
            d="M 180 370 C 180 300 205 270 250 270 C 295 270 320 300 320 370 Z"
            fill="url(#bodyGrad)"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="1.5"
          />
          {/* Hoodie collar line */}
          <path d="M 230 272 Q 250 295 270 272" stroke="#60a5fa" strokeWidth="2.5" fill="none" />

          {/* Neck */}
          <rect x="238" y="235" width="24" height="35" rx="6" fill="#fcd34d" />

          {/* Head */}
          <g className="animate-subtle-tilt">
            {/* Ears */}
            <circle cx="218" cy="195" r="7" fill="#fcd34d" />
            <circle cx="282" cy="195" r="7" fill="#fcd34d" />

            {/* Face base */}
            <rect x="222" y="160" width="56" height="66" rx="20" fill="#fcd34d" />

            {/* Modern Hair */}
            <path
              d="M 218 175 C 216 140 235 130 250 130 C 275 130 286 142 284 175 C 275 165 260 162 250 165 C 240 162 225 168 218 175 Z"
              fill="url(#hairGrad)"
            />

            {/* Glasses Frame (Modern developer aesthetic) */}
            <rect x="227" y="180" width="18" height="13" rx="4" fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <rect x="255" y="180" width="18" height="13" rx="4" fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="245" y1="185" x2="255" y2="185" stroke="#0f172a" strokeWidth="2" />

            {/* Eyes with subtle CSS blink animation */}
            <g className="animate-blink">
              <circle cx="236" cy="186" r="2.5" fill="#0284c7" />
              <circle cx="264" cy="186" r="2.5" fill="#0284c7" />
            </g>

            {/* Friendly Smile */}
            <path d="M 244 205 Q 250 211 256 205" stroke="#92400e" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>

          {/* Arms reaching to laptop keyboard */}
          <path d="M 195 320 Q 215 365 240 375" stroke="#1e3a8a" strokeWidth="18" strokeLinecap="round" fill="none" />
          <path d="M 305 320 Q 285 365 260 375" stroke="#1e3a8a" strokeWidth="18" strokeLinecap="round" fill="none" />
          {/* Hands */}
          <circle cx="240" cy="375" r="7" fill="#fcd34d" />
          <circle cx="260" cy="375" r="7" fill="#fcd34d" />
        </g>

        {/* Laptop on Workstation */}
        <g>
          {/* Laptop Base / Keyboard */}
          <path
            d="M 190 380 L 310 380 L 325 395 L 175 395 Z"
            fill="url(#laptopGrad)"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.5"
          />
          {/* Touchpad */}
          <rect x="235" y="386" width="30" height="7" rx="1.5" fill="#1e293b" />

          {/* Open Laptop Display Screen with Upward Cyan Screen Glow */}
          <path
            d="M 205 310 L 295 310 L 290 380 L 210 380 Z"
            fill="#090d16"
            stroke="#475569"
            strokeWidth="2"
          />
          {/* Screen Content Window */}
          <rect x="212" y="316" width="76" height="58" rx="3" fill="#030712" />

          {/* Animated Code lines on Laptop Display */}
          <g className="animate-code-pulse">
            <line x1="218" y1="324" x2="245" y2="324" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="250" y1="324" x2="270" y2="324" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
            
            <line x1="222" y1="332" x2="265" y2="332" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
            <line x1="222" y1="340" x2="250" y2="340" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
            
            <line x1="218" y1="348" x2="240" y2="348" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <line x1="244" y1="348" x2="275" y2="348" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />

            <line x1="222" y1="356" x2="255" y2="356" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
            {/* Blinking Terminal Cursor on Laptop Screen */}
            <rect x="259" y="354" width="3" height="4" fill="#38bdf8" className="animate-cursor-blink" />
          </g>

          {/* Subtle screen light cone hitting developer */}
          <polygon points="212,316 288,316 270,250 230,250" fill="url(#screenGlow)" opacity="0.08" pointerEvents="none" />
        </g>

        {/* Coffee Mug on Desk with Rising Steam */}
        <g>
          <rect x="350" y="380" width="22" height="26" rx="4" fill="#3b82f6" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          {/* Mug handle */}
          <path d="M 372 385 C 380 385 380 398 372 398" stroke="#3b82f6" strokeWidth="3" fill="none" />
          {/* Coffee steam paths */}
          <path d="M 356 374 Q 358 368 356 362" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" strokeLinecap="round" fill="none" className="animate-steam" />
          <path d="M 364 372 Q 366 366 364 360" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" strokeLinecap="round" fill="none" className="animate-steam-delayed" />
        </g>

        {/* Floating Code Windows Background Accents */}
        <g className="animate-float-slow opacity-60">
          <rect x="80" y="180" width="70" height="45" rx="8" fill="#0d1117" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
          <circle cx="92" cy="190" r="2.5" fill="#ef4444" />
          <circle cx="100" cy="190" r="2.5" fill="#f59e0b" />
          <circle cx="108" cy="190" r="2.5" fill="#10b981" />
          <line x1="90" y1="202" x2="135" y2="202" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
          <line x1="90" y1="212" x2="120" y2="212" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
        </g>

      </svg>
    </div>
  );
}

export default AnimatedDeveloperAvatar;
