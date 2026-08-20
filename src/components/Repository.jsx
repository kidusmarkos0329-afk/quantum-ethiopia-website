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
      title: "Quantum Computing Research Title",
      authors: "Researcher Name(s)",
      institution: "University Name",
      year: "2026",
      category: "Quantum Computing",
      type: "Research Paper",
    },
    {
      title: "Post-Quantum Cryptography Study",
      authors: "Researcher Name(s)",
      institution: "University Name",
      year: "2026",
      category: "Post-Quantum Cryptography",
      type: "Thesis",
    },
    {
      title: "Quantum Communication Report",
      authors: "Researcher Name(s)",
      institution: "University Name",
      year: "2026",
      category: "Quantum Communication",
      type: "Technical Report",
    },
    {
      title: "Quantum Algorithms Study",
      authors: "Researcher Name(s)",
      institution: "University Name",
      year: "2026",
      category: "Algorithms",
      type: "Research Paper",
    },
    {
      title: "Quantum Education Material",
      authors: "Researcher Name(s)",
      institution: "University Name",
      year: "2026",
      category: "Education",
      type: "Presentation",
    },
    {
      title: "National Quantum Strategy",
      authors: "INSA",
      institution: "Information Network Security Administration",
      year: "2026",
      category: "National Strategy",
      type: "Policy Document",
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

                <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl font-semibold text-slate-950">
                  <FaEye />
                  View
                </button>

                <button className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500/10 transition px-5 py-3 rounded-xl">
                  <FaDownload />
                  Download
                </button>

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