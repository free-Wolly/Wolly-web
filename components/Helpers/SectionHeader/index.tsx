import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import AnimateText from "./AnimateText";
import { SectionHeaderProps } from "./interfaces";

const SectionHeader = ({
  topTitle,
  botTitle,
  delay,
  textBackgroundElementWidth,
  staggerChildren,
}: SectionHeaderProps): JSX.Element => {
  const mainRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(mainRef);

  return (
    <div ref={mainRef}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={
          headerInView && { y: 0, opacity: 1, transition: { duration: 1 } }
        }
        className="text-center text-[28px] text-wollyBlue font-[BOG] mb-[25px] mt-[50px]"
        style={{ textShadow: "0px 3px 6px #00000029" }}
      >
        {topTitle}
      </motion.div>
      <div
        className="flex justify-center leading-none overflow-hidden text-[18px] sm:text-[30px] md:text-[36px] lg:text-[46px] xl:text-[52px] text-[#304D63] font-[GEOCAPS] mb-[2rem]"
        style={{ textShadow: "0px 3px 6px #00000029" }}
      >
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
