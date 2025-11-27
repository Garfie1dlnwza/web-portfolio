export const translations = {
  en: {
    nav: {
      about: "About",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
    },
    hero: {
      badge: "CS Student @ Kasetsart University",
      heading: {
        prefix: "Let's",
        highlight: "Build",
        suffix: "Something Amazing.",
      },
      description:
        "I'm a computer science student who enjoys building and designing both web and mobile applications, focusing on real user needs and seamless experiences.",
      actions: {
        viewProjects: "View My Projects",
        github: "GitHub",
      },
    },
    resume: {
      link: "Resume",
      download: "Download Resume",
    },
  },
  th: {
    nav: {
      about: "เกี่ยวกับฉัน",
      education: "การศึกษา",
      skills: "ทักษะ",
      projects: "ผลงาน",
      experience: "ประสบการณ์",
    },
    hero: {
      badge: "CS Student @ Kasetsart University",
      heading: {
        prefix: "Let's",
        highlight: "Build",
        suffix: "Something Amazing.",
      },
      // ใช้ภาษาพูดที่สุภาพ ดูถ่อมตัวแต่มีความมั่นใจ
      description:
        "ผมเป็นนิสิตคอมฯ ที่สนุกกับการพัฒนาและออกแบบทั้ง Web และ Mobile App เพื่อตอบสนองความต้องการของผู้ใช้และประสบการณ์ที่ดี ",
      actions: {
        viewProjects: "ดูโปรเจ็กต์",
        github: "GitHub",
      },
    },
    resume: {
      link: "Resume",
      download: "Download Resume",
    },
  },
} as const;

export type SupportedLanguage = keyof typeof translations;
