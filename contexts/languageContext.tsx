import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import en from "../public/lang/en.json";
import ka from "../public/lang/ka.json";
import { DEFAULT_LOCALE } from "../constants/language";

interface LanguageContextProps {
  locale: string;
  setLocale: (locale: string) => void;
  messages: any;
}

export const LanguageContext = createContext<LanguageContextProps>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  messages: ka,
});

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale || DEFAULT_LOCALE);
  const messages = locale === DEFAULT_LOCALE ? ka : en;

  useEffect(() => {
    router.push(router.pathname, router.asPath, { locale });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, messages }}>
      {children}
    </LanguageContext.Provider>
  );
}
