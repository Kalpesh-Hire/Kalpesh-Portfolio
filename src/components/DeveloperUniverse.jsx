import React, { useState } from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaJava, 
  FaDatabase, 
  FaMobileAlt, 
  FaDesktop, 
  FaLock, 
  FaExchangeAlt, 
  FaTools,
  FaProjectDiagram
} from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiPostgresql, SiMongodb, SiTypescript } from "react-icons/si";
import { FiExternalLink, FiFilter, FiActivity, FiLayers } from "react-icons/fi";

const TECH_NODES = [
  {
    id: "react",
    name: "React.js",
    domain: "Frontend",
    category: "frontend",
    purpose: "Component-driven user interface architecture, declarative virtual DOM rendering, and SPA lifecycle management.",
    connections: ["tailwind", "spring", "clerk", "react-native", "electron"],
    status: "Production Specialized",
    projects: ["Clinic Management System", "Spotify Clone", "Educator Platform"],
    color: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    id: "spring",
    name: "Spring Boot",
    domain: "Backend",
    category: "backend",
    purpose: "Enterprise Java backend framework providing secure REST controllers, dependency injection, and JWT security filters.",
    connections: ["react", "mysql", "jwt", "rest"],
    status: "Production Implemented",
    projects: ["Clinic Management System"],
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    domain: "UI Engineering",
    category: "ui",
    purpose: "Utility-first CSS styling engine for fluid responsive layouts, dark bento compositions, and bespoke design systems.",
    connections: ["react", "mui", "vite"],
    status: "Core Design Engine",
    projects: ["Clinic Management", "MusicRay", "Portfolio", "Educator"],
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    domain: "Frontend",
    category: "frontend",
    purpose: "Core platform language handling asynchronous execution, DOM interaction, functional transformations, and client logic.",
    connections: ["react", "node", "typescript", "react-native"],
    status: "Core Language",
    projects: ["All Web & Full-Stack Projects"],
    color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
  },
  {
    id: "typescript",
    name: "TypeScript",
    domain: "Frontend",
    category: "frontend",
    purpose: "Static typing system enhancing code maintainability, interface contracts, and cross-platform type safety.",
    connections: ["react", "react-native", "node"],
    status: "Active Capability",
    projects: ["Modern React & Cross-Platform Stacks"],
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  },
  {
    id: "node",
    name: "Node.js & Express",
    domain: "Backend",
    category: "backend",
    purpose: "Event-driven JavaScript runtime powering high-throughput backend services and REST microservices.",
    connections: ["javascript", "mongodb", "rest", "jwt"],
    status: "Backend Architecture",
    projects: ["API Services & Full-Stack Apps"],
    color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "react-native",
    name: "React Native & Expo",
    domain: "Mobile",
    category: "mobile",
    purpose: "Cross-platform mobile engineering compiling native iOS & Android UI components from a shared React codebase.",
    connections: ["react", "javascript", "rest", "jwt"],
    status: "Cross-Platform Capability",
    projects: ["Mobile App Architecture & Explorations"],
    color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
  {
    id: "electron",
    name: "Electron + React",
    domain: "Desktop",
    category: "desktop",
    purpose: "Desktop application framework combining Chromium and Node.js to deliver desktop software with React UIs.",
    connections: ["react", "vite", "node"],
    status: "Desktop Architecture",
    projects: ["Desktop Tooling & App Exploration"],
    color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  },
  {
    id: "mysql",
    name: "MySQL & Relational",
    domain: "Database",
    category: "database",
    purpose: "ACID-compliant relational database management with structured schemas, foreign key constraints, and indexing.",
    connections: ["spring", "node", "rest"],
    status: "Production Implemented",
    projects: ["Clinic Management System", "Job Portal"],
    color: "text-blue-500 border-blue-500/30 bg-blue-500/10",
  },
  {
    id: "mongodb",
    name: "MongoDB & NoSQL",
    domain: "Database",
    category: "database",
    purpose: "Document-oriented schema-less data storage for flexible data modeling and high-speed aggregation pipelines.",
    connections: ["node", "rest"],
    status: "Data Engineering",
    projects: ["Full-Stack Document Stores"],
    color: "text-green-400 border-green-500/30 bg-green-500/10",
  },
  {
    id: "jwt",
    name: "JWT Authentication",
    domain: "Auth & Security",
    category: "auth",
    purpose: "Cryptographically signed JSON Web Tokens for stateless API authorization and role-based permissions.",
    connections: ["spring", "react", "node"],
    status: "Production Implemented",
    projects: ["Clinic Management System"],
    color: "text-pink-400 border-pink-500/30 bg-pink-500/10",
  },
  {
    id: "clerk",
    name: "Clerk Auth & Identity",
    domain: "Auth & Security",
    category: "auth",
    purpose: "Turnkey authentication SDK supporting social OAuth, session management, and multi-factor security.",
    connections: ["react", "tailwind"],
    status: "Production Implemented",
    projects: ["Educator Platform"],
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
  {
    id: "rest",
    name: "REST APIs & JSON",
    domain: "Architecture",
    category: "architecture",
    purpose: "Standardized HTTP API protocols for stateless data exchange between clients, services, and external integrations.",
    connections: ["react", "spring", "node", "mysql"],
    status: "Standard Architecture",
    projects: ["Clinic System", "Educator", "Web3Forms"],
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
  {
    id: "mui",
    name: "Material UI (MUI)",
    domain: "UI Engineering",
    category: "ui",
    purpose: "Comprehensive React UI library based on Google's Material Design principles for cohesive data dashboards.",
    connections: ["react", "bootstrap"],
    status: "Production Experience",
    projects: ["Internship & Enterprise Projects"],
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  },
  {
    id: "vite",
    name: "Vite & Tooling",
    domain: "Dev Tools",
    category: "tools",
    purpose: "Next-generation frontend tooling providing lightning-fast HMR and optimized Rollup production bundles.",
    connections: ["react", "tailwind", "electron"],
    status: "Build Standard",
    projects: ["Portfolio Build", "Modern React Apps"],
    color: "text-purple-300 border-purple-500/30 bg-purple-500/10",
  },
];

const DOMAINS = [
  { id: "all", label: "All Ecosystem" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
  { id: "desktop", label: "Desktop" },
  { id: "database", label: "Databases" },
  { id: "ui", label: "UI Engineering" },
  { id: "auth", label: "Auth & Security" },
];

function DeveloperUniverse() {
  const [selectedNode, setSelectedNode] = useState(TECH_NODES[0]);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredNodes =
    activeFilter === "all"
      ? TECH_NODES
      : TECH_NODES.filter((n) => n.category === activeFilter);

  // Check if a node is connected to the currently selected node
  const isConnected = (nodeId) => {
    if (!selectedNode) return false;
    if (selectedNode.id === nodeId) return true;
    return (
      selectedNode.connections.includes(nodeId) ||
      (TECH_NODES.find((n) => n.id === nodeId)?.connections || []).includes(
        selectedNode.id
      )
    );
  };

  return (
    <section id="universe" className="relative scroll-mt-20 py-20 overflow-hidden">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <FiActivity className="text-cyan-400" />
            <span>Interactive Technology Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Developer{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Universe
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A graph-inspired technology ecosystem map. Select any node to reveal its architectural purpose, connected layers, and associated portfolio projects.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {DOMAINS.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setActiveFilter(domain.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeFilter === domain.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              {domain.label}
            </button>
          ))}
        </div>

        {/* Interactive Universe Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Node Constellation Map (7 Cols) */}
          <div className="lg:col-span-7 bento-card rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <FiLayers className="text-cyan-400" />
                <span>ECOSYSTEM MESH ({filteredNodes.length} Nodes in view)</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                Highlighting linked architectures
              </span>
            </div>

            {/* Visual Node Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filteredNodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                const connected = isConnected(node.id);

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 relative group flex flex-col justify-between min-h-[105px] ${
                      isSelected
                        ? "bg-blue-500/20 border-blue-400 shadow-xl shadow-blue-500/20 scale-[1.03]"
                        : connected
                        ? "bg-[#121622] border-cyan-500/40 shadow-sm"
                        : "bg-[#090c12]/80 border-white/5 hover:border-white/20 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">
                          {node.domain}
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                        )}
                        {!isSelected && connected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        )}
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {node.name}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[10px] font-mono">
                      <span className={node.color.split(" ")[0]}>
                        {isSelected ? "Active Focus" : connected ? "Connected" : "Inspect"}
                      </span>
                      <span className="text-slate-500">
                        {node.connections.length} links
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Connected to active node
              </span>
              <span>Tap any card to focus</span>
            </div>
          </div>

          {/* Active Node Detail Dossier (5 Cols) */}
          <div className="lg:col-span-5 bento-card rounded-3xl p-6 sm:p-8 space-y-6">
            {selectedNode ? (
              <>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      {selectedNode.domain}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-2">
                      {selectedNode.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
                    {selectedNode.status}
                  </span>
                </div>

                {/* Architectural Purpose */}
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Engineering Responsibility
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed bg-[#090b10] p-3.5 rounded-xl border border-white/5">
                    {selectedNode.purpose}
                  </p>
                </div>

                {/* Connected Ecosystem Technologies */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Connected Technologies in Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.connections.map((connId) => {
                      const connNode = TECH_NODES.find((n) => n.id === connId);
                      return (
                        <button
                          key={connId}
                          onClick={() => connNode && setSelectedNode(connNode)}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 text-xs font-mono transition-colors"
                        >
                          {connNode ? connNode.name : connId} &rarr;
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Associated Real Portfolio Projects */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Applied In Projects
                  </span>
                  <div className="space-y-1.5">
                    {selectedNode.projects.map((proj, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs text-slate-200"
                      >
                        <span className="font-semibold text-white">{proj}</span>
                        <a
                          href="#case-studies"
                          className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px]"
                        >
                          View Study &rarr;
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-slate-500 font-mono text-xs">
                Select a technology node from the constellation to view its engineering profile.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

export default DeveloperUniverse;
