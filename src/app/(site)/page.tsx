import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Navin Kumar — full-stack developer building React, Next.js, and Node.js products. Available for freelance web development, e-commerce sites, and API work.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
  },
};

export default function Home() {
  return <HomePage />;
}
