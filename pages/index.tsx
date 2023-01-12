import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Intro } from "../components/Landing/Intro/Intro";
import { SecondSection } from "../components/Landing/SecondSection/SecondSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wolly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/wolly.png" />
      </Head>
      <Header />
      <Intro />
      <SecondSection />
    </>
  );
}
