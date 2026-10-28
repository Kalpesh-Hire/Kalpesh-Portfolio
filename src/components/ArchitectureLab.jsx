import React, { useState } from "react";
import { 
  FiCpu, 
  FiServer, 
  FiSmartphone, 
  FiMonitor, 
  FiDatabase, 
  FiRadio, 
  FiArrowRight, 
  FiCheckCircle 
} from "react-icons/fi";

const ARCH_MODES = [
  {
    id: "fullstack",
    label: "Enterprise Full-Stack",
    icon: <FiServer className="text-blue-400" />,
    headline: "Client-Server Enterprise Web Architecture",
    tag: "Production Verified (Clinic System)",
    flow: [
      {
        layer: "Client Tier",
        title: "React.js SPA",
        tech: "React 18 · Tailwind / Bootstrap · Context API",
        role: "State orchestration, client-side input validation, responsive views, and bearer token storage.",
      },
      {
        layer: "API Gateway",
        title: "REST / HTTPS Gateway",
        tech: "JSON Payloads · JWT Bearer Header · CORS Filters",
        role: "Transport security, stateless token validation, payload parsing, and error encapsulation.",
      },
      {
        layer: "Backend Service",
        title: "Spring Boot / Java Service",
        tech: "Spring Security · REST Controllers · JPA / Hibernate",
        role: "Business rule enforcement, authorization guards, domain entities, and transaction management.",
      },
      {
        layer: "Data Persistence",
        title: "Relational Database",
        tech: "MySQL / PostgreSQL · Indexing · ACID Compliance",
        role: "Normalized entity schemas, foreign keys, audit logging, and transactional record integrity.",
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Cross-Platform",
    icon: <FiSmartphone className="text-purple-400" />,
    headline: "React Native Cross-Platform Mobile Architecture",
    tag: "Cross-Platform Capability",
    flow: [
      {
        layer: "Native Mobile UI",
        title: "React Native & Expo",
        tech: "Native UI Elements · TypeScript · Touch Handlers",
        role: "Single codebase compiling down to native iOS and Android components with adaptive screen layouts.",
      },
      {
        layer: "Client API Layer",
        title: "Mobile HTTP Client",
        tech: "Axios / Fetch · Offline Cache · Token Refresh",
        role: "Manages network availability, retry policies, offline sync caching, and secure token storage.",
      },
      {
        layer: "Backend API",
        title: "REST / Microservice Endpoints",
        tech: "Spring Boot / Node.js Express · JSON APIs",
        role: "Provides specialized mobile endpoints, reduced payload transfers, and push notification triggers.",
      },
      {
        layer: "Database",
        title: "Cloud & Relational Database",
        tech: "PostgreSQL / MongoDB / Firebase Store",
        role: "Multi-tenant user collections, mobile event analytics, and secure document storage.",
      },
    ],
  },
  {
    id: "desktop",
    label: "Desktop Applications",
    icon: <FiMonitor className="text-indigo-400" />,
    headline: "Electron Desktop Software Architecture",
    tag: "Desktop Architecture",
    flow: [
      {
        layer: "Renderer Process",
        title: "React UI Inside Chromium",
        tech: "React.js · Tailwind CSS · Vite Build System",
        role: "Renders the desktop application window, dark UI layouts, and reactive desktop components.",
      },
      {
        layer: "IPC Bridge",
        title: "Context Isolation & IPC",
        tech: "contextBridge · ipcRenderer · Safe IPC Channels",
        role: "Enforces strict security boundary between Chromium renderer and OS-level Node.js capabilities.",
      },
      {
        layer: "Main Process",
        title: "Node.js System Engine",
        tech: "Node.js · File System API · OS Notifications",
        role: "Manages window lifecycles, native menus, local file read/write, tray icons, and system calls.",
      },
      {
        layer: "Storage / Cloud",
        title: "Local SQLite / REST Sync",
        tech: "SQLite / Local Config · Cloud Sync API",
        role: "Offline-first local file caching with asynchronous synchronization to backend services.",
      },
    ],
  },
  {
    id: "realtime",
    label: "Real-Time Systems",
    icon: <FiRadio className="text-emerald-400" />,
    headline: "Event-Driven & WebSocket Real-Time Architecture",
    tag: "Communication Architecture",
    flow: [
      {
        layer: "Client Subscriber",
        title: "React WebSocket Client",
        tech: "Socket.IO Client / WebSocket API · Event Hooks",
        role: "Maintains active bidirectional socket connection and triggers instant UI updates upon message arrival.",
      },
      {
        layer: "Real-Time Gateway",
        title: "WebSocket Connection Server",
        tech: "Socket.IO / STOMP Server · Heartbeat Checks",
        role: "Handles handshake authentication, socket room channels, and bidirectional message fan-out.",
      },
      {
        layer: "Event Broker",
        title: "Publish / Subscribe Channel",
        tech: "Redis Pub/Sub / Event Bus · Node.js",
        role: "Dispatches events across server worker nodes to synchronize state between multiple active clients.",
      },
      {
        layer: "Event Store",
        title: "Time-Series & Document DB",
        tech: "MongoDB / Redis / PostgreSQL",
        role: "Persists real-time notifications, chat history logs, and audit trails.",
      },
    ],
  },
];

function ArchitectureLab() {
  const [selectedMode, setSelectedMode] = useState(ARCH_MODES[0]);
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="architecture" className="relative scroll-mt-20 py-20 overflow-hidden">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <FiCpu className="text-indigo-400" />
            <span>Interactive Engineering Lab</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            System{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Architecture Lab
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Select an engineering domain below to simulate data flow, layer responsibilities, and technical contracts across web, mobile, desktop, and real-time tiers.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {ARCH_MODES.map((mode) => {
            const isSelected = selectedMode.id === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => {
                  setSelectedMode(mode);
                  setSelectedStep(0);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-mono transition-all duration-300 border ${
                  isSelected
                    ? "bg-indigo-600/30 border-indigo-400 text-white shadow-lg shadow-indigo-500/20 scale-105"
                    : "bg-[#090b10] border-white/5 hover:border-white/20 text-slate-400 hover:text-white"
                }`}
              >
                <span>{mode.icon}</span>
                <span className="font-semibold">{mode.label}</span>
              </button>
            );
          })}
        </div>

        {/* Architecture Simulation Sandbox */}
        <div className="bento-card rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8">
          
          {/* Header Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                {selectedMode.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {selectedMode.headline}
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
              4 Connected Tiers
            </div>
          </div>

          {/* Interactive Flow Pipeline (Horizontal on desktop, vertical on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {selectedMode.flow.map((item, index) => {
              const isCurrent = selectedStep === index;
              return (
                <div key={index} className="relative">
                  <button
                    type="button"
                    onClick={() => setSelectedStep(index)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full min-h-[170px] ${
                      isCurrent
                        ? "bg-indigo-600/20 border-indigo-400 shadow-xl shadow-indigo-500/20 scale-[1.03]"
                        : "bg-[#090c10] border-white/5 hover:border-white/15 text-slate-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          {item.layer}
                        </span>
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                            isCurrent
                              ? "bg-indigo-500 text-white"
                              : "bg-white/5 text-slate-400"
                          }`}
                        >
                          0{index + 1}
                        </span>
                      </div>
                      <div className="text-base font-bold text-white mt-1">
                        {item.title}
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/5 text-[11px] font-mono text-cyan-300">
                      {item.tech}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Active Layer Deep Dive Drawer */}
          <div className="p-6 rounded-2xl bg-[#090b10] border border-indigo-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-indigo-400 text-lg" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Tier Responsibility: {selectedMode.flow[selectedStep].title} ({selectedMode.flow[selectedStep].layer})
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Step 0{selectedStep + 1} of 04
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedMode.flow[selectedStep].role}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-indigo-400">Underlying Technologies:</span>
              <span className="text-white bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                {selectedMode.flow[selectedStep].tech}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ArchitectureLab;
