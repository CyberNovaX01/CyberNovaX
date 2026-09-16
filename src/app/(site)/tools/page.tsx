"use client";
import Link from "next/link";
import { ArrowRight, Wrench, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import { TOOLS, getToolCount } from "@/lib/toolsData";

export default function ToolsPage() {
  const { lang } = useLang();
  const km = lang === "km";

  return (
    <>
      <MoodSetter mood="cosmic" />

      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(245,197,66,0.22) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#f5c542 1px, transparent 1px), linear-gradient(90deg, #f5c542 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <FadeIn>
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]"
              style={{ color: "#f5c542" }}
            >
              <Wrench size={13} />
              GAMING TOOLS
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">{km ? "ឧបករណ៍" : "Tools"}</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f5c542 0%, #ff8c00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {km ? "ហ្គេម" : "for Gamers"}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {km
                ? getToolCount() + " ឧបករណ៍ និងមគ្គុទ្ទេសក៍ជួយអ្នកឡើង rank លឿន — ជ្រើសរើសដែលអ្នកចង់ប្រើ។"
                : getToolCount() + " tools and guides to help you rank up faster — pick what you need."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CARDS */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t, i) => (
            <FadeIn key={t.slug} delay={i * 50}>
              <Link
                href={t.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-surface transition-all hover:-translate-y-1"
                style={{
                  borderColor: t.featured ? t.accent + "80" : "var(--color-line)",
                  boxShadow: t.featured
                    ? "0 20px 50px -25px " + t.accent + "aa, 0 0 0 1px " + t.accent + "40"
                    : "0 20px 50px -30px " + t.accent + "88",
                }}
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, " +
                      t.accent +
                      "40 0%, " +
                      t.accent +
                      "15 45%, #0a0d14 100%)",
                  }}
                >
                  <div
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-70"
                    style={{ background: t.accent }}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.10]"
                    style={{
                      backgroundImage:
                        "linear-gradient(" +
                        t.accent +
                        " 1px, transparent 1px), linear-gradient(90deg, " +
                        t.accent +
                        " 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  <span
                    className="absolute left-3 top-3 rounded-md px-2 py-1 text-[9px] font-black uppercase tracking-widest backdrop-blur-md"
                    style={{
                      background: "rgba(0,0,0,0.55)",
                      color: t.accent,
                      boxShadow: "0 0 0 1px " + t.accent + "55",
                    }}
                  >
                    {t.badge}
                  </span>

                  {t.featured && (
                    <span
                      className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md px-2 py-1 text-[9px] font-black uppercase tracking-widest"
                      style={{
                        background: "linear-gradient(135deg,#f5c542,#ff8c00)",
                        color: "#0a0d14",
                      }}
                    >
                      <Sparkles size={9} />
                      HOT
                    </span>
                  )}

                  <span className="absolute bottom-4 right-4 text-5xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
                    {t.emoji}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-black tracking-tight">
                    {km ? t.titleKm : t.titleEn}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {km ? t.descKm : t.descEn}
                  </p>

                  <div
                    className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-bold transition-all group-hover:gap-3"
                    style={{ color: t.accent }}
                  >
                    {km ? "មើល" : "Open"}
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}