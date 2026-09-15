"use client";
import { useMemo, useState } from "react";
import { Smartphone, MemoryStick, Target, Hand, ChevronRight, ChevronLeft, Check, Crosshair } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { useT } from "@/lib/i18n";
const BRANDS = [
  { id: "apple", name: "Apple", emoji: "🍎" },
  { id: "samsung", name: "Samsung", emoji: "📱" },
  { id: "xiaomi", name: "Xiaomi", emoji: "⚡" },
  { id: "oppo", name: "OPPO", emoji: "🟢" },
  { id: "vivo", name: "Vivo", emoji: "🔵" },
  { id: "realme", name: "Realme", emoji: "🟡" },
  { id: "infinix", name: "Infinix", emoji: "⚫" },
  { id: "tecno", name: "Tecno", emoji: "🟣" },
];
const MODELS: Record<string, { id: string; name: string }[]> = {
  apple: [{ id: "ip11", name: "iPhone 11" }, { id: "ip12", name: "iPhone 12" }, { id: "ip13", name: "iPhone 13" }, { id: "ip14", name: "iPhone 14" }, { id: "ip15", name: "iPhone 15" }],
  samsung: [{ id: "a14", name: "Galaxy A14" }, { id: "a54", name: "Galaxy A54" }, { id: "s21", name: "Galaxy S21" }, { id: "s23", name: "Galaxy S23" }, { id: "s24", name: "Galaxy S24" }],
  xiaomi: [{ id: "rn12", name: "Redmi Note 12" }, { id: "rn13", name: "Redmi Note 13" }, { id: "poco", name: "POCO X6" }, { id: "mi13", name: "Xiaomi 13" }],
  oppo: [{ id: "a17", name: "OPPO A17" }, { id: "a58", name: "OPPO A58" }, { id: "reno10", name: "Reno 10" }],
  vivo: [{ id: "y17", name: "Vivo Y17" }, { id: "y36", name: "Vivo Y36" }, { id: "v27", name: "Vivo V27" }],
  realme: [{ id: "c55", name: "Realme C55" }, { id: "narzo", name: "Narzo 60" }, { id: "11pro", name: "Realme 11 Pro" }],
  infinix: [{ id: "hot30", name: "Hot 30" }, { id: "note30", name: "Note 30" }],
  tecno: [{ id: "spark10", name: "Spark 10" }, { id: "camon20", name: "Camon 20" }],
};
const VARIANTS: Record<string, string[]> = {
  ip11: ["4GB / 64GB", "4GB / 128GB"],
  ip12: ["4GB / 64GB", "4GB / 128GB"],
  ip13: ["4GB / 128GB", "4GB / 256GB"],
  ip14: ["6GB / 128GB", "6GB / 256GB"],
  ip15: ["6GB / 128GB", "8GB / 256GB"],
  a14: ["4GB / 64GB", "4GB / 128GB", "6GB / 128GB"],
  a54: ["8GB / 128GB", "8GB / 256GB"],
  s21: ["8GB / 128GB", "8GB / 256GB"],
  s23: ["8GB / 128GB", "8GB / 256GB"],
  s24: ["8GB / 256GB", "12GB / 512GB"],
  rn12: ["4GB / 64GB", "6GB / 128GB"],
  rn13: ["8GB / 128GB", "8GB / 256GB"],
  poco: ["8GB / 256GB", "12GB / 512GB"],
  mi13: ["8GB / 256GB", "12GB / 256GB"],
  a17: ["4GB / 64GB", "4GB / 128GB"],
  a58: ["6GB / 128GB", "8GB / 256GB"],
  reno10: ["8GB / 256GB"],
  y17: ["4GB / 64GB"],
  y36: ["8GB / 128GB", "8GB / 256GB"],
  v27: ["8GB / 256GB", "12GB / 256GB"],
  c55: ["6GB / 128GB", "8GB / 256GB"],
  narzo: ["6GB / 128GB"],
  "11pro": ["8GB / 128GB", "8GB / 256GB"],
  hot30: ["8GB / 128GB"],
  note30: ["8GB / 128GB", "8GB / 256GB"],
  spark10: ["4GB / 128GB"],
  camon20: ["8GB / 256GB"],
};
const PLAY_STYLES = [
  { id: "rusher", name: "Rusher", emoji: "🔥", desc: "លេងឆាប់រហ័ស" },
  { id: "camper", name: "Camper", emoji: "🎯", desc: "លេងស្ងប់ស្ងាត់" },
  { id: "balanced", name: "Balanced", emoji: "⚖️", desc: "លេងសមតុល្យ" },
  { id: "sniper", name: "Sniper", emoji: "🔭", desc: "លេងចម្ងាយ" },
];
const FINGERS = [
  { id: "2", name: "2 ម្រាម", emoji: "✌️" },
  { id: "3", name: "3 ម្រាម", emoji: "🤟" },
  { id: "4", name: "4 ម្រាម", emoji: "🖖" },
  { id: "5", name: "5 ម្រាម", emoji: "🖐️" },
];
const STEPS = ["brand", "model", "variant", "style", "finger"] as const;
type Step = typeof STEPS[number];
export default function FFPage() {
  const t = useT();
  const [step, setStep] = useState<Step>("brand");
  const [brand, setBrand] = useState<string | null>(null);
  const [model, setModel] = useState<string | null>(null);
  const [variant, setVariant] = useState<string | null>(null);
  const [style, setStyle] = useState<string | null>(null);
  const [finger, setFinger] = useState<string | null>(null);
  const stepIdx = STEPS.indexOf(step);
  const progress = ((stepIdx + 1) / STEPS.length) * 100;
  const models = brand ? MODELS[brand] || [] : [];
  const variants = model ? VARIANTS[model] || [] : [];
  const goNext = () => { const i = STEPS.indexOf(step); if (i < STEPS.length - 1) setStep(STEPS[i + 1]); };
  const goBack = () => { const i = STEPS.indexOf(step); if (i > 0) setStep(STEPS[i - 1]); };
  const done = useMemo(() => brand && model && variant && style && finger, [brand, model, variant, style, finger]);
  return (
    <>
      <MoodSetter mood="ff" />
      <section className="relative mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <FadeIn>
          <div className="flex flex-col gap-2 text-center">
            <span className="kicker mx-auto" style={{ color: "#ff6b35" }}>FREE FIRE</span>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              រក <span className="text-gradient">Sensitivity</span> របស់អ្នក
            </h1>
            <p className="text-sm text-muted sm:text-base">{t("ff.title")}</p>
          </div>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-2xl px-4 pt-10 sm:px-6">
        <FadeIn delay={100}>
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between text-xs text-faint">
              <span>ជំហាន {stepIdx + 1} {t("ff.of")} {STEPS.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-raised">
              <div className="h-full rounded-full transition-all duration-500" style={{ width: progress + "%", background: "linear-gradient(90deg, #ff6b35, #ffb347)" }} />
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-xl sm:p-8">
            {step === "brand" && (
              <StepBlock icon={<Smartphone size={20} />} title={t("ff.step.brand")} sub={t("ff.step.brand.sub")}>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {BRANDS.map((b) => (
                    <PickCard key={b.id} active={brand === b.id} onClick={() => { setBrand(b.id); setModel(null); setVariant(null); }} emoji={b.emoji} label={b.name} color="#ff6b35" />
                  ))}
                </div>
              </StepBlock>
            )}
            {step === "model" && (
              <StepBlock icon={<Smartphone size={20} />} title={t("ff.step.model")} sub={t("ff.step.model.sub")}>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {models.map((m) => (
                    <PickCard key={m.id} active={model === m.id} onClick={() => { setModel(m.id); setVariant(null); }} emoji="📱" label={m.name} color="#ff6b35" />
                  ))}
                </div>
              </StepBlock>
            )}
            {step === "variant" && (
              <StepBlock icon={<MemoryStick size={20} />} title={t("ff.step.variant")} sub={t("ff.step.variant.sub")}>
                <div className="grid grid-cols-2 gap-3">
                  {variants.map((v) => (
                    <PickCard key={v} active={variant === v} onClick={() => setVariant(v)} emoji="💾" label={v} color="#ff6b35" />
                  ))}
                </div>
              </StepBlock>
            )}
            {step === "style" && (
              <StepBlock icon={<Target size={20} />} title={t("ff.step.style")} sub={t("ff.step.style.sub")}>
                <div className="grid grid-cols-2 gap-3">
                  {PLAY_STYLES.map((s) => (
                    <PickCard key={s.id} active={style === s.id} onClick={() => setStyle(s.id)} emoji={s.emoji} label={s.name} sub={s.desc} color="#ff6b35" />
                  ))}
                </div>
              </StepBlock>
            )}
            {step === "finger" && (
              <StepBlock icon={<Hand size={20} />} title={t("ff.step.finger")} sub={t("ff.step.finger.sub")}>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {FINGERS.map((f) => (
                    <PickCard key={f.id} active={finger === f.id} onClick={() => setFinger(f.id)} emoji={f.emoji} label={f.name} color="#ff6b35" />
                  ))}
                </div>
              </StepBlock>
            )}
            <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-6">
              <button onClick={goBack} disabled={stepIdx === 0} className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-muted transition-colors hover:border-line-2 hover:text-fg disabled:opacity-30 disabled:cursor-not-allowed">
                <ChevronLeft size={14} />{t("ff.back")}
              </button>
              {step !== "finger" ? (
                <button onClick={goNext} disabled={!canAdvance(step, { brand, model, variant, style })} className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-bold text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed" style={{ background: "linear-gradient(135deg, #ff6b35, #ffb347)" }}>
                  {t("ff.next")}<ChevronRight size={14} />
                </button>
              ) : (
                <button disabled={!done} className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-bold text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed" style={{ background: "linear-gradient(135deg, #ff6b35, #ffb347)" }}>
                  <Check size={14} />{t("ff.done")}
                </button>
              )}
            </div>
          </div>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-2xl px-4 pb-24 pt-8 sm:px-6">
        {done && (
          <FadeIn>
            <div className="rounded-3xl border border-line bg-surface/60 p-6 text-center backdrop-blur-xl">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl" style={{ background: "#ff6b3522", color: "#ff6b35" }}>
                <Crosshair size={26} />
              </span>
              <h3 className="mt-4 text-lg font-bold">Guide របស់អ្នករួចរាល់!</h3>
              <p className="mt-1 text-sm text-muted">មុខងារបង្ហាញ Guide នឹងបន្ថែមនៅពេលភ្ជាប់ Supabase។</p>
            </div>
          </FadeIn>
        )}
      </section>
    </>
  );
}
function canAdvance(step: Step, v: { brand: string | null; model: string | null; variant: string | null; style: string | null }) {
  if (step === "brand") return !!v.brand;
  if (step === "model") return !!v.model;
  if (step === "variant") return !!v.variant;
  if (step === "style") return !!v.style;
  return false;
}
function StepBlock({ icon, title, sub, children }: { icon: React.ReactNode; title: string; sub: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "#ff6b3520", color: "#ff6b35" }}>{icon}</span>
        <div>
          <div className="text-sm font-bold">{title}</div>
          <div className="text-xs text-faint">{sub}</div>
        </div>
      </div>
      {children}
    </div>
  );
}
function PickCard({ active, onClick, emoji, label, sub, color }: { active: boolean; onClick: () => void; emoji: string; label: string; sub?: string; color: string }) {
  return (
    <button onClick={onClick}
      className="group relative flex flex-col items-start gap-2 rounded-2xl border p-3.5 text-left transition-all hover:-translate-y-0.5"
      style={active
        ? { background: color + "22", borderColor: color + "88", boxShadow: "0 12px 32px -16px " + color + "88" }
        : { background: "var(--c-raised)", borderColor: "var(--c-line)" }}>
      <span className="text-xl">{emoji}</span>
      <div>
        <div className="text-xs font-bold">{label}</div>
        {sub && <div className="text-[10px] text-faint">{sub}</div>}
      </div>
      {active && (
        <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full text-white" style={{ background: color }}>
          <Check size={11} strokeWidth={3} />
        </span>
      )}
    </button>
  );
}
