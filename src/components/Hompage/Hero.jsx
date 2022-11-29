import React from "react";
import demo from "../../assets/demo.mp4";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex lg:flex-row justify-center items-center flex-col lg:px-36 md:px-16 md:pt-20 md:mt-20 pt-36 z-10">
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
      <video
        src={demo}
        className="lg:w-[36rem] sm:w-[28rem] w-[20rem] z-50"
        controls
      />
      <div className="absolute -bottom-24 left-0 w-full overflow-hidden bg-[#b4bfb7] ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-[100px] md:h-[225px] w-[140%]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#28302A]"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
