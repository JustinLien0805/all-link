import React from "react";
import chooseModel from "./img/chooseModel.jpeg";
import orderIndex from "../Specification/img/orderIndex.jpeg";
import Footer from "../../components/Footer";
const Document = () => {
  return (
    <div className="w-screen flex flex-col bg-[#B4BFB7]">
      <div className="w-full flex flex-col justify-center items-center py-40">
        <h2 className="text-5xl text-center text-black font-bold mb-8">
          如何選型
        </h2>
        <div className="border-t-4 border-[#005C7C] mb-12 w-12" />
        <img src={chooseModel} alt="choose model" className="w-2/3" />
        <img src={orderIndex} alt="order index" className="w-2/3" />
      </div>
      <Footer />
    </div>
  );
};

export default Document;
