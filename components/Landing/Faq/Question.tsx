import React, { useState } from "react";
import { motion } from "framer-motion";
import { imgVariant, openVariant } from "./constants";

export const Question = ({ question }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`w-full rounded-3xl lg:w-3/6 p-4 cursor-pointer ${
        open ? "bg-red-100" : "hover:bg-red-100"
      }`}
      onClick={() => setOpen(!open)}
    >
      <motion.div className="flex flex-row items-center justify-between rounded-2xl">
        <motion.div className="text-xl font-bold">
          {question.question}
        </motion.div>
        <motion.img
          initial="close"
          animate={open ? "open" : "close"}
          className="w-4 h-4"
          src="/assets/images/plus.svg"
          alt=""
          variants={imgVariant}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={open ? "show" : "hidden"}
        variants={openVariant}
        className="pointer-events-none"
      >
        {question.answer}
      </motion.div>
    </motion.div>
  );
};
