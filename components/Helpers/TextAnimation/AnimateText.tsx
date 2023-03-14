import React from "react";
import { motion } from "framer-motion";
import { banner, letterAni, textBackground } from "./constants";
import { AnimatedTextProps } from "./interfaces";

const AnimatedText = ({
  title,
  disabled,
  side,
}: AnimatedTextProps): JSX.Element => {
  const style: string =
    "text-[4rem] sm:text-[8rem] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-medium relative tracking-tighter flex whitespace-nowrap lg:leading-[30vh] z-10";

  return (
    <motion.span
      className={`${style} row-title`}
      style={{ textShadow: "0px 3px 6px #00000029" }}
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
      {side && (
        <motion.div
          variants={textBackground}
          initial="hidden"
          animate="show"
          className="absolute right-0 top-[calc(50%+10px)] md:top-[calc(50%+30px)] rounded-[100px] bg-[#00BCD4] mr-[-20px] h-[28px] sm:h-[32px] md:h-[40px] lg:h-[48px] xl:h-[80px] z-[0]"
        />
      )}
    </motion.span>
  );
};

export default AnimatedText;
