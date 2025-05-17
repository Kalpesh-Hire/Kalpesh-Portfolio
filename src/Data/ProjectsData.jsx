import { FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {
    title: "Clinic Management Sysytem",
    Tech: "React,Bootstrap,Spring,Java, JWT",
    discription:
      "The Clinic Management System is a full-stack web application designed to streamline administrative and clinical operations. Built using React for the frontend and Spring Boot with Java for the backend, it features secure authentication via JWT, patient and doctor management, appointment scheduling, and responsive UI with Bootstrap.",
    btn: (
      <a
        href="https://clinic.xformtechnologies.com/"
        target="_blank"
        className="flex flex-row items-center"
      >
        <FaExternalLinkAlt className="mx-1" /> Visit
      </a>
    ),
  },
  {
    title: "Spotify Clone- MusicRe",
    Tech: "React, contextAPI, Tailwind",
    discription:
      "MusicRay is a Spotify clone built with React.js, Context API for state management, and Tailwind CSS for styling, offering a sleek and responsive music streaming experience. It features dynamic playlists, song controls, and a modern UI.",
    btn: (
      <a
        href="https://musicray.netlify.app/"
        target="_blank"
        className="flex flex-row items-center"
      >
        <FaExternalLinkAlt className="mx-1" /> Visit
      </a>
    ),
  },
  {
    title: "Educator- An E-Learning Platform",
    Tech: "React, contextAPI, Tailwind, useClerk",
    discription:
      "Developed Educator, an e-learning platform using React.js, Tailwind CSS, and useContext for state management Implemented authentication using Clerk and managed routing with React Router for seamless navigation.",
    btn: (
      <a
        href="https://learneducator.netlify.app/"
        target="_blank"
        className="flex flex-row items-center"
      >
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
    title: "Dance Academy",
    Tech: "Html, css, js, bootstrap",
    discription:
      "A dance academy website showcases various dance classes, schedules, and instructor profiles, helping users explore and enroll in programs. Built using HTML, CSS, and JavaScript, it offers smooth navigation and engaging visuals for a vibrant, user-friendly experience. The platform also features online registration and event announcements, making it easy to join and stay updated on dance activities.",
    btn: (
      <a
        href="https://github.com/Kalpesh-Hire"
        className="flex flex-row items-center"
      >
        <FaExternalLinkAlt className="mx-1" /> Visit
      </a>
    ),
  },
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
];

export { projectData };
