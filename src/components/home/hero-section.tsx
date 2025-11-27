"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Icons } from "@/constants/icons";
import { useI18n } from "@/components/language-provider";

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
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F0F0F0] px-6 py-24 text-slate-900 transition-colors duration-300 md:py-32 dark:bg-[#121212] dark:text-slate-200"
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
              className="gap-2 rounded-full border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-amber-600 hover:bg-amber-500/20 dark:text-amber-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
              </span>
              {t.hero.badge}
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
              className="bg-primary rounded-full text-white shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] transition-all hover:bg-amber-600 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.6)]"
            >
              <Link href="#projects" className="gap-2 font-bold">
                {t.hero.actions.viewProjects}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                className="gap-2"
              >
                <Terminal className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                {t.hero.actions.github}
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="relative flex h-[500px] w-full flex-col items-center justify-center">
          {/* วงโคจรชั้นใน */}
          <OrbitingCircles iconSize={40} radius={140} duration={16} speed={1.2}>
            <Icons.flutter />
            <Icons.nextjs />
            <Icons.typescript />
            <Icons.gpt />
            <Icons.firebase />
          </OrbitingCircles>

          {/* วงโคจรชั้นนอก */}
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

          {/* VS Code Mac Style Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              duration: 0.5,
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative z-20 w-full max-w-md"
          >
            <Card className="overflow-hidden border-slate-200 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90">
              {/* Header: Mac Window Controls */}
              <CardHeader className="flex h-10 flex-row items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/80">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-xs text-slate-500 opacity-70">
                  developer.tsx
                </div>
                <div className="w-10" />
              </CardHeader>

              {/* Content: Code Snippet */}
              <CardContent className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
                <div className="flex text-slate-800 dark:text-slate-300">
                  <span className="mr-4 w-6 text-right text-slate-400 select-none">
                    1
                  </span>
                  <span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>
                  <span className="ml-2 text-yellow-600 dark:text-yellow-200">
                    garfield
                  </span>
                  <span className="mx-2 text-slate-400">=</span>
                  <span className="text-purple-600 dark:text-purple-400">
                    new
                  </span>
                  <span className="ml-2 text-yellow-600 dark:text-yellow-200">
                    Developer
                  </span>
                  <span className="text-slate-500 dark:text-slate-300">
                    ({`{`}
                  </span>
                </div>

                <div className="flex text-slate-800 dark:text-slate-300">
                  <span className="mr-4 w-6 text-right text-slate-400 select-none">
                    2
                  </span>
                  <span className="ml-4 text-blue-600 dark:text-blue-300">
                    name
                  </span>
                  <span className="text-slate-400">:</span>
                  <span className="ml-2 text-green-600 dark:text-green-300">
                    {"Rawipon Ponsarutwanit"}
                  </span>
                  <span className="text-slate-400">,</span>
                </div>

                <div className="flex text-slate-800 dark:text-slate-300">
                  <span className="mr-4 w-6 text-right text-slate-400 select-none">
                    3
                  </span>
                  <span className="ml-4 text-blue-600 dark:text-blue-300">
                    role
                  </span>
                  <span className="text-slate-400">:</span>
                  <span className="ml-2 text-green-600 dark:text-green-300">
                    {["Full-Stack", "Mobile"]}
                  </span>
                  <span className="text-slate-400">,</span>
                </div>

                <div className="flex text-slate-800 dark:text-slate-300">
                  <span className="mr-4 w-6 text-right text-slate-400 select-none">
                    4
                  </span>
                  <span className="ml-4 text-blue-600 dark:text-blue-300">
                    skills
                  </span>
                  <span className="text-slate-400">:</span>
                  <span className="ml-2 text-green-600 dark:text-green-300">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Flutter",
                    ].join(", ")}
                  </span>
                </div>

                <div className="flex text-slate-800 dark:text-slate-300">
                  <span className="mr-4 w-6 text-right text-slate-400 select-none">
                    5
                  </span>
                  <span className="text-slate-500 dark:text-slate-300">
                    {"}"})
                  </span>
                  <span className="text-slate-400">;</span>
                  <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-amber-500 align-middle"></span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
