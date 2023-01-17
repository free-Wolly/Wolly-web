import React from "react";
import Image from "next/image";
import { blogItems } from "./constanats";
import { SidePost } from "./SidePost";
import images from "../Slider/images";

export const Blog = () => {
  return (
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 border-t-2">
      <div className="text-center text-3xl font-bold py-16">Blog</div>
      <div className="w-full flex flex-col lg:flex-row gap-8 mb-16">
        <div className="relative w-full lg:w-3/6 flex flex-col justify-end rounded-3xl p-6 pt-64 lg:p-12 lg:pt-0">
          <Image
            loading="lazy"
            placeholder="blur"
            className="absolute inset-0 h-full rounded-3xl"
            src={images[0]}
            alt=""
            width={1000}
            height={1000}
          />
          <div className="text-xl font-bold z-10">{blogItems[0].title}</div>
          <div className="mt-4 z-10">{blogItems[0].date}</div>
        </div>
        <div className="lg:w-3/6 flex flex-row gap-8">
          <SidePost blogItem={blogItems[1]} id={1} />
          <SidePost blogItem={blogItems[2]} id={2} />
        </div>
      </div>
    </div>
  );
};
