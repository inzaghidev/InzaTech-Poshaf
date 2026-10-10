import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "InzaTech | The All-in-One AI Utility Platform", template: "%s | InzaTech" },
  description: "A practical ecosystem of tools, widgets, portals, AI apps, and technical resources.",
};

const themeScript = "try { const theme = localStorage.getItem('inzatech-theme'); document.documentElement.classList.toggle('dark', theme === 'dark'); } catch (error) {}";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
