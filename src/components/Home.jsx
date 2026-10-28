import React, { useState } from "react";
import Avatar from "../../public/Avatar.png";
import Resume from "../../public/Kalpesh-Hire Resume.pdf";
import { ReactTyped } from "react-typed";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaReact,
  FaJs,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpringboot, SiPostgresql, SiMongodb } from "react-icons/si";
import { 
  FiDownload, 
  FiArrowRight, 
  FiCpu, 
  FiLayers, 
  FiDatabase, 
  FiServer, 
  FiGlobe,
  FiTerminal
} from "react-icons/fi";
import { Helmet } from "react-helmet";

function Home() {
  const [activeLayer, setActiveLayer] = useState("frontend");

  const architectureLayers = [
    {
      id: "frontend",
      title: "Frontend UI",
      desc: "React.js / Next.js / Tailwind CSS",
      color: "border-sky-500/40 bg-sky-500/10 text-sky-400",
      detail: "Component hierarchies, reactive client state, and responsive web systems.",
    },
    {
      id: "api",
      title: "API Gateway",
      desc: "REST APIs / WebSockets / JWT",
      color: "border-cyan-500/40 bg-cyan-500/10 text-cyan-400",
      detail: "Stateless authentication, contract validation, and data serialization.",
    },
    {
      id: "backend",
      title: "Backend Core",
      desc: "Spring Boot (Java) / Node.js",
      color: "border-indigo-500/40 bg-indigo-500/10 text-indigo-400",
      detail: "Service logic, security filters, controller endpoints, and business rules.",
    },
    {
      id: "database",
      title: "Data Layer",
      desc: "MySQL / PostgreSQL / MongoDB",
      color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
      detail: "Relational entity schemas, indexing, ORM mapping, and document storage.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kalpesh Hire | Software Developer & Full-Stack Engineer</title>
        <meta
          name="description"
          content="Kalpesh Hire is a Software Developer at Xform Technologies specializing in React.js, Spring Boot, JavaScript, and building full-stack web, mobile, and system architectures."
        />
        <meta
          name="keywords"
          content="Kalpesh Hire, Software Developer, React Developer, Full-Stack Developer, Spring Boot, Portfolio"
        />
        <meta name="author" content="Kalpesh Hire" />
        <meta
          property="og:image"
          content="https://kalpesh-hire.github.io/Kalpesh-Portfolio/Kalpesh Hire.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kalpesh Hire",
      "url": "https://kalpesh-hire.github.io/Kalpesh-Portfolio/",
      "sameAs": [
        "https://github.com/Kalpesh-Hire",
        "https://www.linkedin.com/in/kalpeshhire/"
      ],
      "jobTitle": "Software Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Xform Technologies"
      }
    }
  `,
          }}
        />
      </Helmet>

      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      >
        {/* Subtle grid and ambient backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-emerald-500/10 blur-[110px] pointer-events-none -z-10 rounded-full" />

        <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Command Center Status Bar */}
          <div className="mb-8 p-3 rounded-2xl bg-[#0d1117]/80 border border-white/10 backdrop-blur-xl flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                SYSTEM ONLINE · PRODUCTION READY
              </span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="hidden sm:inline text-slate-400">
                ROLE: <span className="text-white">Software Developer @ Xform Technologies</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400">STACK:</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                React.js · Spring Boot · JS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Editorial Command Center */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono tracking-wide">
                  <FiTerminal className="text-blue-400" />
                  <span>DEVELOPER COMMAND CENTER</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                  Engineering digital products from{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                    interface to infrastructure.
                  </span>
                </h1>

                <div className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl text-slate-300 font-medium pt-1">
                  <span className="text-slate-400">Architecting</span>
                  <ReactTyped
                    strings={[
                      "Enterprise Full-Stack Platforms (MERP & WMS)",
                      "Scalable React & Next.js Frontends",
                      "Cross-Platform Mobile Ecosystems",
                      "Spring Boot & Java REST APIs",
                      "Modern Dark Bento Experiences",
                    ]}
                    typeSpeed={45}
                    backSpeed={30}
                    loop={true}
                    className="text-cyan-400 font-semibold"
                  />
                </div>
              </div>

              {/* Bio description */}
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I’m <strong className="text-slate-200 font-semibold">Kalpesh Hire</strong>, a Software Developer at Xform Technologies building enterprise resource systems (Mahasewa MERP, WMS), dashboards, and full-stack solutions. Experienced across React.js, Tailwind CSS, JavaScript, and Spring Boot with Java, bridging intuitive user interfaces with robust backend architectures.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all duration-200 active:scale-95"
                >
                  <span>Explore Featured Projects</span>
                  <FiArrowRight />
                </a>
                <a
                  href={Resume}
                  download="Kalpesh-Hire-Resume"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all duration-200 active:scale-95"
                >
                  <FiDownload className="text-cyan-400" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs">
                <span className="text-slate-400 font-mono">CHANNELS:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/Kalpesh-Hire"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
                  >
                    <FaGithub size={15} />
                  </a>
                  <a
                    href="https://linkedin.com/in/kalpesh-hire-29b662235"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-blue-400 border border-white/5 transition-colors"
                  >
                    <FaLinkedin size={15} />
                  </a>
                  <a
                    href="https://www.instagram.com/hire_kalpesh?igsh=Y3F0YTkwOXNpcjQ1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-pink-400 border border-white/5 transition-colors"
                  >
                    <FaInstagram size={15} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-blue-400 border border-white/5 transition-colors"
                  >
                    <FaFacebook size={15} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-red-400 border border-white/5 transition-colors"
                  >
                    <FaYoutube size={15} />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive System Architecture Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bento-card rounded-3xl p-6 sm:p-7 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FiLayers className="text-cyan-400" />
                    <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                      Interactive System Pipeline
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    Click node to inspect
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  How layers connect in modern enterprise engineering: select any layer to inspect its architectural responsibility.
                </p>

                {/* Vertical Connected Flow Diagram */}
                <div className="space-y-2 relative">
                  {architectureLayers.map((layer, index) => {
                    const isSelected = activeLayer === layer.id;
                    return (
                      <div key={layer.id} className="relative">
                        <button
                          type="button"
                          onClick={() => setActiveLayer(layer.id)}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                            isSelected
                              ? `${layer.color} shadow-lg shadow-blue-500/10 scale-[1.02]`
                              : "bg-[#090b10]/90 border-white/5 hover:border-white/20 text-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-slate-300">
                              0{index + 1}
                            </span>
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-white">
                                {layer.title}
                              </div>
                              <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                                {layer.desc}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-mono opacity-70">
                            {isSelected ? "Active" : "Inspect"}
                          </span>
                        </button>

                        {/* Connector arrow between nodes */}
                        {index < architectureLayers.length - 1 && (
                          <div className="w-full flex justify-center py-1">
                            <span className="text-[11px] font-mono text-slate-600">↓ REST / WebSocket Stream ↓</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Detail Box for Selected Node */}
                <div className="mt-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span className="font-mono font-semibold text-white uppercase text-[11px]">
                      {architectureLayers.find((l) => l.id === activeLayer)?.title} Scope
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {architectureLayers.find((l) => l.id === activeLayer)?.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Architecture Lab</span>
                  <a href="#architecture" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Full Lab View &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
