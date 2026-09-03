import { createClient } from "@supabase/supabase-js";

export function createSupabaseAdmin() {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!rawUrl || !key) {
    return null;
  }

  // Dashboard "Data API" URLs include /rest/v1; supabase-js already appends that path.
  const url = rawUrl.replace(/\/+$/, "").replace(/\/rest\/v1$/i, "");

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
