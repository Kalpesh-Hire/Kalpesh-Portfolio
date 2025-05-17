import React from "react";
import { IoMdClose } from "react-icons/io";

function FrontEnd({ onclose,modalRef }) {
  return (
    <>
      <div className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div ref={modalRef}  className="flex flex-col justify-center items-center ">
          <button onClick={onclose} className="place-self-end text-3xl">
            <IoMdClose />
          </button>

          <div className="rounded-3xl w-[400px] md:w-[500px] flex flex-col justify-center items-center bg-white">
            <div className="flex flex-col space-y-3 mt-10 items-center">
              <h1 className="text-2xl">Front-End Development</h1>
              <p className="text-sm mx-20 text-center">
                I create responsive and dynamic user interfaces that provide an
                enhanced user experience.
              </p>
            </div>
            <div className="m-10">
              <ul className="space-y-3 list-outside list-disc p-2">
                <li className="text-sm">
                  Skilled in building interfaces with React.js.
                </li>
                <li className="text-sm">
                  Proficient in Tailwind CSS and Bootstrap for styling
                </li>
                <li className="text-sm">
                  Experienced with React Hooks for state management.
                </li>
                <li className="text-sm">
                  Integrated third-party libraries and APIs effectively.
                </li>
                <li className="text-sm">
                  Focused on writing clean, maintainable code.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontEnd;
