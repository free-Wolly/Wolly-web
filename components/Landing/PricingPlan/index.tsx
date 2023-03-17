import React, { useState } from "react";
import SectionHeader from "../../Helpers/SectionHeader";
import { PlanInterface } from "./interfaces";
import Plan from "./Plan";
import PlanSmall from "./PlanSmall";

const PricingPlan = ({ messages, locale }: any): JSX.Element => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="container mx-auto">
      <SectionHeader
        topTitle={messages.pricingPlan.sectionTitle}
        botTitle={messages.pricingPlan.title}
        delay={2}
        textBackgroundElementWidth="50%"
        staggerChildren={0.05}
      />
      <div className="hidden lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-[2rem]">
        {messages.pricingPlan.plans.map(
          (
            {
              title,
              recommendation,
              price,
              included,
              notIncluded,
            }: PlanInterface,
            id: number
          ) => (
            <Plan
              key={id}
              title={title}
              recommendation={recommendation}
              price={price}
              included={included}
              notIncluded={notIncluded}
              seeMore={seeMore}
              setSeeMore={setSeeMore}
              messages={messages}
              locale={locale}
            />
          )
        )}
      </div>
      <div className="lg:hidden flex items-center sm:px-[3.125rem] sm:gap-[3.125rem] px-[1rem] gap-[1rem] overflow-x-auto">
        <PlanSmall
          seeMore={seeMore}
          setSeeMore={setSeeMore}
          messages={messages}
          locale={locale}
        />
      </div>
    </div>
  );
};

export default PricingPlan;
