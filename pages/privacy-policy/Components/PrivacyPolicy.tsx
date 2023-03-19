import React, { useMemo } from "react";
import policies from "./constants";

const PrivacyPolicy = ({ messages }: any) => {
  const renderText = useMemo(() => {
    return policies.map(
      (
        policy: {
          title: string;
          text: string;
        },
        id: number
      ) => {
        return (
          <div key={id}>
            <h1 className="text-[32px] font-bold mt-16">{policy.title}</h1>
            <p className="text-[20px] whitespace-pre-wrap text-start">
              {policy.text}
            </p>
          </div>
        );
      }
    );
  }, []);

  return (
    <div className="container max-w-[1000px] lg:py-[150px] py-[75px] lg:px-[100px] mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4">
      <h1 className="text-[64px] font-bold mb-16">
        {messages.privacyPolicy.title}
      </h1>
      <p className="text-[20px]">{messages.privacyPolicy.text}</p>
      {renderText}
    </div>
  );
};

export default PrivacyPolicy;
