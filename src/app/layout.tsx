import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";
import { themeInitScript } from "@/lib/theme-init";
import "./globals.css";

const siteUrl = "https://korux.ai";
const title = "Korux — Governed AI Workforce OS";
const description =
  "Korux is the Governed AI Workforce OS, still under active development. Join the waitlist to hear when it opens.";

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
    "AI workforce",
    "governed AI agents",
    "human-in-the-loop",
    "AI agent platform",
    "workflow automation",
    "AI governance",
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
      "Autonomy with governance: multi-agent workforce, per-agent vault, and human approval before high-stakes actions.",
    url: siteUrl,
    siteName: "Korux",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Autonomy with governance: multi-agent workforce, per-agent vault, and human approval before high-stakes actions.",
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
    "https://github.com/korux-ai",
    "https://github.com/orgs/korux-ai/discussions",
  ],
  description:
    "Korux is the Governed AI Workforce OS — AI agents with scoped secrets, confirmed workflows, and human approval before external side effects.",
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Korux",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: siteUrl,
  description:
    "A platform to build and safely run AI agents for everyday workflows, with a Governor on external side effects and human-in-the-loop approvals.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    description: "Waitlist for the upcoming public release",
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
