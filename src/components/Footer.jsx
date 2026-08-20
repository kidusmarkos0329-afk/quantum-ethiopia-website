import {
  FaAtom,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>

            <Link
              to="/"
              className="flex items-center gap-3 text-cyan-400 text-2xl font-bold"
            >
              <FaAtom />

              <span>
                Quantum Ethiopia
              </span>
            </Link>

            <p className="text-slate-400 mt-6 leading-8">
              Building Ethiopia's quantum technology ecosystem through
              research, education, collaboration and innovation.
            </p>

          </div>


          <div>

            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/research"
                  className="hover:text-cyan-400 transition"
                >
                  Research
                </Link>
              </li>

              <li>
                <Link
                  to="/repository"
                  className="hover:text-cyan-400 transition"
                >
                  Repository
                </Link>
              </li>

            </ul>

          </div>


          <div>

            <h3 className="text-xl font-bold">
              Resources
            </h3>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>
                <Link
                  to="/research"
                  className="hover:text-cyan-400 transition"
                >
                  Quantum Research
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition"
                >
                  Educational Materials
                </Link>
              </li>

              <li>
                <Link
                  to="/repository"
                  className="hover:text-cyan-400 transition"
                >
                  Publications
                </Link>
              </li>

              <li>
                <Link
                  to="/news"
                  className="hover:text-cyan-400 transition"
                >
                  News & Events
                </Link>
              </li>

            </ul>

          </div>


          <div>

            <h3 className="text-xl font-bold">
              Follow Us
            </h3>

            <div className="flex gap-5 mt-6">

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                <FaTwitter />
              </a>

            </div>

          </div>

        </div>


        <div className="border-t border-slate-800 mt-14 pt-8 text-center text-slate-500">

          © 2026 Quantum Ethiopia Initiative. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;