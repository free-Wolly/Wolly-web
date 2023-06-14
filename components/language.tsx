import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";

export function useLanguage() {
  const { locale, setLocale, messages } = useContext(LanguageContext);
  return { locale, setLocale, messages };
}
