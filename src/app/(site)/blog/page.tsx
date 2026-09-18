"use client";
import Link from "next/link";
import { Newspaper, ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { useLang } from "@/lib/i18n";
import { getAllPosts } from "@/lib/blogData";

export default function BlogPage() {
  const { lang } = useLang();
  const posts = getAllPosts();

  return (
    <>
      <MoodSetter mood="cosmic" />

      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(34,211,238,0.22) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
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

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <FadeIn>
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]"
              style={{ color: "#22d3ee" }}
            >
              <Newspaper size={13} />
              {lang === "km" ? "Blog" : "BLOG"}
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {lang === "km" ? "អត្ថបទ និងគន្លឹះ" : "Articles & Tips"}
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
              {lang === "km"
                ? "មគ្គុទ្ទេសក៍ គន្លឹះ និងព័ត៌មានថ្មីៗសម្រាប់ Free Fire និង Mobile Legends"
                : "Guides, tips, and latest news for Free Fire and Mobile Legends"}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 60}>
              <Link
                href={"/blog/" + post.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40"
                style={{ boxShadow: "0 30px 70px -40px " + post.categoryColor + "88" }}
              >
                {/* COVER */}
                <div
                  className={
                    "relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br " +
                    post.coverGradient
                  }
                >
                  <span className="text-7xl drop-shadow-lg transition-transform duration-500 group-hover:scale-125 sm:text-8xl">
                    {post.coverEmoji}
                  </span>

                  {/* Category Badge */}
                  <span
                    className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest backdrop-blur-md"
                    style={{
                      background: "rgba(0,0,0,0.7)",
                      color: post.categoryColor,
                      boxShadow: "0 0 0 1px " + post.categoryColor + "88",
                    }}
                  >
                    {post.category}
                  </span>

                  {/* Bottom fade */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-16"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 0%, #0a0d14 100%)",
                    }}
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-lg font-black leading-snug text-white transition-colors group-hover:text-cyan-400">
                    {lang === "km" ? post.title.km : post.title.en}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {lang === "km" ? post.excerpt.km : post.excerpt.en}
                  </p>

                  {/* META */}
                  <div className="mt-4 flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-faint">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={10} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={10} />
                      {post.readTime} min
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider transition-all group-hover:gap-3"
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

        {/* EMPTY STATE */}
        {posts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted">
              {lang === "km" ? "គ្មានអត្ថបទនៅឡើយទេ" : "No articles yet"}
            </p>
          </div>
        )}
      </section>
    </>
  );
}