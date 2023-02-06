import Head from "next/head";
import React from "react";
import PageFooter from "../../components/PageFooter";
import Header from "./Components/Header";
import Terms from "./Components/Terms";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditionss</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/wolly.png" />
      </Head>
      <Header />
      <Terms />
      <PageFooter />
    </>
  );
}
