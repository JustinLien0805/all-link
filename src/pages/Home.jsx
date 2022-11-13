import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HomeFeature from "../components/HomeFeature";
import PlanCard from "../components/PlanCard";
import FadeInLayout from "../components/FadeInLayout";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeContactUs from "../components/HomeContactUs";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-neutral-100">
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

      <div className="absolute flex flex-col items-center bg-neutral-100 w-full top-[100vh]">
        <FadeInLayout title="產品特色">
          <HomeFeature />
        </FadeInLayout>
        <FadeInLayout title="產品方案">
          <PlanCard />
        </FadeInLayout>
        <HomeAboutUs />
        <HomeContactUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
