import React, { useState } from "react";
import SectionHeader from "../../Helpers/SectionHeader";
import { plans } from "./constants";
import { PlanInterface } from "./interfaces";
import Plan from "./Plan";

const PricingPlan = (): JSX.Element => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="container mx-auto">
      <SectionHeader
        topTitle="ბლოგი"
        botTitle="ფასები"
        delay={2}
        textBackgroundElementWidth="50%"
        staggerChildren={0.05}
      />
      <div className="hidden lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-[2rem]">
        {plans.map(
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
            />
          )
        )}
      </div>
      <div className="block lg:hidden"></div>
    </div>
  );
};

export default PricingPlan;
