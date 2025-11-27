"use client";

import * as React from "react";
import { useI18n } from "@/components/language-provider";
import { type SupportedLanguage } from "@/constants/i18n";

const options: { code: SupportedLanguage; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "th", label: "TH" },
];

export function LanguageToggle() {
  const { language, setLanguage } = useI18n();

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-neutral-200 bg-neutral-100/50 p-1 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/50">
      {options.map((option) => {
        const isActive = language === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-pressed={isActive}
            className={`relative rounded-full px-3 py-1 text-xs font-bold transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-white text-neutral-950 shadow-sm ring-1 ring-black/5 dark:bg-neutral-800 dark:text-white dark:ring-white/10"
                : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            } `}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
