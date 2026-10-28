import { Link } from "react-router-dom";

function Partners() {
  const partners = [
    {
      sector: "01 / Cloud & Hardware",
      name: "IBM Quantum",
      type: "Quantum Computing Platform",
      detail:
        "Cloud-accessible quantum processors, Qiskit educational resources, and algorithmic benchmarking.",
    },
    {
      sector: "02 / Scientific Alliances",
      name: "Global Quantum Organizations",
      type: "International Collaboration",
      detail:
        "Cross-border research fellowships, policy standardization, and African quantum networks.",
    },
    {
      sector: "03 / Higher Education",
      name: "Ethiopian Universities",
      type: "Research & Education Partners",
      detail:
        "Joint physics, computer science, and engineering faculties advancing thesis research nationwide.",
    },
    {
      sector: "04 / Applied Enterprise",
      name: "Industry Partners",
      type: "Technology Innovation",
      detail:
        "Telecommunications, banking, and national infrastructure operators piloting post-quantum security.",
    },
  ];

  return (
    <section
      id="partners"
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-32 lg:py-40 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <span className="uppercase tracking-[3.5px] text-[var(--insa-accent)] text-xs font-semibold">
            Institutional Network
          </span>

          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-5">
            Collaboration Ecosystem
          </h2>

          <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            Advancing sovereign quantum capability requires close coordination
            among Ethiopian universities, INSA, private industry, and global
            scientific bodies.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 border-t border-l border-[var(--border-color)]">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-10 sm:p-12 border-r border-b border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >
              <span className="font-mono text-xs uppercase tracking-[2px] text-[var(--insa-accent)] font-semibold">
                {partner.sector}
              </span>
              <h3 className="font-serif-heading text-2xl font-bold mt-3 text-[var(--text-primary)]">
                {partner.name}
              </h3>
              <p className="text-sm font-semibold text-[var(--text-muted)] mt-1">
                {partner.type}
              </p>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed">
                {partner.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-[var(--bg-subtle)] border border-[var(--border-color)] rounded-xl p-10 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="font-serif-heading text-3xl font-bold text-[var(--text-primary)]">
              Become a Quantum Partner
            </h3>
            <p className="text-[var(--text-secondary)] text-lg mt-3 leading-relaxed">
              Universities, research laboratories, and technology enterprises
              are invited to partner with INSA in building Ethiopia&apos;s
              quantum ecosystem.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 bg-[var(--btn-primary-bg)] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-95 transition shadow-sm"
          >
            Partner With Us &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Partners;
