import React from "react";
import Footer from "../components/Footer";
import { AiOutlinePhone, AiOutlineLink, AiOutlineMail } from "react-icons/ai";
const ContactUs = () => {
  return (
    <div className="w-screen flex flex-col bg-[#B4BFB7]">
      <div className="flex w-full h-[30rem] px-36 mt-20 mb-40 relative text-black">
        {/* watermark */}
        <h2 className="absolute -right-20 top-0 text-[18rem] font-bold opacity-20 text-white">
          Contact Us
        </h2>
        <div className="flex flex-col justify-end items-end w-full h-full space-y-8 z-10 ml-auto">
          <h2 className="text-5xl font-bold">聯絡我們</h2>
          <div className="text-2xl border-r-4 pr-4 border-[#005C7C] flex flex-col text-right">
            <p className="flex items-center justify-end">
              <AiOutlinePhone className="mr-2" />
              手機： 從台灣地區 0926114084 李經理
            </p>
            <p className="flex items-center justify-end">
              <AiOutlinePhone className="mr-2" />
              手機： 從大陸地區 +886926114084 李經理
            </p>
            <p className="flex items-center justify-end">
              <AiOutlineLink className="mr-2" />
              網址： http://www.alllinker.net
            </p>
            <p className="flex items-center justify-end">
              <AiOutlineMail className="mr-2" />
              信箱： service@alllinker.net
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
