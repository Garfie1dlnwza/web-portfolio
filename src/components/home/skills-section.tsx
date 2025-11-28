"use client";

import { skills } from "@/constants/skills";
import { Code2, LayoutTemplate, Database, Wrench, Cpu } from "lucide-react";

const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Languages: Code2,
  Frontend: LayoutTemplate,
  "Backend & DB": Database,
  "Tools & Design": Wrench,
};

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-neutral-50 py-24 dark:bg-[#121212]"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center text-amber-600 shadow-inner dark:text-amber-500">
            <Cpu className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
            Tech Stack & Skills
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-500 dark:text-neutral-400">
            เครื่องมือและเทคโนโลยีที่ผมเลือกใช้เพื่อสร้างสรรค์ผลงานคุณภาพ
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
          {Object.entries(skills).map(([category, items]) => {
            const CategoryIcon = categoryIcons[category] ?? Code2;

            return (
              <div
                key={category}
                className="group relative overflow-hidden rounded-3xl border border-neutral-200/50 bg-white/40 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 dark:border-neutral-800/50 dark:bg-neutral-900/20 dark:hover:border-amber-500/20"
              >
                {/* Decorative Gradient Overlay on Hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100 transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:bg-neutral-800 dark:ring-neutral-700 dark:group-hover:bg-amber-900/20 dark:group-hover:text-amber-400">
                      <CategoryIcon className="h-6 w-6 text-neutral-600 transition-colors group-hover:text-amber-600 dark:text-neutral-400 dark:group-hover:text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                      {category}
                    </h3>
                  </div>

                  {/* Skills Grid/Flex */}
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/icon relative flex items-center gap-2.5 overflow-hidden rounded-xl border border-neutral-200/60 bg-white/50 px-4 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-white hover:shadow-md dark:border-neutral-700/60 dark:bg-neutral-800/50 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
                      >
                        {/* Icon: ใช้ class สีจาก data ที่คุณเตรียมมา */}
                        <skill.icon
                          className={`h-5 w-5 text-neutral-400 transition-colors duration-300 ${skill.color}`}
                        />

                        {/* Skill Name */}
                        <span className="text-sm font-medium text-neutral-600 transition-colors duration-300 group-hover/icon:text-neutral-900 dark:text-neutral-400 dark:group-hover/icon:text-neutral-100">
                          {skill.name}
                        </span>

                        {/* Hover Glow Effect inside Pill */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-neutral-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover/icon:opacity-100 dark:via-white/5" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
