import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="uppercase tracking-[4px] text-cyan-400 text-sm">
              Contact
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Connect With Quantum Ethiopia
            </h2>

            <p className="mt-8 text-lg text-slate-300 leading-9">
              Researchers, universities, institutions and organizations can
              connect with us to contribute research, collaborate and support
              Ethiopia's quantum technology ecosystem.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-5">

                <div className="bg-cyan-500/20 p-4 rounded-xl">
                  <FaEnvelope className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-slate-400">
                    quantum@insa.gov.et
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-5">

                <div className="bg-cyan-500/20 p-4 rounded-xl">
                  <FaPhone className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-slate-400">
                    +251 XXX XXX XXX
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-5">

                <div className="bg-cyan-500/20 p-4 rounded-xl">
                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Location
                  </h3>

                  <p className="text-slate-400">
                    Addis Ababa, Ethiopia
                  </p>
                </div>

              </div>

            </div>

          </div>


          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10">

            <h3 className="text-3xl font-bold">
              Send a Message
            </h3>


            <div className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />


              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />


              <input
                type="text"
                placeholder="Organization / University"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />


              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              ></textarea>


              <button className="w-full bg-cyan-500 text-slate-950 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-cyan-400 transition">

                Send Message

                <FaPaperPlane />

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;