// Page layout for Product and Specification pages

import React from "react";
import Footer from "./Footer";
const PageLayout = ({ name, img }) => {
  return (
    <div className="w-screen flex flex-col bg-[#B4BFB7]">
      <div className="w-full flex flex-col justify-center items-center py-20 px-4">
        <h2 className="md:text-5xl text-4xl text-center text-black font-bold mb-8">
          {name}
        </h2>
        <div className="border-t-4 border-[#005C7C] md:mb-12 mb-4 w-12" />
        <img src={img} alt="spec sheet" className="md:w-2/3 w-full" />
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
