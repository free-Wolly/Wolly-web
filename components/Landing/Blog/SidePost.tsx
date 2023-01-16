import React from "react";
import Image from "next/image";

export const SidePost = ({ blogItem }: any) => {
  return (
    <div className="w-3/6 flex flex-col gap-4">
      <Image
        className="w-full rounded-3xl"
        src={`/assets/images/sliderImages/${blogItem.img}`}
        alt=""
        width={1000}
        height={1000}
      />
      <div>{blogItem.date}</div>
      <div className="text-xl font-bold">{blogItem.title}</div>
      <div>{blogItem.text}</div>
    </div>
  );
};
