import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/seo";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "AI Chatbots & Automation" },
      { href: "/services", label: "MVPs & Web Apps" },
      { href: "/services", label: "E-commerce" },
      { href: "/services#pricing", label: "Pricing" },
    ],
  },
  {
    title: "More",
    links: [
      { href: "/projects", label: "Work" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/resume", label: "Resume" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

const socials = [
  { href: SOCIAL_LINKS.github, label: "GitHub", icon: GithubIcon },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: `mailto:${SOCIAL_LINKS.email}`, label: "Email", icon: MailIcon },
];

const Footer = () => (
  <footer className="mt-24 border-t border-slate-200 dark:border-white/10 print:hidden">
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <p className="text-lg font-semibold tracking-tight">
          Navin<span className="text-sky-500">.</span>
        </p>
        <p className="mt-2 max-w-xs text-sm text-slate-500 dark:text-slate-400">
          Freelance full-stack & AI developer building websites, apps, and
          automations for startups and small businesses worldwide.
        </p>
        <ul className="mt-5 flex gap-2">
          {socials.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <Link
                target="_blank"
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-white/10 dark:text-slate-400"
              >
                <Icon size={16} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {columns.map((col) => (
        <div key={col.title}>
          <p className="mb-3 text-sm font-semibold">{col.title}</p>
          <ul className="space-y-2">
            {col.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-500 transition-colors hover:text-sky-500 dark:text-slate-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="mx-auto max-w-5xl px-4 pb-24 text-xs text-slate-400 sm:px-6 md:pb-10 dark:text-slate-500">
      © {new Date().getFullYear()} Navin Kumar. All rights reserved.
    </div>
  </footer>
);

export default Footer;
