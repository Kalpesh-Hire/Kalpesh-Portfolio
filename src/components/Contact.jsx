import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import Swal from "sweetalert2";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c5d1d1c2-cb5f-4cf7-9ffc-0c25b2e2a3e1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been successfully sent",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }

    setName("");
    setEmail("");
    setText("");
  };

  return (
    <>
      <div
        id="contact"
        className="scroll-mt-10 max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
      >
        <div className="container mx-auto px-8">
          <h2 className=" text-4xl font-bold text-center mb-5">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <h3 className="text-sm text-center mb-5">
            Let's talk about everything!
          </h3>
          <div className=" p-2 flex flex-col md:flex-row items-center space-x-8">
            {/* First block */}
            <div className=" w-1/2 space-y-6 flex flex-col justify-center items-center">
              {/* heading */}
              <div className="mx-3 text-center ">
                <h1 className="flex flex-col  text-xl font-bold text-blue-400">
                  Don't be shy !{" "}
                  <span className="text-base text-green-300 my-1 font-bold">
                    Let's Connect!
                  </span>
                </h1>
              </div>

              <p className="text-sm text-center mx-3 md:w-[500px] w-[300px]">
                I’d love to hear from you! Whether you have a project in mind, a
                question, or just want to say hello, drop me a message below.
                I'll respond quickly to help turn your ideas into reality.
              </p>

              {/* email&phone */}
              <div className="flex flex-col">
                <p className="flex items-center space-x-2">
                  <MdEmail className="text-xl" />
                  <a href="kalpeshhire102050@gmail.com">
                    kalpeshhire102050@gmail.com
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <MdCall className="text-xl" />{" "}
                  <a href="+91 9767777200">+91 9767777200</a>
                </p>
              </div>

              {/* Icons */}
              <div className="flex mx-9">
                <ul className="flex space-x-4">
                  <li>
                    <a href="https://wa.link/p7ea2a" target="_blank">
                      <FaWhatsappSquare className="text-green-500 text-3xl hover:scale-105 duration-500" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTelegram className="text-blue-400 text-3xl hover:scale-105 duration-500" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/kalpesh-hire-29b662235"
                      target="_blank"
                    >
                      <FaLinkedin className="text-blue-500 text-3xl hover:scale-105 duration-500" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/hire_kalpesh?igsh=Y3F0YTkwOXNpcjQ1"
                      target="_blank"
                    >
                      <FaInstagram className="text-red-500 text-3xl hover:scale-105 duration-500" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Form */}
            <div className="m-10 z-0 w-full md:w-[500px]">
              <form onSubmit={onSubmit}>
                <div className="pt-0 mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    name="name"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                  />
                </div>
                <div className="pt-0 mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    name="email"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                  />
                </div>
                <div className="pt-0 mb-3">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Your message"
                    name="message"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                  />
                </div>
                <div className="pt-0 mb-3 flex justify-center">
                  <button
                    className=" flex group duration-300 items-center hover:shadow-lg focus:outline-none px-6 py-2 mb-1 text-sm font-bold hover:text-white uppercase transition-all ease-linear hover:bg-blue-500 rounded shadow outline-none"
                    type="submit"
                  >
                    Send a message{" "}
                    <IoIosSend className="mx-1 text-blue-500 duration-300 group-hover:text-white text-xl" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
