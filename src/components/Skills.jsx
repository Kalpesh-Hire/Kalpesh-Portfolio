import React from "react";
import { iconsFront, iconsTech, iconsLib } from "../Data/Icons";

function Skills() {
  return (
    <>
      <div
        id="skills"
        className="scroll-mt-10 max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
      >
        <div className="container mx-auto px-8">
          <h3 className="text-xl font-sm text-center mb-5">See</h3>
          <h2 className=" text-4xl font-bold text-center mb-12">
            My <span className="text-violet-500">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 md:flex-row space-x-2 items-center justify-center md:w-full w-[400px] h-full">
            {/* Languages */}
            <div className="hover:shadow-lg hover:shadow-indigo-500/50 hover:translate-y-0 hover:duration-500 flex flex-col my-2 items-center border-[2px] rounded-xl py-2 border-gray-500 h-[230px]">
              <h1 className="my-6 text-xl md:text-xl ">
                Programming Languages
              </h1>
              <ul className="flex">
                {iconsFront.map(({ icons, title, id }) => (
                  <li className="" key={id}>
                    <h1 className="hover:translate-y-2 hover:duration-500 text-3xl md:text-4xl md:p-3 border-[2px] rounded-full mx-6  p-2 cursor-pointer ">
                      {icons}
                    </h1>
                    <h1 className="text-sm my-3 mx-2 md:mx-6">{title}</h1>
                  </li>
                ))}
              </ul>
            </div>
            {/* Library and frameworks */}
            <div className="hover:shadow-lg hover:shadow-indigo-500/50 hover:translate-y-0 hover:duration-500 flex flex-col my-2 items-center border-[2px] rounded-xl py-2 border-gray-500 h-[230px]">
              <h1 className="my-6 text-xl md:text-xl">
                Library and Frameworks
              </h1>
              <ul className="flex">
                {iconsLib.map(({ icons, title, id }) => (
                  <li className="" key={id}>
                    <h1 className="text-3xl md:mx-6 md:text-4xl md:p-3 border-[2px] rounded-full mx-6 p-2 cursor-pointer hover:translate-y-2 duration-500">
                      {icons}
                    </h1>
                    <h1 className="text-sm my-3 mx-5 md:mx-6">{title}</h1>
                  </li>
                ))}
              </ul>
            </div>
            {/* Technologies */}
            <div className="hover:shadow-lg hover:shadow-indigo-500/50 hover:translate-y-0 hover:duration-500 flex flex-col my-2 items-center border-[2px] rounded-xl py-2 border-gray-500 h-[230px]">
              <h1 className="my-6 text-xl md:text-xl">Technologies</h1>
              <ul className="flex space-x-2">
                {iconsTech.map(({ icons, title, id }) => (
                  <li className="" key={id}>
                    <h1 className="text-3xl md:mx-4 md:text-4xl md:p-3 border-[2px] rounded-full mx-6 p-2 cursor-pointer hover:translate-y-2 duration-500">
                      {icons}
                    </h1>
                    <h1 className="text-sm my-3 mx-5 md:mx-6">{title}</h1>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
