import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import en from "../public/lang/en.json";
import ka from "../public/lang/ka.json";

interface LanguageContextProps {
  locale: string;
  setLocale: (locale: string) => void;
  messages: any;
}

const LanguageContext = createContext<LanguageContextProps>({
  locale: "ka",
  setLocale: () => {},
  messages: ka,
});

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale || "ka");
  const messages = locale === "ka" ? ka : en;

  useEffect(() => {
    router.push(router.pathname, router.asPath, { locale });
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, messages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const { locale, setLocale, messages } = useContext(LanguageContext);
  return { locale, setLocale, messages };
}
