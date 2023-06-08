import "../styles/globals.css";
import "../styles/Marquee/marquee.css";

import type { AppProps } from "next/app";
import localFont from "@next/font/local";

import { LanguageProvider } from "../contexts/languageContext";
import { BlogPostsProvider } from "../contexts/blogContext";

const myFont = localFont({
  src: "../public/assets/fonts/bpg_nino_mtavruli_normal.otf",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <LanguageProvider>
        <BlogPostsProvider>
          <Component {...pageProps} />
        </BlogPostsProvider>
      </LanguageProvider>
    </main>
  );
}

export default MyApp;
