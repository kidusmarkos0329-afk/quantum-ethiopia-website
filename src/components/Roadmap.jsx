import {
  FaRocket,
  FaGraduationCap,
  FaFlask,
  FaIndustry,
  FaGlobeAfrica,
} from "react-icons/fa";

function Roadmap() {
  const roadmap = [
    {
      year: "2026",
      icon: <FaRocket />,
      title: "National Initiative",
      description:
        "Launch the Quantum Ethiopia Initiative, establish strategic direction, begin national awareness programs and initiate collaboration with universities and international partners.",
    },
    {
      year: "2027",
      icon: <FaGraduationCap />,
      title: "Education & Capacity Building",
      description:
        "Develop university curricula, train researchers, organize workshops, seminars and national quantum education programs.",
    },
    {
      year: "2028",
      icon: <FaFlask />,
      title: "Research Ecosystem",
      description:
        "Expand research collaborations, publish national research, establish shared laboratories and strengthen the Ethiopian Quantum Research Repository.",
    },
    {
      year: "2030",
      icon: <FaIndustry />,
      title: "Industrial Applications",
      description:
        "Promote industry collaboration in quantum computing, cybersecurity, finance, healthcare, logistics and agriculture.",
    },
    {
      year: "2035",
      icon: <FaGlobeAfrica />,
      title: "Regional Leadership",
      description:
        "Position Ethiopia as one of Africa's leading quantum research and innovation hubs through sustained investment, collaboration and talent development.",
    },
  ];

  return (
    <section
      id="roadmap"
      className="bg-slate-950 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-cyan-400 text-sm">
            Roadmap
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Ethiopia Quantum Roadmap
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-9">
            A long-term roadmap for developing quantum research, education,
            collaboration and national capability.
          </p>

        </div>

        <div className="relative mt-24">

          <div className="absolute left-8 top-0 bottom-0 w-1 bg-cyan-500 hidden md:block"></div>

          <div className="space-y-14">

            {roadmap.map((item) => (
              <div
                key={item.year}
                className="relative flex flex-col md:flex-row gap-8"
              >

                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500 text-slate-950 text-2xl font-bold shrink-0">
                  {item.icon}
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 w-full hover:border-cyan-400 transition duration-300">

                  <span className="text-cyan-400 text-lg font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-3xl font-bold mt-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 mt-6 leading-8">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Roadmap;