import { useState, useMemo, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const INITIAL_DOCUMENTS = [
  {
    id: "doc-1",
    title: "Quantum Computing and National Security",
    authors: "INSA",
    institution: "Information Network Security Administration",
    year: "2025",
    category: "National Security & Policy",
    type: "Report",
    featured: true,
    link: "/Quantum Computing and National Security .pdf",
  },
  {
    id: "doc-2",
    title:
      "Quantum synchronization enhanced via photon hopping in an optomechanical system",
    authors: "Mekonnen, H. D.",
    institution: "Scientific Reports",
    year: "2026",
    category: "Quantum Optics & Laser Physics",
    type: "Research Paper",
    featured: true,
    link: "https://www.nature.com/articles/s41598-026-63320-6",
  },
  {
    id: "doc-3",
    title:
      "Tuning Optical Properties of Cylindrical Nanoinclusions: The Roles of Metal Fraction, Passive and Active Host Matrices",
    authors: "Getachew, S.",
    institution: "Jefore Ethiopian Journal of Applied Sciences",
    year: "2026",
    category: "Quantum Optics & Laser Physics",
    type: "Research Paper",
    featured: true,
    link: "https://www.jejas.org/index.php/jejas/article/view/100",
  },
  {
    id: "doc-4",
    title:
      "Three-Level Laser Dynamics with the Atoms Pumped by Electron Bombardment",
    authors: "Kassahun, F.",
    institution: "Addis Ababa University",
    year: "2011",
    category: "Quantum Optics & Laser Physics",
    type: "Research Paper",
    featured: false,
    link: "https://doi.org/10.48550/arxiv.1105.1438",
  },
  {
    id: "doc-5",
    title:
      "The Quantum Properties of a Superposition of Vee Type Three-level Lasers",
    authors: "Teshome, T.",
    institution: "Science Publishing Group",
    year: "2021",
    category: "Quantum Optics & Laser Physics",
    type: "Research Paper",
    featured: false,
    link: "https://doi.org/10.11648/j.ajpa.20210904.11",
  },
  {
    id: "doc-6",
    title: "The Interaction of Two-Level Atom with Light Beams",
    authors: "Tesfaye, H.",
    institution: "Wallaga University",
    year: "2023",
    category: "Institutional Theses & Databases",
    type: "Thesis",
    featured: false,
    link: "https://www.scribd.com/document/624862532/my-thesis-4",
  },
  {
    id: "doc-7",
    title:
      "Addis Ababa University Electronic Thesis and Dissertation Repository",
    authors: "Addis Ababa University",
    institution: "Addis Ababa University",
    year: "Various",
    category: "Institutional Theses & Databases",
    type: "Database",
    featured: false,
    link: "https://etd.aau.edu.et",
  },
  {
    id: "doc-8",
    title: "Haramaya University Institutional Repository",
    authors: "Haramaya University",
    institution: "Haramaya University",
    year: "Various",
    category: "Institutional Theses & Databases",
    type: "Database",
    featured: false,
    link: "http://ir.haramaya.edu.et/hru/",
  },
];

const FILTER_OPTIONS = [
  { label: "All", value: "All" },
  { label: "Research Papers", value: "Research Paper" },
  { label: "Theses", value: "Thesis" },
  { label: "Reports", value: "Report" },
  { label: "Databases", value: "Database" },
  { label: "Standards", value: "Standard" },
  { label: "Educational Materials", value: "Educational Material" },
];

const UNIVERSITIES = [
  "Information Network Security Administration (INSA)",
  "Addis Ababa University",
  "Adama Science and Technology University",
  "University of Gondar",
  "Bahir Dar University",
  "Jimma University",
  "Hawassa University",
  "Mekelle University",
];

function Repository() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [customDocs, setCustomDocs] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("insa_submitted_research");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCustomDocs(parsed);
        }
      }
    } catch {
      setCustomDocs([]);
    }
  }, []);

  const allDocuments = useMemo(() => {
    return [...customDocs, ...INITIAL_DOCUMENTS];
  }, [customDocs]);

  const filteredDocuments = useMemo(() => {
    return allDocuments.filter((doc) => {
      const matchesFilter =
        activeFilter === "All" ||
        doc.type.toLowerCase() === activeFilter.toLowerCase();

      const query = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !query ||
        doc.title.toLowerCase().includes(query) ||
        doc.authors.toLowerCase().includes(query) ||
        doc.institution.toLowerCase().includes(query) ||
        doc.category.toLowerCase().includes(query) ||
        doc.type.toLowerCase().includes(query) ||
        String(doc.year).toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [allDocuments, activeFilter, searchTerm]);

  const featuredDocuments = useMemo(() => {
    return filteredDocuments.filter((doc) => doc.featured).slice(0, 3);
  }, [filteredDocuments]);

  const categorizedGroups = useMemo(() => {
    const groups = {};
    filteredDocuments.forEach((doc) => {
      const cat = doc.category || "General Quantum Research";
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(doc);
    });
    return groups;
  }, [filteredDocuments]);

  return (
    <section
      id="repository"
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl">
          <span className="uppercase tracking-[3.5px] text-[var(--insa-accent)] text-xs font-semibold">
            National Repository
          </span>

          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-5">
            Ethiopian Quantum Research Repository
          </h2>

          <p className="mt-6 text-[var(--text-secondary)] text-lg leading-relaxed">
            A centralized national archive for Ethiopian quantum research
            papers, theses, technical reports, standards, and educational
            resources curated by INSA and partner universities.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-16 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-b border-[var(--border-color)] pb-6">
            <div className="flex items-center gap-3.5 flex-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 focus-within:border-[var(--insa-accent)] transition">
              <FaSearch className="text-[var(--insa-accent)] text-base shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, author, institution, category, or year..."
                className="w-full bg-transparent outline-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm sm:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium px-2"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-sm text-[var(--text-muted)] font-medium shrink-0">
              Showing{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                {filteredDocuments.length}
              </span>{" "}
              of {allDocuments.length} publications
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-6">
            {FILTER_OPTIONS.map((item) => {
              const isSelected = activeFilter === item.value;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveFilter(item.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${
                    isSelected
                      ? "bg-[var(--btn-primary-bg)] text-white border-[var(--btn-primary-bg)]"
                      : "bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--insa-accent)]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State when no documents match */}
        {filteredDocuments.length === 0 ? (
          <div className="mt-16 py-16 text-center border border-dashed border-[var(--border-color)] rounded-xl bg-[var(--bg-secondary)] px-6">
            <h3 className="font-serif-heading text-2xl font-bold text-[var(--text-primary)]">
              No matching publications found
            </h3>
            <p className="mt-3 text-[var(--text-secondary)] max-w-md mx-auto">
              No documents matched &ldquo;{searchTerm}&rdquo; under the{" "}
              <span className="font-semibold">{activeFilter}</span> filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("All");
              }}
              className="mt-6 px-5 py-2.5 rounded-lg bg-[var(--btn-primary-bg)] text-white text-sm font-semibold hover:opacity-95 transition"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <>
            {/* Featured Documents (Strictly 3 Featured Highlights) */}
            {featuredDocuments.length > 0 && (
              <div className="mt-24">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[var(--text-primary)] pb-4 mb-12">
                  <div>
                    <span className="text-xs uppercase tracking-[3px] text-[var(--insa-accent)] font-semibold">
                      Curated Selection
                    </span>
                    <h3 className="font-serif-heading text-3xl font-bold mt-1">
                      Featured Documents ({featuredDocuments.length})
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mt-2 sm:mt-0">
                    Key national reports and recent peer-reviewed publications
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                  {featuredDocuments.map((doc) => (
                    <article
                      key={doc.id}
                      className="flex flex-col justify-between border-t-4 border-[var(--insa-accent)] bg-[var(--bg-secondary)] p-8 shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--insa-badge-text)]">
                          <span>{doc.type}</span>
                          <span className="text-[var(--text-muted)]">
                            {doc.year}
                          </span>
                        </div>

                        <h4 className="font-serif-heading text-xl font-bold mt-4 leading-snug text-[var(--text-primary)]">
                          {doc.title}
                        </h4>

                        <dl className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
                          <div>
                            <dt className="inline font-semibold text-[var(--text-primary)]">
                              Authors:{" "}
                            </dt>
                            <dd className="inline">{doc.authors}</dd>
                          </div>
                          <div>
                            <dt className="inline font-semibold text-[var(--text-primary)]">
                              Institution:{" "}
                            </dt>
                            <dd className="inline">{doc.institution}</dd>
                          </div>
                          <div>
                            <dt className="inline font-semibold text-[var(--text-primary)]">
                              Category:{" "}
                            </dt>
                            <dd className="inline">{doc.category}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex items-center gap-6 mt-8 pt-4 border-t border-[var(--border-subtle)] text-sm font-semibold">
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--insa-accent)] hover:underline"
                        >
                          View Publication &rarr;
                        </a>
                        <a
                          href={doc.link}
                          download={
                            doc.link.endsWith(".pdf") ? true : undefined
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        >
                          Download
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Categorized Document Directory (Non-Card Academic Index Table) */}
            <div className="mt-28">
              <div className="border-b-2 border-[var(--text-primary)] pb-4 mb-12">
                <span className="text-xs uppercase tracking-[3px] text-[var(--insa-accent)] font-semibold">
                  Complete Catalog by Category
                </span>
                <h3 className="font-serif-heading text-3xl font-bold mt-1">
                  Categorized Research Index
                </h3>
              </div>

              <div className="space-y-16">
                {Object.entries(categorizedGroups).map(([category, docs]) => (
                  <div key={category}>
                    <div className="flex items-center justify-between bg-[var(--bg-subtle)] border-l-4 border-[var(--insa-accent)] px-6 py-3.5 mb-4">
                      <h4 className="font-serif-heading text-xl font-bold text-[var(--text-primary)]">
                        {category}
                      </h4>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--insa-badge-text)]">
                        {docs.length}{" "}
                        {docs.length === 1 ? "Document" : "Documents"}
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-[var(--border-color)] text-xs uppercase tracking-wider text-[var(--text-muted)]">
                            <th className="py-3.5 pr-6 font-semibold">Title</th>
                            <th className="py-3.5 px-4 font-semibold">
                              Author(s)
                            </th>
                            <th className="py-3.5 px-4 font-semibold">
                              Institution
                            </th>
                            <th className="py-3.5 px-4 font-semibold">Type</th>
                            <th className="py-3.5 px-4 font-semibold">Year</th>
                            <th className="py-3.5 pl-4 text-right font-semibold">
                              Access
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--border-color)] text-sm">
                          {docs.map((doc) => (
                            <tr
                              key={doc.id}
                              className="hover:bg-[var(--bg-secondary)]/80 transition"
                            >
                              <td className="py-5 pr-6 font-medium text-[var(--text-primary)] max-w-md">
                                {doc.title}
                              </td>
                              <td className="py-5 px-4 text-[var(--text-secondary)] whitespace-nowrap">
                                {doc.authors}
                              </td>
                              <td className="py-5 px-4 text-[var(--text-secondary)]">
                                {doc.institution}
                              </td>
                              <td className="py-5 px-4 whitespace-nowrap">
                                <span className="inline-block px-2.5 py-0.5 rounded text-xs font-medium bg-[var(--insa-badge-bg)] text-[var(--insa-badge-text)]">
                                  {doc.type}
                                </span>
                              </td>
                              <td className="py-5 px-4 text-[var(--text-muted)] font-mono text-xs">
                                {doc.year}
                              </td>
                              <td className="py-5 pl-4 text-right whitespace-nowrap space-x-4 font-semibold">
                                <a
                                  href={doc.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[var(--insa-accent)] hover:underline"
                                >
                                  View
                                </a>
                                <a
                                  href={doc.link}
                                  download={
                                    doc.link.endsWith(".pdf") ? true : undefined
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                >
                                  Download
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Participating Institutions (Clean Multi-Column Directory instead of Icon Cards) */}
        <div className="mt-28 pt-16 border-t border-[var(--border-color)]">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[3px] text-[var(--insa-accent)] font-semibold">
                Academic Network
              </span>
              <h3 className="font-serif-heading text-3xl font-bold mt-2">
                Participating Institutions
              </h3>
              <p className="mt-4 text-[var(--text-secondary)] text-sm leading-relaxed">
                Federal security agencies and national public universities
                contributing research, theses, and experimental findings to the
                repository.
              </p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-4 border-l border-[var(--border-color)] pl-6 sm:pl-10">
              {UNIVERSITIES.map((university, idx) => (
                <div
                  key={university}
                  className="py-3 border-b border-[var(--border-subtle)] flex items-baseline gap-3"
                >
                  <span className="font-mono text-xs text-[var(--insa-accent)] font-semibold">
                    0{idx + 1}
                  </span>
                  <span className="text-[var(--text-primary)] font-medium">
                    {university}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Direct Research Submission Callout */}
        <div className="mt-28 bg-[var(--bg-secondary)] border-l-4 border-[var(--insa-accent)] p-10 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[3px] text-[var(--insa-accent)] font-semibold">
              Direct Repository Deposit
            </span>
            <h3 className="font-serif-heading text-3xl font-bold mt-2">
              Submit Quantum Research
            </h3>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              Universities, researchers, and graduate students can deposit peer-reviewed
              papers, MSc/PhD theses, technical reports, and educational materials
              directly into the Ethiopian Quantum Research Repository.
            </p>
          </div>

          <Link
            to="/submit-research"
            className="shrink-0 bg-[var(--btn-primary-bg)] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-95 transition shadow-sm"
          >
            Submit Research Paper &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Repository;