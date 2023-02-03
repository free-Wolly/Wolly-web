import React, { useMemo } from "react";
import { terms } from "./constants";

export const Terms = () => {
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
      <h1 className="text-[64px] font-bold mb-16">Terms And Conditions</h1>
      <p className="text-[20px]">
        This Framer Terms of Service (“Agreement”) is entered into by and
        between Framer B.V. (“Framer”) and the entity or person placing an order
        for or accessing the Services (“Customer”). This Agreement consists of
        the terms and conditions set forth below and any Order Form. The
        “Effective Date” of this Agreement is the date which is the earlier of
        (a) Customer’s initial access to the Services through any online
        provisioning, registration or order process or (b) the Effective Date of
        the first Order Form. This Agreement will govern Customer’s initial
        purchase on the Effective Date as well as any future purchases made by
        Customer that reference this Agreement. Framer may modify this Agreement
        from time to time as permitted in Section 13.4 (Amendment).
        <br />
        <br />
        Capitalized terms shall have the meanings set forth in Section 1, or in
        the section where they are first used.
      </p>
      {renderText}
    </div>
  );
};
