import React from "react";
import Head from "next/head";
import Header from "./Components/Header";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import PageFooter from "../../components/PageFooter";

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
      <PageFooter />
    </>
  );
}
