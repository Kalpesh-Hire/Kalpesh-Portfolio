import React, { useEffect, useRef, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { FiCode, FiLayout, FiCheckCircle } from "react-icons/fi";
import frontEnd from "../../public/frontEnd icon.png";
import web from "../../public/webdeveloper icon.svg";
import FrontEnd from "./ServiceModel/FrontEnd";
import WebDeveloper from "./ServiceModel/WebDeveloper";

function Services() {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showWebDeveloper, setShowWebDeveloper] = useState(false);
  const modalRef = useRef();
  const modalRef1 = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (showFrontend && modalRef.current && !modalRef.current.contains(event.target)) {
        setShowFrontend(false);
      }
      if (showWebDeveloper && modalRef1.current && !modalRef1.current.contains(event.target)) {
        setShowWebDeveloper(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFrontend, showWebDeveloper]);

  return (
    <section id="services" className="relative scroll-mt-20 py-20">
      <div className="max-w-6xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services & <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Specialized engineering services tailored for scalable web applications.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Service Card 1: Frontend Development */}
          <div className="bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <FiLayout className="text-2xl" />
                </div>
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">
                  Core Expertise
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Front-End Development
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  Building responsive, accessible, dynamic user interfaces utilizing React.js, Tailwind CSS, and modern web APIs with strong performance metrics.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {[
                  "React component architecture & state hooks",
                  "Tailwind CSS & Material UI design systems",
                  "High-performance responsive layouts",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                    <FiCheckCircle className="text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <button
                type="button"
                onClick={() => setShowFrontend(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white border border-white/10 hover:border-blue-500 text-xs font-semibold transition-all duration-300"
              >
                <span>Read Full Service Details</span>
                <MdArrowRightAlt className="text-lg" />
              </button>
            </div>
          </div>

          {/* Service Card 2: Web Development */}
          <div className="bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <FiCode className="text-2xl" />
                </div>
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">
                  Full Scope
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Web Development
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  Engineering clean, cross-browser compatible websites and applications with optimized bundle sizes, Git version control, and fluid UX.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {[
                  "Cross-browser compatibility & clean code",
                  "Version control workflows using Git & GitHub",
                  "API integration & performance optimization",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                    <FiCheckCircle className="text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <button
                type="button"
                onClick={() => setShowWebDeveloper(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-emerald-600 text-slate-300 hover:text-white border border-white/10 hover:border-emerald-500 text-xs font-semibold transition-all duration-300"
              >
                <span>Read Full Service Details</span>
                <MdArrowRightAlt className="text-lg" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Modals with Dark Bento styling */}
      {showFrontend && (
        <FrontEnd
          modalRef={modalRef}
          onclose={() => setShowFrontend(false)}
        />
      )}
      {showWebDeveloper && (
        <WebDeveloper
          modalRef1={modalRef1}
          onclose={() => setShowWebDeveloper(false)}
        />
      )}
    </section>
  );
}

export default Services;
