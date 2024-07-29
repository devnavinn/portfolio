import React from "react";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectCard = ({ data }: any) => {
  const { icon, title, description, url } = data;
  return (
    <Card
      className={`odd:-rotate-1 even:rotate-1 rounded-xl relative hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out`}
    >
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
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <div className="absolute bottom-2 right-5">
          <MoveRightIcon size={24} className="text-sky-500" />
        </div>
      </Link>
    </Card>
  );
};

export default ProjectCard;
