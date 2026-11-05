"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  BotIcon,
  WorkflowIcon,
  SparklesIcon,
  RocketIcon,
  ShoppingCartIcon,
  LayoutTemplateIcon,
  GaugeIcon,
  ServerIcon,
  LifeBuoyIcon,
  CheckIcon,
  ClockIcon,
  RepeatIcon,
  QuoteIcon,
  ArrowRightIcon,
  PlusIcon,
  ZapIcon,
  UserIcon,
  BadgeCheckIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { getWhatsAppLink } from "@/constant";
import {
  services,
  packages,
  retainer,
  steps,
  reasons,
  testimonials,
  faqs,
} from "@/constant/freelance";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { MagicCard } from "@/components/magic-card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { openChat } from "@/components/chat-widget";

const icons = {
  bot: BotIcon,
  workflow: WorkflowIcon,
  sparkles: SparklesIcon,
  rocket: RocketIcon,
  cart: ShoppingCartIcon,
  layout: LayoutTemplateIcon,
  gauge: GaugeIcon,
  server: ServerIcon,
  lifebuoy: LifeBuoyIcon,
};

const reasonIcons = [ZapIcon, UserIcon, BadgeCheckIcon, ShieldCheckIcon];

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) => (
  <BlurFade
    className={cn("mb-10 max-w-[640px]", center && "mx-auto text-center")}
  >
    {eyebrow && (
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-base text-slate-500 sm:text-lg dark:text-slate-400">
        {subtitle}
      </p>
    )}
  </BlurFade>
);

export const WhatsAppButton = ({
  message,
  children,
  variant = "primary",
  className = "",
}: {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) => (
  <Link target="_blank" href={getWhatsAppLink(message)} className="inline-flex">
    {variant === "primary" ? (
      <ShimmerButton className={cn("text-sm", className)}>
        <WhatsAppIcon size={16} />
        {children}
      </ShimmerButton>
    ) : (
      <span
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-medium transition-colors hover:border-green-500 hover:text-green-600 dark:border-white/15 dark:hover:text-green-400",
          className
        )}
      >
        <WhatsAppIcon size={16} />
        {children}
      </span>
    )}
  </Link>
);

export const ServiceGrid = ({ limit }: { limit?: number }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {services.slice(0, limit).map((service, i) => {
      const Icon = icons[service.icon];
      const isAi = "ai" in service && service.ai;
      return (
        <BlurFade key={service.title} delay={(i % 3) * 0.08} className="h-full">
          <MagicCard className="h-full">
            <div className="flex h-full flex-col p-6">
              <div className="mb-5 flex items-center justify-between">
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl",
                    isAi
                      ? "bg-gradient-to-br from-sky-500 to-fuchsia-500 text-white shadow-lg shadow-sky-500/25"
                      : "bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-200"
                  )}
                >
                  <Icon size={20} />
                </div>
                {isAi && (
                  <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky-600 dark:text-sky-400">
                    AI-powered
                  </span>
                )}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {service.description}
              </p>
              {service.icon === "bot" && (
                <button
                  type="button"
                  onClick={openChat}
                  className="group mt-4 inline-flex items-center gap-1.5 self-start text-sm font-medium text-sky-500"
                >
                  <SparklesIcon size={14} />
                  Try the live demo
                  <ArrowRightIcon
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              )}
            </div>
          </MagicCard>
        </BlurFade>
      );
    })}
  </div>
);

const Feature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2.5 text-sm">
    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-600 dark:text-green-400">
      <CheckIcon size={11} strokeWidth={3} />
    </span>
    {children}
  </li>
);

