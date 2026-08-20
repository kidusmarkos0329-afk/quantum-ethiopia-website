import {
  FaFlagUsa,
  FaUniversity,
  FaMicrochip,
  FaGlobeAfrica,
} from "react-icons/fa";

function GlobalLandscape() {
  const countries = [
    {
      country: "United States",
      investment: "$15B+",
      leader: "IBM • Google • Microsoft • Amazon",
      strength: "Superconducting Quantum Computing",
    },
    {
      country: "China",
      investment: "$15B+",
      leader: "USTC • Baidu • Origin Quantum",
      strength: "Quantum Communication & Hardware",
    },
    {
      country: "Canada",
      investment: "$1B+",
      leader: "D-Wave • Xanadu",
      strength: "Quantum Software & Photonics",
    },
    {
      country: "Germany",
      investment: "$3B+",
      leader: "Fraunhofer • IQM",
      strength: "European Quantum Programs",
    },
    {
      country: "United Kingdom",
      investment: "$4B+",
      leader: "Oxford • Cambridge • Riverlane",
      strength: "Quantum Research & Startups",
    },
    {
      country: "Japan",
      investment: "$2B+",
      leader: "Fujitsu • NEC • Toshiba",
      strength: "Quantum Hardware & Communication",
    },
  ];

  return (
    <section
      id="landscape"
      className="bg-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-cyan-400 text-sm">
            Global Landscape
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Global Quantum Ecosystem
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-9">
            Countries around the world are investing heavily in quantum
            computing, communications, sensing and post-quantum security.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {countries.map((country) => (
            <div
              key={country.country}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >

              <div className="flex items-center gap-4 mb-8">

                <FaFlagUsa className="text-cyan-400 text-4xl" />

                <div>

                  <h3 className="text-3xl font-bold">
                    {country.country}
                  </h3>

                  <p className="text-cyan-400 mt-1">
                    Investment: {country.investment}
                  </p>

                </div>

              </div>

              <div className="space-y-6">

                <div className="flex gap-4">

                  <FaUniversity className="text-cyan-400 mt-1" />

                  <div>

                    <h4 className="font-semibold text-lg">
                      Major Organizations
                    </h4>

                    <p className="text-slate-400">
                      {country.leader}
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <FaMicrochip className="text-cyan-400 mt-1" />

                  <div>

                    <h4 className="font-semibold text-lg">
                      Primary Focus
                    </h4>

                    <p className="text-slate-400">
                      {country.strength}
                    </p>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-24 bg-cyan-500 rounded-3xl p-12 text-slate-950">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="max-w-3xl">

              <div className="flex items-center gap-4">

                <FaGlobeAfrica className="text-5xl" />

                <h3 className="text-4xl font-bold">
                  Ethiopia's Opportunity
                </h3>

              </div>

              <p className="mt-8 text-lg leading-9">
                By investing in research, education, national collaboration and
                international partnerships today, Ethiopia can build a strong
                foundation for future quantum technologies across Africa.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GlobalLandscape;