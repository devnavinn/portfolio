import { projects } from "@/constant";
import ProjectCard from "@/components/project-card";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  return (
    <div className="pt-8 pb-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-5">
        {projects?.map((d) => (
          <ProjectCard key={uuidv4()} data={d} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
