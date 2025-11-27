import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiHtml5,
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

export const skills = {
  Languages: [
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Java", icon: FaJava, color: "text-[#E76F00]" },
    { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
    { name: "Dart", icon: SiDart, color: "text-[#0175C2]" },
  ],

  Frontend: [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Expo", icon: SiExpo, color: "text-black dark:text-white" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
    { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
  ],

  "Backend & DB": [
    { name: "Express", icon: SiExpress, color: "text-black dark:text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#539E43]" },
    { name: "Go Fiber", icon: SiGo, color: "text-[#00ADD8]" },
    { name: "Prisma", icon: SiPrisma, color: "text-[#0C344B] dark:text-white" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#00618A]" },
    { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  ],

  "Tools & Design": [
    { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
    { name: "GitHub", icon: SiGithub, color: "text-black dark:text-white" },
    { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  ],
};
