import React, { useMemo, useState } from "react";
import { services, parts } from "./constants";

const WhatsIncluded = () => {
  const [chosenService, setChosenService] = useState("repairs");

  const renderButtons = useMemo(() => {
    return services.map(({ service, state }, id) => {
      return (
        <button
          key={id}
          onClick={() => setChosenService(state)}
          className={`${
            chosenService === state ? "bg-[#6002d3]" : "bg-gray-200"
          } p-8 rounded-full whitespace-nowrap`}
        >
          {service}
        </button>
      );
    });
  }, [chosenService]);

  const renderBoxes = useMemo(() => {
    return parts.map(({ service, state }) => {
      if (state === chosenService) {
        return service.map(({ room, services }, id) => {
          return (
            <div
              className="min-w-[300px] flex flex-col rounded-3xl my-12 p-8 bg-gray-100"
              key={id}
            >
              <div className="text-[32px] font-bold">{room}</div>
              <ul className="mt-6">
                {services.map((serv, id) => {
                  return <li key={id}>{serv}</li>;
                })}
              </ul>
            </div>
          );
        });
      }
    });
  }, [chosenService]);

  return (
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 border-t-2">
      <div className="flex items-center gap-8 mt-32 overflow-auto">
        {renderButtons}
      </div>
      <div className="flex flex items-center gap-12 overflow-auto">
        {renderBoxes}
      </div>
    </div>
  );
};

export default WhatsIncluded;
