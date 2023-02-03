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
    <div className="mx-auto w-full border-t-2">
      <div className="text-center text-3xl font-bold py-16">Slider Section</div>
      <motion.div className="whitespace-nowrap flex flex-nowrap ">
        <motion.div
          ref={(ref) =>
            ref?.scrollTo(ref?.scrollWidth / 2 - ref.clientWidth / 2, 0)
          }
          className="overflow-auto whitespace-nowrap flex flex-nowrap hideScroll"
        >
          {renderImages}
          {renderImages}
          {renderImages}
          {renderImages}
        </motion.div>
      </motion.div>
    </div>
  )
}
