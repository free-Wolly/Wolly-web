import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../../Helpers/TextAnimation/AnimateText";
import rollingTextStyle from "./IntroRollText.module.css";
import handleClickScroll from "../../../utils/scrollToSection";

const Intro = () => {
  const [loading, setLoading] = useState(true);

  const videoRef: any = useRef(null);

  useEffect(() => {
    !loading && videoRef.current.play();
  }, [loading]);

  const container = {
    visible: {
      transition: { staggerChildren: 0.025 },
    },
  };

  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 0.75,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0, 0.95],
        duration: 1.6,
      },
    },
  };

  const arrowVariant = {
    init: { opacity: 0, scale: 0, y: 100 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    hover: { scale: 1.5, rotate: 360 },
  };

  return (
    <>
      {loading ? (
        <div id="main" className="relative w-full h-screen flex items-center ">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              <motion.video
                variants={itemMain}
                onAnimationComplete={() => setLoading(false)}
                initial="hidden"
                animate="show"
                className="absolute object-fill lg:w-[800px] w-[300px]"
                ref={videoRef}
                src="/assets/videos/clean.mp4"
                layoutId="main-video"
              />
            </div>
          </div>
        </div>
      ) : (
        <div id="main" className="relative w-full h-screen flex items-end">
          <div className="container mx-auto px-4">
            <div>
              <motion.video
                transition={{ ease: [0.6, 0.01, 0, 0.95], duration: 1.6 }}
                className="object-fill absolute top-0 left-0 w-full h-screen"
                muted
                loop
                src="/assets/videos/clean.mp4"
                layoutId="main-video"
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
      )}
    </>
  );
};

export default Intro;
