"use client";

import React from "react";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/magic-card";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const ProjectCard = ({ data }: any) => {
  const { icon, title, description, url } = data;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <Card className="odd:-rotate-1 even:rotate-1 rounded-xl relative hover:rotate-0 hover:shadow-lg transition-[transform,box-shadow] duration-700 hover:duration-150 ease-in-out">
        <MagicCard className="rounded-xl">
          <Link target="_blank" href={url}>
            <CardHeader>
              <div className="w-10 h-10">
                <Image
                  className="w-full h-full object-contain"
                  width={50}
                  height={50}
                  src={icon}
                  alt={title}
                />
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="line-clamp-4">
                {description}
              </CardDescription>
            </CardHeader>
            <div className="absolute bottom-2 right-5">
              <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <MoveRightIcon size={24} className="text-sky-500" />
              </motion.div>
            </div>
          </Link>
        </MagicCard>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
