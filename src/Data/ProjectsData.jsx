import { FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {
    title: "Job portal",
    Tech: "Html, css, js, bootstrap, Php",
    discription:
      "A job portal website connects employers and job seekers by providing a platform to post job openings and apply online. Developed using PHP, JavaScript, HTML, and CSS, it features job search, application tracking, and user authentication. The site offers a responsive design with secure data handling to streamline the hiring process.",
    btn: (
      <a
        href="https://github.com/Kalpesh-Hire/JobPortal.git"
        target="_blank"
        className="flex flex-row items-center"
      >
        <FaExternalLinkAlt className="mx-1" /> Visit
      </a>
    ),
  },
  {
    title: "Dance Academy",
    Tech: "Html, css, js, bootstrap",
    discription:
      "A dance academy website showcases various dance classes, schedules, and instructor profiles, helping users explore and enroll in programs. Built using HTML, CSS, and JavaScript, it offers smooth navigation and engaging visuals for a vibrant, user-friendly experience. The platform also features online registration and event announcements, making it easy to join and stay updated on dance activities.",
    btn: (
      <a href="" className="flex flex-row items-center">
        <FaExternalLinkAlt className="mx-1" /> Visit
      </a>
    ),
  },
  {
    title: "EmployeeManagement",
    Tech: "React, ContextAPI, Tailwind",
    discription:
      "An employee management system built using React, Tailwind CSS, and Context API allows an admin to add tasks for employees, which are dynamically managed and displayed in real time. Employees can view assigned tasks, mark them as completed, and provide a description or feedback upon completion.",
    btn: (
      <a
        href="https://github.com/Kalpesh-Hire/EmployeeManagement.git"
        className="flex flex-row items-center"
      >
        <FaExternalLinkAlt className="mx-1" /> Visit
      </a>
    ),
  },
  {
    title: "Dance Academy LandingPage",
    Tech: "Reactjs,CSS3,Hooks",
    discription:
      "A dance academy landing page created with React.js, hooks, CSS, and React Icons offers dynamic content and smooth navigation, featuring sections like About Us, Classes, and Instructors. React hooks manage state efficiently, while React Icons and CSS ensure a visually engaging and responsive design.",
    btn: (
      <a
        href="https://solodance.netlify.app/"
        target="_blank"
        className="flex flex-row items-center"
      >
        <FaExternalLinkAlt className="mx-1" /> Visit
      </a>
    ),
  },

  {
    title: "Portfolio",
    Tech: "Reactjs, Tailwind, React-Hooks",
    discription:
      "I created my portfolio website using React.js, Tailwind CSS, and React hooks to deliver a modern, responsive design with smooth interactivity. The site highlights my web development skills and showcases my projects and experience effectively.",
    btn: (
      <a href="#home" className="flex flex-row items-center" target="_blank">
        <FaExternalLinkAlt className="mx-1" /> Visit
      </a>
    ),
  },
];

export { projectData };
