import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    // Check auth
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    // Validate required fields
    if (
      !body.id ||
      !body.title_km ||
      !body.title_en ||
      !body.excerpt_km ||
      !body.excerpt_en ||
      !body.content_km ||
      !body.content_en
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = adminClient();

    const { error } = await supabase.from("news").insert({
      id: body.id,
      tag: body.tag,
      title_km: body.title_km,
      title_en: body.title_en,
      excerpt_km: body.excerpt_km,
      excerpt_en: body.excerpt_en,
      content_km: body.content_km,
      content_en: body.content_en,
      date: body.date,
      accent: body.accent,
      game: body.game,
      category: body.category,
      image_url: body.image_url || null,
      credit_url: body.credit_url || null,
      credit_name: body.credit_name || null,
      blog_slug: body.blog_slug || null,
    });

    if (error) {
      console.error("Insert error:", error);
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "ID already exists. Please use a different ID." },
          { status: 400 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}