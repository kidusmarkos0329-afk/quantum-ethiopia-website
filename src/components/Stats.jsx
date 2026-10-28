function Stats() {
  const stats = [
    {
      number: "190+",
      title: "Countries",
      subtitle: "Engaged in National Quantum Research",
    },
    {
      number: "1,000+",
      title: "Institutions",
      subtitle: "Academic & National Laboratories Worldwide",
    },
    {
      number: "$40B+",
      title: "Global Commitment",
      subtitle: "Public & Strategic Quantum Investment",
    },
    {
      number: "2035",
      title: "Strategic Horizon",
      subtitle: "Projected Fault-Tolerant Industry Maturity",
    },
  ];

  return (
    <section className="bg-[#0a2540] text-white border-b border-[#1e3a5f] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/80">
          {stats.map((stat, idx) => (
            <div
              key={stat.number}
              className={`py-8 sm:py-4 ${
                idx === 0
                  ? "sm:pr-8"
                  : idx === stats.length - 1
                  ? "sm:pl-8"
                  : "sm:px-8"
              }`}
            >
              <p className="text-xs uppercase tracking-[3px] text-[#38bdf8] font-semibold">
                {stat.title}
              </p>
              <h2 className="font-serif-heading text-5xl font-bold text-white mt-3">
                {stat.number}
              </h2>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;