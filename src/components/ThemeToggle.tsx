"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useT } from "@/lib/i18n";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  const [rotating, setRotating] = useState(false);
  const t = useT();

  useEffect(() => {
    const saved = (localStorage.getItem("gg-theme") as "dark" | "light") || "dark";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setRotating(true);
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("gg-theme", next);
    setTimeout(() => setRotating(false), 500);
  };

  if (!mounted) return <div className="h-9 w-9" aria-hidden />;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t("theme.light") : t("theme.dark")}
      className="group relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-line bg-surface/60 text-muted transition-all hover:border-gold/40 hover:text-gold hover:shadow-[0_0_20px_-4px_rgba(245,197,66,0.6)]"
    >
      <span
        className="grid place-items-center transition-transform duration-500 ease-out"
        style={{ transform: rotating ? "rotate(360deg)" : "rotate(0deg)" }}
      >
        {isDark ? <Sun size={17} /> : <Moon size={17} />}
      </span>

      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isDark
            ? "radial-gradient(circle at center, rgba(245,197,66,0.20) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(59,130,246,0.20) 0%, transparent 70%)",
        }}
      />
    </button>
  );
}