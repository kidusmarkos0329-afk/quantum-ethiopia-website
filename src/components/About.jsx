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
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] pb-28 lg:pb-36 border-b border-[var(--border-subtle)]"
    >
      {/* Visual Section Header Banner */}
      <div
        className="relative bg-[#0a2540] bg-cover bg-center text-white pt-28 pb-20 lg:py-24 border-b border-[#1e3a5f]"
        style={{ backgroundImage: "url('/quantum-repository-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#07192e]/95 via-[#0a2540]/85 to-[#0a2540]/65" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <span className="text-[#38bdf8] uppercase tracking-[3.5px] text-xs font-semibold">
            About the Initiative
          </span>
          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-4 text-white">
            Quantum Ethiopia Initiative
          </h2>
          <p className="mt-5 text-slate-200 text-lg leading-relaxed max-w-3xl">
            Quantum Ethiopia is a national initiative led by the Information
            Network Security Administration (INSA) to advance quantum computing,
            quantum communication, quantum cryptography, research, education,
            and strategic collaboration across Ethiopia.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h3 className="font-serif-heading text-3xl font-bold text-[var(--text-primary)]">
              National Mandate &amp; Ecosystem
            </h3>
            <div className="w-16 h-1 bg-[var(--insa-accent)] mt-4"></div>
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
                className="py-7 border-b border-[var(--border-color)] flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10"
              >
                <div className="sm:w-48 shrink-0 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[var(--insa-accent)] font-semibold">
                    {pillar.index}
                  </span>
                  <h4 className="font-serif-heading text-2xl font-bold text-[var(--text-primary)]">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission / Vision / Goals Banner with Quantum Background */}
        <div
          className="relative mt-24 rounded-2xl overflow-hidden bg-[#0a2540] bg-cover bg-center p-10 sm:p-14 text-white shadow-xl"
          style={{ backgroundImage: "url('/quantum-hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#07192e]/88" />
          <div className="relative z-10 grid lg:grid-cols-3 gap-12">
            <div className="border-l-2 border-[#38bdf8] pl-6">
              <span className="text-xs uppercase tracking-[3px] text-[#38bdf8] font-semibold">
                01 / Mandate
              </span>
              <h3 className="font-serif-heading text-2xl font-bold mt-2 text-white">
                Mission
              </h3>
              <p className="mt-4 text-slate-200 text-sm leading-relaxed">
                Accelerate Ethiopia&apos;s quantum research ecosystem by
                supporting education, innovation, strategic collaboration, and
                national capacity building under INSA&apos;s strategic framework.
              </p>
            </div>

            <div className="border-l-2 border-[#38bdf8] pl-6">
              <span className="text-xs uppercase tracking-[3px] text-[#38bdf8] font-semibold">
                02 / Direction
              </span>
              <h3 className="font-serif-heading text-2xl font-bold mt-2 text-white">
                Vision
              </h3>
              <p className="mt-4 text-slate-200 text-sm leading-relaxed">
                Position Ethiopia as one of Africa&apos;s leading contributors in
                quantum science, resilient cryptography, and emerging
                computation.
              </p>
            </div>

            <div className="border-l-2 border-[#38bdf8] pl-6">
              <span className="text-xs uppercase tracking-[3px] text-[#38bdf8] font-semibold">
                03 / Objectives
              </span>
              <h3 className="font-serif-heading text-2xl font-bold mt-2 text-white">
                Strategic Goals
              </h3>
              <ul className="mt-4 text-slate-200 text-sm space-y-2.5 list-disc list-inside leading-relaxed">
                {goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;