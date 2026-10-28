function GlobalLandscape() {
  const countries = [
    {
      country: "United States",
      investment: "$15B+",
      leader: "IBM • Google • Microsoft • Amazon",
      strength: "Superconducting & Trapped-Ion Quantum Computing",
    },
    {
      country: "China",
      investment: "$15B+",
      leader: "USTC • Baidu • Origin Quantum",
      strength: "Satellite Quantum Communication & Photonic Hardware",
    },
    {
      country: "United Kingdom",
      investment: "$4B+",
      leader: "Oxford • Cambridge • Riverlane",
      strength: "Quantum Software, Error Correction & Startups",
    },
    {
      country: "Germany",
      investment: "$3B+",
      leader: "Fraunhofer • IQM • Max Planck Society",
      strength: "Industrial Quantum Integration & Cryogenics",
    },
    {
      country: "Japan",
      investment: "$2B+",
      leader: "Fujitsu • NEC • Toshiba • RIKEN",
      strength: "Quantum Annealing, Hardware & Secure Networks",
    },
    {
      country: "Canada",
      investment: "$1B+",
      leader: "D-Wave • Xanadu • Institute for Quantum Computing",
      strength: "Photonic Quantum Computing & Algorithms",
    },
  ];

  return (
    <section
      id="landscape"
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
            Global Landscape
          </span>
          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-4 text-white">
            Global Quantum Ecosystem
          </h2>
          <p className="mt-5 text-lg text-slate-200 leading-relaxed max-w-3xl">
            Leading economies are committing billions in public funding to
            secure sovereign capabilities in quantum computation, sensing, and
            post-quantum cryptography.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-16">
        {/* Clean Comparative Table */}
        <div className="overflow-x-auto bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--border-color)] bg-[var(--bg-subtle)] text-xs uppercase tracking-wider text-[var(--text-primary)]">
                <th className="py-5 px-6 font-semibold">Country</th>
                <th className="py-5 px-6 font-semibold">
                  Estimated Public Commitment
                </th>
                <th className="py-5 px-6 font-semibold">
                  Key Research &amp; Industry Anchors
                </th>
                <th className="py-5 px-6 font-semibold">
                  Primary Strategic Focus
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)] text-sm sm:text-base">
              {countries.map((item) => (
                <tr
                  key={item.country}
                  className="hover:bg-[var(--bg-primary)]/60 transition"
                >
                  <td className="py-6 px-6 font-serif-heading font-bold text-lg text-[var(--text-primary)] whitespace-nowrap">
                    {item.country}
                  </td>
                  <td className="py-6 px-6 font-mono font-semibold text-[var(--insa-accent)] whitespace-nowrap">
                    {item.investment}
                  </td>
                  <td className="py-6 px-6 text-[var(--text-secondary)]">
                    {item.leader}
                  </td>
                  <td className="py-6 px-6 text-[var(--text-secondary)]">
                    {item.strength}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Strategic Callout with Quantum Hero Background */}
        <div
          className="relative mt-24 rounded-2xl overflow-hidden bg-[#0a2540] bg-cover bg-center p-10 sm:p-14 text-white shadow-xl"
          style={{ backgroundImage: "url('/quantum-hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#07192e]/85" />
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[3px] text-[#38bdf8] font-semibold">
              Continental Positioning
            </span>
            <h3 className="font-serif-heading text-3xl sm:text-4xl font-bold mt-2 text-white">
              Ethiopia&apos;s Strategic Opportunity
            </h3>
            <p className="mt-5 text-lg text-slate-200 leading-relaxed max-w-4xl">
              By coordinating academic research, cryptographic readiness, and
              international partnerships today under INSA, Ethiopia can
              establish a premier East African hub for quantum talent,
              post-quantum security, and scientific innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalLandscape;