import React, { useState } from "react";
import { motion } from "framer-motion";

import AnimatedText from "../../Helpers/TextAnimation/AnimateText";
import handleClickScroll from "../../../utils/scrollToSection";
import { arrowVariant, banner } from "./variants";
import Marquee from "./Marquee/Marquee";

const Intro = () => {
  return (
    <div id="main" className="relative w-full h-screen">
      <div className="mx-auto">
        <div className="absolute inset-0">
          <motion.video
            autoPlay
            loop
            muted
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: [0.06, 0.01, 0.05, 0.9],
              duration: 1.6,
            }}
            className="object-fill h-full w-full"
            src={`/assets/videos/clean.mp4`}
            layoutId="main-image-1"
          />
        </div>
        <motion.img
          variants={arrowVariant}
          initial="init"
          animate="animate"
          className="absolute left-0 right-0 bottom-[50px] mx-auto visible cursor-pointer z-[100]"
          onClick={() => handleClickScroll("second-section")}
          src="/assets/images/down-arrow.svg"
          alt=""
          width={30}
          height={30}
          whileHover="hover"
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="h-screen w-full overflow-hidden relative flex flex-col justify-center content-center "
          variants={banner}
        >
          <div className="overflow-hidden flex items-center mt-24 pl-8">
            <AnimatedText title={"brand"} />
          </div>
          <div className={"overflow-hidden flex "}>
            <Marquee title="experience" />
          </div>
          <div className={"overflow-hidden flex justify-end pr-8"}>
            <AnimatedText title={"studio"} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
