import React from "react";
import { IoMdClose } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";

function FrontEnd({ onclose, modalRef }) {
  return (
    <div className="fixed z-50 inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center p-4">
      <div
        ref={modalRef}
        className="bento-card rounded-3xl w-full max-w-lg border border-white/10 p-6 sm:p-8 bg-[#0d1117] shadow-2xl relative"
      >
        <button
          onClick={onclose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <IoMdClose size={20} />
        </button>

        <div className="space-y-3 mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
            Frontend Architecture
          </span>
          <h2 className="text-2xl font-bold text-white">
            Front-End Development
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            I create responsive, fluid, and dynamic user interfaces that provide an enhanced user experience and adhere to clean code principles.
          </p>
        </div>

        <div className="space-y-3 py-2 border-t border-b border-white/10">
          {[
            "Skilled in building modular, reusable interfaces with React.js.",
            "Proficient in Tailwind CSS and Bootstrap for bespoke and responsive styling.",
            "Experienced with React Hooks (useState, useEffect, useContext) for predictable state management.",
            "Integrated third-party libraries, REST APIs, and authentication flows effectively.",
            "Focused on writing clean, maintainable, and self-documenting code.",
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <FiCheckCircle className="text-blue-400 mt-1 shrink-0 text-sm" />
              <span className="text-xs sm:text-sm text-slate-300">{point}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onclose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
