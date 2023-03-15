import facebookImg from "../../public/assets/images/socialNetwork/facebook.svg";
import instagramImg from "../../public/assets/images/socialNetwork/instagram.svg";
import linkedinImg from "../../public/assets/images/socialNetwork/linkedin.svg";
import twitterImg from "../../public/assets/images/socialNetwork/twitter.svg";
import { SocialNetworks } from "./interfaces";

const socialNetworksItems: SocialNetworks[] = [
  {
    img: facebookImg,
    link: "https://www.facebook.com/",
  },
  {
    img: instagramImg,
    link: "https://www.instagram.com/",
  },
  {
    img: linkedinImg,
    link: "https://www.linkedin.com/",
  },
  {
    img: twitterImg,
    link: "https://www.twitter.com/",
  },
];

export default socialNetworksItems;
