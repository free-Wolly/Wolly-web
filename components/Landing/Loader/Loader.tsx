import { motion } from "framer-motion";
import React from "react";
import ImageSplitter from "./ImageSplitter";
import { imageContainer, itemMain } from "./variants";

const Loader = ({ setLoading }: any) => {
  const wait = () => {
    setTimeout(() => {
      setLoading(false);
    }, 900);
  };

  return (
    <motion.div className="absolute inset-0 origin-center flex justify-center items-center overflow-hidden bg-[#09191CB8]">
      <motion.div
        variants={imageContainer}
        onAnimationComplete={() => wait()}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div
          variants={itemMain}
          className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center"
        >
          <ImageSplitter src="/assets/images/video-image.png" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
