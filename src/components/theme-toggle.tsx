"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-10 w-10" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 focus:outline-none dark:hover:bg-neutral-800"
      aria-label="Toggle theme"
    >
      {/* ☀️ SUN: สี Amber สว่างสดใส */}
      <Sun className="h-5 w-5 text-amber-500 transition-all duration-300 dark:scale-0 dark:-rotate-90" />

      {/* 🌙 MOON: สี Amber อ่อนลงนิดหน่อยเพื่อให้เข้ากับ Dark Mode */}
      <Moon className="absolute h-5 w-5 scale-0 rotate-90 text-amber-400 transition-all duration-300 dark:scale-100 dark:rotate-0" />

      {/* ตัด Glow Effect ออกเพื่อให้ดู Minimal และ Clean ที่สุด */}
    </button>
  );
}
