import React from "react";
import introStyles from "./Intro.module.css";
import { motion } from "framer";
import { AnimatedText } from "../../Helpers/TextAnimation/AnimateText";
import rollingTextStyle from "./IntroRollText.module.css";

export const Intro = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <div className={introStyles.introMain}>
      <div className="container mx-auto px-4">
        <div>
          <video
            className={introStyles.introVideo}
            autoPlay
            muted
            loop
            src="/assets/videos/clean.mp4"
          />
        </div>
        <motion.img
          className={introStyles.introArrow}
          src="/assets/images/down-arrow.svg"
          alt=""
          width={30}
          height={30}
          whileHover={{ scale: 1.5, rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="text-5xl font-bold text-center pb-40"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center flex-col">
              <AnimatedText text="Framer Motion" />
              <div className={rollingTextStyle.roller}>
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
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
