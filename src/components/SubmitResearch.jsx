import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const CATEGORIES = [
  "National Security & Policy",
  "Quantum Optics & Laser Physics",
  "Post-Quantum Cryptography",
  "Quantum Algorithms & Computing",
  "Quantum Communication & QKD",
  "Institutional Theses & Databases",
];

const DOCUMENT_TYPES = [
  "Research Paper",
  "Thesis",
  "Report",
  "Standard",
  "Educational Material",
];

function SubmitResearch() {
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    institution: "",
    email: "",
    year: new Date().getFullYear().toString(),
    type: "Research Paper",
    category: "Quantum Optics & Laser Physics",
    link: "",
    abstract: "",
  });

  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      if (!formData.link) {
        setFormData((prev) => ({
          ...prev,
          link: `#uploaded-${encodeURIComponent(file.name)}`,
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title.trim() ||
      !formData.authors.trim() ||
      !formData.institution.trim() ||
      !formData.email.trim()
    ) {
      setError("Please complete all required fields before submitting.");
      return;
    }

    setError("");

    const newEntry = {
      id: `custom-${Date.now()}`,
      title: formData.title.trim(),
      authors: formData.authors.trim(),
      institution: formData.institution.trim(),
      year: formData.year.trim() || "2026",
      category: formData.category,
      type: formData.type,
      featured: false,
      link: formData.link.trim() || "#",
      abstract: formData.abstract.trim(),
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem("insa_submitted_research") || "[]"
      );
      localStorage.setItem(
        "insa_submitted_research",
        JSON.stringify([newEntry, ...existing])
      );
    } catch {
      // Fallback if storage is restricted
    }

    setSubmitted(true);
  };

  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        <div>
          <Link
            to="/repository"
            className="text-sm font-semibold text-[var(--insa-accent)] hover:underline"
          >
            &larr; Back to Research Repository
          </Link>

          <span className="block uppercase tracking-[3.5px] text-[var(--insa-accent)] text-xs font-semibold mt-6">
            INSA Scholarly Deposit
          </span>

          <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-3">
            Submit Quantum Research Paper
          </h1>

          <p className="mt-5 text-[var(--text-secondary)] text-lg leading-relaxed">
            Deposit peer-reviewed articles, graduate theses, policy reports, or
            educational manuscripts directly into the Ethiopian Quantum Research
            Repository.
          </p>
        </div>

        {submitted ? (
          <div className="mt-14 bg-[var(--bg-secondary)] border-l-4 border-emerald-500 p-10 rounded-r-xl shadow-sm">
            <div className="flex items-center gap-3 text-emerald-500 font-semibold text-lg">
              <FaCheckCircle className="text-2xl" />
              <span>Manuscript Successfully Submitted</span>
            </div>

            <h2 className="font-serif-heading text-2xl font-bold mt-4">
              {formData.title}
            </h2>

            <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
              Thank you, <strong>{formData.authors}</strong> ({formData.institution}
              ). Your submission has been recorded and added to the{" "}
              <strong>{formData.category}</strong> catalog in the repository.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/repository"
                className="bg-[var(--btn-primary-bg)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-95 transition"
              >
                View in Repository
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFileName("");
                  setFormData({
                    title: "",
                    authors: "",
                    institution: "",
                    email: "",
                    year: new Date().getFullYear().toString(),
                    type: "Research Paper",
                    category: "Quantum Optics & Laser Physics",
                    link: "",
                    abstract: "",
                  });
                }}
                className="border border-[var(--border-color)] px-6 py-3 rounded-lg font-semibold text-[var(--text-primary)] hover:border-[var(--insa-accent)] transition"
              >
                Submit Another Document
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-14 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 sm:p-12 space-y-8 shadow-sm"
          >
            {error && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/40 text-red-400 text-sm font-medium">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Document Title *
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Post-Quantum Lattice Cryptography for National Infrastructure"
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Author(s) *
                </label>
                <input
                  type="text"
                  name="authors"
                  required
                  value={formData.authors}
                  onChange={handleChange}
                  placeholder="e.g., Abebe, M., Kebede, T."
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Affiliated Institution / University *
                </label>
                <input
                  type="text"
                  name="institution"
                  required
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="e.g., Addis Ababa University / INSA"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Corresponding Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="researcher@aau.edu.et"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Publication Year
                </label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="2026"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Document Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
                >
                  {DOCUMENT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Research Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  DOI / Direct Document URL
                </label>
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="https://doi.org/..."
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Upload PDF Manuscript (Optional if DOI/URL provided)
              </label>
              <div className="border border-dashed border-[var(--border-color)] rounded-lg p-6 bg-[var(--bg-primary)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="text-sm text-[var(--text-secondary)] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[var(--insa-badge-bg)] file:text-[var(--insa-badge-text)] hover:file:opacity-90"
                />
                {fileName && (
                  <span className="text-xs font-mono text-[var(--insa-accent)]">
                    Attached: {fileName}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Abstract / Summary *
              </label>
              <textarea
                name="abstract"
                rows="5"
                required
                value={formData.abstract}
                onChange={handleChange}
                placeholder="Provide a concise abstract summarizing the methodology and key findings..."
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-end gap-4">
              <Link
                to="/repository"
                className="px-6 py-3.5 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] font-semibold hover:text-[var(--text-primary)] transition"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="bg-[var(--btn-primary-bg)] text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-95 transition shadow-sm"
              >
                Submit Research to Repository
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default SubmitResearch;