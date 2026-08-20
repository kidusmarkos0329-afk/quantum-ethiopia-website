import {
  FaUniversity,
  FaGlobe,
  FaAtom,
  FaHandshake,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Partners() {
  const partners = [
    {
      icon: <FaAtom />,
      name: "IBM Quantum",
      type: "Quantum Computing Platform",
    },
    {
      icon: <FaGlobe />,
      name: "Global Quantum Organizations",
      type: "International Collaboration",
    },
    {
      icon: <FaUniversity />,
      name: "Ethiopian Universities",
      type: "Research & Education Partners",
    },
    {
      icon: <FaHandshake />,
      name: "Industry Partners",
      type: "Technology Innovation",
    },
  ];

  return (
    <section
      id="partners"
      className="bg-slate-950 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-cyan-400 text-sm">
            Partners
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Collaboration Ecosystem
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-9">
            Advancing quantum technologies requires collaboration between
            universities, research institutions, government organizations,
            industry and international technology leaders.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-cyan-400 text-5xl flex justify-center mb-6">
                {partner.icon}
              </div>

              <h3 className="text-xl font-bold">
                {partner.name}
              </h3>

              <p className="text-slate-400 mt-4">
                {partner.type}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-20 bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">

          <h3 className="text-4xl font-bold">
            Become a Quantum Partner
          </h3>

          <p className="text-slate-400 text-lg mt-6 max-w-3xl mx-auto leading-8">
            Universities, researchers, organizations and technology companies
            are invited to collaborate in building Ethiopia's quantum
            ecosystem.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-cyan-500 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition"
          >
            Partner With Us
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Partners;