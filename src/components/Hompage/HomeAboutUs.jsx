import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variant = {
  visible: { opacity: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0 },
};

const HomeAboutUs = () => {
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
      className="flex w-full py-40 px-36 my-20 relative text-white bg-black"
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
    >
      {/* watermark */}
      <h2 className="absolute -left-10 top-0 text-[18rem] font-bold opacity-[0.15]">
        About Us
      </h2>
      <div className="flex flex-col justify-start items-start w-full h-full  space-y-8 z-10">
        <h2 className="text-5xl font-bold">關於我們</h2>
        <p className="text-2xl w-2/3 border-l-4 pl-4 border-teal-500">
          歐林克科技是由一群在信息界/工業界，擁有數十年實務經驗的精英組成的團隊，
          歐林克竭力將AIOT操作變得簡單，無需大投資也無需特別訓練，它就像使用ROUTER路由器一樣上手，
          物聯通就是用您的手機隨時掌握遠方設備訊息的瑞士刀
        </p>
      </div>
    </motion.div>
  );
};

export default HomeAboutUs;
