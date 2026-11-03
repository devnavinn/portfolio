import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  Bike,
  BookOpenText,
  BriefcaseBusinessIcon,
  CalendarIcon,
  CodeXmlIcon,
  FileTextIcon,
  MountainSnow,
  PenLine,
  Plane,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import { MagicCard } from "@/components/magic-card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionHeading, FinalCta } from "@/components/freelance-sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Navin Kumar — a freelance full-stack & AI developer building React, Next.js, and Node.js products for startups and small businesses.",
  alternates: { canonical: "/about" },
};

const interests = [
  {
    icon: Bike,
    title: "Riding",
    description: "Weekends are for the open road, two wheels at a time.",
  },
  {
    icon: MountainSnow,
    title: "Mountains",
    description: "My favorite kind of destination, every single time.",
  },
  {
    icon: BookOpenText,
    title: "Reading",
    description: "Always somewhere in the middle of a book.",
  },
  {
    icon: PenLine,
    title: "Writing",
    description: "Thinking out loud, one page at a time.",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Planning the next trip somewhere new.",
  },
];

const facts = [
  { icon: BriefcaseBusinessIcon, label: "Currently at", value: "21GenX" },
  { icon: CalendarIcon, label: "Building since", value: "Feb 2023" },
  { icon: CodeXmlIcon, label: "Focus", value: "Full-Stack & AI" },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Tailwind CSS",
  "OpenAI / Claude APIs",
  "Vercel",
];

const About = () => {
  return (
    <div>
      <PageHero
        eyebrow="About me"
        title={
          <>
            A developer who <span className="text-gradient">builds</span>{" "}
            things people actually use
          </>
        }
        subtitle="I care about shipping products that work end to end — not just in a demo."
      />

      <div className="mx-auto max-w-4xl">
        <div className="grid gap-4 md:grid-cols-[280px_1fr]">
          <BlurFade className="h-full">
            <MagicCard className="h-full">
              <div className="flex h-full flex-col items-center p-6 text-center">
                <div className="relative mb-5">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-500 to-fuchsia-500 opacity-60 blur-md" />
                  <Image
                    src="/me.jpg"
                    alt="Navin Kumar"
                    width={160}
                    height={160}
                    className="relative h-32 w-32 rounded-full object-cover ring-4 ring-white dark:ring-[#0b0f19]"
                    priority
                  />
                </div>
                <p className="text-lg font-semibold">Navin Kumar</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Full-stack & AI developer
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Open to freelance work
                </p>
                <Link
                  href="/resume"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-sky-500"
                >
                  <FileTextIcon size={15} />
                  View resume
                </Link>
              </div>
            </MagicCard>
          </BlurFade>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {facts.map(({ icon: Icon, label, value }, i) => (
                <BlurFade key={label} delay={i * 0.06}>
                  <div className="rounded-2xl border border-slate-200 p-5 dark:border-white/10 dark:bg-white/[0.02]">
                    <Icon size={18} className="mb-3 text-sky-500" />
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    <p className="font-semibold">{value}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
            <BlurFade delay={0.1} className="grow">
              <div className="h-full space-y-4 rounded-2xl border border-slate-200 p-6 leading-relaxed text-slate-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-300">
                <p>
                  I build everything from e-commerce platforms to SaaS
                  tools, with an eye for clean UI and solid backend
                  architecture. Whether it{"'"}s a customer-facing
                  storefront or an internal dashboard, I like getting into
                  the details of how a product should feel to use.
                </p>
                <p>
                  Today I help startups and small businesses launch faster
                  — websites that convert, AI assistants that answer
                  customers 24/7, and automations that save hours every
                  week.
                </p>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 font-medium text-sky-500"
                >
                  See how I can help
                  <ArrowRightIcon
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>

        <BlurFade className="mt-4">
          <div className="rounded-2xl border border-slate-200 p-6 dark:border-white/10 dark:bg-white/[0.02]">
            <p className="mb-4 text-sm font-semibold">What I work with</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>

        <section className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Beyond work"
            title="When I'm not coding"
            center
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map(({ icon: Icon, title, description }, i) => (
              <BlurFade key={title} delay={(i % 3) * 0.08} className="h-full">
                <MagicCard className="h-full">
                  <div className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-200">
                      <Icon size={20} />
                    </div>
                    <h3 className="mb-1 font-semibold">{title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {description}
                    </p>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </section>
      </div>

      <section className="pb-8">
        <FinalCta />
      </section>
    </div>
  );
};

export default About;
