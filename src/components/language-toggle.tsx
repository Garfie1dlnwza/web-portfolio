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
    <div className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 p-1 text-xs font-semibold shadow-sm backdrop-blur transition-colors dark:border-neutral-700 dark:bg-neutral-900/70">
      {options.map((option) => {
        const isActive = language === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-pressed={isActive}
            className={`rounded-full px-3 py-1 transition-colors ${
              isActive
                ? "bg-primary text-dark-950 dark:bg-amber-400 dark:text-neutral-900"
                : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
