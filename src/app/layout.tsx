import "@/styles/globals.css";
import { type Metadata } from "next";
import { nunito, kodchasan } from "@/constants/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/layouts/navbar";

export const metadata: Metadata = {
  title: {
    default: "Rawipon Ponsarutwanit | Full-Stack Developer",
    template: "%s | Rawipon Ponsarutwanit",
  },
  description:
    "Full-Stack Developer & Computer Science student at Kasetsart University. Building scalable web and mobile applications with React, Next.js, TypeScript, Go, and Flutter.",
  keywords: [
    "Rawipon Ponsarutwanit",
    "Garfieldlnwza",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Kasetsart University",
    "Portfolio",
    "Thailand",
  ],
  authors: [{ name: "Rawipon Ponsarutwanit" }],
  creator: "Rawipon Ponsarutwanit",
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    title: "Rawipon Ponsarutwanit | Full-Stack Developer",
    description:
      "Full-Stack Developer & Computer Science student at Kasetsart University. Building scalable web and mobile applications with React, Next.js, TypeScript, Go, and Flutter.",
    siteName: "Rawipon Ponsarutwanit",
    images: [
      {
        url: "/profile-1.png",
        width: 1200,
        height: 630,
        alt: "Rawipon Ponsarutwanit — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rawipon Ponsarutwanit | Full-Stack Developer",
    description:
      "Full-Stack Developer & CS Student at Kasetsart University. Building web and mobile apps with React, Next.js, TypeScript, and Flutter.",
    images: ["/profile-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${kodchasan.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#F0F0F0] text-slate-900 transition-colors duration-300 dark:bg-[#121212] dark:text-slate-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />

            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
