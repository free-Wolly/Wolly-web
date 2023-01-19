import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer'
import Image from 'next/image'
import images from './images'

export const Slider = () => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const sliderRef = useRef<any>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    setSliderWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth)
  }, [])

  return (
    <div className="container mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 border-t-2">
      <div className="text-center text-3xl font-bold py-16">Slider Section</div>
      <motion.div ref={sliderRef} className="overflow-hidden ">
        <motion.div
          // drag="x"
          // dragConstraints={{ right: 0, left: -sliderWidth }}
          className="flex"
          // transition={{
          //   x: { type: 'spring', mass: 0.5, stiffness: 500, damping: 50 },
          // }}
        >
          {images.map((image, id: number) => {
            console.log({ id })
            return (
              <motion.div
                onClick={() => setActive(id)}
                // animate={['visible', 'active']}
                animate={active === id ? 'active' : 'closed'}
                variants={{
                  active: {
                    scale: 1.4,
                    width: 200,
                  },
                  closed: {
                    scale: 1,
                    width: 100,
                  },
                }}
                className="p-10 sm:min-w-25 min-h-30 min-w-full"
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 50,
                }}
                key={id}
              >
                <Image loading="lazy" placeholder="blur" className=" h-full rounded-3xl pointer-events-none" src={image} alt=""></Image>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
