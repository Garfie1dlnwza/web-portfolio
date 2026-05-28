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

  // Handle Scroll Effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock Body Scroll when Mobile Menu is open (UX Fix)
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-neutral-200/50 bg-[#F0F0F0]/80 shadow-sm backdrop-blur-xl dark:border-neutral-800/50 dark:bg-[#121212]/80"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* SECTION 1: LEFT (LOGO) */}
            <div className="flex flex-1 items-center justify-start">
              <Link
                href="/"
                className="font-heading text-xl font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-80 dark:text-slate-200"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
              >
                PORTFOLIO
              </Link>
            </div>

            {/*
               SECTION 2: CENTER (DESKTOP MENU)
          */}
            <div className="hidden flex-1 items-center justify-center md:flex">
              <div className="flex items-center gap-1 rounded-full bg-neutral-100/50 border border-neutral-300 px-2 py-1 backdrop-blur-md dark:bg-neutral-800/50 dark:border-neutral-700">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="hover:text-primary dark:hover:text-primary px-4 py-1.5 text-sm font-medium whitespace-nowrap text-neutral-600 transition-colors dark:text-neutral-400"
                  >
                    {t.nav[item.key]}
                  </Link>
                ))}
              </div>
            </div>

            {/*
               SECTION 3: RIGHT (ACTIONS)
            */}
            <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
              {/* Desktop Only Actions */}
              <div className="hidden items-center gap-4 md:flex">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="group flex items-center gap-1 text-sm font-medium text-neutral-900 transition-colors hover:text-amber-500 dark:text-neutral-200 dark:hover:text-amber-400"
                >
                  <span>{t.resume.link}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700" />{" "}
                {/* Divider */}
                <ThemeToggle />
                <LanguageToggle />
              </div>

              {/* Mobile Only Actions (Hamburger) */}
              <div className="flex items-center gap-2 md:hidden">
                {/* โชว์ Theme/Lang บน Mobile Bar ด้วย เพื่อความสะดวก (Optional) */}
                <ThemeToggle />
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="rounded-md p-2 text-neutral-900 transition-colors hover:bg-neutral-100 active:scale-95 dark:text-neutral-50 dark:hover:bg-neutral-800"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="animate-in slide-in-from-top-10 absolute inset-x-0 top-16 border-b border-neutral-200 bg-[#F0F0F0]/95 px-6 py-8 shadow-xl backdrop-blur-xl dark:border-neutral-800 dark:bg-[#121212]/95">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-lg font-medium text-neutral-600 transition-colors hover:text-amber-500 dark:text-neutral-400 dark:hover:text-amber-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.nav[item.key]}
                </Link>
              ))}

              <hr className="border-neutral-200 dark:border-neutral-800" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  Settings
                </span>
                <div className="flex gap-2">
                  <LanguageToggle />
                </div>
              </div>

              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 active:scale-95 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{t.resume.download}</span>
                <FileText className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
