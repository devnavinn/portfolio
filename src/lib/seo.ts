export const SITE_URL = "https://www.devnavin.in";
export const SITE_NAME = "Navin Kumar";
export const AUTHOR_NAME = "Navin Kumar";

export const DEFAULT_TITLE =
  "Navin Kumar — Freelance Full-Stack & AI Developer";

export const DEFAULT_DESCRIPTION =
  "Hire Navin Kumar, a freelance full-stack & AI developer — AI chatbots, workflow automation, MVPs, e-commerce sites, and high-converting websites at fixed prices. Get a free quote on WhatsApp.";

export const DEFAULT_KEYWORDS = [
  "Navin Kumar",
  "full-stack developer",
  "freelance web developer",
  "freelance AI developer",
  "AI chatbot development",
  "AI automation freelancer",
  "hire AI developer India",
  "MVP development",
  "hire full stack developer",
  "Next.js developer for hire",
  "React developer freelance",
  "e-commerce website development",
  "freelance developer India",
  "Node.js developer",
];

export const SOCIAL_LINKS = {
  github: "https://github.com/devnavinn",
  linkedin: "https://www.linkedin.com/in/devnavin/",
  email: "codernavin@gmail.com",
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR_NAME,
  url: SITE_URL,
  jobTitle: "Freelance Full-Stack & AI Developer",
  image: `${SITE_URL}/me.jpg`,
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  worksFor: {
    "@type": "Organization",
    name: "21GenX",
  },
} as const;
