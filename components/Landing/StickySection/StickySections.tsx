import Image, { StaticImageData } from 'next/image'
import React, { useMemo, useRef } from 'react'
import images from './constants'
import Link from 'next/link'
import storesInfo from './stores'
import TextHorizontalAnimation from '../TextHorizontalAnimation'

const StickySections = ({ messages }: any): JSX.Element => {
  const sectionRef = useRef(null)
  const renderStores = useMemo(() => {
    return storesInfo.map((store: { img: () => JSX.Element; link: string }, id: number) => {
      return (
        <Link
          key={id}
          className="lg:sticky xl:top-[40.625rem] lg:top-[28rem] lg:block"
          href={store.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <store.img />
        </Link>
      )
    })
  }, [])

  const renderImages = useMemo(() => {
    return images.map((image: StaticImageData, id: number) => {
      return (
        <Image
          loading="lazy"
          placeholder="blur"
          key={id}
          className={`lg:sticky lg:top-[6.25rem] lg:block lg:w-[19%] 2xl:h-[37rem] xl:h-[30rem] lg:h-[22rem] lg:max-w-none lg:mb-[6.25rem] max-h-[37.5rem] ml-0 flex flex-col justify-center items-center sm:w-[18.75rem] w-[80%]  ${
            id === 0
              ? 'lg:ml-[0%]'
              : id === 1
              ? 'lg:ml-[20%]'
              : id === 2
              ? 'lg:ml-[40%]'
              : id === 3
              ? 'lg:ml-[60%]'
              : id === 4
              ? 'lg:ml-[80%]'
              : ''
          } lg:mt-[25rem] rounded-2xl`}
          src={image}
          alt=""
          width={1000}
          height={1000}
        />
      )
    })
  }, [])
  return (
    <>
      <div
        ref={sectionRef}
        style={{
          backgroundImage: 'url("/assets/images/stickySection/bck.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="lg:h-[5000px] md:h-[3000px] h-[2000px]"
      >
        <div className="sticky top-[20%] flex justify-center content-center items-center text-[#041919]">
          <div className="text-center lg:text-left">
            <div className="text-[100px] lg:text-[200px] font-bold leading-none">
              <TextHorizontalAnimation ref={sectionRef} messages={messages} />
            </div>
            {/* <div className="md:text-[4rem] text-[2rem]">
              {messages.stickySection.title.third}
            </div>
            <div className="md:text-[3rem] text-[2rem]">
              {messages.stickySection.title.fourth}
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-[#041919]" id="app">
        <div className="max-w-[125rem] mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 py-8 lg:py-32 lg:block flex flex-col items-center gap-[3.125rem]">
          {renderImages}
          <div className="flex justify-center items-center lg:gap-[1.875rem] gap-[3.125rem] lg:mx-0">{renderStores}</div>
        </div>
      </div>
    </>
  )
}

export default StickySections
