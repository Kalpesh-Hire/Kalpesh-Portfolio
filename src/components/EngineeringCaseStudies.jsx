import React, { useState } from "react";
import { projectData } from "../Data/ProjectsData";
import { FiArrowUpRight, FiLayers, FiCheckCircle, FiCode, FiCpu } from "react-icons/fi";
import { FaLaptopCode, FaDatabase, FaShieldAlt } from "react-icons/fa";

function EngineeringCaseStudies() {
  const [activeProject, setActiveProject] = useState(projectData[0]);

  // Separate the flagship project from the rest
  const flagship = projectData.find((p) => p.featured) || projectData[0];
  const secondaryProjects = projectData.filter((p) => p.id !== flagship.id);

  return (
    <section id="case-studies" className="relative scroll-mt-20 py-20">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <FiCpu className="text-blue-400" />
            <span>Technical Editorial Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            In-depth analysis of architectural problems solved, technology stack decisions, and live production deployments.
          </p>
        </div>

        {/* 1. Flagship Full-Stack Feature Card */}
        <div className="mb-14 bento-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono">
                  ★ Flagship Production Case Study
                </span>
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">
                  Healthcare & Administration
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {flagship.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                  {flagship.discription}
                </p>
              </div>

              {/* Challenge Solved */}
              <div className="p-4 rounded-2xl bg-[#090b10] border border-white/5 space-y-1.5">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FiLayers />
                  <span>The Architectural Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {flagship.challenge}
                </p>
              </div>

              {/* Architecture Overview */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Full-Stack Architecture Overview
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {flagship.architecture}
                </p>
              </div>

              {/* Key Decisions */}
              {flagship.keyDecisions && (
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Engineering Decisions
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {flagship.keyDecisions.map((dec, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <FiCheckCircle className="text-blue-400 mt-0.5 shrink-0" />
                        <span>{dec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Chips & Action Link */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {flagship.Tech.split(",").map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>

                <div className="p-1 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 transition-all">
                  {flagship.btn}
                </div>
              </div>
            </div>

            {/* Right Architecture Blueprint Card */}
            <div className="lg:col-span-5 bento-card rounded-2xl p-6 bg-[#090b10]/90 border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                  System Architecture Topology
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Live Deployment
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {/* Client Layer */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-sky-400">CLIENT LAYER (SPA)</span>
                    <span>PORT 443</span>
                  </div>
                  <div className="text-white font-semibold">React.js Single Page Application</div>
                  <div className="text-[11px] text-slate-400">Bootstrap Responsive Grid · Form Validation</div>
                </div>

                <div className="flex justify-center text-slate-500 text-xs">
                  ↓ JSON REST over HTTPS (Bearer JWT Token) ↓
                </div>

                {/* API & Backend */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-emerald-400">SERVICE ENGINE</span>
                    <span>JAVA / SPRING</span>
                  </div>
                  <div className="text-white font-semibold">Spring Boot REST Controllers</div>
                  <div className="text-[11px] text-slate-400">Spring Security · JWT Filter · Role Hierarchy</div>
                </div>

                <div className="flex justify-center text-slate-500 text-xs">
                  ↓ JPA / Hibernate ORM Driver ↓
                </div>

                {/* Data Store */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-indigo-400">PERSISTENCE TIER</span>
                    <span>RELATIONAL</span>
                  </div>
                  <div className="text-white font-semibold">MySQL Relational Schemas</div>
                  <div className="text-[11px] text-slate-400">Patient Records · Appointments · Audit Logs</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Domain: Healthcare ERP</span>
                <span className="text-blue-400">Verified Full-Stack</span>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Interactive Project Index & Detailed Preview Panel */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Additional Engineering Implementations
            </h4>
            <span className="text-xs font-mono text-slate-400">
              Select any project to inspect its architecture
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Project Selector List (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              {secondaryProjects.map((project) => {
                const isSelected = activeProject.id === project.id;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? "bg-blue-500/20 border-blue-500 shadow-xl shadow-blue-500/15 scale-[1.02]"
                        : "bg-[#0c0e14] border-white/5 hover:border-white/15 text-slate-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                          {project.category}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-mono text-blue-400">Active Case</span>
                        )}
                      </div>
                      <div className="text-sm font-bold text-white">
                        {project.title}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500">&rarr;</span>
                  </button>
                );
              })}
            </div>

            {/* Case Study Deep Dive Panel (7 Cols) */}
            <div className="lg:col-span-7 bento-card rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {activeProject.category} Implementation
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {activeProject.title}
                  </h3>
                </div>
                <div className="p-1 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all">
                  {activeProject.btn}
                </div>
              </div>

              {/* Detailed Summary */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Project Description
                </span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {activeProject.discription}
                </p>
              </div>

              {/* Challenge & Solution */}
              {activeProject.challenge && (
                <div className="p-4 rounded-2xl bg-[#090b10] border border-white/5 space-y-1.5">
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FiLayers />
                    <span>Challenge Solved</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>
              )}

              {/* Architectural Approach */}
              {activeProject.architecture && (
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Architectural Approach
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeProject.architecture}
                  </p>
                </div>
              )}

              {/* Technical Stack Tags */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.Tech.split(",").map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default EngineeringCaseStudies;
