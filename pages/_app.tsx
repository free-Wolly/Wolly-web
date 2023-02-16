import "../styles/globals.css";
import "../styles/Marquee/marquee.css";

import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const myFont = localFont({
  src: "../public/assets/fonts/bpg_nino_mtavruli_normal.otf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
