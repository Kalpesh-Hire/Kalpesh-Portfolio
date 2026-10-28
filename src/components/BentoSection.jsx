import React from "react";
import Resume from "../../public/Kalpesh-Hire Resume.pdf";
import { 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaGraduationCap, 
  FaBriefcase, 
  FaGithub, 
  FaLinkedin 
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiSpringboot } from "react-icons/si";
import { FiArrowUpRight, FiLayers, FiCode, FiAward } from "react-icons/fi";

function BentoSection() {
  return (
    <section id="bento" className="relative scroll-mt-20 py-16">
      <div className="max-w-6xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            Architecture & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Bento Showcase</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            High-impact projects, technical proficiencies, and developer credentials at a glance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Card 1: Featured Flagship Project (Large 8 cols on desktop) */}
          <div className="md:col-span-8 bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-blue-500/15 transition-all duration-700" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                  Flagship Full-Stack System
                </span>
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">
                  Healthcare & Administration
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  Clinic Management System
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  A full-stack enterprise web application designed to streamline administrative and clinical operations. Built using React for a responsive, interactive UI with Bootstrap, and powered by Spring Boot (Java) with JWT-based secure authentication for patient and doctor scheduling workflows.
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs text-slate-400 font-mono">Frontend</div>
                  <div className="text-sm font-semibold text-white mt-0.5">React.js & Bootstrap</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs text-slate-400 font-mono">Backend</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Spring Boot & Java</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs text-slate-400 font-mono">Security</div>
                  <div className="text-sm font-semibold text-white mt-0.5">JWT Auth & Roles</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono">Tech:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Bootstrap", "Spring Boot", "Java", "JWT"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://clinic.xformtechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
              >
                <span>Live Platform</span>
                <FiArrowUpRight className="text-sm" />
              </a>
            </div>
          </div>

          {/* Card 2: Developer Profile & Current Status (4 cols on desktop) */}
          <div className="md:col-span-4 bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  Current Role
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                Software Developer
              </h3>
              <p className="text-xs font-mono text-blue-400 mb-3">
                Xform Technologies
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                Working as a Software Developer at Xform Technologies, integrating RESTful APIs into React applications for dynamic data fetching, state management, and seamless real-time user experiences.
              </p>

              <div className="space-y-2 text-xs border-t border-white/10 pt-3">
                <div className="flex justify-between text-slate-300 py-1">
                  <span className="text-slate-400">Former Role:</span>
                  <span className="font-medium text-white">React Dev @ Ekatta Innovators</span>
                </div>
                <div className="flex justify-between text-slate-300 py-1">
                  <span className="text-slate-400">Internship:</span>
                  <span className="font-medium text-white">Octanet Services</span>
                </div>
                <div className="flex justify-between text-slate-300 py-1">
                  <span className="text-slate-400">Education:</span>
                  <span className="font-medium text-white">BCA Degree</span>
                </div>
                <div className="flex justify-between text-slate-300 py-1">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-medium text-white">India</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={Resume}
                download="Kalpesh-Hire-Resume"
                className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                Download CV <FiArrowUpRight />
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Kalpesh-Hire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                >
                  <FaGithub size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/kalpesh-hire-29b662235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-blue-400"
                >
                  <FaLinkedin size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Second Highlighted Project — Spotify Clone (4 cols) */}
          <div className="md:col-span-4 bento-card rounded-3xl p-6 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Web App
                </span>
                <span className="text-[11px] font-mono text-slate-400">Context API</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                Spotify Clone — MusicRay
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Modern streaming experience with dynamic playlists, audio controls, responsive UI, and global state management via React Context API.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-1">
                {["React", "Tailwind", "Context API"].map((s) => (
                  <span key={s} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href="https://musicray.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                Visit <FiArrowUpRight />
              </a>
            </div>
          </div>

          {/* Card 4: Third Highlighted Project — Educator E-Learning (4 cols) */}
          <div className="md:col-span-4 bento-card rounded-3xl p-6 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  EdTech Platform
                </span>
                <span className="text-[11px] font-mono text-slate-400">Clerk Auth</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                Educator — E-Learning Platform
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Interactive learning hub with Clerk user authentication, React Router navigation, and responsive course catalog layouts.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-1">
                {["React", "Clerk", "Tailwind"].map((s) => (
                  <span key={s} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href="https://learneducator.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                Visit <FiArrowUpRight />
              </a>
            </div>
          </div>

          {/* Card 5: Fourth Highlighted Project — Employee Management (4 cols) */}
          <div className="md:col-span-4 bento-card rounded-3xl p-6 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  Productivity
                </span>
                <span className="text-[11px] font-mono text-slate-400">Admin Dashboard</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                Employee Management System
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Task assignment dashboard allowing admins to assign workloads and employees to manage progress with real-time feedback loops.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-1">
                {["React", "Tailwind", "Context API"].map((s) => (
                  <span key={s} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/Kalpesh-Hire/EmployeeManagement.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                Source <FiArrowUpRight />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BentoSection;
