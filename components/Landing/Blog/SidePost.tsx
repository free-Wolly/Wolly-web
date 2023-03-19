import React from "react";
import Image from "next/image";
import images from "./images";
import { SidePostProps } from "./interfaces";

const SidePost = ({ blogItem, id }: SidePostProps): JSX.Element => {
  return (
    <div className="w-3/6 flex flex-col gap-4">
      <Image
        loading="lazy"
        placeholder="blur"
        className="w-full rounded-3xl h-64"
        src={images[id]}
        alt=""
        width={1000}
        height={1000}
      />
      <div className="text-[26px] font-bold font-[GEOCAPS] text-[#304D63] text-center">
        {blogItem.title}
      </div>
      <div className="text-[22px] text-[#597F9DBF] text-center font-[BOG] tracking-tighter mt-[5px]">
        {blogItem.text}
      </div>
    </div>
  );
};

export default SidePost;
