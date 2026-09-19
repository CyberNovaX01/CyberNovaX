"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  Flame,
  BookOpen,
  Sparkles,
  Swords,
  Users,
  Palette,
  Zap,
  Target,
  Layers,
  Newspaper,
} from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { NEWS } from "@/lib/siteData";
import { getAllPosts } from "@/lib/blogData";
import { useLang } from "@/lib/i18n";

const KM_M = ["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"];
const EN_M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

type GameKey = "ff" | "mlbb";

const CATEGORIES = [
  { key: "all", label: "All", icon: Layers, color: "#22d3ee" },
  { key: "hero", label: "Hero", icon: Users, color: "#a855f7" },
  { key: "skin", label: "Skin", icon: Palette, color: "#ec4899" },
  { key: "event", label: "Event", icon: Sparkles, color: "#f59e0b" },
  { key: "guide", label: "Guide", icon: BookOpen, color: "#22c55e" },
  { key: "tips", label: "Tips", icon: Target, color: "#06b6d4" },
  { key: "patch", label: "Patch", icon: Zap, color: "#ef4444" },
];

export default function NewsPage() {
  const { lang } = useLang();
  const [selectedGame, setSelectedGame] = useState<GameKey | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const blogPosts = getAllPosts();

  const fmt = (iso: string) => {
    const d = new Date(iso);
    const day = String(d.getDate()).padStart(2, "0");
    const m = d.getMonth();
    return lang === "km" ? day + " " + KM_M[m] : day + " " + EN_M[m];
  };

  const ffNews = NEWS.filter((n) => n.game === "ff");
  const mlbbNews = NEWS.filter((n) => n.game === "mlbb");

  const isFFPost = (slug: string) =>
    slug.startsWith("free-fire") ||
    slug.startsWith("best-free-fire") ||
    slug === "gaming-phone-guide-cambodia-2026" ||
    slug === "gaming-setup-cambodia-guide";

  const isMLBBPost = (slug: string) =>
    slug.startsWith("mlbb") || slug.startsWith("how-to-reach-mythic");

  const ffPosts = blogPosts.filter((p) => isFFPost(p.slug));
  const mlbbPosts = blogPosts.filter((p) => isMLBBPost(p.slug));

  const filterNews = (news: typeof NEWS, cat: string) => {
    if (cat === "all") return news;
    return news.filter((n) => n.category === cat);
  };

  const filterPosts = (posts: typeof blogPosts, cat: string) => {
    if (cat === "all") return posts;
    return posts.filter((p) => {
      const slug = p.slug;
      const category = p.category;
      if (cat === "hero")
        return (
          slug.includes("-new-") ||
          slug.includes("character") ||
          slug.includes("-hero") ||
          category === "Meta"
        );
      if (cat === "skin")
        return slug.includes("skin") || slug.includes("collab") || category === "Collab";
      if (cat === "event")
        return (
          slug.includes("anniversary") ||
          slug.includes("event") ||
          category === "Event" ||
          category === "Collab"
        );
      if (cat === "guide") return category === "Guide" || category === "Strategy";
      if (cat === "tips")
        return category === "Tips" || category === "Tech" || category === "Comparison";
      if (cat === "patch") return category === "Meta" || category === "Leak";
      return true;
    });
  };

  if (!selectedGame) {
    return (
      <>
        <MoodSetter mood="cosmic" />

        <section className="relative mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 sm:pt-16 sm:pb-10">
          <FadeIn>
            <div className="flex flex-col gap-3">
              <span className="kicker">
                <Newspaper size={12} />
                {lang === "km" ? "ព័ត៌មានថ្មីៗ" : "Latest News"}
              </span>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                {lang === "km" ? (
                  <>
                    ជ្រើសរើស <span className="text-gradient">ហ្គេម</span>
                  </>
                ) : (
                  <>
                    Choose <span className="text-gradient">Game</span>
                  </>
                )}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {lang === "km"
                  ? "ចុចលើហ្គេមដែលអ្នកចង់មើល ដើម្បីមើលព័ត៌មាន តួអង្គ ស្បែក ព្រឹត្តិការណ៍ និងមគ្គុទ្ទេសក៍"
                  : "Click a game to see news, heroes, skins, events, and guides"}
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* MLBB CARD */}
            <FadeIn delay={100}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
                style={{ boxShadow: "0 30px 70px -40px #22d3ee88" }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 50%, #22d3ee 0%, transparent 50%), radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 40%)",
                  }}
                />

                <button
                  onClick={() => setSelectedGame("mlbb")}
                  className="relative w-full text-left"
                >
                  <div className="p-6 pb-4 sm:p-8 sm:pb-5 lg:p-10 lg:pb-6">
                    <div className="flex items-start justify-between">
                      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg sm:h-20 sm:w-20">
                        <Swords size={32} className="text-white sm:size-10" />
                      </div>
                      <div className="grid h-10 w-10 place-items-center rounded-full border border-cyan-400/40 bg-black/40 backdrop-blur-md transition-all group-hover:scale-110">
                        <ArrowRight
                          size={18}
                          className="text-cyan-400 transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>

                    <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                      MOBILE LEGENDS
                    </h3>
                    <p className="mt-2 text-sm font-bold uppercase tracking-widest text-cyan-400">
                      {lang === "km" ? "ព័ត៌មាន និងមគ្គុទ្ទេសក៍" : "News & Guides"}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/25 px-3 py-1 text-xs font-black uppercase tracking-wider text-cyan-300">
                        <Newspaper size={11} />
                        {mlbbNews.length} {lang === "km" ? "ព័ត៌មាន" : "News"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/70">
                        <BookOpen size={11} />
                        {mlbbPosts.length} {lang === "km" ? "អត្ថបទ" : "Articles"}
                      </span>
                    </div>
                  </div>
                </button>

                <div className="relative border-t border-cyan-500/20 bg-black/30 backdrop-blur-md">
                  <div className="p-5 sm:p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Sparkles size={12} className="text-cyan-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">
                        {lang === "km" ? "ព័ត៌មានថ្មីៗ" : "Latest News"}
                      </span>
                    </div>

                    {mlbbNews.length > 0 ? (
                      <div className="space-y-2">
                        {mlbbNews.slice(0, 3).map((n) => (
                          <div
                            key={n.id}
                            className="flex items-start gap-2.5 rounded-lg border border-white/5 bg-white/5 p-2.5 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10"
                          >
                            <span
                              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ background: n.accent }}
                            />
                            <div className="min-w-0 flex-1">
                              <p className="line-clamp-2 text-xs font-bold leading-snug text-white/90 sm:text-sm">
                                {lang === "km" ? n.title.km : n.title.en}
                              </p>
                              <div className="mt-1 flex items-center gap-2 text-[10px] text-white/40">
                                <Calendar size={9} />
                                <span>{fmt(n.date)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="py-4 text-center text-xs text-white/40">
                        {lang === "km" ? "គ្មានព័ត៌មាន" : "No news yet"}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedGame("mlbb")}
                    className="flex w-full items-center justify-center gap-2 border-t border-cyan-500/20 bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 text-sm font-black text-white transition-all hover:gap-3 sm:text-base"
                  >
                    {lang === "km" ? "មើលទាំងអស់" : "View All"}
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* FREE FIRE CARD */}
            <FadeIn delay={200}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-orange-500/40 bg-gradient-to-br from-orange-500/15 via-red-500/10 to-transparent transition-all duration-300 hover:-translate-y-2 hover:border-orange-400"
                style={{ boxShadow: "0 30px 70px -40px #f59e0b88" }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 50%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 80% 80%, #ef4444 0%, transparent 40%)",
                  }}
                />

                <button
                  onClick={() => setSelectedGame("ff")}
                  className="relative w-full text-left"
                >
                  <div className="p-6 pb-4 sm:p-8 sm:pb-5 lg:p-10 lg:pb-6">
                    <div className="flex items-start justify-between">
                      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg sm:h-20 sm:w-20">
                        <Flame size={32} className="text-white sm:size-10" />
                      </div>
                      <div className="grid h-10 w-10 place-items-center rounded-full border border-orange-400/40 bg-black/40 backdrop-blur-md transition-all group-hover:scale-110">
                        <ArrowRight
                          size={18}
                          className="text-orange-400 transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>

                    <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                      FREE FIRE
                    </h3>
                    <p className="mt-2 text-sm font-bold uppercase tracking-widest text-orange-400">
                      {lang === "km" ? "ព័ត៌មាន និងមគ្គុទ្ទេសក៍" : "News & Guides"}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/25 px-3 py-1 text-xs font-black uppercase tracking-wider text-orange-300">
                        <Newspaper size={11} />
                        {ffNews.length} {lang === "km" ? "ព័ត៌មាន" : "News"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/70">
                        <BookOpen size={11} />
                        {ffPosts.length} {lang === "km" ? "អត្ថបទ" : "Articles"}
                      </span>
                    </div>
                  </div>
                </button>

                <div className="relative border-t border-orange-500/20 bg-black/30 backdrop-blur-md">
                  <div className="p-5 sm:p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Flame size={12} className="text-orange-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-orange-400">
                        {lang === "km" ? "ព័ត៌មានថ្មីៗ" : "Latest News"}
                      </span>
                    </div>

                    {ffNews.length > 0 ? (
                      <div className="space-y-2">
                        {ffNews.slice(0, 3).map((n) => (
                          <div
                            key={n.id}
                            className="flex items-start gap-2.5 rounded-lg border border-white/5 bg-white/5 p-2.5 transition-all hover:border-orange-500/30 hover:bg-orange-500/10"
                          >
                            <span
                              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ background: n.accent }}
                            />
                            <div className="min-w-0 flex-1">
                              <p className="line-clamp-2 text-xs font-bold leading-snug text-white/90 sm:text-sm">
                                {lang === "km" ? n.title.km : n.title.en}
                              </p>
                              <div className="mt-1 flex items-center gap-2 text-[10px] text-white/40">
                                <Calendar size={9} />
                                <span>{fmt(n.date)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="py-4 text-center text-xs text-white/40">
                        {lang === "km" ? "គ្មានព័ត៌មាន" : "No news yet"}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedGame("ff")}
                    className="flex w-full items-center justify-center gap-2 border-t border-orange-500/20 bg-gradient-to-r from-orange-500 to-red-500 py-3.5 text-sm font-black text-white transition-all hover:gap-3 sm:text-base"
                  >
                    {lang === "km" ? "មើលទាំងអស់" : "View All"}
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </>
    );
  }

  const gameColor = selectedGame === "ff" ? "#f59e0b" : "#22d3ee";
  const gameName = selectedGame === "ff" ? "FREE FIRE" : "MOBILE LEGENDS";
  const gameNews = selectedGame === "ff" ? ffNews : mlbbNews;
  const gamePosts = selectedGame === "ff" ? ffPosts : mlbbPosts;

  // FILTER BOTH NEWS AND POSTS BY CATEGORY
  const filteredNews = filterNews(gameNews, activeCategory);
  const filteredPosts = filterPosts(gamePosts, activeCategory);

  const hasContent = filteredNews.length > 0 || filteredPosts.length > 0;

  return (
    <>
      <MoodSetter mood="cosmic" />

      <section className="relative mx-auto max-w-7xl px-4 pt-8 pb-4 sm:px-6 sm:pt-12">
        <FadeIn>
          <button
            onClick={() => {
              setSelectedGame(null);
              setActiveCategory("all");
            }}
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm font-bold text-muted transition-all hover:border-gold/40 hover:text-gold active:scale-95"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            {lang === "km" ? "ត្រឡប់ក្រោយ" : "Back"}
          </button>

          <div className="mt-5 flex flex-col gap-2">
            <span
              className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest"
              style={{
                background: gameColor + "20",
                color: gameColor,
                boxShadow: "0 0 0 1px " + gameColor + "60",
              }}
            >
              <Sparkles size={10} />
              {lang === "km" ? "ព័ត៌មាន" : "NEWS"}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              <span style={{ color: gameColor }}>{gameName}</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {lang === "km"
                ? "តួអង្គ ស្បែក ព្រឹត្តិការណ៍ មគ្គុទ្ទេសក៍ និងព័ត៌មានថ្មីៗ"
                : "Heroes, skins, events, guides, and latest news"}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* CATEGORY TABS */}
      <section className="relative mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <FadeIn>
          <div className="-mx-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0">
            <div className="flex gap-2 sm:flex-wrap">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.key;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className="group flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-black transition-all active:scale-95 sm:px-5 sm:py-2.5 sm:text-base"
                    style={{
                      borderColor: isActive ? cat.color + "80" : "var(--color-line)",
                      background: isActive ? cat.color + "20" : "var(--color-surface)",
                      color: isActive ? cat.color : "var(--color-muted)",
                      boxShadow: isActive
                        ? "0 0 24px -6px " + cat.color + "88"
                        : "none",
                    }}
                  >
                    <Icon size={14} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* NEWS GRID — FILTERED */}
      {filteredNews.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
          <FadeIn>
            <div className="mb-4 flex items-center gap-2">
              <Newspaper size={14} style={{ color: gameColor }} />
              <h2 className="text-sm font-black uppercase tracking-widest text-muted">
                {lang === "km" ? "ព័ត៌មាន" : "NEWS"}
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((n, i) => (
              <FadeIn key={n.id} delay={i * 40}>
                <article
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-line-2"
                  style={{ boxShadow: "0 20px 50px -30px " + n.accent + "88" }}
                >
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, " +
                        n.accent +
                        "60 0%, " +
                        n.accent +
                        "20 50%, #0a0d14 100%)",
                    }}
                  >
                    <span
                      className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider backdrop-blur-md"
                      style={{
                        background: n.accent + "30",
                        color: n.accent,
                        boxShadow: "0 0 0 1px " + n.accent + "55",
                      }}
                    >
                      {n.tag}
                    </span>
                    <Flame
                      size={50}
                      className="absolute bottom-3 right-3 opacity-10"
                      style={{ color: n.accent }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="text-base font-bold leading-snug text-fg sm:text-lg">
                      {lang === "km" ? n.title.km : n.title.en}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">
                      {lang === "km" ? n.excerpt.km : n.excerpt.en}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-faint">
                      <Calendar size={11} />
                      <span>{fmt(n.date)}</span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* BLOG POSTS — FILTERED */}
      {filteredPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
          <FadeIn>
            <div className="mb-4 flex items-center gap-2">
              <BookOpen size={14} style={{ color: gameColor }} />
              <h2 className="text-sm font-black uppercase tracking-widest text-muted">
                {lang === "km" ? "អត្ថបទ" : "ARTICLES"}
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 40}>
                <Link
                  href={"/blog/" + post.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-line-2"
                  style={{
                    boxShadow: "0 20px 50px -30px " + post.categoryColor + "88",
                  }}
                >
                  <div
                    className={
                      "relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br " +
                      post.coverGradient
                    }
                  >
                    <span className="text-6xl drop-shadow-lg transition-transform duration-500 group-hover:scale-125 sm:text-7xl">
                      {post.coverEmoji}
                    </span>

                    <span
                      className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider backdrop-blur-md sm:left-4 sm:top-4"
                      style={{
                        background: "rgba(0,0,0,0.7)",
                        color: post.categoryColor,
                        boxShadow: "0 0 0 1px " + post.categoryColor + "88",
                      }}
                    >
                      {post.category}
                    </span>

                    <div
                      className="absolute inset-x-0 bottom-0 h-16"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, #0a0d14 100%)",
                      }}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs text-faint">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} min</span>
                    </div>

                    <h3 className="text-lg font-black leading-snug text-fg transition-colors group-hover:text-cyan-400 sm:text-xl">
                      {lang === "km" ? post.title.km : post.title.en}
                    </h3>

                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                      {lang === "km" ? post.excerpt.km : post.excerpt.en}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                      <div
                        className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider transition-all group-hover:gap-3 sm:text-sm"
                        style={{ color: post.categoryColor }}
                      >
                        <BookOpen size={13} />
                        {lang === "km" ? "អានបន្ថែម" : "Read More"}
                      </div>
                      <div
                        className="grid h-8 w-8 place-items-center rounded-full border-2 transition-all group-hover:scale-110 group-hover:rotate-[-15deg]"
                        style={{
                          borderColor: post.categoryColor + "60",
                          background: post.categoryColor + "15",
                        }}
                      >
                        <ArrowRight
                          size={13}
                          className="transition-transform group-hover:translate-x-0.5"
                          style={{ color: post.categoryColor }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* EMPTY STATE */}
      {!hasContent && (
        <section className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6">
          <div className="rounded-3xl border border-line bg-surface/50 py-20 text-center">
            <p className="text-base text-muted sm:text-lg">
              {lang === "km"
                ? "មិនមានអត្ថបទក្នុងប្រភេទនេះទេ"
                : "No articles in this category"}
            </p>
          </div>
        </section>
      )}

      {/* Bottom padding */}
      <div className="pb-24" />
    </>
  );
}