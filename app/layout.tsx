import type { Metadata } from "next";
import { fontDisplay, fontMono, fontSans } from "@/lib/fonts";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(fontSans.variable, fontMono.variable, fontDisplay.variable)}
    >
      <body className={cn(fontSans.className, "min-h-dvh antialiased")}>
        {children}
      </body>
    </html>
  );
}
