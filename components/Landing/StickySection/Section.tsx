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
    <div className="w-full relative flex flex-col lg:flex-row gap-[100px] py-16">
      <div className="lg:w-2/6 flex flex-col relative top-0 lg:sticky lg:top-[100px] h-min">
        <div className="text-3xl font-bold mb-8">{title}</div>
        <div>{text}</div>
      </div>
      <div className="w-full lg:w-4/6 flex flex gap-4 justify-center items-center">
        <div className="grid grid-cols-2 gap-4">{renderImages}</div>
      </div>
    </div>
  );
};
