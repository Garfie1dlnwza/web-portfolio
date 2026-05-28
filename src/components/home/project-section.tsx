"use client";

import { useI18n } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { projectData } from "@/constants/projects";

export const ProjectSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="projects"
      className="relative w-full bg-[#F0F0F0] py-24 dark:bg-[#121212]"
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute top-1/3 right-0 -mr-20 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[100px]" />

      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-2 text-sm font-bold tracking-wider text-amber-600 uppercase sm:text-lg dark:text-amber-500">
            {t.nav.projects}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-100">
            {t.projectSection.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            {t.projectSection.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200/50 bg-white/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 dark:border-neutral-800/50 dark:bg-neutral-900/40 dark:hover:border-amber-500/20"
            >
              {/* Image / Placeholder */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                {/* ถ้ามีรูปภาพจริง ให้ uncomment บรรทัดล่าง */}
                {/* <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /> */}

                {/* Placeholder ในกรณีไม่มีรูป */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
                  <FolderGit2 className="h-12 w-12 text-neutral-300 dark:text-neutral-700" />
                </div>

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Link
                    href={project.github}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 transition-transform hover:scale-110"
                    title="View Code"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  {project.link && project.link !== "#" && (
                    <Link
                      href={project.link}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white transition-transform hover:scale-110"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-neutral-900 transition-colors group-hover:text-amber-600 dark:text-neutral-100 dark:group-hover:text-amber-500">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {
                      t.projectSection.projects[
                        project.id as keyof typeof t.projectSection.projects
                      ]
                    }
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 rounded-full border border-neutral-200/50 bg-white/50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-700/50 dark:bg-neutral-800/50 dark:text-neutral-400"
                    >
                      <tech.icon className={`h-3.5 w-3.5 ${tech.color}`} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
