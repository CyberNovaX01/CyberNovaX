"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft, Target, Crosshair, Users, Zap, Swords,
  MapPin, Timer, CheckCircle2, ChevronDown, Sparkles,
  TrendingUp, Award, Shield, Bomb,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";

const META_VERSION = "FF OB47 Patch";
const META_UPDATED = "15 October 2026";

type GameMode = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  descKm: string;
  descEn: string;
  players: string;
};

const MODES: GameMode[] = [
  {
    id: "topgun",
    name: "Top Gun Live",
    emoji: "🎯",
    color: "#22d3ee",
    descKm: "ម៉ូដ 4v4 លឿន — សម្លាប់សត្រូវឱ្យបានច្រើនបំផុតក្នុងរយៈពេលកំណត់",
    descEn: "Fast 4v4 mode — get the most kills in limited time",
    players: "4v4",
  },
];

type Section = {
  icon: any;
  color: string;
  titleKm: string;
  titleEn: string;
  items: { titleKm: string; titleEn: string; descKm: string; descEn: string }[];
};

const SECTIONS: Section[] = [
  {
    icon: Crosshair,
    color: "#22d3ee",
    titleKm: "Loadout ល្អបំផុត",
    titleEn: "Best Loadouts",
    items: [
      {
        titleKm: "MP40 + M1887",
        titleEn: "MP40 + M1887",
        descKm: "រួមបញ្ចូលល្បឿនបាញ់លឿន និងកម្លាំងជិត",
        descEn: "Combines fast fire rate and close-range power",
      },
      {
        titleKm: "UMP + AWM",
        titleEn: "UMP + AWM",
        descKm: "សម្រាប់ចម្ងាយមធ្យម និងឆ្ងាយ — គ្របដណ្តប់ទាំងអស់",
        descEn: "For mid and long range — covers all distances",
      },
      {
        titleKm: "Groza + Desert Eagle",
        titleEn: "Groza + Desert Eagle",
        descKm: "Damage ខ្ពស់ + pistol លឿន សម្រាប់គ្រាប់អស់",
        descEn: "High damage + fast pistol when out of ammo",
      },
    ],
  },
  {
    icon: Users,
    color: "#a855f7",
    titleKm: "តួអង្គល្អបំផុត",
    titleEn: "Best Characters",
    items: [
      {
        titleKm: "Alok",
        titleEn: "Alok",
        descKm: "DJ zone ពន្លឿនចលនា + ព្យាបាល HP — សំខាន់ណាស់សម្រាប់ rush",
        descEn: "DJ zone boosts speed + heals HP — vital for rushes",
      },
      {
        titleKm: "Chrono",
        titleEn: "Chrono",
        descKm: "របាំងការពារគ្រាប់បាញ់ — សង្គ្រោះជីវិតក្នុងគ្រា​អាសន្ន",
        descEn: "Bullet-blocking shield — saves lives in tight spots",
      },
      {
        titleKm: "Wukong",
        titleEn: "Wukong",
        descKm: "ប្តូរជាដើមឈើសម្រាប់ ambush — គ្មាននរណាដឹង",
        descEn: "Transform into bush for ambush — nobody suspects",
      },
      {
        titleKm: "K (Captain Booyah)",
        titleEn: "K (Captain Booyah)",
        descKm: "EP ខ្ពស់ + ព្យាបាលក្រុម — sustain ល្អបំផុត",
        descEn: "High EP + team heal — best sustain",
      },
    ],
  },
  {
    icon: MapPin,
    color: "#f59e0b",
    titleKm: "យុទ្ធសាស្ត្រផែនទី",
    titleEn: "Map Strategy",
    items: [
      {
        titleKm: "គ្រប់គ្រងចំណុចកណ្តាល",
        titleEn: "Control the Center",
        descKm: "ចំណុចកណ្តាលមាន cover ល្អ និងមើលឃើញគ្រប់ទិស",
        descEn: "Center has good cover and 360° visibility",
      },
      {
        titleKm: "ប្រើ Gloo Wall ជាប្រយោជន៍",
        titleEn: "Use Gloo Walls Smart",
        descKm: "ដាក់ Gloo Wall ពេលបាញ់ឆ្ងាយ និងពេលរត់គេច",
        descEn: "Place Gloo Walls when sniping and retreating",
      },
      {
        titleKm: "ទីតាំងខ្ពស់",
        titleEn: "High Ground",
        descKm: "រកទីតាំងខ្ពស់ដើម្បីមើលឃើញសត្រូវមុនគេ",
        descEn: "Find high ground to spot enemies first",
      },
      {
        titleKm: "ជៀសវាងតំបន់បើកចំហ",
        titleEn: "Avoid Open Areas",
        descKm: "នៅក្បែរ cover — កុំដើរកណ្តាលទីវាល",
        descEn: "Stay near cover — never walk across open ground",
      },
    ],
  },
  {
    icon: Zap,
    color: "#ef4444",
    titleKm: "គន្លឹះ Pro",
    titleEn: "Pro Tips",
    items: [
      {
        titleKm: "Drag shot + headshot",
        titleEn: "Drag shot + headshot",
        descKm: "ហាត់ drag shot ឱ្យបានជាប់ — កំណត់ការប្រយុទ្ធ",
        descEn: "Master drag shots — decides every fight",
      },
      {
        titleKm: "3-finger claw",
        titleEn: "3-finger claw",
        descKm: "ប្រើ 3 ម្រាម — បាញ់ + ផ្លាស់ទី + ងាក ព្រមគ្នា",
        descEn: "Use 3 fingers — shoot + move + look simultaneously",
      },
      {
        titleKm: "Pre-aim មុនចេញ",
        titleEn: "Pre-aim before peeking",
        descKm: "ដាក់ crosshair ត្រង់ក្បាលមុនចេញ — បាញ់លឿនជាង",
        descEn: "Place crosshair at head level before peeking — shoot faster",
      },
      {
        titleKm: "Jump shot",
        titleEn: "Jump shot",
        descKm: "លោតពេលបាញ់ — ពិបាកសម្រាប់សត្រូវក្នុងការតម្រង់",
        descEn: "Jump while shooting — harder for enemies to aim",
      },
    ],
  },
  {
    icon: Shield,
    color: "#22c55e",
    titleKm: "កំហុសដែលត្រូវចៀសវាង",
    titleEn: "Mistakes to Avoid",
    items: [
      {
        titleKm: "Rush តែឯង",
        titleEn: "Rushing Alone",
        descKm: "កុំចេញម្នាក់ឯង — រង់ចាំក្រុម រួចចេញជាមួយគ្នា",
        descEn: "Never push solo — wait for team, then push together",
      },
      {
        titleKm: "Reload ពេលសត្រូវនៅជិត",
        titleEn: "Reloading Near Enemy",
        descKm: "បើគ្រាប់អស់ ប្តូរទៅ pistol ឬរត់គេច កុំ reload នៅមុខសត្រូវ",
        descEn: "If out of ammo, switch to pistol or retreat — never reload in front",
      },
      {
        titleKm: "ឈរនៅកន្លែងតែមួយ",
        titleEn: "Staying in One Spot",
        descKm: "ផ្លាស់ទីជានិច្ច — សត្រូវអាចព្យាករណ៍ទីតាំងអ្នក",
        descEn: "Always move — enemies can predict your position",
      },
      {
        titleKm: "ចាប់គ្រាប់ច្រើនពេក",
        titleEn: "Greedy for Loot",
        descKm: "កុំចំណាយពេលច្រើនលើ loot — សត្រូវអាចមកដល់មុន",
        descEn: "Don't spend too long looting — enemies may arrive first",
      },
    ],
  },
];

