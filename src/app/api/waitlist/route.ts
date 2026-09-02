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
      { error: "Waitlist is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("waitlist").insert({
    email,
    source: "landing",
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { message: "You're already on the list! We'll be in touch." },
        { status: 200 },
      );
    }

    console.error("Waitlist insert error:", error);
    return NextResponse.json(
      { error: "Could not save your email. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { message: "You're on the list! We'll notify you when Korux launches." },
    { status: 201 },
  );
}
