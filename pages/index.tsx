import Head from 'next/head'
import PageHeader from '../components/PageHeader'
import Intro from '../components/Landing/Intro'
import SecondSection from '../components/Landing/SecondSection'
import Slider from '../components/Landing/Slider'
import Blog from '../components/Landing/Blog'
// import Team from "../components/Landing/Team";
import PageFooter from '../components/PageFooter'
import Faq from '../components/Landing/Faq'
import BeforeAfter from '../components/Landing/BeforeAfter'
import StickySections from '../components/Landing/StickySection'
import Carousel from '../components/Landing/InstagramStories/Carousel'
// import WhatsIncluded from "../components/Landing/WhatsIncluded";
// import LiquidsAndTools from "../components/Landing/ToolsAndLiquids";

import { useLanguage } from '../components/language'
import PricingPlan from '../components/Landing/PricingPlan'

export default function Home() {
  const { locale, setLocale, messages } = useLanguage()

  return (
    <>
      <Head>
        <title>Wolly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/wolly-icon.png" />
      </Head>
      <div id="landing-page">
        <PageHeader locale={locale} setLocale={setLocale} messages={messages} />
        <Intro messages={messages} />
        <SecondSection messages={messages} />
        <Slider messages={messages} />
        {/* <Team /> */}
        <PricingPlan messages={messages} locale={locale} />
        <StickySections messages={messages} />
        <BeforeAfter messages={messages} />
        <Carousel messages={messages} />
        <Faq messages={messages} />
        {/* <LiquidsAndTools messages={messages} /> */}
        <Blog messages={messages} />
        {/* <WhatsIncluded messages={messages} /> */}
        <PageFooter messages={messages} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}
