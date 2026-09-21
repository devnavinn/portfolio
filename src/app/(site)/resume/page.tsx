"use client";

import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constant";

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
    title: "BCA, Computer and Information Sciences and Support Services",
    school: "BFIT Dehradun",
    period: "Aug 2019 — Aug 2022",
    grade: "A",
    logo: "/education/bfit-dehradun.webp",
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
  <h2 className="text-sm md:text-base font-extrabold uppercase tracking-wider text-slate-900 dark:text-slate-100 print:text-black pb-1.5 mb-4 border-b border-slate-300 dark:border-slate-700 print:border-slate-400">
    {children}
  </h2>
);

const Resume = () => {
  return (
    <div className="">
      <div className="max-w-[830px] mx-auto text-slate-900 dark:text-slate-100 print:text-black overflow-hidden">
        <div className="py-8 md:py-10 print:py-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              Navin Kumar
            </h1>
            <p className="text-lg md:text-xl font-bold uppercase tracking-wide text-slate-800 dark:text-slate-200 print:text-slate-800 mt-1">
              Full Stack Developer
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-slate-600 dark:text-slate-400 print:text-slate-700 mt-3">
              <Link
                target="_blank"
                href="https://github.com/devnavinn"
                className="flex gap-2 items-center hover:text-rose-800 dark:hover:text-rose-400"
              >
                <GithubIcon size={16} />
                <span className="text-sm">github.com/devnavinn</span>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/devnavin/"
                className="flex gap-2 items-center hover:text-rose-800 dark:hover:text-rose-400"
              >
                <LinkedinIcon size={16} />
                <span className="text-sm">linkedin.com/in/devnavin</span>
              </Link>
              <Link
                href="mailto:codernavin@gmail.com"
                className="flex gap-2 items-center hover:text-rose-800 dark:hover:text-rose-400"
              >
                <MailIcon size={16} />
                <span className="text-sm">codernavin@gmail.com</span>
              </Link>
            </div>
            <hr className="border-t border-slate-300 dark:border-slate-700 print:border-slate-400 mt-5" />
          </div>

          <section className="mb-8 print:break-inside-avoid">
            <SectionHeading>Summary</SectionHeading>
            <p className="text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed">
              {summary}
            </p>
          </section>

          <section className="mb-8 print:break-inside-avoid">
            <SectionHeading>Experience</SectionHeading>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 print:text-black">
                      {item.role}, {item.company}
                    </h3>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 print:text-slate-800 shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-5 mt-2 space-y-1 text-slate-700 dark:text-slate-300 print:text-slate-800">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8 print:break-inside-avoid">
            <SectionHeading>Projects</SectionHeading>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.title}>
                  <Link
                    target="_blank"
                    href={project.url}
                    className="font-bold text-slate-900 dark:text-slate-100 print:text-black hover:text-rose-800 dark:hover:text-rose-400"
                  >
                    {project.title}
                  </Link>
                  <p className="text-slate-700 dark:text-slate-300 print:text-slate-800 mt-1">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8 print:break-inside-avoid">
            <SectionHeading>Education</SectionHeading>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.title} className="flex gap-4">
                  {item.logo && (
                    <div className="w-12 h-12 shrink-0 rounded border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.logo}
                        alt={`${item.school} logo`}
                        width={48}
                        height={48}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 print:text-black">
                        {item.title}
                      </h3>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 print:text-slate-800 shrink-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 print:text-slate-800">
                      {item.school}
                      {item.grade && (
                        <>
                          {" "}
                          <span className="text-slate-500 dark:text-slate-400 print:text-slate-600">
                            · Grade: {item.grade}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8 print:break-inside-avoid">
            <SectionHeading>Certifications</SectionHeading>
            <ul className="list-disc list-outside pl-5 space-y-1 text-slate-700 dark:text-slate-300 print:text-slate-800">
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
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 print:text-slate-600 mb-2">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 print:text-slate-800"
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
      </div>
    </div>
  );
};

export default Resume;
