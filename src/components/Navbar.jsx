function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-800 bg-[#050505]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-xl font-bold tracking-widest">
          DS<span className="text-[#ccff00]">.</span>
        </h1>

        <ul className="hidden gap-8 text-sm md:flex">
          <li>
            <a href="#about" className="hover:text-[#ccff00] transition-colors">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-[#ccff00] transition-colors">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-[#ccff00] transition-colors">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#ccff00] transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;