"use client";

import { cn } from "@sglara/cn";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = ["About", "Projects", "Contact"];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="flex items-center justify-between py-4 w-full max-sm:flex-col gap-4">
      <Link
        href="/"
        className={cn(
          "flex items-center text-gray-800 text-xl my-auto transition-colors cursor-pointer tracking-wide border-2 border-transparent pl-12 pr-4 py-3 rounded gap-1 duration-200 -translate-x-12 max-sm:-translate-x-4",
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

      <ul className="flex gap-1">
        {navItems.map((section) => {
          const activeStyle =
            `/${section.toLowerCase()}` === pathname ? "text-blue-400" : "";

          return (
            <li key={section}>
              <Link
                href={`/${section.toLowerCase()}`}
                className={cn(
                  "text-gray-800 transition-colors text-xl rounded px-4 py-0.5 border-2 border-transparent hover:border-blue-400 block duration-200",
                  activeStyle
                )}
              >
                /{section.toLowerCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
