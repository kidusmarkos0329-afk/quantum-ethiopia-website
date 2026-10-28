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
            Research Areas
          </span>
          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-4 text-white">
            National Quantum Research Focus
          </h2>
          <p className="mt-5 text-lg text-slate-200 leading-relaxed max-w-3xl">
            The Quantum Ethiopia initiative supports six strategic research
            pillars that strengthen national capability, university
            collaboration, and long-term technological sovereignty.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-16">
        <div className="border-t-2 border-[var(--text-primary)]">
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