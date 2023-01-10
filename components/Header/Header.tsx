import React, { useState, ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import "./Header.module.css";

export const Header = () => {
  const [menuExpanded, isMenuExpanded] = useState(false);

  const menuItems: string[] = [
    "მთავარი",
    "ჩვენს შესახებ",
    "ინტეგრაცია",
    "სერვისები",
    "ფასები",
    "FAQ",
    "კონტაქტი",
  ];

  return (
    <div className={styles.headerMain}>
      <div className="Container">
        <div className={styles.headerContent}>
          <Link className={styles.headerContent_Logo} href="/">
            <Image src="/images/wolly.png" alt="" width={100} height={100} />
          </Link>
          <nav className={styles.headerContent_Nav}>
            <Image
              className={styles.headerMobileMenuIcon}
              src="/images/menu-icon.svg"
              alt=""
              width={24}
              height={24}
              onClick={() => {
                isMenuExpanded(!menuExpanded);
              }}
            />
            <ul className={menuExpanded ? styles.expanded : styles.collapsed}>
              {menuItems.map((item: string, id: number): ReactElement => {
                return (
                  <li key={id} className={styles.headerItem}>
                    <Link href="/">{item}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
