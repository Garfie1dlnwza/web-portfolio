import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/aboutme-section";
import { EducationSection } from "@/components/home/education-section";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <HeroSection />
      <AboutSection />
      <EducationSection />
    </main>
  );
}
