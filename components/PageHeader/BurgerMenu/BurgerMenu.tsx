import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import useDimensions from "./UseDimensions";

import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import { sidebarVariants } from "./constants";

const BurgerMenu = ({
  locale,
  setLocale,
  messages,
}: {
  locale: string;
  setLocale: any;
  messages: any;
}): JSX.Element => {
  const [menuExpanded, isMenuExpanded] = useState(false);
  const containerRef = useRef(null);
  const { height }: { height: number } = useDimensions(containerRef);

  return (
    <>
      <div
        className={`${
          menuExpanded ? "block" : "hidden"
        } absolute w-screen h-screen inset-0`}
        onClick={() => menuExpanded && isMenuExpanded(false)}
      />
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
        <Navigation locale={locale} setLocale={setLocale} messages={messages} />
        <MenuToggle toggle={() => isMenuExpanded(!menuExpanded)} />
      </motion.nav>
    </>
  );
};

export default BurgerMenu;
