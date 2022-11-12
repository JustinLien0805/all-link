import { BiLineChart, BiPlug, BiBookBookmark } from "react-icons/bi";


const HomeFeature = () => {
  return (
    <div className="flex items-center justify-center space-x-12 text-black">
      <div className="flex flex-col justify-start items-center w-72 h-72 space-y-2">
        <BiPlug className="h-40 w-40" />
        <h2 className="text-2xl font-bold text-teal-500">連網</h2>
        <p className="text-center text-lg">
          任何廠牌，只要提供RS-485串口或 4~20mA、0~5V輸出，即可使用
        </p>
      </div>
      <div className="flex flex-col justify-start items-center w-72 h-72 space-y-2">
        <BiLineChart className="h-40 w-40" />
        <h2 className="text-2xl font-bold text-teal-500">監測</h2>
        <p className="text-center text-lg">每5秒呈現遠方遠方設備數據於手機</p>
      </div>
      <div className="flex flex-col justify-start items-center w-72 h-72 space-y-2">
        <BiBookBookmark className="h-40 w-40" />
        <h2 className="text-2xl font-bold text-teal-500">紀錄</h2>
        <p className="text-center text-lg">將設備運轉紀錄長期紀錄做成履歷</p>
      </div>
    </div>
  );
};

export default HomeFeature;
