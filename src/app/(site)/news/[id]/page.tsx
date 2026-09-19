import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  ArrowLeft,
  Newspaper,
  Clock,
  Share2,
  Tag,
  ExternalLink,
} from "lucide-react";
import { publicClient } from "@/lib/supabase";
import { NEWS } from "@/lib/siteData";
import ShareButtons from "@/components/ShareButtons";

type NewsRow = {
  id: string;
  game: string;
  category: string;
  tag: string;
  accent: string;
  date: string;
  title_km: string;
  title_en: string;
  excerpt_km: string;
  excerpt_en: string;
  content_km: string;
  content_en: string;
  image_url: string | null;
  credit_url: string | null;
  credit_name: string | null;
  blog_slug: string | null;
};

async function getNewsItem(id: string): Promise<NewsRow | null> {
  try {
    const supabase = publicClient();
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (!error && data) return data as NewsRow;
  } catch {
    // fall through to fallback
  }

  // Fallback: siteData.ts
  const fallback = NEWS.find((n) => n.id === id);
  if (!fallback) return null;
  return {
    id: fallback.id,
    game: fallback.game,
    category: fallback.category,
    tag: fallback.tag,
    accent: fallback.accent,
    date: fallback.date,
    title_km: fallback.title.km,
    title_en: fallback.title.en,
    excerpt_km: fallback.excerpt.km,
    excerpt_en: fallback.excerpt.en,
    content_km: fallback.content.km,
    content_en: fallback.content.en,
    image_url: null,
    credit_url: null,
    credit_name: null,
    blog_slug: null,
  };
}

export const revalidate = 60;

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getNewsItem(id);

  if (!item) notFound();

  const gameColor = item.game === "ff" ? "#f59e0b" : "#22d3ee";
  const gameName = item.game === "ff" ? "FREE FIRE" : "MOBILE LEGENDS";

  // Simple markdown-ish renderer for **bold** and headings
  const renderContent = (text: string) => {
    if (!text) return null;
    return text.split("\n").map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-3" />;
      if (trimmed.startsWith("### "))
        return (
          <h3
            key={idx}
            className="mt-5 mb-2 text-lg font-black text-white sm:text-xl"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      if (trimmed.startsWith("## "))
        return (
          <h2
            key={idx}
            className="mt-6 mb-3 text-xl font-black text-white sm:text-2xl"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      if (trimmed.startsWith("# "))
        return (
          <h2
            key={idx}
            className="mt-6 mb-3 text-2xl font-black text-white sm:text-3xl"
          >
            {trimmed.replace("# ", "")}
          </h2>
        );
      if (trimmed.startsWith("- ") || trimmed.startsWith("* "))
        return (
          <li
            key={idx}
            className="ml-5 list-disc text-sm leading-relaxed text-muted sm:text-base"
          >
            {trimmed.substring(2)}
          </li>
        );
      // Bold replacement: **text**
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p
          key={idx}
          className="mb-2 text-sm leading-relaxed text-muted sm:text-base"
        >
          {parts.map((part, i) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={i} className="font-black text-white">
                {part.slice(2, -2)}
              </strong>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
      );
    });
  };

  return (
    <article className="mx-auto max-w-4xl px-4 pt-8 pb-24 sm:px-6 sm:pt-12">
      {/* BACK */}
      <Link
        href="/news"
        className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm font-bold text-muted transition-all hover:border-gold/40 hover:text-gold"
      >
        <ArrowLeft
          size={14}
          className="transition-transform group-hover:-translate-x-1"
        />
        ត្រឡប់ក្រោយ
      </Link>

      {/* HEADER */}
      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest"
            style={{
              background: gameColor + "20",
              color: gameColor,
              boxShadow: "0 0 0 1px " + gameColor + "60",
            }}
          >
            <Newspaper size={10} />
            {gameName}
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest"
            style={{
              background: item.accent + "20",
              color: item.accent,
              boxShadow: "0 0 0 1px " + item.accent + "60",
            }}
          >
            <Tag size={10} />
            {item.tag}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          {item.title_km}
        </h1>
        <p className="mt-2 text-lg font-bold text-muted sm:text-xl">
          {item.title_en}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-faint sm:text-sm">
          <div className="flex items-center gap-1.5">
            <Calendar size={13} />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={13} />
            <span>{Math.max(1, Math.ceil(item.content_km.length / 800))} min read</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Share2 size={13} />
            <span>CyberNovaX</span>
          </div>
        </div>
      </header>

      {/* COVER */}
      <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-line bg-black/20">
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.title_km}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(135deg, " +
                item.accent +
                "60 0%, " +
                item.accent +
                "20 50%, #0a0d14 100%)",
            }}
          />
        )}
      </div>

      {/* EXCERPT */}
      <div
        className="mt-6 rounded-2xl border-l-4 bg-surface/60 p-5 backdrop-blur-md"
        style={{ borderColor: item.accent }}
      >
        <p className="text-sm font-bold italic leading-relaxed text-white/90 sm:text-base">
          {item.excerpt_km}
        </p>
      </div>

      {/* SHARE BUTTONS */}
      <div className="mt-6">
        <ShareButtons
          url={`https://cyber-nova-x.vercel.app/news/${item.id}`}
          title={item.title_km}
          accent={item.accent}
        />
      </div>

      {/* CONTENT */}
      <div className="mt-8">{renderContent(item.content_km)}</div>

      {/* CREDIT */}
      {item.credit_url && (
        <div className="mt-8 rounded-2xl border border-line bg-surface/60 p-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
              style={{
                background: item.accent + "20",
                color: item.accent,
              }}
            >
              <Share2 size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-black uppercase tracking-wider text-muted">
                ប្រភព / Source
              </div>
              <a
                href={item.credit_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 block truncate text-sm font-bold hover:underline"
                style={{ color: item.accent }}
              >
                {item.credit_name || item.credit_url}
              </a>
            </div>
            <a
              href={item.credit_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-line bg-black/20 px-3 py-2 text-xs font-black text-muted transition-all hover:border-cyan-400/40 hover:text-cyan-400"
            >
              មើល
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      )}

      {/* FOOTER NAV */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <Link
          href="/news"
          className="group inline-flex items-center gap-2 rounded-xl border border-line bg-surface/60 px-5 py-2.5 text-sm font-black text-muted transition-all hover:border-gold/40 hover:text-gold"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          ត្រឡប់ទៅព័ត៌មាន
        </Link>
      </div>
    </article>
  );
}