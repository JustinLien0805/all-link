import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HomeFeature from "../components/HomeFeature";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-black relative overflow-y-scroll overflow-x-hidden">
      <NavBar />
      <Hero />
      <div class="absolute bottom-[10vh] left-0 w-full overflow-hidden bg-white">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-[225px] w-[calc(112% + 1.3px)]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-black"
          ></path>
        </svg>
      </div>

      <div className="absolute flex flex-col items-center bg-white w-full h-screen top-[90vh]">
        <HomeFeature />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
