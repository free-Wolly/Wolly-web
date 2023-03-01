import React, { ReactElement, useMemo } from "react";
import { boxObj } from "./constants";
import Block from "./Block";
import SectionHeader from "../../Helpers/SectionHeader";

const SecondSection = ({ messages }: any) => {
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
      <SectionHeader
        topTitle="პრემიუმ ხარისხი"
        botTitle="ხარისხი და კომფორტი კარგია?"
        delay={2}
        textBackgroundElementWidth={"22%"}
        staggerChildren={0.05}
      />
      <div className="grid gap-16 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
        {renderBoxes}
      </div>
    </div>
  );
};

export default SecondSection;
