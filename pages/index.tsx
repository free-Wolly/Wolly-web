import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import PageHeader from "../components/PageHeader";
import Intro from "../components/Landing/Intro";
import SecondSection from "../components/Landing/SecondSection";
import Slider from "../components/Landing/Slider";
import Blog from "../components/Landing/Blog";
import Team from "../components/Landing/Team";
import PageFooter from "../components/PageFooter";
import Faq from "../components/Landing/Faq";
import SocialMedia from "../components/Landing/SocialMedia";
import BeforeAfter from "../components/Landing/BeforeAfter";
import GetApp from "../components/Landing/GetApp";
import StickySections from "../components/Landing/StickySection";
import Carousel from "../components/Landing/InstagramStories/Carousel";
import WhatsIncluded from "../components/Landing/WhatsIncluded";
import Loader from "../components/Landing/Loader";
import TextHorizontalAnimation from "../components/Landing/TextHorizontalAnimation";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Wolly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/wolly.png" />
      </Head>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <div id="landing-page">
            <PageHeader />
            <Intro />
            <SecondSection />
            <Slider />
            <Blog />
            <TextHorizontalAnimation />
            <StickySections />
            <Team />
            <GetApp />
            <Carousel />
            <SocialMedia />
            <WhatsIncluded />
            <BeforeAfter />
            <Faq />
            <PageFooter />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
