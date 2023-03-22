import React, { useMemo, useRef } from "react";
import { useInView } from "framer-motion";
import ImageComp from "./ImageComp";
import imageProps from "./constants";
import SectionHeader from "../../Helpers/SectionHeader";
import { ImagePropsInt } from "./interfaces";

const Team = (): JSX.Element => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const imagesInView: boolean = useInView(imagesRef, { once: true });

  const renderImageComps = useMemo(() => {
    return imageProps.map((image: ImagePropsInt, id: number) => {
      return (
        <ImageComp
          key={id}
          imageInView={imagesInView}
          image={image.image}
          className={image.className}
          transformX={image.transformX}
          transformY={image.transformY}
          delay={image.delay}
          imageHeight={image.imageHeight}
        />
      );
    });
  }, [imagesInView]);

  return (
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4">
      <SectionHeader
        topTitle="ბლოგი"
        botTitle="გაეცანი სიახლეებს ჩვენთან"
        delay={2}
        textBackgroundElementWidth="32%"
        staggerChildren={0.05}
      />
      <div className="w-full flex flex-col lg:flex-row gap-16 mb-16">
        <div ref={imagesRef} className="relative w-full h-112 lg:w-4/6 ">
          {renderImageComps}
        </div>
        <div className="flex flex-col items-center w-full lg:w-2/6 pt-12">
          <div className="text-center text-[30px] font-bold font-[GEOCAPS] text-[#304D63] pb-8 ">
            დივნის ალაგება
          </div>
          <div className="text-[23px] font-[BOG] text-[#304D63] text-center">
            ლორემ იპსუმ დივნის ალაგება ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ ლორემ
            იპსუმ ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ დივნის ალაგება ლორემ იპსუმ
            ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ ლორემ
            იპსუმ დივნის ალაგება
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
