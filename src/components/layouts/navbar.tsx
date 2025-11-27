"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useI18n } from "@/components/language-provider";
import { navItems } from "@/constants/navbar-items";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { t } = useI18n();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-neutral-200/50 bg-[#F0F0F0]/80 shadow-sm backdrop-blur-md dark:border-neutral-800/50 dark:bg-[#121212]/80"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        {" "}
        <div className="flex h-16 items-center justify-between">
          {/* 1. LOGO */}
          <div className="flex flex-1 items-center">
            <Link
              href="/"
              className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              PORTFOLIO
            </Link>
          </div>

          {/* 2. DESKTOP MENU */}
          <div className="flex flex-1 justify-center md:items-center md:gap-8">
            <div className="hidden md:flex md:items-center md:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="hover:text-primary dark:hover:text-primary max-w-[120px] truncate text-sm font-medium text-neutral-600 transition-colors dark:text-neutral-400"
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. RIGHT SIDE ACTIONS (Desktop) */}
          <div className="flex flex-1 items-center justify-end gap-4 md:flex">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="group hover:text-primary dark:hover:text-primary flex items-center gap-1 text-sm font-medium text-neutral-900 transition-colors dark:text-neutral-200"
            >
              <span>{t.resume.link}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* 4. MOBILE HAMBURGER */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-primary text-neutral-900 transition-colors dark:text-neutral-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="animate-in slide-in-from-top-5 fade-in absolute inset-x-0 top-16 border-b border-neutral-200 bg-[#F0F0F0]/95 px-6 py-6 shadow-lg backdrop-blur-md md:hidden dark:border-neutral-800 dark:bg-[#121212]/95">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="hover:text-primary dark:hover:text-primary block text-base font-medium text-neutral-600 dark:text-neutral-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav[item.key]}
              </Link>
            ))}

            <hr className="border-neutral-200 dark:border-neutral-800" />

            <Link
              href="/resume.pdf"
              target="_blank"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>{t.resume.download}</span>
              <FileText className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
