import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BlockProps } from "./interfaces";

const Block = ({ item, index, inView }: BlockProps) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const blockInView: boolean = useInView(blockRef, {
    once: true,
    margin: "20px",
  });

  return (
    <motion.div
      ref={blockRef}
      id={index.toString()}
      className="flex flex-col items-center rounded-[35px] p-16 shadow-light shadow-black"
      style={{
        transform: inView ? "none" : "translateY(50px)",
        opacity: inView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index / 4}s`,
      }}
    >
      <div className="w-16 h-[64px] flex justify-center">
        <motion.img
          src={`/assets/images/boxImages/${item.imgSource}`}
          alt=""
          initial={{ scale: 0 }}
          animate={blockInView && { scale: 1, transition: { duration: 1.5 } }}
          width={64}
          height={64}
        />
      </div>
      <div className="text-center text-xl font-bold font-[GEOCAPS] text-[#304D63] my-4">
        {item.title}
      </div>
      <div className="text-center text-[#597F9DBF] font-[BOG]">{item.text}</div>
    </motion.div>
  );
};

export default Block;
