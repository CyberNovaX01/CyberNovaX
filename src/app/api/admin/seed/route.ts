import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminClient } from "@/lib/supabase";
import { NEWS } from "@/lib/siteData";

export async function POST() {
  try {
    // Check auth
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = adminClient();

    let inserted = 0;
    let skipped = 0;
    const errors: string[] = [];

    for (const item of NEWS) {
      // Convert NewsItem to Supabase format
      const row = {
        id: item.id,
        tag: item.tag,
        title_km: item.title.km,
        title_en: item.title.en,
        excerpt_km: item.excerpt.km,
        excerpt_en: item.excerpt.en,
        content_km: item.content?.km || item.excerpt.km,
        content_en: item.content?.en || item.excerpt.en,
        date: item.date,
        accent: item.accent,
        game: item.game,
        category: item.category,
        blog_slug: item.blogSlug || null,
        image_url: null,
      };

      const { error } = await supabase.from("news").insert(row);

      if (error) {
        if (error.code === "23505") {
          // Duplicate - skip
          skipped++;
        } else {
          errors.push(`${item.id}: ${error.message}`);
        }
      } else {
        inserted++;
      }
    }

    return NextResponse.json({
      success: true,
      inserted,
      skipped,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: "Seed failed" }, { status: 500 });
  }
}