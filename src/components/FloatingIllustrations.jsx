import React from "react";
import { FiCode, FiTerminal, FiLayers, FiDatabase, FiCpu } from "react-icons/fi";
import { SiReact, SiSpringboot } from "react-icons/si";

/**
 * FloatingIllustrations
 * Carefully composed, animated illustrated depth elements:
 * - Floating code IDE windows with title bars
 * - Geometric orbiting nodes & connection particles
 * - Database cylinders and API lines
 * - Kept strictly behind interactive content (pointer-events-none, z-0)
 */
function FloatingIllustrations() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
      
      {/* 1. Floating Mini Browser Window (Top Left Hero) */}
      <div className="absolute top-24 left-[4%] hidden xl:block animate-float-slow opacity-40 hover:opacity-80 transition-opacity">
        <div className="w-56 rounded-2xl bg-[#0d1117]/80 border border-cyan-500/20 backdrop-blur-md p-3 shadow-2xl">
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/5">
            <span className="w-2 h-2 rounded-full bg-red-400/80"></span>
            <span className="w-2 h-2 rounded-full bg-amber-400/80"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400/80"></span>
            <span className="text-[10px] font-mono text-slate-500 ml-1.5">api/v1/system</span>
          </div>
          <div className="space-y-1 font-mono text-[10px]">
            <p className="text-cyan-400">status: <span className="text-emerald-400">200 OK</span></p>
            <p className="text-slate-400">runtime: <span className="text-white">"React 18"</span></p>
            <p className="text-slate-400">backend: <span className="text-indigo-300">"Spring Boot"</span></p>
          </div>
        </div>
      </div>

      {/* 2. Floating Database Cylinder & Connection Line (Mid Right) */}
      <div className="absolute top-[48%] right-[3%] hidden lg:block animate-float-reverse opacity-35">
        <div className="p-3 rounded-2xl bg-[#0d1117]/80 border border-emerald-500/20 backdrop-blur-md shadow-2xl flex items-center gap-2.5 font-mono text-xs text-slate-300">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FiDatabase className="text-base animate-pulse" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white">MySQL Persistence</div>
            <div className="text-[9px] text-emerald-400">ACID Transactions</div>
          </div>
        </div>
      </div>

      {/* 3. Floating Terminal Widget (Lower Left) */}
      <div className="absolute top-[68%] left-[2%] hidden xl:block animate-float-medium opacity-30">
        <div className="w-52 rounded-2xl bg-[#0d1117]/80 border border-white/10 backdrop-blur-md p-3 shadow-xl font-mono text-[10px]">
          <div className="flex items-center gap-1.5 pb-1.5 mb-1.5 border-b border-white/5 text-slate-500">
            <FiTerminal className="text-cyan-400 text-xs" />
            <span>bash — vite dev</span>
          </div>
          <p className="text-slate-400">$ npm run build</p>
          <p className="text-emerald-400">✓ 74 modules transformed</p>
          <p className="text-cyan-400">➜ ready in 3.17s</p>
        </div>
      </div>

      {/* 4. Abstract Geometric Constellation Particles */}
      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400/40 animate-ping" />
      <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-indigo-400/40 animate-pulse" />
      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 rounded-full bg-emerald-400/40 animate-ping" />
    </div>
  );
}

export default FloatingIllustrations;
