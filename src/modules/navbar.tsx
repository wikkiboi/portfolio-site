"use client";

import { cn } from "@sglara/cn";
import { ChevronLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = ["About", "Projects", "Contact"];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { theme, setTheme } = useTheme();
  const toggleMode = () => setTheme(theme == "light" ? "dark" : "light");

  return (
    <nav className="flex items-center justify-between py-4 px-2 w-full max-sm:flex-col gap-4">
      <Link
        href="/"
        className={cn(
          "flex items-center text-xl my-auto transition-colors cursor-pointer tracking-wide border-2 border-transparent pl-12 pr-4 py-3 rounded gap-1 duration-200 -translate-x-12 max-sm:-translate-x-4",
          {
            "hover:border-blue-400": !isHome,
          }
        )}
      >
        <div className={`${isHome ? "hidden" : "absolute"} -translate-x-9`}>
          <ChevronLeft className="size-4 w-6 h-full" />
        </div>
        <div>
          <h1 className="text-lg max-sm:text-center">Ricky Ho</h1>
          <h2 className="text-lg text-muted-foreground">Software Developer</h2>
        </div>
      </Link>
      <div className="flex gap-1.5">
        <button
          onClick={toggleMode}
          className="group relative cursor-pointer mr-3"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Sun
              strokeWidth={1.4}
              className="size-5 fill-yellow-300 transition-all hover:rotate-45"
            />
          ) : (
            <Moon
              strokeWidth={1.4}
              className="size-5 fill-gray-700 transition-all hover:rotate-12"
            />
          )}
        </button>
        {navItems.map((section) => {
          const activeStyle =
            `/${section.toLowerCase()}` === pathname ? "text-blue-400" : "";

          return (
            <Link
              href={`/${section.toLowerCase()}`}
              className={cn(
                "transition-colors text-xl rounded px-3 py-0.5 border-2 border-transparent hover:border-blue-400 block duration-200",
                activeStyle
              )}
              key={section}
            >
              /{section.toLowerCase()}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
