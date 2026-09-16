"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

export function LiveCounter() {
  const { lang } = useLang();
  const km = lang === "km";
  const [count, setCount] = useState(48290);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        const delta = Math.floor(Math.random() * 240) - 100;
        return Math.max(40000, Math.min(60000, c + delta));
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const display =
    count >= 1000 ? (count / 1000).toFixed(1) + "K" : String(count);

  return (
    <div
      className="hidden items-center gap-1.5 rounded-xl border px-2.5 py-1.5 md:flex"
      style={{
        borderColor: "rgba(239,68,68,0.35)",
        background: "rgba(239,68,68,0.08)",
      }}
      title={km ? "អ្នកលេង Online" : "Players Online"}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
      </span>
      <span className="font-mono text-[11px] font-black text-red-400">
        {display}
      </span>
    </div>
  );
}