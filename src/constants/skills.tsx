import {
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiCss3,
  SiExpress,
  SiNodedotjs,
  SiGo,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiFigma,
  SiGithub,
  SiPostman,
  SiDocker,
  SiExpo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const skills = [
  {
    id: "languages",
    items: [
      {
        name: "Python",
        icon: SiPython,
        color: "group-hover/icon:text-blue-500",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "group-hover/icon:text-blue-600",
      },
      { name: "Java", icon: FaJava, color: "group-hover/icon:text-orange-500" },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "group-hover/icon:text-blue-700",
      },
      { name: "Dart", icon: SiDart, color: "group-hover/icon:text-cyan-500" },
    ],
  },
  {
    id: "frontend",
    items: [
      { name: "React", icon: SiReact, color: "group-hover/icon:text-cyan-400" },
      {
        name: "Expo",
        icon: SiExpo,
        color:
          "group-hover/icon:text-neutral-900 dark:group-hover/icon:text-white",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color:
          "group-hover/icon:text-neutral-900 dark:group-hover/icon:text-white",
      },
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "group-hover/icon:text-cyan-500",
      },
      {
        name: "Tailwind CSS",
        icon: SiCss3,
        color: "group-hover/icon:text-blue-500",
      },
    ],
  },
  {
    id: "backendDb",
    items: [
      {
        name: "Express",
        icon: SiExpress,
        color:
          "group-hover/icon:text-neutral-500 dark:group-hover/icon:text-white",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "group-hover/icon:text-green-600",
      },
      { name: "Go Fiber", icon: SiGo, color: "group-hover/icon:text-cyan-600" },
      {
        name: "Prisma",
        icon: SiPrisma,
        color:
          "group-hover/icon:text-neutral-700 dark:group-hover/icon:text-white",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "group-hover/icon:text-blue-400",
      },
      { name: "MySQL", icon: SiMysql, color: "group-hover/icon:text-blue-600" },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "group-hover/icon:text-yellow-500",
      },
    ],
  },
  {
    id: "toolsDesign",
    items: [
      { name: "Figma", icon: SiFigma, color: "group-hover/icon:text-pink-500" },
      {
        name: "GitHub",
        icon: SiGithub,
        color:
          "group-hover/icon:text-neutral-900 dark:group-hover/icon:text-white",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "group-hover/icon:text-orange-500",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "group-hover/icon:text-blue-600",
      },
    ],
  },
];

