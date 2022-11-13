import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variant = {
  visible: { opacity: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0 },
};

const HomeContactUs = () => {
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
      className="flex w-full h-[30rem] px-36 my-20 relative text-black"
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
    >
      {/* watermark */}
      <h2 className="absolute -right-10 top-0 text-[18rem] font-bold opacity-30 text-neutral-400">
        Contact Us
      </h2>
      <div className="flex flex-col justify-end items-end w-full h-full space-y-8 z-10 ml-auto">
        <h2 className="text-5xl font-bold">聯絡我們</h2>
        <div className="text-lg font-bold border-r-4 pr-4 border-teal-500 flex flex-col text-right">
          <p>手機： 從台灣地區 0926114084 李經理</p>
          <p>手機： 從大陸地區 +886926114084 李經理</p>
          <p>網址： http://www.alllinker.net</p>
          <p>信箱： service@alllinker.net</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeContactUs;
