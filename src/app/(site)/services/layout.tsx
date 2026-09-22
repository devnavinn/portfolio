import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Freelance Web Development Services",
  description:
    "Hire Navin Kumar for freelance web development — full-stack apps, e-commerce sites, APIs, redesigns, deployment, SEO setup, and ongoing support. Message on WhatsApp for a quote.",
  keywords: [
    "freelance web developer",
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
    title: "Freelance Web Development Services — Navin Kumar",
    description:
      "Full-stack web apps, e-commerce sites, APIs, redesigns, deployment, and ongoing support — available for freelance projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Development Services — Navin Kumar",
    description:
      "Full-stack web apps, e-commerce sites, APIs, redesigns, deployment, and ongoing support — available for freelance projects.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
