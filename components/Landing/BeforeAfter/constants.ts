import { Variants } from "framer-motion";

export const images: {
  image1: string;
  image2: string;
  alt1: string;
  alt2: string;
}[] = [
  {
    image1: "/assets/images/beforeAfter/1.jpg",
    image2: "/assets/images/beforeAfter/2.jpg",
    alt1: "First Image",
    alt2: "Second Image",
  },
  {
    image1: "/assets/images/beforeAfter/1.jpg",
    image2: "/assets/images/beforeAfter/2.jpg",
    alt1: "First Image",
    alt2: "Second Image",
  },
  {
    image1: "/assets/images/beforeAfter/1.jpg",
    image2: "/assets/images/beforeAfter/2.jpg",
    alt1: "First Image",
    alt2: "Second Image",
  },
];

export const variants: Variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
};
