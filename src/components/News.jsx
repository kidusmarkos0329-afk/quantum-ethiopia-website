import {
  FaArrowRight,
  FaCalendarAlt,
  FaNewspaper,
  FaSpinner,
} from "react-icons/fa";

import { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const rssUrl =
          "https://news.google.com/rss/search?q=quantum%20computing&hl=en-US&gl=US&ceid=US:en";

        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            rssUrl
          )}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await response.json();

        if (data.status !== "ok") {
          throw new Error("RSS feed error");
        }

        const formattedNews = data.items.slice(0, 6).map((item) => ({
          title: item.title,
          description:
            item.description
              ?.replace(/<[^>]*>/g, "")
              .replace(/&nbsp;/g, " ")
              .substring(0, 180) + "...",
          date: new Date(item.pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          link: item.link,
        }));

        setNews(formattedNews);
      } catch (err) {
        console.error("News error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section
      id="news"
      className="bg-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-cyan-400 text-sm">
            Latest News
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Quantum Computing News
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-9">
            Stay updated with the latest developments, research,
            breakthroughs and announcements in quantum computing.
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <div className="flex flex-col items-center justify-center py-24">

            <FaSpinner className="text-cyan-400 text-4xl animate-spin" />

            <p className="text-slate-400 mt-5">
              Loading latest quantum news...
            </p>

          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="text-center py-20">

            <FaNewspaper className="text-5xl text-cyan-400 mx-auto" />

            <h3 className="text-2xl font-bold mt-6">
              Unable to load news
            </h3>

            <p className="text-slate-400 mt-3">
              Please try again later.
            </p>

          </div>
        )}

        {/* News */}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {news.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition duration-300 flex flex-col"
              >

                {/* Image / Icon */}

                <div className="h-52 bg-gradient-to-br from-cyan-500/30 to-blue-700/30 flex items-center justify-center">

                  <FaNewspaper className="text-7xl text-cyan-400" />

                </div>

                {/* Content */}

                <div className="p-8 flex flex-col flex-1">

                  <div className="flex items-center gap-3 text-cyan-400 text-sm">

                    <FaCalendarAlt />

                    <span>{item.date}</span>

                  </div>

                  <h3 className="text-2xl font-bold mt-6 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-7 mt-5 flex-1">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex items-center gap-3 text-cyan-400 font-semibold hover:gap-5 transition-all"
                  >
                    Read Full Article
                    <FaArrowRight />
                  </a>

                </div>

              </article>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default News;