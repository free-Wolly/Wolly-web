import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import tick from "../../../public/assets/images/pircingPlan/tick.svg";
import x from "../../../public/assets/images/pircingPlan/x.svg";
import { PlanProps } from "./interfaces";

const variant = {
  enlarge: { height: "auto" },
  shrink: { height: "25rem" },
};

const Plan = ({
  title,
  recommendation,
  price,
  included,
  notIncluded,
  seeMore,
  setSeeMore,
}: PlanProps): JSX.Element => {
  return (
    <motion.div
      className={`relative lg:w-1/3 lg:min-w-0 min-w-[90%] flex flex-col items-start p-[2rem] rounded-[1rem] bg-gradient-to-r from-[#00BCD4] to-[#7FD3E6] pb-[5rem] overflow-hidden`}
    >
      <div className="w-full flex flex-row justify-between items-center pb-[2rem] border-b mb-[1rem] ">
        <div className="flex flex-col">
          <div className="text-[1.5rem] font-bold font-[BOG] text-white">
            {title}
          </div>
          <div className="w-full text-[1rem] font-[GEOCAPS] text-gray-200">
            {recommendation}
          </div>
        </div>
        <div className="text-[2rem] text-white">{`${price}₾-დან`}</div>
      </div>
      <motion.div
        className={`w-full overflow-hidden`}
        initial={"shrink"}
        animate={seeMore ? "enlarge" : "shrink"}
        variants={variant}
      >
        {included.map((text: string, id: number) => (
          <div
            key={id}
            className="w-full flex justify-between items-center my-[0.25rem]"
          >
            <div className="text-[1rem] w-[90%]">{text}</div>
            <div className="w-[1rem] h-[1rem] ml-[0.5rem]">
              <Image src={tick} alt={"yep"} width={50} height={50} />
            </div>
          </div>
        ))}
        {notIncluded?.map((text: string, id: number) => (
          <div
            key={id}
            className="w-full flex justify-between items-center my-[0.25rem]"
          >
            <div className="text-[1rem] text-black/40 w-[90%]">{text}</div>
            <div className="w-[1rem] h-[1rem]">
              <Image src={x} alt={"nope"} width={50} height={50} />
            </div>
          </div>
        ))}
      </motion.div>
      <div className="absolute bottom-0">
        <motion.div
          className="h-[4rem] flex items-center text-white font-bold cursor-pointer"
          onClick={() => {
            setSeeMore(!seeMore);
          }}
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
        >
          {seeMore ? "ნაკლები..." : "მეტი..."}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Plan;
