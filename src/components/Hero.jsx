import React from "react";
import demo from "../assets/demo.mp4";
const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center md:items-start items-center lg:px-36 md:px-16 mt-64 z-10">
      <div className="flex flex-col text-center lg:text-left text-white lg:mr-8 px-4 lg:px-0 mb-8">
        <h1 className="text-6xl font-bold mb-12 w-84">
          Use AIOT to solve your problem
        </h1>
        <p className="text-lg font-light text-gray-400 w-[28rem] border-l-4 pl-4">
          All-Link is a new generation of smart home products, which can be used
          to control the home appliances through the mobile phone APP
        </p>
      </div>

      <video src={demo} className="lg:w-[36rem] w-[28rem] " controls />
    </div>
  );
};

export default Hero;
