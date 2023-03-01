import React, { useMemo } from "react";
import terms from "./constants";

const Terms = ({ messages }: any) => {
  const renderText = useMemo(() => {
    return terms.map((term, id: number) => {
      return (
        <div key={id}>
          <h1 className="text-[32px] font-bold mt-16">{term.title}</h1>
          <p className="text-[20px] whitespace-pre-wrap text-start">
            {term.text}
          </p>
        </div>
      );
    });
  }, []);

  return (
    <div className="container max-w-[1000px] lg:py-[150px] py-[75px] lg:px-[100px] mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4">
      <h1 className="text-[64px] font-bold mb-16">
        {messages.termsAndConditions.title}
      </h1>
      <p className="text-[20px]">{messages.termsAndConditions.text}</p>
      {renderText}
    </div>
  );
};

export default Terms;
