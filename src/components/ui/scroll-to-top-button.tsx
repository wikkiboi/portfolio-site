"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed z-50 items-center gap-2 rounded bg-zinc-50 p-3 ring-1 ring-zinc-400 transition-all right-6 bottom-6  flex hover:bg-zinc-200 dark:bg-zinc-900 dark:ring-zinc-500 hover:dark:bg-zinc-800 hover:cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
      <span className="max-md:hidden">Scroll To Top</span>
    </button>
  );
}
