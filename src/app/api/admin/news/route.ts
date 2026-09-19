import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminClient } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    // Check auth
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = adminClient();

    // Get all news
    const { data: allNews, error: allErr } = await supabase
      .from("news")
      .select("id, title_km, game, date")
      .order("date", { ascending: false });

    if (allErr) throw allErr;

    const mlbb = allNews?.filter((n) => n.game === "mlbb").length || 0;
    const ff = allNews?.filter((n) => n.game === "ff").length || 0;

    return NextResponse.json({
      total: allNews?.length || 0,
      mlbb,
      ff,
      recent: allNews?.slice(0, 5) || [],
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}