import {
  FaLock,
  FaBrain,
  FaMicrochip,
  FaSatelliteDish,
  FaChartLine,
  FaFlask,
} from "react-icons/fa";

function WhyQuantum() {
  const features = [
    {
      icon: <FaMicrochip />,
      title: "Quantum Computing",
      text: "Solve computational problems beyond the reach of classical computers.",
    },
    {
      icon: <FaLock />,
      title: "Quantum Cryptography",
      text: "Enable secure communication and prepare for the post-quantum era.",
    },
    {
      icon: <FaBrain />,
      title: "Artificial Intelligence",
      text: "Accelerate optimization and machine learning using quantum algorithms.",
    },
    {
      icon: <FaSatelliteDish />,
      title: "Quantum Communication",
      text: "Build next-generation communication infrastructure with quantum networks.",
    },
    {
      icon: <FaChartLine />,
      title: "Optimization",
      text: "Improve logistics, finance, scheduling and resource allocation problems.",
    },
    {
      icon: <FaFlask />,
      title: "Scientific Discovery",
      text: "Advance chemistry, materials science and pharmaceutical research.",
    },
  ];

  return (
    <section
      id="why-quantum"
      className="bg-slate-950 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-cyan-400 text-sm">
            Why Quantum
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Why Quantum Computing Matters
          </h2>

          <p className="mt-8 text-slate-300 text-lg leading-9">
            Quantum technologies are expected to transform cybersecurity,
            scientific research, artificial intelligence, healthcare,
            communications and national digital infrastructure.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-cyan-400 text-5xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-5">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-8">
                {feature.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyQuantum;