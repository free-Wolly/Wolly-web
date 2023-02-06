import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./carousel.module.css";
import Image from "next/image";
import images from "../Slider/images";
import Lottie from "lottie-react";
import Instagram from "../../../public/assets/animations/instagram.json";
import { Data } from "./constants";

const Carousel = () => {
  const [FlowDirection, setFlowDirection] = useState(true);
  const [CenterId, setCenterId] = useState(0);
  const [LeftId, setLeftId] = useState(Data.length - 1);
  const [RightId, setRightId] = useState(1);
  const [mostLeftId, setMostLeftId] = useState(Data.length - 2);
  const [mostRightId, setMostRightId] = useState(2);

  const nextBtn = useCallback(() => {
    if (LeftId === Data.length - 1) {
      setLeftId(0);
      setMostLeftId(Data.length - 1);
    } else {
      setLeftId(LeftId + 1);
      setMostLeftId(LeftId);
    }
    if (CenterId === Data.length - 1) {
      setCenterId(0);
    } else {
      setCenterId(CenterId + 1);
    }

    if (RightId === Data.length - 1) {
      setRightId(0);
      setMostRightId(1);
    } else {
      setRightId(RightId + 1);
      if (RightId + 2 > Data.length - 1) {
        setMostRightId(0);
      } else setMostRightId(RightId + 2);
    }
    setFlowDirection(true);
  }, [CenterId, LeftId, RightId]);

  useEffect(() => {
    setInterval(() => {
      // nextBtn();
    }, 4000);
  }, [nextBtn]);

  const prevBtn = () => {
    setFlowDirection(false);
    if (LeftId === 0) {
      setLeftId(Data.length - 1);
      setMostLeftId(Data.length - 2);
    } else {
      setLeftId(LeftId - 1);
      if (LeftId - 2 < 0) {
        setMostLeftId(Data.length - 1);
      } else setMostLeftId(LeftId - 2);
    }
    if (CenterId === 0) {
      setCenterId(Data.length - 1);
    } else {
      setCenterId(CenterId - 1);
    }
    if (RightId === 0) {
      setRightId(Data.length - 1);
      setMostRightId(0);
    } else {
      setRightId(RightId - 1);
      if (RightId > Data.length - 1) {
        setMostRightId(Data.length - 1);
      } else setMostRightId(RightId);
    }
  };

  const variants = {
    center: {
      x: "-12.8rem",
      opacity: 1,
      scale: 1,
      zIndex: "5",
      filter: "brightness(100%)",
      backgroundImage: "url(" + Data[CenterId] + ")",
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.25)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: "-38rem",
      opacity: 1,
      filter: "brightness(85%)",
      backgroundImage: "url(" + Data[LeftId] + ")",
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.25)",
      scale: 0.45,
      zIndex: "4",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    mostLeft: {
      x: "-55rem",
      opacity: 1,
      filter: "brightness(85%)",
      scale: 0.45,
      backgroundImage: "url(" + Data[mostLeftId] + ")",
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.25)",
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      backgroundImage: "url(" + Data[RightId] + ")",
      x: "12.5rem",
      opacity: 1,
      filter: "brightness(85%)",
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.25)",
      scale: 0.45,
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    mostRightId: {
      backgroundImage: "url(" + Data[mostRightId] + ")",
      x: "29.5rem",
      opacity: 1,
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.25)",
      scale: 0.45,
      zIndex: "2",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightHidden: {
      x: "70rem",
      scale: 0,
      opacity: 0,
    },
    mostRightHidden: {
      x: "70rem",
      scale: 0,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
    leftHidden: {
      x: "-14rem",
      scale: 0,
      opacity: 0,
    },
    mostLeftHidden: {
      x: "-70rem",
      scale: 0,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <motion.div className="bg-blue-100">
        <div className="container mx-auto relative flex justify-start items-center">
          <Lottie
            className="w-[100px] h-[100px]"
            animationData={Instagram}
            loop={true}
            autoPlay={true}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            height={100}
            width={100}
          />
          <div>
            We’re not saying we’re the best, but our customers sure are!
          </div>
        </div>
      </motion.div>
      <motion.div className="mx-auto relative flex items-center justify-center rounded-2xl  min-h-[500px] lg:min-h-[1000px] max-w-[2000px] overflow-hidden">
        <motion.div className="relative top-[100px] lg:top-[-50px] h-[40rem] ml-[165px] lg:ml-0">
          <motion.div
            key={mostLeftId}
            variants={variants}
            initial={"mostLeftHidden"}
            animate="mostLeft"
            exit={"mostLeftHidden"}
            className="absolute w-[15rem] h-[25rem] lg:w-[25rem] lg:h-[45rem] bg-center bg-cover bg-no-repeat rounded-xl flex justify-center z-10 overflow-hidden"
          >
            <div className="absolute rounded-xl flex flex-col items-center top-[45%]">
              <div
                className={`relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full transparent`}
              >
                <Image
                  className={style.hiddenAvatar}
                  src={images[1]}
                  loading="lazy"
                  width={100}
                  height={100}
                  alt="avatar"
                />
              </div>
              <div className={style.hiddenUsername}>hello</div>
            </div>
          </motion.div>
          <motion.div
            key={LeftId}
            variants={variants}
            initial={"mostLeft"}
            animate="left"
            exit={"leftHidden"}
            className="absolute w-[15rem] h-[25rem] lg:w-[25rem] lg:h-[45rem] bg-center bg-cover bg-no-repeat rounded-xl flex justify-center z-10 overflow-hidden"
          >
            <div className="absolute flex flex-col items-center top-[45%]">
              <div
                className={`relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full transparent`}
              >
                <Image
                  className={style.hiddenAvatar}
                  src={images[2]}
                  loading="lazy"
                  width={100}
                  height={100}
                  alt="avatar"
                />
              </div>
              <div className={style.hiddenUsername}>world</div>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            key={CenterId}
            initial={FlowDirection ? "right" : "left"}
            animate="center"
            className="absolute w-[15rem] h-[25rem] lg:w-[25rem] lg:h-[45rem] bg-center bg-cover bg-no-repeat rounded-xl flex justify-center z-10"
          >
            <div className={`${style.progressbarContainer} w-[80%] lg:w-[90%]`}>
              <div className={`${style.progressbar} rounded-xl`}>
                <motion.div
                  className={style.bar}
                  animate={{
                    width: `100%`,
                  }}
                  transition={{
                    duration: 4.1,
                    ease: "linear",
                    onComplete: nextBtn,
                  }}
                />
              </div>
            </div>
            <div className={`${style.user} rounded-xl`}>
              <Image
                className={style.avatar}
                src={images[0]}
                loading="lazy"
                width={100}
                height={100}
                alt="avatar"
              />
              <div className={style.username}>schalagashvili</div>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0, rotate: "90deg" }}
              animate={{ opacity: 1, scale: 1, rotate: "90deg" }}
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={style.prevBtn}
              onClick={prevBtn}
            >
              <motion.img
                // className={style.introArrow}
                src="/assets/images/down-arrow.svg"
                alt=""
                // style={{
                //   transform: "rotate(90deg)",
                // }}
                width={30}
                height={30}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0, rotate: "-90deg" }}
              animate={{ opacity: 1, scale: 1, rotate: "-90deg" }}
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={style.nextBtn}
              onClick={nextBtn}
            >
              <motion.img
                // className={style.introArrow}
                src="/assets/images/down-arrow.svg"
                alt=""
                width={30}
                height={30}
                style={{
                  // transform: "rotate(270deg)",
                  left: "0.5rem",
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
            <div className={`${style.gradient} rounded-xl`} />
          </motion.div>
          <motion.div
            key={RightId}
            variants={variants}
            initial={FlowDirection ? "rightHidden" : "center"}
            animate="right"
            exit={"rightHidden"}
            className="absolute w-[15rem] h-[25rem] lg:w-[25rem] lg:h-[45rem] bg-center bg-cover bg-no-repeat rounded-xl flex justify-center z-10 overflow-hidden"
          >
            <div className="absolute flex flex-col items-center top-[45%]">
              <div
                className={`relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full transparent`}
              >
                <Image
                  className={style.hiddenAvatar}
                  src={images[0]}
                  loading="lazy"
                  width={100}
                  height={100}
                  alt="avatar"
                />
              </div>
              <div className={style.hiddenUsername}>schalagashvili</div>
            </div>
          </motion.div>
          <motion.div
            key={mostRightId}
            variants={{ ...variants }}
            initial={"mostRightHidden"}
            animate="mostRightId"
            exit={"mostRightHidden"}
            className="absolute w-[15rem] h-[25rem] lg:w-[25rem] lg:h-[45rem] bg-center bg-cover bg-no-repeat rounded-xl flex justify-center z-10 overflow-hidden"
          >
            <div className="absolute flex flex-col items-center top-[45%]">
              <div
                className={`relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full transparent`}
              >
                <Image
                  className={style.hiddenAvatar}
                  src={images[3]}
                  loading="lazy"
                  width={100}
                  height={100}
                  alt="avatar"
                />
              </div>
              <div className={style.hiddenUsername}>sandro</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Carousel;
