"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { MagicCard } from "@/components/magic-card";

type Project = {
  icon: string;
  title: string;
  description: string;
  url: string;
};

const ProjectCard = ({ data }: { data: Project }) => {
  const { icon, title, description, url } = data;
  const [logoFailed, setLogoFailed] = useState(false);
  const host = url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <Link target="_blank" href={url} className="group block h-full">
      <MagicCard className="h-full">
        <div className="flex h-full flex-col p-6">
          <div className="mb-5 flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2 dark:border-white/10 dark:bg-white/5">
              {logoFailed ? (
                <span className="text-gradient text-xl font-bold">
                  {title.charAt(0)}
                </span>
              ) : (
                <Image
                  className="h-full w-full object-contain"
                  width={48}
                  height={48}
                  src={icon}
                  alt={title}
                  onError={() => setLogoFailed(true)}
                />
              )}
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white dark:border-white/10">
              <ArrowUpRightIcon size={16} />
            </span>
          </div>
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <p className="mb-5 line-clamp-3 grow text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {description}
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Live · {host}
          </div>
        </div>
      </MagicCard>
    </Link>
  );
};

export default ProjectCard;
