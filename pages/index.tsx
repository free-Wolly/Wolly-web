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

export default function Home() {
  return (
    <>
      <Head>
        <title>Wolly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/wolly.png" />
      </Head>
      <PageHeader />
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
      <PageFooter />
    </>
  );
}
