import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import menuItems from "../constants";
import { navigationVariants } from "./constants";
import handleClickScroll from "../../helperFuncs";

const Navigation = () => {
  return (
    <motion.ul variants={navigationVariants} className="flex flex-col">
      {menuItems.map(({ text, id }, index: number) => (
        <MenuItem
          onClick={() => handleClickScroll(id)}
          text={text}
          i={index}
          key={index}
        />
      ))}
    </motion.ul>
  );
};
export default Navigation;
