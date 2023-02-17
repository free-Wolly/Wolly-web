import React, { useMemo } from "react";
import Image from "next/image";
import images from "./constants";

const StickySections = () => {
  const renderImages = useMemo(() => {
    return images.map((image, id: number) => {
      return (
        <Image
          loading="lazy"
          placeholder="blur"
          key={id}
          className={`lg:sticky lg:top-[180px] lg:block lg:w-[19%] lg:h-[500px] ml-0 ${
            id === 0
              ? "lg:ml-[0%]"
              : id === 1
              ? "lg:ml-[20%]"
              : id === 2
              ? "lg:ml-[40%]"
              : id === 3
              ? "lg:ml-[60%]"
              : id === 4
              ? "lg:ml-[80%]"
              : ""
          } lg:mt-[500px] rounded-2xl mb-2`}
          src={image}
          alt=""
          width={1000}
          height={1000}
        />
      );
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage:
          'url("/assets/images/black-pink-gradient.png"), url("/assets/images/black-pink-gradient.png")',
        backgroundSize: "cover, cover",
        backgroundPosition: "center top, center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 py-8 lg:py-32">
        <div className="w-full relative flex flex-col py-16 ">
          {renderImages}
        </div>
      </div>
    </div>
  );
};

export default StickySections;
