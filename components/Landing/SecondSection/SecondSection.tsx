import React, { ReactElement, useMemo, useRef } from "react";
import { boxObj } from "./constants";
import { useInView } from "framer-motion";
import Block from "./Block";

const SecondSection = ({ messages }: any) => {
  const titleRef = useRef(null);
  const titleInView: boolean = useInView(titleRef, { once: true });

  const renderBoxes = useMemo(() => {
    return messages.secondSection.boxText.map(
      (item: boxObj, id: number): ReactElement => {
        return <Block key={id} item={item} index={id} />;
      }
    );
  }, [messages.secondSection.boxText]);

  return (
    <div
      id="second-section"
      className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4"
    >
      <div className="py-16">
        <h1
          ref={titleRef}
          style={{
            transform: titleInView ? "none" : "translateY(50px)",
            opacity: titleInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className="text-center text-3xl font-bold mb-16"
        >
          {messages.secondSection.title}
        </h1>
        <div className="grid gap-16 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
          {renderBoxes}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
