"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // ป้องกัน Hydration Mismatch (รอให้ Client โหลดเสร็จก่อนค่อยแสดงผล)
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render พื้นที่ว่างๆ ไว้ก่อนกัน layout ขยับ
    return <div className="h-10 w-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group dark:border-dark-800 dark:bg-dark-900 dark:hover:bg-dark-800 relative flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white transition-all duration-300 hover:border-amber-500/50 hover:bg-neutral-100 focus:outline-none dark:hover:border-amber-500/50"
      aria-label="Toggle theme"
    >
      {/* ☀️ SUN ICON:
          - ตอนสว่าง: หมุน 0 องศา, ขนาด 100% (scale-100)
          - ตอนมืด: หมุน -90 องศา, ขนาด 0% (scale-0) -> หายไป
      */}
      <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500 transition-all duration-300 dark:scale-0 dark:-rotate-90" />

      {/* 🌙 MOON ICON:
          - ใช้ absolute เพื่อให้ซ้อนทับตำแหน่งเดียวกัน
          - ตอนสว่าง: หมุน 90 องศา, ขนาด 0% (scale-0) -> ซ่อนอยู่
          - ตอนมืด: หมุน 0 องศา, ขนาด 100% (scale-100) -> โผล่มา
      */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 text-amber-400 transition-all duration-300 dark:scale-100 dark:rotate-0" />

      {/* Glow Effect (Optional): แสงฟุ้งๆ ตอน Hover */}
      <span className="absolute inset-0 rounded-full bg-amber-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
}
