import "@/styles/globals.css";
import { type Metadata } from "next";
import { nunito, kodchasan } from "@/constants/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/layouts/navbar";

export const metadata: Metadata = {
  title: "Rawipon | Portfolio",
  description: "Mobile & Web Developer Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
