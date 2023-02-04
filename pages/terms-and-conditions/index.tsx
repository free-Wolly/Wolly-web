import Head from 'next/head'
import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import Header from '../../components/TermsAndConditions/Header'
import { Terms } from '../../components/TermsAndConditions/Terms'

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/wolly.png" />
      </Head>
      <Header />
      <Terms />
      <Footer />
    </>
  )
}