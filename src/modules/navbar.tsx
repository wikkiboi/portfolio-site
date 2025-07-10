import Link from "next/link";

const navItems = ["About", "Projects", "Contact"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between pl-4 w-full">
      <div className="flex items-center">
        <span className="text-gray-800 hover:text-blue-400 font-bold text-sm my-auto transition-colors cursor-pointer tracking-wide">
          Ricky Ho
        </span>
      </div>
      <ul className="flex">
        {navItems.map((section) => (
          <li key={section}>
            <Link
              href={`/${section.toLowerCase()}`}
              className="text-gray-800 hover:text-blue-400 transition-colors font-semibold text-xs md:text-base px-4 py-6 block duration-300"
            >
              /{section.toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
