import { Link } from "react-router-dom";

function News() {
  const news = [
    {
      date: "August 2026",
      category: "Official Launch",
      title: "Quantum Ethiopia Initiative Launch",
      description:
        "The Information Network Security Administration (INSA) launches the Quantum Ethiopia Initiative to strengthen national research, education, and collaboration in quantum technologies.",
      href: "/about",
    },
    {
      date: "Upcoming",
      category: "Academic Symposium",
      title: "National Quantum Workshop",
      description:
        "Researchers, Ethiopian universities, and industry partners will convene in Addis Ababa to align on curriculum design and collaborative research priorities.",
      href: "/contact",
    },
    {
      date: "Open for Submissions",
      category: "National Archive",
      title: "Ethiopian Quantum Research Repository",
      description:
        "A centralized digital repository for Ethiopian quantum research papers, MSc/PhD theses, technical reports, standards, and educational resources is now accepting direct submissions.",
      href: "/repository",
    },
  ];

  return (
    <section
      id="news"
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
            Latest Updates
          </span>
          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-4 text-white">
            News &amp; Announcements
          </h2>
          <p className="mt-5 text-lg text-slate-200 leading-relaxed max-w-3xl">
            Official bulletins, symposium schedules, and research announcements
            from the Quantum Ethiopia Initiative.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-16">
        <div className="border-t-2 border-[var(--text-primary)] divide-y divide-[var(--border-color)]">
          {news.map((item) => (
            <article
              key={item.title}
              className="py-12 grid lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-3">
                <p className="font-mono text-sm font-semibold text-[var(--insa-accent)]">
                  {item.date}
                </p>
                <p className="text-xs uppercase tracking-[2px] text-[var(--text-muted)] mt-1">
                  {item.category}
                </p>
              </div>

              <div className="lg:col-span-6">
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
                  {item.description}
                </p>
              </div>

              <div className="lg:col-span-3 lg:text-right pt-2">
                <Link
                  to={item.href}
                  className="inline-block text-sm font-semibold text-[var(--insa-accent)] hover:underline"
                >
                  Read Announcement &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;