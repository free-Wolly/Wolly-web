export const letterContainer = {
  visible: {
    transition: { staggerChildren: 0.025 },
  },
};

export const arrowVariant = {
  init: { opacity: 0, scale: 0, y: 100 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  hover: { scale: 1.5, rotate: 360 },
};
