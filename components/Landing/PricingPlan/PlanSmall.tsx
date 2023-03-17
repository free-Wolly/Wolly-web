import React from "react";
import { PlanInterface } from "./interfaces";
import Plan from "./Plan";

const PlanSmall = ({
  seeMore,
  setSeeMore,
  messages,
  locale,
}: {
  seeMore: boolean;
  setSeeMore: (value: boolean) => void;
  messages: any;
  locale: string;
}): JSX.Element => (
  <>
    {messages.pricingPlan.plans.map(
      (
        { title, recommendation, price, included, notIncluded }: PlanInterface,
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
  </>
);

export default PlanSmall;
