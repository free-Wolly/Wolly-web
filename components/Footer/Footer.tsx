import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import wollyLogo from "../../public/assets/images/wolly.png";
import worldMap from "../../public/assets/images/world.png";
import menuItems from "../Header/constants";
import socialNetworksItems from "./socialNetworks";

const Footer = () => {
  const renderMenuItems = useMemo(() => {
    return menuItems.map((item: string, id: number) => {
      return (
        <div key={id}>
          <Link href={"/"}>{item}</Link>
        </div>
      );
    });
  }, []);

  const renderSocialNetworks = useMemo(() => {
    return socialNetworksItems.map((item, id: number) => {
      return (
        <Link key={id} href={item.link} target="_blank">
          <div className="flex items-center rounded-full bg-white w-10 h-10">
            <Image
              className="h-5"
              src={item.img}
              alt=""
              width={100}
              height={100}
            />
          </div>
        </Link>
      );
    });
  }, []);

  return (
    <>
      <div className="bg-neutral-200">
        <div className="w-full lg:container lg:mx-auto 2xl:px-32 md:px-16 sm:px-4 px-4">
          <div className="flex flex-col lg:flex-row gap-16 py-8 w-full">
            <div className="flex flex-col w-full">
              <Image
                priority
                className="w-20 h-20 mb-5"
                src={wollyLogo}
                alt=""
                width={1000}
                height={1000}
              />
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="text-3xl font-bold mb-8">Our Office</div>
              <Image
                loading="lazy"
                className="w-64 h-44 mx-auto"
                src={worldMap}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="text-3xl font-bold mb-8">Contact</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="text-3xl font-bold mb-8">Title</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-8 border-t-2 border-neutral-300">
            <div>© 2023 Wolly</div>
            <div className="hidden lg:flex flex-row gap-4">
              {renderMenuItems}
            </div>
            <div className="flex flex-row gap-2">{renderSocialNetworks}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
