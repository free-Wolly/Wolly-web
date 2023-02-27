import React, { useRef, useState, useEffect } from "react";
import { useTransform, motion, useScroll } from "framer-motion";

const TextHorizontalAnimation = ({ messages }: any) => {
  const [fromTop, setFromTop] = useState(0);
  const [section, setSection] = useState(0);
  const [screen, setScreen] = useState(0);
  const ref: any = useRef(null);
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
  }, []);

  const animateRight = useTransform(
    scrollYProgress,
    [fromTop - screen, section + fromTop],
    [0, 50]
  );

  const animateLeft = useTransform(
    scrollYProgress,
    [fromTop - screen, section + fromTop],
    [50, 0]
  );

  return (
    <div ref={ref} className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-start justify-center">
          <motion.div
            className="text-[100px] font-bold leading-none"
            style={{
              x: animateRight,
            }}
          >
            {messages.textHorizontalAnimation.leftTop}
          </motion.div>
          <motion.div
            className="text-[100px] font-bold leading-none"
            style={{
              x: animateLeft,
            }}
          >
            {messages.textHorizontalAnimation.leftBot}
          </motion.div>
        </div>
        <div>
          <video
            src="/assets/videos/home-phones.mp4"
            muted
            autoPlay
            loop
            className="w-[600px]"
          />
        </div>
        <div className="flex flex-col gap-[50px] max-w-[300px] mb-[50px] lg:mb-0 ">
          <div className="text-[50px] font-bold leading-none">
            {messages.textHorizontalAnimation.right.title}
          </div>
          <div>{messages.textHorizontalAnimation.right.text}</div>
        </div>
      </div>
    </div>
  );
};

export default TextHorizontalAnimation;
