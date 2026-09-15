'use client';
import type { Guide } from '@/lib/types';
import PatchWarning from './PatchWarning';
export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
      {!guide.isLatestPatch && <PatchWarning />}
      <h2 className="text-xl font-bold text-white mb-2">{guide.title}</h2>
      <p className="text-white/80 whitespace-pre-line leading-relaxed">{guide.content}</p>
      {guide.items && guide.items.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {guide.items.map((it) => (
            <span key={it} className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
              {it}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
