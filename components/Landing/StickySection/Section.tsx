import React, { useMemo } from "react";
import Image from "next/image";
import { Props } from "./constants";

export const Section = ({ title, text, sectionImages }: Props) => {
  const renderImages = useMemo(() => {
    return sectionImages.map((image, id) => {
      return (
        <Image
          loading="lazy"
          placeholder="blur"
          key={id}
          className="rounded-2xl"
          src={image}
          alt=""
          width={1000}
          height={1000}
        />
      );
    });
  }, [sectionImages]);

  return (
    <div className="w-full relative flex gap-[100px] py-16">
      <div className="hidden lg:w-2/6 lg:flex flex-col sticky top-[100px] h-min">
        <div className="text-3xl font-bold mb-8">{title}</div>
        <div>{text}</div>
      </div>
      <div className="w-full lg:w-4/6 flex flex gap-4 justify-center items-center">
        <div className="grid grid-cols-2 gap-4">{renderImages}</div>
      </div>
    </div>
  );
};
