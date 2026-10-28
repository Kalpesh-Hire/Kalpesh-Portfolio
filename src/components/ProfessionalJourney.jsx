import React from "react";
import Resume from "../../public/Kalpesh-Hire Resume.pdf";
import avtar from "../../public/Kalpesh Hire.jpg";
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaFileDownload, 
  FaBuilding, 
  FaCodeBranch 
} from "react-icons/fa";
import { FiCheckCircle, FiArrowUpRight, FiLayers } from "react-icons/fi";

function ProfessionalJourney() {
  const milestones = [
    {
      period: "April 2026 – Present",
      role: "Software Developer",
      company: "Xform Technologies",
      location: "India",
      type: "Full-Time Production Role",
      isCurrent: true,
      headline: "Scalable Web Systems & RESTful API Integration",
      description:
        "Working as a Software Developer at Xform Technologies, focusing on architecting scalable and responsive web applications. Integrated RESTful APIs into React applications for dynamic data fetching, state management, and seamless real-time user interactions.",
      technologies: ["Software Development", "React.js", "REST APIs", "Tailwind CSS", "JavaScript", "Component Systems", "State Management"],
      highlights: [
        "Integrated RESTful APIs into React applications for dynamic data fetching and seamless user interactions.",
        "Developing scalable frontend components and responsive web interfaces with modern React and Tailwind CSS.",
        "Collaborating on enterprise architecture, component optimization, and seamless user experiences.",
      ],
    },
    {
      period: "July 2025 – April 2026",
      role: "React Developer",
      company: "Ekatta Innovators LLP",
      location: "India",
      type: "Commercial Production Role",
      isCurrent: false,
      headline: "Scalable Frontend Components & Real-Time User Experiences",
      description:
        "Worked as a React Developer at Ekatta Innovators LLP, integrating RESTful APIs into React-based applications to deliver real-time, responsive user experiences. Worked closely with cross-functional teams to build scalable frontend components and maintain clean codebases.",
      technologies: ["React.js", "REST APIs", "JavaScript", "Component Design", "Cross-Functional Teams", "UI Engineering"],
      highlights: [
        "Integrating RESTful APIs into React-based applications to deliver real-time, responsive user experiences.",
        "Working closely with cross-functional teams to build scalable frontend components.",
        "Delivered responsive, cross-browser compatible application interfaces adhering to strict quality standards.",
      ],
    },
    {
      period: "July 2024 – Sept 2024",
      role: "Web Developer Intern",
      company: "Octanet Services Pvt Ltd",
      location: "India",
      type: "Commercial Internship",
      isCurrent: false,
      headline: "Dynamic Interfaces & Enterprise Frameworks",
      description:
        "Completed an intensive web development internship specializing in building dynamic, responsive web interfaces with React.js, Tailwind CSS, Bootstrap, and Material UI. Gained hands-on experience in cross-browser compatibility, API consumption, and clean code principles.",
      technologies: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI", "HTML5/CSS3", "JavaScript"],
      highlights: [
        "Engineered responsive user interfaces with Material UI and Bootstrap.",
        "Collaborated on API consumption and asynchronous data binding.",
        "Refined foundational Git version control and team code review practices.",
      ],
    },
    {
      period: "2021 – 2024",
      role: "Bachelor of Computer Applications (BCA)",
      company: "Dr. Babasaheb Ambedkar Marathwada University",
      location: "Chhatrapati Sambhaji Nagar, India",
      type: "Formal Education",
      isCurrent: false,
      headline: "Computer Science & Application Engineering Degree (GPA: 60%)",
      description:
        "Graduated with a Bachelor of Computer Applications degree, acquiring deep foundational knowledge in software engineering principles, database management systems (DBMS), relational schemas, data structures, and web technologies.",
      technologies: ["Software Engineering", "DBMS", "Data Structures", "Java", "Web Fundamentals", "Networking / CCNA"],
      highlights: [
        "Completed 3-year university curriculum in Computer Applications.",
        "Strong foundation in database architecture, normalization, and relational querying.",
        "Developed solid fundamentals in front-end design, OOP, and software project management (SPM).",
      ],
    },
  ];

  return (
    <section id="journey" className="relative scroll-mt-20 py-20">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <FaCodeBranch className="text-indigo-400" />
            <span>Career Milestones & Progression</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A chronological timeline connecting verified industry roles, key technical accomplishments, and academic foundations.
          </p>
        </div>

        {/* Top Profile Summary Strip */}
        <div className="mb-14 bento-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <img
              src={avtar}
              alt="Kalpesh Hire"
              className="w-20 h-20 rounded-2xl object-cover ring-2 ring-blue-500/30"
            />
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-xl font-bold text-white">Kalpesh Radhakrishna Hire</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active Developer
                </span>
              </div>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">
                Software Developer @ Xform Technologies · Former React Developer @ Ekatta Innovators LLP
              </p>
              <p className="text-xs text-slate-400 mt-2 max-w-xl">
                Bodhegaon, Phulambri, Chhatrapati Sambhaji Nagar · Turning architectural requirements into resilient user experiences across web, mobile, and backend microservices.
              </p>
            </div>
          </div>

          <a
            href={Resume}
            download="Kalpesh-Hire-Resume"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 transition-all shrink-0"
          >
            <FaFileDownload />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        {/* Connected Milestones Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-purple-500 before:opacity-30">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-8"
              >
                {/* Timeline Node Badge on Center Line */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0d1117] border-2 border-blue-400 flex items-center justify-center z-10 shadow-lg shadow-blue-500/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                </div>

                {/* Left Side (Even items on desktop) */}
                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"
                  }`}
                >
                  <div className="bento-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
                    {/* Header */}
                    <div>
                      <div className={`flex flex-wrap items-center gap-2 mb-2 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        {milestone.isCurrent ? (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                            ● Present Role
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-slate-400 text-[11px] font-mono">
                            {milestone.type}
                          </span>
                        )}
                        <span className="text-xs font-mono text-cyan-400">
                          {milestone.period}
                        </span>
                      </div>

                      <h4 className="text-xl font-extrabold text-white tracking-tight">
                        {milestone.role}
                      </h4>
                      <div className="text-sm font-semibold text-blue-400 flex items-center gap-2 mt-0.5 justify-start md:justify-start">
                        <span className={`${isEven ? "md:ml-auto" : ""}`}>
                          {milestone.company}
                        </span>
                        <span className="text-slate-500">· {milestone.location}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
                      {milestone.description}
                    </p>

                    {/* Accomplishments */}
                    <div className="space-y-1.5 pt-2 text-left">
                      {milestone.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <FiCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className={`pt-3 border-t border-white/10 flex flex-wrap gap-1.5 ${isEven ? "md:justify-end" : "justify-start"}`}>
                      {milestone.technologies.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty opposite column for balanced spacing on desktop */}
                <div className={`hidden md:block w-1/2 ${isEven ? "order-2" : "order-1"}`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ProfessionalJourney;
