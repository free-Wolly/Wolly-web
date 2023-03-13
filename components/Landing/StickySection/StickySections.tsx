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
          className="lg:sticky lg:top-[80vh] lg:block"
          href={store.link}
          target="_blank"
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
          className={`lg:sticky lg:top-[15vh] lg:block lg:w-[19%] lg:h-[60vh] lg:max-w-none xl:mb-[10vh] lg:mb-[15vh] max-h-[600px] ml-0 flex flex-col justify-center items-center sm:w-[300px] w-[200px]  ${
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
          } lg:mt-[100vh] rounded-2xl`}
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
        <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 py-8 lg:py-32 lg:block flex flex-col items-center gap-[50px]">
          {renderImages}
          <div className="flex justify-center items-center lg:gap-[3vw] gap-[5vw] lg:h-[2000px] lg:mx-0 h-[300px]">
            {renderStores}
          </div>
        </div>
      </div>
    </>
  );
};

export default StickySections;
