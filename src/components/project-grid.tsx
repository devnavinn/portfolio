"use client";

import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import ProjectCard from "@/components/project-card";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const ProjectGrid = ({
  projects,
  className,
}: {
  projects: any[];
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects?.map((d) => (
        <ProjectCard key={uuidv4()} data={d} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
