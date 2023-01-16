import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Intro } from "../components/Landing/Intro/Intro";
import { SecondSection } from "../components/Landing/SecondSection/SecondSection";
import { Slider } from "../components/Landing/Slider/Slider";

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
    </>
  );
}
