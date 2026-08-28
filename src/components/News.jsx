import {
  FaArrowRight,
  FaCalendarAlt,
  FaNewspaper,
} from "react-icons/fa";

function News() {
  const news = [
    {
      date: "August 2026",
      title: "Quantum Ethiopia Initiative Launch",
      description:
        "The Information Network Security Administration (INSA) launches the Quantum Ethiopia Initiative to strengthen national research, education and collaboration in quantum technologies.",
    },
    {
      date: "Coming Soon",
      title: "National Quantum Workshop",
      description:
        "Researchers, universities and industry partners will gather to discuss Ethiopia's quantum ecosystem and future research opportunities.",
    },
    {
      date: "Coming Soon",
      title: "Ethiopian Quantum Research Repository",
      description:
        "A centralized repository for Ethiopian quantum research papers, theses, reports, standards and educational resources.",
    },
  ];

  return (
    <section
      id="news"
      className="bg-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-cyan-400 text-sm">
            Latest News
          </span>

          <h2 className="text-5xl font-bold mt-5">
            News & Announcements
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-9">
            Stay updated with the latest developments, events,
            research announcements and national quantum initiatives.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {news.map((item) => (
            <div
              key={item.title}
              className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <div className="h-52 bg-gradient-to-br from-cyan-500/30 to-blue-700/30 flex items-center justify-center">

                <FaNewspaper className="text-7xl text-cyan-400" />

              </div>

              <div className="p-8">

                <div className="flex items-center gap-3 text-cyan-400">

                  <FaCalendarAlt />

                  <span>{item.date}</span>

                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-8 mt-5">
                  {item.description}
                </p>

                <button className="mt-8 flex items-center gap-3 text-cyan-400 font-semibold hover:gap-5 transition-all">

                  Read More

                  <FaArrowRight />

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default News;