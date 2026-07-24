import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (en: string, hi: string) => string;
  tn: <T>(en: T, hi: T) => T;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("sharda-lang") as Lang | null;
      if (saved === "en" || saved === "hi") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("sharda-lang", lang);
      document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang,
    toggle: () => setLang(lang === "en" ? "hi" : "en"),
    t: (en, hi) => (lang === "hi" ? hi : en),
    tn: (en, hi) => (lang === "hi" ? hi : en),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback so components don't crash if used outside provider (e.g. SSR edge cases)
    return {
      lang: "en",
      setLang: () => {},
      toggle: () => {},
      t: (en) => en,
      tn: (en) => en,
    };
  }
  return ctx;
}