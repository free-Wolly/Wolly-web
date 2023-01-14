import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import styles from "./Header.module.css";
import { menuItems } from "./constants";

export const Header = () => {
  const renderMenuItems = useMemo(() => {
    return menuItems.map((item: string, id: number) => {
      return (
        <div key={id}>
          <Link href={"/"}>{item}</Link>
        </div>
      );
    });
  }, []);

  return (
    <div className={styles.headerMain}>
      <div className="w-full lg:container lg:mx-auto 2xl:px-32 xl:px-16 lg:pl-0 md:pl-8 sm:pl-4 pl-4">
        <div className={styles.headerContent}>
          <div className="xl:w-full lg:w-6/12 lg:mt-2 sm:mt-1 w-full ">
            <Link href="/">
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
          <div className="hidden lg:flex lg:justify-between lg:w-full">
            {renderMenuItems}
          </div>
          <div className="lg:hidden">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
