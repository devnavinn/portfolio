"use client";

import Image from "next/image";
import { PT_Sans } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/constant";
import ProjectGrid from "@/components/project-grid";
import { Button } from "@/components/ui/button";
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  FileTextIcon,
  ArrowRightIcon,
} from "lucide-react";

const lato = PT_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const facts = [
  { label: "Currently at", value: "21GenX" },
  { label: "Since", value: "Feb 2023" },
  { label: "Focus", value: "Full-Stack Web" },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      <div className="max-w-[700px]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="pt-8 pb-10"
        >
          <Image
            src="/profile-banner.webp"
            alt="Profile Banner"
            width={1500}
            height={500}
            className="rounded-2xl shadow-lg"
            priority
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className={`${lato.className} mb-2 text-xl `}>
            Hi, {`I'm`}{" "}
            <span className="text-sky-500 after:bg-sky-500">Navin Kumar</span>
          </p>
          <h1
            className={`${lato.className} text-3xl md:text-4xl lg:text-5xl  leading-none font-aspekta mb-5 font-semibold`}
          >
            I make{" "}
            <span className="inline-flex relative text-green-600 before:absolute before:inset-0 before:bg-green-200 dark:before:bg-green-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4">
              {" "}
              full-stack
            </span>{" "}
            products that poeple <span className="text-pink-400">love</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            {"I'm"} a full-stack developer with experience in building web
            applications using modern technologies like React, Next.js,
            Node.js, and MongoDB.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mt-6"
        >
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-2"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {fact.label}
              </p>
              <p className="font-semibold">{fact.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-3 mt-6"
        >
          <Button asChild>
            <Link href="/resume">
              <FileTextIcon size={16} className="mr-2" />
              View Resume
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">
              See Projects
              <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
        <div className="grow">
          <div className="w-full">
            <div className="space-y-10">
              <ul className="flex flex-wrap gap-10 mt-[37px] text-slate-500 dark:text-slate-400">
                <li>
                  <Link
                    target="_blank"
                    href="https://github.com/devnavinn"
                    className="flex gap-2 items-center hover:scale-125 hover:text-sky-500 transition-transform"
                  >
                    <GithubIcon size={24} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/devnavin/"
                    className="flex gap-2 items-center hover:scale-125 hover:text-sky-500 transition-transform"
                  >
                    <LinkedinIcon size={24} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:codernavin@gmail.com"
                    className="flex gap-2 items-center hover:scale-125 hover:text-sky-500 transition-transform"
                  >
                    <MailIcon size={24} />
                  </Link>
                </li>
              </ul>

              <div>
                <h2 className={`${lato.className} text-xl font-[650] mb-4`}>
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h1 className={`${lato.className}  text-xl font-[650] mb-5`}>
                  Latest Projects
                </h1>
                <ProjectGrid
                  projects={projects}
                  className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5"
                />
                <div className="mt-6">
                  See a list of all my projects{" "}
                  <span>
                    <Link className="text-sky-500" href="/projects">
                      On my projects page
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
