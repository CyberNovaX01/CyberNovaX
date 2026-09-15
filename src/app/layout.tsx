import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/context/LangContext';
import Header from '@/components/Header';
export const metadata: Metadata = {
  title: 'Gaming Guide',
  description: 'Find guides that fit you',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body className="min-h-screen bg-[#0b0f19]">
        <LangProvider>
          <Header />
          <main className="max-w-3xl mx-auto p-4">{children}</main>
        </LangProvider>
      </body>
    </html>
  );
}
