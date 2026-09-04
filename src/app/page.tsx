import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { SocialLinks } from "@/components/SocialLinks";
import { WaitlistForm } from "@/components/WaitlistForm";

const emergingNeeds = [
  {
    title: "NL → workflow",
    detail:
      "Describe the job in natural language, get a Workflow Spec you can review, then confirm before anything runs. Authoring should feel conversational — execution should stay explicit.",
  },
  {
    title: "Governor on side effects",
    detail:
      "When an agent is about to email, publish, write to CRM, or otherwise leave your boundary, runtime rules can pause the action. Governance travels with the capability, not as an afterthought.",
  },
  {
    title: "Human-in-the-loop first",
    detail:
      "Approvals are a product surface: approve, reject, edit, or always-allow similar — with a designated Approver who does not need the whole vault.",
  },
  {
    title: "Identity, secrets, and trail",
    detail:
      "Agents have roles and scoped credentials. Keys stay out of the model. Intercepts and runs stay readable so you can answer what happened and who decided.",
  },
];

const pillars = [
  {
    title: "Governor",
    lead: "A dedicated Governor that watches agents where it matters — on external side effects.",
    body: "When an action looks risky or crosses an Internal → External boundary, Korux can pause the workflow and route the decision to a human instead of hoping a post-mortem catches it. Policies can encode rate limits, amount thresholds, forbidden actions, and connector-level rules so governance travels with the capability — not as a spreadsheet you remember later.",
    points: [
      "Intercept before send, publish, mutate, or trade",
      "Pause + notify instead of silent failure",
      "Per-connector governor packs alongside manifests",
    ],
  },
  {
    title: "Human-in-the-loop",
    lead: "Approvals are a first-class surface — not a buried webhook.",
    body: "High-risk actions land in an approval experience where you can approve, reject, or always-allow similar cases (and revoke later). Invite an Approver who can decide gated actions without needing full admin access or vault credentials. Your AI workforce can move; the final say stays with a person you trust.",
    points: [
      "Approve / reject pending actions from a dashboard",
      "Always-allow similar with explicit revoke",
      "Approver role without Vault access",
    ],
  },
  {
    title: "Per-agent Secret Vault",
    lead: "Credentials are scoped to the agent that needs them — and kept out of the model.",
    body: "An email agent gets mail credentials; a trading agent gets broker credentials; nothing more. Secrets are injected at the tool / proxy boundary so LLMs never see raw keys in context. That is how you run many agents without turning every prompt into a credential leak.",
    points: [
      "Per-agent credential isolation",
      "Inject at tool boundary, not into prompts",
      "Least-privilege by default for each role",
    ],
  },
  {
    title: "Virtual staff & workflows",
    lead: "Hire agents with roles and tools, then wire them into governed pipelines.",
    body: "Define marketing, research, support, or ops agents with system prompts and bound capabilities. Author workflows visually, or propose a Workflow Spec from natural language and confirm it before it runs. Schedule and monitor triggers keep work moving — while Governor still sits on external writes.",
    points: [
      "Agent builder with prompt + tool binding",
      "NL → Spec → confirm before execute",
      "Runs history for debugging and review",
    ],
  },
  {
    title: "Connectors with rules built in",
    lead: "Capabilities ship as packages: what they do, how risky they are, and when a human must gate.",
    body: "The open korux-repertoire catalog covers mail, IMAP, web research, social publish, CRM notes, ads mutate, analytics reads, and more. Each package carries a manifest and governor rules — for example, outbound email that requires human confirmation before send. Governance is co-shipped with the connector, not bolted on after an incident.",
    points: [
      "Risk metadata and I/O boundary in the manifest",
      "governor.json rules such as require_human",
      "First-party catalog you can read on GitHub today",
    ],
  },
  {
    title: "Audit & visibility",
    lead: "Trustworthy scale needs a readable trail — not a black box.",
    body: "Intercept logs, run history, and step-level audit envelopes help you answer what ran, what was blocked, and who decided. Usage visibility keeps token burn observable. Frame it as operational accountability for builders and operators — clear enough for a non-engineer Approver to follow the story of a gated action.",
    points: [
      "Governor intercept log and risk alerts",
      "Step-level execution accountability",
      "Usage visibility for LLM spend",
    ],
  },
];

