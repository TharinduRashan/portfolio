import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import AboutPage from "@/components/AboutPage";
import { portfolioData } from "@/data/portfolio";

const { personal } = portfolioData;

export const metadata: Metadata = {
  title: `About – ${personal.name}`,
  description: `Learn about ${personal.name} — an IT undergraduate at SLIIT and BIT at UoM, software developer, and CEO & Co-Founder of Cloudzyne. Background, education, projects, technical interests, and career goals.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About – ${personal.name}`,
    description: `${personal.name} is an IT undergraduate at SLIIT & BIT at UoM, building software through Cloudzyne and exploring AI, cloud, and cybersecurity.`,
    url: `${personal.websiteUrl}/about`,
    siteName: personal.name,
    type: "profile",
    images: [
      {
        url: personal.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `About ${personal.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About – ${personal.name}`,
    description: `${personal.name} is an IT undergraduate at SLIIT & BIT at UoM, building software through Cloudzyne.`,
    images: [personal.ogImageUrl],
  },
};

export default function About() {
  return (
    <PageShell>
      <AboutPage />
    </PageShell>
  );
}
