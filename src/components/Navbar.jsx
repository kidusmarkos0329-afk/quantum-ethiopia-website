import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAtom } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Repository", href: "/repository" },
    { name: "Landscape", href: "/landscape" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "News", href: "/news" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center gap-3 text-cyan-400 font-bold text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <FaAtom className="text-3xl animate-spin [animation-duration:8s]" />
          <span>Quantum Ethiopia</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="hover:text-cyan-400 transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/repository"
          className="hidden lg:block bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-semibold text-slate-950"
        >
          Explore Portal
        </Link>

        <button
          className="lg:hidden text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800">

          <div className="flex flex-col px-8 py-6 gap-5">

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-cyan-400 transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/repository"
              onClick={() => setIsOpen(false)}
              className="bg-cyan-500 text-slate-950 py-3 rounded-xl mt-3 font-semibold text-center"
            >
              Explore Portal
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;