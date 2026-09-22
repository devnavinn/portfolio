export const SITE_URL = "https://www.devnavin.in";
export const SITE_NAME = "Navin Kumar";
export const AUTHOR_NAME = "Navin Kumar";

export const DEFAULT_TITLE =
  "Navin Kumar — Full-Stack Developer & Freelance Web Developer";

export const DEFAULT_DESCRIPTION =
  "Navin Kumar is a full-stack developer available for freelance work — Next.js and React web apps, e-commerce sites, APIs, redesigns, deployment, and ongoing support. Message on WhatsApp for a quote.";

export const DEFAULT_KEYWORDS = [
  "Navin Kumar",
  "full-stack developer",
  "freelance web developer",
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
  jobTitle: "Full-Stack Developer",
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
