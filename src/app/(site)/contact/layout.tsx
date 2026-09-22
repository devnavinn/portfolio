import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Navin Kumar for freelance web development work — message on WhatsApp, email, or connect on GitHub and LinkedIn.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    title: "Contact — Navin Kumar",
    description:
      "The fastest way to reach Navin Kumar is WhatsApp — message directly to discuss a freelance project.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
