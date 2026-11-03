"use client";

import Link from "next/link";
import { services, packages, retainer, faqs } from "@/constant/freelance";
import { SITE_URL, AUTHOR_NAME } from "@/lib/seo";
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
import PageHero from "@/components/page-hero";

const toInr = (price: string) => price.replace(/[^\d]/g, "");

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR_NAME,
  url: `${SITE_URL}/services`,
  makesOffer: [
    ...services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        areaServed: "Worldwide",
        provider: { "@type": "Person", name: AUTHOR_NAME },
      },
    })),
    ...[...packages, retainer].map((pkg) => ({
      "@type": "Offer",
      name: pkg.name,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: toInr(pkg.price),
        priceCurrency: "INR",
      },
    })),
  ],
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

const Services = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Services & pricing"
        title={
          <>
            Websites, apps & <span className="text-gradient">AI solutions</span>{" "}
            that pay for themselves
          </>
        }
        subtitle="Fixed-price freelance development for startups and small businesses. Tell me what you want to achieve and I'll suggest the fastest, most cost-effective way to build it."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton message="Hi Navin, I'd like a free quote for my project.">
            Get a free quote
          </WhatsAppButton>
          <Link
            href="#pricing"
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-medium transition-colors hover:border-slate-300 dark:border-white/15 dark:hover:border-white/30"
          >
            See pricing
          </Link>
        </div>
      </PageHero>

      <section className="py-12 sm:py-16">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you"
          center
        />
        <ServiceGrid />
      </section>

      <section id="pricing" className="scroll-mt-24 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Pricing"
          title="Packages & monthly retainer"
          subtitle="Fixed starting prices for one-off projects, or a monthly plan if you need a developer on call."
          center
        />
        <Packages />
      </section>

      <Testimonials />

      <section className="py-16 sm:py-20">
        <SectionHeading eyebrow="Why me" title="Why clients hire me" center />
        <Reasons />
      </section>

      <section className="py-16 sm:py-20">
        <SectionHeading eyebrow="Process" title="How it works" center />
        <Process />
      </section>

      <section className="py-16 sm:py-20">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" center />
        <Faq />
      </section>

      <section className="pb-8 pt-8">
        <FinalCta />
      </section>
    </div>
  );
};

export default Services;
