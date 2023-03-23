import React from 'react'
import Image from 'next/image'
import SidePost from './SidePost'
import images from './images'
import SectionHeader from '../../Helpers/SectionHeader'

const Blog = ({ messages }: any): JSX.Element => {
  return (
    <div id="about" className="container mx-auto 2xl:px-20 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4">
      <SectionHeader
        topTitle={messages.blog.sectionTitle}
        botTitle={messages.blog.title}
        delay={2}
        textBackgroundElementWidth={'32%'}
        staggerChildren={0.07}
      />
      <div className="w-full flex flex-col lg:flex-row gap-16 mb-16" style={{ marginTop: 60 }}>
        <div className="relative w-full xl:w-[55%] lg:w-[50%] flex flex-col rounded-3xl p-6 lg:p-0 lg:pt-0">
          <Image
            loading="lazy"
            placeholder="blur"
            className="w-full xl:h-[32.5rem] lg:h-[25rem] mb-[25px] rounded-3xl"
            src={images[0]}
            alt=""
            width={1000}
            height={1000}
          />
          <div className="flex flex-col justify-center items-center text-center">
            <div className="text-[26px] font-bold font-[BOG] text-[#304D63]">{messages.blog.blogItems[0].title}</div>
            {/* <div className="text-[22px] text-[#597F9DBF] text-center font-[BOG] tracking-tighter">{messages.blog.blogItems[0].text}</div> */}
          </div>
        </div>
        <div className="xl:w-[45%] lg:w-[50%] flex flex-col gap-8">
          <div className=" flex flex-row gap-8">
            <SidePost blogItem={messages.blog.blogItems[1]} id={1} />
            <SidePost blogItem={messages.blog.blogItems[2]} id={2} />
          </div>
          <div className="flex flex-row gap-8">
            <SidePost blogItem={messages.blog.blogItems[3]} id={3} />
            <SidePost blogItem={messages.blog.blogItems[4]} id={4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
