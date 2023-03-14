import React, { useMemo } from "react";
import Image from "next/image";
import images from "./constants";
import Link from "next/link";
import storesInfo from "./stores";

const StickySections = ({ messages }: any) => {
  const renderStores = useMemo(() => {
    return storesInfo.map((store, id) => {
      return (
        <Link
          key={id}
          className="lg:sticky xl:top-[40.625rem] lg:top-[28rem] lg:block"
          href={store.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <store.img />
        </Link>
      );
    });
  }, []);

  const renderImages = useMemo(() => {
    return images.map((image, id: number) => {
      return (
        <Image
          loading="lazy"
          placeholder="blur"
          key={id}
          className={`lg:sticky lg:top-[6.25rem] lg:block lg:w-[19%] xl:h-[31.25rem] lg:h-[20rem] lg:max-w-none lg:mb-[6.25rem] max-h-[37.5rem] ml-0 flex flex-col justify-center items-center sm:w-[18.75rem] w-[12.5rem]  ${
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
          } lg:mt-[43.75rem] rounded-2xl`}
          src={image}
          alt=""
          width={1000}
          height={1000}
        />
      );
    });
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/assets/images/stickySection/bck.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[5000px]"
      >
        <div className="sticky top-[20%] flex justify-center content-center items-center text-[#041919]">
          <div className="text-center lg:text-left">
            <div className="text-[100px] lg:text-[200px] font-bold leading-none">
              {messages.stickySection.title.first}
              <br />
              {messages.stickySection.title.second}
            </div>
            <div className="text-[64px]">
              {messages.stickySection.title.third}
            </div>
            <div className="text-[48px]">
              {messages.stickySection.title.fourth}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#041919]">
        <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 py-8 lg:py-32 lg:block flex flex-col items-center gap-[3.125rem]">
          {renderImages}
          <div className="flex justify-center items-center lg:gap-[1.875rem] gap-[3.125rem] lg:h-[125rem] lg:mx-0 h-[18.75rem]">
            {renderStores}
          </div>
        </div>
      </div>
    </>
  );
};

export default StickySections;
