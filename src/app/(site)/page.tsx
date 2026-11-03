import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Freelance full-stack & AI developer. AI chatbots, automations, MVPs, e-commerce, and high-converting websites at fixed prices. Get a free quote on WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
  },
};

export default function Home() {
  return <HomePage />;
}
