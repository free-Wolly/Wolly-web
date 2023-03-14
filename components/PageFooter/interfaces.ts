import { StaticImageData } from "next/image";

export interface SocialNetworks {
  img: StaticImageData;
  link: string;
}

export interface MenuItems {
  text: string;
  id: string;
}
