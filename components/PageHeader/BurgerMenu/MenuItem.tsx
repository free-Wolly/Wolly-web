import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { menuItemVariants } from "./constants";

const MenuItem = (props: { text: string; i: number }) => {
  return (
    <motion.li
      className="z-10"
      variants={menuItemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
    >
      <Link href={"/"}>
        <div className="rounded-1 w-52 flex-1 lg:mt-10 mt-8">{props.text}</div>
      </Link>
    </motion.li>
  );
};

export default MenuItem;
