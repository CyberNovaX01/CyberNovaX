"use client";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";

type Section = {
  headingKm: string;
  headingEn: string;
  bodyKm: string[];
  bodyEn: string[];
};

type Props = {
  icon: typeof FileText;
  kickerKm: string;
  kickerEn: string;
  titleKm: string;
  titleEn: string;
  subtitleKm: string;
  subtitleEn: string;
  color: string;
  lastUpdated: string;
  sections: Section[];
};

export function LegalPage({
  icon: Icon,
  kickerKm,
  kickerEn,
  titleKm,
  titleEn,
  subtitleKm,
  subtitleEn,
  color,
  lastUpdated,
  sections,
}: Props) {
  const { lang } = useLang();
  const km = lang === "km";

  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, " + color + "25 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(" + color + " 1px, transparent 1px), linear-gradient(90deg, " + color + " 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
          <Link
            href="/"
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-bold text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft size={13} />
            {km ? "ត្រឡប់ Home" : "Back to Home"}
          </Link>

          <FadeIn>
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]"
              style={{ color }}
            >
              <Icon size={13} />
              {km ? kickerKm : kickerEn}
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              <span
                style={{
                  background: "linear-gradient(135deg, " + color + " 0%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {km ? titleKm : titleEn}
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
              {km ? subtitleKm : subtitleEn}
            </p>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-faint">
              {km ? "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ" : "Last updated"}: {lastUpdated}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="space-y-10">
          {sections.map((s, i) => (
            <FadeIn key={i} delay={i * 40}>
              <article>
                <h2
                  className="text-xl font-black tracking-tight sm:text-2xl"
                  style={{ color }}
                >
                  {km ? s.headingKm : s.headingEn}
                </h2>
                <div className="mt-4 space-y-3">
                  {(km ? s.bodyKm : s.bodyEn).map((p, idx) => (
                    <p key={idx} className="text-sm leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Footer note */}
        <FadeIn>
          <div className="mt-14 rounded-xl border border-line bg-surface/40 p-5 text-center">
            <p className="text-xs text-muted">
              {km
                ? "បើមានសំណួរ សូមទាក់ទងមកយើងតាម "
                : "If you have questions, contact us at "}
              <a
                href="mailto:cybernovax0101@gmail.com"
                className="font-bold transition-colors hover:underline"
                style={{ color }}
              >
                cybernovax0101@gmail.com
              </a>
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}