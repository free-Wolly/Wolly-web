import images from "../Slider/images";

export const imageProps = [
  {
    image: images[0],
    className: "z-0 inset-0 h-96 w-4/6",
    transformX: "-100px",
    transformY: "100px",
    delay: "0",
    imageHeight: "h-96",
  },
  {
    image: images[1],
    className: "z-10 left-1/3 top-48 h-64 w-3/6",
    transformX: "0px",
    transformY: "100px",
    delay: "1",
    imageHeight: "h-64",
  },
  {
    image: images[2],
    className: "z-20 left-1/2 top-8 h-64 w-3/6",
    transformX: "0px",
    transformY: "-100px",
    delay: "2",
    imageHeight: "h-64",
  },
];
