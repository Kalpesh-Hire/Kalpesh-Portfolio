import React, { useState } from "react";
import { SiPinboard } from "react-icons/si";
import { MdArrowRightAlt } from "react-icons/md";
import front from "../../public/fronEnd icon.svg";
import frontEnd from "../../public/frontEnd icon.png";
import web from "../../public/webdeveloper icon.svg";
import FrontEnd from "./ServiceModel/FrontEnd";
import WebDeveloper from "./ServiceModel/WebDeveloper";
function Services() {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showWebDeveloper, setShowWebDeveloper] = useState(false);
  return (
    <>
      <div
        id="experience"
        className="scroll-mt-10 max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
      >
        <div className="container mx-auto px-8">
          <h2 className=" text-4xl font-bold text-center mb-5">Services</h2>
          <h3 className="text-xl font-sm text-center mb-5">What i offer</h3>
          <div className="flex justify-center items-center ">
            <div className=" p-2 flex space-x-3">
              {/* front end */}
              <div className="border rounded-tl-3xl p-2 bg-white shadow-sm  w-50 md:w-60 ">
                <SiPinboard className="text-red-500 text-xl m-2" />
                <div className="pt-20 space-y-4 flex flex-col justify-center items-center mb-5">
                  <img src={frontEnd} alt="" className=" h-[60px] w-[60px]" />
                  <h1 className="text-xl font-bold text-gray-700 text-center">
                    Front-End Developer
                  </h1>
                  <button
                    onClick={() => setShowFrontend(true)}
                    className="text-gray-400 flex flex-row justify-center items-center hover:text-blue-500 duration-700 hover:scale-105"
                  >
                    Read more
                    <MdArrowRightAlt className="text-xl" />
                  </button>
                  {showFrontend && (
                    <FrontEnd onclose={() => setShowFrontend(false)} />
                  )}
                </div>
              </div>
              {/* Web developer */}
              <div className="border rounded-tl-3xl p-2 bg-white shadow-sm w-60 ">
                <SiPinboard className="text-red-500 text-xl m-2" />
                <div className="pt-20 space-y-7 md:space-y-4 flex flex-col justify-center items-center mb-5">
                  <img src={web} alt="" className="h-[60px] w-[60px]" />
                  <h1 className="text-xl font-bold text-gray-700  text-center">
                    Web Developer
                  </h1>
                  <button
                    onClick={() => setShowWebDeveloper(true)}
                    className="text-gray-400 flex flex-row justify-center items-center hover:text-blue-500 duration-700 hover:scale-105"
                  >
                    Read more
                    <MdArrowRightAlt className="text-xl" />
                  </button>
                  {showWebDeveloper && (
                    <WebDeveloper onclose={() => setShowWebDeveloper(false)} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
