"use client";

import ProjectCard from "@/components/project-card";
import { BlurFade } from "@/components/magicui/blur-fade";

type Project = React.ComponentProps<typeof ProjectCard>["data"];

const ProjectGrid = ({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) => {
  return (
    <div className={className}>
      {projects.map((project, i) => (
        <BlurFade key={project.title} delay={(i % 3) * 0.08} className="h-full">
          <ProjectCard data={project} />
        </BlurFade>
      ))}
    </div>
  );
};

export default ProjectGrid;
