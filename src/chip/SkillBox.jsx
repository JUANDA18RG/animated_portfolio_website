import React from "react";

const SkillBox = ({ logo, black, white, skill }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className={`box w-[11rem] h-[11rem] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-4 p-1 sm:w-[7.2rem] sm:h-[7.2rem] exsm:w-[6.5rem] exsm:h-[6.5rem] border-4 border-red-500 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer ${
        black === "black" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`w-14 sm:w-12 exsm:w-10 h-14 sm:h-12 exsm:h-10 p-2 rounded-full flex items-center justify-center text-6xl sm:text-4xl ${
          white === "white" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {logo}
      </div>
      <p className="font-semibold exsm:text-sm">{skill}</p>
    </div>
  );
};

export default SkillBox;
