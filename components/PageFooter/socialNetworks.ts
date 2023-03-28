import facebookImg from "../../public/assets/images/socialNetwork/facebook.svg";
import instagramImg from "../../public/assets/images/socialNetwork/instagram.svg";
import tiktokImg from "../../public/assets/images/socialNetwork/tiktok.svg";

import { SocialNetworks } from "./interfaces";

const socialNetworksItems: SocialNetworks[] = [
  {
    img: facebookImg,
    link: "https://facebook.com/wollycleaning",
  },
  {
    img: instagramImg,
    link: "https://www.instagram.com/wolly__cleaning/",
  },
  {
    img: tiktokImg,
    link: "https://www.linkedin.com/",
  },
];

export default socialNetworksItems;
