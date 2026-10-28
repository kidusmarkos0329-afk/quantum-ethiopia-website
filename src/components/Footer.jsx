import { FaAtom, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 text-[var(--text-primary)] text-xl font-bold"
            >
              <span className="w-9 h-9 rounded-lg bg-[var(--btn-primary-bg)] text-white flex items-center justify-center">
                <FaAtom />
              </span>
              <span className="font-serif-heading">Quantum Ethiopia</span>
            </Link>

            <p className="text-[var(--text-secondary)] mt-5 text-sm leading-relaxed">
              National Quantum Initiative led by the Information Network
              Security Administration (INSA), advancing research, education, and
              post-quantum security across Ethiopia.
            </p>
          </div>

          <div>
            <h3 className="font-serif-heading text-lg font-bold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li>
                <Link
                  to="/"
                  className="hover:text-[var(--insa-accent)] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[var(--insa-accent)] transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="hover:text-[var(--insa-accent)] transition"
                >
                  Research Areas
                </Link>
              </li>
              <li>
                <Link
                  to="/repository"
                  className="hover:text-[var(--insa-accent)] transition"
                >
                  Repository
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif-heading text-lg font-bold">
              Portal &amp; Submissions
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li>
                <Link
                  to="/submit-research"
                  className="hover:text-[var(--insa-accent)] transition font-medium"
                >
                  Submit Research Paper
                </Link>
              </li>
              <li>
                <Link
                  to="/landscape"
                  className="hover:text-[var(--insa-accent)] transition"
                >
                  Global Landscape
                </Link>
              </li>
              <li>
                <Link
                  to="/roadmap"
                  className="hover:text-[var(--insa-accent)] transition"
                >
                  National Roadmap
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-[var(--insa-accent)] transition"
                >
                  News &amp; Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif-heading text-lg font-bold">
              INSA Connect
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-4">
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
                className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-base hover:border-[var(--insa-accent)] hover:text-[var(--insa-accent)] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.insa.gov.et"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-base hover:border-[var(--insa-accent)] hover:text-[var(--insa-accent)] transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.insa.gov.et"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-base hover:border-[var(--insa-accent)] hover:text-[var(--insa-accent)] transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border-color)] mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4">
          <span>
            &copy; 2026 Quantum Ethiopia Initiative • Information Network
            Security Administration (INSA). All Rights Reserved.
          </span>
          <a
            href="https://www.insa.gov.et"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--insa-accent)] transition"
          >
            www.insa.gov.et
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
