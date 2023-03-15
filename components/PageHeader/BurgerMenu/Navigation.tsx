import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import menuItems from "../constants";
import { navigationVariants } from "./constants";
import handleClickScroll from "../../../utils/scrollToSection";

const Navigation = ({
  locale,
  setLocale,
}: {
  locale: string;
  setLocale: any;
}): JSX.Element => {
  return (
    <motion.ul variants={navigationVariants} className="flex flex-col">
      {menuItems.map(({ text, id }, index: number) => (
        <MenuItem
          onClick={() => handleClickScroll(id)}
          text={text}
          key={index}
        />
      ))}
      <MenuItem
        onClick={() => setLocale(locale === "en" ? "ka" : "en")}
        text={locale === "en" ? "KA" : "EN"}
      />
    </motion.ul>
  );
};
export default Navigation;
