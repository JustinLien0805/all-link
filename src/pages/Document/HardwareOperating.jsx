import { useState } from "react";
import Footer from "../../components/Footer";
import hardwareSwitch from "./img/hardwareSwitch.jpeg";
import { CiRouter } from "react-icons/ci";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoPhonePortraitOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineRestartAlt } from "react-icons/md";
import v1 from "./video/v1.mp4";
import v2 from "./video/v2.mp4";
import v3 from "./video/v3.mp4";
import v4 from "./video/v4.mp4";
import v5 from "./video/v5.mp4";

const HardwareOperating = () => {
  const [showSwitch, setShowSwitch] = useState(true);
  const [video, setVideo] = useState("");

  return (
    <>
      <div className="w-screen flex flex-col bg-[#B4BFB7]">
        <div className="flex lg:px-36 px-4 lg:flex-row flex-col items-start justify-start ">
          <div className="lg:w-1/3 flex flex-col justify-start items-start lg:py-40 py-20 text-black space-y-8">
            <h2 className="text-5xl font-bold border-l-4 pl-4 border-[#005C7C]">
              硬體操作
            </h2>
            {/* show when lg */}
            <ul className="menu p-4 w-52 bg-[#69736c] text-base-content rounded-lg hidden lg:block">
              <li onClick={() => setShowSwitch(true)}>
                <a className="active:bg-teal-500 hover:bg-[#28302A] text-white">
                  開關位置
                </a>
              </li>
              <li onClick={() => setShowSwitch(false)}>
                <a className="active:bg-teal-500 hover:bg-[#28302A] text-white">
                  OLED操作顯示
                </a>
              </li>
            </ul>
            {/* show when under lg */}
            <div className="dropdown lg:hidden w-full">
              <label
                tabIndex={0}
                className="btn m-1 w-full bg-[#28302A] text-white"
              >
                選單
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-4 w-52 bg-[#69736c] text-base-content rounded-lg"
              >
                <li onClick={() => setShowSwitch(true)}>
                  <a className="active:bg-teal-500 hover:bg-[#28302A] text-white">
                    開關位置
                  </a>
                </li>
                <li onClick={() => setShowSwitch(false)}>
                  <a className="active:bg-teal-500 hover:bg-[#28302A] text-white">
                    OLED操作顯示
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* modal for videos */}
          <input type="checkbox" id="modal1" className="modal-toggle z-30" />
          <label htmlFor="modal1" className="modal cursor-pointer">
            <label
              className="modal-box relative flex items-center justify-center"
              htmlFor=""
            >
              <video src={video} controls className="h-96"></video>
            </label>
          </label>
          <div className="flex flex-col w-full lg:py-32 lg:ml-8 space-y-16 pb-16">
            {showSwitch ? (
              <>
                <h2 className="lg:text-6xl text-3xl sm:text-4xl font-bold text-black">
                  開關位置及 oled 畫面顯示說明
                </h2>
                <img src={hardwareSwitch} alt="spec sheet" className="w-full" />
              </>
            ) : (
              <>
                <h2 className="lg:text-6xl text-3xl sm:text-4xl font-bold text-black">
                  OLED操作顯示
                </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row gap-4 font-bold text-2xl text-white">
                  <label
                    htmlFor="modal1"
                    className="btn grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center
                     hover:scale-105 cursor-pointer shadow-lg font-bold text-2xl text-white"
                    onClick={() => {
                      setVideo(v1);
                    }}
                  >
                    <IoPhonePortraitOutline className="w-20 h-20" />
                    <h3>單機版</h3>
                  </label>
                  <label
                    htmlFor="modal1"
                    className="btn grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center
                     hover:scale-105 cursor-pointer shadow-lg font-bold text-2xl text-white"
                    onClick={() => {
                      setVideo(v2);
                    }}
                  >
                    <CiRouter className="w-20 h-20" />
                    <h3>內網版</h3>
                  </label>
                  <label
                    htmlFor="modal1"
                    className="btn grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center
                     hover:scale-105 cursor-pointer shadow-lg font-bold text-2xl text-white"
                    onClick={() => {
                      setVideo(v3);
                    }}
                  >
                    <AiOutlineCloudUpload className="w-20 h-20" />
                    <h3>雲端版</h3>
                  </label>
                  <label
                    htmlFor="modal1"
                    className="btn grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center
                     hover:scale-105 cursor-pointer shadow-lg font-bold text-2xl text-white"
                    onClick={() => {
                      setVideo(v4);
                    }}
                  >
                    <IoSettingsOutline className="w-20 h-20" />
                    <h3>參數設定</h3>
                  </label>
                  <label
                    htmlFor="modal1"
                    className="btn grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center
                     hover:scale-105 cursor-pointer shadow-lg font-bold text-2xl text-white"
                    onClick={() => {
                      setVideo(v5);
                    }}
                  >
                    <MdOutlineRestartAlt className="w-20 h-20" />
                    <h3>回復出廠设定前</h3>
                  </label>
                  <label
                    htmlFor="modal1"
                    className="btn grow h-60 rounded-lg bg-[#28302A] flex flex-col space-y-2 items-center justify-center
                     hover:scale-105 cursor-pointer shadow-lg font-bold text-2xl text-white"
                    onClick={() => {
                      setVideo(v5);
                    }}
                  >
                    <MdOutlineRestartAlt className="w-20 h-20" />
                    <h3>回復出廠设定前</h3>
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HardwareOperating;
