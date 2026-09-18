"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Trophy, Target, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { SearchModal } from "./SearchModal";
import { LiveCounter } from "./LiveCounter";
import { useT } from "@/lib/i18n";

type GameBadge = { slug: string; name: string; lastUpdated: string | null };

const QUICK_ACTIONS = [
  {
    href: "/mlbb/tier",
    icon: Trophy,
    labelEn: "Tier",
    tooltip: "Tier List",
    color: "#f5c542",
  },
  {
    href: "/ff/sensitivity",
    icon: Target,
    labelEn: "Sensi",
    tooltip: "Sensitivity",
    color: "#22d3ee",
  },
];

export function Header({
  games,
  siteName,
  logoUrl,
}: {
  games: GameBadge[];
  siteName: string;
  logoUrl: string | null;
}) {
  const t = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  void games;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const nav = [
    { href: "/", label: t("nav.home") },
    { href: "/ff-hub", label: "Free Fire" },
    { href: "/mlbb", label: "MLBB" },
    { href: "/news", label: t("nav.news") },
    { href: "/patch", label: t("nav.patch") },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line glass transition-all duration-300">
        <div
          className={
            "mx-auto flex max-w-7xl items-center gap-2 px-3 transition-all duration-300 sm:gap-3 sm:px-6 " +
            (scrolled ? "h-12" : "h-16")
          }
        >
          <Link href="/" className="group flex shrink-0 items-center gap-2 sm:gap-2.5">
            <span
              className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl text-black shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              style={{
                background: logoUrl ? "transparent" : "linear-gradient(135deg, #f5c542 0%, #ff8c00 100%)",
                animation: "logoPulse 3s ease-in-out infinite",
              }}
            >
              {logoUrl ? (
                <img src={logoUrl} alt={siteName} className="h-full w-full object-cover" />
              ) : (
                <Gamepad2 size={17} strokeWidth={2.4} />
              )}
            </span>
            <div
              className={
                "hidden leading-tight transition-all duration-300 md:block " +
                (scrolled ? "opacity-70" : "opacity-100")
              }
            >
              <div className="text-sm font-black tracking-tight">{siteName}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-faint">
                ការណែនាំហ្គេម
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {nav.map((n) => {
              const active =
                n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={
                    "group relative rounded-full px-3 py-1.5 text-xs font-bold transition-all " +
                    (active
                      ? "bg-gold/15 text-gold ring-1 ring-gold/40"
                      : "text-muted hover:bg-surface hover:text-fg")
                  }
                >
                  {n.label}
                  {!active && (
                    <span className="absolute bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gold transition-all duration-300 group-hover:w-6" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 lg:ml-2 lg:border-l lg:border-line lg:pl-2">
            {QUICK_ACTIONS.map((q) => {
              const Icon = q.icon;
              const active = pathname.startsWith(q.href);
              return (
                <Link
                  key={q.href}
                  href={q.href}
                  title={q.tooltip}
                  aria-label={q.tooltip}
                  className="group relative flex h-9 items-center gap-1.5 rounded-xl border px-2.5 text-xs font-bold transition-all hover:-translate-y-0.5"
                  style={{
                    borderColor: active ? q.color + "80" : "var(--color-line)",
                    background: active ? q.color + "15" : "var(--color-surface)",
                    color: active ? q.color : "var(--color-muted)",
                    boxShadow: active ? "0 0 20px -6px " + q.color + "88" : "none",
                  }}
                >
                  <Icon
                    size={14}
                    className="transition-transform group-hover:scale-125 group-hover:rotate-12"
                  />
                  <span className="inline">{q.labelEn}</span>
                </Link>
              );
            })}
          </div>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <LiveCounter />

            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="group grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 text-muted transition-all hover:border-gold/40 hover:text-gold hover:shadow-[0_0_20px_-4px_rgba(245,197,66,0.6)]"
            >
              <Search size={15} className="transition-transform group-hover:scale-110" />
            </button>

            <LanguageSwitch />
            <ThemeToggle />

            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="group relative grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 text-muted transition-all hover:border-gold/40 hover:text-gold hover:shadow-[0_0_20px_-4px_rgba(245,197,66,0.6)] lg:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className="absolute left-0 block h-0.5 w-full rounded-full bg-current transition-all duration-300"
                  style={{
                    top: open ? "50%" : "0",
                    transform: open ? "translateY(-50%) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300"
                  style={{
                    opacity: open ? 0 : 1,
                    transform: open ? "translateX(8px)" : "none",
                  }}
                />
                <span
                  className="absolute bottom-0 left-0 block h-0.5 w-full rounded-full bg-current transition-all duration-300"
                  style={{
                    bottom: open ? "50%" : "0",
                    transform: open ? "translateY(50%) rotate(-45deg)" : "none",
                  }}
                />
              </span>
            </button>
          </div>
        </div>

        <nav
          className="overflow-hidden border-t border-line glass transition-all duration-300 lg:hidden"
          style={{
            maxHeight: open ? "600px" : "0",
            opacity: open ? 1 : 0,
          }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 p-3">
            {nav.map((n) => {
              const active =
                n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={
                    "rounded-xl px-3 py-2.5 text-sm font-bold transition-all " +
                    (active
                      ? "bg-gold/15 text-gold"
                      : "text-muted hover:bg-surface hover:text-fg")
                  }
                >
                  {n.label}
                </Link>
              );
            })}

            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-line pt-3">
              {QUICK_ACTIONS.map((q) => {
                const Icon = q.icon;
                return (
                  <Link
                    key={q.href}
                    href={q.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-bold transition-all"
                    style={{
                      borderColor: q.color + "40",
                      background: q.color + "10",
                      color: q.color,
                    }}
                  >
                    <Icon size={14} />
                    {q.tooltip}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <style>{`
          @keyframes logoPulse {
            0%, 100% { box-shadow: 0 8px 24px -8px rgba(245,197,66,0.7); }
            50% { box-shadow: 0 8px 32px -4px rgba(245,197,66,0.95); }
          }
        `}</style>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}