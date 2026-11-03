// Single source of truth for the freelance offer shown on the home and
// services pages. Edit prices, packages, and testimonials here.

const services = [
  {
    icon: "bot",
    title: "AI Chatbots & Assistants",
    description:
      "Customer-support and sales assistants trained on your docs, products, and FAQs — on your website or WhatsApp, answering 24/7.",
    ai: true,
  },
  {
    icon: "workflow",
    title: "AI Workflow Automation",
    description:
      "Automate lead follow-ups, data entry, reports, and emails by connecting AI to your CRM, sheets, and tools. Save hours every week.",
    ai: true,
  },
  {
    icon: "sparkles",
    title: "AI Features in Your App",
    description:
      "Add smart search, content generation, document summaries, or recommendations to an existing product using modern LLM APIs.",
    ai: true,
  },
  {
    icon: "rocket",
    title: "MVPs & SaaS Products",
    description:
      "Go from idea to a launched, paying-customer-ready product in weeks — auth, payments, dashboard, and admin included.",
  },
  {
    icon: "cart",
    title: "E-commerce Websites",
    description:
      "Fast storefronts with catalog, cart, Razorpay/Stripe checkout, and order management, built to convert visitors into buyers.",
  },
  {
    icon: "layout",
    title: "High-Converting Landing Pages",
    description:
      "SEO-ready, mobile-first pages with clear messaging and lead capture — built to turn ad and search traffic into enquiries.",
  },
  {
    icon: "gauge",
    title: "Redesign & Speed Fixes",
    description:
      "Modernize an outdated site, fix slow load times and mobile layout issues, and improve Core Web Vitals and SEO.",
  },
  {
    icon: "server",
    title: "APIs, Backend & Integrations",
    description:
      "REST APIs, databases (MongoDB, PostgreSQL), payment gateways, auth, and third-party services wired in reliably.",
  },
  {
    icon: "lifebuoy",
    title: "Ongoing Maintenance",
    description:
      "A developer on call each month for fixes, new features, updates, and uptime — without the cost of a full-time hire.",
  },
] as const;

// Starting prices. Final quote depends on scope.
const packages = [
  {
    name: "Launch",
    tagline: "Landing page or business website",
    price: "₹15,000",
    priceUsd: "$199",
    period: "starting at",
    timeline: "5–7 days",
    features: [
      "Up to 5 responsive pages",
      "On-page SEO + Google Analytics",
      "WhatsApp / contact lead capture",
      "Deployment + custom domain",
      "2 rounds of revisions",
    ],
    cta: "Hi Navin, I'm interested in the Launch package for a website.",
  },
  {
    name: "AI Build",
    tagline: "AI chatbot, automation, or AI feature",
    price: "₹40,000",
    priceUsd: "$499",
    period: "starting at",
    timeline: "1–3 weeks",
    features: [
      "Chatbot trained on your own data",
      "Website or WhatsApp integration",
      "Automations with your existing tools",
      "Admin view of conversations / runs",
      "30 days of post-launch support",
    ],
    cta: "Hi Navin, I'm interested in the AI Build package.",
    featured: true,
  },
  {
    name: "Product / MVP",
    tagline: "Full-stack web app or e-commerce",
    price: "₹75,000",
    priceUsd: "$999",
    period: "starting at",
    timeline: "3–6 weeks",
    features: [
      "Auth, database, and admin dashboard",
      "Payments (Razorpay / Stripe)",
      "Weekly demos and progress updates",
      "Production deployment + CI/CD",
      "30 days of post-launch support",
    ],
    cta: "Hi Navin, I'm interested in the Product / MVP package.",
  },
] as const;

const retainer = {
  name: "Monthly Developer Retainer",
  price: "₹25,000",
  priceUsd: "$349",
  period: "/ month",
  description:
    "Your own developer on call. Bug fixes, new features, AI upgrades, performance, and updates every month — cancel anytime.",
  features: [
    "Priority response within 24 hours",
    "Dedicated monthly development hours",
    "Monthly report of work done",
    "No long-term contract",
  ],
  cta: "Hi Navin, I'd like to know more about the monthly retainer.",
} as const;

const steps = [
  {
    title: "Free 15-min call",
    description: "Tell me your goal on WhatsApp. I'll reply the same day with questions and ideas.",
  },
  {
    title: "Fixed quote & plan",
    description: "Clear scope, timeline, and a fixed price — no surprise bills. 50% upfront to start.",
  },
  {
    title: "Build with weekly demos",
    description: "You see real progress every week and give feedback before anything is final.",
  },
  {
    title: "Launch & support",
    description: "I deploy, hand over everything, and stay available for fixes after launch.",
  },
] as const;

const reasons = [
  {
    title: "Ship faster with AI-assisted development",
    description:
      "I use modern AI tooling in my workflow, so you get production code in less time and at a lower cost than a traditional agency.",
  },
  {
    title: "One developer, end to end",
    description:
      "Design, frontend, backend, AI, and deployment handled by one person — no hand-offs, no lost context.",
  },
  {
    title: "Production experience, not just demos",
    description:
      "Full-stack developer at 21GenX since 2023, shipping real e-commerce and web products used by real customers.",
  },
  {
    title: "Fixed prices, clear communication",
    description:
      "Upfront quotes, weekly updates on WhatsApp, and you own 100% of the code when we're done.",
  },
] as const;

// Add real client quotes here — the section stays hidden while this is empty.
const testimonials: { quote: string; name: string; role: string }[] = [];

const faqs = [
  {
    question: "How much does a project cost?",
    answer:
      "Websites start at ₹15,000 ($199), AI chatbots and automations at ₹40,000 ($499), and full web apps or MVPs at ₹75,000 ($999). After a short call I'll send a fixed, upfront quote for your exact scope.",
  },
  {
    question: "Can you add AI to my existing website or app?",
    answer:
      "Yes. I can add AI chatbots, smart search, content generation, document summaries, and automations to most existing websites and apps without rebuilding them.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes — I work remotely with clients worldwide over WhatsApp, email, and video calls, and plan timelines around your time zone. International pricing is in USD.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A landing page usually takes 5–7 days, an AI chatbot or automation 1–3 weeks, and a full web app or e-commerce site 3–6 weeks depending on complexity.",
  },
  {
    question: "How do payments work?",
    answer:
      "50% upfront to start and 50% on delivery for fixed-price projects. Retainers are billed monthly in advance and can be cancelled anytime.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Every project includes post-launch support. For ongoing work, the monthly retainer gives you priority fixes, new features, and updates every month.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. After final payment you get full ownership of the code, repository, and deployment accounts.",
  },
] as const;

export { services, packages, retainer, steps, reasons, testimonials, faqs };
