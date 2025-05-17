import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectData } from "../Data/ProjectsData";
import { Slide } from "react-awesome-reveal";
function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        id="portfolio"
        className="scroll-mt-10 max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
      >
        <div className="container mx-auto px-8">
          <h2 className=" text-4xl font-bold text-center mb-5">
            My <span className="text-green-500">Portfolio</span>
          </h2>
          <h3 className="text-xl font-sm text-center mb-5">Most recent work</h3>
          <Slider
            {...settings}
            className="slick-arrow before:text-blue-500 text-2xl"
          >
            {projectData.map(({ title, discription, Tech, btn }) => (
              <>
                <div className="h-[400px] mb-5 bg-slate-50 group mx-3 relative overflow-hidden shadow-md rounded-3xl p-3 flex flex-col space-y-2 items-center justify-center text-center">
                  <h1 className="text-xl md:text-2xl">{title}</h1>
                  <p className="text-base">Tech:- {Tech}</p>
                  <p className="text-xs">{discription}</p>
                  <p className="text-sm text-green-500">Click to visit</p>

                  {/* overlay */}
                  <div className="absolute top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] bg-red-500/50 w-full h-full group-hover:backdrop-blur-sm duration-500">
                    <Slide direction="up" duration={2000}>
                      {" "}
                      <button className="hover:text-white mt-32">{btn}</button>
                    </Slide>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Projects;
