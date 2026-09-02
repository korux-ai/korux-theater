-- Run this in Supabase SQL Editor (Dashboard → SQL → New query)

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'landing',
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

-- No public policies: only service role (server-side API) can read/write
