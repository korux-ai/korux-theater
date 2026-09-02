import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";

const features = [
  {
    title: "Marquee",
    subtitle: "Landing & Story",
    description: "The public entrance — product narrative, pricing, and waitlist.",
  },
  {
    title: "Box Office",
    subtitle: "Billing",
    description: "Stripe-powered plans with hybrid token billing.",
  },
  {
    title: "The Stage",
    subtitle: "Workflow Sharing",
    description: "Publish and share governed AI workflows with the world.",
  },
  {
    title: "The Audience",
    subtitle: "Community Gallery",
    description: "Browse, fork, and remix workflows from other builders.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Korux" width={36} height={36} priority />
          <span className="text-lg font-semibold tracking-tight">Korux</span>
        </div>
        <a
          href="#waitlist"
          className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
        >
          Join Waitlist
        </a>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6 pb-24">
        <section className="flex flex-col items-center pt-16 text-center md:pt-24">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Early Access — Join the Waitlist
          </div>

          <h1 className="animate-fade-up-delay-1 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl md:leading-[1.1]">
            The Governed AI{" "}
            <span className="text-primary">Workforce OS</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Where governed AI workflows take the stage. Build, share, and run
            AI agents with guardrails — from solo builders to enterprise teams.
          </p>

          <div id="waitlist" className="animate-fade-up-delay-3 mt-10 scroll-mt-24">
            <WaitlistForm />
            <p className="mt-3 text-xs text-muted">
              No spam. Early access invites only.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-32">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            The Theater
          </h2>
          <p className="mt-3 text-center text-2xl font-bold tracking-tight">
            Every great show needs a venue
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <span className="text-sm text-muted">{feature.subtitle}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-10 text-center md:p-16">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready to step onto the stage?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Be among the first to experience governed AI workflows. Join the
            waitlist and we&apos;ll notify you when Korux opens its doors.
          </p>
          <div className="mt-8 flex justify-center">
            <WaitlistForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Korux" width={20} height={20} />
            <span>© {new Date().getFullYear()} Korux.ai</span>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/korux-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              GitHub
            </a>
            <a href="mailto:hello@korux.ai" className="transition-colors hover:text-primary">
              hello@korux.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
