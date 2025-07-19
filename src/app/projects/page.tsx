import { ReactNode } from "react";
import ProjectCard from "../../modules/project-card";

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
    description: "Anime Search Filter",
    imageUrl: "",
    githubUrl: "https://github.com/wikkiboi/zenbu",
    url: "https://zenbu.netlify.app",
    technologies: (
      <div>
        <span>Typescript</span>
      </div>
    ),
  },
  {
    name: "ClipTube",
    description: "A Video Sharing Platform",
    imageUrl: "",
    githubUrl: "https://github.com/wikkiboi/ClipTube",
    url: "https://clip-tube.vercel.app",
    technologies: (
      <div>
        <span>Typescript</span>
      </div>
    ),
  },
  {
    name: "Talkify",
    description: "A real-time chat platform",
    imageUrl: "",
    githubUrl: "https://github.com/wikkiboi/talkify",
    url: "",
    technologies: (
      <div>
        <span>Typescript</span>
      </div>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-prose mx-auto">
      <h1 className="text-center text-5xl py-3 mb-8">Projects</h1>

      {projects.map((project) => (
        <ProjectCard key={project.githubUrl} {...project} />
      ))}
    </main>
  );
}
