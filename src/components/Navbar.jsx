import React, { useEffect, useState } from "react";
import Profile from "../../public/Profile picture.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FiArrowUpRight, FiTerminal } from "react-icons/fi";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Command Center", href: "#home" },
    { id: "universe", label: "Dev Universe", href: "#universe" },
    { id: "projects", label: "Projects & ERP", href: "#projects" },
    { id: "architecture", label: "Architecture Lab", href: "#architecture" },
    { id: "platforms", label: "Cross-Platform", href: "#platforms" },
    { id: "arsenal", label: "Arsenal", href: "#arsenal" },
    { id: "journey", label: "Journey", href: "#journey" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Active section detection
      const sections = [
        "home",
        "universe",
        "projects",
        "architecture",
        "platforms",
        "arsenal",
        "journey",
        "contact",
      ];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#090b10]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 px-4 py-2.5"
            : "bg-[#0d1117]/60 backdrop-blur-md border border-white/5 px-4 py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative">
              <img
                src={Profile}
                className="h-9 w-9 rounded-xl object-cover ring-1 ring-white/20 group-hover:ring-blue-400/60 transition-all duration-300"
                alt="Kalpesh Hire"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#090b10]"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-sm tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  Kalpesh Hire
                </span>
                <span className="hidden sm:inline-flex px-1.5 py-0.2 text-[9px] font-mono rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Software Dev
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider flex items-center gap-1">
                <FiTerminal className="text-[10px] text-emerald-400" />
                <span>React · Spring · Full-Stack</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-1 bg-[#121620]/80 p-1 rounded-xl border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mid-screen condensed nav */}
          <div className="hidden md:flex xl:hidden items-center gap-1 bg-[#121620]/80 p-1 rounded-xl border border-white/5">
            {[
              { id: "home", label: "Center", href: "#home" },
              { id: "universe", label: "Universe", href: "#universe" },
              { id: "projects", label: "Projects", href: "#projects" },
              { id: "architecture", label: "Arch Lab", href: "#architecture" },
              { id: "arsenal", label: "Arsenal", href: "#arsenal" },
              { id: "journey", label: "Journey", href: "#journey" },
              { id: "contact", label: "Contact", href: "#contact" },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/20 transition-all active:scale-95"
            >
              <span>Connect</span>
              <FiArrowUpRight className="text-sm" />
            </a>

            <button
              onClick={() => setMenu(!menu)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-300 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 md:hidden transition-colors border border-white/5"
            >
              {menu ? <IoMdClose size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menu && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenu(false)}
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                  activeSection === item.id
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[10px] font-mono text-slate-500">&rarr;</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMenu(false)}
                className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
              >
                Connect With Kalpesh
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
