import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";

import Question from "./Question";
import { questions } from "./constants";

const Faq = () => {
  const faqRef = useRef(null);
  const faqInView: boolean = useInView(faqRef, { once: true });

  const renderQuestions = useMemo(() => {
    return questions.map((question, id) => {
      return (
        <Question key={id} id={id} question={question} inView={faqInView} />
      );
    });
  }, [faqInView]);

  return (
    <div
      id="faq"
      className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 pb-16 border-t-2"
    >
      <div className="text-center text-3xl font-bold py-16">FAQ</div>
      <motion.div
        ref={faqRef}
        className="flex flex-col items-center justify-center gap-2 w-full"
      >
        {renderQuestions}
      </motion.div>
    </div>
  );
};

export default Faq;
