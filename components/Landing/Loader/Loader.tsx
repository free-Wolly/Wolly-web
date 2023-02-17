import { motion } from "framer-motion";
import React from "react";
import ImageBlock from "./ImageBlock";
import { imageContainer, itemMain } from "./variants";

const Loader = ({ setLoading }: any) => {
  return (
    <motion.div className="absolute inset-0 origin-center flex justify-center items-center overflow-hidden">
      <motion.div
        variants={imageContainer}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ImageBlock
          imgName="1"
          className="w-[400px] left-[4%] bottom-[28%] lg:left-[16%] lg:bottom-[14%]"
        />
        <motion.div
          variants={itemMain}
          className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center"
        >
          <motion.video
            layoutId="main-image-1"
            src={`/assets/videos/clean.mp4`}
            style={{ width: "800px" }}
          />
        </motion.div>
        <ImageBlock
          imgName="2"
          className="w-[300px] right-[4%] top-[16%] lg:right-[15%] lg:top-[8%]"
        />
        <ImageBlock
          imgName="3"
          className="max-w-[400px] w-[40%] right-[6%] bottom-[32%] lg:right-[20%] lg:bottom-[10%]"
        />
        <ImageBlock
          imgName="4"
          className="w-[280px] left-[6%] top-[18%] lg:left-[14%] lg:top-[12%]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
