import { translations } from "@/constants/i18n";

export type NavItemKey = keyof typeof translations.en.nav;
export const navItems = [
  { key: "about" satisfies NavItemKey, href: "#about" },
  { key: "education" satisfies NavItemKey, href: "#education" },
  { key: "skills" satisfies NavItemKey, href: "#skills" },
  { key: "projects" satisfies NavItemKey, href: "#projects" },
  { key: "experience" satisfies NavItemKey, href: "#experience" },
] as const;
