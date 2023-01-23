import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "./UseDimensions";

import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { sidebarVariants } from "./constants";

export const BurgerMenu = () => {
  const [menuExpanded, isMenuExpanded] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className="absolute top-0 right-0"
      ref={containerRef}
      initial={false}
      animate={menuExpanded ? "open" : "closed"}
      custom={height}
    >
      <motion.div
        className="absolute top-0 right-0 w-60 bg-white h-screen"
        variants={sidebarVariants}
      />
      <Navigation />
      <MenuToggle toggle={() => isMenuExpanded(!menuExpanded)} />
    </motion.nav>
  );
};
