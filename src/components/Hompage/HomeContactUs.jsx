import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { AiOutlinePhone, AiOutlineLink, AiOutlineMail } from "react-icons/ai";
const variant = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
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
      className="flex w-full sm:h-[30rem] lg:px-36 px-4 mt-20 mb-40 relative text-black"
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
    >
      {/* watermark */}
      <h2 className="absolute -right-20 top-0 xl:text-[16rem] text-[12rem] font-bold opacity-20 text-white hidden sm:block">
        Contact Us
      </h2>
      <div className="flex flex-col sm:justify-end items-end w-full h-full space-y-8 z-10 ml-auto">
        <h2 className="text-5xl font-bold">聯絡我們</h2>
        <div className="sm:text-2xl text-base font-bold border-r-4 pr-4 border-[#005C7C] flex flex-col text-right">
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
    </motion.div>
  );
};

export default HomeContactUs;
