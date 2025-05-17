import React from "react";
import { iconsFront, iconsTech, iconsLib } from "../Data/Icons";

function Skills() {
  return (
    <>
      <div
  id="skills"
  className="scroll-mt-10 max-w-screen-2xl container mx-auto md:px-20 py-20"
>
  <div className="container mx-auto">
    <h3 className="text-xl font-sm text-center mb-5">See</h3>
    <h2 className="text-4xl font-bold text-center mb-12">
      My <span className="text-violet-500">Skills</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch justify-center">
      
      {/* Languages */}
      <div className="hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-500 flex flex-col items-center border-2 rounded-xl p-4 border-gray-500">
        <h1 className="mb-4 text-xl text-center">Programming Languages</h1>
        <ul className="flex flex-wrap justify-center gap-4">
          {iconsFront.map(({ icons, title, id }) => (
            <li key={id} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl p-3 border-2 rounded-full cursor-pointer hover:translate-y-2 transition duration-300">
                {icons}
              </div>
              <span className="text-sm mt-2">{title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Library and Frameworks */}
      <div className="hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-500 flex flex-col items-center border-2 rounded-xl p-4 border-gray-500">
        <h1 className="mb-4 text-xl text-center">Library and Frameworks</h1>
        <ul className="flex flex-wrap justify-center gap-4">
          {iconsLib.map(({ icons, title, id }) => (
            <li key={id} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl p-3 border-2 rounded-full cursor-pointer hover:translate-y-2 transition duration-300">
                {icons}
              </div>
              <span className="text-sm mt-2">{title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-500 flex flex-col items-center border-2 rounded-xl p-4 border-gray-500">
        <h1 className="mb-4 text-xl text-center">Technologies</h1>
        <ul className="flex flex-wrap justify-center gap-4">
          {iconsTech.map(({ icons, title, id }) => (
            <li key={id} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl p-3 border-2 rounded-full cursor-pointer hover:translate-y-2 transition duration-300">
                {icons}
              </div>
              <span className="text-sm mt-2">{title}</span>
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
