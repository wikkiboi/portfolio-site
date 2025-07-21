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
      "Stay up to date on the latest anime with this index/search app. Browse for currently airing shows, top-ranked titles, and seasonal anime using dynamic filters for type, status, and more. Who knows, you might find your next favorite series here.",
    imageUrl: "",
    githubUrl: "https://github.com/wikkiboi/zenbu",
    url: "https://zenbu.netlify.app",
    technologies: (
      <div className="flex flex-row gap-2">
        <ToolIcon className="bg-[#007ACC] text-zinc-100">TypeScript</ToolIcon>
        <ToolIcon className="bg-[#00D8FE]">React</ToolIcon>
        <ToolIcon className="bg-[#38BDF9]">TailwindCSS</ToolIcon>
      </div>
    ),
  },
  {
    name: "ClipTube",
    description:
      "A full-featured video-sharing platform where users can create an account and upload/manage videos through a studio interface. Users can also engage with content through subscriptions, playlists, and watch history. It also features video search and basic analytics. Features and UI are heavily referenced from YouTube.",
    imageUrl: "",
    githubUrl: "https://github.com/wikkiboi/ClipTube",
    url: "https://clip-tube.vercel.app",
    technologies: (
      <div className="flex flex-row gap-2">
        <ToolIcon className="bg-[#007ACC] text-zinc-100">TypeScript</ToolIcon>
        <ToolIcon className="bg-black text-zinc-100">Next.js</ToolIcon>
        <ToolIcon className="ring-1 ring-zinc-300">ShadCN</ToolIcon>
        <ToolIcon className="bg-[#2F6792] text-zinc-100">PostgreSQL</ToolIcon>
      </div>
    ),
  },
  {
    name: "Talkify",
    description:
      "A full-stack messaging platform with direct messaging, server and channel-based communication, friend management, and real-time chat. Users can create or join servers via invite links, manage channels, and join in on conversations across multiple contexts.",
    imageUrl: "",
    githubUrl: "https://github.com/wikkiboi/talkify-app",
    url: "",
    technologies: (
      <div className="flex flex-row gap-2">
        <ToolIcon className="bg-[#00D8FE]">React</ToolIcon>
        <ToolIcon className="bg-[#2B2A34] text-zinc-100">Express</ToolIcon>
        <ToolIcon className="bg-[#25706B] text-zinc-50">Socket.io</ToolIcon>
        <ToolIcon className="bg-[#10AA57]">MongoDB</ToolIcon>
      </div>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-prose mx-auto px-6">
      <h1 className="text-center text-5xl py-3 mb-12">Projects</h1>

      {projects.map((project) => (
        <ProjectCard key={project.githubUrl} {...project} />
      ))}
    </main>
  );
}
