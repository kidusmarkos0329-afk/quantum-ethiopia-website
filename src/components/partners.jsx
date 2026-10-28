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
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] pb-28 lg:pb-36 border-b border-[var(--border-subtle)]"
    >
      {/* Visual Header Banner */}
      <div
        className="relative bg-[#0a2540] bg-cover bg-center text-white pt-28 pb-20 lg:py-24 border-b border-[#1e3a5f]"
        style={{ backgroundImage: "url('/quantum-repository-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#07192e]/95 via-[#0a2540]/85 to-[#0a2540]/65" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <span className="uppercase tracking-[3.5px] text-[#38bdf8] text-xs font-semibold">
            Institutional Network
          </span>
          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-4 text-white">
            Collaboration Ecosystem
          </h2>
          <p className="mt-5 text-lg text-slate-200 leading-relaxed max-w-3xl">
            Advancing sovereign quantum capability requires close coordination
            among Ethiopian universities, INSA, private industry, and global
            scientific bodies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-16">
        <div className="grid md:grid-cols-2 border-t border-l border-[var(--border-color)]">
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

        {/* Partner CTA Banner with Quantum Hero Background */}
        <div
          className="relative mt-24 rounded-2xl overflow-hidden bg-[#0a2540] bg-cover bg-center p-10 sm:p-14 text-white shadow-xl"
          style={{ backgroundImage: "url('/quantum-hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#07192e]/85" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="font-serif-heading text-3xl font-bold text-white">
                Become a Quantum Partner
              </h3>
              <p className="text-slate-200 text-lg mt-3 leading-relaxed">
                Universities, research laboratories, and technology enterprises
                are invited to partner with INSA in building Ethiopia&apos;s
                quantum ecosystem.
              </p>
            </div>

            <Link
              to="/contact"
              className="shrink-0 bg-[#00a8e8] hover:bg-[#0284c7] text-white px-8 py-4 rounded-lg font-semibold transition shadow-md"
            >
              Partner With Us &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;