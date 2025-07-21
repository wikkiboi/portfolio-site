import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 max-w-prose mx-auto p-4" id="home">
      <p className="text-md">
        Full-stack web developer based in the SF Bay Area. Crafting web apps
        that not only work well but feel nice to use. I like J-pop, TailwindCSS,
        Tetris, Linux, and the{" "}
        <a
          href="https://en.wikipedia.org/wiki/Face_with_Tears_of_Joy_emoji"
          className="text-blue-600 hover:text-blue-800"
        >
          joy emoji
        </a>
        . I use Arch, btw.
      </p>
      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400">
        <a
          href="https://linkedin.com/in/wikki-rho"
          className="group flex items-center justify-between p-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <span className="flex items-center gap-3">
            <SiLinkedin className="fill-[#0077B5] dark:fill-zinc-200" />
            LinkedIn
            <span className="-translate-x-4 text-zinc-500 opacity-0 transition-all max-sm:hidden sm:group-hover:translate-x-0 sm:group-hover:opacity-100 dark:text-zinc-400">
              Follow my profile
            </span>
          </span>
          <ArrowUpRight
            strokeWidth={1.4}
            className="size-5 shrink-0 transition-all sm:group-hover:rotate-45 dark:text-zinc-200"
          />
        </a>
        <a
          href="https://github.com/wikkiboi"
          className="group flex items-center justify-between p-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <span className="flex items-center gap-3">
            <SiGithub />
            GitHub
            <span className="-translate-x-4 text-zinc-500 opacity-0 transition-all max-sm:hidden sm:group-hover:translate-x-0 sm:group-hover:opacity-100 dark:text-zinc-400">
              Check out my code
            </span>
          </span>
          <ArrowUpRight
            strokeWidth={1.4}
            className="size-5 shrink-0 transition-all sm:group-hover:rotate-45 dark:text-zinc-200"
          />
        </a>
      </div>
      <div className="mt-12 mx-auto">
        <div className="mt-12 text-center">
          <Link
            href="./projects"
            className="px-12 py-5 text-xs font-bold uppercase rounded-lg border-2 h-full inline-block leading-0.5 transform duration-200 hover:-translate-y-0.5 active:-translate-y-0.25 shadow
            "
          >
            Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
