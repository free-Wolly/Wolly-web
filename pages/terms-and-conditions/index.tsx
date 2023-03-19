import Head from "next/head";
import React from "react";
import { useLanguage } from "../../components/language";
import PageFooter from "../../components/PageFooter";
import Header from "./Components/Header";
import Terms from "./Components/Terms";

export default function TermsAndConditions() {
  const { locale, setLocale, messages } = useLanguage();

  return (
    <>
      <Head>
        <title>Terms & Conditions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/wolly.png" />
      </Head>
      <Header messages={messages} locale={locale} setLocale={setLocale} />
      <Terms messages={messages} />
      <PageFooter messages={messages} />
    </>
  );
}
