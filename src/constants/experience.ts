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
      en: "Delivering ServiceNow ITSM implementations for enterprise clients in banking and financial services — from requirement gathering and solution design to configuration, UAT, and end-user training. Work spans Service Catalog, Incident, Change, Asset Management, and reporting.",
      th: "พัฒนาและติดตั้งระบบ ServiceNow ITSM ให้ลูกค้าองค์กรกลุ่มธนาคารและบริการทางการเงิน ตั้งแต่เก็บ Requirement ออกแบบโซลูชัน กำหนดค่าระบบ ทดสอบ UAT ไปจนถึงอบรมผู้ใช้งาน ครอบคลุม Service Catalog, Incident, Change, Asset Management และรายงาน",
    },
    highlights: [
      {
        project: {
          en: "Service Catalog & Approval Workflows",
          th: "Service Catalog และ Approval Workflow",
        },
        detail: {
          en: "Designed and configured service request catalog items with multi-level approval flows — producing mock-UI specs, grouping hundreds of requests into a structured catalog with Python scripts, and preparing deployment checklists.",
          th: "ออกแบบและกำหนดค่า Catalog Item สำหรับคำขอบริการพร้อม Approval Flow หลายระดับ จัดทำ Mock UI จัดกลุ่มคำขอหลายร้อยรายการเป็น Catalog ที่เป็นระบบด้วยสคริปต์ Python และเตรียม Deployment Checklist",
        },
      },
      {
        project: {
          en: "Reports & Dashboards",
          th: "รายงานและแดชบอร์ด",
        },
        detail: {
          en: "Wrote the solution design and user stories for reporting, and built operational, executive, and mobile dashboards to track SLAs and service performance.",
          th: "เขียน Solution Design และ User Stories ด้านรายงาน และสร้างแดชบอร์ดระดับปฏิบัติการ ผู้บริหาร และบนมือถือ เพื่อติดตาม SLA และประสิทธิภาพการให้บริการ",
        },
      },
      {
        project: {
          en: "UAT, RPA Integration & Contract Management",
          th: "UAT, การเชื่อมต่อ RPA และระบบจัดการสัญญา",
        },
        detail: {
          en: "Authored and ran UAT test cases for service requests, including RPA-fulfilled catalog tasks, and supported requirements and FAQ mapping for a custom contract management application.",
          th: "เขียนและรัน UAT Test Case ของคำขอบริการ รวมถึงงานที่ดำเนินการอัตโนมัติด้วย RPA และช่วยเก็บ Requirement และจัดทำ FAQ Mapping ให้แอปจัดการสัญญาที่พัฒนาขึ้นเฉพาะ",
        },
      },
      {
        project: {
          en: "SOPs, User Guides & Training",
          th: "SOP คู่มือ และการอบรม",
        },
        detail: {
          en: "Produced ITSM SOPs, end-user and fulfiller manuals, and train-the-trainer materials, and delivered Incident and Service Request training to client teams.",
          th: "จัดทำ SOP ด้าน ITSM คู่มือผู้ใช้และผู้ดำเนินการ และเอกสาร Train the Trainer พร้อมอบรมการใช้งาน Incident และ Service Request ให้ทีมลูกค้า",
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
