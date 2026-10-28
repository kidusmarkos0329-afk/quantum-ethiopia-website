import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white border-t border-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link
              to="/"
              className="flex items-center gap-3.5 text-white text-xl font-bold"
            >
              <img
                src="/Logo_of_Ethiopian_INSA.png"
                alt="INSA Logo"
                className="w-11 h-11 object-contain rounded-lg bg-white p-1"
              />
              <span className="font-serif-heading">Quantum Ethiopia</span>
            </Link>

            <p className="text-slate-300 mt-5 text-sm leading-relaxed">
              National Quantum Initiative led by the Information Network
              Security Administration (INSA), advancing research, education, and
              post-quantum security across Ethiopia.
            </p>
          </div>

          <div>
            <h3 className="font-serif-heading text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#38bdf8] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#38bdf8] transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="hover:text-[#38bdf8] transition"
                >
                  Research Areas
                </Link>
              </li>
              <li>
                <Link
                  to="/repository"
                  className="hover:text-[#38bdf8] transition"
                >
                  Repository
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif-heading text-lg font-bold text-white">
              Portal &amp; Submissions
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  to="/submit-research"
                  className="hover:text-[#38bdf8] transition font-medium"
                >
                  Submit Research Paper
                </Link>
              </li>
              <li>
                <Link
                  to="/landscape"
                  className="hover:text-[#38bdf8] transition"
                >
                  Global Landscape
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="hover:text-[#38bdf8] transition">
                  National Roadmap
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#38bdf8] transition">
                  News &amp; Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif-heading text-lg font-bold text-white">
              INSA Connect
            </h3>
            <p className="text-sm text-slate-300 mt-4">
              Welo Sefer, China Street, Addis Ababa
              <br />
              quantum@insa.gov.et
            </p>

            <div className="flex gap-3 mt-5">
              <a
                href="https://www.insa.gov.et"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-[#112a4a] border border-slate-700 flex items-center justify-center text-base hover:border-[#38bdf8] hover:text-[#38bdf8] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.insa.gov.et"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-[#112a4a] border border-slate-700 flex items-center justify-center text-base hover:border-[#38bdf8] hover:text-[#38bdf8] transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.insa.gov.et"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-lg bg-[#112a4a] border border-slate-700 flex items-center justify-center text-base hover:border-[#38bdf8] hover:text-[#38bdf8] transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <span>
            &copy; 2026 Quantum Ethiopia Initiative • Information Network
            Security Administration (INSA). All Rights Reserved.
          </span>
          <a
            href="https://www.insa.gov.et"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38bdf8] transition"
          >
            www.insa.gov.et
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;