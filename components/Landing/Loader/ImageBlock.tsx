import { motion } from "framer-motion";
import React from "react";
import { item } from "./variants";

const ImageBlock = ({
  imgName,
  className,
}: {
  imgName: string;
  className: string;
}) => {
  return (
    <>
      <motion.img
        variants={item}
        src={`/assets/images/sliderImages/${imgName}.jpg`}
        className={`absolute ${className}`}
      />
    </>
  );
};

export default ImageBlock;
