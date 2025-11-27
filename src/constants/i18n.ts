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
    aboutSection: {
      headerBadge: "Get to know me",
      title: "About Me",
      description: "Get to know my identity, history, and lifestyle better.",
      devLifeBadge: "Developer Life",
      name: "Rawipon Ponsarutwanit (Garfieldlnwza)",
      bio: "A highly motivated Full-Stack Developer with comprehensive internship experience at Kasetsart University's Office of Computer Service. Proven ability in designing, developing, and integrating a complete web ecosystem using React, Next.js, TypeScript, and Express.js. Possesses strong skills in API development, data integration, and database ER modeling. Complemented by project experience in backend development with Go-fiber and mobile development with Flutter. Eager to leverage diverse technical skills to build scalable, high-performance, and user-centric applications",
      portrait: {
        title: "I sleep... sometimes 😉",
        subtitle: "Bangkok , Thailand",
      },
      lifestyleTitle: "Lifestyle",
      quote: {
        part1: "It’s not a bug… ",
        highlight: "it’s a potential feature ",
        part2: "that hasn’t been released yet. ",
      },
      musicArtBadge: "JUST SLEEP",
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
      badge: "วิทยาการคอมพิวเตอร์ @ มหาวิทยาลัยเกษตรศาสตร์",
      heading: {
        prefix: "Let's",
        highlight: "Build",
        suffix: "Something Amazing.",
      },
      description:
        "ผมเป็นนิสิตคอมฯ ที่สนุกกับการพัฒนาและออกแบบทั้ง Web และ Mobile App เพื่อตอบสนองความต้องการของผู้ใช้และมอบประสบการณ์ที่ดีที่สุด",
      actions: {
        viewProjects: "ดูโปรเจค",
        github: "GitHub",
      },
    },
    aboutSection: {
      headerBadge: "Get to know me",
      title: "เกี่ยวกับฉัน",
      description: "รู้จักตัวตน ประวัติ และไลฟ์สไตล์ของผมให้มากขึ้น",
      devLifeBadge: "Developer Life",
      name: "รวิพล พลศรุตวานิช (กาฟิวส์)",
      bio: "Full-Stack Developer ที่มีประสบการณ์ฝึกงานกับสำนักงานบริการคอมพิวเตอร์ ม.เกษตรศาสตร์ มีความสามารถในการออกแบบ พัฒนา และเชื่อมต่อระบบเว็บครบวงจรด้วย React, Next.js, TypeScript และ Express.js เชี่ยวชาญการพัฒนา API, การเชื่อมต่อข้อมูล และออกแบบฐานข้อมูล ER พร้อมประสบการณ์โปรเจคด้าน Backend ด้วย Go-fiber และ Mobile ด้วย Flutter พร้อมนำทักษะหลากหลายไปสร้างแอปพลิเคชันที่มีประสิทธิภาพสูงและตอบโจทย์ผู้ใช้",
      portrait: {
        title: "นอนน้อย แต่นอนนะ 😉",
        subtitle: "กรุงเทพฯ, ประเทศไทย",
      },
      lifestyleTitle: "ไลฟ์สไตล์",
      quote: {
        part1: "มันไม่ใช่บั๊ก… มันคือ ",
        highlight: "potential feature",
        part2: " ที่ยังไม่ได้เปิดตัว",
      },
      musicArtBadge: "นอน นอน นอน",
    },
    resume: {
      link: "Resume",
      download: "Download Resume",
    },
  },
} as const;

export type SupportedLanguage = keyof typeof translations;
