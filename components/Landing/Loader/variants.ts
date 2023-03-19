export const imageContainer = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    },
  },
};

export const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0, 0.95],
      duration: 1.6,
    },
  },
};
