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
      className="bg-[var(--bg-secondary)] text-[var(--text-primary)] pb-28 lg:pb-36 border-b border-[var(--border-subtle)]"
    >
      {/* Visual Header Banner */}
      <div
        className="relative bg-[#0a2540] bg-cover bg-center text-white pt-28 pb-20 lg:py-24 border-b border-[#1e3a5f]"
        style={{ backgroundImage: "url('/quantum-hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#07192e]/95 via-[#0a2540]/85 to-[#0a2540]/65" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <span className="uppercase tracking-[3.5px] text-[#38bdf8] text-xs font-semibold">
            Why Quantum
          </span>
          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-4 text-white">
            Why Quantum Computing Matters
          </h2>
          <p className="mt-5 text-slate-200 text-lg leading-relaxed max-w-3xl">
            Quantum technologies are reshaping cybersecurity, scientific
            research, artificial intelligence, healthcare, communications, and
            sovereign digital infrastructure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-16">
        <div className="border-t border-[var(--border-color)] grid md:grid-cols-2 gap-x-16">
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