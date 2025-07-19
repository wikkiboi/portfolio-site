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
    <div className="mb-12 divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400">
      <div className="flex justify-between p-4">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p>{description}</p>
      </div>
      {imageUrl && <Image src={imageUrl} alt={`Preview of ${name}`} />}
      <div className="flex divide-x items-center justify-center">
        {url ? (
          <a href={url} className="flex grow items-center justify-center p-4">
            <Globe className="mr-1" />
            Visit website
          </a>
        ) : (
          <>
            <a
              className="flex grow items-center justify-center text-muted-foreground p-4"
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
          className="flex grow items-center justify-center p-4"
        >
          <GitBranch className="mr-1" />
          View source code
        </a>
      </div>
    </div>
  );
}
