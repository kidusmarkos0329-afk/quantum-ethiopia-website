import {
  FaMicrochip,
  FaCode,
  FaShieldAlt,
  FaSatellite,
  FaAtom,
  FaProjectDiagram,
} from "react-icons/fa";

function Research() {
  const researchAreas = [
    {
      icon: <FaMicrochip />,
      title: "Quantum Hardware",
      description:
        "Research on superconducting, trapped-ion, photonic, neutral atom and silicon-based quantum processors.",
    },
    {
      icon: <FaCode />,
      title: "Quantum Algorithms",
      description:
        "Development of algorithms including Grover, Shor, QAOA, VQE and optimization techniques.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Post-Quantum Cryptography",
      description:
        "Preparing secure cryptographic systems resistant to future quantum attacks.",
    },
    {
      icon: <FaSatellite />,
      title: "Quantum Communication",
      description:
        "Quantum key distribution, quantum internet and secure communication technologies.",
    },
    {
      icon: <FaAtom />,
      title: "Quantum Simulation",
      description:
        "Simulation of molecules, materials and physical systems beyond classical capabilities.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "National Applications",
      description:
        "Applying quantum technologies to healthcare, agriculture, finance, logistics and national security.",
    },
  ];

  return (
    <section
      id="research"
      className="bg-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-cyan-400 text-sm">
            Research Areas
          </span>

          <h2 className="text-5xl font-bold mt-5">
            National Quantum Research Focus
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-9">
            The Quantum Ethiopia initiative supports strategic research areas
            that strengthen national capability, academic collaboration and
            future technological innovation.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-cyan-400 text-5xl mb-6">
                {area.icon}
              </div>

              <h3 className="text-2xl font-bold mb-5">
                {area.title}
              </h3>

              <p className="text-slate-400 leading-8">
                {area.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Research;