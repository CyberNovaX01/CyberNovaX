"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Flame, Swords, Newspaper, Zap } from "lucide-react";
import { useT } from "@/lib/i18n";

export function BottomNav() {
  const t = useT();
  const pathname = usePathname();

  const items = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/ff", label: "FF", icon: Flame },
    { href: "/mlbb", label: "MLBB", icon: Swords },
    { href: "/news", label: t("nav.news"), icon: Newspaper },
    { href: "/patch", label: t("nav.patch"), icon: Zap },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-line glass lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around px-2 py-1.5">
        {items.map((item) => {
          const Icon = item.icon;
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={"flex flex-1 flex-col items-center gap-0.5 rounded-xl py-2 text-[10px] font-bold transition-colors " + (active ? "text-gold" : "text-muted")}
            >
              <span className={"grid h-8 w-8 place-items-center rounded-lg transition-colors " + (active ? "bg-gold/15" : "")}>
                <Icon size={17} strokeWidth={active ? 2.4 : 2} />
              </span>
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}