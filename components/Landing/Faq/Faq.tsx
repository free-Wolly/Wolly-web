import React, { useMemo } from "react";
import Question from "./Question";
import { questions } from "./constants";

const Faq = () => {
  const renderQuestions = useMemo(() => {
    return questions.map((question, id) => {
      return <Question key={id} question={question} />;
    });
  }, []);

  return (
    <div
      id="faq"
      className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 pb-16 border-t-2"
    >
      <div className="text-center text-3xl font-bold py-16">FAQ</div>
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        {renderQuestions}
      </div>
    </div>
  );
};

export default Faq;
