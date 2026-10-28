import React from "react";

/**
 * DeveloperAvatarPortrait
 * Renders an animated developer character portrait badge/avatar in place of static photos.
 * Supports different sizes (e.g., 'sm' for navbar, 'md' for cards/summary strips, 'lg' for about cards).
 */
export function DeveloperAvatarPortrait({ size = "md", className = "" }) {
  const sizeMap = {
    xs: "w-8 h-8",
    sm: "w-9 h-9",
    md: "w-20 h-20",
    lg: "w-full aspect-[4/5]",
  };

  const containerSize = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#131b2e] to-[#0b0f19] border border-blue-500/30 group ${containerSize} ${className}`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.22),transparent_70%)] pointer-events-none" />

      {/* Animated SVG Character Head & Torso */}
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full object-contain overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Developer animated avatar portrait"
      >
        <defs>
          <linearGradient id="avatarSkin" x1="60" y1="40" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fed7aa" />
            <stop offset="1" stopColor="#fba779" />
          </linearGradient>

          <linearGradient id="avatarHair" x1="50" y1="20" x2="110" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e293b" />
            <stop offset="1" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="avatarHoodie" x1="40" y1="100" x2="120" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>

          <linearGradient id="avatarLapGlow" x1="40" y1="140" x2="120" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="1" stopColor="#6366f1" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Ambient backdrop ring */}
        <circle cx="80" cy="80" r="70" stroke="rgba(56,189,248,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Upper Body / Hoodie with idle breathing animation */}
        <g className="animate-idle-breathe" style={{ transformOrigin: "80px 130px" }}>
          {/* Shoulders & Torso */}
          <path
            d="M 32 160 C 32 122, 54 106, 80 106 C 106 106, 128 122, 128 160 Z"
            fill="url(#avatarHoodie)"
          />
          {/* Hoodie collar accents */}
          <path
            d="M 64 106 L 80 126 L 96 106"
            stroke="#1d4ed8"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Neck */}
          <rect x="72" y="86" width="16" height="22" rx="4" fill="#fba779" />

          {/* Face */}
          <rect x="58" y="44" width="44" height="48" rx="20" fill="url(#avatarSkin)" />

          {/* Ears */}
          <circle cx="56" cy="68" r="5" fill="#fba779" />
          <circle cx="104" cy="68" r="5" fill="#fba779" />

          {/* Hair */}
          <path
            d="M 54 52 C 54 32, 66 22, 80 22 C 96 22, 106 32, 106 50 C 106 56, 103 62, 101 64 C 98 56, 92 48, 80 48 C 68 48, 62 55, 57 64 C 55 60, 54 56, 54 52 Z"
            fill="url(#avatarHair)"
          />

          {/* Modern Glasses */}
          <rect x="62" y="58" width="15" height="11" rx="3" stroke="#38bdf8" strokeWidth="2" fill="rgba(56,189,248,0.12)" />
          <rect x="83" y="58" width="15" height="11" rx="3" stroke="#38bdf8" strokeWidth="2" fill="rgba(56,189,248,0.12)" />
          <line x1="77" y1="63" x2="83" y2="63" stroke="#38bdf8" strokeWidth="2" />

          {/* Eyes with blink animation */}
          <g className="animate-eye-blink" style={{ transformOrigin: "80px 63px" }}>
            <circle cx="69" cy="63" r="2" fill="#0f172a" />
            <circle cx="90" cy="63" r="2" fill="#0f172a" />
            {/* Catchlights */}
            <circle cx="70" cy="62" r="0.75" fill="#ffffff" />
            <circle cx="91" cy="62" r="0.75" fill="#ffffff" />
          </g>

          {/* Friendly Smile */}
          <path
            d="M 74 78 Q 80 83 86 78"
            stroke="#c2410c"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Laptop Top Glow Reflection at Bottom Edge */}
          <path
            d="M 44 154 L 116 154"
            stroke="url(#avatarLapGlow)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

export default DeveloperAvatarPortrait;
