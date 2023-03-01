import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import AnimateText from "./AnimateText";

const SectionHeader = ({
  topTitle,
  botTitle,
  delay,
  textBackgroundElementWidth,
  staggerChildren,
}: any) => {
  const mainRef = useRef(null);
  const headerInView = useInView(mainRef);

  return (
    <div ref={mainRef}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={
          headerInView && { y: 0, opacity: 1, transition: { duration: 1 } }
        }
        className="text-center text-[28px] text-[#00BCD4] font-[BOG] mb-[25px] mt-[100px]"
      >
        {topTitle}
      </motion.div>
      <div className="flex justify-center leading-none overflow-hidden text-[52px] text-[#304D63] font-[GEOCAPS] mb-[70px]">
        <AnimateText
          title={botTitle}
          delay={delay}
          inView={headerInView}
          textBackgroundElementWidth={textBackgroundElementWidth}
          staggerChildren={staggerChildren}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
