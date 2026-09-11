import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { WaitlistForm } from "@/components/WaitlistForm";

const title = "Agent Control Plane for Solopreneurs — Keep AI Agents Under Command";
const description =
  "What an agent control plane is, why search interest spiked as AI agent fleets grew, and how founder-operators can get the same idea without an enterprise console: Governor rules, human approval, and readable runs.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "agent control plane",
    "what is an agent control plane",
    "agent control plane for solopreneurs",
    "AI agent control plane",
    "agentic AI control plane",
    "AI agent governance",
    "AI agent guardrails",
  ],
  alternates: {
    canonical: "/agent-control-plane",
  },
  openGraph: {
    title,
    description,
    url: "https://korux.ai/agent-control-plane",
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
    question: "What is an agent control plane?",
    answer:
      "An agent control plane is the operational layer for AI agents: inventory what agents exist, enforce policy on what they may do with tools, and keep an audit trail of actions and human decisions. It is how teams move from “we built a demo agent” to “we can run agents in production without losing command.”",
  },
  {
    question: "Why is everyone searching for agent control plane?",
    answer:
      "Search interest rose as vendors framed products around governing many agents across tools and frameworks — not just creating one agent. Once you have more than a toy workflow, the hard problem shifts from prompting to operations: policy, identity, approvals, and accountability.",
  },
  {
    question: "Do solopreneurs need an agent control plane?",
    answer:
      "You may not need an enterprise fleet console on day one. You do need the same jobs done: know which virtual staff can touch email or CRM, pause high-stakes side effects for a human, and explain what ran. Korux aims that control-plane idea at founder-operators first.",
  },
  {
    question: "How does Korux relate to an agent control plane?",
    answer:
      "Korux is not positioning as a mega-enterprise control tower. It is a governed AI workforce OS: natural language → confirmed Spec, a Governor on external side effects, human-in-the-loop approvals, per-agent secrets, and readable runs — the control-plane jobs that matter when one person runs virtual staff.",
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
  mainEntityOfPage: "https://korux.ai/agent-control-plane",
};

export default function AgentControlPlanePage() {
  return (
    <SiteChrome>
      <JsonLd data={[articleJsonLd, faqJsonLd]} />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-10 md:pt-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Guide</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
          Agent control plane — for people who actually run the agents
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Enterprise decks say “control plane.” Founders feel it sooner: when a
          marketing agent can draft and nearly send email,{" "}
          <span className="font-medium text-foreground">
            someone still has to hold the baton
          </span>
          .
        </p>

        <article className="mt-14 space-y-12 text-base leading-relaxed text-muted">
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              What “agent control plane” means
            </h2>
            <p className="mt-4">
              An{" "}
              <strong className="font-medium text-foreground">agent control plane</strong>
              {" "}is not another chat window. It is the layer that answers:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Which agents exist, and what are they for?</li>
              <li>Which tools and credentials may they use?</li>
              <li>When must a human approve before a side effect fires?</li>
              <li>What ran, what was blocked, and who decided?</li>
            </ul>
            <p className="mt-4">
              That framing took off as organizations stopped managing one agent and
              started managing many — across different builders, tools, and policies.
              The creation problem became an{" "}
              <strong className="font-medium text-foreground">operations</strong> problem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Why solopreneurs care before “enterprise scale”
            </h2>
            <p className="mt-4">
              You do not need hundreds of agents to need control. One virtual staff
              member with mailbox or CRM access is already enough liability. The
              control-plane jobs still apply at one-person-company scale:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">Policy with the tool</span>
                {" "}— outbound mail can require human confirmation by default
              </li>
              <li>
                <span className="font-medium text-foreground">Least privilege</span>
                {" "}— the research agent does not get every secret
              </li>
              <li>
                <span className="font-medium text-foreground">A decision surface</span>
                {" "}— Approve / Reject / edit, not a buried webhook
              </li>
              <li>
                <span className="font-medium text-foreground">A readable trail</span>
                {" "}— so you can answer what happened tomorrow morning
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Control plane vs prompt guardrails
            </h2>
            <p className="mt-4">
              Prompt instructions are easy to ignore when models improvise. A useful
              control plane (or the jobs it stands for) evaluates actions{" "}
              <strong className="font-medium text-foreground">outside the model</strong>
              {" "}— allow, deny, or require approval before the tool runs. That is the
              same spirit as{" "}
              <strong className="font-medium text-foreground">AI agent guardrails</strong>
              {" "}and{" "}
              <Link
                href="/ai-agent-governance"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                AI agent governance
              </Link>
              : runtime enforcement on Internal → External boundaries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              How Korux approaches it
            </h2>
            <p className="mt-4">
              Korux is building a governed AI workforce OS for founder-operators — not
              a generic enterprise agent mesh. The control-plane idea shows up as:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Natural language → confirmed Workflow Spec before execute</li>
              <li>Governor intercepts on external side effects</li>
              <li>Human-in-the-loop approvals in Message Hub</li>
              <li>Per-agent secret vault and run / intercept history</li>
            </ul>
            <p className="mt-4">
              See a concrete pass: describe → Spec → pause → decide on the{" "}
              <Link
                href="/#see-it"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                Korux homepage story strip
              </Link>
              . Background on{" "}
              <Link
                href="/agentic-ai"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                agentic AI
              </Link>
              {" "}and{" "}
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
          id="waitlist"
          className="mt-16 scroll-mt-24 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 text-center md:p-12"
        >
          <h2 className="text-2xl font-bold text-foreground">
            Want a control plane that fits one-person companies?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Join the Korux waitlist for early access. We are still building — we
            will email when it opens.
          </p>
          <div className="mt-8 flex justify-center">
            <WaitlistForm />
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
