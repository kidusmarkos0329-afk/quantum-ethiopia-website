import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="uppercase tracking-[3.5px] text-[var(--insa-accent)] text-xs font-semibold">
              Contact INSA
            </span>

            <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold mt-5 leading-tight">
              Connect With Quantum Ethiopia
            </h2>

            <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
              Researchers, universities, government institutions, and
              international organizations can contact the Information Network
              Security Administration (INSA) to collaborate on Ethiopia&apos;s
              quantum technology ecosystem.
            </p>

            <dl className="mt-12 space-y-6 border-t border-[var(--border-color)] pt-8">
              <div>
                <dt className="text-xs uppercase tracking-[2px] text-[var(--insa-accent)] font-semibold">
                  Official Email
                </dt>
                <dd className="text-lg font-medium text-[var(--text-primary)] mt-1">
                  quantum@insa.gov.et • contact@insa.gov.et
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-[2px] text-[var(--insa-accent)] font-semibold">
                  Telephone
                </dt>
                <dd className="text-lg font-medium text-[var(--text-primary)] mt-1">
                  +251-113-71-71-14
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-[2px] text-[var(--insa-accent)] font-semibold">
                  Headquarters Address
                </dt>
                <dd className="text-lg font-medium text-[var(--text-primary)] mt-1">
                  Welo Sefer, China Street, Addis Ababa, Ethiopia
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 sm:p-12 shadow-sm">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold">
              Send an Institutional Inquiry
            </h3>

            {sent ? (
              <div className="mt-8 p-6 rounded-lg bg-[var(--insa-badge-bg)] border border-[var(--insa-accent)]/40">
                <h4 className="font-serif-heading text-xl font-bold text-[var(--text-primary)]">
                  Message Received
                </h4>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Thank you for contacting the Quantum Ethiopia Initiative at
                  INSA. Our coordination desk will respond shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-[var(--insa-accent)] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@institution.edu.et"
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Organization / University
                    </label>
                    <input
                      type="text"
                      placeholder="Addis Ababa University"
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    required
                    placeholder="Describe your research collaboration or inquiry..."
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3.5 outline-none focus:border-[var(--insa-accent)] text-[var(--text-primary)]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--btn-primary-bg)] text-white py-4 rounded-lg font-semibold hover:opacity-95 transition shadow-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
