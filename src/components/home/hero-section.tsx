"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Icons } from "@/constants/icons";
import { useI18n } from "@/components/language-provider";
import { DeveloperCard } from "@/components/developer-card";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { t } = useI18n();

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-50  px-6 py-24 text-slate-900 transition-colors duration-300 md:py-32 dark:bg-[#121212] dark:text-slate-200"
      onMouseMove={handleMouseMove}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 dark:opacity-20" />

      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 container grid items-center gap-16 md:grid-cols-2">
        {/*  LEFT CONTENT*/}
        <div className="flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="gap-2 rounded-full border-slate-200 bg-white/50 px-4 py-1.5 text-slate-600 backdrop-blur-md transition-colors hover:border-slate-300 hover:bg-white dark:border-neutral-700 dark:bg-[#121212] dark:text-slate-300 dark:hover:border-neutral-600 dark:hover:bg-black/25"
            >
              <span className="relative flex h-2 w-2">
                {/* จุดไฟยังคงเป็นสี Amber เพื่อให้เข้ากับ Theme แต่ดูไม่ตะโกน */}
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
              </span>
              <span className="text-xs font-medium">{t.hero.badge}</span>
            </Badge>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl leading-tight font-extrabold text-slate-900 md:text-7xl dark:text-white"
            >
              {t.hero.heading.prefix} <br />
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                {t.hero.heading.highlight}
              </span>{" "}
              {t.hero.heading.suffix}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-md text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {t.hero.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-neutral-900 px-8 text-white shadow-lg shadow-neutral-900/20 transition-all hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-neutral-900/40 active:scale-95 dark:bg-neutral-50 dark:text-neutral-900 dark:shadow-white/10 dark:hover:bg-neutral-200"
            >
              <Link href="#projects" className="gap-2 font-semibold">
                {t.hero.actions.viewProjects}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* 2. Secondary Button (GitHub) - เพิ่ม Amber Accent ตอน Hover */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-neutral-200 bg-white/50 text-neutral-600 transition-all hover:border-amber-200 hover:bg-amber-50/50 hover:text-amber-600 active:scale-95 dark:border-neutral-800 dark:bg-transparent dark:text-neutral-400 dark:hover:border-amber-900/50 dark:hover:bg-amber-950/20 dark:hover:text-amber-400"
            >
              <Link
                href="https://github.com/Garfie1dlnwza"
                target="_blank"
                className="gap-2"
              >
                <Terminal className="h-4 w-4" />
                {t.hero.actions.github}
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="relative flex h-[500px] w-full flex-col items-center justify-center">
          {/* ชั้นใน */}
          <OrbitingCircles iconSize={40} radius={320} duration={16} speed={1.2}>
            <Icons.flutter />
            <Icons.nextjs />
            <Icons.typescript />
            <Icons.gpt />
            <Icons.firebase />
          </OrbitingCircles>

          {/* ชั้นนอก */}
          <OrbitingCircles
            iconSize={40}
            radius={220}
            duration={20}
            speed={0.9}
            reverse
          >
            <Icons.docker />
            <Icons.react />
            <Icons.tailwindcss />
            <Icons.postgreSql />
            <Icons.nodejs />
            <Icons.gofiber />
          </OrbitingCircles>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              duration: 0.5,
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative z-20 w-full max-w-md"
          >
            <DeveloperCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
