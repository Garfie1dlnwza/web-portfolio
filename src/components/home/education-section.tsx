"use client";

import { GraduationCap } from "lucide-react";
import { educationData } from "@/constants/educations";
import { EducationCard } from "@/components/education-card";
import { useI18n } from "@/components/language-provider";

export const EducationSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="education"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-24 text-slate-900 transition-colors duration-300 md:py-32 dark:bg-[#121212] dark:text-slate-200"
    >
      <div className="container mx-auto px-4">
        {/* Minimal Header */}
        <div className="mb-16 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl text-amber-600 dark:text-amber-500">
                <GraduationCap className="h-16 w-16" />
              </span>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-900 sm:text-6xl dark:text-neutral-100">
                {t.educationSection.title}
              </h2>
            </div>
          </div>
          <p className="max-w-xl text-center text-neutral-500 dark:text-neutral-400">
            {t.educationSection.description}
          </p>
        </div>

        {/* Minimal Timeline */}
        <div className="relative ml-3 space-y-12 border-l border-neutral-200 pb-4 md:ml-4 dark:border-neutral-800">
          {educationData.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
