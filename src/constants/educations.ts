import { map } from "zod";

export const educationData = [
  {
    id: 1,
    year: "2023 - Present",
    degree: {
      th: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
      en: "Bachelor of Science in Computer Science",
    },
    institution: {
      th: "มหาวิทยาลัยเกษตรศาสตร์",
      en: "Kasetsart University",
    },
    mapUrl: "https://maps.app.goo.gl/2M5uqPa4bh45hLqx7",
    location: {
      th: "กรุงเทพฯ ประเทศไทย",
      en: "Bangkok, Thailand",
    },
    logo: "/Kasetsart_University_Logo.png",
    file: "/cv.pdf",
    fileKey: "cv",
    description: {
      th: "เรียนรู้เกี่ยวกับ Database Design, โครงสร้างข้อมูล, Cloud Computing, Devops & Agile, อัลกอริทึม, Software Engineering, Web & Mobile Development และ AI. GPAX : 3.14",
      en: "Studied Database Design, Data Structures, Cloud Computing, Devops & Agile, Algorithms, Software Engineering, Web & Mobile Development, and AI. GPAX: 3.14",
    },
    tags: {
      th: ["วิศวกรรมซอฟต์แวร์", "เว็บ", "โมบาย"],
      en: ["Software Engineering", "Web Development", "Mobile Development"],
    },
    current: true,
  },
  {
    id: 2,
    year: "2010 - 2022",
    degree: {
      th: "มัธยมปลาย (แผนการเรียนคณิต-อังกฤษ)",
      en: "High School (Math-Eng Program)",
    },
    institution: {
      th: "โรงเรียนกุลบวรรวิทยา",
      en: "Kularbwittaya School",
    },
    location: {
      th: "กรุงเทพฯ ประเทศไทย",
      en: "Bangkok, Thailand",
    },
    file: "/portfolio.pdf",
    fileKey: "portfolio",
    mapUrl: "https://maps.app.goo.gl/yTML9GN7NEAJipLJ8",
    logo: "/klw.png",
    description: {
      th: "สำเร็จการศึกษาแผนการเรียนศิลป์-คำนวณ GPAX : 3.89",
      en: "Graduated Math-Art program. GPAX: 3.89",
    },
    tags: {
      th: ["วิทย์-คณิต"],
      en: ["Science-Math"],
    },
    current: false,
  },
];
