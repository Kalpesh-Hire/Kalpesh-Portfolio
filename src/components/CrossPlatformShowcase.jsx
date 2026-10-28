import React, { useState } from "react";
import { 
  FiGlobe, 
  FiSmartphone, 
  FiMonitor, 
  FiServer, 
  FiDatabase, 
  FiLayers, 
  FiCheckCircle, 
  FiArrowRight 
} from "react-icons/fi";

const PLATFORMS = [
  {
    id: "web",
    name: "Web Platforms",
    badge: "Specialized · Production",
    icon: <FiGlobe className="text-sky-400 text-2xl" />,
    description: "Responsive web single-page applications, administrative dashboards, and enterprise portals built with modern React ecosystems.",
    tech: [
      { name: "React.js", status: "Primary Architecture" },
      { name: "Next.js", status: "Modern React Framework" },
      { name: "JavaScript / ES6+", status: "Core Platform" },
      { name: "Tailwind CSS & MUI", status: "Design Systems" },
      { name: "Vite & Webpack", status: "Build Pipelines" },
    ],
    proof: "Clinic Management System, Spotify Clone (MusicRay), Educator Platform.",
  },
  {
    id: "mobile",
    name: "Mobile Engineering",
    badge: "Cross-Platform Stack",
    icon: <FiSmartphone className="text-purple-400 text-2xl" />,
    description: "Cross-platform mobile applications powered by React Native and Expo, compiling to native iOS and Android environments with a shared React paradigm.",
    tech: [
      { name: "React Native", status: "Cross-Platform Framework" },
      { name: "Expo Tooling", status: "App Workflow & Dev Client" },
      { name: "Mobile UI Layouts", status: "Adaptive Touch Interfaces" },
      { name: "REST Integration", status: "Mobile API Services" },
      { name: "State Handling", status: "AsyncStorage / Context" },
    ],
    proof: "Architectural capability; cross-platform React application development.",
  },
  {
    id: "desktop",
    name: "Desktop Software",
    badge: "Multi-Platform OS",
    icon: <FiMonitor className="text-indigo-400 text-2xl" />,
    description: "Desktop software architecture combining web engineering with OS integration via Electron and React for cross-platform desktop utilities.",
    tech: [
      { name: "Electron", status: "Desktop Framework" },
      { name: "Electron + React", status: "Renderer Process" },
      { name: "Vite Desktop Build", status: "Rapid HMR Bundling" },
      { name: "IPC Bridge Security", status: "Safe Node OS Bridge" },
      { name: "Local Filesystem", status: "OS Native Calls" },
    ],
    proof: "Desktop application architecture and local utility paradigms.",
  },
  {
    id: "backend",
    name: "Backend & APIs",
    badge: "Enterprise Services",
    icon: <FiServer className="text-emerald-400 text-2xl" />,
    description: "Robust service logic, API endpoints, authentication middlewares, and relational database connections with Java Spring Boot and Node.js.",
    tech: [
      { name: "Spring Boot (Java)", status: "Enterprise Microservices" },
      { name: "Node.js & Express", status: "High-Throughput APIs" },
      { name: "JWT Auth / Security", status: "Stateless Verification" },
      { name: "RESTful Endpoints", status: "Contract-Driven APIs" },
      { name: "CORS & Middlewares", status: "Transport Guardrails" },
    ],
    proof: "Clinic Management Spring Boot backend with JWT security.",
  },
  {
    id: "data",
    name: "Data & Persistence",
    badge: "Relational & NoSQL",
    icon: <FiDatabase className="text-cyan-400 text-2xl" />,
    description: "Relational entity modeling and document storage across MySQL, PostgreSQL, and MongoDB for secure data persistence.",
    tech: [
      { name: "MySQL", status: "Relational Production" },
      { name: "PostgreSQL", status: "Advanced Relational" },
      { name: "MongoDB", status: "Document Store" },
      { name: "Schema Modeling", status: "Entities & Foreign Keys" },
      { name: "JPA / Hibernate", status: "ORM Mappings" },
    ],
    proof: "Relational database models in Clinic System and Job Portal.",
  },
];

function CrossPlatformShowcase() {
  const [activePlatform, setActivePlatform] = useState(PLATFORMS[0]);

  return (
    <section id="platforms" className="relative scroll-mt-20 py-20">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <FiLayers className="text-cyan-400" />
            <span>Unified Engineering Stacks</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cross-Platform{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Unifying frontend, cross-platform mobile, desktop software, and backend infrastructures into a cohesive technical capability.
          </p>
        </div>

        {/* Platform Selection Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {PLATFORMS.map((plat) => {
            const isSelected = activePlatform.id === plat.id;
            return (
              <button
                key={plat.id}
                type="button"
                onClick={() => setActivePlatform(plat)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-cyan-500/20 border-cyan-400 shadow-xl shadow-cyan-500/15 scale-[1.03]"
                    : "bg-[#090b10] border-white/5 hover:border-white/20 text-slate-400 hover:text-white"
                }`}
              >
                <div>
                  <div className="mb-2">{plat.icon}</div>
                  <div className="text-sm font-bold text-white">
                    {plat.name}
                  </div>
                </div>
                <div className="mt-3 text-[10px] font-mono text-cyan-400">
                  {plat.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Platform Matrix Card */}
        <div className="bento-card rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Overview Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {activePlatform.icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {activePlatform.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">
                    {activePlatform.name} Architecture
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activePlatform.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#090b10] border border-white/5 space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Demonstrated Implementations / Context
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {activePlatform.proof}
                </p>
              </div>
            </div>

            {/* Platform Technology Breakdown */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Core Stack Breakdown
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activePlatform.tech.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#090b10] border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {t.status}
                      </div>
                    </div>
                    <FiCheckCircle className="text-cyan-400 text-sm shrink-0" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CrossPlatformShowcase;
