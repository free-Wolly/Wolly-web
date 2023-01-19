// import { MotionConfig } from 'framer'
// import React, { useContext } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'

// // import { MotionBox } from '../motion-box'
// import styles from './styles.module.css'

// export const ProgressBar = ({
//   percents = 40,
//   caption = 'hello',
//   duration = 10,
//   delay = 0.5,
//   easing = 'linear', // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
//   barWidth = 300,
//   barHeight = 24,
//   progressColor = 'brand',
//   baseColor = 'bg100',
// }) => {
//   //   const { inView } = useContext(IntersectionContext);

//   const percentsOffset = (percents - 100) * (barWidth / 100)

//   const transition = {
//     duration: duration,
//     delay: delay,
//     ease: easing,
//   }

//   const variants = {
//     enter: {
//       // opacity: 0,
//       backgroundColor: 'blue',
//       x: -barWidth,
//     },
//     animate: {
//       // opacity: 1,
//       backgroundColor: 'red',
//       x: [-barWidth, percentsOffset],
//       transition,
//     },
//   }

//   return (
//     <div className={styles.container}>
//       <motion.div
//         variants={variants}
//         initial="enter"
//         animate={'inView' ? 'animate' : 'enter'}
//         exit="enter"
//         // bg={progressColor}
//         className={styles.root}
//       />
//       {/* <motion.div
//         className="progress-bar"
//         style={{ scaleX: scrollYProgress }}
//       /> */}
//     </div>
//   )
// }

import styles from './styles.module.css'
import { motion } from 'framer-motion'

function Progressbar({ value = 100 }) {
  return (
    <div className={styles.progressbarContainer}>
      <div className={styles.progressbar}>
        <motion.div
          className={styles.bar}
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 4.1,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  )
}

export default Progressbar
