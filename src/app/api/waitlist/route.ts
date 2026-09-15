import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: { email?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const supabase = createSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json(
      { error: "Trial requests are not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("waitlist").insert({
    email,
    source: "trial-7d",
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        {
          message:
            "This email already requested a trial. Check your inbox for the invite, or sign in at try.korux.ai if you already have an account.",
        },
        { status: 200 },
      );
    }

    console.error("Trial signup insert error:", error);
    return NextResponse.json(
      { error: "Could not save your email. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json(
    {
      message:
        "Request received. We'll email you an invite link to create your password and start the 7-day trial.",
    },
    { status: 201 },
  );
}
