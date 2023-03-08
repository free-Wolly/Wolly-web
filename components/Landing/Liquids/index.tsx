import React from "react";
import images from "./images";
import { motion } from "framer-motion";

const Liquids = () => {
  const imageStyle =
    "absolute 2xl:w-[240px] 2xl:h-[240px] xl:w-[200px] xl:h-[200px] lg:w-[150px] lg:h-[150px] sm:w-[200px] sm:h-[200px] h-[150px] w-[150px] cursor-pointer drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]";

  const renderImages = images.map((image, id) => (
    <motion.img
      key={id}
      src={image.image.src}
      alt=""
      height={1000}
      width={1000}
      whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
      className={`${imageStyle} ${image.style}`}
    />
  ));

  return (
    <div className="h-screen max-h-[1500px] min-h-[900px] md:min-h-auto bg-[url('/assets/images/liquids/back.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="relative w-full h-full container mx-auto">
        {renderImages}
      </div>
    </div>
  );
};

export default Liquids;
