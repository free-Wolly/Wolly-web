import React, { ReactElement, useMemo } from "react";
import Image from "next/image";
import { boxItems, boxObj } from "./constants";

export const SecondSection = () => {
  const renderBoxes = useMemo(() => {
    return boxItems.map((item: boxObj, id: number): ReactElement => {
      return (
        <div
          key={id}
          className="flex flex-col items-center rounded-2xl p-16 shadow-light shadow-black"
        >
          <div className="w-16 flex justify-center bg-[#F4F6FF]">
            <Image
              src={`/images/boxImages/${item.imgSource}`}
              alt=""
              width={32}
              height={32}
            />
          </div>
          <div className="text-center text-xl font-bold my-4">{item.title}</div>
          <div className="text-center">{item.text}</div>
        </div>
      );
    });
  }, []);

  return (
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4">
      <div className="py-16">
        <h1 className="text-center text-3xl font-bold mb-16">Second Section</h1>
        <div className="grid gap-16 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
          {renderBoxes}
        </div>
      </div>
    </div>
  );
};
