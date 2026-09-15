import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { WaitlistForm } from "@/components/WaitlistForm";

const title = "Human-in-the-Loop AI Agents — Approval Before High-Stakes Actions";
const description =
  "What human-in-the-loop AI agents are, when approvals should fire, and how Korux makes HITL a first-class path before email, CRM, or publish — not an afterthought.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/human-in-the-loop-ai-agents",
  },
  openGraph: {
    title,
    description,
    url: "https://korux.ai/human-in-the-loop-ai-agents",
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
    question: "What are human-in-the-loop AI agents?",
    answer:
      "Human-in-the-loop AI agents can research, draft, and prepare work, but pause at critical moments for a person to approve, edit, or reject — especially before irreversible or external actions.",
  },
  {
    question: "When should an AI agent ask a human?",
    answer:
      "Typically before external side effects: sending email, publishing to social, writing to CRM, changing ads budgets, or any action that is hard to undo. Low-risk internal steps can often run automatically.",
  },
  {
    question: "How does Korux implement human-in-the-loop?",
    answer:
      "Korux treats approvals as a product surface. A Governor can intercept outbound actions, pause the workflow, and route Approve / Reject / edit / always-allow similar to a designated Approver — without giving that person the whole secret vault.",
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
  mainEntityOfPage: "https://korux.ai/human-in-the-loop-ai-agents",
};

export default function HumanInTheLoopPage() {
  return (
    <SiteChrome>
      <JsonLd data={[articleJsonLd, faqJsonLd]} />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-10 md:pt-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Guide</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
          Human-in-the-loop AI agents
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          AI agents are getting good at drafting and acting. The hard part is not
          more autonomy — it is knowing{" "}
          <span className="font-medium text-foreground">when a person must stay in command</span>
          {" "}before something leaves your boundary.
        </p>

        <article className="mt-14 space-y-12 text-base leading-relaxed text-muted">
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              What “human-in-the-loop” means for agents
            </h2>
            <p className="mt-4">
              Human-in-the-loop (HITL) AI agents do not mean a person types every
              step. They mean the agent can prepare work at machine speed, then{" "}
              <strong className="font-medium text-foreground">
                pause at high-stakes checkpoints
              </strong>{" "}
              for Approve, Reject, Edit, or Always-allow similar — then resume.
            </p>
            <p className="mt-4">
              That is how you get the upside of virtual staff for repetitive
              workflows, without treating company email, CRM, or social accounts
              as unsupervised free-for-alls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Where the brake should sit
            </h2>
            <p className="mt-4">
              The useful rule of thumb: put the human gate{" "}
              <strong className="font-medium text-foreground">
                before the side effect
              </strong>
              , not after the apology. Strong candidates for approval:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Outbound email or messages that leave the company</li>
              <li>Social publish / public posts</li>
              <li>CRM creates or updates that affect customers</li>
              <li>Ads mutations, budget changes, or money movement</li>
              <li>Deletes or other hard-to-reverse writes</li>
            </ul>
            <p className="mt-4">
              Internal research, drafting, and summarization can often run more
              freely — as long as secrets stay scoped and the path to the outside
              world stays gated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              What a good HITL experience looks like
            </h2>
            <p className="mt-4">A practical approval surface usually needs:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Clear view of what the agent is about to do (to, subject, body, tool)</li>
              <li>Approve / reject / edit-then-approve</li>
              <li>Optional “always allow similar” with an easy revoke</li>
              <li>An Approver role that can decide without owning every secret</li>
              <li>A readable trail of what ran, what was blocked, and who decided</li>
            </ul>
            <p className="mt-4">
              Without that, “human oversight” stays a policy sentence — not a
              working control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              How Korux approaches HITL
            </h2>
            <p className="mt-4">
              Korux is building a platform so people without a deep technology
              background can still run AI agents on everyday work — with command
              in human hands. HITL is not a bolt-on webhook; it is part of the
              product path alongside natural language → confirmed workflow and
              runtime governance.
            </p>
            <p className="mt-4">
              Example: an agent drafts an external email. The Governor can
              intercept before send. You (or a designated Approver) decide in the
              Message Hub. The brake sits on Internal → External — before the
              message is gone.
            </p>
            <p className="mt-4">
              Related reading:{" "}
              <Link
                href="/agentic-ai"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                What is agentic AI?
              </Link>
              {" "}·{" "}
              <Link
                href="/agent-control-plane"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                Agent control plane
              </Link>
              {" "}·{" "}
              <Link
                href="/ai-agent-governance"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                AI agent governance
              </Link>
              . Prefer to shape defaults in public? Join{" "}
              <a
                href="https://github.com/orgs/korux-ai/discussions/categories/governance"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                Governance Discussions
              </a>
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
          <h2 className="text-2xl font-bold text-foreground">Want HITL built into the platform?</h2>
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
