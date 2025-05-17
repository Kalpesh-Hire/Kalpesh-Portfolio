import React from "react";
import { FaIndustry } from "react-icons/fa";

function Experience() {
  return (
    <>
       <div
        id="experience"
        className="scroll-mt-10 max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
      >
        <div className="container mx-auto px-8">
          <h3 className="text-xl font-sm text-center mb-5">Explore</h3>
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="text-blue-400">Experience</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Web Developer Internship */}
            <div className="bg-sky-50 hover:shadow-lg hover:shadow-indigo-500/50 hover:translate-y-1 hover:duration-500 cursor-pointer flex flex-col md:flex-row items-center justify-center p-4 rounded-xl">
              <FaIndustry className="text-6xl m-3 text-blue-600 rounded-sm" />
              <div className="p-3 space-y-3 flex flex-col justify-center items-center text-center">
                <h1 className="font-semibold text-xl md:text-2xl">
                  Web Developer Internship
                </h1>
                <h3 className="flex flex-col justify-center items-center">
                  <span className="text-sm text-gray-500">July 2024 - Sept 2024</span>
                  <span className="bg-white p-1 font-semibold rounded-lg">
                    Octanet Services Pvt Ltd
                  </span>
                </h3>
                <p className="text-justify w-auto mx-4 md:mx-6">
                  "Completed a Web Developer internship at Octanet Services Pvt
                  Ltd, specializing in building responsive and dynamic web
                  applications using React.js, Tailwind CSS, Bootstrap, and
                  Material UI."
                </p>
              </div>
            </div>

            {/* React Developer */}
            <div className="bg-sky-50 hover:shadow-lg hover:shadow-indigo-500/50 hover:translate-y-1 hover:duration-500 cursor-pointer flex flex-col md:flex-row items-center justify-center p-4 rounded-xl">
              <FaIndustry className="text-6xl m-3 text-blue-600 rounded-sm" />
              <div className="p-3 space-y-3 flex flex-col justify-center items-center text-center">
                <h1 className="font-semibold text-xl md:text-2xl">
                  React Developer
                </h1>
                <h3 className="flex flex-col justify-center items-center">
                  <span className="text-sm text-gray-500">Feb 2025 - Present</span>
                  <span className="bg-white p-1 font-semibold rounded-lg">
                    Xform Technologies Pvt Ltd
                  </span>
                </h3>
                <p className="text-justify w-auto mx-4 md:mx-6">
                  "Currently working as a React Developer at Xform Technologies
                  Pvt Ltd, where I focus on building scalable and responsive web
                  applications using React.js, Tailwind CSS, and modern UI
                  libraries. Previously completed a Web Development internship
                  at Octanet Services Pvt Ltd, gaining hands-on experience in
                  creating dynamic interfaces with React.js, Bootstrap, and
                  Material UI."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
