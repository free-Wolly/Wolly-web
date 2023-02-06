import React from "react";
import Image from "next/image";
import images from "./images";

const SidePost = ({ blogItem, id }: any) => {
  return (
    <div className="w-3/6 flex flex-col gap-4">
      <Image
        loading="lazy"
        placeholder="blur"
        className="w-full rounded-3xl h-44"
        src={images[id]}
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

export default SidePost;
