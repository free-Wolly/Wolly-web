import React from "react";
import Image from "next/image";
import SidePost from "./SidePost";
import images from "./images";
import SectionHeader from "../../Helpers/SectionHeader";

const Blog = ({ messages }: any) => {
  return (
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4">
      <SectionHeader
        topTitle="ბლოგი"
        botTitle="გაეცანი სიახლეებს ჩვენთან"
        delay={2}
        textBackgroundElementWidth={"32%"}
        staggerChildren={"0.07"}
      />
      <div className="w-full flex flex-col lg:flex-row gap-16 mb-16">
        <div className="relative w-full lg:w-[45%] flex flex-col justify-end rounded-3xl p-6 pt-64 lg:p-0 lg:pt-0">
          <Image
            loading="lazy"
            placeholder="blur"
            className="h-full mb-[25px] rounded-3xl"
            src={images[0]}
            alt=""
            width={1000}
            height={1000}
          />
          <div className="flex flex-col justify-center items-center">
            <div className="text-[36px] font-bold font-[GEOCAPS] text-[#304D63]">
              {messages.blog.blogItems[0].title}
            </div>
            <div className="text-[22px] text-[#597F9DBF] text-center font-[BOG] tracking-tighter mt-[5px]">
              {messages.blog.blogItems[0].text}
            </div>
          </div>
        </div>
        <div className="lg:w-[55%] flex flex-col gap-8">
          <div className=" flex flex-row gap-8">
            <SidePost blogItem={messages.blog.blogItems[1]} id={1} />
            <SidePost blogItem={messages.blog.blogItems[2]} id={2} />
          </div>
          <div className="flex flex-row gap-8">
            <SidePost blogItem={messages.blog.blogItems[3]} id={3} />
            <SidePost blogItem={messages.blog.blogItems[4]} id={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
