import React from "react";
import Head from "next/head";
import Header from "../../components/PrivacyPolicy/Header";
import { PrivacyPolicy } from "../../components/PrivacyPolicy/PrivacyPolicy";
import { Footer } from "../../components/Footer/Footer";

export default function Policy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/wolly.png" />
      </Head>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
