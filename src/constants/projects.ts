// constants/projects.ts
import {
  SiNextdotjs,
  SiPostgresql,
  SiFlutter,
  SiFirebase,
  SiReact,
  SiGo,
  SiMongodb,
  SiRedis,
  SiTrpc,
  SiPrisma,
  SiDocker,
  SiPwa,
  SiPython,
  SiFastapi,
  SiDiscord,
  SiSqlite,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

type ProjectTech = {
  name: string;
  icon: IconType;
  color: string;
};

type Project = {
  id: string;
  title: string;
  tech: ProjectTech[];
  link: string;
  github: string;
  // Screenshot that fills the card cover
  image?: string;
  // Logo shown centered on the card cover when there is no screenshot
  logo?: string;
  // Tailwind classes for the cover background behind a logo
  cover?: string;
};

const nextjs: ProjectTech = {
  name: "Next.js",
  icon: SiNextdotjs,
  color: "text-neutral-900 dark:text-white",
};

export const projectData: Project[] = [
  {
    id: "weku",
    title: "WEKU — KU Super App",
    tech: [
      { name: "Flutter", icon: SiFlutter, color: "text-cyan-500" },
      { name: "Go (Gin)", icon: SiGo, color: "text-cyan-600" },
      nextjs,
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
    ],
    link: "#",
    github: "#",
    logo: "/projects/weku-logo.png",
    cover: "from-lime-50 to-teal-100 dark:from-neutral-100 dark:to-teal-100",
  },
  {
    id: "ku-fnf",
    title: "KU Fame & Fund",
    tech: [
      nextjs,
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
      { name: "Docker", icon: SiDocker, color: "text-sky-500" },
    ],
    link: "#",
    github: "#",
    logo: "/projects/ku-fnf-logo.png",
    cover: "from-teal-50 to-lime-100 dark:from-neutral-100 dark:to-lime-100",
  },
  {
    id: "ruaymaiwai",
    title: "RuayMaiWai POS",
    tech: [
      nextjs,
      { name: "tRPC", icon: SiTrpc, color: "text-blue-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "PWA", icon: SiPwa, color: "text-violet-500" },
    ],
    link: "#",
    github: "#",
    logo: "/projects/ruaymaiwai-logo.png",
    cover:
      "from-emerald-50 to-neutral-100 dark:from-neutral-100 dark:to-emerald-100",
  },
  {
    id: "stock",
    title: "Stock Portfolio Tracker",
    tech: [
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
      { name: "Discord Bot", icon: SiDiscord, color: "text-indigo-500" },
      { name: "SQLite", icon: SiSqlite, color: "text-sky-600" },
    ],
    link: "#",
    github: "#",
    image: "/projects/stock-portfolio.png",
  },
  {
    id: "checkbill",
    title: "CheckBill",
    tech: [nextjs, { name: "React", icon: SiReact, color: "text-cyan-400" }],
    link: "https://checkbill.phairaicomsci.dev",
    github: "https://github.com/Garfie1dlnwza/checkbill-phairai-frontend",
    image: "/projects/checkbill.png",
  },
  {
    id: "german-oneday",
    title: "German-OneDay POS",
    tech: [
      nextjs,
      { name: "tRPC", icon: SiTrpc, color: "text-blue-500" },
      { name: "Prisma", icon: SiPrisma, color: "text-teal-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    ],
    link: "#",
    github: "https://github.com/Garfie1dlnwza/pos-butter-beer",
    logo: "/projects/german-oneday-logo.png",
    cover: "from-amber-50 to-orange-100 dark:from-amber-100 dark:to-orange-200",
  },
  {
    id: "kasetfair",
    title: "Kasetfair Management",
    tech: [
      { name: "Go Fiber", icon: SiGo, color: "text-cyan-500" },
      nextjs,
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    ],
    link: "#",
    github: "#",
  },
  {
    id: "teammate",
    title: "Teammate",
    tech: [
      { name: "Flutter", icon: SiFlutter, color: "text-cyan-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    ],
    link: "#",
    github: "#",
  },
  {
    id: "uni-request",
    title: "University Online Request",
    tech: [{ name: "Java", icon: FaJava, color: "text-orange-500" }],
    link: "#",
    github: "#",
  },
];
