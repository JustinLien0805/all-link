import React from "react";
import demo from "../assets/demo.mp4";
const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center lg:px-36 md:px-16 mt-32 z-10">
      <div className="flex flex-col text-center lg:text-left text-white lg:mr-8 px-4 lg:px-0 mb-8">
        <h1 className="text-5xl font-bold mb-4 uppercase">
          Use AIOT to Solve Your Problem
        </h1>
        <p className="text-lg font-light text-gray-400">
          All-Link is a new generation of smart home products, which can be used
          to control the home appliances through the mobile phone APP, and can
          also be used to control the home appliances through the voice of the
          mobile phone.
        </p>
      </div>

      <video src={demo} className="lg:w-[36rem] w-[28rem] " controls />
    </div>
  );
};

export default Hero;
