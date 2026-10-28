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
      setScrolled(window.scrollY > 20);
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
          ? "bg-[#07192e]/95 backdrop-blur-md border-slate-800 shadow-lg"
          : "bg-[#07192e]/90 backdrop-blur-sm border-slate-800/60"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 h-20 flex items-center justify-between gap-4">
        {/* Left Brand Lockup: Uncrowded, Single-Line, INSA Portal */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 whitespace-nowrap group"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/Logo_of_Ethiopian_INSA.png"
            alt="INSA Logo"
            className="w-11 h-11 object-contain rounded-lg bg-white p-1 border border-slate-700 shadow-sm group-hover:border-[#38bdf8] transition"
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif-heading text-lg font-bold text-white tracking-tight">
              Quantum Ethiopia
            </span>
            <span className="text-[10px] uppercase tracking-[2.5px] text-[#38bdf8] font-semibold mt-1">
              INSA Portal
            </span>
          </div>
        </Link>

        {/* Center Creative Floating Pill Navigation */}
        <ul className="hidden xl:flex items-center gap-1 bg-[#0c2340]/90 border border-slate-700/80 rounded-full px-3 py-1.5 shadow-inner">
          {links.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition duration-200 block ${
                    isActive
                      ? "bg-[#00a8e8] text-white font-semibold shadow-xs"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Compact Theme Icon Button + Single Clean CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0 whitespace-nowrap">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-10 h-10 rounded-full border border-slate-700 bg-[#0c2340] text-white hover:border-[#38bdf8] flex items-center justify-center transition cursor-pointer"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <FaSun className="text-amber-400 text-sm" />
            ) : (
              <FaMoon className="text-[#38bdf8] text-sm" />
            )}
          </button>

          <Link
            to="/submit-research"
            className="text-xs font-semibold px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00a8e8] to-[#0284c7] hover:opacity-95 text-white shadow-sm transition whitespace-nowrap"
          >
            Submit Paper
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2.5 xl:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 rounded-full border border-slate-700 bg-[#0c2340] text-white flex items-center justify-center"
          >
            {theme === "dark" ? (
              <FaSun className="text-amber-400 text-sm" />
            ) : (
              <FaMoon className="text-[#38bdf8] text-sm" />
            )}
          </button>

          <button
            className="text-2xl text-white p-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-[#07192e] border-t border-slate-800 shadow-xl">
          <div className="flex flex-col px-6 py-6 gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-200 hover:text-[#38bdf8] text-sm font-medium transition"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <Link
                to="/submit-research"
                onClick={() => setIsOpen(false)}
                className="bg-[#00a8e8] text-white py-3 rounded-lg text-sm font-semibold text-center"
              >
                Submit Research Paper
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;