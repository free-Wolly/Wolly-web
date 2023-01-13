import React from "react";
import { motion } from "framer-motion";
import { introTextItem } from "./constants";

export const AnimatedText = (props: { text: any }) => {
  const splitWords = props.text.split(" ");

  const words: string[][] = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <>
      <div className="flex flex-row">
        <span>
          {words.flat().map((element, index) => {
            return (
              <span
                style={{
                  overflow: "hidden",
                  display: "inline-block",
                }}
                key={index}
              >
                <motion.span
                  style={{ display: "inline-block" }}
                  variants={introTextItem}
                >
                  {element}
                </motion.span>
              </span>
            );
          })}
        </span>
      </div>
    </>
  );
};
