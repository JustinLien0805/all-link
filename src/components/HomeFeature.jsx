import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { BiLineChart, BiPlug, BiBookBookmark } from "react-icons/bi";

// fade in animation
const variant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.5 },
};

const HomeFeature = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  
  // animation start when in view
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      className="flex flex-col items-center"
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
    >
      <h2 className="text-5xl text-center text-black font-bold mt-20 mb-8">
        產品特色
      </h2>
      <div className="border-t-[1px] border-black mb-12 w-12" />
      <div className="flex items-center justify-center space-x-12">
        <div className="flex flex-col justify-start items-center w-72 h-72 space-y-2">
          <BiPlug className="h-40 w-40" />
          <h2 className="text-2xl font-bold">連網</h2>
          <p className="text-center text-lg">
            任何廠牌，只要提供RS-485串口或 4~20mA、0~5V輸出，即可使用
          </p>
        </div>
        <div className="flex flex-col justify-start items-center w-72 h-72 space-y-2">
          <BiLineChart className="h-40 w-40" />
          <h2 className="text-2xl font-bold">監測</h2>
          <p className="text-center text-lg">每5秒呈現遠方遠方設備數據於手機</p>
        </div>
        <div className="flex flex-col justify-start items-center w-72 h-72 space-y-2">
          <BiBookBookmark className="h-40 w-40" />
          <h2 className="text-2xl font-bold">紀錄</h2>
          <p className="text-center text-lg">將設備運轉紀錄長期紀錄做成履歷</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeFeature;
