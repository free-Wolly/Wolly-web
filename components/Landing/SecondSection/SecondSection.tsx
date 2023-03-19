import React, { ReactElement, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BoxObj } from "./interfaces";
import Block from "./Block";
import SectionHeader from "../../Helpers/SectionHeader";

const SecondSection = ({ messages }: any) => {
  const boxSectionRef = useRef<HTMLDivElement>(null);
  const boxSectionInView: boolean = useInView(boxSectionRef, { once: true });

  const renderBoxes = useMemo(() => {
    return messages.secondSection.boxText.map(
      (item: BoxObj, id: number): ReactElement => {
        return (
          <Block key={id} item={item} index={id} inView={boxSectionInView} />
        );
      }
    );
  }, [boxSectionInView, messages.secondSection.boxText]);

  return (
    <div
      id="second-section"
      className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4"
    >
      <SectionHeader
        topTitle={messages.secondSection.sectionTitle}
        botTitle={messages.secondSection.title}
        delay={2}
        textBackgroundElementWidth={"22%"}
        staggerChildren={0.05}
      />
      <motion.div
        ref={boxSectionRef}
        className="grid gap-16 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2"
      >
        {renderBoxes}
      </motion.div>
    </div>
  );
};

export default SecondSection;
