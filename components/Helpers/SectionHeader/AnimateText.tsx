import React from "react";
import { motion } from "framer-motion";
import { letterAni } from "./variants";

const AnimateText = ({
  title,
  delay,
  inView,
  textBackgroundElementWidth,
  staggerChildren,
}: any) => {
  const banner = {
    animate: {
      transition: {
        staggerChildren,
      },
    },
  };
  return (
    <motion.span
      variants={banner}
      initial="initial"
      animate={inView && "animate"}
      className="relative flex whitespace-pre-wrap"
    >
      {[...title].map((letter, id) => (
        <motion.span key={id} variants={letterAni} className="z-10">
          {letter}
        </motion.span>
      ))}
      <motion.div
        initial={{ display: "none", width: 0 }}
        animate={
          inView && { display: "block", width: textBackgroundElementWidth }
        }
        transition={{ delay, duration: 1 }}
        className="absolute right-0 bottom-0 rounded-[100px] bg-gradient-to-r from-[#00BCD4] to-[#7FD3E6] mr-[-5px] lg:mr-[-10px] h-[10px] sm:h-[16px] md:h-[20px] lg:h-[24px] xl:h-[28px] z-0"
      />
    </motion.span>
  );
};

export default AnimateText;
