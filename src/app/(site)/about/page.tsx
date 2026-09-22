import type { Metadata } from "next";
import Image from "next/image";
import {
  Bike,
  BookOpenText,
  MountainSnow,
  PenLine,
  Plane,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Navin Kumar — a full-stack developer building React, Next.js, and Node.js products, available for freelance web development work.",
  alternates: { canonical: "/about" },
};

const interests = [
  {
    icon: Bike,
    title: "Riding",
    description: "Weekends are for the open road, two wheels at a time.",
  },
  {
    icon: MountainSnow,
    title: "Mountains",
    description: "My favorite kind of destination, every single time.",
  },
  {
    icon: BookOpenText,
    title: "Reading",
    description: "Always somewhere in the middle of a book.",
  },
  {
    icon: PenLine,
    title: "Writing",
    description: "Thinking out loud, one page at a time.",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Planning the next trip somewhere new.",
  },
];

const facts = [
  { label: "Currently at", value: "21GenX" },
  { label: "Since", value: "Feb 2023" },
  { label: "Focus", value: "Full-Stack Web" },
];

const About = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="flex flex-col sm:flex-row gap-8 items-start mb-10">
        <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden shadow-lg -rotate-2">
          <Image
            src="/me.jpg"
            alt="Navin Kumar"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[560px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
            {"I'm"}{" "}
            <span className="text-sky-500">Navin Kumar</span>, a
            full-stack developer who{" "}
            <span className="inline-flex relative text-green-600 before:absolute before:inset-0 before:bg-green-200 dark:before:bg-green-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4">
              builds
            </span>{" "}
            things people actually use.
          </h1>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
            I work mainly with React, Next.js, Node.js, and MongoDB, and
            care about shipping things that work end to end — not just in
            a demo.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
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
      </div>

      <div className="max-w-[700px] space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-12">
        <p>
          I build everything from e-commerce platforms to SaaS tools, with
          an eye for clean UI and solid backend architecture. Whether{" "}
          {"it's"} a customer-facing storefront or an internal dashboard, I
          like getting into the details of how a product should feel to
          use.
        </p>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-5">Beyond Work</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ${
                i % 2 === 0 ? "-rotate-1" : "rotate-1"
              } hover:rotate-0`}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-sky-50 dark:bg-sky-500/10 text-sky-500 mb-3">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
