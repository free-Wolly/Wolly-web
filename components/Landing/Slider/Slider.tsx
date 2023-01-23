import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import images from "./images";
import { ParallaxText } from "./Paralax";

export const Slider = () => {
  const renderImages = useMemo(() => {
    return images.map((image, id: number) => {
      return (
        <motion.div className="p-10 sm:min-w-25 min-h-30 min-w-full" key={id}>
          <Image
            loading="lazy"
            placeholder="blur"
            className="w-full h-full rounded-3xl pointer-events-none"
            src={image}
            alt=""
          ></Image>
        </motion.div>
      );
    });
  }, []);

  return (
    <div className="mx-auto border-t-2">
      <div className="text-center text-3xl font-bold py-16">Slider Section</div>
      <ParallaxText baseVelocity={-2}>{renderImages}</ParallaxText>
    </div>
  );
};
