"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { useT } from "@/lib/i18n";

type GameBadge = { slug: string; name: string; lastUpdated: string | null };

export function Header({
  games, siteName, logoUrl,
}: { games: GameBadge[]; siteName: string; logoUrl: string | null }) {
  const t = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  void games; void logoUrl;

  const nav = [
    { href: "/", label: t("nav.home") },
    { href: "/ff", label: "Free Fire" },
    { href: "/mlbb", label: "MLBB" },
    { href: "/news", label: t("nav.news") },
    { href: "/patch", label: t("nav.patch") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-xl text-black shadow-lg" style={{ background: "linear-gradient(135deg, #f5c542 0%, #ff8c00 100%)", boxShadow: "0 8px 24px -8px rgba(245,197,66,0.7)" }}>
            <Gamepad2 size={17} strokeWidth={2.4} />
          </span>
          <div className="leading-tight hidden sm:block">
            <div className="text-sm font-black tracking-tight">{siteName}</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-faint">ការណែនាំហ្គេម</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href}
                className={"rounded-full px-3 py-1.5 text-xs font-bold transition-colors " + (active ? "bg-gold/15 text-gold ring-1 ring-gold/40" : "text-muted hover:bg-surface hover:text-fg")}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitch />
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 text-muted lg:hidden">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line glass lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 p-3">
            {nav.map((n) => {
              const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              return (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
                  className={"rounded-xl px-3 py-2.5 text-sm font-bold " + (active ? "bg-gold/15 text-gold" : "text-muted hover:bg-surface")}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}