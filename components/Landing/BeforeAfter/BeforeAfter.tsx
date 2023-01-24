import React, { useMemo } from "react";
import BeforeAfterSlider from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { images } from "./constants";
import { SlideShow } from "./SlideShow";

export const BeforeAfter = () => {
  const renderImages = useMemo(() => {
    return images.map((image, id) => {
      return (
        <BeforeAfterSlider
          key={id}
          className="min-w-20 md:min-w-30 overflow-hidden"
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
      );
    });
  }, []);

  return (
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 overflow-auto">
      <div className="text-center text-3xl font-bold my-16">
        Works We Are Proud Of
      </div>
      <div className="hidden lg:flex gap-16 overflow-auto pb-4">
        {renderImages}
      </div>
      <div className="flex lg:hidden bg-red-100">
        <SlideShow images={renderImages} />
      </div>
    </div>
  );
};
