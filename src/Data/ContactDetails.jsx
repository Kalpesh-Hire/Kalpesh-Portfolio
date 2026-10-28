/**
 * Centralized Contact and Social Channels
 * Exact verified URLs and phone numbers for Kalpesh Hire
 */

const WHATSAPP_PHONE = "919767777200";
const WHATSAPP_MSG = "Hi, I visited your portfolio and would like to discuss a project with you.";

export const CONTACT_DETAILS = {
  name: "Kalpesh Hire",
  role: "Software Developer",
  email: "kalpesh.r.hire@gmail.com",
  phoneDisplay: "+91 9767777200",
  whatsappPhone: WHATSAPP_PHONE,
  whatsappMessage: WHATSAPP_MSG,
  whatsappUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`,
  emailSubject: "Portfolio Inquiry — Project Collaboration",
  emailBody: "Hi Kalpesh,\n\nI visited your portfolio and would like to discuss an opportunity / project with you.\n\nBest regards,",
  get mailtoUrl() {
    return `mailto:${this.email}?subject=${encodeURIComponent(this.emailSubject)}&body=${encodeURIComponent(this.emailBody)}`;
  },
  instagramUrl: "https://www.instagram.com/hire_kalpesh/",
  linkedinUrl: "https://www.linkedin.com/in/kalpeshhire/",
  githubUrl: "https://github.com/Kalpesh-Hire",
};
