import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Freelance Web & AI Development Services",
  description:
    "Fixed-price freelance services: AI chatbots, AI workflow automation, MVPs, e-commerce sites, landing pages, and a monthly developer retainer. Get a free quote on WhatsApp.",
  keywords: [
    "freelance web developer",
    "freelance AI developer",
    "AI chatbot development",
    "AI automation services",
    "monthly developer retainer",
    "hire full stack developer",
    "Next.js developer for hire",
    "React developer freelance",
    "e-commerce website development",
    "freelance developer India",
    "website deployment service",
    "freelance API development",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services`,
    title: "Freelance Web & AI Development Services — Navin Kumar",
    description:
      "AI chatbots, automations, MVPs, e-commerce, and websites at fixed prices, plus a monthly developer retainer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web & AI Development Services — Navin Kumar",
    description:
      "AI chatbots, automations, MVPs, e-commerce, and websites at fixed prices, plus a monthly developer retainer.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
