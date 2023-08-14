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
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-purple-800">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
              <div className="c1 w-[12px] h-[12px] rounded-full bg-blue-300 border-2 border-blue-300"></div>
              <div className="line w-[230px] bg-blue-300 h-[2px] sm:w-[250px]"></div>
              <div className="c2 w-[12px] h-[12px] rounded-full bg-blue-300 border-2 border-blue-300"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-purple-800 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Universisdad del Valle
                </span>
                <span className=" text-[.9rem] font-semibold text-purple-800 sm:text-base">
                  June 2020 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  During my time at the university, I have had the opportunity to gain valuable knowledge and develop crucial skills for my academic and professional growth. Through a wide range of courses and projects, I have delved into various fields of study and have been actively involved in activities that have enriched my education and perspective.
                  <li>Web Development Projects.</li>
                 <li>Programming Learning.</li>
                  <li>Involvement in Clubs and Communities.</li>
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
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-purple-800">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
              <div className="c1 w-[12px] h-[12px] rounded-full bg-blue-300 border-2 border-blue-300"></div>
              <div className="line w-[230px] bg-blue-300 h-[2px] sm:w-[250px]"></div>
              <div className="c2 w-[12px] h-[12px] rounded-full bg-blue-300 border-2 border-blue-300"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-purple-800 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Systems engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Universidad del Valle, Udemy, Platzi, Google, Sena, etc.
                </span>
                <span className=" text-[.9rem] font-semibold text-purple-800 sm:text-base">
                  Year 2023 - Year 2027
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                My path in systems engineering education has been an enriching experience that has given me a solid foundation of knowledge and skills in the world of technology and systems. Throughout my academic career, I have had the opportunity to explore a variety of fields and apply theoretical concepts in challenging, practical projects.
                <li>Software Development and Programming</li>
                <li>Engineering Projects and Real Challenges</li>
                <li>Emerging Technologies and Trends</li>
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
