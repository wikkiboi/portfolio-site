const navItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6">
      <div className="flex items-center">
        <div className="rounded-full mr-6 cursor-pointer">
          <span>logo</span>
        </div>
        <span className="text-gray-800 hover:text-blue-400 font-extrabold text-sm my-auto transition-colors cursor-pointer uppercase tracking-wide">
          Ricky Ho
        </span>
      </div>
      <ul className="flex">
        {navItems.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase()}`}
              className="text-gray-800 hover:text-blue-400 transition-colors font-extrabold text-xs md:text-base px-4 py-6 block duration-300"
            >
              {section.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
