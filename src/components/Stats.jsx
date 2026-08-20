import { FaGlobe, FaUniversity, FaDollarSign, FaRocket } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaGlobe />,
      number: "190+",
      title: "Countries",
      subtitle: "Researching Quantum",
    },
    {
      icon: <FaUniversity />,
      number: "1000+",
      title: "Research",
      subtitle: "Institutions Worldwide",
    },
    {
      icon: <FaDollarSign />,
      number: "$40B+",
      title: "Global",
      subtitle: "Investment",
    },
    {
      icon: <FaRocket />,
      number: "2035",
      title: "Expected",
      subtitle: "Industry Boom",
    },
  ];

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.number}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-10 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-cyan-400 text-5xl flex justify-center mb-6">
                {stat.icon}
              </div>

              <h2 className="text-5xl font-extrabold text-white">
                {stat.number}
              </h2>

              <h3 className="text-xl font-semibold text-cyan-400 mt-5">
                {stat.title}
              </h3>

              <p className="text-slate-400 mt-2">
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