'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getFFGuides } from '@/lib/api';
import type { Guide, ApiError } from '@/lib/types';
import GuideCard from '@/components/GuideCard';
import Loading from '@/components/Loading';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';

function ResultInner() {
  const params = useSearchParams();
  const { lang } = useLang();
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const q = Object.fromEntries(params.entries());
    getFFGuides(q)
      .then(setGuides)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [params]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="py-10 text-center">
        <p className="text-red-400 mb-4">{error.message}</p>
        <button onClick={() => location.reload()}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white">
          {t(lang, 'retry')}
        </button>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h1 className="text-xl font-bold text-white mb-4">🎯 {t(lang, 'guideResult')}</h1>
      {guides.length === 0 ? (
        <p className="text-white/60">{t(lang, 'noResults')}</p>
      ) : (
        <div className="space-y-4">
          {guides.map((g) => <GuideCard key={g.id} guide={g} />)}
        </div>
      )}
    </div>
  );
}

export default function FFResultPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ResultInner />
    </Suspense>
  );
}