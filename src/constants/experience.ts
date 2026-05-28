import type { SupportedLanguage } from "@/constants/i18n";

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
      en: "ServiceNow Associate Consultant Intern",
      th: "นักศึกษาฝึกงาน ServiceNow Associate Consultant",
    },
    company: {
      en: "Fujitsu (Thailand) Co., Ltd.",
      th: "บริษัท ฟูจิตสึ (ประเทศไทย) จำกัด",
    },
    logo: "/image.png",
    period: {
      en: "May 2026 - Present",
      th: "พฤษภาคม 2569 - ปัจจุบัน",
    },
    location: {
      en: "Bangkok, Thailand",
      th: "กรุงเทพฯ ประเทศไทย",
    },
    description: {
      en: "Implementing and configuring enterprise ITSM solutions on the ServiceNow platform. Applying ITIL frameworks to streamline IT service management processes and configuring CMDB to maintain accurate asset records across the organization.",
      th: "ติดตั้งและกำหนดค่าโซลูชัน ITSM ระดับองค์กรบนแพลตฟอร์ม ServiceNow นำกรอบงาน ITIL มาใช้ปรับปรุงกระบวนการจัดการบริการ IT และกำหนดค่า CMDB เพื่อดูแลข้อมูล Asset ขององค์กรให้ถูกต้องแม่นยำ",
    },
    highlights: [
      {
        project: {
          en: "ITSM Process Configuration",
          th: "การกำหนดค่ากระบวนการ ITSM",
        },
        detail: {
          en: "Configured Incident, Problem, and Change Management modules on ServiceNow following ITIL v4 best practices to improve service delivery efficiency.",
          th: "กำหนดค่าโมดูล Incident, Problem และ Change Management บน ServiceNow ตามแนวปฏิบัติ ITIL v4 เพื่อเพิ่มประสิทธิภาพการให้บริการ",
        },
      },
      {
        project: {
          en: "CMDB Configuration & Asset Management",
          th: "การกำหนดค่า CMDB และการจัดการ Asset",
        },
        detail: {
          en: "Built and maintained the Configuration Management Database (CMDB) to track CIs, map service dependencies, and support accurate impact analysis.",
          th: "สร้างและดูแล Configuration Management Database (CMDB) เพื่อติดตาม CI จัดทำ Service Dependencies และรองรับการวิเคราะห์ผลกระทบที่แม่นยำ",
        },
      },
      {
        project: {
          en: "ITIL Framework Implementation",
          th: "การประยุกต์ใช้กรอบงาน ITIL",
        },
        detail: {
          en: "Applied ITIL service lifecycle concepts to align IT services with business needs, supporting SLA tracking and service catalog development.",
          th: "ประยุกต์ใช้แนวคิด ITIL Service Lifecycle เพื่อให้บริการ IT สอดคล้องกับความต้องการทางธุรกิจ รวมถึงติดตาม SLA และพัฒนา Service Catalog",
        },
      },
    ],
  },
  {
    id: 2,
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
  {
    id: 3,
    role: {
      en: "Computer Science Student",
      th: "นิสิตวิทยาการคอมพิวเตอร์",
    },
    company: {
      en: "Kasetsart University",
      th: "มหาวิทยาลัยเกษตรศาสตร์",
    },
    logo: "/Kasetsart_University_Logo.png",
    period: {
      en: "2023 - Present",
      th: "2566 - ปัจจุบัน",
    },
    location: {
      en: "Bangkok, Thailand",
      th: "กรุงเทพฯ ประเทศไทย",
    },
    description: {
      en: "Pursuing a B.Sc. in Computer Science (GPAX 3.20). Engaged in a broad curriculum covering software engineering, algorithms, databases, cloud computing, and AI — applying knowledge through hands-on projects in web and mobile development.",
      th: "กำลังศึกษาระดับปริญญาตรี วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์ (GPAX 3.20) เรียนรู้วิชาที่หลากหลายครอบคลุมวิศวกรรมซอฟต์แวร์ อัลกอริทึม ฐานข้อมูล Cloud Computing และ AI พร้อมนำความรู้ไปประยุกต์ใช้ผ่านโปรเจคจริงด้าน Web และ Mobile",
    },
    highlights: [
      {
        project: {
          en: "Software Engineering & System Design",
          th: "วิศวกรรมซอฟต์แวร์และออกแบบระบบ",
        },
        detail: {
          en: "Studied Agile/Scrum methodologies, UML modeling, design patterns, and software architecture — applied in team-based full-stack projects.",
          th: "ศึกษา Agile/Scrum, UML Modeling, Design Patterns และสถาปัตยกรรมซอฟต์แวร์ พร้อมนำไปใช้ในโปรเจคทีมแบบ Full-stack",
        },
      },
      {
        project: {
          en: "Algorithms & Data Structures",
          th: "อัลกอริทึมและโครงสร้างข้อมูล",
        },
        detail: {
          en: "Built a strong foundation in algorithm design and complexity analysis, applied to efficient solutions in academic and personal projects.",
          th: "สร้างรากฐานที่แข็งแกร่งในการออกแบบอัลกอริทึมและการวิเคราะห์ความซับซ้อน นำไปประยุกต์ใช้ในโปรเจคเชิงวิชาการและส่วนตัว",
        },
      },
      {
        project: {
          en: "Cloud Computing & DevOps",
          th: "Cloud Computing และ DevOps",
        },
        detail: {
          en: "Gained practical experience with containerization (Docker), CI/CD concepts, and cloud service fundamentals applied to deployed applications.",
          th: "ได้รับประสบการณ์ด้าน Containerization (Docker), แนวคิด CI/CD และพื้นฐาน Cloud Service ที่นำมาใช้กับแอปพลิเคชันที่ deploy จริง",
        },
      },
    ],
  },
];
