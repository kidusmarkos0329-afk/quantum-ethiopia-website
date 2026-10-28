function Research() {
  const researchAreas = [
    {
      code: "RQ-01",
      title: "Quantum Hardware",
      focus: "Processors & Physical Qubits",
      description:
        "Research on superconducting, trapped-ion, photonic, neutral atom, and silicon-based quantum processors.",
    },
    {
      code: "RQ-02",
      title: "Quantum Algorithms",
      focus: "Foundational & Hybrid Computation",
      description:
        "Development and benchmarking of Grover, Shor, QAOA, VQE, and domain-specific quantum optimization techniques.",
    },
    {
      code: "RQ-03",
      title: "Post-Quantum Cryptography",
      focus: "National Cyber Resilience",
      description:
        "Designing and auditing lattice-based, hash-based, and code-based cryptographic systems resistant to quantum attacks.",
    },
    {
      code: "RQ-04",
      title: "Quantum Communication",
      focus: "Secure Networks & QKD",
      description:
        "Quantum key distribution (QKD), entanglement distribution, and secure national communication protocols.",
    },
    {
      code: "RQ-05",
      title: "Quantum Simulation",
      focus: "Materials & Quantum Optics",
      description:
        "Simulation of three-level laser dynamics, optical nanoinclusions, molecules, and physical systems beyond classical limits.",
    },
    {
      code: "RQ-06",
      title: "National Applications",
      focus: "Sectoral Deployment",
      description:
        "Applying quantum technologies to Ethiopian healthcare, agriculture, finance, logistics, and national security.",
    },
  ];

  return (
    <section
      id="research"
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-32 lg:py-40 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <span className="uppercase tracking-[3.5px] text-[var(--insa-accent)] text-xs font-semibold">
            Research Areas
          </span>

          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-5">
            National Quantum Research Focus
          </h2>

          <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            The Quantum Ethiopia initiative supports six strategic research
            pillars that strengthen national capability, university
            collaboration, and long-term technological sovereignty.
          </p>
        </div>

        <div className="mt-20 border-t-2 border-[var(--text-primary)]">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="py-10 border-b border-[var(--border-color)] grid lg:grid-cols-12 gap-6 items-baseline hover:bg-[var(--bg-secondary)]/60 transition px-4 -mx-4"
            >
              <div className="lg:col-span-2">
                <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-[var(--insa-badge-bg)] text-[var(--insa-badge-text)] font-semibold">
                  {area.code}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-serif-heading text-2xl font-bold text-[var(--text-primary)]">
                  {area.title}
                </h3>
                <p className="text-xs uppercase tracking-[2px] text-[var(--text-muted)] mt-1.5 font-medium">
                  {area.focus}
                </p>
              </div>

              <div className="lg:col-span-6">
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;