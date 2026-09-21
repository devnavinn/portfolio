import { projects } from "@/constant";
import ProjectGrid from "@/components/project-grid";

const Projects = () => {
  return (
    <div className="pt-8 pb-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Projects</h1>
      <ProjectGrid projects={projects} className="grid sm:grid-cols-2 gap-5" />
    </div>
  );
};

export default Projects;
