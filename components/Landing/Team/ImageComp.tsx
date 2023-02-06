import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageComp = ({
  imageInView,
  image,
  className,
  transformX,
  transformY,
  delay,
  imageHeight,
}: any) => {
  return (
    <motion.div
      className={`absolute drop-shadow-2xl ${className}`}
      style={{
        transform: imageInView
          ? "none"
          : `translateY(${transformY}) translateX(${transformX})`,
        opacity: imageInView ? 1 : 0,
        transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      <Image
        loading="lazy"
        placeholder="blur"
        className={`${imageHeight} rounded-3xl`}
        src={image}
        alt=""
        width={1000}
        height={1000}
      />
    </motion.div>
  );
};

export default ImageComp;
