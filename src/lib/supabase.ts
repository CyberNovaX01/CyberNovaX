// src/lib/supabase.ts
import { createClient, SupabaseClient } from "@supabase/supabase-js";

/** Read-only browser/edge client (anon key, RLS-enforced: published+visible only). */
export function publicClient(): SupabaseClient {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

/** Server-only admin client. NEVER import from a component with "use client". */
export function adminClient(): SupabaseClient {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}