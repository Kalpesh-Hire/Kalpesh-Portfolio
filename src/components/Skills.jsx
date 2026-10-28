import React, { useState } from "react";
import { iconsFront, iconsLib, iconsTech } from "../Data/Icons";
import { FaLaptopCode, FaCubes, FaTools } from "react-icons/fa";

function Skills() {
  const [selectedTech, setSelectedTech] = useState(null);

  // Grouped skill sets with descriptive metadata
  const skillCategories = [
    {
      id: "front",
      title: "Core Languages",
      description: "Fundamental languages powering the web platform",
      icon: <FaLaptopCode className="text-orange-400" />,
      items: iconsFront,
    },
    {
      id: "lib",
      title: "Libraries & Frameworks",
      description: "Modern component architectures & styling frameworks",
      icon: <FaCubes className="text-sky-400" />,
      items: iconsLib,
    },
    {
      id: "tech",
      title: "Tools & Ecosystem",
      description: "Developer tooling, workflows, and version control",
      icon: <FaTools className="text-emerald-400" />,
      items: iconsTech,
    },
  ];

  return (
    <section id="skills" className="relative scroll-mt-20 py-20">
      <div className="max-w-6xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            Interactive Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Skills & Map</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Select or hover any technology node to inspect its ecosystem role and integration context.
          </p>
        </div>

        {/* Selected Skill Detail Banner */}
        <div className="mb-10 p-4 rounded-2xl bg-[#0f141c] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-mono text-slate-400">Current Node Focus:</span>
            <span className="text-sm font-bold text-white">
              {selectedTech ? selectedTech : "Select any technology badge below to inspect"}
            </span>
          </div>
          {selectedTech && (
            <button
              onClick={() => setSelectedTech(null)}
              className="text-xs font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
            >
              Reset focus
            </button>
          )}
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-lg">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Tech Node Grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {category.items.map(({ id, title, icons }) => {
                    const isSelected = selectedTech === title;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setSelectedTech(isSelected ? null : title)}
                        className={`group p-3.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 border ${
                          isSelected
                            ? "bg-blue-500/20 border-blue-500 shadow-lg shadow-blue-500/20 scale-[1.03]"
                            : "bg-[#090c10]/80 border-white/5 hover:border-white/20 hover:bg-white/5"
                        }`}
                      >
                        <div className="text-3xl p-2 rounded-xl transition-transform duration-300 group-hover:scale-110">
                          {icons}
                        </div>
                        <span className="text-xs font-medium text-slate-200 mt-2 tracking-wide">
                          {title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to focus
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{category.items.length} Technologies</span>
                <span className="text-emerald-400">Production ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Connected Ecosystem Info */}
        <div className="mt-8 p-6 rounded-2xl bg-[#0f141c]/60 border border-white/5 text-center">
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Stack harmony: Utilizing modern React with Tailwind CSS and component libraries ensures responsive layouts, high accessibility standards, and clean state handling across both single-page applications and enterprise portals.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
