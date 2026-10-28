function About() {
  const pillars = [
    {
      index: "01",
      title: "Research",
      text: "Promoting national quantum computing, cryptography, and photonic research across Ethiopian institutions.",
    },
    {
      index: "02",
      title: "Education",
      text: "Developing graduate curricula, laboratory training, and foundational quantum coursework across Ethiopian universities.",
    },
    {
      index: "03",
      title: "Collaboration",
      text: "Connecting academia, government agencies, industry innovators, and international scientific partners.",
    },
    {
      index: "04",
      title: "National Capacity",
      text: "Preparing Ethiopia's critical infrastructure for emerging quantum technologies and post-quantum security standards.",
    },
  ];

  const goals = [
    "Build sovereign national quantum expertise and technical workforce.",
    "Support inter-university theoretical and applied quantum research.",
    "Maintain a centralized Ethiopian Quantum Research Repository.",
    "Strengthen international research and policy collaboration.",
  ];

  return (
    <section
      id="about"
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-32 lg:py-40 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-[var(--insa-accent)] uppercase tracking-[3.5px] text-xs font-semibold">
              About the Initiative
            </span>

            <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-5 leading-tight">
              Quantum Ethiopia Initiative
            </h2>

            <div className="w-16 h-1 bg-[var(--insa-accent)] mt-6"></div>

            <p className="mt-8 text-[var(--text-secondary)] text-lg leading-relaxed">
              Quantum Ethiopia is a national initiative led by the Information
              Network Security Administration (INSA) to advance quantum
              computing, quantum communication, quantum cryptography, research,
              education, innovation, and strategic collaboration.
            </p>

            <p className="mt-6 text-[var(--text-secondary)] text-base leading-relaxed">
              The initiative establishes a cohesive national ecosystem connecting
              universities, researchers, government institutions, industry, and
              international partners while preparing Ethiopia for the next
              generation of secure computing.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-[var(--border-color)]">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="py-8 border-b border-[var(--border-color)] flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10"
              >
                <div className="sm:w-48 shrink-0 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[var(--insa-accent)] font-semibold">
                    {pillar.index}
                  </span>
                  <h3 className="font-serif-heading text-2xl font-bold text-[var(--text-primary)]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-28 pt-16 border-t border-[var(--border-color)] grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="border-l-2 border-[var(--insa-accent)] pl-6">
            <span className="text-xs uppercase tracking-[3px] text-[var(--insa-accent)] font-semibold">
              01 / Mandate
            </span>
            <h3 className="font-serif-heading text-3xl font-bold mt-2">
              Mission
            </h3>
            <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
              Accelerate Ethiopia&apos;s quantum research ecosystem by supporting
              education, innovation, strategic collaboration, and national
              capacity building under INSA&apos;s strategic framework.
            </p>
          </div>

          <div className="border-l-2 border-[var(--insa-accent)] pl-6">
            <span className="text-xs uppercase tracking-[3px] text-[var(--insa-accent)] font-semibold">
              02 / Direction
            </span>
            <h3 className="font-serif-heading text-3xl font-bold mt-2">
              Vision
            </h3>
            <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
              Position Ethiopia as one of Africa&apos;s leading contributors in
              quantum science, resilient cryptography, and emerging computation.
            </p>
          </div>

          <div className="border-l-2 border-[var(--insa-accent)] pl-6">
            <span className="text-xs uppercase tracking-[3px] text-[var(--insa-accent)] font-semibold">
              03 / Objectives
            </span>
            <h3 className="font-serif-heading text-3xl font-bold mt-2">
              Strategic Goals
            </h3>
            <ul className="mt-5 text-[var(--text-secondary)] space-y-3 list-disc list-inside leading-relaxed">
              {goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


src/components/WhyQuantum.jsx

Delete the whole src/components/WhyQuantum.jsx and paste this whole code:

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
