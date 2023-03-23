import { Variants } from 'framer-motion'

export const letterAni: Variants = {
  initial: { y: 500 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.3,
    },
  },
}
