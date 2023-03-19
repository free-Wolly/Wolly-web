import { Variants } from "framer-motion";

export const banner: Variants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const letterAni: Variants = {
  initial: { y: 500 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

export const textBackground: Variants = {
  hidden: {
    display: "none",
    width: "0px",
  },
  show: {
    display: "block",
    width: "40%",
    transition: { delay: 1, duration: 1 },
  },
};
