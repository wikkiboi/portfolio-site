import { ReactNode } from "react";
import ProjectCard from "../../modules/project-card";
import ToolIcon from "../../components/ui/tool-icon";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url?: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "zenbu",
    description:
      "Stay up to date on the latest anime with this index/search app optimized with Tanstack Router caching & prefetching. Browse for airing shows, top-ranked titles, and seasonal anime using dynamic filters for type, status, and more.",
    imageUrl: "/logos/zenbu.webp",
    githubUrl: "https://github.com/wikkiboi/zenbu",
    url: "https://zenbu.netlify.app",
    technologies: (
      <div className="flex flex-row gap-2">
        <ToolIcon className="bg-[#007ACC] text-zinc-100 ring-1 ring-zinc-600">
          TypeScript
        </ToolIcon>
        <ToolIcon className="bg-[#00D8FE] ring-1 ring-zinc-500">React</ToolIcon>
        <ToolIcon className="bg-[#38BDF9] ring-1 ring-zinc-500">
          TailwindCSS
        </ToolIcon>
      </div>
    ),
  },
  {
    name: "ClipTube",
    description:
      "A full-featured video-sharing platform where you can share and upload/manage videos through a studio interface. Features and UI are heavily referenced from YouTube.",
    imageUrl: "/logos/cliptube.webp",
    githubUrl: "https://github.com/wikkiboi/ClipTube",
    url: "https://clip-tube.vercel.app",
    technologies: (
      <div className="flex flex-row gap-2">
        <ToolIcon className="bg-[#007ACC] text-zinc-100 ring-1 ring-zinc-500 max-sm:text-[11px] my-auto">
          TypeScript
        </ToolIcon>
        <ToolIcon className="bg-black text-zinc-100 ring-1 ring-zinc-500 max-sm:text-[11px] my-auto">
          Next.js
        </ToolIcon>
        <ToolIcon className="ring-1 ring-zinc-300 max-sm:text-[11px] my-auto">
          ShadCN
        </ToolIcon>
        <ToolIcon className="bg-[#2F6792] text-zinc-100 ring-1 ring-zinc-500 max-sm:text-[11px] my-auto">
          PostgreSQL
        </ToolIcon>
      </div>
    ),
  },
  {
    name: "Talkify",
    description:
      "A full-stack messaging platform with direct messaging, server and channel-based communication, friend management, and real-time chat. Users can create or join servers via invite links, manage channels, and join in on conversations across multiple contexts.",
    imageUrl: "/logos/talkify.webp",
    githubUrl: "https://github.com/wikkiboi/talkify-app",
    url: "https://talkify.duckdns.org",
    technologies: (
      <div className="flex flex-row gap-2">
        <ToolIcon className="bg-[#00D8FE] ring-1 ring-zinc-500 max-sm:text-[11px] my-auto">
          React
        </ToolIcon>
        <ToolIcon className="bg-[#2B2A34] text-zinc-100 ring-1 ring-zinc-500 max-sm:text-[11px] my-auto">
          Express
        </ToolIcon>
        <ToolIcon className="bg-[#25706B] text-zinc-50 ring-1 ring-zinc-500 max-sm:text-[11px] my-auto">
          Socket.IO
        </ToolIcon>
        <ToolIcon className="bg-[#10AA57] ring-1 ring-zinc-500 max-sm:text-[11px] my-auto">
          MongoDB
        </ToolIcon>
      </div>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-prose mx-auto px-6">
      <h1 className="text-center text-5xl py-3 mb-8">Projects</h1>

      <div>
        {projects.map((project) => (
          <ProjectCard key={project.githubUrl} {...project} />
        ))}
      </div>
    </main>
  );
}
