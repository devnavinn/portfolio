// Seeds 10 client-problem blog posts (founder / business-owner keywords).
// Idempotent: upserts by slug, so re-running updates content instead of duplicating.
//
// Run:  node --env-file=.env prisma/seed-client-posts.mjs

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const CTA = `
---

**Want a fixed quote for your project?** I'm Navin Kumar, a full-stack and AI developer. I build websites, AI chatbots, and web apps for businesses in India and abroad at fixed, upfront prices. [See the packages](/services#pricing) or [send me a message](/contact). I reply the same day.
`;

const posts = [
  {
    slug: "whatsapp-ai-chatbot-cost-india-2026",
    title: "How Much Does a Custom WhatsApp AI Chatbot Cost in India? (2026 Breakdown)",
    daysAgo: 1,
    content: `
If you run a business in India, your customers are already on WhatsApp. A chatbot that answers their questions there, at 2 AM, in Hindi or English, can take a lot of load off your team. The first question every founder asks me is the same: **what will it actually cost?**

Here's an honest breakdown of what goes into the price, so you can compare quotes and avoid surprises.

## The short answer

- **Simple FAQ / menu bot (no AI):** roughly ₹10,000–₹25,000 one-time
- **AI chatbot trained on your data (website or WhatsApp):** roughly ₹40,000–₹1,00,000 one-time
- **AI bot connected to your CRM, orders, or bookings:** ₹1,00,000 and up, depending on integrations

On top of the build, you pay **running costs every month**: WhatsApp messaging fees, AI usage, and hosting. For most small and mid-sized businesses these come to a few thousand rupees a month.

My own **AI Build** package starts at **₹40,000** and includes a chatbot trained on your data, website or WhatsApp integration, an admin view of conversations, and 30 days of support.

## What you're actually paying for

### 1. The WhatsApp Business Platform setup

You can't run a proper bot on the regular WhatsApp Business app. You need the **WhatsApp Business Platform (Cloud API)** from Meta, which means:

- A verified Meta Business account
- A dedicated phone number (it can't stay active on the normal WhatsApp app)
- Approved message templates for anything you send first (order updates, reminders, offers)

Setup itself is free from Meta, but getting verification and templates approved takes some back-and-forth. A good developer handles this for you.

### 2. Meta's per-message fees

Meta charges per message, and the rate depends on the category: **marketing** messages cost the most, **utility** messages (order updates, OTPs) cost much less, and replies inside a customer-started conversation are usually free or very cheap. Rates change, so always check Meta's current India rate card. The practical takeaway: **a support bot that mostly replies to customers is cheap to run**. A bot that blasts promotions is not.

### 3. The AI model

The "brain" of the bot is a large language model. You pay per use, based on how much text goes in and out. For a typical small business handling a few thousand conversations a month, AI costs are often **₹1,000–₹5,000/month**. Heavy usage or long documents push this up.

### 4. Training it on your business

This is where quality comes from. The bot needs your product catalog, prices, policies, FAQs, and tone of voice. A well-built bot:

- Answers only from your data, so it doesn't make things up
- Knows when to hand over to a human
- Handles Hinglish and typos gracefully

Cheap bots skip this step, and it shows.

### 5. Integrations

Pulling live order status from Shopify, booking appointments in Google Calendar, or pushing leads into a Google Sheet or CRM: each integration adds scope. This is the biggest swing factor in price.

### 6. Hosting and maintenance

The bot needs a server to run on, plus someone to fix things when Meta changes an API. Budget for a small monthly cost or a maintenance retainer.

## Red flags in chatbot quotes

- **"Unlimited messages forever for ₹5,000"**: someone is paying Meta's fees, and eventually it will be you.
- **No admin panel**: you should be able to read every conversation.
- **You don't own the code or the WhatsApp number**: make sure both are in your name.
- **No human handover**: customers get stuck in loops and leave.

## Is it worth it?

If your team answers the same 20 questions every day, almost certainly yes. A bot that handles even half of those frees up hours each day and replies instantly, which customers notice. Start with one clear job (support FAQs, lead qualification, or order status) and expand once it's working.
${CTA}`,
  },
  {
    slug: "nextjs-vs-shopify-indian-d2c-brands",
    title: "Next.js vs Shopify for Indian D2C Brands: Which Should You Choose?",
    daysAgo: 4,
    content: `
You're launching or scaling a D2C brand in India, and you've narrowed it down to two paths: **Shopify**, the default choice, or a **custom store built with Next.js**. Both can work well. The right choice depends on your stage, your budget, and how different you want your store to be.

## Choose Shopify if...

- **You're just starting out** and want to test product-market fit quickly
- You have **under a few hundred orders a month**
- Your catalog and checkout are fairly standard
- You don't have a developer and don't want one yet

Shopify gets you live in days. Themes, apps, inventory, and Indian payment gateways like Razorpay are all plug-and-play.

### The hidden costs of Shopify

- **Monthly plan fees** that grow as you upgrade
- **App subscriptions** add up fast. Reviews, upsells, COD verification, WhatsApp notifications, and loyalty are often separate apps, each billed monthly
- **Transaction fees** if you don't use Shopify Payments (which isn't available for all Indian merchants)
- **Speed**: every app adds scripts, and many Shopify stores load slowly on mid-range Android phones over 4G, which is exactly how most Indian shoppers browse

## Choose Next.js (custom) if...

- You're doing **steady volume** and app fees are a real line item
- You need **custom flows**: build-your-own bundles, subscriptions, B2B pricing, regional pricing, custom COD rules
- **Speed and SEO matter** because you get a lot of organic or ad traffic
- You want to **own your stack** with no platform lock-in

A custom Next.js store can load very fast, rank well, and do exactly what your business needs without paying for ten apps.

### The trade-offs of going custom

- **Higher upfront cost.** A solid custom store is a real project, not a theme install
- **You need a developer** for changes (or a retainer)
- **Admin tools** need to be built or integrated: orders, inventory, and returns

## The middle path: headless Shopify

You can keep Shopify as the backend (products, orders, inventory) and build a fast **Next.js storefront** on top. You get Shopify's reliable admin with a custom, fast frontend. It's a popular choice for brands that have outgrown themes but don't want to rebuild order management.

## A simple decision guide

- **Pre-launch / under ₹5L monthly revenue:** Shopify with a clean theme and few apps
- **Growing, app bills hurting, store feels slow:** headless Shopify + Next.js
- **Unique business model or B2B + D2C:** fully custom Next.js with Razorpay

## Cost ballpark

- **Shopify setup by a freelancer:** ₹15,000–₹50,000, plus monthly fees
- **Headless or custom Next.js store:** typically starts around ₹75,000, scaling with features

My **Product / MVP** package starts at **₹75,000** and includes auth, database, an admin dashboard, Razorpay or Stripe payments, and production deployment.
${CTA}`,
  },
  {
    slug: "mvp-development-cost-india-2026",
    title: "How Much Does It Cost to Build an MVP in India in 2026?",
    daysAgo: 8,
    content: `
You have a product idea and you want to get it in front of real users. Quotes you've received range from ₹50,000 to ₹25 lakh, and you have no idea which one is "right". Here's how MVP pricing actually works in India in 2026.

## Typical ranges

- **No-code prototype (Bubble, Glide, etc.):** ₹20,000–₹80,000. Good for validation, painful to scale
- **Freelance-built custom MVP:** ₹75,000–₹4,00,000
- **Small agency MVP:** ₹3,00,000–₹10,00,000
- **Large agency / funded-startup MVP:** ₹10,00,000+

The spread is huge because "MVP" means very different things to different people.

## What drives the cost

### Number of user types

A product where only customers log in is simpler than one with customers, vendors, and admins, each with their own dashboard. **Every user type roughly adds a new app's worth of screens.**

### Core features

Almost every MVP needs these, and they're the baseline:

- Sign-up and login (email, Google, or OTP)
- A database and the main "thing" your product does
- An admin panel to see users and data
- Payments, if you charge from day one

Then come the expensive extras: **real-time chat, maps and tracking, video, complex search, AI features, mobile apps**.

### Web vs mobile

A responsive web app works on every phone and is cheaper to build and update. **Native iOS and Android apps can double the budget.** For most MVPs, start with a fast web app (it can even be installable as a PWA) and go native once you've proven demand.

### Design

Using a clean component library is fast and affordable. Fully custom branding and illustrations add time.

## How to keep your MVP budget sane

1. **Write down the one job your product does.** Everything else is version 2.
2. **Cut user types.** Can you handle vendors manually via WhatsApp for the first 3 months?
3. **Use managed services.** Auth, payments (Razorpay), email, and hosting are all solved problems. Don't pay to rebuild them.
4. **Insist on a fixed scope and fixed price.** Hourly billing on a fuzzy scope is how ₹2L becomes ₹6L.
5. **Make sure you own the code.** It should live in your GitHub account from day one.

## Timeline

A focused MVP should take **3–6 weeks**, not 6 months. If a quote says 4+ months for a first version, the scope is probably too big.

## What I offer

My **Product / MVP** package starts at **₹75,000 ($999)** with a 3–6 week timeline: auth, database, admin dashboard, payments, weekly demos, production deployment, and 30 days of post-launch support. You get a fixed quote after a short call, and you own 100% of the code.
${CTA}`,
  },
  {
    slug: "website-cost-small-business-india-2026",
    title: "How Much Does a Website Cost for a Small Business in India in 2026?",
    daysAgo: 12,
    content: `
Whether you run a clinic, a coaching institute, a CA firm, a restaurant, or a local manufacturing unit, a good website is often the first place customers check before they call you. Here's what a business website really costs in India today, and what you should get for your money.

## Price ranges you'll see

- **DIY builders (Wix, website builders from domain sellers):** ₹3,000–₹15,000/year, but you do all the work
- **Basic template site from a freelancer:** ₹5,000–₹15,000
- **Professional custom business site (5–8 pages):** ₹15,000–₹50,000
- **Agency-built site with branding and copywriting:** ₹50,000–₹2,00,000+

## What a ₹15,000+ website should include

If you're paying for a professional site, expect:

- **Mobile-first design.** Most of your visitors are on phones
- **Fast loading**, ideally under 2–3 seconds on 4G
- **Basic on-page SEO**: proper titles, descriptions, headings, and a Google Business Profile link
- **WhatsApp and call buttons** so enquiries are one tap away
- **A contact or enquiry form** that actually reaches your inbox
- **Google Analytics** so you know where visitors come from
- **Your own domain and hosting set up**, in your name

## Recurring costs to budget for

- **Domain:** around ₹800–₹1,500 per year for a .in or .com
- **Hosting:** free to ₹5,000/year for most small business sites on modern platforms
- **Business email:** optional, roughly ₹100–₹150 per user per month
- **Updates and maintenance:** either do it yourself or pay a developer as needed

## Where cheap websites go wrong

- **Slow, bloated templates** that load in 8 seconds and lose visitors
- **The developer owns the domain**, so you're stuck with them forever
- **No SEO basics**, so Google never shows you for local searches
- **Broken contact forms** nobody notices for months

## What's worth paying extra for

- **Good copy.** Clear words about what you do, who it's for, and why you
- **Speed.** It directly affects both Google rankings and enquiries
- **Lead capture.** A WhatsApp click-to-chat button often outperforms forms in India

## My Launch package

The **Launch** package starts at **₹15,000 ($199)** and is delivered in 5–7 days: up to 5 responsive pages, on-page SEO with Google Analytics, WhatsApp and contact lead capture, deployment on your own custom domain, and 2 rounds of revisions.
${CTA}`,
  },
  {
    slug: "freelancer-vs-agency-vs-in-house-developer-india",
    title: "Freelancer vs Agency vs In-House Developer: What's Right for Your Indian Startup?",
    daysAgo: 16,
    content: `
You need software built. You can hire a freelancer, sign with an agency, or bring on a full-time developer. Each has real advantages, and the wrong choice can cost you months. Here's a practical comparison from someone who has worked in-house and freelance.

## Freelancer

**Best for:** MVPs, websites, AI chatbots, well-defined projects, and ongoing maintenance.

**Pros**

- Lowest cost for the quality you get, with no agency overhead
- You talk directly to the person writing the code
- Fast decisions and fast iteration
- Flexible: pay per project or a monthly retainer

**Cons**

- One person's capacity is limited
- Quality varies enormously, so vetting matters
- Risk if they disappear (protect yourself: own the code and accounts from day one)

## Agency

**Best for:** larger projects that need design, development, QA, and project management all at once.

**Pros**

- A full team: designers, developers, testers, PMs
- Can handle bigger scopes and tighter deadlines
- Some continuity if one person leaves

**Cons**

- Typically 2–4x the cost of a freelancer for similar work
- You often talk to an account manager, not the developers
- Junior developers may do the work while seniors win the pitch

## In-house developer

**Best for:** when software *is* your product and you need someone full-time for the long haul.

**Pros**

- Deep product context that builds over time
- Fully dedicated to your priorities

**Cons**

- A good full-stack developer in India costs a significant annual salary, plus hiring time, equipment, and benefits
- Hiring takes 1–3 months
- One hire rarely covers frontend, backend, DevOps, and AI equally well
- Overkill if you only need a few weeks of work every quarter

## A simple rule of thumb

- **Need a website, MVP, or AI tool built in weeks?** Freelancer
- **Big multi-platform build with a fixed launch date and budget?** Agency
- **Proven product, need daily development forever?** In-house (often with a freelancer to bridge until you hire)

## The option most founders miss: a retainer

A **monthly retainer** with a freelancer gives you a developer on call for fixes, features, and upgrades without a full-time salary. My **Monthly Developer Retainer** starts at **₹25,000/month**, with priority 24-hour responses, dedicated hours, a monthly report, and no long-term contract.
${CTA}`,
  },
  {
    slug: "ai-automation-ideas-small-business-india",
    title: "7 AI Automations That Save Indian Small Businesses 10+ Hours a Week",
    daysAgo: 20,
    content: `
"AI" sounds like something for big tech companies, but some of the most useful AI tools are small, boring automations that remove repetitive work. Here are seven I see paying off quickly for Indian small and mid-sized businesses.

## 1. Lead follow-up on WhatsApp

A lead fills a form on your website or Instagram. Within a minute, an AI assistant sends a personalized WhatsApp message, answers basic questions, and books a call. **Speed to lead is everything.** Leads contacted within minutes are far more likely to convert than leads contacted the next day.

## 2. Customer support FAQ bot

Delivery times, return policy, pricing, timings, location: an AI bot trained on your own information answers these instantly on your website or WhatsApp, and hands complex queries to a human.

## 3. Invoice and bill data entry

Snap a photo or forward a PDF invoice. AI extracts the vendor, GSTIN, amount, date, and line items, and puts them into Google Sheets, Tally-ready CSV, or your accounting tool. Accountants and traders save hours every week on this alone.

## 4. Daily sales and operations reports

Instead of someone compiling numbers every evening, an automation pulls data from your store, sheets, or CRM and sends a plain-English summary to the owner's WhatsApp each morning: what sold, what's low on stock, which leads are pending.

## 5. Product descriptions and listings

For e-commerce sellers on Amazon, Flipkart, Meesho, or their own store: generate consistent, SEO-friendly titles and descriptions for hundreds of products from a spreadsheet of basic specs. A human reviews; AI does the first draft.

## 6. Review and feedback analysis

Feed in Google reviews, survey responses, or support chats. AI groups them into themes (late delivery, packaging, pricing complaints) so you know what to fix first.

## 7. Document Q&A for your team

Upload your SOPs, policy documents, and product manuals. Staff ask questions in plain language and get answers with the source page. Great for onboarding new employees.

## How to start without wasting money

1. **Pick the task your team hates most** that happens every day
2. **Measure the time it takes now**, so you know the payoff
3. **Automate just that one task** and run it for a month
4. **Keep a human in the loop** for anything customer-facing or financial

## What it costs

Most single automations like these fall in the **₹40,000–₹1,00,000** range to build, plus small monthly AI and hosting costs. My **AI Build** package starts at **₹40,000** and includes integrations with your existing tools and 30 days of support.
${CTA}`,
  },
  {
    slug: "software-project-brief-template-accurate-quote",
    title: "How to Write a Project Brief That Gets You an Accurate Software Quote",
    daysAgo: 24,
    content: `
"How much for an app like Swiggy?" is impossible to quote. Not because developers are difficult, but because the answer could be ₹1 lakh or ₹1 crore depending on what you actually mean. A short, clear brief gets you accurate, comparable quotes and saves weeks of back-and-forth.

Here's a simple template you can copy.

## 1. The problem (2–3 sentences)

What's broken or missing today? Who suffers from it?

> *Example: Our 3 clinics book appointments by phone. Receptionists spend 4 hours a day on calls, and we lose patients who can't get through.*

## 2. The users

List each type of person who will use the system:

- Patients: book, reschedule, and get reminders
- Receptionists: view and manage the day's schedule
- Owner: see bookings and no-shows across clinics

## 3. Must-have features (version 1)

Be ruthless. Only what's needed to launch:

- Online booking with available slots
- WhatsApp confirmation and reminder
- Admin calendar view

## 4. Nice-to-haves (later)

Write these down separately so developers can quote them as phase 2:

- Online payment of consultation fee
- Patient history and prescriptions

## 5. Integrations

What existing tools must it connect to? Google Calendar, Razorpay, Tally, Shopify, a CRM, WhatsApp, an existing website?

## 6. References

Two or three apps or websites you like, and **what specifically** you like about each. "The booking flow of X" is far more useful than "make it like X".

## 7. Budget range and deadline

Sharing a range isn't a weakness. It lets a good developer tell you what's realistic within it, or suggest a smaller first version.

## 8. Who owns what

State that you'll own the code, domain, hosting, and accounts. Any serious developer will agree.

## What to look for in the quotes you get back

- A **fixed price** tied to a **clear scope** list
- A **timeline with milestones** and demos
- What **post-launch support** is included
- Clear **payment terms** (for example, 50% upfront, 50% on delivery)

If a quote doesn't break things down, ask for it. If they can't, that tells you something.
${CTA}`,
  },
  {
    slug: "wordpress-vs-custom-nextjs-website-india",
    title: "WordPress vs Custom Next.js Website: What Should Indian Businesses Choose?",
    daysAgo: 28,
    content: `
WordPress powers a huge share of the web, and many Indian businesses run on it. Modern frameworks like Next.js are what fast-growing startups use. Which one makes sense for your business website?

## WordPress: the good

- **Huge ecosystem** of themes and plugins
- **Easy content editing** for non-technical teams
- **Cheap to start**, with many developers available
- Great for **blog-heavy** or content-heavy sites

## WordPress: the problems I see most often

- **Slow pages.** Heavy themes plus a dozen plugins often mean poor mobile performance
- **Security issues.** Outdated plugins are one of the most common ways small business sites get hacked
- **Maintenance burden.** Core, theme, and plugin updates that occasionally break things
- **Cheap shared hosting** that slows down further under traffic

None of these are unfixable, but they need ongoing attention that many small businesses don't give.

## Custom Next.js: the good

- **Very fast** by default, which helps Google rankings and conversions
- **Secure.** No plugin zoo to keep patched
- **Low hosting cost.** Many business sites run free or nearly free on modern platforms
- **Room to grow.** The same codebase can add a customer portal, booking system, or AI chatbot later

## Custom Next.js: the trade-offs

- Content edits need either a **developer** or a **headless CMS** (an editing dashboard connected to the site)
- **Higher upfront cost** than installing a theme
- Fewer developers to choose from than WordPress

## When to choose which

**Choose WordPress if:**

- You publish lots of content and your team edits it daily
- Budget is very tight and the site is mostly informational
- You'll actually keep plugins and hosting maintained

**Choose Next.js if:**

- Speed, SEO, and conversions matter, for example you run Google Ads
- You want low maintenance and strong security
- You plan to add app-like features (dashboards, bookings, AI) later
- Your current WordPress site is slow, and you're tired of fixing it

## Already on WordPress and it's slow?

You don't always need a full rebuild. Sometimes trimming plugins, optimizing images, and moving hosting helps a lot. Sometimes a rebuild is cheaper in the long run. A quick audit tells you which.
${CTA}`,
  },
  {
    slug: "add-ai-to-existing-website-without-rebuilding",
    title: "Can You Add AI to Your Existing Website Without Rebuilding It?",
    daysAgo: 32,
    content: `
Short answer: **yes, almost always.** You don't need to throw away your current website or app to add AI features. Most AI features plug into what you already have, whether it's WordPress, Shopify, a custom PHP site, or a React app.

## AI features you can add to an existing site

### 1. An AI chat assistant

A chat widget trained on your products, services, FAQs, and policies. It answers visitors instantly, captures leads, and hands off to WhatsApp or a human when needed. It's usually added with a small script tag, just like adding Google Analytics.

### 2. Smart search

Regular site search fails when customers type "something for dry skin under 500" or misspell product names. AI-powered search understands intent and returns relevant results.

### 3. Content and description generation

An admin-side tool that drafts product descriptions, blog outlines, or email copy in your brand voice. Your team edits and publishes.

### 4. Document summarization and Q&A

Customers or staff upload PDFs (contracts, reports, manuals) and ask questions about them. Useful for legal, finance, real estate, and education businesses.

### 5. Recommendations

"Customers who bought this also liked..." or personalized course or product suggestions based on behaviour.

### 6. Form and lead qualification

AI reads incoming enquiries, tags them by intent and urgency, and routes hot leads to sales immediately.

## How it works technically (in plain English)

The AI runs as a **separate small service** that talks to your existing site. Your site sends it a question; it looks up the relevant information from your data and asks an AI model to write an answer; the answer comes back to your site. Your current site barely changes.

## What to watch out for

- **Accuracy.** The AI must answer from *your* data and say "I don't know" rather than guess
- **Privacy.** Don't send sensitive customer data to AI providers without care and consent
- **Cost control.** Add rate limits so a bot or spammer can't run up your AI bill
- **Measurement.** Track whether it actually increases leads or reduces support load

## Cost and timeline

Adding a single AI feature to an existing site typically takes **1–3 weeks**. My **AI Build** package starts at **₹40,000 ($499)** and covers a chatbot or AI feature trained on your data, integration with your current site or WhatsApp, an admin view, and 30 days of support.
${CTA}`,
  },
  {
    slug: "slow-website-losing-customers-india",
    title: "Is Your Slow Website Losing You Customers? A Guide for Indian Businesses",
    daysAgo: 36,
    content: `
Most of your customers visit your website on a mid-range Android phone, on mobile data, often while doing something else. If your page takes 6–8 seconds to load, many of them leave before they see what you sell. Speed isn't a technical vanity metric. **It's revenue.**

## Why speed matters more in India

- **Mobile-first traffic.** The large majority of Indian web traffic is on phones
- **Variable networks.** 4G and 5G speeds fluctuate a lot between cities, buildings, and times of day
- **Budget devices.** Heavy JavaScript that feels fine on an iPhone can crawl on a ₹12,000 phone
- **Google ranks on it.** Core Web Vitals are part of how Google evaluates pages

## How to check your site in 2 minutes

1. Open **PageSpeed Insights** (pagespeed.web.dev) and enter your URL
2. Look at the **mobile** score, not desktop
3. Check the three Core Web Vitals:
   - **LCP** (how fast the main content appears): aim for under 2.5 seconds
   - **INP** (how quickly the page responds to taps): aim for under 200 ms
   - **CLS** (how much the layout jumps around): aim for under 0.1

If you're in the red on mobile, you're very likely losing visitors.

## The most common causes I find

- **Huge images.** A 4 MB banner photo straight from a phone camera. This is the number one culprit. (Free tools like [FileGo's image compressor](https://filego.in/tools/image-tools/image-compressor) can shrink images dramatically without visible quality loss.)
- **Too many plugins or apps**, each loading its own scripts
- **Chat widgets, pop-ups, and trackers** all loading at once
- **Cheap shared hosting** with slow server response
- **Unoptimized fonts** and sliders on the homepage
- **No caching or CDN**

## Quick wins you can do today

- Compress and resize every image, and use modern formats like WebP
- Remove plugins and apps you don't actively use
- Delay chat widgets and pop-ups until the page has loaded
- Replace homepage sliders with a single strong image and headline

## When you need a developer

If your site is still slow after the quick wins, the problem is usually structural: the theme, the platform, or the hosting. That's when a performance audit, or a rebuild on a modern fast stack, pays for itself through better rankings, lower ad costs, and more enquiries.

I offer **redesign and speed-fix** work for existing sites, from targeted Core Web Vitals fixes to full rebuilds on Next.js.
${CTA}`,
  },
];

async function main() {
  const now = Date.now();
  for (const p of posts) {
    const content = p.content.trim();
    const publishedAt = new Date(now - p.daysAgo * 24 * 60 * 60 * 1000);
    await db.post.upsert({
      where: { slug: p.slug },
      create: { slug: p.slug, title: p.title, content, published: true, publishedAt },
      update: { title: p.title, content },
    });
    console.log(`✓ ${p.slug}`);
  }
  console.log(`\nSeeded ${posts.length} posts.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
