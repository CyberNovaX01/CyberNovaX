import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { ThemeBackground } from "@/components/ThemeBackground";

const MOCK_GAMES = [
  { slug: "free-fire", name: "Free Fire", lastUpdated: "2026-09-15" },
  { slug: "mlbb", name: "Mobile Legends", lastUpdated: "2026-09-14" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-dvh">
      <ThemeBackground />
      <Header games={MOCK_GAMES} siteName="Gaming Guide" logoUrl={null} />
      <main className="relative z-10 pb-20 lg:pb-0">{children}</main>
      <Footer />
      <BottomNav />
    </div>
  );
}