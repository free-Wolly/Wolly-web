import React, { useState, useEffect, forwardRef } from "react";
import { useTransform, motion, useScroll } from "framer-motion";

const TextHorizontalAnimation = (props: any, ref: any) => {
  const [fromTop, setFromTop] = useState(0);
  const [section, setSection] = useState(0);
  const [screen, setScreen] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const pageHeight = document.getElementById("landing-page")?.offsetHeight;
    const screenHeight = window.innerHeight;
    const sectionHeight = ref.current.offsetHeight;
    const fromTopToSectionHeight = ref.current.offsetTop;
    const fromTopToSectionPercentage =
      pageHeight && fromTopToSectionHeight / pageHeight;
    const sectionPercentage = pageHeight && sectionHeight / pageHeight;
    const screenPercentage = pageHeight && screenHeight / pageHeight;
    if (fromTopToSectionPercentage && sectionPercentage && screenPercentage) {
      setFromTop(fromTopToSectionPercentage);
      setSection(sectionPercentage);
      setScreen(screenPercentage);
    }
  }, [ref]);

  const animateRight = useTransform(
    scrollYProgress,
    [fromTop - screen, section + fromTop],
    [0, 50]
  );

  // const animateMiddle = useTransform(scrollYProgress, [fromTop - screen, section + fromTop], [50, 0])

  const animateLeft = useTransform(
    scrollYProgress,
    [fromTop - screen, section + fromTop],
    [50, 0]
  );

  return (
    <div className="container mx-auto mt-[20px]" ref={ref}>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-start justify-center">
          <motion.div
            className="md:text-[6rem] text-[3rem] leading-none font-[GEOCAPS] ml-[-3rem] md:ml-0"
            style={{
              x: animateRight,
            }}
          >
            {props.messages.stickySection.textHorizontalAnimation.top}
          </motion.div>
          <motion.div
            className="md:text-[6rem] text-[3rem] leading-none font-[GEOCAPS]"
            style={{
              x: animateLeft,
              marginTop: 10,
            }}
          >
            {props.messages.stickySection.textHorizontalAnimation.middle}
          </motion.div>
          <motion.div
            className="md:text-[6rem] text-[3rem] leading-none font-[GEOCAPS] md:ml-[-7.5rem] ml-[-5rem]"
            style={{
              x: animateRight,
              marginTop: 10,
            }}
          >
            {props.messages.stickySection.textHorizontalAnimation.bottom}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(TextHorizontalAnimation);
