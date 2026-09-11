import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { WaitlistForm } from "@/components/WaitlistForm";

const title = "AI Agent Governance — Runtime Guardrails Before External Side Effects";
const description =
  "What AI agent governance and agentic AI guardrails mean in practice: runtime rules, agent control-plane ideas, Internal vs External boundaries, human approval, and audit trails. How Korux approaches governed agentic AI.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ai-agent-governance",
  },
  openGraph: {
    title,
    description,
    url: "https://korux.ai/ai-agent-governance",
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
    question: "What is AI agent governance?",
    answer:
      "AI agent governance is the set of runtime controls that decide what agents may do when they act in the world — policies, intercepts, human approval, least-privilege credentials, and audit trails — so autonomy does not become unsupervised liability.",
  },
  {
    question: "How does agentic AI change governance?",
    answer:
      "Agentic AI systems take multi-step tool actions, so governance must sit on each external write — not only on the model’s training or a prompt. That is why agent control planes, guardrails, and human-in-the-loop checkpoints are rising together.",
  },
  {
    question: "Why do AI agents need governance?",
    answer:
      "Unlike chatbots that only answer, agents can call tools, send messages, and change systems. Without governance, a wrong or unexpected action can reach customers, money, or public channels before anyone notices.",
  },
  {
    question: "How does Korux approach AI agent governance?",
    answer:
      "Korux pairs natural language → confirmed workflow with a Governor on external side effects, per-agent secret vaults, human-in-the-loop approvals, and readable intercept/run history — so people who know the business can automate safely.",
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
  mainEntityOfPage: "https://korux.ai/ai-agent-governance",
};

export default function AiAgentGovernancePage() {
  return (
    <SiteChrome>
      <JsonLd data={[articleJsonLd, faqJsonLd]} />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-10 md:pt-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Guide</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
          AI agent governance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          As agentic AI moves from answering questions to taking actions, governance
          stops being a slide deck. It becomes the difference between helpful
          automation and an unsupervised insider with your credentials.
        </p>

        <article className="mt-14 space-y-12 text-base leading-relaxed text-muted">
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              What AI agent governance is
            </h2>
            <p className="mt-4">
              AI agent governance means{" "}
              <strong className="font-medium text-foreground">
                runtime rules that control agent actions
              </strong>{" "}
              — especially when those actions write outside your perimeter.
              Policies, intercepts, approvals, scoped secrets, and audits turn
              “be careful” into something the system can enforce. People also call
              these controls{" "}
              <strong className="font-medium text-foreground">AI agent guardrails</strong>
              {" "}when they evaluate tool calls before execution.
            </p>
            <p className="mt-4">
              It is related to broader AI governance (risk frameworks, compliance),
              but for builders and operators the urgent question is narrower:{" "}
              <em className="text-foreground not-italic font-medium">
                can this agent send that email, update that CRM record, or publish
                that post without a human gate?
              </em>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Agentic AI and the agent control plane
            </h2>
            <p className="mt-4">
              Search interest in an{" "}
              <strong className="font-medium text-foreground">agent control plane</strong>
              {" "}rose as companies stopped managing one demo agent and started
              running many. The idea is operational: inventory agents, enforce
              policy on tool use, and keep a trail you can explain. Korux focuses
              that same need for founder-operators — not an enterprise fleet
              console first, but a Governor, human approvals, and readable runs on
              the workflows that touch the outside world.
            </p>
            <p className="mt-4">
              For a plain-language primer, see{" "}
              <Link
                href="/agentic-ai"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                What is agentic AI?
              </Link>
              {" "}and{" "}
              <Link
                href="/agent-control-plane"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                agent control plane for solopreneurs
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Internal vs External — a practical boundary
            </h2>
            <p className="mt-4">
              A useful mental model is the border between Internal work (research,
              drafts, summaries inside your workspace) and External side effects
              (messages, posts, writes to third-party systems). Korux designs
              governance to sit on that border: agents can prepare freely; crossing
              out can pause for policy and people.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">Policy with the connector</span>
                {" "}— risk and gates travel with the capability (for example, mail
                that requires human confirmation before send)
              </li>
              <li>
                <span className="font-medium text-foreground">Least privilege</span>
                {" "}— each agent gets only the secrets it needs; keys stay out of the
                model context
              </li>
              <li>
                <span className="font-medium text-foreground">Human decision path</span>
                {" "}— approve, reject, edit, or always-allow similar
              </li>
              <li>
                <span className="font-medium text-foreground">Readable trail</span>
                {" "}— intercepts, runs, and decisions you can explain later
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Governance is not “slowing agents down”
            </h2>
            <p className="mt-4">
              Good governance is how you{" "}
              <strong className="font-medium text-foreground">scale agents at all</strong>
              . Without brakes, teams keep agents in demos. With clear gates,
              repetitive workflows can move to virtual staff while founders and
              Approvers keep command of what reaches the outside world.
            </p>
            <p className="mt-4">
              That is the new need Korux is built for: anyone should be able to
              build and safely use AI agents for everyday processes — without a
              technology background — staying focused on the business, not the
              infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              How Korux fits
            </h2>
            <p className="mt-4">
              Korux combines natural language → confirmed workflow, a Governor on
              external side effects, human-in-the-loop approvals, and an open
              capability catalog where governance rules ship with connectors. You
              can explore patterns in{" "}
              <a
                href="https://github.com/korux-ai/korux-repertoire"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                korux-repertoire
              </a>{" "}
              and discuss requirements in{" "}
              <a
                href="https://github.com/orgs/korux-ai/discussions/categories/governance"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                GitHub Discussions
              </a>
              .
            </p>
            <p className="mt-4">
              Next:{" "}
              <Link
                href="/agentic-ai"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                What is agentic AI?
              </Link>
              {" "}·{" "}
              <Link
                href="/human-in-the-loop-ai-agents"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                Human-in-the-loop AI agents
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
          id="waitlist"
          className="mt-16 scroll-mt-24 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 text-center md:p-12"
        >
          <h2 className="text-2xl font-bold text-foreground">
            Building governance into everyday agent work
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Join the Korux waitlist for early access to a platform where AI agent
            governance is designed in — not bolted on later.
          </p>
          <div className="mt-8 flex justify-center">
            <WaitlistForm />
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
