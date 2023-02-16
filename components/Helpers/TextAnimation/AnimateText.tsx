import React from "react";
import { motion } from "framer-motion";
import { banner, letterAni } from "./constants";

const AnimatedText = ({ title, disabled }: any) => {
  const style =
    "text-[4rem] sm:text-[8rem] lg:text-[12rem] xl:text-[18rem] font-medium relative tracking-tighter flex whitespace-nowrap lg:leading-[30vh]";

  return (
    <motion.span
      className={`${style} row-title`}
      variants={disabled ? undefined : banner}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter, id) => (
        <motion.span
          key={id}
          className={style}
          variants={disabled ? undefined : letterAni}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
