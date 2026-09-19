import { NextResponse } from 'next/server';
import { publicClient } from '@/lib/supabase';

// Cache for 60s — SEO friendly + fast
export const revalidate = 60;

export async function GET() {
  try {
    const supabase = publicClient();
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Transform flat Supabase rows → nested shape the frontend expects
    const news = (data || []).map((row) => ({
      id: row.id,
      game: row.game,
      category: row.category,
      tag: row.tag,
      accent: row.accent,
      date: row.date,
      blogSlug: row.blog_slug || undefined,
      image: row.image_url || undefined,
      title: { km: row.title_km, en: row.title_en },
      excerpt: { km: row.excerpt_km, en: row.excerpt_en },
      content: { km: row.content_km, en: row.content_en },
    }));

    return NextResponse.json({ news });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Server error' },
      { status: 500 }
    );
  }
}