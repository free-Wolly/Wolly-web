import React, { useMemo } from "react";
import { Section } from "./Section";
import { sectionData } from "./constants";

export const StickySections = () => {
  const renderSections = useMemo(() => {
    return sectionData.map(({ title, text, images }, id) => {
      return (
        <Section key={id} title={title} text={text} sectionImages={images} />
      );
    });
  }, []);

  return (
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 border-t-2 py-32">
      {renderSections}
    </div>
  );
};
