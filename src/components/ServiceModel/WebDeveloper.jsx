import React from "react";
import { IoMdClose } from "react-icons/io";

function WebDeveloper({ onclose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          <button onClick={onclose} className="place-self-end text-3xl">
            <IoMdClose />
          </button>

          <div className="rounded-3xl w-[400px] md:w-[500px] flex flex-col justify-center items-center bg-white">
            <div className="flex flex-col space-y-3 mt-10 items-center">
              <h1 className="text-2xl">Web Development</h1>
              <p className="text-sm mx-20 text-center">
                I build well-structured, cross-browser compatible websites with
                a focus on performance
              </p>
            </div>
            <div className="m-10">
              <ul className="space-y-3 list-outside list-disc p-2">
                <li className="text-sm">
                  Strong foundation in HTML5 and CSS3.{" "}
                </li>
                <li className="text-sm">
                  Proficient in JavaScript for interactive web pages.
                </li>
                <li className="text-sm">
                  Experienced in responsive web design with media queries.
                </li>
                <li className="text-sm">
                  Skilled in version control with Git.
                </li>
                <li className="text-sm">
                  Knowledgeable in web performance optimization.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebDeveloper;
