import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// fade in animation
const variant = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0 },
};
const FadeInLayout = ({ children, title }) => {
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
      className="flex flex-col items-center my-20 w-full px-36"
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
    >
      <h2 className="text-5xl text-center text-black font-bold mb-8">
        {title}
      </h2>
      <div className="border-t-4 border-[#005C7C] mb-12 w-12" />
      {children}
    </motion.div>
  );
};

export default FadeInLayout;
