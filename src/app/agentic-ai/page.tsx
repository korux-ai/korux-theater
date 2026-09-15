import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { WaitlistForm } from "@/components/WaitlistForm";

const title = "What Is Agentic AI? Autonomy, Guardrails, and Human Control";
const description =
  "Agentic AI means systems that plan and take multi-step actions — not just answer questions. Learn how agentic AI differs from chatbots, why agent control planes and guardrails matter, and how Korux keeps humans in command.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "agentic AI",
    "what is agentic AI",
    "agentic AI governance",
    "AI agent guardrails",
    "agent control plane",
    "autonomous AI agents",
    "AI agents vs agentic AI",
  ],
  alternates: {
    canonical: "/agentic-ai",
  },
  openGraph: {
    title,
    description,
    url: "https://korux.ai/agentic-ai",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const faqs = [
  {
    question: "What is agentic AI?",
    answer:
      "Agentic AI refers to AI systems that can pursue a goal across multiple steps — planning, using tools, and taking actions — rather than only generating a one-shot reply. In practice that often means AI agents that research, draft, and act in software you already use.",
  },
  {
    question: "How is agentic AI different from a chatbot?",
    answer:
      "A chatbot mainly responds in conversation. Agentic AI can call tools and produce side effects: send email, update CRM, publish, or trigger workflows. That power is useful — and it is why runtime governance and human-in-the-loop checkpoints matter.",
  },
  {
    question: "What is an agent control plane?",
    answer:
      "An agent control plane is the operational layer that inventories agents, enforces policy on what they may do, and keeps an audit trail as fleets grow. Korux approaches the same need for founder-operators: a Governor on external side effects, human approval before high-stakes actions, and readable runs — so autonomy stays under command. Full guide: https://korux.ai/agent-control-plane",
  },
  {
    question: "What are AI agent guardrails?",
    answer:
      "AI agent guardrails are controls that constrain agent behavior at runtime — allow, deny, or require human approval before a tool runs. In Korux, connector-level governor rules and Internal → External boundaries act as practical guardrails, not only prompt instructions the model can ignore.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  author: { "@type": "Organization", name: "Korux" },
  publisher: {
    "@type": "Organization",
    name: "Korux",
    url: "https://korux.ai",
  },
  mainEntityOfPage: "https://korux.ai/agentic-ai",
};

export default function AgenticAiPage() {
  return (
    <SiteChrome>
      <JsonLd data={[articleJsonLd, faqJsonLd]} />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-10 md:pt-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Guide</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
          What is agentic AI?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Agentic AI is the shift from models that only answer to systems that{" "}
          <span className="font-medium text-foreground">plan and act</span>
          {" "}— useful for everyday workflows, risky if nothing sits between intent and
          the outside world.
        </p>

        <article className="mt-14 space-y-12 text-base leading-relaxed text-muted">
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Agentic AI vs chatbots and copilots
            </h2>
            <p className="mt-4">
              People often say “AI agents” and “agentic AI” interchangeably. The useful
              distinction:{" "}
              <strong className="font-medium text-foreground">
                agentic systems take multi-step actions toward a goal
              </strong>
              , often with tools. A chatbot or simple copilot may draft text; an agentic
              workflow can search the web, write a Notion page, then attempt to email a
              summary.
            </p>
            <p className="mt-4">
              That is why 2026 conversations keep returning to{" "}
              <strong className="font-medium text-foreground">autonomous AI agents</strong>
              {" "}with oversight — not unbounded autonomy. The product question is not
              “can it act?” but “who decides when it may leave your boundary?”
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Why agent control planes and guardrails are trending
            </h2>
            <p className="mt-4">
              As teams run many agents across tools, interest has spiked in an{" "}
              <strong className="font-medium text-foreground">agent control plane</strong>
              {" "}— a place to see what agents exist, what they are allowed to do, and what
              they actually did. Closely related:{" "}
              <strong className="font-medium text-foreground">AI agent guardrails</strong>
              {" "}that evaluate tool calls at runtime (allow, deny, or require approval)
              instead of hoping a system prompt holds forever.
            </p>
            <p className="mt-4">
              Enterprise stacks frame this at fleet scale. Founder-operators feel the
              same problem earlier: even one marketing agent with mailbox access needs a
              brake before send.{" "}
              <em className="font-medium not-italic text-foreground">
                Governance has to be operational, not a one-time policy PDF.
              </em>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              How Korux approaches agentic AI
            </h2>
            <p className="mt-4">
              Korux is building a governed AI workforce OS for people who want virtual
              staff without a deep technology background. Agentic workflows stay
              conversational to author, explicit to run:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">Natural language → confirmed Spec</span>
                {" "}— review the plan before execution
              </li>
              <li>
                <span className="font-medium text-foreground">Governor on external side effects</span>
                {" "}— practical guardrails at Internal → External
              </li>
              <li>
                <span className="font-medium text-foreground">Human-in-the-loop approvals</span>
                {" "}— approve, reject, or edit before high-stakes actions
              </li>
              <li>
                <span className="font-medium text-foreground">Per-agent secrets and audit trail</span>
                {" "}— least privilege and a readable story of who decided
              </li>
            </ul>
            <p className="mt-4">
              Dig deeper:{" "}
              <Link
                href="/agent-control-plane"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                Agent control plane for solopreneurs
              </Link>
              {" "}·{" "}
              <Link
                href="/ai-agent-governance"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                AI agent governance
              </Link>
              {" "}·{" "}
              <Link
                href="/human-in-the-loop-ai-agents"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                human-in-the-loop AI agents
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">FAQ</h2>
            <dl className="mt-6 space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-t border-border pt-6">
                  <dt className="font-semibold text-foreground">{faq.question}</dt>
                  <dd className="mt-2">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>

        <section
          id="trial"
          className="mt-16 scroll-mt-24 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 text-center md:p-12"
        >
          <h2 className="text-2xl font-bold text-foreground">
            Want agentic AI with brakes?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Request a 7-day trial — we&apos;ll email an invite link. Then sign in at{" "}
            <a
              href="https://try.korux.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              try.korux.ai
            </a>
            .
          </p>
          <div className="mt-8 flex justify-center">
            <WaitlistForm />
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
