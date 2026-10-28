import React, { useState, useEffect, useRef } from "react";
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa";
import { IoChatbubblesOutline, IoCloseOutline } from "react-icons/io5";
import { CONTACT_DETAILS } from "../Data/ContactDetails";

/**
 * FloatingContactDock
 * Fixed near bottom-right corner of the viewport
 * Verified links: WhatsApp, Email (mailto), Instagram, LinkedIn
 * Accessible tooltips, focus states, ESC / click-outside support, touch-friendly
 */
function FloatingContactDock() {
  const [isOpen, setIsOpen] = useState(false);
  const dockRef = useRef(null);
  const triggerRef = useRef(null);

  const actions = [
    {
      id: "whatsapp",
      label: "WhatsApp Chat",
      tooltip: "Message on WhatsApp",
      icon: <FaWhatsapp className="text-xl text-emerald-400" />,
      href: CONTACT_DETAILS.whatsappUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-300",
    },
    {
      id: "email",
      label: "Send Email",
      tooltip: "Open Default Email Client",
      href: CONTACT_DETAILS.mailtoUrl,
      target: "_self",
      rel: undefined,
      icon: <FaEnvelope className="text-lg text-sky-400" />,
      color: "hover:bg-sky-500/20 hover:border-sky-500/40 hover:text-sky-300",
    },
    {
      id: "instagram",
      label: "Instagram Profile",
      tooltip: "Visit Instagram @hire_kalpesh",
      icon: <FaInstagram className="text-lg text-pink-400" />,
      href: CONTACT_DETAILS.instagramUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "hover:bg-pink-500/20 hover:border-pink-500/40 hover:text-pink-300",
    },
    {
      id: "linkedin",
      label: "LinkedIn Profile",
      tooltip: "Connect on LinkedIn",
      icon: <FaLinkedinIn className="text-lg text-blue-400" />,
      href: CONTACT_DETAILS.linkedinUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-300",
    },
  ];

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dockRef.current && !dockRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        if (triggerRef.current) triggerRef.current.focus();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <aside
      ref={dockRef}
      aria-label="Floating contact and social shortcuts"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5"
    >
      {/* Expandable Action Items */}
      <div
        className={`flex flex-col items-end gap-2.5 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        role="menu"
        aria-hidden={!isOpen}
      >
        {actions.map((action, idx) => (
          <div key={action.id} className="relative group flex items-center gap-2">
            {/* Accessible Tooltip */}
            <span
              role="tooltip"
              className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-mono text-slate-200 bg-[#0d1117]/95 border border-white/10 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
            >
              {action.tooltip}
            </span>

            {/* Circular Action Button */}
            <a
              href={action.href}
              target={action.target}
              rel={action.rel}
              tabIndex={isOpen ? 0 : -1}
              aria-label={action.label}
              className={`w-11 h-11 rounded-full bg-[#0d1117]/90 border border-white/10 backdrop-blur-xl shadow-lg flex items-center justify-center text-slate-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 active:scale-95 ${action.color}`}
            >
              {action.icon}
            </a>
          </div>
        ))}
      </div>

      {/* Main Dock Trigger Pill / Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={isOpen ? "Close contact shortcuts" : "Open quick contact and social shortcuts"}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-blue-500/25 border border-white/20 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        {/* Subtle Ping Indicator when closed */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#090a0f]"></span>
          </span>
        )}

        <span className="transition-transform duration-300">
          {isOpen ? (
            <IoCloseOutline size={26} className="text-white" />
          ) : (
            <IoChatbubblesOutline size={24} className="text-white" />
          )}
        </span>
      </button>
    </aside>
  );
}

export default FloatingContactDock;
