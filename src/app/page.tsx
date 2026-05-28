import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/aboutme-section";
import { EducationSection } from "@/components/home/education-section";
import { SkillsSection } from "@/components/home/skills-section";
import { ProjectSection } from "@/components/home/project-section";
import { ExperienceSection } from "@/components/home/experience-section";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 text-white dark:bg-neutral-950">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
