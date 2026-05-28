import {
  SiInstagram,
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiSalesforce,
} from "react-icons/si";
import { Mail } from "lucide-react";

export const socialLinks = [
  {
    icon: SiGithub,
    href: "https://github.com/Garfie1dlnwza",
    label: "GitHub",
    color: "hover:text-[#181717] dark:hover:text-white",
  },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/rawipon-ponsarutwanit-43b4a632a/",
    label: "LinkedIn",
    color: "hover:text-[#0A66C2] dark:hover:text-[#0A66C2]",
  },
  {
    icon: SiSalesforce,
    href: "https://trailblazer.me/",
    label: "Salesforce",
    color: "hover:text-[#00A1E0] dark:hover:text-[#00A1E0]",
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/g.gorfor/",
    label: "Instagram",
    color: "hover:text-[#E4405F] dark:hover:text-[#E4405F]",
  },
  {
    icon: SiFacebook,
    href: "https://www.facebook.com/profile.php?id=61584195267233",
    label: "Facebook",
    color: "hover:text-[#1877F2] dark:hover:text-[#1877F2]",
  },
  {
    icon: Mail,
    href: "mailto:rawiponponsarutwanit@gmail.com",
    label: "Email",
    color: "hover:text-amber-600 dark:hover:text-amber-400",
  },
];
