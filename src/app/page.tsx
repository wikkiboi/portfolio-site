import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Eye } from "lucide-react";
import Link from "next/link";
import Gmail from "../../public/gmail.svg";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col gap-6 max-w-prose mx-auto p-4" id="home">
      <p className="text-md">
        Full-stack web developer based in the SF Bay Area. Crafting web apps
        that not only work well but feel nice to use. I really like J-pop,
        TailwindCSS, Tetris, Linux, and clean, smooth UX. I use Arch, btw.
      </p>
      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        <a
          href="https://linkedin.com/in/wikki-rho"
          className="group flex items-center justify-between p-4 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
        >
          <span className="flex items-center gap-3">
            <SiLinkedin className="fill-[#0077B5] dark:fill-zinc-200" />
            LinkedIn
            <span className="-translate-x-4 text-zinc-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 dark:text-zinc-400">
              Follow my profile
            </span>
          </span>
          <ArrowUpRight
            strokeWidth={1.4}
            className="size-5 shrink-0 transition-all group-hover:rotate-45 dark:text-zinc-200"
          />
        </a>
        <a
          href="https://github.com/wikkiboi"
          className="group flex items-center justify-between p-4 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
        >
          <span className="flex items-center gap-3">
            <SiGithub />
            GitHub
            <span className="-translate-x-4 text-zinc-500 opacity-0 transition-all  group-hover:translate-x-0 group-hover:opacity-100 dark:text-zinc-400">
              Check out my code
            </span>
          </span>
          <ArrowUpRight
            strokeWidth={1.4}
            className="size-5 shrink-0 transition-all group-hover:rotate-45 dark:text-zinc-200"
          />
        </a>
        <a
          href="mailto:wikki.rho@gmail.com"
          className="group flex items-center justify-between p-4 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
        >
          <span className="flex items-center gap-3">
            <Image src={Gmail} alt={"GMail icon"} className="size-6.25" />
            Email
            <span className="-translate-x-4 text-zinc-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 dark:text-zinc-400">
              Send me a message
            </span>
          </span>
          <ArrowUpRight
            strokeWidth={1.4}
            className="size-5 shrink-0 transition-all group-hover:rotate-45 dark:text-zinc-200"
          />
        </a>
      </div>
      <div className="flex flex-row max-sm:flex-col-reverse gap-6">
        <Link
          className="flex flex-row items-center gap-1 mr-auto hover:underline hover:gap-2 px-0.5 transition-all"
          href="./about"
        >
          See more about me{" "}
          <ArrowUpRight strokeWidth={1.4} className="size-5 rotate-45" />
        </Link>
        <Link
          href="./projects"
          className="flex flex-row items-center justify-center gap-1 rounded bg-sky-300 p-3 text-sky-800 ring-1 ring-sky-500 transition-colors sm:hover:bg-sky-400 dark:bg-inherit dark:text-sky-500 dark:ring-sky-500 sm:sm:dark:hover:bg-zinc-800"
        >
          <Eye strokeWidth={1.4} className="size-5 max-sm:hidden" />
          <span className="text-nowrap">View my Work</span>
        </Link>
      </div>
    </main>
  );
}
