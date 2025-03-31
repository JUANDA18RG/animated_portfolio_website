import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-red-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-red-500 border-2 border-red-300 animate-pulse"></div>
                <div className="line w-[230px] bg-red-300 h-[2px] sm:w-[250px] animate-wiggle  animate-shake animate-infinite animate-duration-500 animate-delay-[900ms] animate-ease-in-out"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-red-500 border-2 border-red-300 animate-pulse"></div>
              </div>
              {/* design */}
              <div className="flex flex-col gap-1 sm:gap-1 border-2 border-red-500 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Developer
                </h1>

                <span className="text-[.9rem] font-semibold text-red-400 sm:text-base">
                  {Date().substring(4, 15)} - Present
                </span>
                <p className="text-[.9rem] text-justify break-words text-gray-500">
                  I have over 2 years of experience as a React developer,
                  specializing in building scalable and user-friendly web
                  applications. My expertise includes working with modern design
                  frameworks such as Tailwind CSS, Material-UI, and others. I
                  have successfully contributed to both freelance projects and
                  company collaborations, delivering high-quality solutions
                  tailored to client needs. Additionally, I have actively
                  participated in UI/UX design processes, collaborating on
                  designs in Figma and enhancing user experiences through
                  thoughtful design and functionality.
                  <ul className="list-disc pl-5 mt-2">
                    <li className="text-red-500">
                      Development of responsive and dynamic web applications.
                    </li>
                    <li>
                      Collaboration with design teams using Figma to create
                      intuitive interfaces.
                    </li>
                    <li className="text-red-500">
                      Focus on improving user experience and interface design.
                    </li>
                    <li>
                      Proficient in integrating modern design frameworks like
                      Tailwind CSS and Material-UI.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-red-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-red-500 border-2 border-red-300 animate-pulse"></div>
                <div className="line w-[230px] bg-red-300 h-[2px] sm:w-[250px] animate-shake animate-infinite animate-duration-500 animate-delay-[900ms] animate-ease-in-out"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-red-500 border-2 border-red-300 animate-pulse"></div>
              </div>
              {/* design */}
              <div className="flex flex-col gap-1 border-2 border-red-500 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Systems Engineer
                </h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Universidad del Valle, Udemy, Platzi, Google, Sena, etc.
                </span>
                <span className="text-[.9rem] font-semibold text-red-500 sm:text-base">
                  2020 - 2025
                </span>
                <p className="text-[.9rem] text-justify text-gray-500">
                  My journey in systems engineering has been a transformative
                  experience, providing me with a strong foundation in
                  technology and systems. Throughout my academic career, I have
                  explored various fields and applied theoretical knowledge to
                  practical, real-world projects. This education has equipped me
                  with the skills and expertise needed to excel in the tech
                  industry.
                  <ul className="list-disc pl-5 mt-2">
                    <li className="text-red-500">
                      Proficient in software development and programming.
                    </li>
                    <li>
                      Experience in managing engineering projects and solving
                      real-world challenges.
                    </li>
                    <li className="text-red-500">
                      Knowledge of emerging technologies and industry trends.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
