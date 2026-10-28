import { FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {
    id: "merp-system",
    title: "MERP (Manufacturing & Enterprise Resource Planning)",
    category: "Full-Stack",
    domains: ["Full-Stack", "Backend", "Database"],
    Tech: "React.js, Tailwind CSS, Spring Boot, Java, MySQL, REST APIs, JWT",
    featured: true,
    priority: "Priority #1",
    challenge:
      "Integrating end-to-end manufacturing workflows, procurement, inventory synchronization, financial ledgers, and role-based departmental oversight into a unified enterprise portal.",
    architecture:
      "Enterprise full-stack ERP architecture built with a high-density React.js and Tailwind CSS frontend communicating with scalable Spring Boot REST microservices and normalized MySQL relational schemas.",
    keyDecisions: [
      "Modular enterprise modules for manufacturing, procurement, sales, and inventory management.",
      "Stateless role-based authorization ensuring granular access control for administrators, managers, and operators.",
      "Optimized transactional queries and reporting dashboards for high-throughput enterprise operations."
    ],
    discription:
      "An enterprise-grade Manufacturing & Enterprise Resource Planning (MERP) platform built with React.js, Tailwind CSS, and Spring Boot. Streamlines manufacturing operations, material procurement, bill of materials (BOM), supply chains, and departmental workflows with secure role-based access control and real-time operational reporting.",
    btn: (
      <a
        href="https://github.com/Kalpesh-Hire"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-1.5"
      >
        <FaExternalLinkAlt className="mx-1" /> View Project
      </a>
    ),
  },
  {
    id: "wms-system",
    title: "Warehouse Management System (WMS)",
    category: "Full-Stack",
    domains: ["Full-Stack", "Backend", "Database"],
    Tech: "React.js, Tailwind CSS, Spring Boot, Java, REST APIs, MySQL",
    featured: true,
    priority: "Priority #2",
    challenge:
      "Eliminating manual logistics bottlenecks by delivering automated, real-time inventory tracking, multi-warehouse stock routing, and supplier lifecycle visibility.",
    architecture:
      "Modern full-stack system utilizing React.js and Tailwind CSS on client dashboards, connected via performant Spring Boot REST endpoints for transactional stock transfers and live inventory queries.",
    keyDecisions: [
      "Modular data models for product, inventory, warehouse, stock, supplier, purchase, and order management.",
      "Optimized inventory workflows for stock receiving, inter-warehouse transfers, and order processing.",
      "Real-time stock level updates reducing human inventory error and operational delays."
    ],
    discription:
      "Developed a responsive Warehouse Management System using React.js, Tailwind CSS, and Spring Boot, streamlining warehouse operations with a user-friendly and scalable application architecture. Implemented modules for product, inventory, warehouse, stock, supplier, purchase, and order management with RESTful APIs. Engineered features for stock receiving, stock transfers, inventory tracking, order processing, and real-time stock updates, improving operational efficiency.",
    btn: (
      <a
        href="https://github.com/Kalpesh-Hire"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-1.5"
      >
        <FaExternalLinkAlt className="mx-1" /> View Project
      </a>
    ),
  },
  {
    id: "crm-system",
    title: "CRM (Customer Relationship Management)",
    category: "Full-Stack",
    domains: ["Full-Stack", "Backend", "Productivity"],
    Tech: "React.js, Tailwind CSS, Spring Boot, REST APIs, MySQL, JWT",
    featured: true,
    priority: "Priority #3",
    challenge:
      "Managing complex multi-stage lead conversion pipelines, client interaction histories, quotation generations, and sales rep performance metrics in real-time.",
    architecture:
      "Component-driven React.js client interface with Kanban-style deal boards and detailed customer profiles, communicating via secure Spring Boot REST endpoints with MySQL backend.",
    keyDecisions: [
      "Interactive lead tracking and deal pipeline stages with visual stage updates.",
      "Customer contact history, interaction logs, follow-up scheduling, and automated reminders.",
      "Quotation generation and sales conversion analytics with export capabilities."
    ],
    discription:
      "A comprehensive Customer Relationship Management (CRM) application built using React.js, Tailwind CSS, and Spring Boot. Features lead capture, multi-stage sales pipelines, customer communication logging, deal tracking, automated follow-up scheduling, and interactive analytics dashboards.",
    btn: (
      <a
        href="https://github.com/Kalpesh-Hire"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-1.5"
      >
        <FaExternalLinkAlt className="mx-1" /> View Project
      </a>
    ),
  },
  {
    id: "hrms-system",
    title: "HRMS (Human Resource Management System)",
    category: "Full-Stack",
    domains: ["Full-Stack", "Backend", "Productivity"],
    Tech: "React.js, Tailwind CSS, Spring Boot, REST APIs, MySQL, JWT, Context API",
    featured: true,
    priority: "Priority #4",
    challenge:
      "Consolidating employee directory management, attendance tracking, leave approval hierarchies, performance reviews, and automated payroll structures into a single intuitive portal.",
    architecture:
      "Role-partitioned full-stack portal with dedicated views for HR administrators, managers, and employees, powered by React.js frontend state and Spring Boot Java service layers.",
    keyDecisions: [
      "Role-based access control for employees, managers, and HR administrators.",
      "Comprehensive attendance logging, leave request and approval workflows.",
      "Automated payroll calculation, salary slip generation, and employee directory management."
    ],
    discription:
      "An enterprise Human Resource Management System (HRMS) developed with React.js, Tailwind CSS, and Spring Boot. Facilitates complete workforce management including employee onboarding, digital attendance tracking, leave requests and multi-level approvals, department hierarchy management, and automated payroll processing.",
    btn: (
      <a
        href="https://github.com/Kalpesh-Hire"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-1.5"
      >
        <FaExternalLinkAlt className="mx-1" /> View Project
      </a>
    ),
  },
  {
    id: "mahasewa-platform",
    title: "Mahasewa Platform",
    category: "Full-Stack",
    domains: ["Full-Stack", "Backend", "Database"],
    Tech: "React.js, Tailwind CSS, Spring Boot, Java, Razorpay, REST APIs, MySQL",
    featured: false,
    priority: "Featured Platform",
    challenge:
      "Building a multi-stakeholder portal coordinating housing societies, vendors, individual users, content administration, and billing workflows.",
    architecture:
      "Full-stack architecture built with React.js and Tailwind CSS on the frontend communicating through RESTful Spring Boot Java APIs, integrated with Razorpay gateway for automated invoice payments.",
    keyDecisions: [
      "Modular micro-architecture for vendor, society, and individual management.",
      "Razorpay payment gateway integration for automated billing, receipt generation, and secure payments.",
      "Digital catalog and content management for courses, books, and magazines."
    ],
    discription:
      "Developed a full-stack platform using React.js, Tailwind CSS, and Spring Boot, enabling seamless management of vendors, societies, and individual users through a responsive and user-friendly interface. Implemented vendor, society, and individual management modules, along with reusable React components and RESTful Spring Boot APIs. Integrated invoice management and Razorpay payment gateway, enabling secure online payments and streamlined billing workflows, while developing comprehensive course, book, and magazine management features.",
    btn: (
      <a
        href="https://github.com/Kalpesh-Hire"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-1.5"
      >
        <FaExternalLinkAlt className="mx-1" /> View Project
      </a>
    ),
  },
  {
    id: "clinic-management",
    title: "Clinic Management System",
    category: "Full-Stack",
    domains: ["Full-Stack", "Backend", "Database"],
    Tech: "React, Bootstrap, Spring Boot, Java, JWT, REST API, MySQL",
    featured: false,
    challenge:
      "Streamlining clinical schedules, patient medical records, and role-based staff operations with strict data privacy.",
    architecture:
      "React SPA frontend communicating via secure REST APIs with a Spring Boot Java backend, enforced by stateless JWT token authentication and role-based access control.",
    keyDecisions: [
      "Decoupled React client from Spring Boot backend for independent scalability.",
      "JWT stateless session validation with granular role guard rails.",
      "High-density administrative tables and appointment scheduling workflows."
    ],
    discription:
      "A full-stack enterprise web application designed to streamline administrative and clinical operations. Built using React for the interactive UI and Spring Boot with Java for the backend, it features secure JWT authentication, patient-doctor management, appointment scheduling, and responsive UI.",
    btn: (
      <a
        href="https://clinic.xformtechnologies.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-1.5"
      >
        <FaExternalLinkAlt className="mx-1" /> Visit Platform
      </a>
    ),
  },
  {
    id: "spotify-musicray",
    title: "Spotify Clone — MusicRay",
    category: "Frontend",
    domains: ["Frontend", "Real-Time / Audio"],
    Tech: "React.js, Context API, Tailwind CSS, Web Audio, Responsive UI",
    featured: false,
    challenge:
      "Managing persistent audio playback state across nested route transitions and dynamic playlist queues without stutter.",
    architecture:
      "Centralized Global Context state engine managing audio playback buffer, dynamic track scrubbing, volume normalization, and real-time playback updates.",
    keyDecisions: [
      "Context API state machine to eliminate prop-drilling across audio components.",
      "Custom CSS keyframe animations for audio equalizers and playback bars."
    ],
    discription:
      "MusicRay is a music streaming web application built with React.js, Context API for global state management, and Tailwind CSS for styling. It features dynamic playlist navigation, audio scrub controls, and a modern dark audio interface.",
    btn: (
      <a
        href="https://musicray.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-1.5"
      >
        <FaExternalLinkAlt className="mx-1" /> Visit Demo
      </a>
    ),
  },
  {
    id: "educator-elearning",
    title: "Educator — E-Learning Platform",
    category: "Full-Stack",
    domains: ["Full-Stack", "Auth & Integrations"],
    Tech: "React.js, Tailwind CSS, useContext, Clerk Auth, React Router",
    featured: false,
    challenge:
      "Delivering a seamless learning dashboard experience with secure multi-provider authentication and protected student routes.",
    architecture:
      "React SPA integrated with Clerk authentication SDK, protected client routing, course content browsing, and synchronized enrollment states.",
    keyDecisions: [
      "Clerk SDK integration for social login, session tokens, and user profile management.",
      "Dynamic routing and route guards for verified student content."
    ],
    discription:
      "An interactive e-learning platform using React.js, Tailwind CSS, and useContext. Implemented robust authentication with Clerk and managed seamless multi-route navigation using React Router.",
    btn: (
      <a
        href="https://learneducator.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-1.5"
      >
        <FaExternalLinkAlt className="mx-1" /> Visit Platform
      </a>
    ),
  },
  {
    id: "employee-management",
    title: "Employee Task Management",
    category: "Frontend",
    domains: ["Frontend", "Productivity"],
    Tech: "React.js, Context API, Tailwind CSS, Local Storage, Admin UI",
    featured: false,
    challenge:
      "Handling dual-perspective dashboard roles (Admin assigning tasks vs Employees updating task statuses) in real-time.",
    architecture:
      "State management system driven by React Context, enforcing role separation between task creators and task executors with feedback logs.",
    keyDecisions: [
      "Reactive task state updates with zero full-page reload lag.",
      "Categorized task status boards (Active, Completed, Failed, New)."
    ],
    discription:
      "A role-based employee task orchestration platform built using React, Tailwind CSS, and Context API. Enables administrators to assign tasks dynamically, while employees manage task lifecycles, mark completions, and supply feedback.",
    btn: (
      <a
        href="https://github.com/Kalpesh-Hire/EmployeeManagement.git"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-1.5"
      >
        <FaExternalLinkAlt className="mx-1" /> View Source
      </a>
    ),
  },
  {
    id: "job-portal-platform",
    title: "Full-Stack Job Portal",
    category: "Full-Stack",
    domains: ["Full-Stack", "Backend", "Database"],
    Tech: "PHP, JavaScript, HTML5, CSS3, Bootstrap, MySQL",
    featured: false,
    challenge:
      "Connecting job seekers with recruiters through structured job postings, application submissions, and database-backed candidate tracking.",
    architecture:
      "Server-side web architecture with MySQL database schemas, user authentication, and responsive candidate submission forms.",
    keyDecisions: [
      "Normalized relational schema for users, postings, and applications.",
      "Role-based dashboards for recruiters and applicants."
    ],
    discription:
      "A job portal platform connecting employers and candidates. Developed with PHP, JavaScript, Bootstrap, and MySQL, it features job searching, application tracking, and credential verification.",
    btn: (
      <a
        href="https://github.com/Kalpesh-Hire/JobPortal.git"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-1.5"
      >
        <FaExternalLinkAlt className="mx-1" /> View Source
      </a>
    ),
  },
  {
    id: "dance-academy-landing",
    title: "Dance Academy Landing Platform",
    category: "Frontend",
    domains: ["Frontend", "UI Engineering"],
    Tech: "React.js, CSS3, React Hooks, React Icons, Netlify",
    featured: false,
    challenge:
      "Creating fluid visual transitions and responsive course showcases tailored for an arts studio audience.",
    architecture:
      "Component-driven landing page with modular schedule sections, instructor spotlights, and interactive booking sections.",
    keyDecisions: [
      "State-driven tab navigation for weekly class timetables.",
      "High performance, lightweight bundle footprint."
    ],
    discription:
      "A dance studio landing application created with React.js, hooks, CSS, and React Icons. Delivers dynamic class schedules, instructor galleries, and interactive booking sections.",
    btn: (
      <a
        href="https://solodance.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-1.5"
      >
        <FaExternalLinkAlt className="mx-1" /> Visit Site
      </a>
    ),
  },
];

export { projectData };