type FAQItem = {
  qKm: string;
  qEn: string;
  aKm: string;
  aEn: string;
};

const FAQ: FAQItem[] = [
  {
    qKm: "តើ Top Gun Live លេងប៉ុន្មាននាក់?",
    qEn: "How many players in Top Gun Live?",
    aKm: "4v4 — ក្រុមតូច ដែលត្រូវការ coordination ខ្ពស់",
    aEn: "4v4 — small teams requiring high coordination",
  },
  {
    qKm: "តើឈ្នះដោយរបៀបណា?",
    qEn: "How do you win?",
    aKm: "សម្លាប់សត្រូវឱ្យបានច្រើនបំផុតក្នុងរយៈពេលកំណត់ ឬ សម្លាប់អស់ទាំងក្រុម",
    aEn: "Get the most kills in limited time OR eliminate entire enemy team",
  },
  {
    qKm: "តើអាវុធណាល្អបំផុត?",
    qEn: "Which weapons are best?",
    aKm: "MP40, UMP, Groza, M1887 — ជ្រើសតាមការលេងរបស់អ្នក (close ឬ mid-range)",
    aEn: "MP40, UMP, Groza, M1887 — pick based on your playstyle (close or mid-range)",
  },
  {
    qKm: "តើមាន Gloo Wall ទេ?",
    qEn: "Are Gloo Walls available?",
    aKm: "មាន — ប្រើវាជា cover ពេលបាញ់ឆ្ងាយ ឬពេលរត់គេច",
    aEn: "Yes — use them as cover when sniping or retreating",
  },
  {
    qKm: "តើលេងជាមួយមិត្តបានទេ?",
    qEn: "Can I play with friends?",
    aKm: "បាន — សូមអញ្ជើញមិត្ត 3 នាក់ ដើម្បីបង្កើត team 4 នាក់",
    aEn: "Yes — invite 3 friends to form a 4-player team",
  },
];