const flowSteps = [
  {
    title: "Agent prepares the outbound action",
    detail:
      "A research or executor agent drafts an external email — recipient, subject, body — as part of a governed workflow, not a free-form chat with your company mailbox.",
  },
  {
    title: "Governor intercepts on external write",
    detail:
      "Because the action writes outside your boundary, the mail capability’s governor rules can pause execution. The side effect does not fire yet. The workflow waits on a human decision.",
  },
  {
    title: "You decide in Message Hub",
    detail:
      "Approve as-is, approve with edits (to / subject / body), always allow similar, or reject. The brake sits before Internal → External — not after the message is already gone.",
  },
];

const audiences = [
  {
    title: "Solopreneurs & founder-operators",
    detail:
      "Run a one-person company with virtual staff — research, outreach, ops — without treating autonomy as an all-or-nothing liability.",
  },
  {
    title: "Small teams with a trusted Approver",
    detail:
      "Invite a Collaborator to build, and an Approver to gate high-stakes actions, without handing over the entire vault.",
  },
  {
    title: "Builders who care about side effects",
    detail:
      "If your agents will touch email, CRM, social, ads, or paper trading, you need identity, secrets, and governor packs — not just another prompt chain.",
  },
];

const faqs = [
  {
    question: "What is Korux?",
    answer:
      "Korux is the Governed AI Workforce OS: a platform to build and safely run AI agents for everyday workflows. It combines natural-language workflow authoring, per-agent secrets, a Governor on external side effects, and human-in-the-loop approvals in one product.",
  },
  {
    question: "How is Korux different from a typical AI agent or chatbot tool?",
    answer:
      "Most agent tools optimize for autonomy and speed. Korux treats governance as a first-class runtime: when an agent is about to email, publish, write to CRM, or otherwise leave your boundary, rules can pause the action for human approval. Secrets stay scoped per agent and out of the model context.",
  },
  {
    question: "Who is Korux for?",
    answer:
      "Korux S1 focuses on solopreneurs and founder-operators who need virtual staff now, plus small teams with a trusted Approver. It is built for people who want AI to take over repetitive work without giving up control of high-stakes side effects.",
  },
  {
    question: "What does the Governor do?",
    answer:
      "The Governor watches agents on external side effects. When an action looks risky or crosses an Internal → External boundary, Korux can pause the workflow and route the decision to a human — with policies for rate limits, thresholds, forbidden actions, and connector-level rules.",
  },
  {
    question: "Is Korux available today?",
    answer:
      "Korux is in early access. Join the waitlist on korux.ai for launch invites. Capability packages and governance patterns are already visible in the open korux-repertoire catalog on GitHub; product direction is shaped in GitHub Discussions.",
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd data={faqJsonLd} />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Image src="/logo-mark.svg" alt="" width={36} height={36} priority />
          <span className="text-lg font-semibold tracking-tight">Korux</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/orgs/korux-ai/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-primary sm:inline"
          >
            Discussions
          </a>
          <a
            href="#waitlist"
            className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <section className="flex flex-col items-center pt-16 text-center md:pt-24">
          <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Korux
          </p>

          <h1 className="animate-fade-up-delay-1 mt-4 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl md:leading-[1.1]">
            The Governed AI{" "}
            <span className="text-primary">Workforce OS</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Build and safely run AI agents for everyday workflows — no technology
            background required. Stay focused on your business; Korux handles
            confirmed workflows, governance, and human approval.
          </p>

          <div id="waitlist" className="animate-fade-up-delay-3 mt-10 scroll-mt-24">
            <WaitlistForm />
            <p className="mt-3 text-xs text-muted">
              Early access invites only. No spam.
            </p>
          </div>
        </section>

        <section className="mt-28 md:mt-36">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            A new kind of need
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold tracking-tight md:text-3xl">
            A platform for the new work of AI agents — easy to build, safe to run
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted">
            Korux is built for a need that is becoming common: virtual staff that
            can research, draft, and take real-world actions — while people stay
            in command. Our aim is simple: anyone should be able to build and
            safely use AI agents to take over repetitive daily workflows, without
            a technology background — staying focused on their business and
            process. That means{" "}
            <span className="font-medium text-foreground">
              natural language → confirmed workflow
            </span>
            , runtime governance on external side effects, and human-in-the-loop
            as a first-class path — designed into one platform, not bolted on
            later.
          </p>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {emergingNeeds.map((item) => (
              <div key={item.title} className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28 md:mt-36">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            What you get
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold tracking-tight md:text-3xl">
            Autonomy with governance — trustworthy scale for a one-person company
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted">
            The product value is{" "}
            <span className="text-foreground font-medium">trustworthy scale</span>
            : many agents under explicit command, with border control on data and
            side effects — so people who know the work can automate it safely.
            Below is how the platform supports that.
          </p>

          <div className="mt-16 space-y-14">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="border-t border-border pt-8 md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-12">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{pillar.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-foreground/90">
                    {pillar.lead}
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted">{pillar.body}</p>
                  <ul className="mt-5 space-y-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-foreground/85">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-28 md:mt-36">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            A concrete moment
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold tracking-tight md:text-3xl">
            Agent drafts an external email. Governor intercepts — before it sends.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted">
            This is the difference between “AI that can do anything” and AI you
            can actually run near a company mailbox. In the open mail capability
            pack, outbound send can require human confirmation by default when the
            action writes externally. Speed without steering is not automation —
            it is liability.
          </p>

          <ol className="mx-auto mt-14 max-w-3xl space-y-10">
            {flowSteps.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/25 text-xs font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-muted">
            The same pattern applies beyond email: social publish, CRM writes,
            ads mutations, and other external side effects can carry governor
            rules in the capability package — so the brake is defined with the
            tool, not reinvented for every workflow.
          </p>
        </section>

        <section className="mt-28 md:mt-36">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Who it is for
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold tracking-tight md:text-3xl">
            Built first for one-person companies — and the humans who approve risk
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted">
            Korux S1 focuses on the founder-operator who needs virtual staff now,
            with clear roles for people who build and people who decide. Larger
            multi-department topologies are on the roadmap; we will not pretend
            they are the product you get on day one.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {audiences.map((audience) => (
              <div key={audience.title} className="border-t border-border pt-6">
                <h3 className="text-base font-semibold text-foreground">{audience.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{audience.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28 md:mt-36">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Build in the open
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold tracking-tight md:text-3xl">
            Capability catalog on GitHub. Requirements in Discussions.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted">
            You can already read how connectors declare risk and human gates in{" "}
            <a
              href="https://github.com/korux-ai/korux-repertoire"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              korux-repertoire
            </a>
            — mail, research, social, CRM, ads, and more. If you have strong
            opinions about where brakes should sit, bring them to{" "}
            <a
              href="https://github.com/orgs/korux-ai/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              GitHub Discussions
            </a>
            : Announcements for official updates, Ideas for features, Governance
            for approval boundaries, and Q&amp;A for concepts.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted">
            Waitlist is for launch access. Discussions are for shaping the
            product in public. Use both — they serve different jobs.
          </p>
        </section>

        <section id="faq" className="mt-28 scroll-mt-24 md:mt-36">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold tracking-tight md:text-3xl">
            Korux in plain terms
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted">
            Short answers for searchers and AI assistants: what Korux is, who it
            serves, and how governance differs from unconstrained agent tools.
          </p>

          <dl className="mx-auto mt-14 max-w-3xl space-y-10">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-t border-border pt-6">
                <dt>
                  <h3 className="text-base font-semibold text-foreground">
                    {faq.question}
                  </h3>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-28 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-10 text-center md:mt-36 md:p-16">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready for agents with brakes?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
            Join the early-access waitlist and we will notify you when Korux
            opens. Prefer to influence defaults first? Tell us which actions
            should never run unsupervised in Discussions.
          </p>
          <div className="mt-8 flex justify-center">
            <WaitlistForm />
          </div>
          <p className="mt-6 text-sm text-muted">
            <a
              href="https://github.com/orgs/korux-ai/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Join the conversation on GitHub →
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/logo-mark.svg" alt="" width={20} height={20} />
            <span>© {new Date().getFullYear()} Korux.ai</span>
          </div>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}
