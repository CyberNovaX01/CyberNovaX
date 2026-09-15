import Link from 'next/link';
export default function GameCard({
  href, title, emoji, desc,
}: { href: string; title: string; emoji: string; desc: string }) {
  return (
    <Link
      href={href}
      className="block p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
    >
      <div className="text-4xl mb-2">{emoji}</div>
      <div className="font-semibold text-white text-lg">{title}</div>
      <div className="text-sm text-white/60 mt-1">{desc}</div>
    </Link>
  );
}
