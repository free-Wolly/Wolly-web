import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import wollyLogo from "../../public/assets/images/wolly.png";
import worldMap from "../../public/assets/images/world.png";
import socialNetworksItems from "./socialNetworks";
import handleClickScroll from "../../utils/scrollToSection";

const Footer = ({ messages }: any) => {
  const renderMenuItems = useMemo(() => {
    return messages.header.menuItems.map(({ text, id }: any, index: number) => {
      return (
        <div
          className="cursor-pointer"
          key={index}
          onClick={() => handleClickScroll(id)}
        >
          {text}
        </div>
      );
    });
  }, [messages.header.menuItems]);

  const renderSocialNetworks = useMemo(() => {
    return socialNetworksItems.map((item, id: number) => {
      return (
        <Link
          key={id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
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
              <div>{messages.footer.left.text}</div>
            </div>
            <div className="flex flex-col w-full">
              <div className="text-3xl font-bold mb-8">
                {messages.footer.middleLeft.title}
              </div>
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
              <div className="text-3xl font-bold mb-8">
                {messages.footer.middleRight.title}
              </div>
              <div>{messages.footer.middleRight.text}</div>
            </div>
            <div className="flex flex-col w-full">
              <div className="text-3xl font-bold mb-8">
                {messages.footer.right.title}
              </div>
              <div>{messages.footer.right.text}</div>
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
