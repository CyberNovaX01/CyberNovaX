'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getMLBBHeroGuide } from '@/lib/api';
import type { Guide, ApiError } from '@/lib/types';
import GuideCard from '@/components/GuideCard';
import Loading from '@/components/Loading';

export default function HeroGuidePage() {
  const { heroId } = useParams<{ heroId: string }>();
  const [guide, setGuide] = useState<Guide | null>(null);
  const [error, setError] = useState<ApiError | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!heroId) return;
    getMLBBHeroGuide(heroId)
      .then(setGuide)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [heroId]);

  if (loading) return <Loading />;
  if (error) return <div className="py-10 text-center text-red-400">{error.message}</div>;
  if (!guide) return null;

  return (
    <div className="py-6">
      <GuideCard guide={guide} />
    </div>
  );
}