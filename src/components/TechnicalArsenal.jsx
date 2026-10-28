import React, { useState } from "react";
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaBootstrap, 
  FaNodeJs, 
  FaJava, 
  FaGitAlt, 
  FaGithub, 
  FaNpm, 
  FaDatabase, 
  FaMobileAlt, 
  FaDesktop, 
  FaShieldAlt, 
  FaServer, 
  FaCloudUploadAlt 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiMui, 
  SiSpringboot, 
  SiPostgresql, 
  SiMongodb, 
  SiPostman, 
  SiVite, 
  SiNetlify, 
  SiClerk, 
  SiTypescript 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiCheckCircle, FiSearch, FiLayers } from "react-icons/fi";

const ARSENAL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    desc: "Single-Page Application architectures, virtual DOM, and component state pipelines",
    skills: [
      { name: "React.js", icon: <FaReact className="text-sky-400" />, note: "Production Core", tags: ["SPA", "Hooks", "Virtual DOM"] },
      { name: "Next.js", icon: <FaReact className="text-white" />, note: "React Framework", tags: ["SSR Concepts", "Routing"] },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" />, note: "Async / Modern ES", tags: ["Promises", "Modules"] },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, note: "Type Safety", tags: ["Interfaces", "Contracts"] },
      { name: "HTML5 & Semantic Web", icon: <FaHtml5 className="text-orange-500" />, note: "Accessibility & Markup", tags: ["ARIA", "SEO"] },
      { name: "CSS3 & Modern Layouts", icon: <FaCss3Alt className="text-blue-500" />, note: "Flexbox & Grid", tags: ["Animations", "Media Queries"] },
      { name: "React Router", icon: <FaReact className="text-red-400" />, note: "Declarative Routing", tags: ["Guards", "Dynamic Routes"] },
      { name: "Context API", icon: <FaReact className="text-cyan-300" />, note: "Global State", tags: ["Stores", "useReducer"] },
      { name: "Vite", icon: <SiVite className="text-purple-400" />, note: "Modern Bundler", tags: ["Fast HMR", "Rollup"] },
    ],
  },
  {
    id: "ui",
    title: "UI Engineering & Design Systems",
    desc: "Tailwind CSS, Material UI, Bootstrap, dark bento compositions, and accessible responsive layouts",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, note: "Bespoke Bento Grids", tags: ["Utilities", "Dark Mode"] },
      { name: "Material UI (MUI)", icon: <SiMui className="text-blue-500" />, note: "Enterprise Components", tags: ["Themes", "Data Grids"] },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" />, note: "Responsive Systems", tags: ["Grid", "Modals"] },
      { name: "Responsive Layouts", icon: <FiLayers className="text-emerald-400" />, note: "Cross-Device UX", tags: ["Mobile-First", "Fluid"] },
      { name: "Design Systems", icon: <FiLayers className="text-indigo-400" />, note: "Tokens & Typography", tags: ["Bento", "Glassmorphism"] },
      { name: "Accessibility (a11y)", icon: <FiCheckCircle className="text-green-400" />, note: "Semantic Structure", tags: ["Contrast", "Keyboard"] },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering & APIs",
    desc: "Spring Boot (Java), Node.js, REST controllers, stateless JWT authentication, and secure API gateways",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-emerald-400" />, note: "Java Enterprise Framework", tags: ["Controllers", "IoC"] },
      { name: "Java", icon: <FaJava className="text-red-500" />, note: "Object-Oriented Core", tags: ["Spring Ecosystem", "OOP"] },
      { name: "Node.js & Express", icon: <FaNodeJs className="text-emerald-500" />, note: "JavaScript Runtime", tags: ["Microservices", "APIs"] },
      { name: "REST API Architecture", icon: <FaServer className="text-cyan-400" />, note: "Stateless Endpoints", tags: ["JSON", "CRUD", "CORS"] },
      { name: "JWT Authentication", icon: <FaShieldAlt className="text-pink-400" />, note: "Stateless Token Auth", tags: ["Bearer", "RBAC"] },
      { name: "Role-Based Access Control", icon: <FaShieldAlt className="text-purple-400" />, note: "Security Guardrails", tags: ["Admin", "Employee"] },
    ],
  },
  {
    id: "mobile-desktop",
    title: "Mobile & Desktop Engineering",
    desc: "React Native for cross-platform mobile apps and Electron for desktop software architectures",
    skills: [
      { name: "React Native", icon: <FaMobileAlt className="text-purple-400" />, note: "Cross-Platform Mobile", tags: ["iOS", "Android"] },
      { name: "Expo Tooling", icon: <FaMobileAlt className="text-white" />, note: "Mobile Workflow", tags: ["Development Client"] },
      { name: "Electron", icon: <FaDesktop className="text-indigo-400" />, note: "Desktop Runtime", tags: ["Chromium + Node"] },
      { name: "Electron + React", icon: <FaDesktop className="text-sky-400" />, note: "Desktop Software Architecture", tags: ["Vite", "Bento"] },
      { name: "IPC Bridge Security", icon: <FaShieldAlt className="text-blue-400" />, note: "Safe Context Isolation", tags: ["IPC Channels"] },
    ],
  },
  {
    id: "database",
    title: "Databases & Data Engineering",
    desc: "Relational entity schemas, foreign keys, indexing, and document-oriented storage",
    skills: [
      { name: "MySQL", icon: <FaDatabase className="text-blue-500" />, note: "Relational Storage", tags: ["Foreign Keys", "ACID"] },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, note: "Advanced SQL Database", tags: ["Relational", "Indexes"] },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, note: "Document Store", tags: ["NoSQL", "JSON Documents"] },
      { name: "Database Schema Design", icon: <FaDatabase className="text-amber-400" />, note: "Entity Modeling", tags: ["Normalization", "ERD"] },
    ],
  },
  {
    id: "tools",
    title: "Tools, Deployment & DevOps",
    desc: "Version control, build automation, container fundamentals, and production deployment pipelines",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" />, note: "Version Control", tags: ["Branching", "Workflows"] },
      { name: "GitHub", icon: <FaGithub className="text-white" />, note: "Code Repository", tags: ["CI/CD", "Collaboration"] },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" />, note: "Primary IDE", tags: ["Extensions", "Debugging"] },
      { name: "Postman", icon: <SiPostman className="text-orange-400" />, note: "API Contract Testing", tags: ["Endpoints", "Headers"] },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-400" />, note: "SPA Cloud Hosting", tags: ["Continuous Deploy"] },
      { name: "npm", icon: <FaNpm className="text-red-500" />, note: "Package Management", tags: ["Dependencies", "Scripts"] },
    ],
  },
];

function TechnicalArsenal() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = ARSENAL_CATEGORIES.filter((cat) => {
    if (activeTab !== "all" && cat.id !== activeTab) return false;
    return true;
  });

  return (
    <section id="arsenal" className="relative scroll-mt-20 py-20">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <FiLayers className="text-blue-400" />
            <span>Capability Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive matrix of verified skills across frontend, UI design systems, backend services, cross-platform mobile, desktop, databases, and deployment.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
              activeTab === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5"
            }`}
          >
            All Disciplines
          </button>
          {ARSENAL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeTab === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              {cat.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Categories Matrix */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bento-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {category.desc}
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  {category.skills.length} Capabilities
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-2xl bg-[#090b10] border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl p-2 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {skill.note}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[9px] font-mono text-slate-500 px-1.5 py-0.5 rounded bg-white/5">
                        {skill.tags[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechnicalArsenal;
