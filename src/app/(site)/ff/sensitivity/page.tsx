"use client";
import { Target } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { SensitivityCalculator } from "@/components/ff/SensitivityCalculator";

export default function SensitivityPage() {
  const { lang } = useLang();
  const km = lang === "km";

  return (
    <>
      <MoodSetter mood="ff" />

      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(34,211,238,0.18) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(139,92,246,0.14) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
          <FadeIn>
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]" style={{ color: "#22d3ee" }}>
              <Target size={13} />
              SENSITIVITY CALCULATOR
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span
                style={{
                  background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {km ? "Sensitivity របស់អ្នក" : "Your Sensitivity"}
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {km
                ? "ជ្រើសឧបករណ៍ និងរបៀបលេង រួចទទួលបានតម្លៃ sensitivity ដែលសមស្របនឹងអ្នក។"
                : "Pick your device and playstyle to get sensitivity values tuned to you."}
            </p>
          </FadeIn>
        </div>
      </section>

      <SensitivityCalculator />
    </>
  );
}