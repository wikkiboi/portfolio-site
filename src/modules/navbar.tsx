"use client";

import { cn } from "@sglara/cn";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = ["About", "Projects", "Contact"];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between py-6 w-full max-sm:flex-col gap-4">
      <Link
        href="/"
        className="flex text-gray-800 font-bold text-xl my-auto transition-colors cursor-pointer tracking-wide items-center border-2 border-transparent hover:border-blue-400 px-2 rounded gap-1 duration-200"
      >
        {pathname !== "/" && <ChevronLeft className="max-sm:hidden" />}
        Ricky Ho
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
                  "text-gray-800 transition-colors font-semibold text-xl rounded px-4 border-2 border-transparent hover:border-blue-400 block duration-200",
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
