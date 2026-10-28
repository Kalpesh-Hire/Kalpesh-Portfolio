import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectData } from "../Data/ProjectsData";
import { FiArrowUpRight, FiCode, FiLayers } from "react-icons/fi";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="portfolio" className="relative scroll-mt-20 py-20">
      <div className="max-w-6xl container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Project Showcase</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Detailed case studies and live interactive builds from my portfolio.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="px-2 sm:px-6">
          <Slider {...settings} className="project-slider">
            {projectData.map((project, index) => {
              // Parse tech stack items
              const techList = project.Tech
                ? project.Tech.split(",").map((t) => t.trim())
                : [];

              return (
                <div key={index} className="px-3 py-4 focus:outline-none">
                  <div className="bento-card rounded-3xl p-6 sm:p-7 h-[440px] flex flex-col justify-between group relative overflow-hidden">
                    
                    {/* Top status & counter */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                          0{index + 1}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-blue-400">
                          <FiCode />
                          <span>Case Study</span>
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed line-clamp-4">
                        {project.discription}
                      </p>
                    </div>

                    {/* Bottom: Tech Tags & Original Working Button */}
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 max-h-16 overflow-hidden">
                        {techList.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {techList.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400">
                            +{techList.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Button: Renders existing `btn` with original link & target */}
                      <div className="project-action-btn flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-xl bg-blue-600/90 hover:bg-blue-500 transition-colors shadow-md shadow-blue-500/20">
                          {project.btn}
                        </div>
                        <span className="text-slate-400 text-xs font-mono">
                          Explore &rarr;
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

      </div>
    </section>
  );
}

export default Projects;
