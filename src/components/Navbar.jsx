import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("insa_theme_mode_v2") || "light";
    }
    return "light";
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
    localStorage.setItem("insa_theme_mode_v2", theme);
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
          : "bg-[var(--nav-bg)] backdrop-blur-sm border-[var(--border-subtle)]"
      }`}
    >
      {/* Top INSA Dark Navy Institutional Bar */}
      <div className="bg-[#0a2540] text-white text-xs py-1.5 px-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-medium tracking-wide">
            Information Network Security Administration (INSA) • Federal Democratic Republic of Ethiopia
          </span>
          <span className="hidden sm:inline text-[#38bdf8] font-mono">
            quantum@insa.gov.et
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3.5 text-[var(--text-primary)] font-bold text-xl tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/Logo_of_Ethiopian_INSA.png"
            alt="INSA Logo"
            className="w-12 h-12 object-contain rounded-lg bg-white p-1 border border-[var(--border-color)] shadow-xs"
          />
          <div className="flex flex-col">
            <span className="font-serif-heading text-lg leading-tight">
              Quantum Ethiopia
            </span>
            <span className="text-[10px] uppercase tracking-[2.5px] text-[var(--insa-accent)] font-semibold">
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

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-[var(--insa-accent)] text-xs font-semibold transition cursor-pointer"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <>
                <FaSun className="text-amber-400 text-sm" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <FaMoon className="text-[#0b3c78] text-sm" />
                <span>Dark Mode</span>
              </>
            )}
          </button>

          <Link
            to="/submit-research"
            className="text-sm font-semibold px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--insa-accent)] transition"
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
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-xs font-semibold"
          >
            {theme === "dark" ? (
              <>
                <FaSun className="text-amber-400 text-sm" />
                <span>Light</span>
              </>
            ) : (
              <>
                <FaMoon className="text-[#0b3c78] text-sm" />
                <span>Dark</span>
              </>
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