import React, { useState } from "react";
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
import { 
  FiDownload, 
  FiArrowRight, 
  FiLayers, 
  FiTerminal, 
  FiCheckCircle 
} from "react-icons/fi";
import { Helmet } from "react-helmet";
import AnimatedDeveloperAvatar from "./AnimatedDeveloperAvatar";
import FloatingIllustrations from "./FloatingIllustrations";

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
          content="Kalpesh Hire is a Software Developer at Xform Technologies specializing in React.js, Spring Boot, JavaScript, and building full-stack enterprise web and mobile architectures."
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
        {/* Carefully Composed Floating Illustrated Elements (Behind Content) */}
        <FloatingIllustrations />

        {/* Ambient background lightings */}
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
              <span className="text-slate-400">CORE STACK:</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                React.js · Spring Boot · Tailwind
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
                      "CRM & HRMS Enterprise Architectures",
                      "Scalable React & Next.js Frontends",
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
                I’m <strong className="text-slate-200 font-semibold">Kalpesh Hire</strong>, a Software Developer at Xform Technologies building enterprise resource systems (MERP, WMS, CRM, HRMS), dashboards, and full-stack solutions. Experienced across React.js, Tailwind CSS, JavaScript, and Spring Boot with Java, bridging intuitive user interfaces with robust backend architectures.
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
                    href="https://linkedin.com/in/kalpeshhire/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-blue-400 border border-white/5 transition-colors"
                  >
                    <FaLinkedin size={15} />
                  </a>
                  <a
                    href="https://www.instagram.com/hire_kalpesh/"
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

            {/* Right Column: Animated Developer Avatar Workstation Illustration */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <AnimatedDeveloperAvatar />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
