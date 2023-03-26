import React from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuItem'
import { navigationVariants } from './constants'
import handleClickScroll from '../../../utils/scrollToSection'

const Navigation = ({ locale, setLocale, messages }: { locale: string; setLocale: any; messages: any }): JSX.Element => {
  return (
    <motion.ul variants={navigationVariants} className="flex flex-col">
      {messages.header.menuItems.map(({ text, id }: { text: string; id: string }, index: number) => (
        <MenuItem onClick={() => handleClickScroll(id)} text={text} key={index} />
      ))}
      {/* <MenuItem
        onClick={() => setLocale(locale === "en" ? "ka" : "en")}
        text={locale === "en" ? "KA" : "EN"}
      /> */}
    </motion.ul>
  )
}
export default Navigation
