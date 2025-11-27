import { HeroSection } from "@/components/home/hero-section";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <HeroSection />
    </main>
  );
}
