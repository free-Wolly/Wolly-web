import React from 'react'
import { motion } from 'framer-motion'

import AnimatedText from '../../Helpers/TextAnimation/AnimateText'
import { arrowVariant, banner } from './variants'
import Marquee from './Marquee/Marquee'

const Intro = ({ messages }: any) => {
  return (
    <div id="main" className={`font-[GEOCAPS] relative w-full h-screen`}>
      <div className="mx-auto">
        <div className="absolute inset-0 bg-[#09191C]">
          <motion.video
            autoPlay
            loop
            muted
            style={{ opacity: 0.3 }}
            transition={{
              ease: [0.06, 0.01, 0.05, 0.9],
              duration: 1.6,
            }}
            playsInline
            className="object-cover h-full w-full"
            src={`/assets/videos/intro.mp4`}
            layoutId="main-image-1"
          />
        </div>
        <motion.img
          animate="visible"
          exit="exit"
          initial="hidden"
          variants={arrowVariant}
          transition={{
            duration: 1,
            delay: 1,
            ease: 'linear',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatType: 'loop',
            repeat: Infinity,
          }}
          className="absolute left-0 right-0 bottom-0 mx-auto visible z-[100]"
          src="/assets/images/arrow-down.svg"
          alt=""
          width={30}
          height={30}
        />
        <motion.div className="h-screen w-full overflow-hidden relative flex flex-col justify-center content-center " variants={banner}>
          <div className="overflow-hidden flex items-center mt-24 pl-8 text-white">
            <AnimatedText title={'შემოაბიჯე'} side />
          </div>
          <div className={'overflow-hidden flex text-wollyBlue'}>
            <Marquee title={messages.intro.introAnimatedTextMiddle} />
          </div>
          <div className={'overflow-hidden flex justify-end pr-8 text-white'}>
            <AnimatedText title={'სივრცეში'} side />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Intro
