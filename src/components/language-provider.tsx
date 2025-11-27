"use client";

import * as React from "react";
import { translations, type SupportedLanguage } from "@/constants/i18n";

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  t: (typeof translations)[SupportedLanguage];
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<SupportedLanguage>("en");

  React.useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (storedLanguage === "en" || storedLanguage === "th") {
      setLanguage(storedLanguage);
      return;
    }

    if (navigator.language?.toLowerCase().startsWith("th")) {
      setLanguage("th");
    }
  }, []);

  const handleSetLanguage = React.useCallback(
    (nextLanguage: SupportedLanguage) => {
      setLanguage(nextLanguage);
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    },
    [],
  );

  const value = React.useMemo(
    () => ({
      language,
      setLanguage: handleSetLanguage,
      t: translations[language],
    }),
    [language, handleSetLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
