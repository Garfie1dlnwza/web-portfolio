import { Kodchasan, Nunito } from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});
export const kodchasan = Kodchasan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kodchasan",
  display: "swap",
});
