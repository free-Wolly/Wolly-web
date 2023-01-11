import React from "react";
import introStyles from "./Intro.module.css";
import { motion } from "framer";

export const Intro = () => {
  return (
    <div className={introStyles.introMain}>
      <div className="Container">
        <div>
          <video
            className={introStyles.introVideo}
            autoPlay
            muted
            loop
            src="/videos/clean.mp4"
          />
        </div>
        <motion.img
          className={introStyles.introArrow}
          src="/images/down-arrow.svg"
          alt=""
          width={30}
          height={30}
          whileHover={{ scale: 1.5, rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};
