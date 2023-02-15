import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../../Helpers/TextAnimation/AnimateText";
import rollingTextStyle from "./IntroRollText.module.css";
import handleClickScroll from "../../../utils/scrollToSection";
import { arrowVariant, letterContainer } from "./variants";

const Intro = () => {
  return (
    <div id="main" className="relative w-full h-screen flex items-end">
      <div className="container mx-auto px-4">
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
          className="absolute left-0 right-0 bottom-[50px] mx-auto visible cursor-pointer"
          onClick={() => handleClickScroll("second-section")}
          src="/assets/images/down-arrow.svg"
          alt=""
          width={30}
          height={30}
          whileHover="hover"
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="text-5xl font-bold text-center pb-40"
          initial="hidden"
          animate="visible"
          variants={letterContainer}
        >
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center flex-col">
              <AnimatedText text="Framer Motion" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8 } }}
                className={rollingTextStyle.roller}
              >
                <span id={rollingTextStyle.rolltext}>
                  HTML
                  <br />
                  CSS
                  <br />
                  Curiosity
                  <br />
                  <span id={rollingTextStyle.spare_time}>
                    too much spare time?
                  </span>
                  <br />
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
