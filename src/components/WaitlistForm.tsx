"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(
        data.message ??
          "Request received. We'll email you an invite link to set your password.",
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          disabled={status === "loading" || status === "success"}
          onChange={(event) => setEmail(event.target.value)}
          className="min-w-0 flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading"
            ? "Sending…"
            : status === "success"
              ? "Requested ✓"
              : "Request 7-day trial"}
        </button>
      </form>

      {message && (
        <p
          role="status"
          className={`mt-3 text-sm ${status === "error" ? "text-red-500" : "text-primary"}`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
