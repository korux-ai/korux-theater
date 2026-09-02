import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Korux — Governed AI Workforce OS",
  description:
    "Where governed AI workflows take the stage. Join the waitlist for early access to Korux.",
  openGraph: {
    title: "Korux — Governed AI Workforce OS",
    description:
      "Where governed AI workflows take the stage. Join the waitlist for early access.",
    url: "https://korux.ai",
    siteName: "Korux",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
