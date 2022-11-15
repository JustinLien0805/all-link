import React from "react";
import feature from "../../assets/productFeature.jpeg";
import Footer from "../../components/Footer";
const ProductFeature = () => {
  return (
    <>
      <div className="w-screen flex flex-col bg-[#B4BFB7]">
        <div className="w-full flex flex-col justify-center items-center py-40">
          <h2 className="text-5xl text-center text-black font-bold mb-8">
            產品特色
          </h2>
          <div className="border-t-4 border-[#005C7C] mb-12 w-12" />
          <img src={feature} alt="feature" className="w-2/3" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductFeature;