export default function TopGunPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <MoodSetter mood="ff" />

      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(34,211,238,0.28) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(59,130,246,0.18) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
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

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
          <Link
            href="/tools"
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-bold text-muted transition-colors hover:text-cyan-400"
          >
            <ArrowLeft size={13} />
            {km ? "ត្រឡប់ Tools" : "Back to Tools"}
          </Link>

          <FadeIn>
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]"
              style={{ color: "#22d3ee" }}
            >
              <Target size={13} />
              FF TOP GUN LIVE 2026
            </div>
            <h1 className="mt-4 text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-6xl">
              <span className="text-white">Top Gun</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {km ? "ឈ្នះរាល់ហ្គេម" : "Win Every Match"}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {km
                ? "យុទ្ធសាស្ត្រពេញលេញ ដើម្បីឈ្នះ Top Gun Live mode — ជាមួយ loadout ល្អបំផុត, តួអង្គ, និងគន្លឹះ Pro។"
                : "Complete strategy to win Top Gun Live mode — with best loadouts, characters, and pro tips."}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-bold">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1"
                style={{
                  borderColor: "rgba(34,211,238,0.4)",
                  background: "rgba(34,211,238,0.1)",
                  color: "#22d3ee",
                }}
              >
                <Sparkles size={11} />
                {META_VERSION}
              </span>
              <span className="rounded-full border border-line bg-surface/50 px-2.5 py-1 text-faint">
                {km ? "ធ្វើបច្ចុប្បន្នភាព" : "Updated"}: {META_UPDATED}
              </span>
              <span className="rounded-full border border-line bg-surface/50 px-2.5 py-1 text-faint">
                👥 4v4 Mode
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MODE INFO */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Users, label: km ? "អ្នកលេង" : "Players", value: "4v4", color: "#22d3ee" },
              { icon: Timer, label: km ? "រយៈពេល" : "Match Time", value: "~5 min", color: "#f59e0b" },
              { icon: Award, label: km ? "ឈ្នះដោយ" : "Win By", value: km ? "Kills" : "Kills", color: "#22c55e" },
            ].map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border bg-surface p-5"
                  style={{
                    borderColor: info.color + "40",
                    boxShadow: "0 20px 50px -30px " + info.color + "88",
                  }}
                >
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl"
                    style={{
                      background: info.color + "20",
                      color: info.color,
                      boxShadow: "0 0 0 1px " + info.color + "55",
                    }}
                  >
                    <Icon size={22} />
                  </span>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-faint">
                      {info.label}
                    </div>
                    <div className="font-mono text-lg font-black" style={{ color: info.color }}>
                      {info.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* SECTIONS */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:pb-16">
        <div className="space-y-10">
          {SECTIONS.map((sec, si) => {
            const Icon = sec.icon;
            return (
              <FadeIn key={si} delay={si * 60}>
                <div
                  className="overflow-hidden rounded-2xl border bg-surface"
                  style={{
                    borderColor: sec.color + "40",
                    boxShadow: "0 20px 60px -30px " + sec.color + "88",
                  }}
                >
                  <div
                    className="flex items-center gap-3 border-b p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, " + sec.color + "20 0%, transparent 100%)",
                      borderColor: sec.color + "40",
                    }}
                  >
                    <span
                      className="grid h-11 w-11 place-items-center rounded-xl"
                      style={{
                        background: sec.color + "20",
                        color: sec.color,
                        boxShadow: "0 0 0 1px " + sec.color + "55",
                      }}
                    >
                      <Icon size={20} />
                    </span>
                    <h2 className="text-lg font-black tracking-tight sm:text-xl">
                      {km ? sec.titleKm : sec.titleEn}
                    </h2>
                  </div>

                  <div className="grid gap-3 p-5 sm:grid-cols-2">
                    {sec.items.map((item, ii) => (
                      <div
                        key={ii}
                        className="flex items-start gap-3 rounded-xl border border-line bg-black/20 p-4 transition-colors hover:border-line-2"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: sec.color }}
                        />
                        <div className="min-w-0">
                          <div
                            className="text-sm font-bold"
                            style={{ color: sec.color }}
                          >
                            {km ? item.titleKm : item.titleEn}
                          </div>
                          <div className="mt-1 text-xs leading-relaxed text-muted">
                            {km ? item.descKm : item.descEn}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-t border-line bg-surface/20 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <div className="mb-8 text-center">
              <div
                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em]"
                style={{ color: "#22d3ee" }}
              >
                <Sparkles size={12} />
                FAQ
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                {km ? "សំណួរញឹកញាប់" : "Frequently Asked"}
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-2">
            {FAQ.map((f, i) => {
              const open = openFaq === i;
              return (
                <FadeIn key={i} delay={i * 30}>
                  <div
                    className="overflow-hidden rounded-xl border bg-surface transition-colors"
                    style={{
                      borderColor: open ? "rgba(34,211,238,0.5)" : "var(--color-line)",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-surface/60"
                    >
                      <span
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-lg font-mono text-xs font-black"
                        style={{
                          background: "rgba(34,211,238,0.15)",
                          color: "#22d3ee",
                        }}
                      >
                        ?
                      </span>
                      <span className="flex-1 text-sm font-bold">
                        {km ? f.qKm : f.qEn}
                      </span>
                      <ChevronDown
                        size={14}
                        className="shrink-0 text-faint transition-transform"
                        style={{ transform: open ? "rotate(180deg)" : "none" }}
                      />
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: open ? "200px" : "0",
                        opacity: open ? 1 : 0,
                      }}
                    >
                      <p className="border-t border-line px-4 pb-4 pt-3 text-xs leading-relaxed text-muted">
                        {km ? f.aKm : f.aEn}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-2xl border p-8 text-center sm:p-12"
            style={{
              borderColor: "rgba(34,211,238,0.4)",
              background:
                "radial-gradient(ellipse at center, rgba(34,211,238,0.15) 0%, transparent 70%), linear-gradient(135deg, #0a0d14 0%, #0a0d14 100%)",
            }}
          >
            <Crosshair size={40} className="mx-auto text-cyan-400" />
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
              {km ? "ត្រៀមខ្លួនសម្រាប់ Top Gun?" : "Ready for Top Gun?"}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              {km
                ? "កំណត់ sensitivity របស់អ្នកជាមួយ Calculator របស់យើង រួចចាប់ផ្តើមលេងថ្ងៃនេះ!"
                : "Tune your sensitivity with our calculator, then start playing today!"}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/ff/sensitivity"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #22d3ee, #3b82f6)",
                  color: "#fff",
                }}
              >
                <Target size={15} />
                {km ? "Sensitivity Calculator" : "Sensitivity Calculator"}
              </Link>
              <Link
                href="/ff/weapons"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/60 px-5 py-3 text-sm font-black text-muted transition-all hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <Swords size={15} />
                {km ? "Weapons Guide" : "Weapons Guide"}
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}