// src/components/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useT } from "@/lib/i18n";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  const t = useT();

  useEffect(() => {
    const saved = (localStorage.getItem("gg-theme") as "dark" | "light") || "dark";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("gg-theme", next);
  };

  if (!mounted) return <div className="h-9 w-9" aria-hidden />;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? t("theme.light") : t("theme.dark")}
      className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 text-muted transition-colors hover:border-line-2 hover:text-fg"
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}