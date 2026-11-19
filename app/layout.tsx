import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#111114" }
  ]
};

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
  description: portfolioData.personal.seoDescription,
  metadataBase: new URL(portfolioData.personal.websiteUrl),
  keywords: [
    "Tharindu Rashan",
    "Software Developer",
    "IT Undergraduate",
    "SLIIT",
    "BIT at UoM",
    "Cloudzyne",
    "Web Developer",
    "Sri Lanka"
  ],
  authors: [{ name: portfolioData.personal.name, url: portfolioData.personal.websiteUrl }],
  creator: portfolioData.personal.name,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ]
  },
  openGraph: {
    title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
    description: portfolioData.personal.shortBio,
    url: portfolioData.personal.websiteUrl,
    siteName: `${portfolioData.personal.name} Portfolio`,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
    description: portfolioData.personal.shortBio
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
