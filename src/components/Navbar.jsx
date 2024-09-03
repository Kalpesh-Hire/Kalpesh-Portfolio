import React, { useEffect, useState } from "react";
import Profile from "../../public/Profile picture.png";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      navLinks: <a href="#home">Home</a>,
    },
    {
      id: 2,
      navLinks: <a href="#about">About</a>,
    },
    {
      id: 3,
      navLinks: <a href="#portfolio">Portfolio</a>,
    },
    {
      id: 4,
      navLinks: <a href="#experience">Experience</a>,
    },
    {
      id: 5,
      navLinks: <a href="#skills">Skills</a>,
    },
    {
      id: 6,
      navLinks: <a href="#contact">Contact</a>,
    },
  ];
  const [navBg, setNavbg] = useState("bg-white");
  const [scrollStop, setScrollStop] = useState(false);

  // function to handle scroll events
  const changeNavbarColor = () => {
    if (window.scrollY) {
      setNavbg("bg-transparent");
      setScrollStop(true);
    } else {
      setNavbg("bg-white");
      setScrollStop(false);
    }
  };

  // function to handle when scrolling stops
  const handleScrollStop = () => {
    if (scrollStop) {
      setNavbg("bg-white"); // make it transparent when scrolling stops
      setScrollStop(false);
    }
  };

  useEffect(() => {
    let scrollTimer;

    // Add scroll event listener
    window.addEventListener("scroll", changeNavbarColor);

    // Add a listener to detect when scrolling stops
    const onScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(handleScrollStop, 150);
    };

    window.addEventListener("scroll", onScroll);

    // cleanup event listeners
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollStop]);

  return (
    <>
      <div
        className={`max-w-screen-2xl ${navBg} transition-colors duration-500 ease-in-out container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0`}
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={Profile} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Kalpesh Hire <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, navLinks }) => (
                <li
                  className="nav-link tracking-[1px] hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  {navLinks}
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {!menu ? <MdMenu size={24} /> : <IoMdClose size={24} />}
            </div>
          </div>
        </div>
        {/* Mobile navbar */}
        {menu && (
          <div>
            <ul className="md:hidden p-3 bg-slate-100 backdrop-blur-2xl opacity-90 flex flex-col items-center justify-center space-y-4">
              {navItems.map(({ id, navLinks }) => (
                <li
                  className="hover:scale-105  duration-200 cursor-pointer text-xl font-semibold space-y-3"
                  key={id}
                >
                  {navLinks}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
