import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { menuItems } from "../constants";
import { navigationVariants } from "./constants";

export const Navigation = () => (
  <motion.ul variants={navigationVariants} className="flex flex-col">
    {menuItems.map((item: string, id: number) => (
      <MenuItem text={item} i={id} key={id} />
    ))}
  </motion.ul>
);
