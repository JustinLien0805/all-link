import React from "react";
import demo from "../../assets/demo.mp4";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex lg:flex-row justify-center items-center flex-col bg-[#28302A] lg:px-36 md:px-16 md:pt-20 pt-36 z-10">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white lg:mr-6 px-4 lg:px-0 mb-8 space-y-8 z-20">
        <h1 className="sm:text-7xl text-5xl font-bold w-84">
          Use <span className="text-teal-500">AIOT</span> to solve your problem
        </h1>
        <p className="text-lg font-light text-neutral-100 w-[28rem] border-l-4 pl-4 border-teal-500 hidden lg:block">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo facilis
          minima quod totam esse nemo accusamus tenetur
        </p>
        <button
          className="btn btn-outline w-52 border-teal-500 text-xl text-white hover:text-[#28302A] hover:bg-teal-500 hover:border-teal-500"
          onClick={() => navigate("/contactUs")}
        >
          聯絡我們
        </button>
      </div>
      <video src={demo} className="lg:w-[36rem] sm:w-[28rem] w-[28rem] z-50" controls/>
    </div>
  );
};

export default Hero;
