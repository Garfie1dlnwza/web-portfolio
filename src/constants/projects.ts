// constants/projects.ts
import {
  SiNextdotjs,
  SiPostgresql,
  SiFlutter,
  SiFirebase,
  SiReact,
  SiLaravel,
  SiSvelte,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const projectData = [
  {
    id: "kasetfair",
    title: "Kasetfair Management",

    tech: [
      { name: "Go Fiber", icon: FaJava, color: "text-cyan-500" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-neutral-900 dark:text-white",
      },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    ],
    link: "#", // ใส่ Link จริงถ้ามี
    github: "#",
    image: "/projects/kasetfair.png", // เตรียมรูปไว้ใน folder public
  },
  {
    id: "checkbill",
    title: "CheckBill",

    tech: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-neutral-900 dark:text-white",
      },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
    ],
    link: "https://checkbill.phairaicomsci.dev",
    github: "#",
    image: "/projects/checkbill.png",
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
    image: "/projects/teammate.png",
  },
  {
    id: "uni-request",
    title: "University Online Request",

    tech: [{ name: "Java", icon: FaJava, color: "text-orange-500" }],
    link: "#",
    github: "#",
    image: "/projects/java-app.png",
  },
  {
    id: "nisit-d-den",
    title: "Nisit D Den",

    tech: [
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: "Svelte", icon: SiSvelte, color: "text-orange-500" },
    ],
    link: "#",
    github: "#",
    image: "/projects/nisit-d-den.png",
  },
];
