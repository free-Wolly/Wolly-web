import React, { useMemo, useRef } from "react";
import { useInView } from "framer";
import { ImageComp } from "./ImageComp";
import { imageProps } from "./constants";

export const Team = () => {
  const imagesRef = useRef(null);
  const imagesInView = useInView(imagesRef, { once: true });

  const renderImageComps = useMemo(() => {
    return imageProps.map((image: any, id: number) => {
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
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 border-t-2">
      <div className="text-center text-3xl font-bold py-16">Team</div>
      <div className="w-full flex flex-col lg:flex-row gap-16 mb-16">
        <div ref={imagesRef} className="relative w-full h-112 lg:w-4/6 ">
          {renderImageComps}
        </div>
        <div className="flex flex-col items-center w-full lg:w-2/6 p-12">
          <div className="text-center text-3xl font-bold pb-8">Title</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br /> <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>
        </div>
      </div>
    </div>
  );
};
