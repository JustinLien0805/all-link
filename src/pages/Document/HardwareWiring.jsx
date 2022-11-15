import React from "react";
import hardwareWiring1 from "./img/hardwareWiring1.jpeg";
import hardwareWiring2 from "./img/hardwareWiring2.jpeg";
import hardwareWiring3 from "./img/hardwareWiring3.jpeg";
import Footer from "../../components/Footer";
const HardwareWiring = () => {
  return (
    <div className="w-screen flex flex-col bg-[#B4BFB7]">
      <div className="w-full flex flex-col justify-center items-center py-40">
        <h2 className="text-5xl text-center text-black font-bold mb-8">
          電源接線圖
        </h2>
        <div className="border-t-4 border-[#005C7C] mb-12 w-12" />
        <img src={hardwareWiring1} alt="hw1" className="w-2/3 mb-20" />
        <h2 className="text-5xl text-center text-black font-bold mb-8">
          通信連接示意圖
        </h2>
        <div className="border-t-4 border-[#005C7C] mb-12 w-12 " />
        <img src={hardwareWiring2} alt="hw2" className="w-2/3 mb-20" />
        <h2 className="text-5xl text-center text-black font-bold mb-8">
          感測器連接示意圖
        </h2>
        <div className="border-t-4 border-[#005C7C] mb-12 w-12" />
        <img src={hardwareWiring3} alt="hw3" className="w-2/3 mb-20" />
      </div>
      <Footer />
    </div>
  );
};

export default HardwareWiring;
