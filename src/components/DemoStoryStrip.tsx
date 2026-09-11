import Image from "next/image";

const steps = [
  {
    src: "/demo-story/01-staff.webp",
    title: "Staff ready",
    caption: "Virtual staff with abilities and flows — ready to run work you define.",
  },
  {
    src: "/demo-story/02-describe.webp",
    title: "Describe it",
    caption: "Write the job in everyday words. Korux proposes a Spec you can review.",
  },
  {
    src: "/demo-story/03-spec.webp",
    title: "Confirm Spec",
    caption: "Internal steps can auto-run. External writes wait on require_human.",
  },
  {
    src: "/demo-story/05-governor.webp",
    title: "Governor pauses",
    caption: "Before the side effect fires, the action lands in Hub for a person.",
  },
  {
    src: "/demo-story/06-approve.webp",
    title: "You decide",
    caption: "Approve, reject, or edit. The brake sits before send — not after.",
  },
] as const;

export function DemoStoryStrip() {
  return (
    <div className="mt-10 md:mt-12">
      <ol className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
        {steps.map((step, index) => (
          <li
            key={step.src}
            className="w-[min(85vw,22rem)] shrink-0 snap-center sm:w-[min(70vw,24rem)] md:w-auto"
          >
            <p className="mb-3 flex items-baseline gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <span className="normal-case tracking-normal text-foreground">
                {step.title}
              </span>
            </p>
            <div className="overflow-hidden rounded-lg border border-border bg-surface">
              <Image
                src={step.src}
                alt={step.title}
                width={768}
                height={480}
                priority={index < 2}
                className="aspect-[16/10] w-full object-cover object-top"
                sizes="(min-width: 768px) 18vw, 85vw"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.caption}</p>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-center text-xs text-muted">
        Product preview from an early build — UI may change.
      </p>
    </div>
  );
}
