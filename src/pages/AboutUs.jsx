import React from "react";
import Footer from "../components/Footer";
const AboutUs = () => {
  return (
    <div className="w-screen flex flex-col">
      <div className="flex w-full lg:h-screen lg:pb-0 pb-40 pt-40 lg:px-36 px-4 relative text-black bg-[#B4BFB7]">
        <div className="flex flex-col justify-start items-start w-full h-full space-y-8 z-10">
          <h2 className="text-5xl font-bold border-l-4 pl-4 border-[#005C7C]">
            關於我們
          </h2>
          <div className="text-lg md:text-xl opacity-80 space-y-5">
            <p>
              歐林克科技是一群在信息界、工業界 ， 擁有數十年
              實務經驗的精英組成的團隊公司設在台北
            </p>
            <p>
              由於掌握管理、研發、 製造、營銷、工業產品現場實務經驗
              ，深刻了解個人、企業無法切入 IOT 物聯網的痛點，
              歐林克期許要為此投入一份心力歐林克 科技研發多年 ，
              推出了IOT裝置取名物聯通
            </p>
            <p>
              ALL-LINK物聯通我們想要跟它互動的任何裝置或設備鏈接
              起來無論多遠都能掌握訊息 ， 並且給於指令及時對策
            </p>
            <p>
              小小裝置就能將設備狀態 ， 無論溫度、壓力、流量、PH、重量、
              照度、電壓、電流.... 各種的物理數據 ， 都能轉換成動態管理 曲線 ，
              實時展現在您的眼前
            </p>
            <p>
              物聯通同時也可將數據存在雲端服務器及記憶卡上最快每 5秒取樣一次 ，
              可將歷史數據轉換為趨勢圖隨時查詢
            </p>
            <p>
              歐林克竭力將IOT的操作變為簡單 ， 不需要大投資也不需要
              特別訓練它就像使用ROUTER路由器一樣容易上手物聯通就是
              用您的手機隨時掌控遠方設備訊息的瑞士刀
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
