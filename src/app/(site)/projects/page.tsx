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
    <div className="pt-8 pb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Projects</h1>
      <ProjectGrid projects={projects} className="grid sm:grid-cols-2 gap-5" />
    </div>
  );
};

export default Projects;
