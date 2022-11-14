import React from "react";
import demo from "../../assets/demo.mp4";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center lg:px-36 md:px-16 mt-40 z-10">
      <div className="flex flex-col text-center lg:text-left text-white lg:mr-6 px-4 lg:px-0 mb-8 space-y-8">
        <h1 className="text-7xl font-bold w-84">
          Use <span className="text-teal-500">AIOT</span> to solve your problem
        </h1>
        <p className="text-lg font-light text-neutral-100 w-[28rem] border-l-4 pl-4 border-teal-500">
          All-Link is a new generation of smart home products, which can be used
          to control the home appliances through the mobile phone APP
        </p>
        <button
          className="btn btn-outline w-40 border-teal-500 text-lg text-white hover:bg-teal-500 hover:border-teal-500"
          onClick={() => navigate("/contactUs")}
        >
          聯絡我們
        </button>
      </div>
      <video src={demo} className="lg:w-[36rem] w-[28rem]" controls />
    </div>
  );
};

export default Hero;
