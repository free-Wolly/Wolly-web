import { StaticImageData } from "next/image";
import images from "../Blog/images";
import bgImages from "./images";

export const Data: {
  bgImg: StaticImageData;
  userName: string;
  userImg: StaticImageData;
}[] = [
  {
    bgImg: bgImages[0],
    userName: "",
    userImg: images[0],
  },
  {
    bgImg: bgImages[1],
    userName: "",
    userImg: images[1],
  },
  {
    bgImg: bgImages[2],
    userName: "",
    userImg: images[2],
  },
  {
    bgImg: bgImages[3],
    userName: "",
    userImg: images[3],
  },
  {
    bgImg: bgImages[4],
    userName: "",
    userImg: images[4],
  },
  {
    bgImg: bgImages[5],
    userName: "",
    userImg: images[0],
  },
];
