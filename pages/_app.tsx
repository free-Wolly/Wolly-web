import "../styles/globals.css";
import "../styles/Marquee/marquee.css";

import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { ReactQueryDevtools } from "react-query/devtools";

import { LanguageProvider } from "../contexts/languageContext";
import { BlogPostsProvider } from "../contexts/blogContext";

import { QueryClient, QueryClientProvider } from "react-query";

const myFont = localFont({
  src: "../public/assets/fonts/bpg_nino_mtavruli_normal.otf",
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={myFont.className}>
        <LanguageProvider>
          <BlogPostsProvider>
            <Component {...pageProps} />
          </BlogPostsProvider>
        </LanguageProvider>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
