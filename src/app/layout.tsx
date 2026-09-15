import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";
import { themeInitScript } from "@/lib/theme-init";
import "./globals.css";

const siteUrl = "https://korux.ai";
const title = "Korux — Agentic AI with Human-in-the-Loop Governance";
const description =
  "Build and safely run agentic AI workflows for everyday work. Natural language → confirmed Spec, AI agent guardrails on external actions, and human-in-the-loop approval before email, CRM, or publish. Request a 7-day trial.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Korux",
  },
  description,
  applicationName: "Korux",
  keywords: [
    "Korux",
    "agentic AI",
    "AI agents",
    "agentic AI governance",
    "AI agent governance",
    "agent control plane",
    "AI agent guardrails",
    "human-in-the-loop AI agents",
    "autonomous AI agents",
    "AI agent approval workflow",
    "natural language to workflow",
    "governed AI agents",
    "AI workforce OS",
    "agent workflow automation",
    "AI coworker",
    "external side effects AI agents",
  ],
  authors: [{ name: "Korux", url: siteUrl }],
  creator: "Korux",
  publisher: "Korux",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-mark.svg",
  },
  openGraph: {
    title,
    description:
      "Agentic AI for everyday work with human-in-the-loop governance: confirmed workflows, AI agent guardrails, and approval before high-stakes actions.",
    url: siteUrl,
    siteName: "Korux",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Agentic AI for everyday work with human-in-the-loop governance: confirmed workflows, AI agent guardrails, and approval before high-stakes actions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Korux",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  sameAs: [
    "https://try.korux.ai",
    "https://github.com/korux-ai",
    "https://github.com/orgs/korux-ai/discussions",
  ],
  description:
    "Korux helps people build and safely run agentic AI workflows — with AI agent governance, human-in-the-loop approvals, and natural language to confirmed workflow.",
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Korux",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: siteUrl,
  description:
    "Governed agentic AI platform: natural language to workflow, human-in-the-loop AI agents, AI agent guardrails, and runtime governance before external side effects like email or CRM writes.",
  featureList: [
    "Natural language to confirmed workflow",
    "Human-in-the-loop AI agent approvals",
    "AI agent governance and guardrails on external side effects",
    "Per-agent secret vault",
    "Audit and intercept visibility",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/OnlineOnly",
    description: "Request a 7-day trial; invite emailed for signup at try.korux.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "Korux",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeProvider>
          <JsonLd data={organizationJsonLd} />
          <JsonLd data={softwareJsonLd} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
