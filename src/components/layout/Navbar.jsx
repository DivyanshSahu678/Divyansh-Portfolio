import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section");
      let current = "hero";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled
    ? "bg-black/80 backdrop-blur-xl border-b border-neutral-800"
    : "bg-transparent"
      }`}
    >

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#hero"
          className="text-3xl font-black tracking-wider text-[#CCFF00] transition hover:scale-105"
        >
          
        </a>


        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 lg:flex">

          {links.map((link) => (
            <li key={link.id}>

              <a
                href={`#${link.id}`}
                className={`transition duration-300 ${
                  active === link.id
                    ? "font-semibold text-[#CCFF00]"
                    : "text-gray-300 hover:text-[#CCFF00]"
                }`}
              >
                {link.name}
              </a>

            </li>
          ))}

        </ul>


        {/* Resume Button */}
        <a
          href="/resume/Divyansh_Sahu_Resume.pdf"
          download
          className="hidden rounded-lg bg-[#CCFF00] px-5 py-2 font-semibold text-black transition hover:scale-105 lg:block"
        >
          Resume
        </a>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-[#CCFF00] lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {/* Mobile Menu */}

      {menuOpen && (

        <div className="border-t border-neutral-800 bg-black lg:hidden">

          <ul className="flex flex-col items-center gap-6 py-8">

            {links.map((link) => (

              <li key={link.id}>

                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`transition ${
                    active === link.id
                      ? "font-semibold text-[#CCFF00]"
                      : "text-gray-300 hover:text-[#CCFF00]"
                  }`}
                >
                  {link.name}
                </a>

              </li>

            ))}


            <a
              href="/resume/Divyansh_Sahu_Resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-[#CCFF00] px-6 py-3 font-semibold text-black"
            >
              Download Resume
            </a>

          </ul>

        </div>

      )}

    </header>
  );
}

export default Navbar;