"use client";

import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { projects } from "@/constant";
import { Button } from "@/components/ui/button";

const summary =
  "Full Stack Developer with hands-on experience building and shipping production web applications end to end — from responsive front-ends to REST APIs and database design. Comfortable owning a feature from planning through deployment, with a focus on clean, maintainable code.";

const experience = [
  {
    role: "Full Stack Developer",
    company: "21GenX",
    period: "Feb 2023 — Present",
    points: [
      "Developed and maintain a customer-facing e-commerce platform (21genx.com) using React, Next.js, Node.js, and MongoDB.",
      "Built responsive, accessible UI components and pages, and integrated them with backend REST APIs.",
      "Implemented core commerce flows including product browsing, cart management, and secure checkout.",
      "Worked across the stack — from database schema design to deployment — collaborating on feature planning and code reviews.",
    ],
  },
];

const education = [
  {
    title: "Full Stack Web Development",
    school: "Coursera",
    period: "Completed",
    description:
      "Coursework covering front-end and back-end web development, including React, Node.js, and database design.",
  },
];

const certifications = [
  {
    title: "Full Stack Web Development Certificate",
    issuer: "Coursera",
  },
];

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "REST APIs", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    label: "Tools & Infra",
    skills: ["Git", "Vercel", "AWS", "Monorepo"],
  },
];

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
    {children}
  </h2>
);

const Resume = () => {
  return (
    <div className="pt-8 pb-16 max-w-[700px] print:text-black print:pt-0">
      <div className="mb-10">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
          <h1 className="text-3xl md:text-4xl font-semibold">Navin Kumar</h1>
        </div>
        <p className="text-lg text-slate-500 dark:text-slate-400 print:text-slate-600 mb-4">
          Full Stack Developer
        </p>
        <div className="flex flex-wrap gap-5 text-slate-500 dark:text-slate-400 print:text-slate-600 mb-5">
          <Link
            target="_blank"
            href="https://github.com/devnavinn"
            className="flex gap-2 items-center hover:text-sky-500"
          >
            <GithubIcon size={18} />
            <span className="text-sm">github.com/devnavinn</span>
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/devnavin/"
            className="flex gap-2 items-center hover:text-sky-500"
          >
            <LinkedinIcon size={18} />
            <span className="text-sm">linkedin.com/in/devnavin</span>
          </Link>
          <Link
            href="mailto:codernavin@gmail.com"
            className="flex gap-2 items-center hover:text-sky-500"
          >
            <MailIcon size={18} />
            <span className="text-sm">codernavin@gmail.com</span>
          </Link>
        </div>
        <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
          {summary}
        </p>
      </div>

      <section className="mb-10 print:break-inside-avoid">
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-6">
          {experience.map((item) => (
            <div key={item.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  {item.role} · {item.company}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {item.period}
                </span>
              </div>
              <ul className="list-disc list-outside pl-5 mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 print:break-inside-avoid">
        <SectionHeading>Projects</SectionHeading>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.title}>
              <Link
                target="_blank"
                href={project.url}
                className="font-semibold hover:text-sky-500"
              >
                {project.title}
              </Link>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 print:break-inside-avoid">
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-6">
          {education.map((item) => (
            <div key={item.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  {item.title} · {item.school}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {item.period}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 print:break-inside-avoid">
        <SectionHeading>Certifications</SectionHeading>
        <ul className="list-disc list-outside pl-5 space-y-1 text-slate-600 dark:text-slate-400">
          {certifications.map((cert) => (
            <li key={cert.title}>
              {cert.title} — {cert.issuer}
            </li>
          ))}
        </ul>
      </section>

      <section className="print:break-inside-avoid">
        <SectionHeading>Skills</SectionHeading>
        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
