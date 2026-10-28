function Roadmap() {
  const roadmap = [
    {
      year: "2026",
      phase: "Phase I",
      title: "National Initiative Launch",
      description:
        "Launch the Quantum Ethiopia Initiative under INSA, establish strategic governance, initiate national awareness programs, and formalize university working groups.",
    },
    {
      year: "2027",
      phase: "Phase II",
      title: "Education & Capacity Building",
      description:
        "Develop standardized university quantum curricula, train graduate researchers, and host national quantum workshops and winter schools.",
    },
    {
      year: "2028",
      phase: "Phase III",
      title: "Research Ecosystem Expansion",
      description:
        "Expand inter-university research collaborations, establish shared simulation laboratories, and scale the Ethiopian Quantum Research Repository.",
    },
    {
      year: "2030",
      phase: "Phase IV",
      title: "Industrial & Cryptographic Deployment",
      description:
        "Execute post-quantum cryptography transitions across critical national infrastructure and pilot quantum optimization in finance, logistics, and agriculture.",
    },
    {
      year: "2035",
      phase: "Phase V",
      title: "Regional Leadership",
      description:
        "Position Ethiopia as one of Africa's foremost quantum research and innovation hubs through sustained investment and talent development.",
    },
  ];

  return (
    <section
      id="roadmap"
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-32 lg:py-40 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <span className="uppercase tracking-[3.5px] text-[var(--insa-accent)] text-xs font-semibold">
            National Timeline
          </span>

          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-5">
            Ethiopia Quantum Roadmap (2026–2035)
          </h2>

          <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            A phased ten-year framework for cultivating national quantum
            research, cryptographic resilience, and academic excellence.
          </p>
        </div>

        <div className="mt-24 border-t border-[var(--border-color)]">
          {roadmap.map((item) => (
            <div
              key={item.year}
              className="py-12 border-b border-[var(--border-color)] grid md:grid-cols-12 gap-8 items-baseline"
            >
              <div className="md:col-span-3 flex items-baseline gap-4">
                <span className="font-serif-heading text-4xl font-bold text-[var(--insa-accent)]">
                  {item.year}
                </span>
                <span className="text-xs uppercase tracking-[2px] text-[var(--text-muted)] font-semibold">
                  {item.phase}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="font-serif-heading text-2xl font-bold text-[var(--text-primary)]">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
