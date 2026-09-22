"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2Icon,
  ShoppingCartIcon,
  LayoutTemplateIcon,
  ServerIcon,
  GaugeIcon,
  LifeBuoyIcon,
  RocketIcon,
  PlugZapIcon,
  SearchIcon,
  LightbulbIcon,
  ArrowRightIcon,
} from "lucide-react";
import { getWhatsAppLink } from "@/constant";
import { SITE_URL, AUTHOR_NAME } from "@/lib/seo";
import WhatsAppIcon from "@/components/whatsapp-icon";

const services = [
  {
    icon: Code2Icon,
    title: "Full-Stack Web Apps",
    description:
      "End-to-end web applications built with React, Next.js, and Node.js — from database schema to deployment.",
  },
  {
    icon: ShoppingCartIcon,
    title: "E-commerce Websites",
    description:
      "Storefronts with product catalogs, cart, and secure checkout, tailored to how your business actually sells.",
  },
  {
    icon: LayoutTemplateIcon,
    title: "Landing Pages & Portfolios",
    description:
      "Fast, responsive, SEO-friendly pages that make a strong first impression and convert visitors.",
  },
  {
    icon: ServerIcon,
    title: "APIs & Backend Systems",
    description:
      "REST APIs, auth, and database design (MongoDB, PostgreSQL) built to be reliable and easy to extend.",
  },
  {
    icon: GaugeIcon,
    title: "Redesign & Performance",
    description:
      "Modernizing an existing site's UI or fixing slow load times, layout issues, and mobile responsiveness.",
  },
  {
    icon: LifeBuoyIcon,
    title: "Maintenance & Support",
    description:
      "Ongoing bug fixes, feature additions, and support for projects already in production.",
  },
  {
    icon: RocketIcon,
    title: "Deployment & DevOps",
    description:
      "Hosting setup and deployment on Vercel/AWS, custom domains, environment configs, and CI/CD pipelines.",
  },
  {
    icon: PlugZapIcon,
    title: "Third-Party Integrations",
    description:
      "Payment gateways (Razorpay, Stripe), auth providers, email/SMS APIs, and other services wired into your app.",
  },
  {
    icon: SearchIcon,
    title: "SEO & Analytics Setup",
    description:
      "On-page SEO, sitemaps, structured data, and analytics (GA4, Search Console) so people can actually find your site.",
  },
  {
    icon: LightbulbIcon,
    title: "Technical Consulting",
    description:
      "Architecture reviews, code audits, and advice on picking the right stack before you start building.",
  },
];

const steps = [
  { title: "Message me", description: "Tell me about your project on WhatsApp or email." },
  { title: "Scope & quote", description: "I'll confirm scope, timeline, and a fair price." },
  { title: "Build & ship", description: "Regular updates while I build, then a clean handoff." },
];

const faqs = [
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes — I work remotely with clients worldwide. Communication happens over WhatsApp, email, or video calls, and timelines account for time zone differences.",
  },
  {
    question: "What's your typical pricing for a project?",
    answer:
      "Pricing depends on scope — a landing page costs less than a full e-commerce platform. Message me with your requirements on WhatsApp and I'll send a fair, upfront quote.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A landing page usually takes 3-5 days, while a full-stack web app or e-commerce site can take 3-6 weeks depending on complexity.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes — I offer ongoing maintenance and support after your project goes live, including bug fixes, performance tweaks, and new features.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "Mainly React, Next.js, Node.js, MongoDB, and PostgreSQL — the same production stack I use for e-commerce and full-stack apps.",
  },
];

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR_NAME,
  url: `${SITE_URL}/services`,
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      areaServed: "Worldwide",
      provider: { "@type": "Person", name: AUTHOR_NAME },
    },
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  const whatsappLink = getWhatsAppLink(
    "Hi Navin, I'd like to discuss a freelance project."
  );

  return (
    <div className="pt-8 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="max-w-[700px] mb-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
          Freelance{" "}
          <span className="inline-flex relative text-green-600 before:absolute before:inset-0 before:bg-green-200 dark:before:bg-green-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4">
            services
          </span>{" "}
          for your next project
        </h1>
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
          I take on a limited number of freelance projects — web apps,
          e-commerce sites, and full-stack builds. If you have an idea or a
          problem to solve, let{"'"}s talk.
        </p>
        <div className="mt-6">
          <Link
            target="_blank"
            href={whatsappLink}
            className="inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 font-medium transition-colors"
          >
            <WhatsAppIcon size={18} />
            Message on WhatsApp
          </Link>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {services.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-sky-50 dark:bg-sky-500/10 text-sky-500 mb-3">
              <Icon size={18} />
            </div>
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mb-14">
        <h2 className="text-lg sm:text-xl font-semibold mb-5">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-xl border border-slate-200 dark:border-slate-800 p-5"
            >
              <p className="text-xs font-semibold text-sky-500 mb-2">
                Step {i + 1}
              </p>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-lg sm:text-xl font-semibold mb-5">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 dark:border-slate-800 p-4 md:p-5"
            >
              <summary className="cursor-pointer list-none font-medium marker:content-none flex items-center justify-between gap-4">
                {faq.question}
                <ArrowRightIcon
                  size={16}
                  className="shrink-0 text-slate-400 transition-transform group-open:rotate-90"
                />
              </summary>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-1">
            Have a project in mind?
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Drop me a message on WhatsApp and I{"'"}ll get back to you quickly.
          </p>
        </div>
        <Link
          target="_blank"
          href={whatsappLink}
          className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 font-medium transition-colors"
        >
          <WhatsAppIcon size={18} />
          Let{"'"}s talk
          <ArrowRightIcon
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default Services;
