"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Play } from "lucide-react";
import { useT, useLang } from "@/lib/i18n";

export function HeroBanner() {
  const t = useT();
  const { lang } = useLang();

  return (
    <section className="hero-banner relative min-h-[85vh] overflow-hidden">
      <div className="hero-silhouette" />

      <div className="relative z-10 mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        {/* LEFT — text */}
        <div className="max-w-2xl">
          <div className="slide-up flex items-center gap-2" style={{ animationDelay: "0ms" }}>
            <span className="tag-pulse inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold backdrop-blur">
              <Sparkles size={12} />
              {t("hero.kicker")}
            </span>
          </div>

          <h1 className="slide-up mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl" style={{ animationDelay: "150ms" }}>
            <span className="block text-white title-glow">{t("hero.line1")}</span>
            <span className="block text-gradient">{t("hero.line2")}</span>
            <span className="mt-2 block text-2xl font-bold text-muted sm:text-3xl md:text-4xl lg:text-5xl">
              {t("hero.line3")}
            </span>
          </h1>

          <p className="slide-up mt-8 max-w-xl text-base text-muted sm:text-lg" style={{ animationDelay: "300ms" }}>
            {t("hero.sub1")} <span className="font-semibold text-orange">Free Fire</span>{" "}
            {t("hero.sub2")} <span className="font-semibold text-blue">Mobile Legends</span>
            {t("hero.sub3")}
          </p>

          <div className="slide-up mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "450ms" }}>
            <Link href="/ff" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-black transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #f5c542, #ff8c00)", boxShadow: "0 20px 40px -12px rgba(245,197,66,0.7)" }}>
              <TrendingUp size={16} />
              {t("hero.cta1")}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/mlbb" className="group inline-flex items-center gap-2 rounded-full border border-line-2 bg-surface/60 px-6 py-3 text-sm font-bold text-fg backdrop-blur transition-all hover:scale-105 hover:bg-surface">
              <Sparkles size={16} />
              {t("hero.cta2")}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* RIGHT — video */}
        <div className="slide-up relative hidden lg:block" style={{ animationDelay: "600ms" }}>
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-gold/30" style={{ boxShadow: "0 40px 80px -30px rgba(245,197,66,0.5), 0 0 0 1px rgba(245,197,66,0.2)" }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/media/hero.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 -z-10 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a1410 0%, #0a0d14 100%)" }}>
              <div className="text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-gold backdrop-blur">
                  <Play size={24} fill="currentColor" />
                </span>
                <p className="mt-3 text-xs text-muted">ដាក់ video នៅ public/media/hero.mp4</p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,13,20,0.5) 100%)" }} />

            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              LIVE
            </span>
          </div>

          <div className="float-chip absolute -bottom-4 -left-4 rounded-2xl border border-line bg-surface/90 px-4 py-3 backdrop-blur-xl" style={{ boxShadow: "0 20px 40px -20px rgba(0,0,0,0.6)" }}>
            <div className="text-[10px] font-bold uppercase tracking-wider text-faint">PATCH</div>
            <div className="mt-0.5 font-mono text-lg font-black text-gold">v1.9.50</div>
          </div>
        </div>
      </div>
    </section>
  );
}