"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { CircleAlert, GitBranch, Globe } from "lucide-react";
import { Tooltip } from "react-tooltip";

interface ProjectCardProps {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url?: string;
  technologies: ReactNode;
}

export default function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="mb-12 divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex justify-between max-sm:flex-col max-sm:items-center gap-5 p-4">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4 text-lg">{description}</p>
      </div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`Preview of ${name}`}
          width={800}
          height={0}
          style={{ height: "auto" }}
        />
      )}
      <div className="flex items-center justify-center divide-x divide-zinc-400 dark:divide-zinc-500">
        {url ? (
          <a
            href={url}
            className="flex grow items-center justify-center p-4 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="mr-1" />
            Visit website
          </a>
        ) : (
          <>
            <a
              className="flex grow items-center justify-center text-muted-foreground p-4 cursor-default"
              id="not-available"
            >
              <CircleAlert className="mr-1" /> Visit website
            </a>
            <Tooltip
              anchorSelect="#not-available"
              content="Website not available"
            />
          </>
        )}
        <a
          href={githubUrl}
          className="flex grow items-center justify-center p-4 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
        >
          <GitBranch className="mr-1" />
          View source code
        </a>
      </div>
    </div>
  );
}
