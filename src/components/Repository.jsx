import {
  FaSearch,
  FaDownload,
  FaEye,
  FaUniversity,
  FaFilePdf,
  FaUpload,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Repository() {
  const documents = [
    {
      title: "Quantum Computing and National Security",
      authors: "INSA",
      institution: "Information Network Security Administration",
      year: "2025",
      category: "National Security",
      type: "Report",
      link: "/Quantum Computing and National Security .pdf",
    },
    {
      title: "Three-Level Laser Dynamics with the Atoms Pumped by Electron Bombardment",
      authors: "Kassahun, F.",
      institution: "Addis Ababa University",
      year: "2011",
      category: "Quantum Dynamics",
      type: "Research Paper",
      link: "https://doi.org/10.48550/arxiv.1105.1438",
    },
    {
      title: "Quantum synchronization enhanced via photon hopping in anoptomechanical system",
      authors: "Mekonnen, H. D.",
      institution: "Scientific Reports",
      year: "2026",
      category: "Quantum Synchronization",
      type: "Research Paper",
      link: "https://www.nature.com/articles/s41598-026-63320-6",
    },
    {
      title: "Tuning Optical Properties of Cylindrical Nanoinclusions: The Roles of Metal Fraction, Passive and Active Host Matrices",
      authors: "Getachew, S.",
      institution: "Jefore Ethiopian Journal of Applied Sciences",
      year: "2026",
      category: "Optical Properties",
      type: "Research Paper",
      link: "https://www.jejas.org/index.php/jejas/article/view/100",
    },
    {
      title: "The Quantum Properties of a Superposition of Vee Type Three-level Lasers",
      authors: "Teshome, T.",
      institution: "Science Publishing Group",
      year: "2021",
      category: "Quantum Optics",
      type: "Research Paper",
      link: "https://doi.org/10.11648/j.ajpa.20210904.11",
    },
    {
      title: "Addis Ababa University Electronic Thesis and Dissertation Repository",
      authors: "Addis Ababa University",
      institution: "Addis Ababa University",
      year: "Various",
      category: "Repository",
      type: "Database",
      link: "https://etd.aau.edu.et",
    },
    {
      title: "Haramaya University Institutional Repository",
      authors: "Haramaya University",
      institution: "Haramaya University",
      year: "Various",
      category: "Repository",
      type: "Database",
      link: "http://ir.haramaya.edu.et/hru/",
    },
    {
      title: "The Interaction of Two-Level Atom with Light Beams",
      authors: "Tesfaye, H.",
      institution: "Wallaga University",
      year: "2023",
      category: "Quantum Interaction",
      type: "Master of Science Proposal",
      link: "https://www.scribd.com/document/624862532/my-thesis-4",
    },
  ];

  const universities = [
    "Information Network Security Administration (INSA)",
    "Addis Ababa University",
    "Adama Science and Technology University",
    "University of Gondar",
    "Bahir Dar University",
    "Jimma University",
    "Hawassa University",
    "Mekelle University",
  ];

  return (
    <section
      id="repository"
      className="bg-slate-950 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-5xl mx-auto">

          <span className="uppercase tracking-[4px] text-cyan-400 text-sm">
            National Repository
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Ethiopian Quantum Research Repository
          </h2>

          <p className="mt-8 text-slate-300 text-lg leading-9">
            A centralized repository for Ethiopian quantum research papers,
            theses, reports, standards, presentations and educational
            resources contributed by universities, researchers and national
            institutions.
          </p>

        </div>

        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4">

          <FaSearch className="text-cyan-400 text-xl" />

          <input
            type="text"
            placeholder="Search research, author, institution..."
            className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"
          />

        </div>

        <div className="flex flex-wrap gap-4 mt-10">

          {[
            "All",
            "Research Papers",
            "Theses",
            "Reports",
            "Standards",
            "Presentations",
            "Educational Materials",
          ].map((item) => (
            <button
              key={item}
              className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 transition"
            >
              {item}
            </button>
          ))}

        </div>

        <h3 className="text-3xl font-bold mt-20 mb-10">
          Featured Documents
        </h3>

        <div className="grid lg:grid-cols-2 gap-8">

          {documents.map((doc) => (
            <div
              key={doc.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >

              <div className="flex justify-between items-center mb-6">

                <FaFilePdf className="text-red-400 text-3xl" />

                <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                  {doc.type}
                </span>

              </div>

              <h4 className="text-2xl font-bold">
                {doc.title}
              </h4>

              <div className="mt-6 space-y-2 text-slate-400">

                <p>
                  <strong className="text-white">Authors:</strong>{" "}
                  {doc.authors}
                </p>

                <p>
                  <strong className="text-white">Institution:</strong>{" "}
                  {doc.institution}
                </p>

                <p>
                  <strong className="text-white">Category:</strong>{" "}
                  {doc.category}
                </p>

                <p>
                  <strong className="text-white">Year:</strong>{" "}
                  {doc.year}
                </p>

              </div>

              <div className="flex gap-4 mt-8">

                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl font-semibold text-slate-950"
                >
                  <FaEye />
                  View
                </a>

                <a
                  href={doc.link}
                  download={doc.link.endsWith(".pdf") ? true : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500/10 transition px-5 py-3 rounded-xl"
                >
                  <FaDownload />
                  Download
                </a>

              </div>

            </div>
          ))}

        </div>

        <h3 className="text-3xl font-bold mt-24 mb-10">
          Participating Institutions
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {universities.map((university) => (
            <div
              key={university}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 hover:border-cyan-400 transition"
            >

              <FaUniversity className="text-cyan-400 text-2xl" />

              <span className="text-slate-300">
                {university}
              </span>

            </div>
          ))}

        </div>

        <div className="mt-24 bg-cyan-500 rounded-3xl p-12 text-slate-950 text-center">

          <FaUpload className="text-5xl mx-auto mb-6" />

          <h3 className="text-4xl font-bold">
            Submit Quantum Research
          </h3>

          <p className="mt-6 text-lg max-w-3xl mx-auto">
            Universities, researchers and institutions can contribute quantum
            research papers, theses, reports, standards and educational
            resources to the Ethiopian Quantum Research Repository.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-slate-950 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition"
          >
            Submit Research
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Repository;