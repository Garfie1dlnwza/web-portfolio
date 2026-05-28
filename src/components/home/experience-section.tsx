"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { experienceData } from "@/constants/experience";
import { useI18n } from "@/components/language-provider";

export const ExperienceSection = () => {
  const { language, t } = useI18n();

  return (
    <section
      id="experience"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-24 text-slate-900 transition-colors duration-300 md:py-32 dark:bg-[#121212] dark:text-slate-200"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />

      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl dark:text-white">
            {t.experienceSection.title}.
          </h2>
          <p className="max-w-2xl text-lg text-neutral-500 dark:text-neutral-400">
            {t.experienceSection.description}
          </p>
        </div>

        <div className="space-y-20">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="group relative grid grid-cols-1 gap-12 md:grid-cols-[300px_1fr] lg:gap-24"
            >
              {/* Left Column: Role & Company Info (Sticky-ish feel) */}
              <div className="flex flex-col gap-6 md:sticky md:top-24 md:h-fit">
                {/* Logo & Role Group */}
                <div className="flex flex-col gap-4">
                  {item.logo && (
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-neutral-100 bg-white p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
                      <Image
                        src={item.logo}
                        alt={item.company[language]}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {item.role[language]}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-amber-600 dark:text-amber-500">
                      {item.company[language]}
                    </p>
                  </div>
                </div>

                {/* Meta Data */}
                <div className="flex flex-col gap-3 border-l-2 border-neutral-100 pl-4 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period[language]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location[language]}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Details & Highlights */}
              <div className="flex flex-col gap-8">
                {/* Main Description */}
                <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {item.description[language]}
                </p>

                {/* Key Contributions Section */}
                <div>
                  <div className="mb-6 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                      {t.experienceSection.keyContributions}
                    </span>
                  </div>

                  <div className="grid gap-4">
                    {item.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="group/card relative overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50/50 p-5 transition-all duration-300 hover:border-amber-500/20 hover:bg-white hover:shadow-xl hover:shadow-amber-500/5 dark:border-neutral-800 dark:bg-neutral-900/30 dark:hover:bg-neutral-800/80"
                      >
                        <div className="flex items-start gap-4">
                          {/* Highlight Logo */}
                          <div className="shrink-0 pt-1">
                            {highlight.logo ? (
                              <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800">
                                <Image
                                  src={highlight.logo}
                                  alt={highlight.project}
                                  width={48}
                                  height={48}
                                  className="h-full w-full object-contain"
                                />
                              </div>
                            ) : (
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-500">
                                <Sparkles className="h-5 w-5" />
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="font-bold text-neutral-900 dark:text-white">
                                {highlight.project[language]}
                              </h4>
                              {highlight.url && (
                                <Link
                                  href={highlight.url}
                                  target="_blank"
                                  className="opacity-0 transition-opacity group-hover/card:opacity-100"
                                >
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-amber-100 hover:text-amber-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-amber-900/30 dark:hover:text-amber-500">
                                    <ArrowUpRight className="h-4 w-4" />
                                  </div>
                                </Link>
                              )}
                            </div>

                            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                              {highlight.detail[language]}
                            </p>
                          </div>
                        </div>

                        {/* Full card clickable link overlay */}
                        {highlight.url && (
                          <Link
                            href={highlight.url}
                            target="_blank"
                            className="absolute inset-0 z-10"
                            aria-label={`View ${highlight.project[language]}`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
