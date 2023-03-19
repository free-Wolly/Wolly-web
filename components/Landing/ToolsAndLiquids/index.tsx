import React, { useMemo, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import toolsImages from "./toolsImages";
import liquidsImages from "./liquidsImages";

const ToolsAndLiquids = ({ messages }: any) => {
  const [option, setOption] = useState("tools");
  const [reduceOpacity, setReduceOpacity] = useState(false);

  const sectionRef: any = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-300px" });

  const renderToolsImages = useMemo(
    () =>
      toolsImages.map((image, id) => (
        <motion.img
          key={image.id}
          src={image.image.src}
          alt=""
          height={1000}
          width={1000}
          initial={{
            opacity: 0,
            y: -300,
          }}
          animate={
            sectionInView && {
              opacity: 1,
              y: 0,
              transition: {
                delay: 2 + id / 6,
                duration: 1,
              },
            }
          }
          exit={{
            opacity: 0,
            y: 300,
            pointerEvents: "none",
            transition: { delay: id / 6, duration: 1 },
          }}
          whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
          onHoverStart={() => setReduceOpacity(true)}
          onHoverEnd={() => setReduceOpacity(false)}
          className={`lg:w-1/6 w-1/3 cursor-pointer]`}
        />
      )),
    [sectionInView]
  );

  const renderLiquidsImages = useMemo(
    () =>
      liquidsImages.map((image, id) => (
        <motion.img
          key={image.id}
          src={image.image.src}
          alt=""
          height={1000}
          width={1000}
          initial={{
            opacity: 0,
            y: -300,
          }}
          animate={
            sectionInView && {
              opacity: 1,
              y: 0,
              transition: {
                delay: 2 + id / 6,
                duration: 1,
              },
            }
          }
          exit={{
            opacity: 0,
            y: 300,
            pointerEvents: "none",
            transition: { delay: id / 6, duration: 1 },
          }}
          whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
          onHoverStart={() => setReduceOpacity(true)}
          onHoverEnd={() => setReduceOpacity(false)}
          className={`lg:w-[12.5%] w-1/4 cursor-pointer`}
        />
      )),
    [sectionInView]
  );

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen max-h-[1500px] md:min-h-auto py-4 flex flex-col items-center justify-end bg-black overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0 bg-[url('/assets/images/tools/room.png')] bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 1 }}
        animate={reduceOpacity ? { opacity: 0.8 } : { opacity: 1 }}
      />
      <motion.button
        className="absolute top-[25%] text-[35px] font-[BOG] z-20"
        onClick={() => setOption(option === "tools" ? "liquids" : "tools")}
      >
        {option === "tools"
          ? messages.liquidsTools.liquids
          : messages.liquidsTools.tools}
      </motion.button>
      <motion.div className="w-full flex flex-row flex-wrap-reverse lg:flex-nowrap z-10">
        <AnimatePresence initial={false}>
          {option === "tools" ? renderToolsImages : renderLiquidsImages}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ToolsAndLiquids;
