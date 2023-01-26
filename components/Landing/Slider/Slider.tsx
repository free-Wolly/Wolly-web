import React, { useMemo } from "react";
import { motion } from "framer-motion";

import images from "./images";
import { Parallax } from "./Paralax";

export const Slider = () => {
  const baseVelocity = -50;

  const renderImages = useMemo(() => {
    return images.map((image, id: number) => {
      return (
        <Parallax
          key={id}
          image={image}
          baseVelocity={baseVelocity}
          id={id}
          qty={images.length}
        />
      );
    });
  }, [baseVelocity]);

  return (
    <div className="mx-auto w-full max-w-[2000px] border-t-2">
      <div className="text-center text-3xl font-bold py-16">Slider Section</div>
      <motion.div className="whitespace-nowrap flex flex-nowrap ">
        <motion.div className="overflow-auto whitespace-nowrap flex flex-nowrap">
          {renderImages}
        </motion.div>
      </motion.div>
    </div>
  );
};
