import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/images/wolly.png";

const Header = () => {
  return (
    <div className="bg-transparent fixed w-full top-0 z-50 min-h-[50px]">
      <div className="relative w-full lg:container lg:mx-auto 2xl:px-32 xl:px-16 lg:px-0 md:px-8 sm:px-4 px-4">
        <div className="w-full flex justify-between items-center">
          <div className="xl:w-full lg:w-6/12 lg:mt-2 sm:mt-1 w-full ">
            <Link href="/">
              <Image
                className="xl:w-24 xl:h-24 lg:w-20 lg:h-20 w-16 h-16"
                priority
                src={logo}
                alt=""
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex justify-end w-full">
            <Link href={"/"}>კონტაქტი</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
