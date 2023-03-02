import images from "./images";

const imageProps = [
  {
    image: images[0],
    className: "z-0 inset-0 h-[450px] w-4/6",
    transformX: "-100px",
    transformY: "100px",
    delay: "0",
    imageHeight: "h-[450px]",
  },
  {
    image: images[1],
    className: "z-10 left-[25%] top-[268px] h-64 w-3/6",
    transformX: "0px",
    transformY: "100px",
    delay: "1",
    imageHeight: "h-64",
  },
  {
    image: images[2],
    className: "z-20 left-[45%] top-[108px] h-64 w-3/6",
    transformX: "0px",
    transformY: "-100px",
    delay: "2",
    imageHeight: "h-64",
  },
];

export default imageProps;
