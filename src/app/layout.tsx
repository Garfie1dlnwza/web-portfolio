import "@/styles/globals.css";
import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import { nunito, kodchasan } from "@/constants/fonts";
import { ThemeProvider } from "@/components/theme-provider"; // Import ที่สร้างตะกี้

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
      <body className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
