import * as React from "react";
import { motion } from "framer-motion";
import { menuItemVariants } from "./constants";

const MenuItem = ({ text, onClick }: any) => {
  return (
    <motion.li
      className="z-10"
      variants={menuItemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
    >
      <div
        onClick={onClick}
        className="rounded-1 w-52 flex-1 lg:mt-10 mt-8 cursor-pointer"
      >
        {text}
      </div>
    </motion.li>
  );
};

export default MenuItem;
