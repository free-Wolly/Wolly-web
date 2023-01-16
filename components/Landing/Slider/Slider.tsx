import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer";
import Image from "next/image";
import images from "./images";

export const Slider = () => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    setSliderWidth(
      sliderRef.current.scrollWidth - sliderRef.current.offsetWidth
    );
  }, []);

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
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 border-t-2">
      <div className="text-center text-3xl font-bold py-16">Slider Section</div>
      <motion.div
        ref={sliderRef}
        className="cursor-grab overflow-hidden "
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -sliderWidth }}
          className="flex"
        >
          {renderImages}
        </motion.div>
      </motion.div>
    </div>
  );
};
