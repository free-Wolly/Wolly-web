import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import AnimatedText from '../../../Helpers/TextAnimation/AnimateText'

const Marquee = ({ title }: any) => {
  const [playMarquee, setPlayMarquee] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true)
    }, 2000)
  }, [])

  return (
    <div className={`banner-row marquee`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className={playMarquee ? 'animate' : 'marquee__inner'}
      >
        <AnimatedText title={title} disabled />
        <AnimatedText title={'სისუფთავის'} />
        <AnimatedText title={'კომფორტის'} disabled />
        <AnimatedText title={'ხარისხის'} disabled />
        {/* <AnimatedText title={title} disabled />
        <AnimatedText title={'ხარისხი'} />
        <AnimatedText title={title} disabled />
        <AnimatedText title={title} disabled /> */}
      </motion.div>
    </div>
  )
}

export default Marquee
