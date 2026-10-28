
function WhyQuantum() {
  const features = [
    {
      index: "01",
      title: "Quantum Computing",
      text: "Solve complex computational simulations and linear systems beyond the practical reach of classical supercomputers.",
    },
    {
      index: "02",
      title: "Quantum Cryptography",
      text: "Safeguard national communications infrastructure and transition critical systems to post-quantum cryptographic standards.",
    },
    {
      index: "03",
      title: "Artificial Intelligence",
      text: "Accelerate high-dimensional optimization and machine learning workloads through hybrid quantum-classical algorithms.",
    },
    {
      index: "04",
      title: "Quantum Communication",
      text: "Build tamper-evident next-generation communication channels leveraging quantum key distribution (QKD).",
    },
    {
      index: "05",
      title: "Complex Optimization",
      text: "Enhance national logistics, power grid distribution, financial modeling, and strategic resource allocation.",
    },
    {
      index: "06",
      title: "Scientific Discovery",
      text: "Advance molecular modeling, agricultural chemistry, climate resilience, and pharmaceutical research.",
    },
  ];

  return (
    <section
      id="why-quantum"
      className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-32 lg:py-40 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <span className="uppercase tracking-[3.5px] text-[var(--insa-accent)] text-xs font-semibold">
            Why Quantum
          </span>

          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-5">
            Why Quantum Computing Matters
          </h2>

          <p className="mt-6 text-[var(--text-secondary)] text-lg leading-relaxed">
            Quantum technologies are reshaping cybersecurity, scientific
            research, artificial intelligence, healthcare, communications, and
            sovereign digital infrastructure.
          </p>
        </div>

        <div className="mt-20 border-t border-[var(--border-color)] grid md:grid-cols-2 gap-x-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="py-10 border-b border-[var(--border-color)] flex gap-6 items-start"
            >
              <span className="font-mono text-sm font-semibold text-[var(--insa-accent)] pt-1.5">
                {feature.index}
              </span>
              <div>
                <h3 className="font-serif-heading text-2xl font-bold text-[var(--text-primary)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] mt-3 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyQuantum;
