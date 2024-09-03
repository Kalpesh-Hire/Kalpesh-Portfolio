import React from "react";
import { MdPermIdentity } from "react-icons/md";
import Resume from "../../public/Kalpesh-Hire Resume.pdf";
import { PiCertificateFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineReadMore } from "react-icons/md";
import avtar from "../../public/Avatar.png";

function About() {
  return (
    <>
      <div
        id="about"
        className=" max-w-screen-2xl md:mb-9 container mx-auto px-4 md:px-20 py-20"
      >
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h3 className="text-xl font-sm text-center mb-5">Introduction</h3>
          <h2 className=" text-4xl font-bold text-center mb-12">
            <span className="text-orange-400">About </span>Me
          </h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <img
              src={avtar}
              className="w-72 h-80 rounded-3xl object-cover mb-8 md:mb-0"
              alt=""
            />
            <div className="flex-1">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl ">
                <li className="hover:shadow-lg hover:shadow-indigo-500/50 hover:translate-y-0 hover:duration-500 border-[0.5px] border-gray-400 rounded-xl p-6">
                  <MdPermIdentity className="my-2 font-semibold text-4xl text-black" />
                  <p className=" my-1 font-semibold text-gray-700">
                    Name: <span className="mx-2">Kalpesh Hire</span>
                  </p>
                  <p className=" my-1 font-semibold text-gray-700">
                    Email: <br />
                    <span className="text-sm">
                      <a href="kalpeshhire102050@gmail.com">
                        kalpeshhire102050@gmail.com
                      </a>
                    </span>
                  </p>
                  <p className="my-1 font-semibold text-gray-700">
                    Phone: <span className="mx-2">+91 9767777200</span>
                  </p>
                  <button className="my-4 text-black border border-black hover:border-blue-500 hover:text-blue-700 duration-700 rounded-xl p-1">
                    <a href={Resume} download="Resume">
                      Resume
                    </a>
                  </button>
                </li>

                <li className="hover:shadow-lg hover:shadow-indigo-500/50 hover:translate-y-0 hover:duration-500 border-[0.5px] border-gray-400 rounded-xl p-5">
                  <PiCertificateFill className=" my-2 font-semibold text-4xl text-black" />
                  <h1 className=" my-5 font-semibold text-gray-700">
                    {" "}
                    Bachelor's degree in Computer Applications
                  </h1>
                  <div className="flex mt-10 justify-between">
                    <button className="mt-7 text-black border border-black hover:border-blue-500 hover:text-blue-700 duration-700 rounded-xl p-1">
                      <a href={Resume} download="Resume">
                        Resume
                      </a>
                    </button>
                    <button className="mt-7 text-black border border-black hover:border-blue-500 hover:text-blue-700 duration-700 rounded-xl p-1">
                      <a href="#skills">Skills</a>
                    </button>
                  </div>
                </li>

                <li className="hover:shadow-lg hover:shadow-indigo-500/50 hover:translate-y-0 hover:duration-500 border-[0.5px] border-gray-400 rounded-xl p-5">
                  <FaBriefcase className=" my-2 font-semibold text-4xl text-black" />
                  <h1 className=" my-5 mb-10 font-semibold text-gray-700">
                    {" "}
                    Built more than 5 projects
                  </h1>
                  <button className=" mt-10 text-black border border-black hover:border-blue-500 hover:text-blue-700 duration-700 rounded-xl p-1">
                    <a
                      href="#portfolio"
                      className="flex items-center justify-items-center"
                    >
                      Read <MdOutlineReadMore className="text-xl" />
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default About;

{
  /* <p className="text-lg mb-10">
              Hello! I'm Kalpesh Hire, a passionate Web Developer with a strong
              foundation in HTML, CSS, and JavaScript. I specialize in building
              responsive and dynamic user interfaces using frameworks like
              React.js, Tailwind CSS, Bootstrap, and Material UI. With a
              Bachelor's degree in Computer Applications and hands-on experience
              from my internship at Octanet Services Pvt Ltd, I've developed and
              refined my skills in front-end development.
            </p> */
}
