import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#07080b] py-12 mt-12">
      <div className="max-w-6xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Kalpesh <span className="text-blue-400">Hire</span>
            </h2>
            <p className="text-xs text-slate-400">
              Frontend & React Developer · Crafting responsive, modern digital experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Kalpesh-Hire"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/kalpesh-hire-29b662235"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-blue-400 border border-white/5 transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/hire_kalpesh?igsh=Y3F0YTkwOXNpcjQ1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-pink-400 border border-white/5 transition-colors"
            >
              <FaInstagram size={16} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 transition-all ml-2"
            >
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-2">
          <span>Copyright © 2025 Kalpesh Hire. All rights reserved.</span>
          {/* <span>Designed with Dark Bento UI & React</span> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
