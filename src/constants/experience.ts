import { SupportedLanguage } from "@/constants/i18n";

type LocalizedText = Record<SupportedLanguage, string>;

type ExperienceHighlight = {
  project: LocalizedText;
  detail: LocalizedText;
  logo?: string;
  url?: string | null;
};

type ExperienceItem = {
  id: number;
  role: LocalizedText;
  company: LocalizedText;
  logo?: string;
  period: LocalizedText;
  location: LocalizedText;
  description: LocalizedText;
  highlights: ExperienceHighlight[];
};

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: {
      en: "Full-stack Developer Intern",
      th: "นักศึกษาฝึกงาน Full-stack Developer",
    },
    company: {
      en: "Office of Computer Service, Kasetsart University",
      th: "สำนักงานบริการคอมพิวเตอร์ ม.เกษตรศาสตร์",
    },
    logo: "/ocs-logo.jpg",
    period: {
      en: "April 2025 - July 2025",
      th: "เมษายน 2025 - กรกฎาคม 2025",
    },
    location: {
      en: "Bangkok, Thailand",
      th: "กรุงเทพฯ ประเทศไทย",
    },
    description: {
      en: "Designed, developed, and integrated a complete web ecosystem. Worked on high-impact university applications used by students.",
      th: "ออกแบบ พัฒนา และเชื่อมต่อระบบเว็บครบวงจร ดูแลแอปสำคัญของมหาวิทยาลัยที่นิสิตใช้งานจริง",
    },
    highlights: [
      {
        project: {
          en: "KU Activity and Club",
          th: "KU Activity and Club",
        },
        logo: "/kuclub_logo.png",
        detail: {
          en: "Led full-stack development (Next.js, TS, Express) to create a central hub for student activities.",
          th: "ดูแลการพัฒนาแบบฟูลสแตก (Next.js, TS, Express) เพื่อสร้างศูนย์กลางข้อมูลกิจกรรมสำหรับนิสิต",
        },
        url: "https://kuclubs.sa.ku.ac.th/",
      },
      {
        project: {
          en: "SAKU System",
          th: "SAKU System",
        },
        logo: "/saku_logo.svg",
        detail: {
          en: "Engineered full-stack features for club management, data modification, and image uploads.",
          th: "พัฒนาฟีเจอร์ฟูลสแตกสำหรับจัดการชมรม แก้ไขข้อมูล และอัปโหลดรูปภาพ",
        },
        url: "https://saku.sa.ku.ac.th/",
      },
      {
        project: {
          en: "OAKU System",
          th: "OAKU System",
        },
        logo: "/oaku-logo.png",
        detail: {
          en: "Owned full-stack development for project management system, including ER modeling & API provisioning.",
          th: "รับผิดชอบการพัฒนาเต็มสแต็กสำหรับระบบบริหารโปรเจกต์ รวมออกแบบ ER และจัดเตรียม API",
        },
        url: "https://oaku.sa.ku.ac.th/",
      },
    ],
  },
];
