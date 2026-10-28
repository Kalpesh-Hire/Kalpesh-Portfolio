import React, { useState } from "react";
import { projectData } from "../Data/ProjectsData";
import { FiFilter, FiExternalLink, FiCode, FiLayers, FiCheckCircle } from "react-icons/fi";
import { FaLaptopCode, FaDatabase, FaMobileAlt, FaDesktop, FaServer } from "react-icons/fa";

const FILTER_DOMAINS = [
  { id: "all", label: "All Projects" },
  { id: "Full-Stack", label: "Full-Stack Platforms" },
  { id: "Frontend", label: "Frontend UI" },
  { id: "Backend", label: "Backend & Spring" },
  { id: "Database", label: "Databases" },
];

function InteractiveProjectExplorer() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = projectData.filter((project) => {
    if (selectedFilter === "all") return true;
    if (project.category === selectedFilter) return true;
    if (project.domains && project.domains.includes(selectedFilter)) return true;
    return false;
  });

  return (
    <section id="projects" className="relative scroll-mt-20 py-20">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <FiLayers className="text-cyan-400" />
            <span>Featured Enterprise & Full-Stack Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Enterprise{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Systems & Projects
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Prioritizing core enterprise architectures: MERP, Warehouse Management System (WMS), CRM, HRMS, and Mahasewa.
          </p>
        </div>

        {/* Priority 4-Pillar Grid: MERP, WMS, CRM, HRMS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: MERP */}
          <div className="bento-card rounded-3xl p-6 sm:p-8 border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  ★ Priority #1 · Enterprise ERP
                </span>
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded">
                  Full-Stack Platform
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  MERP (Enterprise Resource Planning)
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  React.js · Tailwind CSS · Spring Boot · MySQL · REST APIs
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-cyan-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Streamlines manufacturing workflows, material procurement, bill of materials (BOM), and supply chain management.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-cyan-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Modular enterprise modules for manufacturing, sales, procurement, and real-time inventory ledger updates.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-cyan-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Stateless role-based authorization ensuring granular access control for administrators, managers, and operators.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["React.js", "Tailwind CSS", "Spring Boot", "BOM", "REST APIs", "MySQL"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="p-1 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-all">
                <a
                  href="https://github.com/Kalpesh-Hire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 flex items-center gap-1.5"
                >
                  <FiExternalLink /> View Project
                </a>
              </div> */}
            </div>
          </div>

          {/* Card 2: Warehouse Management System (WMS) */}
          <div className="bento-card rounded-3xl p-6 sm:p-8 border border-blue-500/30 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-mono">
                  ★ Priority #2 · Logistics Architecture
                </span>
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded">
                  Full-Stack WMS
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  Warehouse Management System (WMS)
                </h3>
                <p className="text-xs font-mono text-blue-400 mt-1">
                  React.js · Tailwind CSS · Spring Boot · RESTful APIs · MySQL
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-blue-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Developed a responsive Warehouse Management System streamlining operations with a scalable architecture.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-blue-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Implemented modules for product, inventory, warehouse, stock, supplier, purchase, and order management with RESTful APIs.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-blue-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Engineered features for stock receiving, stock transfers, inventory tracking, order processing, and real-time stock updates.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["React.js", "Tailwind CSS", "Spring Boot", "Real-Time Stock", "REST APIs"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="p-1 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all">
                <a
                  href="https://github.com/Kalpesh-Hire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 flex items-center gap-1.5"
                >
                  <FiExternalLink /> View Project
                </a>
              </div> */}
            </div>
          </div>

          {/* Card 3: CRM */}
          <div className="bento-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  ★ Priority #3 · Customer Lifecycle
                </span>
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded">
                  Full-Stack CRM
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  CRM (Customer Relationship Management)
                </h3>
                <p className="text-xs font-mono text-emerald-400 mt-1">
                  React.js · Tailwind CSS · Spring Boot · REST APIs · MySQL
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-emerald-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Engineered lead conversion pipelines, sales opportunity tracking, and customer contact histories.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-emerald-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Interactive communication logs, automated follow-up scheduling, and customer deal stage management.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-emerald-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Built quotation generation tools and sales performance dashboards with real-time conversion insights.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["React.js", "Tailwind CSS", "Spring Boot", "Lead Pipeline", "REST APIs"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="p-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all">
                <a
                  href="https://github.com/Kalpesh-Hire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 flex items-center gap-1.5"
                >
                  <FiExternalLink /> View Project
                </a>
              </div> */}
            </div>
          </div>

          {/* Card 4: HRMS */}
          <div className="bento-card rounded-3xl p-6 sm:p-8 border border-purple-500/30 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono">
                  ★ Priority #4 · Workforce Management
                </span>
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded">
                  Full-Stack HRMS
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  HRMS (Human Resource Management System)
                </h3>
                <p className="text-xs font-mono text-purple-400 mt-1">
                  React.js · Tailwind CSS · Spring Boot · REST APIs · MySQL · JWT
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-purple-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Workforce management platform managing employee directories, onboarding, and multi-tier department structures.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-purple-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Digital attendance tracking, leave requests, and multi-level manager approval workflows.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <FiCheckCircle className="text-purple-400 mt-1 shrink-0 text-sm" />
                  <span>
                    Automated payroll processing, salary structure generation, and confidential employee records protection via RBAC.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["React.js", "Tailwind CSS", "Spring Boot", "Payroll", "Attendance", "RBAC"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="p-1 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all">
                <a
                  href="https://github.com/Kalpesh-Hire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 flex items-center gap-1.5"
                >
                  <FiExternalLink /> View Project
                </a>
              </div> */}
            </div>
          </div>

        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              All Implementations & Repositories
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {FILTER_DOMAINS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20 scale-105"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Grid (Includes Mahasewa, Clinic Management, Spotify Clone, Educator, etc.) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const techList = project.Tech
              ? project.Tech.split(",").map((t) => t.trim())
              : [];

            return (
              <div
                key={project.id || idx}
                className="bento-card rounded-3xl p-6 flex flex-col justify-between group border border-white/10 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                    {project.discription}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 space-y-3">
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 max-h-14 overflow-hidden">
                    {techList.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {techList.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-500">
                        +{techList.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Commented out view project button as requested */}
                  {/* <div className="flex items-center justify-between pt-1">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-3.5 py-2 rounded-xl bg-blue-600/90 hover:bg-blue-500 transition-colors shadow-md">
                      {project.btn}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      Explore &rarr;
                    </span>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bento-card rounded-3xl p-8 border border-white/10 text-slate-400 font-mono text-xs">
            No projects found matching the selected filter.
          </div>
        )}

      </div>
    </section>
  );
}

export default InteractiveProjectExplorer;
