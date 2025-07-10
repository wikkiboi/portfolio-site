"use client";

import { cn } from "@sglara/cn";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = ["About", "Projects", "Contact"];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between pl-4 w-full">
      <div className="flex items-center">
        <Link
          href="/"
          className="flex text-gray-800 hover:text-blue-400 hover:border-blue-400 font-bold text-base my-auto transition-colors cursor-pointer tracking-wide items-center gap-1"
        >
          {pathname !== "/" && <ChevronLeft />}
          Ricky Ho
        </Link>
      </div>
      <ul className="flex">
        {navItems.map((section) => {
          const activeStyle =
            `/${section.toLowerCase()}` === pathname
              ? "text-blue-400 underline"
              : "";

          return (
            <li key={section}>
              <Link
                href={`/${section.toLowerCase()}`}
                className={cn(
                  "text-gray-800 hover:text-blue-400 transition-colors font-semibold text-base px-4 py-6 block duration-300",
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
