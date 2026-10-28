import React, { useState } from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { FaWhatsappSquare, FaTelegram, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { FiArrowUpRight, FiCheckCircle, FiShield, FiTerminal } from "react-icons/fi";
import Swal from "sweetalert2";
import { CONTACT_DETAILS } from "../Data/ContactDetails";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // PRESERVED STRICTLY: Exact submission handler, endpoint, payload, access key, and SweetAlert2
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);

      formData.append("access_key", "c5d1d1c2-cb5f-4cf7-9ffc-0c25b2e2a3e1");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Message Delivered!",
          text: "Thank you! Your message has been successfully transmitted to Kalpesh's inbox.",
          icon: "success",
          confirmButtonText: "Acknowledge",
          background: "#0d1117",
          color: "#f1f5f9",
          confirmButtonColor: "#2563eb",
        });
        setName("");
        setEmail("");
        setText("");
      } else {
        Swal.fire({
          title: "Transmission Error",
          text: res.message || "Failed to deliver message. Please try again or reach out directly.",
          icon: "error",
          confirmButtonText: "Retry",
          background: "#0d1117",
          color: "#f1f5f9",
          confirmButtonColor: "#2563eb",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Network Error",
        text: "An unexpected error occurred during submission. Please try again shortly.",
        icon: "error",
        confirmButtonText: "Ok",
        background: "#0d1117",
        color: "#f1f5f9",
        confirmButtonColor: "#2563eb",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 py-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <FiTerminal className="text-blue-400" />
            <span>Secure Communication Channel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Initiate{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have an engineering role, contract project, or technical question? Transmit a message below or connect directly across channels.
          </p>
        </div>

        {/* Bento Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  Open for Opportunities
                </span>
                <h3 className="text-2xl font-bold text-white mt-3">
                  Let's Build Exceptional Systems Together
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2">
                  I’d love to hear from you! Whether you have an architecture to discuss, a project in mind, or an open software engineering role, send a transmission below.
                </p>
              </div>

              {/* Direct Communications */}
              <div className="space-y-3">
                <a
                  href={CONTACT_DETAILS.mailtoUrl}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#090c10] hover:bg-white/5 border border-white/5 hover:border-blue-500/30 text-slate-200 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                      <MdEmail className="text-xl" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500">PRIMARY EMAIL</div>
                      <div className="text-xs sm:text-sm font-medium text-white truncate max-w-[210px] sm:max-w-none">
                        {CONTACT_DETAILS.email}
                      </div>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href={`tel:${CONTACT_DETAILS.phoneDisplay.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#090c10] hover:bg-white/5 border border-white/5 hover:border-emerald-500/30 text-slate-200 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <MdCall className="text-xl" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500">VOICE / TELEPHONE</div>
                      <div className="text-xs sm:text-sm font-medium text-white">
                        {CONTACT_DETAILS.phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Direct Messaging & Network
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={CONTACT_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 border border-white/5 hover:border-emerald-500/30 transition-all"
                >
                  <FaWhatsappSquare className="text-xl" />
                </a>
                <a
                  href={CONTACT_DETAILS.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl bg-white/5 hover:bg-blue-500/20 text-slate-300 hover:text-blue-400 border border-white/5 hover:border-blue-500/30 transition-all"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href={CONTACT_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 rounded-xl bg-white/5 hover:bg-pink-500/20 text-slate-300 hover:text-pink-400 border border-white/5 hover:border-pink-500/30 transition-all"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="p-3 rounded-xl bg-white/5 hover:bg-sky-500/20 text-slate-300 hover:text-sky-400 border border-white/5 hover:border-sky-500/30 transition-all"
                >
                  <FaTelegram className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Preserved Form in Editorial Bento Shell */}
          <div className="lg:col-span-7 bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-center border border-white/10">
            <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Direct Inbox Transmission
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Powered by Web3Forms gateway with client-side validation
                </p>
              </div>
              <FiShield className="text-blue-400 text-lg" />
            </div>

            {/* STRICTLY PRESERVED FORM: Exact name, email, message attributes and submit handler */}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name-input" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  id="name-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elena Rostova"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl bg-[#090c10] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email-input" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. elena@company.com"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-[#090c10] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message-input" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message Details *
                </label>
                <textarea
                  id="message-input"
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Briefly describe your requirements, project scope, or opportunity..."
                  name="message"
                  className="w-full px-4 py-3 rounded-xl bg-[#090c10] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all duration-200 active:scale-98 cursor-pointer"
                >
                  <span>{loading ? "Transmitting..." : "Send a message"}</span>
                  <IoIosSend className="text-xl" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
