import React from "react";
import Hero from "../components/Hompage/Hero";
import Footer from "../components/Footer";
import HomeFeature from "../components/Hompage/HomeFeature";
import PlanCard from "../components/Hompage/PlanCard";
import FadeInLayout from "../components/Hompage/FadeInLayout";
import HomeAboutUs from "../components/Hompage/HomeAboutUs";
import HomeContactUs from "../components/Hompage/HomeContactUs";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center bg-[#b4bfb7] w-full">
        <div className="mt-36">
          <FadeInLayout title="產品特色">
            <HomeFeature />
          </FadeInLayout>
        </div>
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
