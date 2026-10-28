import React from "react";
import { IoMdClose } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";

function WebDeveloper({ onclose, modalRef1 }) {
  return (
    <div className="fixed z-50 inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center p-4">
      <div
        ref={modalRef1}
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
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            Web Engineering
          </span>
          <h2 className="text-2xl font-bold text-white">
            Web Development
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            I build well-structured, cross-browser compatible websites and single-page apps with a focus on high performance and clean markup.
          </p>
        </div>

        <div className="space-y-3 py-2 border-t border-b border-white/10">
          {[
            "Strong foundation in modern semantic HTML5 and CSS3.",
            "Proficient in modern JavaScript (ES6+) for interactive web logic.",
            "Experienced in responsive design patterns across mobile, tablet, and desktop.",
            "Skilled in Git version control and collaborative GitHub workflows.",
            "Knowledgeable in web performance optimization and clean asset delivery.",
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <FiCheckCircle className="text-emerald-400 mt-1 shrink-0 text-sm" />
              <span className="text-xs sm:text-sm text-slate-300">{point}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onclose}
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-500/20 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebDeveloper;
