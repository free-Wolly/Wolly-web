import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { boxObj } from "./constants";

const Block = (props: { item: boxObj; index: number }) => {
  const blockRef = useRef(null);
  const blockInView = useInView(blockRef, { once: true, margin: "20px" });

  return (
    <motion.div
      ref={blockRef}
      id={props.index.toString()}
      className="flex flex-col items-center rounded-2xl p-16 shadow-light shadow-black"
      style={{
        transform: blockInView ? "none" : "translateY(50px)",
        opacity: blockInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
          props.index / 5
        }s`,
      }}
    >
      <div className="w-16 flex justify-center bg-[#F4F6FF]">
        <Image
          src={`/assets/images/boxImages/${props.item.imgSource}`}
          alt=""
          width={32}
          height={32}
        />
      </div>
      <div className="text-center text-xl font-bold my-4">
        {props.item.title}
      </div>
      <div className="text-center">{props.item.text}</div>
    </motion.div>
  );
};

export default Block;
