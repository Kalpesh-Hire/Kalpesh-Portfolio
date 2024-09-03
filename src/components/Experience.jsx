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
          <h2 className=" text-4xl font-bold text-center mb-12">
            My <span className="text-blue-400"> Experience</span>
          </h2>
          <div className="flex justify-center items-center">
            <div className="bg-sky-50 hover:shadow-lg hover:shadow-indigo-500/50 hover:translate-y-1 hover:duration-500 cursor-pointer flex flex-col md:flex-row  space-x-5 items-center justify-center">
              <FaIndustry className="text-6xl md:mx-3 m-3 text-blue-600 rounded-sm" />

              <div className=" p-3 max-w-2xl space-y-3 flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl md:text-2xl">
                  Web developer Internship
                </h1>
                <h3 className="flex flex-col justify-center items-center">
                  July 2024 - Sept-2024
                  <span className="bg-white p-1 font-semibold rounded-lg">
                    Octanet Services Pvt Ltd
                  </span>
                </h3>
                <p className="text-justify w-auto mx-9">
                  “Completed a Web Developer internship at Octanet Services Pvt
                  Ltd, specializing in building responsive and dynamic web
                  applications using React.js, Tailwind CSS, Bootstrap, and
                  Material UI.”
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
