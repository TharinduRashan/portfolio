import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

export const viewport: Viewport = {
  themeColor: "#f5f5f7"
};

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
  description: portfolioData.personal.seoDescription,
  metadataBase: new URL(portfolioData.personal.websiteUrl),
  keywords: [
    "Tharindu Rashan",
    "Software Developer",
    "CEO & Co-Founder of Cloudzyne",
    "IT Undergraduate",
    "SLIIT",
    "BIT at UoM",
    "Cloudzyne",
    "Full Stack Developer",
    "Sri Lanka"
  ],
  authors: [{ name: portfolioData.personal.name, url: portfolioData.personal.websiteUrl }],
  creator: portfolioData.personal.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  openGraph: {
    title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
    description: portfolioData.personal.seoDescription,
    url: portfolioData.personal.websiteUrl,
    siteName: portfolioData.personal.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: portfolioData.personal.ogImageUrl,
        secureUrl: portfolioData.personal.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} — ${portfolioData.personal.title} & ${portfolioData.personal.subtitle}`,
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
    description: portfolioData.personal.seoDescription,
    images: [portfolioData.personal.ogImageUrl]
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