export const Packages = () => (
  <div>
    <div className="grid items-stretch gap-5 lg:grid-cols-3">
      {packages.map((pkg, i) => {
        const featured = "featured" in pkg && pkg.featured;
        return (
          <BlurFade key={pkg.name} delay={i * 0.08} className="h-full">
            <div
              className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-3xl border p-7",
                featured
                  ? "border-sky-500/40 bg-gradient-to-b from-sky-500/[0.08] to-fuchsia-500/[0.04] shadow-2xl shadow-sky-500/10"
                  : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02]"
              )}
            >
              {featured && <BorderBeam size={120} duration={8} />}
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
                {featured && (
                  <span className="rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {pkg.tagline}
              </p>
              <div className="my-6">
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {pkg.period}
                </p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {pkg.priceUsd}
                  </span>
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300">
                  <ClockIcon size={12} />
                  Delivered in {pkg.timeline}
                </p>
              </div>
              <ul className="mb-8 grow space-y-3">
                {pkg.features.map((feature) => (
                  <Feature key={feature}>{feature}</Feature>
                ))}
              </ul>
              {"demo" in pkg && pkg.demo && (
                <button
                  type="button"
                  onClick={openChat}
                  className="group mb-3 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-sky-500"
                >
                  <SparklesIcon size={14} />
                  Try a live AI assistant first
                  <ArrowRightIcon
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              )}
              <WhatsAppButton
                message={pkg.cta}
                variant={featured ? "primary" : "outline"}
                className="w-full"
              >
                Get a quote
              </WhatsAppButton>
            </div>
          </BlurFade>
        );
      })}
    </div>

    <BlurFade className="mt-5">
      <div className="relative overflow-hidden rounded-3xl border border-green-500/25 bg-gradient-to-br from-green-500/[0.08] via-transparent to-sky-500/[0.06] p-7 md:p-8">
        <DotPattern className="[mask-image:radial-gradient(400px_circle_at_right,white,transparent)]" />
        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-[520px]">
            <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-semibold text-green-700 dark:text-green-400">
              <RepeatIcon size={12} />
              Recurring
            </p>
            <h3 className="text-xl font-semibold">{retainer.name}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {retainer.description}
            </p>
            <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {retainer.features.map((feature) => (
                <Feature key={feature}>{feature}</Feature>
              ))}
            </ul>
          </div>
          <div className="shrink-0 md:text-right">
            <p className="flex items-baseline gap-1 md:justify-end">
              <span className="text-4xl font-bold tracking-tight">
                {retainer.price}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {retainer.period}
              </span>
            </p>
            <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
              or {retainer.priceUsd} {retainer.period}
            </p>
            <WhatsAppButton message={retainer.cta}>Start a retainer</WhatsAppButton>
          </div>
        </div>
      </div>
    </BlurFade>

    <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
      Starting prices. You get a fixed quote for your exact scope before any
      work begins.
    </p>
  </div>
);

export const Process = () => (
  <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    <motion.div
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute left-[12%] right-[12%] top-6 hidden h-px origin-left bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 lg:block"
    />
    {steps.map((step, i) => (
      <BlurFade key={step.title} delay={0.15 + i * 0.15}>
        <div className="relative text-center">
          <div className="relative mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold shadow-sm dark:border-white/10 dark:bg-[#0b0f19]">
            <span className="text-gradient">0{i + 1}</span>
          </div>
          <h3 className="mb-2 font-semibold">{step.title}</h3>
          <p className="mx-auto max-w-[240px] text-sm text-slate-500 dark:text-slate-400">
            {step.description}
          </p>
        </div>
      </BlurFade>
    ))}
  </div>
);

export const Reasons = () => (
  <div className="grid gap-4 sm:grid-cols-2">
    {reasons.map((reason, i) => {
      const Icon = reasonIcons[i % reasonIcons.length];
      return (
        <BlurFade key={reason.title} delay={(i % 2) * 0.08} className="h-full">
          <div className="flex h-full gap-4 rounded-2xl border border-slate-200 p-6 dark:border-white/10 dark:bg-white/[0.02]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
              <Icon size={18} />
            </div>
            <div>
              <h3 className="mb-1.5 font-semibold">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {reason.description}
              </p>
            </div>
          </div>
        </BlurFade>
      );
    })}
  </div>
);

export const Testimonials = () => {
  if (testimonials.length === 0) return null;
  return (
    <section className="py-16 sm:py-20">
      <SectionHeading eyebrow="Clients" title="What clients say" center />
      <div className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <BlurFade key={t.name} delay={(i % 2) * 0.08}>
            <figure className="h-full rounded-2xl border border-slate-200 p-6 dark:border-white/10 dark:bg-white/[0.02]">
              <QuoteIcon size={20} className="mb-3 text-sky-500" />
              <blockquote className="mb-4 leading-relaxed">{t.quote}</blockquote>
              <figcaption className="text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-slate-500 dark:text-slate-400"> · {t.role}</span>
              </figcaption>
            </figure>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-[760px] divide-y divide-slate-200 rounded-2xl border border-slate-200 dark:divide-white/10 dark:border-white/10">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-medium md:px-6"
            >
              {faq.question}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 dark:border-white/10"
              >
                <PlusIcon size={14} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500 md:px-6 dark:text-slate-400">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export const FinalCta = () => (
  <BlurFade>
    <div className="relative overflow-hidden rounded-3xl bg-[#0b0f19] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
      <DotPattern className="fill-white/15 dark:fill-white/15 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/40 via-indigo-500/40 to-fuchsia-500/40 blur-3xl" />
      <div className="relative">
        <h2 className="mx-auto max-w-[620px] text-3xl font-bold tracking-tight sm:text-5xl">
          Let{"'"}s build something that grows your business
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-slate-300">
          Tell me about your idea. You{"'"}ll get a reply the same day with
          next steps and a rough estimate. No commitment.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <WhatsAppButton message="Hi Navin, I have a project in mind and would like a quote.">
            Get a free quote
            <ArrowRightIcon
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </WhatsAppButton>
          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
          >
            Other ways to reach me
          </Link>
        </div>
      </div>
    </div>
  </BlurFade>
);
