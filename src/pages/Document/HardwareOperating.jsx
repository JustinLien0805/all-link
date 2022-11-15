import React from "react";
import Footer from "../../components/Footer";
import hardwareSwitch from "./img/hardwareSwitch.jpeg";
import { CiRouter } from "react-icons/ci";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoPhonePortraitOutline, IoSettingsOutline } from "react-icons/io5";

import { MdOutlineRestartAlt } from "react-icons/md";
const HardwareOperating = () => {
  return (
    <>
      <div className="w-screen flex flex-col bg-[#B4BFB7]">
        <div className="flex px-36">
          <div className="w-1/3 flex flex-col justify-start items-start py-40 text-black space-y-8">
            <h2 className="text-5xl font-bold border-l-4 pl-4 border-[#005C7C]">
              硬體操作
            </h2>

            <ul className="menu p-4 w-52 bg-[#69736c] text-base-content rounded-lg">
              <li>
                <a className="active:bg-teal-500 hover:bg-[#28302A] text-white">
                  開關位置
                </a>
              </li>
              <li>
                <a className="active:bg-teal-500 hover:bg-[#28302A] text-white">
                  OLED操作顯示
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-full py-32 ml-8 space-y-16">
            {/* <h2 className="text-6xl font-bold text-black">開關位置及 oled 畫面顯示說明</h2>
          <img src={hardwareSwitch} alt="spec sheet" className="w-full" /> */}
            <h2 className="text-6xl font-bold text-black">OLED操作顯示</h2>
            <div className="grid grid-cols-3 grid-flow-row gap-4 font-bold text-2xl text-white">
              <div className="grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center">
                <IoPhonePortraitOutline className="w-20 h-20" />
                <h3>單機版</h3>
              </div>
              <div className="grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center">
                <CiRouter className="w-20 h-20" />
                <h3>內網版</h3>
              </div>
              <div className="grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center">
                <AiOutlineCloudUpload className="w-20 h-20" />
                <h3>雲端版</h3>
              </div>
              <div className="grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center">
                <IoSettingsOutline className="w-20 h-20" />
                <h3>參數設定</h3>
              </div>
              <div className="grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center">
                <MdOutlineRestartAlt className="w-20 h-20" />
                <h3>回復出廠设定前</h3>
              </div>
              <div className="grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center">
                <MdOutlineRestartAlt className="w-20 h-20" />
                <h3>回復出廠设定後</h3>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HardwareOperating;
