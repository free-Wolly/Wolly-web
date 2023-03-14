import { StaticImageData } from "next/image";

export interface ImagePropsInt {
  image: StaticImageData;
  className: string;
  transformX: string;
  transformY: string;
  delay: string;
  imageHeight: string;
}

export interface ImageCompProps {
  imageInView: boolean;
  image: StaticImageData;
  className: string;
  transformX: string;
  transformY: string;
  delay: string;
  imageHeight: string;
}
