import React, { useMemo } from "react";
import { motion } from "framer-motion";

import images from "./images";
import Parallax from "./Paralax";
import SectionHeader from "../../Helpers/SectionHeader";
import { StaticImageData } from "next/image";

const Slider = ({ messages }: any) => {
  const baseVelocity: number = -50;

  const renderImages = useMemo(() => {
    return images.map((image: StaticImageData, id: number) => {
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
    <div id="services" className="mx-auto w-full">
      <SectionHeader
        topTitle={messages.sliderSection.sectionTitle}
        botTitle={messages.sliderSection.title}
        delay={2}
        textBackgroundElementWidth={"18%"}
        staggerChildren={0.05}
      />
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
  );
};

export default Slider;
