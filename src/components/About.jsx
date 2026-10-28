import React from "react";
import Resume from "../../public/Kalpesh-Hire Resume.pdf";
import avtar from "../../public/Kalpesh Hire.jpg";
import { FaGraduationCap, FaCode, FaBriefcase, FaEnvelope, FaPhoneAlt, FaFileDownload } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20">
      <div className="max-w-6xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            Introduction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Background, education, and career summary
          </p>
        </div>

        {/* Bento-style About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Real Profile Photo Card */}
          <div className="lg:col-span-5 bento-card rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
            
            <div className="relative overflow-hidden rounded-2xl border border-white/10 mb-6 aspect-[4/5] bg-slate-900">
              <img
                src={avtar}
                alt="Kalpesh Hire"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#0d1117]/80 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">Kalpesh Hire</h3>
                  <p className="text-xs text-blue-400 font-mono">React Developer</p>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Active
                </div>
              </div>
            </div>

            {/* Direct contact chips */}
            <div className="space-y-2 text-xs">
              <a
                href="mailto:kalpeshhire102050@gmail.com"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-400/30 text-slate-300 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <FaEnvelope className="text-blue-400" />
                  <span className="truncate">kalpeshhire102050@gmail.com</span>
                </span>
                <FiArrowUpRight className="text-slate-400" />
              </a>
              <a
                href="tel:+919767777200"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-400/30 text-slate-300 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <FaPhoneAlt className="text-emerald-400" />
                  <span>+91 9767777200</span>
                </span>
                <FiArrowUpRight className="text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right: Bio & Key Accomplishment Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Bio Card */}
            <div className="bento-card rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Summary & Focus
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                I am Kalpesh Hire, a dedicated web developer with a strong foundation in modern
                frontend development. I specialize in building responsive, accessible, and dynamic
                user interfaces utilizing <strong className="text-white font-semibold">React.js</strong>,{" "}
                <strong className="text-white font-semibold">Tailwind CSS</strong>,{" "}
                <strong className="text-white font-semibold">JavaScript</strong>, Bootstrap, and Material UI.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                With a Bachelor's degree in Computer Applications and professional experience as a React Developer at Xform Technologies Pvt Ltd (along with an internship at Octanet Services Pvt Ltd), I turn complex architectural requirements into seamless, intuitive web solutions.
              </p>

              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href={Resume}
                  download="Kalpesh-Hire-Resume"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all active:scale-95"
                >
                  <FaFileDownload />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href="#skills"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all"
                >
                  <span>Explore Skills</span>
                </a>
              </div>
            </div>

            {/* 2-Column Bento Sub-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Education Bento Card */}
              <div className="bento-card rounded-2xl p-5 border border-white/5 flex flex-col justify-between group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <FaGraduationCap className="text-xl" />
                  </div>
                  <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">
                    Degree
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Formal university foundation in computer applications, software engineering, and web development fundamentals.
                  </p>
                </div>
              </div>

              {/* Projects Bento Card */}
              <div className="bento-card rounded-2xl p-5 border border-white/5 flex flex-col justify-between group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <FaBriefcase className="text-xl" />
                  </div>
                  <span className="text-[11px] font-mono text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded">
                    Portfolio
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    5+ Production & Personal Projects
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Including full-stack clinic management system, streaming applications, e-learning platform, and employee portals.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
