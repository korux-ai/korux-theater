import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

type SiteChromeProps = {
  children: React.ReactNode;
  waitlistHref?: string;
};

export function SiteChrome({ children, waitlistHref = "/#waitlist" }: SiteChromeProps) {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-mark.svg" alt="" width={36} height={36} priority />
          <span className="text-lg font-semibold tracking-tight">Korux</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/human-in-the-loop-ai-agents"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-primary md:inline"
          >
            HITL
          </Link>
          <Link
            href="/ai-agent-governance"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-primary lg:inline"
          >
            Governance
          </Link>
          <a
            href="https://github.com/orgs/korux-ai/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-primary sm:inline"
          >
            Discussions
          </a>
          <Link
            href={waitlistHref}
            className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
          >
            Join Waitlist
          </Link>
        </div>
      </header>

      {children}

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-muted">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/logo-mark.svg" alt="" width={20} height={20} />
              <span>© {new Date().getFullYear()} Korux.ai</span>
            </div>
            <SocialLinks />
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:justify-start">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/human-in-the-loop-ai-agents"
              className="transition-colors hover:text-primary"
            >
              Human-in-the-loop AI agents
            </Link>
            <Link href="/ai-agent-governance" className="transition-colors hover:text-primary">
              AI agent governance
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
