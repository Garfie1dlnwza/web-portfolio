import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Download } from "lucide-react";
import { useI18n } from "@/components/language-provider";
import { educationData } from "@/constants/educations";

type EducationCardProps = {
  item: (typeof educationData)[number];
};

export const EducationCard = ({ item }: EducationCardProps) => {
  const { language, t } = useI18n();
  return (
    <div className="group relative pl-8 md:pl-12">
      {/* Timeline Dot */}
      <div className="absolute top-2 -left-[5px] h-[9px] w-[9px] rounded-full bg-neutral-300 ring-4 ring-white transition-all duration-300 group-hover:scale-125 group-hover:bg-amber-500 dark:bg-neutral-700 dark:ring-neutral-950 dark:group-hover:bg-amber-500">
        {item.current && (
          <span className="absolute -inset-1 animate-ping rounded-full bg-amber-500/40 opacity-75" />
        )}
      </div>

      {/* Glass Card Container 
        --------------------
        - backdrop-blur-md: หัวใจสำคัญของ Glassmorphism
        - bg-white/40 & dark:bg-neutral-900/30: พื้นหลังโปร่งแสง
        - border-neutral-200/50: เส้นขอบจางๆ เพื่อสร้างขอบเขตของกระจก
      */}
      <div className="relative flex flex-col gap-6 rounded-2xl border border-neutral-200/50 bg-white/40 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-amber-500/30 hover:bg-white/60 hover:shadow-2xl hover:shadow-amber-500/10 md:flex-row md:items-start md:p-6 dark:border-neutral-800/50 dark:bg-neutral-900/20 dark:hover:bg-neutral-900/40">
        {/* Logo Section */}
        {item.logo && (
          <div className="shrink-0">
            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-white/80 p-2 shadow-sm ring-1 ring-neutral-100/50 backdrop-blur-sm dark:bg-neutral-900/80 dark:ring-neutral-800/50">
              <Image
                src={item.logo}
                alt={item.institution[language]}
                width={64}
                height={64}
                className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="flex flex-1 flex-col">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-neutral-900 transition-colors group-hover:text-amber-600 dark:text-neutral-100 dark:group-hover:text-amber-500">
              {item.institution[language]}
            </h3>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              <Calendar className="h-3.5 w-3.5" />
              <span>{item.year}</span>
              {item.current && (
                <span className="ml-1 rounded-full bg-amber-100/80 px-2 py-0.5 text-[10px] font-semibold text-amber-700 backdrop-blur-sm dark:bg-amber-500/10 dark:text-amber-400">
                  {t.educationCard.current}
                </span>
              )}
            </div>
          </div>

          <p className="mb-3 text-base font-medium text-neutral-700 dark:text-neutral-300">
            {item.degree[language]}
          </p>

          <p className="mb-5 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {item.description[language]}
          </p>

          {/* Footer: Tags & Actions */}
          <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags[language].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md border border-neutral-200/60 bg-neutral-50/50 px-2 py-1 text-xs font-medium text-neutral-600 backdrop-blur-sm transition-colors hover:border-amber-200 hover:text-amber-700 dark:border-neutral-800/60 dark:bg-neutral-900/50 dark:text-neutral-400 dark:hover:border-amber-500/30 dark:hover:text-amber-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions Group */}
            <div className="flex items-center gap-4 pt-2 sm:pt-0">
              {/* Location Link */}
              {item.mapUrl ? (
                <Link
                  href={item.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{item.location[language]}</span>
                </Link>
              ) : (
                <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{item.location[language]}</span>
                </div>
              )}

              {/* Download Button */}
              {item.file && item.fileKey && (
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="group/btn flex items-center gap-1.5 rounded-full bg-neutral-900/90 px-4 py-1.5 text-xs font-medium text-white shadow-lg shadow-neutral-500/10 backdrop-blur-sm transition-all hover:bg-amber-600 hover:shadow-amber-500/20 dark:bg-white/90 dark:text-neutral-900 dark:hover:bg-amber-500"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>
                    {
                      t.educationCard.file[
                        item.fileKey as keyof typeof t.educationCard.file
                      ]
                    }
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
