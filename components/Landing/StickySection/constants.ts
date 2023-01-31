import { StaticImageData } from "next/image";
import image1 from "../../../public/assets/images/sliderImages/1.jpg";
import image2 from "../../../public/assets/images/sliderImages/2.jpg";
import image3 from "../../../public/assets/images/sliderImages/3.jpg";
import image4 from "../../../public/assets/images/sliderImages/4.jpg";

export interface Props {
  title: string;
  text: string;
  sectionImages: StaticImageData[];
}

export const sectionData = [
  {
    title: "Complete pages for your project.",
    text: "Create beautiful pages within minutes directly in Framer. Easily customize images, content, and style to make it your own.",
    images: new Array(8).fill(image1),
  },
  {
    title: "Complete pages for your project.",
    text: "Create beautiful pages within minutes directly in Framer. Easily customize images, content, and style to make it your own.",
    images: new Array(8).fill(image2),
  },
  {
    title: "Complete pages for your project.",
    text: "Create beautiful pages within minutes directly in Framer. Easily customize images, content, and style to make it your own.",
    images: new Array(8).fill(image3),
  },
  {
    title: "Complete pages for your project.",
    text: "Create beautiful pages within minutes directly in Framer. Easily customize images, content, and style to make it your own.",
    images: new Array(8).fill(image4),
  },
];
