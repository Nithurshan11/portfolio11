import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

export const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans-family",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-family",
});

export const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-family",
});
