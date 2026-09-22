import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Navin Kumar — Full Stack Developer with experience in React, Next.js, Node.js, MongoDB, and PostgreSQL.",
  alternates: { canonical: "/resume" },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
