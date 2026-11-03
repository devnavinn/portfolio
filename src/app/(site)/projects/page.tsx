import type { Metadata } from "next";
import { projects } from "@/constant";
import ProjectGrid from "@/components/project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of web apps, e-commerce platforms, and tools built by Navin Kumar using React, Next.js, and Node.js.",
  alternates: { canonical: "/projects" },
};

const Projects = () => {
  return (
    <div className="pt-12 pb-8 sm:pt-16">
      <h1 className="mb-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Selected <span className="text-gradient">work</span>
      </h1>
      <p className="mb-10 max-w-[600px] text-slate-500 dark:text-slate-400">
        Live products I{"'"}ve designed, built, and shipped to real users.
      </p>
      <ProjectGrid
        projects={projects}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      />
    </div>
  );
};

export default Projects;
