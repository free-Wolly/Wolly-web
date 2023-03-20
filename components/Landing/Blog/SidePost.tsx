import React from "react";
import Image from "next/image";
import images from "./images";
import { SidePostProps } from "./interfaces";

const SidePost = ({ blogItem, id }: SidePostProps): JSX.Element => {
  return (
    <div className="w-3/6 flex flex-col gap-[10px]">
      <Image
        loading="lazy"
        placeholder="blur"
        className="rounded-3xl xl:h-[14rem] lg:h-[10rem] sm:h-[14rem] h-[10rem]"
        src={images[id]}
        alt=""
        width={1000}
        height={1000}
      />
      <div className="text-[1.25rem] font-bold font-[GEOCAPS] text-[#304D63] text-center">
        {blogItem.title}
      </div>
      <div className="text-[1rem] text-[#597F9DBF] text-center font-[BOG] tracking-tighter">
        {blogItem.text}
      </div>
    </div>
  );
};

export default SidePost;
