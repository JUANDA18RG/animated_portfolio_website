import React from "react";
import { AiOutlineGoogle, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Hoja de vida Juan David Ramirez Grismaldo in English.pdf";

const Hero = () => {
  return (
    <div
      id="home"
      className={` bg-gradient-to-t from-red-400 to-violet-500 flex items-center justify-center min-h-screen `}
    >
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem] animate-fade-right"
            >
              Hello, I'm Juan David Ramirez Grismaldo 👋🧨💥🤙
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Web Developer", 2000, "Systems Engineer", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-sky-300 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-emerald-300 sm:text-[.95rem]  animate-jump-in"
            >
              I am a young man on my way to be a systems engineer and web
              developer.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <div className="text-white  py-2 sm:px-8 rounded-lg font-bold  hover:text-red-500 cursor-pointer text-2xl animate-wiggle animate-infinite animate-ease-in-out">
              <span>Download my resume ➡️</span>
            </div>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-white hover:bg-black cursor-pointer "
              download
            >
              <div className="flex items-center gap-1">
                CV{" "}
                <span className="mb-1 text-lg">
                  <FiDownload />
                </span>
              </div>
            </a>
          </div>
          <div className="icons flex items-center gap-5 mt-5 sm:mt-2">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li className="bg-white rounded-full p-2 shadow-lg hover:scale-125 transition duration-300 cursor-pointer">
                <a href="https://github.com/JUANDA18RG" target="_blank">
                  {" "}
                  <AiFillGithub className="animate-fade-up h-[1.8rem] w-[1.8rem] text-xl hover:animate-jump " />{" "}
                </a>
              </li>
              <li className="bg-white rounded-full p-2 shadow-lg hover:scale-125 transition duration-300 cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/juan-david-ramirez-grismaldo-0633851a7/"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedinIn className="hover:animate-jump  h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  animate-fade-down" />{" "}
                </a>
              </li>
              <li className="bg-white rounded-full p-2 shadow-lg hover:scale-125 transition duration-300 cursor-pointer">
                <a
                  href="https://www.instagram.com/ramirezgrismaldo/"
                  target="_blank"
                >
                  {" "}
                  <AiFillInstagram className="hover:animate-jump h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  animate-fade-up " />{" "}
                </a>
              </li>
              <li className="bg-white rounded-full p-2 shadow-lg hover:scale-125 transition duration-300 cursor-pointer">
                <a
                  href="https://www.facebook.com/juanchacho.ramirezgrismaldo/ "
                  target="_blank"
                >
                  {" "}
                  <FaFacebook className="hover:animate-jump h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  animate-fade-down" />{" "}
                </a>
              </li>
              <li className="bg-white rounded-full p-2 shadow-lg hover:scale-125 transition duration-300 cursor-pointer">
                <a href="mailto:ramirezgrismaldo@example.com?subject=Hola JuanDa">
                  {" "}
                  <AiOutlineGoogle className="hover:animate-jump h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 animate-fade-up  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[80%] w-fit flex items-center sm:items-end animate-jump-in animate-ease-in-out animate-normal">
            <div className="rounded-full overflow-hidden w-96 h-96 md:w-96 md:h-96 border-4 border-white shadow-lg sm:w-80 sm:h-80">
              <img
                data-aos="fade-up"
                className="w-full h-full object-cover p-1 rounded-full animate-fade-left animate-duration-[900ms] animate-delay-[900ms] animate-ease-in-out animate-normal"
                src="https://i.postimg.cc/Cx2j9W1h/avatar.jpg"
                alt="me"
              />
            </div>
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer animate-jump-in animate-duration-[1200ms] animate-delay-[1200ms] animate-ease-in-out animate-normal"
              >
                <img
                  className=" w-[135px] md:w-[90px] circle-text "
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt="Logo"
                />
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
