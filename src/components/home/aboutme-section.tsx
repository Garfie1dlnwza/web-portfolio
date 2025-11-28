"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Code2, Heart, Eye, Grid3X3, Sparkles } from "lucide-react";
import { PixelatedCanvas } from "../ui/pixelated-canvas";
import { lifestyleImages, profileImage } from "@/constants/image";
import { translations } from "@/constants/i18n";
import { useI18n } from "@/components/language-provider";
import { SocialDock } from "@/components/social-dock";

export const AboutSection = () => {
  const { language } = useI18n();
  const t = translations[language];
  const [isPixelated, setIsPixelated] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Focus Areas
  const focusAreas = ["Full Stack", "Mobile App", "UX/UI"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % lifestyleImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F0F0F0] px-6 py-24 text-slate-900 transition-colors duration-300 md:py-32 dark:bg-[#121212] dark:text-slate-200"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-2 text-sm font-bold tracking-wider text-amber-600 uppercase sm:text-lg dark:text-amber-500">
            {t.aboutSection.headerBadge}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-900 sm:text-6xl dark:text-neutral-100">
            {t.aboutSection.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            {t.aboutSection.description}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-6">
          {/* 1. Main Bio & Connect */}
          <div className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl bg-neutral-100 p-8 transition-colors hover:bg-neutral-50 md:col-span-2 dark:bg-neutral-900 dark:hover:bg-neutral-800/80">
            <div>
              <div className="mb-4 flex items-center gap-2 text-amber-600 dark:text-amber-500">
                <Code2 className="h-5 w-5" />
                <span className="text-sm font-bold tracking-wider uppercase">
                  {t.aboutSection.devLifeBadge}
                </span>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                {t.aboutSection.name}
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                {t.aboutSection.bio}
              </p>
            </div>

            {/* Bottom Section: Focus Areas + Social Links */}
            <div className="mt-auto flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              {/* Left: Focus Tags */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-neutral-400 uppercase">
                  <Sparkles className="h-3 w-3" />
                  <span>Core Focus</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 transition-all hover:border-amber-200 hover:text-amber-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-amber-500/50 dark:hover:text-amber-400"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Social Links Dock */}
              <div className="w-full lg:w-auto">
                <SocialDock />
              </div>
            </div>
          </div>

          {/* 2. Portrait Image (ส่วนนี้คงเดิม) */}
          <div className="relative col-span-1 min-h-[300px] overflow-hidden rounded-3xl bg-neutral-200 md:row-span-2 dark:bg-neutral-800">
            <button
              onClick={() => setIsPixelated(!isPixelated)}
              className="absolute top-4 right-4 z-30 rounded-full bg-black/20 p-2 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/40 active:scale-95"
            >
              {isPixelated ? (
                <Eye className="h-5 w-5" />
              ) : (
                <Grid3X3 className="h-5 w-5" />
              )}
            </button>
            {profileImage.map((src, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out ${
                  idx === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Portrait ${idx + 1}`}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 z-20 h-full w-full transition-opacity duration-700 ease-in-out ${
                    isPixelated
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  <PixelatedCanvas
                    src={src}
                    width={400}
                    height={500}
                    cellSize={4}
                    dotScale={0.85}
                    shape="circle"
                    backgroundColor="#222"
                    responsive={true}
                    interactive={true}
                    distortionStrength={10}
                    distortionRadius={60}
                    tintColor="#fbbf24"
                    tintStrength={0.1}
                    className="h-full! w-full! object-cover"
                  />
                </div>
              </div>
            ))}
            <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-24">
              <p className="font-heading text-xl font-bold text-white shadow-sm">
                {t.aboutSection.portrait.title}
              </p>
              <p className="text-sm text-neutral-300 shadow-sm">
                {t.aboutSection.portrait.subtitle}
              </p>
            </div>
          </div>

          {/* 3. Lifestyle Slideshow (ส่วนนี้คงเดิม) */}
          <div className="relative col-span-1 flex min-h-[200px] items-center justify-center overflow-hidden rounded-3xl bg-neutral-900 md:col-span-2">
            {lifestyleImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="scale-110 object-cover opacity-50 blur-xl grayscale-20"
                  />
                </div>
                <div className="absolute inset-0 z-10 p-4">
                  <Image
                    src={src}
                    alt={`Lifestyle ${index + 1}`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority={index === currentSlide}
                  />
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {lifestyleImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full shadow-sm transition-all duration-300 ${
                    index === currentSlide
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 md:col-span-3 dark:border-neutral-800 dark:bg-neutral-950/50">
            <p className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200">
              {t.aboutSection.quote.part1}
              <span className="text-amber-600 dark:text-amber-500">
                {t.aboutSection.quote.highlight}
              </span>
              {t.aboutSection.quote.part2}
            </p>
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-amber-100 p-6 text-amber-700 md:col-span-1 dark:bg-amber-900/30 dark:text-amber-400">
            <Heart className="mr-2 h-5 w-5 fill-current" />
            <span className="font-bold">{t.aboutSection.musicArtBadge}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
