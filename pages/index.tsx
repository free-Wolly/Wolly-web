import Head from "next/head";
import Carousel from '../components/Landing/InstagramStories/Carousel'
import { Header } from "../components/Header/Header";
import { Intro } from "../components/Landing/Intro/Intro";
import { SecondSection } from "../components/Landing/SecondSection/SecondSection";
import { Slider } from "../components/Landing/Slider/Slider";
import { Blog } from "../components/Landing/Blog/Blog";
import { Team } from "../components/Landing/Team/Team";
import { Footer } from "../components/Footer/Footer";
import { Faq } from "../components/Landing/Faq/Faq";
import { SocialMedia } from "../components/Landing/SocialMedia/SocialMedia";
import { BeforeAfter } from "../components/Landing/BeforeAfter/BeforeAfter";
import { GetApp } from "../components/Landing/GetApp/GetApp";
import { StickySections } from "../components/Landing/StickySection/StickySections";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wolly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/wolly.png" />
      </Head>
      <Header />
      <Intro />
      <SecondSection />
      <Slider />
      <Blog />
      <StickySections />
      <Team />
      <GetApp />
      <Carousel />
      <SocialMedia />
      <BeforeAfter />
      <Faq />
      <Footer />
    </>
  )
}
