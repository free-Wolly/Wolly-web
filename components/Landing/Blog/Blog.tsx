import React from "react";
import { blogItems } from "./constanats";
import { SidePost } from "./SidePost";

export const Blog = () => {
  return (
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 border-t-2">
      <div className="text-center text-3xl font-bold py-16">Blog</div>
      <div className="w-full flex flex-col lg:flex-row gap-8 mb-16">
        <div
          className={`w-full lg:w-3/6 flex flex-col justify-end bg-[url('/assets/images/sliderImages/${blogItems[0].img}')] bg-fill rounded-3xl p-6 pt-64 lg:p-12 lg:pt-0`}
        >
          <div className="text-xl font-bold">{blogItems[0].title}</div>
          <div className="mt-4">{blogItems[0].date}</div>
        </div>
        <div className="lg:w-3/6 flex flex-row gap-8">
          <SidePost blogItem={blogItems[1]} />
          <SidePost blogItem={blogItems[2]} />
        </div>
      </div>
    </div>
  );
};
