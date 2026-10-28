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
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-32 lg:py-40 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <span className="uppercase tracking-[3.5px] text-[var(--insa-accent)] text-xs font-semibold">
            Latest Updates
          </span>

          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-5">
            News &amp; Announcements
          </h2>

          <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            Official bulletins, symposium schedules, and research announcements
            from the Quantum Ethiopia Initiative.
          </p>
        </div>

        <div className="mt-20 border-t-2 border-[var(--text-primary)] divide-y divide-[var(--border-color)]">
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
