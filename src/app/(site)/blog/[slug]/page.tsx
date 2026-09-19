"use client";
import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { useLang } from "@/lib/i18n";
import { getPostBySlug, getAllPosts } from "@/lib/blogData";
import ShareButtons from "@/components/ShareButtons";

function formatInline(text: string) {
  return text.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="text-fg font-black">$1</strong>'
  );
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul
          key={"ul-" + key++}
          className="ml-5 my-4 list-disc space-y-1.5 text-muted"
        >
          {listItems.map((item, i) => (
            <li
              key={i}
              dangerouslySetInnerHTML={{ __html: formatInline(item) }}
            />
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      return;
    }

    flushList();

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="mt-8 mb-4 text-xl font-black tracking-tight text-fg sm:text-2xl"
        >
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="mt-6 mb-3 text-lg font-black text-fg">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed === "") {
      // skip empty
    } else {
      elements.push(
        <p
          key={key++}
          className="my-3 leading-relaxed text-muted"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />
      );
    }
  });

  flushList();
  return elements;
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { lang } = useLang();
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <>
        <MoodSetter mood="cosmic" />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h1 className="text-3xl font-black">Post not found</h1>
          <p className="mt-4 text-muted">
            {lang === "km"
              ? "រកមិនឃើញអត្ថបទនេះទេ"
              : "This article does not exist"}
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-5 py-2.5 text-sm font-black text-[#0a0d14]"
          >
            <ArrowLeft size={14} />
            {lang === "km" ? "ត្រឡប់ទៅ Blog" : "Back to Blog"}
          </Link>
        </div>
      </>
    );
  }

  const title = lang === "km" ? post.title.km : post.title.en;
  const content = lang === "km" ? post.content.km : post.content.en;
  const excerpt = lang === "km" ? post.excerpt.km : post.excerpt.en;

  return (
    <>
      <MoodSetter mood="cosmic" />

      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className={
            "absolute inset-0 bg-gradient-to-br " +
            post.coverGradient +
            " opacity-20"
          }
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,13,20,0.5) 0%, rgba(10,13,20,0.95) 80%, #0a0d14 100%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
          <FadeIn>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-400 hover:text-cyan-300"
            >
              <ArrowLeft
                size={13}
                className="transition-transform group-hover:-translate-x-1"
              />
              {lang === "km" ? "ត្រឡប់ទៅ Blog" : "Back to Blog"}
            </Link>

            <div className="mt-6 flex items-center gap-2">
              <span
                className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest backdrop-blur-md"
                style={{
                  background: post.categoryColor + "25",
                  color: post.categoryColor,
                  boxShadow: "0 0 0 1px " + post.categoryColor + "60",
                }}
              >
                {post.category}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-white/50">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={12} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={12} />
                {post.readTime} min read
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User size={12} />
                {post.author}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <FadeIn>
          <article>{renderContent(content)}</article>
        </FadeIn>

        {/* SHARE BUTTONS */}
        <FadeIn delay={200}>
          <div className="mt-12">
            <ShareButtons
              url={`https://cyber-nova-x.vercel.app/blog/${slug}`}
              title={title}
              accent={post.categoryColor}
            />
          </div>
        </FadeIn>

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <FadeIn delay={300}>
            <div className="mt-16">
              <h2 className="text-xl font-black tracking-tight text-fg sm:text-2xl">
                {lang === "km" ? "អត្ថបទពាក់ព័ន្ធ" : "Related Articles"}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={"/blog/" + rp.slug}
                    className="group rounded-xl border border-line bg-surface p-4 transition-all hover:-translate-y-1 hover:border-cyan-400/40"
                  >
                    <div className="text-3xl">{rp.coverEmoji}</div>
                    <div
                      className="mt-2 text-[9px] font-black uppercase tracking-widest"
                      style={{ color: rp.categoryColor }}
                    >
                      {rp.category}
                    </div>
                    <div className="mt-1 line-clamp-2 text-sm font-black text-fg transition-colors group-hover:text-cyan-400">
                      {lang === "km" ? rp.title.km : rp.title.en}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* BACK BUTTON */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3 text-sm font-black text-[#0a0d14] shadow-lg shadow-cyan-500/30 transition-all hover:scale-105"
          >
            <ArrowLeft size={14} />
            {lang === "km" ? "ត្រឡប់ទៅ Blog ទាំងអស់" : "Back to All Articles"}
          </Link>
        </div>
      </section>
    </>
  );
}