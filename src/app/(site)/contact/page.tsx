"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SendIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { getWhatsAppLink, WHATSAPP_NUMBER } from "@/constant";
import WhatsAppIcon from "@/components/whatsapp-icon";
import PageHero from "@/components/page-hero";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";

const contactLinks = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2)}`,
    href: getWhatsAppLink("Hi Navin, I found your portfolio and wanted to connect."),
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "codernavin@gmail.com",
    href: "mailto:codernavin@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/devnavin",
    href: "https://www.linkedin.com/in/devnavin/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/devnavinn",
    href: "https://github.com/devnavinn",
  },
];

const topics = [
  { label: "AI chatbot", message: "Hi Navin, I'd like an AI chatbot for my business. " },
  { label: "Automation", message: "Hi Navin, I'd like to automate part of my workflow with AI. " },
  { label: "Website", message: "Hi Navin, I need a new website / landing page. " },
  { label: "MVP / web app", message: "Hi Navin, I'd like to build an MVP / web app. " },
  { label: "E-commerce", message: "Hi Navin, I need an e-commerce store. " },
  { label: "Monthly retainer", message: "Hi Navin, I'm interested in the monthly developer retainer. " },
];

const nextSteps = [
  "I reply on WhatsApp the same day",
  "Quick call to understand your goals",
  "Fixed quote and timeline within 24h",
];

const Contact = () => {
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState<string | null>(null);

  const whatsappHref = getWhatsAppLink(
    message.trim() || "Hi Navin, I'd like to get in touch."
  );

  const pickTopic = (t: (typeof topics)[number]) => {
    setTopic(t.label);
    setMessage(t.message);
  };

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let{"'"}s <span className="text-gradient">talk</span> about your
            project
          </>
        }
        subtitle="The fastest way to reach me is WhatsApp. Pick a topic or write a quick note — it opens a chat with your message ready to send."
      />

      <div className="mx-auto grid max-w-5xl gap-5 pb-8 lg:grid-cols-[1.5fr_1fr]">
        <BlurFade className="h-full">
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/[0.03] md:p-8 dark:border-white/10 dark:bg-white/[0.02]">
            <BorderBeam size={140} duration={10} />
            <p className="mb-3 text-sm font-semibold">
              What can I help you with?
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => pickTopic(t)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm transition-all",
                    topic === t.label
                      ? "border-sky-500 bg-sky-500 text-white shadow-md shadow-sky-500/25"
                      : "border-slate-200 text-slate-600 hover:border-sky-500/50 hover:text-sky-500 dark:border-white/10 dark:text-slate-300"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <label htmlFor="message" className="mb-2 block text-sm font-semibold">
              Tell me about it
            </label>
            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Navin, I'm looking for help with..."
              className="min-h-[160px] w-full grow resize-none rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:focus:bg-white/[0.05]"
            />
            <div className="mt-5 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Opens WhatsApp — nothing is sent until you press send.
              </p>
              <Link target="_blank" href={whatsappHref} className="inline-flex">
                <ShimmerButton className="text-sm">
                  <SendIcon size={16} />
                  Send on WhatsApp
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </BlurFade>

        <div className="flex flex-col gap-3">
          {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
            <BlurFade key={label} delay={0.05 + i * 0.05}>
              <Link
                target="_blank"
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/5 dark:border-white/10 dark:bg-white/[0.02]"
              >
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                    label === "WhatsApp"
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                      : "bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-200"
                  )}
                >
                  <Icon size={18} />
                </div>
                <div className="min-w-0 grow">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="truncate font-medium">{value}</p>
                </div>
                <ArrowUpRightIcon
                  size={16}
                  className="shrink-0 text-slate-400 transition-all group-hover:rotate-45 group-hover:text-sky-500"
                />
              </Link>
            </BlurFade>
          ))}

          <BlurFade delay={0.3}>
            <div className="rounded-2xl border border-green-500/25 bg-gradient-to-br from-green-500/[0.08] to-sky-500/[0.05] p-5">
              <p className="mb-3 text-sm font-semibold">What happens next</p>
              <ol className="space-y-2.5">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold shadow-sm dark:bg-white/10">
                      <span className="text-gradient">{i + 1}</span>
                    </span>
                    <span className="text-slate-600 dark:text-slate-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
