"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ZapIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "lucide-react";
import { projects } from "@/constant";
import ProjectGrid from "@/components/project-grid";
import {
  SectionHeading,
  WhatsAppButton,
  ServiceGrid,
  Packages,
  Process,
  Reasons,
  Testimonials,
  Faq,
  FinalCta,
} from "@/components/freelance-sections";
import { BlurFade } from "@/components/magicui/blur-fade";
import { WordRotate } from "@/components/magicui/word-rotate";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Marquee } from "@/components/magicui/marquee";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

const rotatingWords = [
  "AI chatbots",
  "SaaS MVPs",
  "automations",
  "online stores",
  "websites",
];

const guarantees = [
  { icon: ZapIcon, text: "AI-assisted, faster delivery" },
  { icon: ShieldCheckIcon, text: "You own 100% of the code" },
  { icon: ClockIcon, text: "Weekly progress demos" },
];

const stats = [
  { value: 3, suffix: "+", label: "Years shipping production apps" },
  { value: projects.length, suffix: "", label: "Live products launched" },
  { value: 24, suffix: "h", label: "Max reply time on WhatsApp" },
  { value: 100, suffix: "%", label: "Code ownership for you" },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "OpenAI API",
  "Claude API",
  "LangChain",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Tailwind CSS",
  "Stripe",
  "Razorpay",
  "Vercel",
  "AWS",
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative -mx-4 px-4 pb-16 pt-14 sm:-mx-6 sm:px-6 sm:pt-20">
        <DotPattern className="[mask-image:radial-gradient(520px_circle_at_top,white,transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/25 via-indigo-400/20 to-fuchsia-400/25 blur-3xl dark:from-sky-500/20 dark:via-indigo-500/15 dark:to-fuchsia-500/20" />

        <div className="relative mx-auto max-w-[820px] text-center">
          <BlurFade inView={false}>
            <Link
              href="/contact"
              className="group mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm backdrop-blur transition-colors hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <AnimatedShinyText>Available for new projects</AnimatedShinyText>
              <ArrowRightIcon
                size={14}
                className="text-slate-400 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </BlurFade>

          <BlurFade inView={false} delay={0.1}>
            <h1 className="mt-7 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              I build
              <span className="block">
                <WordRotate
                  words={rotatingWords}
                  className="text-gradient pb-2"
                />
              </span>
              that grow your business
            </h1>
          </BlurFade>

          <BlurFade inView={false} delay={0.2}>
            <p className="mx-auto mt-6 max-w-[620px] text-base text-slate-500 sm:text-lg dark:text-slate-400">
              Hi, I{"'"}m{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Navin
              </span>
              , a freelance full-stack & AI developer. I help startups and
              small businesses launch faster with websites that convert, AI
              that answers customers 24/7, and automations that save hours
              every week.
            </p>
          </BlurFade>

          <BlurFade inView={false} delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                message="Hi Navin, I'd like a free quote for my project."
                className="!px-7 !py-3.5 !text-base"
              >
                Get a free quote
              </WhatsAppButton>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-7 py-3.5 font-medium backdrop-blur transition-colors hover:border-slate-300 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/30"
              >
                See pricing
              </Link>
            </div>
          </BlurFade>

          <BlurFade inView={false} delay={0.4}>
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/me.jpg"
                  alt="Navin Kumar"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-[#07090f]"
                  priority
                />
                <p className="text-left text-sm leading-tight">
                  <span className="font-semibold">Navin Kumar</span>
                  <br />
                  <span className="text-slate-500 dark:text-slate-400">
                    Full-stack developer at 21GenX
                  </span>
                </p>
              </div>
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                {guarantees.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-1.5">
                    <Icon size={14} className="text-green-500" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Stats */}
      <BlurFade>
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-4 dark:border-white/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 text-center ${
                i % 2 === 0 ? "border-r" : ""
              } ${i < 2 ? "border-b md:border-b-0" : ""} ${
                i === 1 ? "md:border-r" : ""
              } border-slate-200 dark:border-white/10`}
            >
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                <NumberTicker value={stat.value} delay={0.2} />
                <span className="text-gradient">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* Tech marquee */}
      <div className="relative mt-12">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-slate-400">
          Built with modern, proven tools
        </p>
        <Marquee pauseOnHover className="[--duration:35s]">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-[#07090f]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-[#07090f]" />
      </div>

      <section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything you need to <span className="text-gradient">launch & grow</span>
            </>
          }
          subtitle="Pick one outcome or combine them. Every project is built to bring you leads, sales, or saved time."
          center
        />
        <ServiceGrid limit={6} />
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-medium text-sky-500"
          >
            Explore all services
            <ArrowRightIcon
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Selected work"
          title="Products I've built and shipped"
          subtitle="Live products in production used by real customers, not just mockups."
          center
        />
        <ProjectGrid
          projects={projects}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        />
      </section>

      <Testimonials />

      <section id="pricing" className="scroll-mt-24 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Know what you'll pay before we start. Need something custom? Message me and I'll quote it."
          center
        />
        <Packages />
      </section>

      <section className="py-16 sm:py-20">
        <SectionHeading eyebrow="Why me" title="Why clients hire me" center />
        <Reasons />
      </section>

      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Process"
          title="From first message to launch"
          center
        />
        <Process />
      </section>

      <section className="py-16 sm:py-20">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" center />
        <Faq />
      </section>

      <section className="pb-8 pt-8">
        <FinalCta />
      </section>
    </div>
  );
}
