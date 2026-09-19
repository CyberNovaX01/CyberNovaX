import type { Metadata, Viewport } from "next";
import { Inter, Kantumruy_Pro, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const kantumruy = Kantumruy_Pro({ subsets: ["khmer", "latin"], weight: ["300","400","500","600","700"], variable: "--font-kantumruy", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "CyberNovaX — ការណែនាំហ្គេម", template: "%s | CyberNovaX" },
  description: "Guides សម្រាប់ Free Fire និង Mobile Legends។",
};
export const viewport: Viewport = { themeColor: "#0a0d14", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km" suppressHydrationWarning data-theme="dark" data-lang="km">
      <body className={`${inter.variable} ${kantumruy.variable} ${sora.variable} ${mono.variable} font-sans bg-app text-fg antialiased`}>
        <LangProvider>{children}</LangProvider>
        <Analytics />
      </body>
    </html>
  );
}