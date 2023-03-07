import image1 from "../../../public/assets/images/tools/1.png";
import image1rev from "../../../public/assets/images/tools/1-rev.png";
import image2 from "../../../public/assets/images/tools/2.png";
import image3 from "../../../public/assets/images/tools/3.png";
import image4 from "../../../public/assets/images/tools/4.png";
import image5 from "../../../public/assets/images/tools/5.png";
import image6 from "../../../public/assets/images/tools/6.png";
import image7 from "../../../public/assets/images/tools/7.png";

const style =
  "2xl:w-[400px] 2xl:h-[400px] lg:w-[350px] lg:h-[350px] sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]";

const images = [
  {
    image: image1,
    style: "top-[5%] left-0 sm:w-[160px] sm:h-[160px] w-[100px] h-[100px] ",
  },
  {
    image: image1rev,
    style: "top-[5%] right-0 sm:w-[160px] sm:h-[160px] w-[100px] h-[100px] ",
  },
  {
    image: image2,
    style: `lg:top-[5%] 2xl:left-[calc(50%-200px)] lg:left-[calc(50%-175px)] sm:left-[calc(50%-150px)] left-[calc(50%-100px)] top-[10%] ${style}`,
  },
  {
    image: image3,
    style: `lg:top-[20%] top-[calc(50%-150px)] sm:right-[calc(25%-200px)] right-[calc(25%-100px)] ${style}`,
  },
  {
    image: image4,
    style: `lg:top-[20%] top-[calc(50%-150px)] sm:left-[calc(25%-200px)] left-[calc(25%-100px)] ${style}`,
  },
  {
    image: image5,
    style: `bottom-0 left-0 ${style}`,
  },
  {
    image: image6,
    style: `lg:bottom-[5%] sm:bottom-[15%] bottom-[20%] 2xl:left-[calc(50%-200px)] lg:left-[calc(50%-175px)] sm:left-[calc(50%-150px)] left-[calc(50%-100px)] ${style}`,
  },
  {
    image: image7,
    style: `bottom-0 right-0 ${style}`,
  },
];

export default images;
