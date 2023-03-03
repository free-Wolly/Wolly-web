import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import BurgerMenu from "./BurgerMenu";
import styles from "./Header.module.css";
import handleClickScroll from "../../utils/scrollToSection";

const Header = ({ locale, setLocale, messages }: any) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className={styles.headerMain}
    >
      <div className="w-full lg:container lg:mx-auto 2xl:px-32 xl:px-16 lg:pl-0 md:pl-8 sm:pl-4 pl-4">
        <div className={styles.headerContent}>
          <div className="xl:w-75% lg:w-6/12 lg:mt-2 sm:mt-1 w-full ">
            <Link href="/privacy-policy">
              <Image
                className="xl:w-24 xl:h-24 lg:w-20 lg:h-20 w-16 h-16"
                priority
                src="/assets/images/wolly.png"
                alt=""
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:justify-between lg:w-full text-[20px] font-[BOG] text-white">
            {renderMenuItems}
            <div
              className="cursor-pointer"
              onClick={() => setLocale(locale === "en" ? "ka" : "en")}
            >
              {locale === "en" ? "KA" : "EN"}
            </div>
          </div>

          <div className="lg:hidden">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
