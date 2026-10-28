import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAtom, FaSun, FaMoon } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("insa_quantum_theme") || "dark";
    }
    return "dark";
  });

  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("insa_quantum_theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-md border-[var(--border-color)] shadow-sm"
          : "bg-[var(--nav-bg)] backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-24 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3.5 text-[var(--text-primary)] font-bold text-xl tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          <span className="w-10 h-10 rounded-lg bg-[var(--btn-primary-bg)] text-white flex items-center justify-center shadow-sm">
            <FaAtom className="text-xl" />
          </span>
          <div className="flex flex-col">
            <span className="font-serif-heading text-lg leading-tight">
              Quantum Ethiopia
            </span>
            <span className="text-[11px] uppercase tracking-[2.5px] text-[var(--insa-accent)] font-semibold">
              INSA National Portal
            </span>
          </div>
        </Link>

        <ul className="hidden xl:flex items-center gap-7 text-sm font-medium">
          {links.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`py-1 transition duration-200 border-b-2 ${
                    isActive
                      ? "text-[var(--insa-accent)] border-[var(--insa-accent)] font-semibold"
                      : "text-[var(--text-secondary)] border-transparent hover:text-[var(--insa-accent)]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--insa-accent)] transition"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <FaSun className="text-amber-400 text-base" />
            ) : (
              <FaMoon className="text-slate-700 text-base" />
            )}
          </button>

          <Link
            to="/submit-research"
            className="text-sm font-medium px-4 py-2.5 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--insa-accent)] transition"
          >
            Submit Paper
          </Link>

          <Link
            to="/repository"
            className="text-sm bg-[var(--btn-primary-bg)] hover:opacity-95 transition px-5 py-2.5 rounded-lg font-semibold text-white shadow-sm"
          >
            Explore Repository
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"
          >
            {theme === "dark" ? (
              <FaSun className="text-amber-400 text-base" />
            ) : (
              <FaMoon className="text-slate-700 text-base" />
            )}
          </button>

          <button
            className="text-2xl text-[var(--text-primary)] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[var(--bg-secondary)] border-t border-[var(--border-color)] shadow-lg">
          <div className="flex flex-col px-8 py-8 gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-primary)] hover:text-[var(--insa-accent)] font-medium transition"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-[var(--border-color)] flex flex-col gap-3">
              <Link
                to="/submit-research"
                onClick={() => setIsOpen(false)}
                className="border border-[var(--border-color)] text-[var(--text-primary)] py-3 rounded-lg font-semibold text-center"
              >
                Submit Research Paper
              </Link>
              <Link
                to="/repository"
                onClick={() => setIsOpen(false)}
                className="bg-[var(--btn-primary-bg)] text-white py-3 rounded-lg font-semibold text-center"
              >
                Explore Repository
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;