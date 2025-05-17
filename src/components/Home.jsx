import React from "react";
import Avatar from "../../public/Avatar.png";
import { ReactTyped } from "react-typed";
import Profile from "../../public/Profile picture.png";
import prf from "../../public/IMG-20230301-WA0005-EDIT.jpg";
import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Kalpesh Hire | Web Developer Portfolio</title>
        <meta
          name="description"
          content="I am Kalepesh Hire, a React developer specializing in modern web design using React, Tailwind, and more."
        />
        <meta
          name="keywords"
          content="Kalpesh Hire, React Developer, Frontend Portfolio, Web Developer"
        />
        <meta name="author" content="Kalpesh Hire" />
        <meta
          property="og:image"
          content="https://kalpesh-hire.github.io/Kalpesh-Portfolio/Kalpesh Hire.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kalpesh Hire",
      "url": "https://kalpesh-hire.github.io/Kalpesh-Portfolio/",
      "sameAs": [
        "https://github.com/Kalpesh-Hire",
        "https://www.linkedin.com/in/kalpeshhire/"
      ],
      "jobTitle": "Frontend Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      }
    }
  `,
          }}
        />
      </Helmet>

      <div
        id="home"
        className=" scroll-mt-10 max-w-screen-2xl container mx-auto md:mb-60 px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-xl md:text-3xl ">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                strings={["Kalpesh Hire", "Front-end Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                className="text-red-600 font-bold"
              />
            </div>
            <br />
            <p className="text-sm font-bold md:text-md text-justify">
              I’m Kalpesh Hire, a web developer skilled in HTML, CSS,
              JavaScript, React.js, Tailwind CSS, Bootstrap, and Material UI. I
              combine these technologies to make dynamic, user-friendly websites
              and applications that are highly responsive. My goal is to turn
              creative ideas into functional, high-quality web solutions.
            </p>
            <br />
            {/* Social media icon */}
            <div className="flex justify-between items-center md:flex-row flex-col space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.instagram.com/hire_kalpesh?igsh=Y3F0YTkwOXNpcjQ1"
                      target="_blank"
                    >
                      <FaInstagram className="text-xl text-red-600 md:text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/kalpesh-hire-29b662235"
                      target="_blank"
                    >
                      <FaLinkedin className="text-xl text-blue-700 md:text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Kalpesh-Hire" target="_blank">
                      <FaGithub className="text-xl md:text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <FaFacebook className="text-xl text-blue-700 md:text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <FaYoutube className="text-xl text-red-500 md:text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <FaHtml5 className="text-xl text-orange-600 cursor-pointer md:text-3xl hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <FaJs className="text-xl text-yellow-600 cursor-pointer md:text-3xl hover:scale-110 duration-200 " />
                  </li>
                  <li>
                    <FaReact className="text-xl text-sky-600 cursor-pointer md:text-3xl hover:scale-110 duration-200 " />
                  </li>
                  <li>
                    <RiTailwindCssFill className="text-xl text-blue-600 cursor-pointer md:text-3xl hover:scale-110 duration-200 " />
                  </li>
                  <li>
                    <FaBootstrap className="text-xl text-violet-600 cursor-pointer md:text-3xl hover:scale-110 duration-200 " />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 mt-8 md:mt20 order-1">
            <img
              src={Avatar}
              className="rounded-full md:w-[400px] md:h-[400px] animation"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
