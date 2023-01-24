import { AnimatePresence, motion } from "framer";
import React, { useState } from "react";
import { variants } from "./constants";

export const SlideShow = ({ images }: any) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <div className="m-auto w-full aspect-video relative overflow-hidden rounded-2xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          className="w-full"
          key={images[index]}
          custom={direction}
        >
          {images[index]}
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute top-2/4 left-2 translate-y-[-50%]"
        onClick={prevStep}
      >
        ◀
      </button>
      <button
        className="absolute top-2/4 right-2 translate-y-[-50%]"
        onClick={nextStep}
      >
        ▶
      </button>
    </div>
  );
};
