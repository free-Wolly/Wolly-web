import React from "react";
import { plans } from "./constants";
import { PlanInterface } from "./interfaces";
import Plan from "./Plan";

const PlanSmall = ({
  seeMore,
  setSeeMore,
}: {
  seeMore: boolean;
  setSeeMore: (value: boolean) => void;
}): JSX.Element => (
  <>
    {plans.map(
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
        />
      )
    )}
  </>
);

export default PlanSmall;
