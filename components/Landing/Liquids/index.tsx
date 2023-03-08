import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import images from "./images";

const Liquids = () => {
  const sectionRef: any = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-300px" });

  const imageStyle =
    "absolute 2xl:w-[240px] 2xl:h-[240px] xl:w-[200px] xl:h-[200px] lg:w-[150px] lg:h-[150px] sm:w-[200px] sm:h-[200px] h-[150px] w-[150px] cursor-pointer drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]";

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [sectionHeight, setSectionHeight] = useState(0);
  const [sectionWidth, setSectionWidth] = useState(0);
  const [fromTopToSection, setFromTopToSection] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setSectionWidth(sectionRef.current.offsetWidth);
    setSectionHeight(sectionRef.current.offsetHeight);
    setFromTopToSection(sectionRef.current.offsetTop);
  }, []);

  const handleMouseMove: MouseEventHandler<HTMLElement> = (e) => {
    setMousePos({ x: e.pageX, y: e.pageY });
  };

  mouseX.set(mousePos.x);
  mouseY.set(mousePos.y);

  const x = useTransform(mouseX, [0, sectionWidth], [0, -60]);
  const y = useTransform(
    mouseY,
    [fromTopToSection, fromTopToSection + sectionHeight],
    [0, -60]
  );

  const renderImages = images.map((image, id) => (
    <motion.img
      key={id}
      src={image.image.src}
      alt=""
      height={1000}
      width={1000}
      initial={{
        opacity: 0,
      }}
      animate={
        sectionInView && {
          opacity: 1,
          transition: {
            delay: id / 4,
            duration: 1,
          },
        }
      }
      whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
      className={`${imageStyle} ${image.style}`}
      style={{ x, y }}
    />
  ));

  return (
    <div
      onMouseMove={handleMouseMove}
      ref={sectionRef}
      className="h-screen max-h-[1500px] min-h-[900px] md:min-h-auto bg-[url('/assets/images/liquids/back.png')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <div className="relative w-full h-full container mx-auto">
        {renderImages}
      </div>
    </div>
  );
};

export default Liquids;
