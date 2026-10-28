import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Xform Technologies",
      period: "April 2026 – Present",
      type: "Full-Time",
      isCurrent: true,
      location: "India",
      description:
        "Working as a Software Developer at Xform Technologies, focusing on architecting scalable and responsive web applications. Integrated RESTful APIs into React applications for dynamic data fetching, state management, and seamless real-time user interactions.",
      highlights: [
        "Integrated RESTful APIs into React applications for dynamic data fetching and seamless user interactions.",
        "Developing scalable frontend architectures and responsive web systems with modern React and Tailwind CSS.",
        "Collaborating on enterprise applications, component optimization, and seamless user experiences.",
      ],
      skills: ["Software Development", "React.js", "REST APIs", "Tailwind CSS", "JavaScript", "Component Architecture"],
    },
    {
      role: "React Developer",
      company: "Ekatta Innovators LLP",
      period: "July 2025 – April 2026",
      type: "Full-Time",
      isCurrent: false,
      location: "India",
      description:
        "Worked as a React Developer at Ekatta Innovators LLP, integrating RESTful APIs into React-based applications to deliver real-time, responsive user experiences. Worked closely with cross-functional teams to build scalable frontend components and maintain clean codebases.",
      highlights: [
        "Integrating RESTful APIs into React-based applications to deliver real-time, responsive user experiences.",
        "Working closely with cross-functional teams to build scalable frontend components.",
        "Enforced consistent UI styling and responsive design patterns across diverse client devices.",
      ],
      skills: ["React.js", "REST APIs", "JavaScript", "Component Design", "Cross-Functional Teams", "UI Engineering"],
    },
    {
      role: "Web Developer Intern",
      company: "Octanet Services Pvt Ltd",
      period: "July 2024 – Sept 2024",
      type: "Internship",
      isCurrent: false,
      location: "India",
      description:
        "Completed a Web Developer internship at Octanet Services Pvt Ltd, specializing in building responsive and dynamic web interfaces with React.js, Tailwind CSS, Bootstrap, and Material UI. Gained hands-on experience in cross-browser compatibility, API consumption, and clean code principles.",
      highlights: [
        "Built dynamic, responsive web interfaces using React.js, Bootstrap, and Material UI.",
        "Collaborated on API consumption, form verification, and cross-browser styling.",
      ],
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI", "HTML5/CSS3", "JavaScript"],
    },
  ];

  return (
    <section id="experience" className="relative scroll-mt-20 py-20">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Work history, commercial roles, and production engineering contributions.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group border border-white/10"
            >
              {exp.isCurrent && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
              )}

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <FaBriefcase className="text-sm" />
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.type}
                    </span>
                  </div>

                  {exp.isCurrent ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      Present Role
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">
                      Completed
                    </span>
                  )}
                </div>

                {/* Role Title & Company */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <div className="text-sm font-semibold text-blue-400 mt-1 flex items-center gap-1.5">
                  <FaBuilding className="text-xs" />
                  <span>{exp.company}</span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-3 pb-4 border-b border-white/5">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-slate-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-slate-500" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                {exp.highlights && (
                  <div className="space-y-1.5 mt-4 pt-3 border-t border-white/5">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <FiCheckCircle className="text-blue-400 mt-0.5 shrink-0 text-[11px]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Skills Tags */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
