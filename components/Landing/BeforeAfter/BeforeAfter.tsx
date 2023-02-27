import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { images, variants } from "./constants";

const BeforeAfter = ({ messages }: any) => {
  const [direction, setDirection] = useState(0);
  const [index, setIndex] = useState(0);

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

  const renderImages = useMemo(() => {
    return images.map((image, id) => {
      return (
        <motion.div
          key={id}
          variants={variants}
          initial="initial"
          animate="animate"
          className="w-full"
          custom={direction}
        >
          <BeforeAfterSlider
            className=" md:min-w-30 overflow-hidden"
            firstImage={{
              imageUrl: image.image1,
              alt: image.alt1,
            }}
            secondImage={{
              imageUrl: image.image2,
              alt: image.alt2,
            }}
            delimiterIconStyles={{
              width: 30,
              height: 30,
              backgroundSize: "cover",
              borderRadius: "none",
              backgroundImage: "url('/assets/images/gradient.jpg')",
            }}
          />
        </motion.div>
      );
    });
  }, [direction]);

  return (
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 overflow-auto">
      <div className="text-center text-3xl font-bold my-16">
        {messages.beforeAfter.title}
      </div>
      {/* Large Screen */}
      <div className="hidden lg:flex gap-16 overflow-auto pb-4">
        {renderImages}
      </div>
      {/* Mobile/Tablet Screen */}
      <div className="flex lg:hidden">
        <div className="m-auto w-full aspect-video relative overflow-hidden rounded-2xl">
          {renderImages[index]}
          <motion.img
            src={"/assets/images/arrow-right.svg"}
            alt=""
            className="absolute top-2/4 right-2 translate-y-[-50%] w-10 h-10 cursor-pointer"
            onClick={nextStep}
          />
          <motion.img
            src={"/assets/images/arrow-left.svg"}
            alt=""
            className="absolute top-2/4 left-2 translate-y-[-50%] w-10 h-10 cursor-pointer"
            onClick={prevStep}
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
