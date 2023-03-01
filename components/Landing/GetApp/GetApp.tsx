import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import wollyAppImg from "../../../public/assets/images/wolly-app.png";
import storesInfo from "./constants";

const GetApp = ({ messages }: any) => {
  const renderStores = useMemo(() => {
    return storesInfo.map((store, id) => {
      return (
        <Link key={id} href={store.link} target="_blank">
          <store.img />
        </Link>
      );
    });
  }, []);

  return (
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 border-t-2">
      <div className="flex items-center justify-between my-32">
        <div className="w-full md:w-2/4 flex flex-col justify-center items-center md:items-start">
          <div className="text-3xl font-bold leading-loose mb-16 text-center md:text-left">
            {messages.getApp.text}
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start gap-8 w-full lg:w-2/4">
            {renderStores}
          </div>
        </div>
        <div className="hidden md:flex justify-center w-2/4">
          <Image
            className="max-w-[50%]"
            src={wollyAppImg}
            alt="wolly app"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
