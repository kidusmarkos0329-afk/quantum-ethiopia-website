import { FaAtom, FaGraduationCap, FaUniversity, FaShieldAlt } from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaAtom />,
      title: "Research",
      text: "Promoting national quantum computing research and collaboration.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      text: "Developing quantum education and training across Ethiopian universities.",
    },
    {
      icon: <FaUniversity />,
      title: "Collaboration",
      text: "Connecting academia, government, industry and international partners.",
    },
    {
      icon: <FaShieldAlt />,
      title: "National Capacity",
      text: "Preparing Ethiopia for future quantum technologies and post-quantum security.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-4xl mx-auto">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            About
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Quantum Ethiopia Initiative
          </h2>

          <p className="mt-8 text-slate-300 text-lg leading-9">
            Quantum Ethiopia is a national initiative led by the Information
            Network Security Administration (INSA) to advance quantum computing,
            quantum communication, quantum cryptography, research, education,
            innovation and strategic collaboration. The initiative aims to build
            a national ecosystem connecting universities, researchers,
            government institutions, industry and international partners while
            preparing Ethiopia for the next generation of computing.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >
              <div className="text-cyan-400 text-4xl mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-slate-400 leading-8">
                {card.text}
              </p>
            </div>
          ))}

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          <div className="bg-cyan-500 rounded-3xl p-10 text-slate-950">
            <h3 className="text-3xl font-bold">
              Mission
            </h3>

            <p className="mt-6 leading-8">
              Accelerate Ethiopia's quantum research ecosystem by supporting
              education, innovation, strategic collaboration and national
              capacity building.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10">
            <h3 className="text-3xl font-bold text-cyan-400">
              Vision
            </h3>

            <p className="mt-6 text-slate-400 leading-8">
              Position Ethiopia as one of Africa's leading contributors in
              quantum science and emerging technologies.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10">
            <h3 className="text-3xl font-bold text-cyan-400">
              Goals
            </h3>

            <ul className="mt-6 text-slate-400 leading-8 space-y-3">
              <li>• Build national quantum expertise.</li>
              <li>• Support university research.</li>
              <li>• Create a national research repository.</li>
              <li>• Strengthen international collaboration.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;